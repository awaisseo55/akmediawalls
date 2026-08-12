import { list, put } from "@vercel/blob";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

import type { BlogPost, GalleryItem } from "@/lib/types";

const LOCAL_DIR = path.join(process.cwd(), ".data");
const hasBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

export type Settings = {
  phone: string;
  email: string;
  serviceAreas: string[];
};

async function readCollection<T>(key: string, fallback: T): Promise<T> {
  if (hasBlob) {
    const { blobs } = await list({ prefix: key });
    const match = blobs.find((b) => b.pathname === key);
    if (!match) return fallback;
    const res = await fetch(match.url, { cache: "no-store" });
    return (await res.json()) as T;
  }

  try {
    const raw = await readFile(path.join(LOCAL_DIR, key), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeCollection<T>(key: string, data: T): Promise<void> {
  if (hasBlob) {
    await put(key, JSON.stringify(data, null, 2), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });
    return;
  }

  const filePath = path.join(LOCAL_DIR, key);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getAdminGalleryItems(): Promise<GalleryItem[]> {
  return readCollection<GalleryItem[]>("admin/gallery.json", []);
}

export async function addAdminGalleryItem(item: GalleryItem): Promise<void> {
  const items = await getAdminGalleryItems();
  items.unshift(item);
  await writeCollection("admin/gallery.json", items);
}

export async function getAdminBlogPosts(): Promise<BlogPost[]> {
  return readCollection<BlogPost[]>("admin/blog.json", []);
}

export async function upsertAdminBlogPost(post: BlogPost): Promise<void> {
  const posts = await getAdminBlogPosts();
  const index = posts.findIndex((p) => p.slug === post.slug);
  if (index >= 0) posts[index] = post;
  else posts.unshift(post);
  await writeCollection("admin/blog.json", posts);
}

const DEFAULT_SETTINGS: Settings = {
  phone: process.env.BUSINESS_PHONE || "07511 786571",
  email: process.env.CONTACT_EMAIL || "contact@mediawallsnorth.co.uk",
  serviceAreas: [
    "Manchester", "Preston", "Bolton", "Warrington", "Stockport", "Wigan",
    "Oldham", "Rochdale", "Salford", "Bury", "Tameside", "Liverpool",
  ],
};

export async function getSettings(): Promise<Settings> {
  return readCollection<Settings>("admin/settings.json", DEFAULT_SETTINGS);
}

export async function updateSettings(settings: Settings): Promise<void> {
  await writeCollection("admin/settings.json", settings);
}

export async function uploadImage(file: File, prefix: string): Promise<string> {
  if (hasBlob) {
    const blob = await put(`${prefix}/${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    return blob.url;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
  await writeFile(path.join(uploadsDir, filename), buffer);
  return `/uploads/${filename}`;
}
