import { AUTHOR, REVIEWER } from "@/lib/constants";

export function AuthorByline({
  date,
  lastUpdated,
  readingTime,
}: {
  date: string;
  lastUpdated: string;
  readingTime: string;
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedUpdated = new Date(lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-wrap items-center gap-4 border-y border-border py-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brass font-serif text-sm font-semibold text-accent-foreground">
        {AUTHOR.initials}
      </div>
      <div className="text-sm">
        <p className="font-medium text-white">
          Written by <span className="text-brass">{AUTHOR.name}</span>, {AUTHOR.role} of Media Walls North
        </p>
        <p className="mt-0.5 text-muted">
          Published {formattedDate} &middot; Updated {formattedUpdated} &middot; {readingTime}
        </p>
        <p className="mt-0.5 text-muted">
          Reviewed by <span className="text-brass">{REVIEWER.name}</span>, {REVIEWER.role}
        </p>
      </div>
    </div>
  );
}
