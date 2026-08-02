import type { FAQItem } from "@/lib/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqJsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: FAQItem[];
  title?: string;
}) {
  return (
    <section className="bg-background-alt py-20 sm:py-24">
      <FaqJsonLd faqs={faqs} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} align="center" className="mb-10" />
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-6 shadow-warm sm:px-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
