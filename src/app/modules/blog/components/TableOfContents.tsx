"use client";

import { useEffect, useState } from "react";
import { type TocEntry } from "@/lib/blog/toc";

export default function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const headings = entries
      .map((e) => document.getElementById(e.slug))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (observerEntries) => {
        for (const entry of observerEntries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav className="sticky top-28 hidden w-56 shrink-0 xl:block">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#999]">
        On this page
      </p>
      <ul className="flex flex-col gap-1.5 border-l border-[#333]">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <a
              href={`#${entry.slug}`}
              className={`block border-l-2 py-0.5 text-sm transition-colors ${
                entry.depth === 3 ? "pl-6" : "pl-3"
              } ${
                activeSlug === entry.slug
                  ? "border-color10 text-color10"
                  : "border-transparent text-[#999] hover:text-color30"
              }`}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
