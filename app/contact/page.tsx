import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BUSINESS, SITE_URL } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";
import { STOCK } from "@/lib/images";

export const metadata: Metadata = {
  title: { absolute: "Get a Free Quote | Contact | Media Walls North" },
  description:
    "Request your free media wall quote today. Call us or fill in our form. We serve Manchester, Bolton, Preston, Wigan and surrounding areas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Get a Free Quote | Contact | Media Walls North",
    description: "Get a free, no-obligation media wall quote for your Manchester or North West home.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Get In Touch"
        description="Request your free, no-obligation quote and we will be in touch within one working day to arrange a home visit."
        image={STOCK.tvMountWoodConsole}
        compact
        breadcrumbs={<Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />}
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card className="flex flex-col gap-5 p-7">
              <h3 className="font-serif text-xl font-semibold text-foreground">Contact Details</h3>
              <a href={`tel:${BUSINESS.phoneHref}`} className="flex items-center gap-3 text-sm text-body hover:text-brass">
                <Phone className="size-4 shrink-0 text-accent-hover" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm text-body hover:text-brass">
                <Mail className="size-4 shrink-0 text-accent-hover" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-body">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-hover" />
                <span>
                  {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
                  <br />
                  Serving Greater Manchester &amp; the North West
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-body">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent-hover" />
                <span>
                  Mon&ndash;Fri: 8am&ndash;6pm
                  <br />
                  Sat: 9am&ndash;4pm
                </span>
              </div>
            </Card>

            <div className="overflow-hidden rounded-lg border border-border shadow-warm">
              <iframe
                title="Media Walls North service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76057.5!2d-2.2426!3d53.4808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI4JzUwLjkiTiAywrAxNCczMy40Ilc!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
