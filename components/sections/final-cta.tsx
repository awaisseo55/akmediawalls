import Link from "next/link";
import { Phone } from "lucide-react";

import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function FinalCta({
  title = "Ready to Transform Your Living Room?",
  description = "Book your free consultation and quote today. No obligation, no pressure, just honest advice from a local Manchester team.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-forest py-20 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-white balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-white/80">{description}</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="outlineLight">
            <a href={`tel:${BUSINESS.phoneHref}`}>
              <Phone className="size-4" />
              Call {BUSINESS.phone}
            </a>
          </Button>
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
