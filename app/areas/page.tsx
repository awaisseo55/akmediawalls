import type { Metadata } from "next";

import { LOCATIONS } from "@/data/locations";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LocationCard } from "@/components/shared/location-card";
import { FinalCta } from "@/components/sections/final-cta";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Areas We Cover | Media Walls Across the North West",
  description:
    "Media Walls North installs bespoke media walls across Greater Manchester, Lancashire, Cheshire, and Merseyside. Find your local media wall specialist.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Coverage"
        title="Media Walls Across the North West"
        description="From our Manchester base, we design and install bespoke media walls throughout Greater Manchester, Lancashire, Cheshire, and Merseyside."
        image={STOCK.fireplaceMarbleBuiltIn}
        breadcrumbs={<Breadcrumbs items={[{ name: "Areas Covered", href: "/areas" }]} />}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-body">
            Being based in Manchester means we can visit most of our coverage
            area within an hour, keeping quotes fast and follow-up visits
            straightforward. Whether you are in a Victorian terrace in
            Chorlton, a new-build estate in Warrington, or a stone cottage in
            Saddleworth, we bring the same design-led, joinery-standard
            approach to every project. Choose your city below for local
            projects, reviews, and coverage details.
          </p>
        </div>
      </section>

      <section className="bg-background-alt pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
