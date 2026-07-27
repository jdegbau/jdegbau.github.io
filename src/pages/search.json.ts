import { getAllPosts } from '../lib/posts';

export const prerender = true;

export async function GET() {
  const posts = getAllPosts().map((post) => ({
    title: post.title,
    excerpt: post.excerpt ?? '',
    permalink: post.url,
    date: post.date,
  }));

  return new Response(JSON.stringify(posts, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
