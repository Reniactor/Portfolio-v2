"use client";

import { useEffect, useState } from "react";
import { incrementViewCount } from "@/lib/blog/views";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    void incrementViewCount(slug).then(setViews);
  }, [slug]);

  if (views === null) return null;

  return (
    <span>
      {views} view{views !== 1 ? "s" : ""}
    </span>
  );
}
