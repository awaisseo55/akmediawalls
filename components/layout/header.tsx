"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ServicesDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none">
        Services
        <ChevronDown className="size-3.5" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={16}
          className="z-50 w-80 rounded-lg border border-border bg-white p-2 shadow-warm-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {SERVICES.map((s) => (
            <DropdownMenu.Item key={s.slug} asChild>
              <Link
                href={`/services/${s.slug}`}
                className="block rounded-md px-3 py-2.5 outline-none transition-colors hover:bg-background-alt focus:bg-background-alt"
              >
                <span className="block text-sm font-medium text-foreground">
                  {s.shortName}
                </span>
                <span className="block text-xs text-muted">{s.tagline}</span>
              </Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Item asChild>
            <Link
              href="/services"
              className="mt-1 block rounded-md px-3 py-2.5 text-sm font-medium text-primary outline-none transition-colors hover:bg-background-alt"
            >
              View all services &rarr;
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function AreasDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none">
        Areas Covered
        <ChevronDown className="size-3.5" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={16}
          className="z-50 grid w-[36rem] grid-cols-2 gap-1 rounded-lg border border-border bg-white p-3 shadow-warm-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {LOCATIONS.map((l) => (
            <DropdownMenu.Item key={l.slug} asChild>
              <Link
                href={`/areas/${l.slug}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors hover:bg-background-alt hover:text-primary focus:bg-background-alt"
              >
                Media Walls in {l.city}
              </Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Item asChild>
            <Link
              href="/areas"
              className="col-span-2 mt-1 block rounded-md px-3 py-2.5 text-sm font-medium text-primary outline-none transition-colors hover:bg-background-alt"
            >
              View all areas &rarr;
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-background/95 backdrop-blur transition-shadow duration-200",
        scrolled && "border-border shadow-warm"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-semibold text-primary sm:text-[1.75rem]">
          AK Media Walls
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <ServicesDropdown />
          <AreasDropdown />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-accent-hover" />
            {BUSINESS.phone}
          </a>
          <Button asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <p className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Services
            </p>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-background-alt"
              >
                {s.shortName}
              </Link>
            ))}
            <p className="px-2 pb-1 pt-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Areas Covered
            </p>
            <div className="grid grid-cols-2 gap-x-2">
              {LOCATIONS.map((l) => (
                <Link
                  key={l.slug}
                  href={`/areas/${l.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-background-alt"
                >
                  {l.city}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
              {[...NAV_LINKS].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-background-alt"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="mt-4 flex items-center gap-2 px-2 text-sm font-medium text-foreground"
            >
              <Phone className="size-4 text-accent-hover" />
              {BUSINESS.phone}
            </a>
            <Button asChild className="mt-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
