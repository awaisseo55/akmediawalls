import Link from "next/link";

import { getServiceBySlug } from "@/data/services";
import { getLocationBySlug } from "@/data/locations";
import type { BlogPost } from "@/lib/types";

function joinLinks(items: { href: string; label: string }[]) {
  return items.map((item, i) => (
    <span key={item.href}>
      <Link href={item.href} className="font-semibold text-brass hover:underline">
        {item.label}
      </Link>
      {i < items.length - 1 ? (i === items.length - 2 ? " and " : ", ") : ""}
    </span>
  ));
}

export function RelatedLinks({ post }: { post: BlogPost }) {
  const services = post.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }));

  const locations = post.relatedLocationSlugs
    .map((slug) => getLocationBySlug(slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))
    .map((l) => ({ href: `/${l.slug}`, label: `Media Walls in ${l.city}` }));

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <p className="text-base leading-relaxed text-body">
        {services.length > 0 && <>Related services: {joinLinks(services)}. </>}
        {locations.length > 0 && <>We cover this in {joinLinks(locations)}. </>}
        See our full{" "}
        <Link href="/gallery" className="font-semibold text-brass hover:underline">
          project gallery
        </Link>{" "}
        for real examples, or check{" "}
        <Link href="/pricing" className="font-semibold text-brass hover:underline">
          current pricing
        </Link>{" "}
        for an instant estimate.
      </p>
    </div>
  );
}
