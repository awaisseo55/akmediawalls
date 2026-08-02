import type { Metadata } from "next";

import { BUSINESS, SITE_NAME } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}, explaining how we collect, use, and protect your personal data.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        compact
        breadcrumbs={<Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />}
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 text-body sm:px-6 lg:px-8">
          <p className="text-sm text-muted">Last updated: 1 January 2026</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">1. Who we are</h2>
          <p>
            {BUSINESS.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a media
            wall design and installation business based in {BUSINESS.addressLocality}, England. This
            policy explains how we collect and use personal data submitted through
            akmediawalls.co.uk.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">2. What we collect</h2>
          <p>
            When you submit our contact or quote request form, we collect your
            name, phone number, email address, postcode, the service you are
            interested in, your preferred contact method, any details or
            photos you choose to share, and any message content you provide.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">3. How we use your data</h2>
          <p>
            We use the information you provide solely to respond to your
            enquiry, arrange a consultation or quote, and deliver any project
            you go on to book with us. We do not sell or share your data with
            third parties for marketing purposes.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">4. How we store your data</h2>
          <p>
            Enquiry data is stored securely and is only accessible to
            authorised members of our team. We retain enquiry records for as
            long as reasonably necessary to respond to your request and
            maintain business records, after which it is deleted.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">5. Your rights</h2>
          <p>
            Under UK data protection law, you have the right to request
            access to, correction of, or deletion of your personal data. To
            make a request, contact us at {BUSINESS.email}.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">6. Cookies</h2>
          <p>
            Our website uses minimal, essential cookies required for the site
            to function correctly. We do not use third-party advertising
            cookies.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground">7. Contact us</h2>
          <p>
            If you have any questions about this policy, please contact us at{" "}
            {BUSINESS.email} or {BUSINESS.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
