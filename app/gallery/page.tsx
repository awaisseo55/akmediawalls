import type { Metadata } from "next";

import { GALLERY } from "@/data/gallery";
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
        </div>
      </section>

      <FinalCta />
    </>
  );
}
