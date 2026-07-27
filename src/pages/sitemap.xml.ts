import { getAllPosts } from '../lib/posts';

export const prerender = true;

const siteUrl = 'https://jdegbau.com';
const staticRoutes = ['/', '/about/', '/blog/', '/contact/', '/links/', '/seo-fetcher/', '/seo-game/', '/seo-helpline/', '/thanks/consultation-request/'];

export async function GET() {
  const posts = getAllPosts();
  const routes = [...staticRoutes, ...posts.map((post) => post.url)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((url) => `  <url>
    <loc>${siteUrl}${url}</loc>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
  });
}
