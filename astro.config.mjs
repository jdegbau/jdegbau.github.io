import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCopyableCode from './src/lib/rehype-copyable-code.mjs';
import rehypeHeadingIds from './src/lib/rehype-heading-ids.mjs';
import ogCards from './src/lib/og-cards.mjs';

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://jdegbau.com',
    session: false,
    // MDX inherits the markdown config below, so .mdx posts get the same plugins.
    integrations: [mdx(), ogCards()],

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