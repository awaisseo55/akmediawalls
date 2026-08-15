import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Quote, Sparkles } from "lucide-react";

import { slugify } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Content blocks are plain strings so admin-authored posts (data/admin-store)
 * keep working unchanged. Static posts in data/blog.ts can opt into richer
 * blocks using a "::tag" prefix, parsed here. Anything without a recognised
 * prefix renders as a normal paragraph.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <Link
        key={`${keyPrefix}-link-${i++}`}
        href={match[2]}
        className="font-semibold text-brass underline underline-offset-4 transition-colors hover:text-brass-hover"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function BlogContent({ content }: { content: string[] }) {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {content.map((block, i) => {
        const key = `block-${i}`;

        if (block.startsWith("## ")) {
          const heading = block.replace("## ", "");
          return (
            <h2
              key={key}
              id={slugify(heading)}
              className="mt-4 scroll-mt-28 font-serif text-2xl font-semibold text-foreground"
            >
              {heading}
            </h2>
          );
        }

        if (block.startsWith("### ")) {
          const heading = block.replace("### ", "");
          return (
            <h3
              key={key}
              className="mt-2 font-serif text-xl font-semibold text-foreground"
            >
              {heading}
            </h3>
          );
        }

        if (block.startsWith("::table")) {
          const lines = block
            .replace("::table", "")
            .trim()
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
          const [headerLine, ...rowLines] = lines;
          const headers = headerLine.split("|").map((h) => h.trim());
          const rows = rowLines.map((line) => line.split("|").map((c) => c.trim()));

          return (
            <div key={key} className="my-2 overflow-x-auto rounded-lg border border-border shadow-warm">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-forest">
                    {headers.map((h, hi) => (
                      <th key={hi} className="px-4 py-3 font-serif font-semibold text-white">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-card" : "bg-background-alt"}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 align-top text-body ${ci === 0 ? "font-semibold text-foreground" : ""}`}
                        >
                          {renderInline(cell, `${key}-${ri}-${ci}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.startsWith("::stats")) {
          const items = block.replace("::stats", "").trim().split("|").filter(Boolean);
          return (
            <div key={key} className="my-2 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {items.map((item, ii) => {
                const [label, value] = item.split(":").map((s) => s.trim());
                return (
                  <div key={ii} className="rounded-lg border border-border bg-card p-4 text-center shadow-warm">
                    <p className="font-serif text-2xl font-semibold text-brass sm:text-3xl">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted sm:text-sm">{label}</p>
                  </div>
                );
              })}
            </div>
          );
        }

        if (block.startsWith("::tip")) {
          const [title, ...bodyParts] = block.replace(/^::tip\s*/, "").split("|");
          const body = bodyParts.join("|");
          return (
            <div key={key} className="my-2 flex gap-4 rounded-lg border border-brass/30 bg-brass/10 p-5 sm:p-6">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-brass" />
              <div>
                {title && <p className="mb-1 font-serif text-lg font-semibold text-foreground">{title}</p>}
                <p className="text-base leading-relaxed text-body">{renderInline(body, key)}</p>
              </div>
            </div>
          );
        }

        if (block.startsWith("::quote")) {
          const [quote, attribution] = block.replace(/^::quote\s*/, "").split("|");
          return (
            <div key={key} className="my-2 rounded-lg border-l-4 border-brass bg-card p-6 shadow-warm sm:p-8">
              <Quote className="mb-2 size-6 text-brass/60" />
              <p className="font-serif text-lg italic leading-relaxed text-foreground sm:text-xl">{quote}</p>
              {attribution && <p className="mt-3 text-sm font-semibold text-muted">{attribution}</p>}
            </div>
          );
        }

        if (block.startsWith("::list")) {
          const items = block
            .replace("::list", "")
            .split("|")
            .map((s) => s.trim())
            .filter(Boolean);
          return (
            <ul key={key} className="my-2 flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              {items.map((item, li) => (
                <li key={li} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest-hover" />
                  <span className="text-base leading-relaxed text-body">{renderInline(item, `${key}-${li}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.startsWith("::cta")) {
          const [heading, description, buttonLabel, href] = block.replace(/^::cta\s*/, "").split("|");
          return (
            <div
              key={key}
              className="my-4 flex flex-col items-start gap-4 rounded-lg bg-forest p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <p className="font-serif text-xl font-semibold text-white sm:text-2xl">{heading}</p>
                {description && <p className="mt-1 text-white/80">{description}</p>}
              </div>
              <Button asChild size="lg" variant="accent" className="w-full shrink-0 sm:w-auto">
                <Link href={href || "/contact"}>{buttonLabel || "Get Your Free Quote"}</Link>
              </Button>
            </div>
          );
        }

        return (
          <p key={key} className="text-base leading-relaxed text-body sm:text-lg">
            {renderInline(block, key)}
          </p>
        );
      })}
    </div>
  );
}
