"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-serif text-2xl font-semibold text-primary">
              AK Media Walls
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-body">
              Bespoke media wall design and installation across Manchester and
              the North West. Fireplace media walls, acoustic walls, TV
              mounting, and commercial fit-outs, built to a joinery standard
              with a 10 year workmanship guarantee.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={BUSINESS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Areas Covered</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/areas/${l.slug}`}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="flex items-center gap-2 text-sm text-body transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-accent-hover" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm text-body transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-accent-hover" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-body">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-hover" />
                <span>
                  {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
                  <br />
                  Serving Greater Manchester &amp; the North West
                </span>
              </li>
              <li className="text-sm text-body">
                Mon&ndash;Fri: 8am&ndash;6pm
                <br />
                Sat: 9am&ndash;4pm
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>
            &copy; {year} {BUSINESS.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
