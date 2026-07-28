import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://jdegbau.com',

  markdown: {
      processor: unified({
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      }),
  },

  vite: {
      build: {
          target: 'es2020',
      },
  },

  adapter: cloudflare(),
});