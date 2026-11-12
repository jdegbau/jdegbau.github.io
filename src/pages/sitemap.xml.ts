import { getAllPosts } from '../lib/posts';
import redirectsFile from '../../public/_redirects?raw';

export const prerender = true;

const siteUrl = 'https://jdegbau.com';

/**
 * Static pages are discovered from src/pages, so new pages show up in the
 * sitemap automatically. A page is left out when it:
 * - is a dynamic route ([slug].astro) or the 404 page,
 * - passes `noindex` to BaseLayout,
 * - or is redirected elsewhere in public/_redirects.
 * Blog posts are added from the content collection with their last-updated date.
 */
const pageSources = import.meta.glob<string>('./**/*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const redirectedPaths = new Set(
  redirectsFile
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => normalizePath(line.split(/\s+/)[0])),
);

function normalizePath(pathname: string) {
  return `/${pathname.replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');
}

function routeFromFile(file: string) {
  const route = file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return normalizePath(route);
}

function isIndexablePage(file: string, source: string) {
  if (file.includes('[')) return false;
  if (/(^|\/)404\.astro$/.test(file)) return false;
  if (/<BaseLayout\b[^>]*\snoindex(?:=\{true\})?[\s/>]/.test(source)) return false;
  return !redirectedPaths.has(routeFromFile(file));
}

const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const posts = await getAllPosts();
  const latestUpdate = posts.reduce((latest, post) => (post.updated > latest ? post.updated : latest), '');

  const pages = Object.entries(pageSources)
    .filter(([file, source]) => isIndexablePage(file, source))
    .map(([file]) => {
      const loc = routeFromFile(file);
      // The homepage and blog index list posts, so they change when a post does.
      const lastmod = loc === '/' || loc === '/blog/' ? latestUpdate : undefined;
      return { loc, lastmod };
    })
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const entries = [...pages, ...posts.map((post) => ({ loc: post.url, lastmod: post.updated }))];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ loc, lastmod }) => `  <url>
    <loc>${escapeXml(`${siteUrl}${loc}`)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
  });
}
