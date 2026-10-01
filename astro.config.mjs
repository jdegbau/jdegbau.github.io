import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCopyableCode from './src/lib/rehype-copyable-code.mjs';
import rehypeHeadingIds from './src/lib/rehype-heading-ids.mjs';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: 'https://jdegbau.com',
    session: false,

    markdown: {
        syntaxHighlight: 'shiki',
        processor: unified({
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeCopyableCode, rehypeHeadingIds, rehypeAutolinkHeadings],
        }),
    },

    vite: {
        build: {
            target: 'es2020',
        },
    },

    adapter: cloudflare(),
});