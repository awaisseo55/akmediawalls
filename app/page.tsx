import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { LocalBusinessJsonLd } from "@/components/shared/json-ld";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { RecentProjects } from "@/components/sections/recent-projects";
import { HowWeWork } from "@/components/sections/how-we-work";
import { AreasCovered } from "@/components/sections/areas-covered";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Media Wall Installation Manchester & North West England",
  description:
    "Bespoke media wall design and installation across Manchester and the North West. Fireplace media walls, acoustic walls, TV mounting. Free quotes, 10 year guarantee.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AK Media Walls | Bespoke Media Wall Installation, Manchester",
    description:
      "Bespoke media wall design and installation across Manchester and the North West. Free quotes, 10 year guarantee.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd url={SITE_URL} />
      <HomeHero />
      <TrustBar />
      <ServicesOverview />
      <RecentProjects />
      <HowWeWork />
      <AreasCovered />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
