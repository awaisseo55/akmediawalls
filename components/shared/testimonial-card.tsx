import { Star } from "lucide-react";

import type { Testimonial } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-7">
      <div className="flex gap-0.5 text-brass">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-brass" />
        ))}
      </div>
      <p className="flex-1 font-serif text-lg leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted">
          {testimonial.location} &middot; {testimonial.service}
        </p>
      </div>
    </Card>
  );
}
