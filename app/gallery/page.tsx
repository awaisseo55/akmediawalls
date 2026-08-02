import type { Metadata } from "next";
import Link from "next/link";

import { GALLERY } from "@/data/gallery";
import { SERVICES } from "@/data/services";
import { getAdminGalleryItems } from "@/lib/admin-store";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Media Wall Gallery | Manchester Portfolio",
  description:
    "Browse our portfolio of bespoke media walls installed across Manchester and the North West. Filter by style and location.",
  alternates: { canonical: "/gallery" },
};

export const revalidate = 60;

export default async function GalleryPage() {
  const adminItems = await getAdminGalleryItems();
  const items = [...adminItems, ...GALLERY];

  return (
    <>
      <PageHero
        eyebrow="See Our Work"
        title="Our Portfolio"
        description="A growing collection of fireplace media walls, acoustic feature walls, TV mounting projects, and commercial fit-outs across the North West."
        image={STOCK.slattedWoodLedCove}
        breadcrumbs={<Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={items} />
          <p className="mx-auto mt-14 max-w-2xl text-center text-body">
            Read more about each style on our service pages:{" "}
            {SERVICES.map((s, i) => (
              <span key={s.slug}>
                <Link href={`/services/${s.slug}`} className="font-semibold text-brass hover:underline">
                  {s.shortName}
                </Link>
                {i < SERVICES.length - 1 ? (i === SERVICES.length - 2 ? ", and " : ", ") : ""}
              </span>
            ))}
            . Or see what a project like this typically costs on our{" "}
            <Link href="/pricing" className="font-semibold text-brass hover:underline">
              pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
