import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  return (
    <Card className="group flex flex-col transition-shadow duration-300 hover:shadow-warm-lg">
      <Link
        href={`/services/${service.slug}`}
        className={`relative block ${large ? "h-72" : "h-56"} overflow-hidden`}
      >
        <Image
          src={service.cardImage}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
          <Link href={`/services/${service.slug}`} className="hover:text-brass">
            {service.name}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-body sm:text-base">
          {service.summary}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass transition-transform group-hover:translate-x-0.5"
        >
          Learn more
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Card>
  );
}
