# Components Library

This folder contains the reusable Astro UI components for the site.

## How to use this library
- Check this file first before creating a new shared component.
- Reuse an existing component whenever possible.
- If a component already exists but needs a new variant, extend it carefully rather than creating a duplicate.
- Add new components here and also show them on the components showcase page at `src/pages/components.astro`.

## Current components

### AuthorBox
Purpose: Reusable author profile summary block.
Location: `src/components/AuthorBox.astro`
Notes:
- Accepts no props.
- Uses author data from `src/data/author.ts`.

### BlogCard
Purpose: Compact blog post teaser card.
Location: `src/components/BlogCard.astro`
Notes:
- Expects a `post` prop.
- Used in blog listing and landing pages.

### ChartTypeAssessment
Purpose: Showcase of chart types and usage guidance for the SEO visualization post.
Location: `src/components/ChartTypeAssessment.astro`
Notes:
- Reusable as a visual library component.
- Designed to be embedded in content or showcased on the components page.

### ChartPickerQuiz
Purpose: Interactive chart-selection quiz for content-driven posts.
Location: `src/components/ChartPickerQuiz.astro`
Notes:
- Supports a three-question decision flow for relationship, scale, and audience.
- Reusable anywhere a guided recommendation tool is needed.

### DataStoryBestPractices
Purpose: Shared card-based storytelling guidance module.
Location: `src/components/DataStoryBestPractices.astro`
Notes:
- Accepts an optional `items` prop for custom content.
- Designed for best-practice callouts in posts and landing pages.

### FAQAccordion
Purpose: Reusable FAQ accordion for post-level or site-wide Q&A sections.
Location: `src/components/FAQAccordion.astro`
Notes:
- Accepts an `items` prop with `question` and `answer` fields.
- Uses native `<details>/<summary>` for accessible, theme-consistent expansion.

### CodeBlock
Purpose: Styling wrapper for code snippets.
Location: `src/components/CodeBlock.astro`
Notes:
- Intended for code-heavy content blocks.
- Matches the component library’s terminal-window chrome, language label, and copy affordance.

### ContactForm
Purpose: Accessible, styled contact form for direct inquiries.
Location: `src/components/ContactForm.astro`
Notes:
- Requires an `action` prop for the form submission endpoint.
- Supports a `demo` prop that disables submission for component-library examples.
- Includes the Formcarry honeypot and reCAPTCHA response fields used by the contact page.

### TableOfContents
Purpose: Sticky sidebar table of contents for long-form posts.
Location: `src/components/TableOfContents.astro`
Notes:
- Expects an `items` prop containing heading objects with `id`, `text`, and `level`.
- Automatically highlights the current section as the page scrolls.

### QuickCompareMatrix
Purpose: Reusable qualitative comparison table for chart-selection and decision-support content.
Location: `src/components/QuickCompareMatrix.astro`
Notes:
- Expects optional `rows` and `title` props.
- Uses the shared `jdb-matrix` and `jdb-fitcheck` library styles.

### Footer
Purpose: Site-wide footer with navigation and newsletter signup.
Location: `src/components/Footer.astro`
Notes:
- Shared across pages.

### Hero
Purpose: Reusable hero section with two variants.
Location: `src/components/Hero.astro`
Notes:
- Supports a full-width variant with optional `backgroundImage`.
- Supports a split hero variant with text on the left and an image on the right via `variant="split"` and `imageSrc`.
- Use `jdb-hero__lede` and `jdb-hero__actions` within the default slot for consistent content styling.

### Image
Purpose: Shared image wrapper with consistent loading attributes.
Location: `src/components/Image.astro`
Notes:
- Use this instead of raw `<img>` tags where consistent handling is needed.

### Logos
Purpose: Shared logo-related UI.
Location: `src/components/Logos.astro`
Notes:
- Reusable when displaying brand or partner logos.

### Navigation
Purpose: Site-wide top navigation and mobile drawer.
Location: `src/components/Navigation.astro`
Notes:
- Shared across pages.

### PostMeta
Purpose: Metadata display for posts.
Location: `src/components/PostMeta.astro`
Notes:
- Intended for article metadata sections.

### SEO
Purpose: Shared SEO metadata component.
Location: `src/components/SEO.astro`
Notes:
- Used in layout wrappers for page metadata.

### Search
Purpose: Site-wide search trigger and modal panel.
Location: `src/components/Search.astro`
Notes:
- Shared across pages.

## Component creation checklist
When adding a new component:
1. Create the component in `src/components/`.
2. Add it to this README.
3. Add an example to `src/pages/components.astro`.
4. Reuse existing design tokens and class conventions.
5. Keep props explicit and minimal.
