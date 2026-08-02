import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { getAdminBlogPosts } from "@/lib/admin-store";
import { SITE_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ArticleJsonLd } from "@/components/shared/json-ld";
import { BlogCard } from "@/components/shared/blog-card";
import { FinalCta } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

async function findPost(slug: string) {
  const staticPost = getBlogPostBySlug(slug);
  if (staticPost) return staticPost;
  const adminPosts = await getAdminBlogPosts();
  return adminPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={url}
        image={post.image}
        datePublished={post.date}
        author={post.author}
      />

      <section className="bg-background pb-4 pt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
      </section>

      <article className="bg-background pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Badge variant="forest">{post.category}</Badge>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <span>{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg shadow-warm-lg sm:h-96">
            <Image src={post.image} alt={post.title} fill priority sizes="768px" className="object-cover" />
          </div>

          <div className="mt-10 flex flex-col gap-5">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                  {block}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            More From the Journal
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/blog" className="font-semibold text-primary underline underline-offset-4">
              View all articles
            </Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
