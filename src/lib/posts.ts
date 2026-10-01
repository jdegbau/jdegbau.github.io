/// <reference types="vite/client" />

export interface PostHeading {
  id: string;
  text: string;
  level: number;
}

export interface Post {
  slug: string;
  legacySlug?: string;
  title: string;
  seoTitle?: string;
  excerpt?: string;
  date: string;
  featuredImage?: string;
  url: string;
  component: any;
  tags?: string[];
  keywords?: string[];
  readingTime?: number;
  headings?: PostHeading[];
}

const modules = import.meta.glob<{
  frontmatter?: Record<string, any>;
  default?: any;
}>('../content/blog/*.md', { eager: true });

function parseDateFromFilename(filename: string) {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})-/);
  return match ? match[1] : '1970-01-01';
}

function countWords(text: string) {
  return String(text ?? '').trim().split(/\s+/).filter(Boolean).length;
}

function normalizeSlug(value: unknown, fallback: string) {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  if (!trimmed) return fallback;
  return trimmed.replace(/^\/+/, '').replace(/\/+$/, '');
}

function normalizeUrl(value: unknown, fallback: string) {
  const normalized = normalizeSlug(value, fallback);
  return `/blog/${normalized}/`;
}

function normalizeOptionalString(value: unknown, fallback: string) {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  return trimmed ? trimmed : fallback;
}

function slugifyHeading(text: string) {
  return String(text ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractHeadings(rawContent: string): PostHeading[] {
  const sanitizedContent = rawContent
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '');

  const matches: Array<{ index: number; heading: PostHeading }> = [];

  const addMatch = (heading: PostHeading | null, index: number) => {
    if (!heading || !heading.text.trim()) {
      return;
    }

    matches.push({
      index,
      heading: {
        id: heading.id || slugifyHeading(heading.text),
        text: heading.text.trim(),
        level: heading.level,
      },
    });
  };

  for (const match of sanitizedContent.matchAll(/^(#{1,6})\s+(.+?)(?:\s+#+\s*)?$/gm)) {
    const level = match[1].length;
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    addMatch({ id: slugifyHeading(text), text, level }, match.index ?? 0);
  }

  for (const match of sanitizedContent.matchAll(/^([^\n]+)\r?\n(=+|-+)[ \t]*$/gm)) {
    const level = match[2].startsWith('=') ? 1 : 2;
    const text = match[1].replace(/<[^>]+>/g, '').trim();
    addMatch({ id: slugifyHeading(text), text, level }, match.index ?? 0);
  }

  for (const match of sanitizedContent.matchAll(/<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi)) {
    const level = Number(match[1]);
    const openingTag = match[2] ?? '';
    const idMatch = openingTag.match(/\s+id=["']([^"']+)["']/i);
    const text = match[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    addMatch({
      id: idMatch ? idMatch[1] : slugifyHeading(text),
      text,
      level,
    }, match.index ?? 0);
  }

  const seen = new Set<string>();
  return matches
    .sort((a, b) => a.index - b.index)
    .filter(({ heading }) => {
      const key = `${heading.level}:${heading.id}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    })
    .map(({ heading }) => heading);
}

const posts: Post[] = Object.entries(modules).map(([path, module]) => {
  const filename = path.split('/').pop() ?? '';
  const fileSlug = filename.replace(/\.md$/, '');
  const fm = module.frontmatter ?? {};
  const date = fm.date ?? parseDateFromFilename(filename);
  const rawContent = typeof module.rawContent === 'function' ? module.rawContent() : '';
  const wordCount = countWords(rawContent) || countWords(String(module.default?.render?.toString?.() ?? ''));
  const readingTime =
    fm.readingTime ?? fm.reading_time ?? fm.readingtime ?? Math.max(1, Math.ceil(wordCount / 260));
  const slug = normalizeSlug(fm.slug, fileSlug);
  const headings = extractHeadings(rawContent);
  return {
    slug,
    legacySlug: fileSlug,
    title: fm.title ?? 'Untitled',
    seoTitle: fm.SEO_title ?? fm.seoTitle ?? fm.seo_title,
    excerpt: fm.excerpt ?? '',
    date,
    featuredImage: normalizeOptionalString(fm.featured_image ?? fm.featuredImage, '/assets/img/default-blog-hero.gif'),
    url: normalizeUrl(fm.slug, `blog/${fileSlug}`),
    component: module.default,
    tags: fm.tags ?? [],
    keywords: fm.keywords ?? fm.tags ?? [],
    readingTime,
    headings,
  };
});

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export function getPostBySlug(slug: string) {
  const normalized = slug.replace(/^\/+/, '').replace(/\/+$/, '');
  return posts.find((post) => post.slug === normalized || post.legacySlug === normalized || post.url.replace(/^\/+/, '').replace(/\/+$/, '') === normalized);
}
