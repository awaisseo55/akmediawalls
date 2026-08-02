"use client";

import Image from "next/image";
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
    <footer className="border-t border-border bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo.svg" alt="Media Walls North" width={190} height={44} className="h-9 w-auto" />
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
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brass hover:text-brass"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={BUSINESS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brass hover:text-brass"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Areas Covered</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:text-brass"
                >
                  <Phone className="size-4 shrink-0 text-accent-hover" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:text-brass"
                >
                  <Mail className="size-4 shrink-0 text-accent-hover" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-hover" />
                <span>
                  {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
                  <br />
                  Serving Greater Manchester &amp; the North West
                </span>
              </li>
              <li className="text-sm text-white">
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
            <Link href="/privacy" className="hover:text-brass">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brass">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
