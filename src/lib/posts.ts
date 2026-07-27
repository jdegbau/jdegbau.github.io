export interface Post {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt?: string;
  date: string;
  featuredImage?: string;
  url: string;
  component: any;
}

const modules = import.meta.glob('../content/blog/*.md', { eager: true });

function parseDateFromFilename(filename: string) {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})-/);
  return match ? match[1] : '1970-01-01';
}

const posts: Post[] = Object.entries(modules).map(([path, module]) => {
  const filename = path.split('/').pop() ?? '';
  const fileSlug = filename.replace(/\.md$/, '');
  const fm = module.frontmatter ?? {};
  const date = fm.date ?? parseDateFromFilename(filename);
  return {
    slug: fileSlug,
    title: fm.title ?? 'Untitled',
    seoTitle: fm.SEO_title ?? fm.seoTitle ?? fm.seo_title,
    excerpt: fm.excerpt ?? '',
    date,
    featuredImage: fm.featured_image ?? fm.featuredImage ?? '/assets/img/default-blog-hero.gif',
    url: `/blog/${fileSlug}/`,
    component: module.default,
  };
});

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
