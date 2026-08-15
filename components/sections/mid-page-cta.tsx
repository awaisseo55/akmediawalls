import Link from "next/link";

import { Button } from "@/components/ui/button";

export function MidPageCta({
  title = "Thinking About a Media Wall?",
  description = "Get a free, no-obligation quote tailored to your room, TV, fireplace and preferred finish.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-background-alt py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-lg bg-forest p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-white/80">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight" className="w-full sm:w-auto">
              <Link href="/pricing">Check Our Prices</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
