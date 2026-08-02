import Image from "next/image";

import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-forest/60" />
        </>
      )}
      <div
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col gap-5 px-4 py-20 sm:px-6 lg:px-8",
          compact ? "py-16" : "py-24 sm:py-28"
        )}
      >
        {breadcrumbs && <div className="[&_*]:text-white/70 [&_span]:text-white">{breadcrumbs}</div>}
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-white balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
