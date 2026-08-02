import { NextResponse } from "next/server";

import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { upsertAdminBlogPost, uploadImage } from "@/lib/admin-store";
import type { BlogPost } from "@/lib/types";

const CATEGORIES: BlogPost["category"][] = [
  "Design Ideas",
  "Cost Guides",
  "Installation Tips",
  "Home Improvement",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
  const category = String(formData.get("category") || "") as BlogPost["category"];
  const excerpt = String(formData.get("excerpt") || "").trim();
  const metaDescription = String(formData.get("metaDescription") || "").trim();
  const bodyText = String(formData.get("content") || "").trim();
  const author = String(formData.get("author") || "Media Walls North Team").trim();
  const image = formData.get("image");

  if (
    !title ||
    !CATEGORIES.includes(category) ||
    !excerpt ||
    !bodyText ||
    !(image instanceof File) ||
    image.size === 0
  ) {
    return NextResponse.json(
      { success: false, error: "Please fill in title, category, excerpt, content, and a cover image." },
      { status: 400 }
    );
  }

  const imageUrl = await uploadImage(image, "blog-uploads");

  const content = bodyText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const wordCount = bodyText.split(/\s+/).length;

  const today = new Date().toISOString().slice(0, 10);

  const post: BlogPost = {
    slug: slugify(title),
    title,
    metaTitle: `${title} | Media Walls North`,
    category,
    excerpt,
    metaDescription: metaDescription || excerpt,
    image: imageUrl || "",
    date: today,
    lastUpdated: today,
    readingTime: `${Math.max(1, Math.round(wordCount / 200))} min read`,
    author,
    content,
    relatedServiceSlugs: [],
    relatedLocationSlugs: [],
    faqs: [],
  };

  await upsertAdminBlogPost(post);

  return NextResponse.json({ success: true, slug: post.slug });
}
