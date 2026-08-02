import { Award, Gem, HeartHandshake, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const REASONS = [
  {
    icon: HeartHandshake,
    title: "Local Manchester family business",
    description: "Founded and run in Manchester, with a reputation built on referrals and repeat customers across the North West.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured, all trades qualified",
    description: "Every electrician and joiner on our team is qualified and certified, and every project is covered by full public liability insurance.",
  },
  {
    icon: Award,
    title: "10 year workmanship guarantee",
    description: "We stand behind every media wall we build with a full 10 year guarantee on workmanship, not just materials.",
  },
  {
    icon: Gem,
    title: "Premium materials as standard",
    description: "From solid oak slats to fire-rated MDF and marble-effect panels, we specify quality materials on every project, not just the showcase ones.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Homeowners Choose Us"
          title="Why Choose AK Media Walls"
          align="center"
          className="mx-auto mb-14"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-warm">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent-hover">
                <reason.icon className="size-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-body">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
