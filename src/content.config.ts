import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts live in src/content/blog/*.md. This schema checks every post's
 * front matter at build time, so a typo or missing field fails the build with
 * a clear message instead of silently producing a broken page.
 */

// Accept `2026-01-15` (YAML date) or "2026-01-15" (string); store YYYY-MM-DD.
const isoDate = z
  .union([z.string(), z.date()])
  .transform((value, ctx) => {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.valueOf())) {
      ctx.addIssue({ code: 'custom', message: `Invalid date: ${String(value)}` });
      return z.NEVER;
    }
    return date.toISOString().slice(0, 10);
  });

const optionalText = z
  .string()
  .optional()
  .transform((value) => (value?.trim() ? value.trim() : undefined));

const blog = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/blog',
    // Keep the filename (e.g. 2023-01-17-site-search-bookmarklet) as the
    // entry id; the public URL comes from the `slug` field instead.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      title: z.string().min(1),
      slug: z.string().min(1),
      excerpt: z.string().min(1, 'Add an excerpt; it is used as the meta description.'),
      /** Publish date. Defaults to the date in the filename. */
      date: isoDate.optional(),
      /** Last meaningful content update. Shown on the post and used in schema and the sitemap. */
      updated: isoDate.optional(),
      seo_title: optionalText,
      featured_image: optionalText,
      tags: z.array(z.string()).default([]),
      keywords: z.array(z.string()).optional(),
      readingTime: z.number().positive().optional(),
    })
    .strict(),
});

export const collections = { blog };
