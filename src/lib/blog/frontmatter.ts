import { z } from "zod";

export const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).max(160),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;
