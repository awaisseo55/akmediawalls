import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { BUSINESS } from "@/lib/constants";
import { STOCK } from "@/lib/images";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FinalCta } from "@/components/sections/final-cta";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | Craftsmen You Can Trust",
  description:
    "Meet the team behind AK Media Walls, a Manchester family business specialising in bespoke media wall design and installation across the North West.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: HeartHandshake, title: "Honest advice, every time", description: "We tell you what your room actually needs, not what is easiest to sell. If a media wall is not the right fit, we will say so." },
  { icon: Award, title: "Joinery-standard finish", description: "Every media wall is built with the same care and attention as fitted furniture, not a quick stud-and-board job." },
  { icon: ShieldCheck, title: "Fully qualified, fully insured", description: "Every electrician and joiner on our team is qualified and certified, backed by full public liability insurance." },
  { icon: Sparkles, title: "Designed around your home", description: "No fixed templates. Every design starts with a home visit and is built around your room, not a catalogue photo." },
];

const TEAM = [
  { name: "Muhammad Awais", role: "Founder & Managing Director", bio: "Started AK Media Walls after years of seeing generic, poorly finished media walls across the North West. Oversees every project from first consultation to final handover." },
  { name: "Daniel R.", role: "Lead Carpenter", bio: "Over a decade of joinery experience, responsible for the structural build and finish quality on every media wall we install." },
  { name: "Sam K.", role: "Qualified Electrician", bio: "Handles all electrical first fix work, fire installation, and LED lighting, ensuring every project meets current UK wiring regulations." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Craftsmen You Can Trust"
        description="A Manchester family business built on honest advice, careful craftsmanship, and media walls that are designed to last."
        image={STOCK.fireplaceMarbleBuiltIn}
        breadcrumbs={<Breadcrumbs items={[{ name: "About", href: "/about" }]} />}
      />

      {/* Owner story */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
              How We Started
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Built on a simple frustration
            </h2>
            <p className="leading-relaxed text-body">
              AK Media Walls was founded by Muhammad Awais after one too many
              conversations with homeowners who had been quoted a high price
              for a media wall that turned out to be a flat-pack unit
              screwed to the wall, cables and all left in plain sight.
            </p>
            <p className="leading-relaxed text-body">
              We started with a simple idea: build media walls the way good
              fitted furniture is built, properly measured, properly
              designed, and finished so well that nobody could tell where
              the original wall ended and the new structure began. That
              standard has not changed as we have grown to cover Manchester
              and the wider North West.
            </p>
            <p className="leading-relaxed text-body">
              Every project is still personally reviewed before it goes
              ahead, and we would rather turn down a job that is not right
              for a customer&rsquo;s home than build something we would not
              be proud to put our name to.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg shadow-warm-lg lg:h-full">
            <Image
              src={STOCK.heroWoodPanelMediaWall}
              alt="A finished bespoke media wall installed by AK Media Walls"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-warm">
                <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-primary">
                  <v.icon className="size-5" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-body">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The People Behind the Build"
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name} className="flex flex-col items-center gap-3 p-8 text-center">
                <div className="flex size-24 items-center justify-center rounded-full bg-forest/10 font-serif text-3xl font-semibold text-primary">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-hover">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-body">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Peace of Mind"
            title="Credentials & Our Promise"
            align="center"
            className="mx-auto mb-10"
          />
          <Card className="p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Fully insured</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Every project is covered by full public liability insurance, and all electrical work is carried out or supervised by a qualified electrician certified to UK wiring regulations.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">10 year guarantee</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Every media wall we build is covered by a full 10 year workmanship guarantee, alongside manufacturer warranties on fires and electrical components.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Free consultation</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Every quote starts with a free, no-obligation home visit, so you know exactly what you are getting before committing to anything.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">Local and accountable</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Based in {BUSINESS.addressLocality}, we are a phone call away long after your installation is complete, not a name you never hear from again.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Photo tour */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Look at Our Work"
            title="Recent Installations"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              STOCK.fireplaceSlattedInset,
              STOCK.slattedWoodTvFloatingShelf,
              STOCK.tvMountWoodConsole,
              STOCK.fireplaceMarbleBuiltIn,
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg shadow-warm">
                <Image src={img} alt="AK Media Walls installation" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
