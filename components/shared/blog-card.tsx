import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-warm-lg">
      <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge variant="forest" className="w-fit">
          {post.category}
        </Badge>
        <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-muted">
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
      </div>
    </Card>
  );
}
