import type { Metadata } from "next";

import { BUSINESS, SITE_NAME } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${SITE_NAME} and booking our media wall design and installation services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        compact
        breadcrumbs={<Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />}
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 text-body sm:px-6 lg:px-8">
          <p className="text-sm text-muted">Last updated: 1 January 2026</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">1. About us</h2>
          <p>
            These terms apply to your use of mediawallsnorth.co.uk and to any
            quote, consultation, or installation booked with{" "}
            {BUSINESS.legalName}, based in {BUSINESS.addressLocality}, England.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">2. Quotes and estimates</h2>
          <p>
            Prices shown on our website, including our cost calculator, are
            estimates only. A final, itemised quote is provided in writing
            following a free home visit and is valid for 30 days unless
            stated otherwise.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">3. Bookings and deposits</h2>
          <p>
            A deposit may be required to secure your installation date on
            larger projects, with the balance due on completion unless a
            staged payment plan has been agreed in writing.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">4. Cancellations</h2>
          <p>
            You may cancel a booked consultation free of charge with
            reasonable notice. Cancellation terms for booked installation
            work, including any deposit, will be set out in your written
            quote.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">5. Guarantee</h2>
          <p>
            All installations are covered by our 10 year workmanship
            guarantee, in addition to any manufacturer warranty on
            electrical components and fires supplied as part of the project.
            The guarantee covers defects in our workmanship and does not
            cover damage caused by misuse, third-party alterations, or normal
            wear and tear.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">6. Liability</h2>
          <p>
            We carry full public liability insurance for all work carried
            out. Our liability is limited to the value of the project unless
            otherwise required by law.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">7. Governing law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">8. Contact us</h2>
          <p>
            For any questions about these terms, contact us at{" "}
            {BUSINESS.email} or {BUSINESS.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
