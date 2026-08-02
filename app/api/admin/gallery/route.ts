import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { addAdminGalleryItem, uploadImage } from "@/lib/admin-store";
import type { GalleryStyle } from "@/lib/types";

const VALID_STYLES: GalleryStyle[] = ["fireplace", "acoustic", "tv-mount", "slatted-wood", "commercial"];

export async function POST(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const title = String(formData.get("title") || "").trim();
  const style = String(formData.get("style") || "") as GalleryStyle;
  const location = String(formData.get("location") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const timeline = String(formData.get("timeline") || "").trim();
  const image = formData.get("image");

  if (!title || !VALID_STYLES.includes(style) || !location || !(image instanceof File) || image.size === 0) {
    return NextResponse.json(
      { success: false, error: "Please provide a title, style, location, and image." },
      { status: 400 }
    );
  }

  const imageUrl = await uploadImage(image, "gallery-uploads");

  await addAdminGalleryItem({
    id: randomUUID(),
    title,
    style,
    location,
    image: imageUrl,
    description: description || title,
    timeline: timeline || "Recently completed",
  });

  return NextResponse.json({ success: true });
}
