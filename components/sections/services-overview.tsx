import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { FadeIn } from "@/components/shared/fade-in";

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Our Craft"
          description="Four bespoke media wall services, each designed and installed to a joinery standard, from concept through to a finished, guaranteed installation."
          align="center"
          className="mx-auto mb-14"
        />
        <FadeIn delay={0.1} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} large />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
