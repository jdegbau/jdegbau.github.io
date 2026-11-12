# jdegbau.github.io

This repository is now migrated to Astro.

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Check the built site for broken internal links, missing titles and descriptions, images without alt text, and invalid JSON-LD:

```bash
npm run check
```

A GitHub Action (`.github/workflows/check.yml`) runs `npm run build` and `npm run check` on every pull request, so problems show up on the PR before anything is merged.

## Writing blog posts

Posts live in `src/content/blog/` as `YYYY-MM-DD-some-name.md` (the date in the filename is the publish date). The front matter is checked at build time by the schema in `src/content.config.ts`, so a typo or a missing required field stops the build with a message naming the post and field.

```yaml
---
title: My Post Title                # required
slug: /my-post-title/               # required; the post lives at /blog/my-post-title/
excerpt: One or two sentences.      # required; used as the meta description
seo_title: Title for search results # optional; defaults to title
featured_image: /assets/img/x.png   # optional; on-page hero image
updated: 2026-11-12                 # optional; set when you meaningfully revise a post
tags: [SEO, Analytics]              # optional
---
```

Setting `updated` shows "Updated …" on the post and feeds `dateModified`, `article:modified_time` and the sitemap's `<lastmod>`.

Each post automatically gets a 1200×630 social share card (`/assets/img/og/<slug>.png`), generated at build time by `src/lib/og-cards.mjs`. The generated images are git-ignored.

## Notes

- Static assets are served from `public/assets/`.
- The site uses Astro page routes in `src/pages/`. `sitemap.xml` is built from those pages automatically, leaving out dynamic routes, `noindex` pages and anything redirected in `public/_redirects`.
- Redirects live in `public/_redirects`; security and caching headers live in `public/_headers`.
- The site deploys to Cloudflare (see `wrangler.jsonc`). `public/CNAME` is only used by GitHub Pages.
