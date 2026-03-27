export interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function extractToc(rawContent: string): TocEntry[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const entries: TocEntry[] = [];
  let match;

  while ((match = headingRegex.exec(rawContent)) !== null) {
    const depth = match[1]!.length;
    const text = match[2]!.trim();
    entries.push({ depth, text, slug: slugify(text) });
  }

  return entries;
}
