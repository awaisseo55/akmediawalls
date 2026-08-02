import Link from "next/link";

import { LOCATIONS } from "@/data/locations";
import { SectionHeading } from "@/components/shared/section-heading";
import { LocationCard } from "@/components/shared/location-card";
import { Button } from "@/components/ui/button";

export function AreasCovered() {
  return (
    <section className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Greater Manchester & the North West"
          title="Where We Work"
          description="From our Manchester base, we install bespoke media walls across the whole North West region."
          align="center"
          className="mx-auto mb-14"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/areas">View All Areas Covered</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
