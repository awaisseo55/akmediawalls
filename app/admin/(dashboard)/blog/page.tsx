import Link from "next/link";

import { BLOG_POSTS } from "@/data/blog";
import { getAdminBlogPosts } from "@/lib/admin-store";
import { BlogPostForm } from "@/components/admin/blog-post-form";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const adminPosts = await getAdminBlogPosts();
  const allPosts = [...adminPosts, ...BLOG_POSTS];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Blog</h1>
        <p className="mt-1 text-body">{allPosts.length} published articles.</p>
      </div>

      <BlogPostForm />

      <Card className="p-6">
        <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">All Posts</h2>
        <div className="flex flex-col divide-y divide-border">
          {allPosts.map((post) => (
            <div key={post.slug} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div>
                <Link href={`/blog/${post.slug}`} target="_blank" className="font-medium text-foreground hover:text-brass">
                  {post.title}
                </Link>
                <p className="text-xs text-muted">{post.date}</p>
              </div>
              <Badge variant="forest">{post.category}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
