import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, Star } from "lucide-react";

import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { GALLERY } from "@/data/gallery";
import { BLOG_POSTS } from "@/data/blog";
import { MEDIA_WALL_STYLES } from "@/data/media-wall-styles";
import { SITE_URL } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { LocalBusinessJsonLd } from "@/components/shared/json-ld";
import { PortfolioPlaceholder } from "@/components/shared/portfolio-placeholder";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/areas/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_URL}/areas/${location.slug}`,
      images: [{ url: location.heroImage }],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const url = `${SITE_URL}/areas/${location.slug}`;
  const relevantGallery = GALLERY.filter(
    (g) => g.location === location.city || location.areasCovered.includes(g.location)
  ).slice(0, 6);
  const portfolio = relevantGallery.length > 0 ? relevantGallery : GALLERY.slice(0, 3);
  const neighbours = location.neighbouringLocations
    .map((s) => LOCATIONS.find((l) => l.slug === s))
    .filter((l): l is (typeof LOCATIONS)[number] => Boolean(l));
  const relatedPosts = BLOG_POSTS.slice(0, 2);

  return (
    <>
      <LocalBusinessJsonLd location={location} url={url} />
      <PageHero
        eyebrow={location.region}
        title={`Media Wall Installation in ${location.city}`}
        description={`Bespoke media wall design and installation for homes and businesses across ${location.city}, from our Manchester base.`}
        image={location.heroImage}
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Areas Covered", href: "/areas" },
              { name: location.city, href: `/areas/${location.slug}` },
            ]}
          />
        }
      >
        <Button asChild size="lg" className="mt-4 w-fit">
          <Link href="/contact">Get Your Free Quote in {location.city}</Link>
        </Button>
      </PageHero>

      {/* Introduction */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            {location.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services offered - now with per-service linked paragraphs */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work Here"
            title={`Our Media Wall Services in ${location.city}`}
            align="center"
            className="mx-auto mb-12"
          />
          <div className="flex flex-col gap-5">
            {location.servicesIntro.map((s) => {
              const service = getServiceBySlug(s.serviceSlug);
              if (!service) return null;
              return (
                <div key={s.serviceSlug} className="rounded-lg border border-border bg-card p-6 shadow-warm">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    <Link href={`/services/${service.slug}`} className="hover:text-brass">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.paragraph}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-body transition-colors hover:border-brass hover:text-brass"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us - prose + bullets */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`Local to ${location.city}`}
            title={`Why ${location.city} Homeowners Choose Media Walls North`}
            align="center"
            className="mx-auto mb-10"
          />
          <div className="flex flex-col gap-5">
            {location.whyChooseParagraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {location.whyUs.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-warm">
                <Check className="mt-0.5 size-5 shrink-0 text-success" />
                <p className="text-sm leading-relaxed text-body">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular styles */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Design Inspiration"
            title={`Popular Media Wall Styles in ${location.city}`}
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MEDIA_WALL_STYLES.map((style) => (
              <div key={style.title} className="rounded-lg border border-border bg-card p-6 shadow-warm">
                <h3 className="font-serif text-lg font-semibold text-foreground">{style.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent projects */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title={`Recent ${location.city} Projects`}
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg border border-border shadow-warm">
                <div className="relative h-56 w-full">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <PortfolioPlaceholder />
                  )}
                </div>
                <div className="bg-card p-4">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/gallery">View Our Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local Knowledge"
            title={`Areas We Cover in ${location.city}`}
            align="center"
            className="mx-auto mb-10"
          />
          <Card className="p-8">
            <div className="flex items-center gap-2 text-brass">
              <MapPin className="size-5" />
              <p className="font-semibold text-foreground">Postcodes: {location.postcodes}</p>
            </div>
            <p className="mt-4 text-sm text-muted">Neighbourhoods we regularly work in:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {location.areasCovered.map((a) => (
                <span key={a} className="rounded-full bg-background-alt px-3 py-1.5 text-sm text-white">
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-body">{location.areasParagraph}</p>
            <p className="mt-4 text-sm text-body">
              <strong className="text-foreground">Travel time:</strong> {location.travelTime}
            </p>
          </Card>

          {neighbours.length > 0 && (
            <p className="mt-8 text-center text-base leading-relaxed text-body">
              We also install media walls in nearby{" "}
              {neighbours.map((n, i) => (
                <span key={n.slug}>
                  <Link href={`/areas/${n.slug}`} className="font-semibold text-brass hover:underline">
                    {n.city}
                  </Link>
                  {i < neighbours.length - 1 ? (i === neighbours.length - 2 ? " and " : ", ") : ""}
                </span>
              ))}
              , so if you are just outside {location.city}, get in touch anyway.
            </p>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title={`What ${location.city} Customers Say`}
            align="center"
            className="mx-auto mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {location.reviews.map((r, i) => (
              <Card key={i} className="flex flex-col gap-4 p-7">
                <div className="flex gap-0.5 text-brass">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-brass" />
                  ))}
                </div>
                <p className="flex-1 font-serif text-lg leading-relaxed text-foreground">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-brass">
                    {r.area} &middot; {r.service}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment"
            title={`Media Wall Costs in ${location.city}`}
            align="center"
            className="mx-auto mb-8"
          />
          <p className="text-base leading-relaxed text-body">{location.costParagraph}</p>
          <p className="mt-4 text-base leading-relaxed text-body">
            For an instant estimate based on your exact requirements, try our{" "}
            <Link href="/pricing" className="font-semibold text-brass hover:underline">
              media wall cost calculator
            </Link>
            , or read our{" "}
            <Link
              href="/blog/media-wall-cost-guide-manchester-2026"
              className="font-semibold text-brass hover:underline"
            >
              full pricing guide
            </Link>{" "}
            for a detailed breakdown.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/pricing">Use the Cost Calculator</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection faqs={location.faqs} title={`${location.city} FAQs`} />

      {/* Further reading */}
      <section className="bg-background-alt py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            Further reading:{" "}
            {relatedPosts.map((post, i) => (
              <span key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-brass hover:underline">
                  {post.title}
                </Link>
                {i < relatedPosts.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      <FinalCta
        title={`Book Your Free Consultation in ${location.city}`}
        description={location.ctaParagraph}
      />
    </>
  );
}
