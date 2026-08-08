import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { LocalBusinessJsonLd, OrganizationJsonLd } from "@/components/shared/json-ld";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { RecentProjects } from "@/components/sections/recent-projects";
import { VideoShowcase } from "@/components/shared/video-showcase";
import { HowWeWork } from "@/components/sections/how-we-work";
import { AreasCovered } from "@/components/sections/areas-covered";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: { absolute: "Media Walls North | Bespoke Installation, Manchester & N. England" },
  description:
    "Bespoke media wall design and installation from Manchester to cities across Northern England. Fireplace walls, acoustic panels, TV mounting. Free quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Media Walls North | Bespoke Installation, Manchester & N. England",
    description:
      "Bespoke media wall design and installation from Manchester to cities across Northern England. Free quotes, 10 year guarantee.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd url={SITE_URL} />
      <HomeHero />
      <TrustBar />
      <ServicesOverview />
      <RecentProjects />
      <VideoShowcase />
      <HowWeWork />
      <AreasCovered />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
