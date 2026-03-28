"use server";

import { db } from "@/server/db";

export async function incrementViewCount(slug: string): Promise<number> {
  const result = await db.postView.upsert({
    where: { slug },
    update: { count: { increment: 1 } },
    create: { slug, count: 1 },
  });
  return result.count;
}

export async function getViewCount(slug: string): Promise<number> {
  const result = await db.postView.findUnique({ where: { slug } });
  return result?.count ?? 0;
}

export async function getAllViewCounts(): Promise<Record<string, number>> {
  const results = await db.postView.findMany();
  const counts: Record<string, number> = {};
  for (const row of results) {
    counts[row.slug] = row.count;
  }
  return counts;
}
