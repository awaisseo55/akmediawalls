import { NextResponse } from "next/server";

import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { updateSettings } from "@/lib/admin-store";

export async function POST(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const serviceAreas = String(body.serviceAreas || "")
    .split(",")
    .map((a: string) => a.trim())
    .filter(Boolean);

  if (!phone || !email) {
    return NextResponse.json(
      { success: false, error: "Phone and email are required." },
      { status: 400 }
    );
  }

  await updateSettings({ phone, email, serviceAreas });

  return NextResponse.json({ success: true });
}
