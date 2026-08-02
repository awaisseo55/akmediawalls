import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { SERVICES, getServiceBySlug } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { SITE_URL } from "@/lib/constants";
import { getIcon } from "@/lib/icon-map";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { ServiceJsonLd } from "@/components/shared/json-ld";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const url = `${SITE_URL}/services/${service.slug}`;

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.metaDescription} url={url} />
      <PageHero
        eyebrow="AK Media Walls Service"
        title={service.name}
        description={service.tagline}
        image={service.heroImage}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.shortName, href: `/services/${service.slug}` },
            ]}
          />
        }
      >
        <Button asChild size="lg" className="mt-4 w-fit">
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </PageHero>

      {/* Introduction */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            {service.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Features"
            title="Features & Benefits"
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((f) => {
              const Icon = getIcon(f.icon);
              return (
                <div key={f.title} className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-warm">
                  <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Options"
            title="Materials & Finishes"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.materials.map((m) => (
              <div key={m.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-warm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{m.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title={`Our Process for ${service.shortName}`}
            align="center"
            className="mx-auto mb-14"
          />
          <div className="flex flex-col gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="flex gap-5 rounded-lg border border-border bg-card p-6 shadow-warm">
                <span className="font-serif text-3xl font-semibold text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-muted">{service.timeline}</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment"
            title="Pricing Guide"
            align="center"
            className="mx-auto mb-10"
          />
          <Card className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-hover">
              Prices from
            </p>
            <p className="mt-2 font-serif text-5xl font-semibold text-foreground">
              &pound;{service.pricingFrom.toLocaleString()}
            </p>
            <p className="mt-4 text-sm text-muted">
              What affects the final price:
            </p>
            <ul className="mx-auto mt-4 flex max-w-lg flex-col gap-2 text-left">
              {service.pricingFactors.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-body">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get Your Exact Price</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">Use Our Cost Calculator</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent Work"
            title="Portfolio Examples"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {service.portfolioImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-warm">
                <div className="relative h-64 w-full">
                  <Image
                    src={img.image}
                    alt={img.caption}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="bg-card p-4 text-sm text-body">{img.caption}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="You May Also Like"
            title="Related Services"
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-lg border border-border bg-card p-6 shadow-warm transition-shadow hover:shadow-warm-lg"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title={`${service.shortName} FAQs`} />

      {/* Areas served */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title={`Areas We Serve for ${service.shortName}`}
            align="center"
            className="mx-auto mb-8"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/areas/${l.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-body transition-colors hover:border-primary hover:text-primary"
              >
                {l.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={`Ready to Start Your ${service.shortName} Project?`}
        description="Book a free, no-obligation consultation and we will visit your home to design and quote your bespoke media wall."
      />
    </>
  );
}
