"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GALLERY_LOCATIONS } from "@/data/gallery";
import type { GalleryItem, GalleryStyle } from "@/lib/types";
import { PortfolioPlaceholder } from "@/components/shared/portfolio-placeholder";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const STYLE_OPTIONS: { value: GalleryStyle | "all"; label: string }[] = [
  { value: "all", label: "All Styles" },
  { value: "fireplace", label: "Fireplace" },
  { value: "acoustic", label: "Acoustic" },
  { value: "tv-mount", label: "TV Mount" },
  { value: "slatted-wood", label: "Slatted Wood" },
  { value: "commercial", label: "Commercial" },
];

function StyleLabel(style: GalleryStyle) {
  return STYLE_OPTIONS.find((s) => s.value === style)?.label ?? style;
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [style, setStyle] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    return items.filter((g) => {
      const styleMatch = style === "all" || g.style === style;
      const locationMatch = location === "all" || g.location === location;
      return styleMatch && locationMatch;
    });
  }, [items, style, location]);

  const similar = useMemo(() => {
    if (!active) return [];
    return items.filter((g) => g.style === active.style && g.id !== active.id).slice(0, 3);
  }, [items, active]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 shadow-warm sm:flex-row sm:items-center">
        <div className="flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Filter by style
          </label>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STYLE_OPTIONS.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Filter by location
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {GALLERY_LOCATIONS.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="shrink-0 text-sm text-muted sm:self-end sm:pb-2.5">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group relative block w-full overflow-hidden rounded-lg text-left shadow-warm break-inside-avoid"
          >
            <div className={item.id.charCodeAt(2) % 2 === 0 ? "aspect-[4/5]" : "aspect-square"}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PortfolioPlaceholder />
              )}
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Badge variant="accent" className="mb-2 w-fit bg-white/20 text-white">
                {StyleLabel(item.style)}
              </Badge>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/70">{item.location}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-body">
          No projects match those filters yet. Try a different combination.
        </p>
      )}

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl gap-0 p-0">
          {active && (
            <>
              <div className="relative h-72 w-full overflow-hidden rounded-t-lg sm:h-96">
                {active.image ? (
                  <Image src={active.image} alt={active.title} fill sizes="768px" className="object-cover" />
                ) : (
                  <PortfolioPlaceholder />
                )}
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="forest">{StyleLabel(active.style)}</Badge>
                    <Badge variant="outline">{active.location}</Badge>
                    <Badge variant="outline">{active.timeline}</Badge>
                  </div>
                  <DialogTitle className="mt-2">{active.title}</DialogTitle>
                  <DialogDescription>{active.description}</DialogDescription>
                </DialogHeader>

                {similar.length > 0 && (
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                      Similar projects
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {similar.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setActive(s)}
                          className="relative aspect-square overflow-hidden rounded-md"
                        >
                          {s.image ? (
                            <Image src={s.image} alt={s.title} fill sizes="150px" className="object-cover" />
                          ) : (
                            <PortfolioPlaceholder label="" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">Request a Similar Quote</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
