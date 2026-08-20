import type { Metadata } from "next";

import { LOCATIONS } from "@/data/locations";
import { REGIONS_ORDER } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { LocationCard } from "@/components/shared/location-card";
import { FinalCta } from "@/components/sections/final-cta";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "Areas We Cover" },
  description: `Media Walls North installs bespoke media walls in ${LOCATIONS.length} cities across Greater Manchester, Cheshire, Lancashire, Yorkshire, and the North East. Find your city.`,
  alternates: { canonical: "/areas-we-cover" },
};

export default function AreasWeCoverPage() {
  const regions = REGIONS_ORDER.map((region) => ({
    region,
    locations: LOCATIONS.filter((l) => l.region === region),
  })).filter((r) => r.locations.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Our Coverage"
        title={`Media Walls Across ${LOCATIONS.length} Cities in Northern England`}
        description="From our Manchester base, we design and install bespoke media walls across Greater Manchester, Cheshire, Lancashire, Merseyside, Cumbria, Yorkshire, and the North East."
        image={STOCK.fireplaceMarbleBuiltIn}
        breadcrumbs={<Breadcrumbs items={[{ name: "Areas We Cover", href: "/areas-we-cover" }]} />}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-body">
            Being based in Manchester means we can visit much of our coverage
            area within an hour, keeping quotes fast and follow-up visits
            straightforward. For cities further afield, from Yorkshire to the
            North East, we schedule dedicated route days so the standard of
            design attention and finish never drops. Whether you are in a
            Victorian terrace in Chorlton, a stone cottage in Saddleworth, or
            a Georgian townhouse in Harrogate, we bring the same design-led,
            joinery-standard approach to every project. Choose your city
            below for local projects, reviews, and coverage details.
          </p>
        </div>
      </section>

      {regions.map(({ region, locations }, i) => (
        <section key={region} className={i % 2 === 0 ? "bg-background-alt py-16 sm:py-20" : "bg-background py-16 sm:py-20"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={`${locations.length} ${locations.length === 1 ? "city" : "cities"}`}
              title={region}
              className="mb-10"
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {locations.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <FinalCta />
    </>
  );
}
