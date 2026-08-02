import { list, put } from "@vercel/blob";
import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  postcode: string;
  service: string;
  preferredContact: string;
  message: string;
  photoUrl?: string;
  createdAt: string;
};

const LOCAL_DIR = path.join(process.cwd(), ".data", "leads");
const hasBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

async function ensureLocalDir() {
  await mkdir(LOCAL_DIR, { recursive: true });
}

export async function saveLead(lead: Lead) {
  const key = `leads/${lead.createdAt.replace(/[:.]/g, "-")}-${lead.id}.json`;

  if (hasBlob) {
    await put(key, JSON.stringify(lead, null, 2), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });
    return;
  }

  await ensureLocalDir();
  await writeFile(
    path.join(LOCAL_DIR, `${lead.createdAt.replace(/[:.]/g, "-")}-${lead.id}.json`),
    JSON.stringify(lead, null, 2)
  );
}

export async function getLeads(): Promise<Lead[]> {
  if (hasBlob) {
    const { blobs } = await list({ prefix: "leads/" });
    const leads = await Promise.all(
      blobs.map(async (b) => {
        const res = await fetch(b.url);
        return (await res.json()) as Lead;
      })
    );
    return leads.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }

  try {
    await ensureLocalDir();
    const files = await readdir(LOCAL_DIR);
    const leads = await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (f) => JSON.parse(await readFile(path.join(LOCAL_DIR, f), "utf-8")) as Lead)
    );
    return leads.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } catch {
    return [];
  }
}

export async function uploadLeadPhoto(file: File): Promise<string | undefined> {
  if (!hasBlob) return undefined;
  const blob = await put(`uploads/${Date.now()}-${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });
  return blob.url;
}
