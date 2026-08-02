import Link from "next/link";

import { AUTHOR, REVIEWER } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export function AuthorBioBoxes() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Card className="flex flex-col items-center gap-3 p-7 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-forest font-serif text-2xl font-semibold text-white">
          {AUTHOR.initials}
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">{AUTHOR.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-brass">{AUTHOR.role}</p>
        <p className="text-sm leading-relaxed text-body">{AUTHOR.bio}</p>
        <Link href="/about" className="text-sm font-semibold text-brass hover:underline">
          More about our team &rarr;
        </Link>
      </Card>
      <Card className="flex flex-col items-center gap-3 p-7 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-brass font-serif text-2xl font-semibold text-accent-foreground">
          {REVIEWER.initials}
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {REVIEWER.name} <span className="text-sm font-normal text-muted">&middot; Reviewer</span>
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-brass">{REVIEWER.role}</p>
        <p className="text-sm leading-relaxed text-body">{REVIEWER.bio}</p>
      </Card>
    </div>
  );
}
