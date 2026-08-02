import { LayoutGrid } from "lucide-react";

import { cn } from "@/lib/utils";

export function PortfolioPlaceholder({
  label = "Portfolio photo coming soon",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest to-forest-hover px-6 text-center",
        className
      )}
    >
      <LayoutGrid className="size-8 text-brass" strokeWidth={1.25} />
      <p className="font-serif text-lg text-white/90">{label}</p>
      <p className="text-xs uppercase tracking-widest text-white/50">
        AK Media Walls
      </p>
    </div>
  );
}
