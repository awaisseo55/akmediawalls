import type { Metadata } from "next";
import Link from "next/link";

import { SERVICES } from "@/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServiceCard } from "@/components/shared/service-card";
import { FinalCta } from "@/components/sections/final-cta";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Media Wall Services | Manchester & the North West",
  description:
    "Explore our media wall services: fireplace media walls, acoustic walls, TV mounting with concealed wiring, and commercial slatted wood walls.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="Our Media Wall Services"
        description="Four bespoke services, each designed around your room and installed to a joinery standard by our qualified Manchester-based team."
        image={STOCK.openPlanWoodFeatureWall}
        breadcrumbs={<Breadcrumbs items={[{ name: "Services", href: "/services" }]} />}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} large />
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-body">
            Not sure which service is right for your home? {" "}
            <Link href="/contact" className="font-semibold text-brass underline underline-offset-4">
              Get in touch
            </Link>{" "}
            for a free, no-obligation consultation and we will recommend the best approach for your room and budget.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
