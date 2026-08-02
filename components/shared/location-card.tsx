import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import type { Location } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="group p-6 transition-shadow duration-300 hover:shadow-warm-lg">
      <Link href={`/areas/${location.slug}`} className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-accent-hover">
          <MapPin className="size-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {location.region}
          </span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">{location.city}</h3>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
          Media Walls in {location.city}
          <ArrowRight className="size-4" />
        </span>
      </Link>
    </Card>
  );
}
