import { ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const ITEMS = [
  { icon: Star, label: "5-star Google reviews" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Sparkles, label: "10 year guarantee" },
  { icon: Users, label: "Free consultation" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-medium text-body">
            <Icon className="size-4 text-brass" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
