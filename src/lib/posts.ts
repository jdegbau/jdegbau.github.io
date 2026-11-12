import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export interface Post {
  /** URL slug, e.g. `site-search-bookmarklet`. */
  slug: string;
  /** Filename-based id, e.g. `2023-01-17-site-search-bookmarklet`. */
  legacySlug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  /** Publish date, YYYY-MM-DD. */
  date: string;
  /** Last meaningful update, YYYY-MM-DD. Equals `date` when the post was never updated. */
  updated: string;
  /** On-page hero image. */
  featuredImage: string;
  /** Generated 1200×630 social share card (see src/lib/og-cards.mjs). */
  ogImage: string;
  url: string;
  tags: string[];
  keywords: string[];
  readingTime: number;
  entry: BlogEntry;
}

const DEFAULT_HERO = '/assets/img/default-blog-hero.gif';

function trimSlashes(value: string) {
  return value.trim().replace(/^\/+/, '').replace(/\/+$/, '');
}

function dateFromId(id: string) {
  return id.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1] ?? '1970-01-01';
}

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function toPost(entry: BlogEntry): Post {
  const { data } = entry;
  const slug = trimSlashes(data.slug) || entry.id;
  const date = data.date ?? dateFromId(entry.id);
  return {
    slug,
    legacySlug: entry.id,
    title: data.title,
    seoTitle: data.seo_title,
    excerpt: data.excerpt,
    date,
    updated: data.updated && data.updated > date ? data.updated : date,
    featuredImage: data.featured_image ?? DEFAULT_HERO,
    ogImage: `/assets/img/og/${slug}.png`,
    url: `/blog/${slug}/`,
    tags: data.tags,
    keywords: data.keywords ?? data.tags,
    readingTime: data.readingTime ?? Math.max(1, Math.ceil(countWords(entry.body ?? '') / 260)),
    entry,
  };
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  const entries = await getCollection('blog');
  return entries.map(toPost).sort((a, b) => b.date.localeCompare(a.date));
}

export interface PostHeading {
  id: string;
  text: string;
  level: number;
}

const decodeEntities = (text: string) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

/**
 * Headings (with ids) from the post's rendered HTML. Unlike Astro's built-in
 * heading list, this also picks up headings written as raw HTML in markdown.
 */
export function getHeadings(post: Post): PostHeading[] {
  const html = post.entry.rendered?.html ?? '';
  return [...html.matchAll(/<h([1-6])\b[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: Number(match[1]),
    id: match[2],
    text: decodeEntities(match[3].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim(),
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const normalized = trimSlashes(slug);
  return (await getAllPosts()).find(
    (post) => post.slug === normalized || post.legacySlug === normalized,
  );
}
