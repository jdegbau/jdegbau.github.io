---
name: Astro component consistency
description: Apply the site's shared-component conventions when creating or editing Astro pages and components.
applyTo: "src/**/*.astro"
---

# Astro Components

- Read `AGENTS.md`, `src/components/README.md`, and `src/pages/components.astro` before adding or changing reusable UI.
- Use `src/layouts/BaseLayout.astro` for site pages. It supplies the shared navigation, search, footer, and SEO shell; do not duplicate or override those elements without a page-specific requirement.
- Check `src/components/` before writing UI markup. Reuse or extend an existing component when its purpose and visual contract fit; keep genuinely page-specific presentation in the page.
- Use the existing `--jdb-*` design tokens and established layout classes.
- When adding a reusable component, document it in `src/components/README.md` and add a representative usage to `src/pages/components.astro` in the same change.
- When changing a component's props or behavior, keep its documentation and showcase example in sync.
- Run `npm run build` after Astro page, layout, or component changes.