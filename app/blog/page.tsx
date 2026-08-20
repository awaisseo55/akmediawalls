import type { Metadata } from "next";

import { BLOG_POSTS } from "@/data/blog";
import { getAdminBlogPosts } from "@/lib/admin-store";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogCard } from "@/components/shared/blog-card";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "Media Wall Ideas & Guides | Blog" },
  description:
    "Design inspiration, cost guides, and expert tips for your media wall project. Written by our installation team.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60;

export default async function BlogPage() {
  const adminPosts = await getAdminBlogPosts();
  const posts = [...adminPosts, ...BLOG_POSTS];

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Design Inspiration & Guides"
        description="Practical advice on designing, costing, and installing a media wall, from a team that builds them every week."
        image={STOCK.slattedWoodTexture}
        breadcrumbs={<Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
