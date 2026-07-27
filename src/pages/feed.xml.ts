import { getAllPosts } from '../lib/posts';

export const prerender = true;

const siteUrl = 'https://jdegbau.com';
const siteTitle = 'Joshua DeGrasse-Baumann | SEO, Data, and Development';
const siteDescription = 'SEO consultant, data enthusiast, and developer writing about analytics, SEO, and measurement.';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getAllPosts();
  const updated = posts.length ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}${post.url}</link>
      <guid isPermaLink="true">${siteUrl}${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt ?? '')}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <language>en-US</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=UTF-8',
    },
  });
}
