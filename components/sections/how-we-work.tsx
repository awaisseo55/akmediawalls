import { ClipboardCheck, PenTool, ShieldCheck, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Free Consultation",
    description: "We visit your home, discuss your vision, and take precise measurements of your room.",
  },
  {
    icon: PenTool,
    title: "Bespoke Design",
    description: "A custom design proposal based on your space, your style, and your budget, with no fixed templates.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Skilled craftsmen complete the work to a joinery standard with minimum disruption to your home.",
  },
  {
    icon: ShieldCheck,
    title: "10 Year Guarantee",
    description: "Full workmanship guarantee on every project, so you can enjoy your new media wall with confidence.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From First Visit to Finished Wall"
          title="Our Process"
          align="center"
          className="mx-auto mb-16"
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-forest/10 text-primary">
                  <step.icon className="size-5" />
                </span>
                <span className="font-serif text-2xl font-semibold text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
