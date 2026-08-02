import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { SITE_URL } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const full = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd
        items={full.map((i) => ({ name: i.name, url: `${SITE_URL}${i.href}` }))}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 text-muted/60" />}
              {i === full.length - 1 ? (
                <span className="text-body" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brass transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
