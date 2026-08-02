import { List } from "lucide-react";

import { slugify } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function TableOfContents({ content }: { content: string[] }) {
  const headings = content
    .filter((block) => block.startsWith("## "))
    .map((block) => block.replace("## ", ""));

  if (headings.length === 0) return null;

  return (
    <Card className="p-6">
      <div className="mb-3 flex items-center gap-2 text-white">
        <List className="size-4 text-brass" />
        <p className="text-sm font-semibold uppercase tracking-wider">Contents</p>
      </div>
      <ol className="flex flex-col gap-2">
        {headings.map((heading) => (
          <li key={heading}>
            <a
              href={`#${slugify(heading)}`}
              className="text-sm text-muted transition-colors hover:text-brass"
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </Card>
  );
}
