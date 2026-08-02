import type { Metadata } from "next";
import { Check, CreditCard, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { CostCalculator } from "@/components/pricing/cost-calculator";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Card } from "@/components/ui/card";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: "Media Wall Pricing Guide & Cost Calculator",
  description:
    "How much does a media wall cost? Use our interactive calculator and pricing guide to get an estimate for your Manchester or North West project.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    name: "Standard",
    range: "£800 – £1,500",
    description: "A great entry point for a clean, well-finished media wall.",
    features: [
      "Painted MDF finish in your choice of colour",
      "Wall-mounted or compact inset electric fire",
      "Concealed cabling for TV and fire",
      "Single floating shelf or simple storage",
    ],
  },
  {
    name: "Mid-Range",
    range: "£1,500 – £2,500",
    description: "Our most popular tier, balancing premium finish with value.",
    features: [
      "Oak or walnut veneer, or painted MDF with detailing",
      "Inset electric fire with a wider model choice",
      "Custom shelving and soft-close storage",
      "Dimmable LED accent lighting",
    ],
    featured: true,
  },
  {
    name: "Premium",
    range: "£2,500 – £4,000+",
    description: "Full floor-to-ceiling, showcase-standard media walls.",
    features: [
      "Solid oak or walnut slats, or marble-effect panelling",
      "Premium inset fire with widest range of flame effects",
      "Full-height design with bespoke storage layout",
      "Multi-zone LED lighting and acoustic treatment",
    ],
  },
];

const PRICE_FACTORS = [
  "Size of the wall (small, medium, or large)",
  "Whether a fireplace is included, and which model",
  "Material and finish (painted MDF, veneer, solid wood slats, or stone/marble-effect)",
  "Acoustic treatment and LED lighting",
  "Bespoke storage, shelving, or display niches",
  "Any electrical upgrades needed to your existing supply",
];

const FAQS = [
  { question: "Is the calculator price exact?", answer: "No, it is a guide based on typical projects. Your exact price depends on your room, wall condition, and final design, which we confirm at a free home visit." },
  { question: "Do you charge for quotes?", answer: "No, every quote starts with a free, no-obligation home visit and a detailed written breakdown." },
  { question: "Does the price change depending on which city I am in?", answer: "No, we price based on the size, materials, and complexity of the project rather than location, so a media wall costs the same whether you are in Manchester or Liverpool." },
  { question: "Do you offer payment plans?", answer: "We can discuss staged payments for larger projects, with a deposit to secure your installation date and the balance due on completion." },
  { question: "Is VAT included in these prices?", answer: "Yes, all prices shown include VAT where applicable. Your written quote will always show a clear, final figure." },
  { question: "What is included in the 10 year guarantee?", answer: "Our guarantee covers the workmanship of the build itself. Electrical components and electric fires carry their own manufacturer warranties, which we will explain fully at your quote." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Know Before You Book"
        title="Media Wall Pricing Guide"
        description="Media wall pricing is always bespoke, but here is a clear guide to what you can expect to pay, plus an interactive calculator for an instant estimate."
        image={STOCK.tvMountWhiteConsole}
        breadcrumbs={<Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Pricing Tiers"
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col gap-5 p-8 ${tier.featured ? "border-2 border-primary shadow-warm-lg" : ""}`}
              >
                {tier.featured && (
                  <span className="w-fit rounded-full bg-forest px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-foreground">{tier.name}</h3>
                <p className="font-serif text-3xl font-semibold text-primary">{tier.range}</p>
                <p className="text-sm text-body">{tier.description}</p>
                <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-body">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Understanding Your Quote"
            title="What Affects the Price"
            align="center"
            className="mx-auto mb-10"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PRICE_FACTORS.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-warm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-body">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="flex flex-col gap-4 p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent-hover">
                <CreditCard className="size-5" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">Financing Options</h3>
              <p className="text-sm leading-relaxed text-body">
                For larger projects, we can agree a staged payment plan: a
                deposit to secure your installation date, a payment at the
                start of works, and the balance on completion. Speak to us
                during your quote to arrange a plan that suits your budget.
              </p>
            </Card>
            <Card className="flex flex-col gap-4 p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-primary">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">Our Guarantee</h3>
              <p className="text-sm leading-relaxed text-body">
                Every media wall we build is covered by a full 10 year
                workmanship guarantee. If anything is not right, we will put
                it right, no quibbles. Electrical components and fires also
                carry their own manufacturer warranties.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS} title="Pricing FAQs" />

      <FinalCta />
    </>
  );
}
