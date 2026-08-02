import Image from "next/image";
import Link from "next/link";

import { GALLERY } from "@/data/gallery";
import { PortfolioPlaceholder } from "@/components/shared/portfolio-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function RecentProjects() {
  const items = GALLERY.slice(0, 6);

  return (
    <section className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Recent Installations"
            description="A selection of our latest work across Manchester and the North West."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative block aspect-square overflow-hidden rounded-lg shadow-warm"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PortfolioPlaceholder />
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-sm font-medium text-white">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
