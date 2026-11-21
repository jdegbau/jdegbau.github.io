# Components Library

This folder contains the reusable Astro UI components for the site.

## How to use this library
- Check this file first before creating a new shared component.
- Reuse an existing component whenever possible.
- If a component already exists but needs a new variant, extend it carefully rather than creating a duplicate.
- Add new components here and also show them on the components showcase page at `src/pages/components.astro`.

## Writing posts with components (MDX)
Plain `.md` posts can't contain components. A post that embeds components is a `.mdx` file in `src/content/blog/`, with the same front matter as any other post. Import components at the top, below the front matter:

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="tip">
Markdown works **inside** components.
</Callout>
```

Leave a blank line between a component tag and the markdown inside it, as in the `Steps` example below.

Front matter options handled by the post template (`src/pages/blog/[slug].astro`), so they need no import:
- `faq`: a list of `{ question, answer }` (answers may contain simple HTML). Renders `FAQAccordion` at the end of the post and adds matching FAQPage schema.
- `series` + `seriesOrder`: renders `PostSeriesNav` at the end of the post.

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
- The whole card is clickable: the title link stretches over the card (`.jdb-post h3 a::after`). The image link is removed from the tab order so keyboard users get one stop per card. Don't add other links inside the card body; they'd sit under the stretched link.

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
- Optional `title` and `eyebrow` props set the heading text (defaults keep the data-viz guide wording).
- Uses native `<details>/<summary>` for accessible, theme-consistent expansion.
- On blog posts, prefer the `faq` front matter field: the template renders this component and the FAQPage schema from the same items.

### CallToAction
Purpose: End-of-page call to action with a headline, one line of context, and one or two buttons.
Location: `src/components/CallToAction.astro`
Notes:
- Props: `title`, `primary: { href, label }`, optional `secondary`, `text`, `prompt` (terminal-style line, default "next step"), `price: { amount, unit }`, `headingLevel` (`h2` default or `h3`).
- Uses the shared `.jdb-cta` styles in `main.css` (section 31).
- Every page should end with a clear next step; use this instead of hand-building a CTA section.

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
- Fields: `name`, `email`, `message`. Keep it short: every extra field lowers completion.
- Fields carry `autocomplete`/`inputmode` hints so browsers can fill them. The email is trimmed before submitting, invalid fields turn red only after the visitor has interacted with them (`:user-invalid`), and the button switches to "Sending…" and blocks double submits.

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
Purpose: Reusable hero section with intro, full-width, and split variants.
Location: `src/components/Hero.astro`
Notes:
- Supports an intro variant for compact page headings, with `containerWidth="narrow"` or `containerWidth="wide"`.
- Supports a full-width variant with optional `backgroundImage`.
- Supports a split hero variant with text on the left and an image on the right via `variant="split"` and `imageSrc`.
- Use `jdb-hero__lede` and `jdb-hero__actions` within the default slot for consistent content styling.

### Icon
Purpose: Inline SVG icons (social brands, calendar, clock, envelope) without a third-party icon script.
Location: `src/components/Icon.astro`
Notes:
- `<Icon name="github" />` renders a 1em-tall icon in `currentColor`, so it inherits text size and color.
- Decorative by default (`aria-hidden`). Pass `label` when the icon is the only content of a link or button and the parent has no `aria-label`.
- Available names: `linkedin-in`, `linkedin`, `github`, `instagram`, `threads`, `bluesky`, `x-twitter`, `calendar-days`, `clock`, `envelope`. To add one, copy its path data and viewBox from Font Awesome Free (`@fortawesome/free-*-svg-icons`) into the map in the component.

### Image
Purpose: Shared image wrapper with consistent loading attributes.
Location: `src/components/Image.astro`
Notes:
- Use this instead of raw `<img>` tags where consistent handling is needed.

### Logotype
Purpose: The `(jdegbau)=>{}` text logo — the only place the brand mark's markup and styles are defined.
Location: `src/components/Logotype.astro`
Notes:
- Always render `<Logotype />` for the logo. Don't hand-write the `<em>(</em><b>jdegbau</b>…` markup or restyle `.jdb-logo` elsewhere; that duplication is how the header and footer drifted apart (different weights) before this component existed.
- Brand spec it enforces: JetBrains Mono at weight 500 throughout; parentheses and braces in `--jdb-navy-600`; the word in `--jdb-fg`; the arrow in `--jdb-orange-400` (orange *text* tone, not the `#ff4d00` fill colour).
- Props: `href` (default `/`; pass `null` for an unlinked mark, which then gets `role="img"`), `size` (`sm` | `md` | `lg` | `xl`, default `md` = 1.05rem as used in the header/footer), `cursor` (blinking block cursor between the braces, default `true`), `theme` (`dark` | `light`), `label` (link's accessible name), `class`.
- The cursor blinks six times on load and then rests solid, so it doesn't pull attention away from the page; it doesn't blink at all under `prefers-reduced-motion`. When printed, the logo switches to the light colours and drops the cursor.
- Used by `Navigation` (header and mobile drawer) and `Footer`.

### Logos
Purpose: Row of brand or partner logos.
Location: `src/components/Logos.astro`
Notes:
- Reusable when displaying brand or partner logos.
- Props: optional `logos` (array of `{ src, alt, variant? }`; defaults to the site's client logos) and optional `label` (accessible list label).
- Shows a single row on wide containers. When the container is too narrow to fit every logo on one line (≤ 46rem, via a container query), it becomes an auto-scrolling marquee that pauses on hover/focus. With `prefers-reduced-motion`, it becomes a swipeable horizontal row instead.

### Navigation
Purpose: Site-wide top navigation and mobile drawer.
Location: `src/components/Navigation.astro`
Notes:
- Shared across pages.
- Order: Blog first and Contact last (the positions people remember best); Contact is marked `cta: true` and renders as an outlined button. Keep the list to five items or fewer.
- External items (`external: true`) open in a new tab and show an external-link icon plus screen-reader text.
- The drawer sets `aria-expanded` on the menu button, closes with Escape, and moves focus into the panel and back to the button.

### PostMeta
Purpose: Metadata display for posts.
Location: `src/components/PostMeta.astro`
Notes:
- Intended for article metadata sections.
- Props: `date`, `readingTime`, `url`, `title`, and optional `updated` (a formatted date shown as "Updated …" when the post was revised).

### SEO
Purpose: Shared SEO metadata component.
Location: `src/components/SEO.astro`
Notes:
- Used in layout wrappers for page metadata.
- `noindex` adds `<meta name="robots" content="noindex">` and omits the canonical link, `og:url`, and default JSON-LD schema (a custom `schema` prop is still emitted).

### Search
Purpose: Site-wide search trigger and modal panel.
Location: `src/components/Search.astro`
Notes:
- Shared across pages.
- Opens with `/` or Ctrl/⌘+K, closes with Escape or a click outside. The `/` hint is hidden on touch devices.
- The index (`/search.json`: title, excerpt, tags) is prefetched when someone hovers, focuses, or touches the trigger.
- Matching ignores case, accents, and punctuation; every word must appear in the title, excerpt, or tags, and title matches rank first. Matches are highlighted, a result count is shown, and the three newest posts are suggested before anything is typed.
- Arrow keys move between results; Enter in the field opens the top result.

### SummaryCard
Purpose: At-a-glance summary block: title, one-line definition, and labeled rows.
Location: `src/components/SummaryCard.astro`
Notes:
- Props: `title`, `definition?`, `eyebrow?` (default `tl;dr`), `items?: { label, value, tone? }[]`.
- `tone` is `good | warn | bad | neutral` and colors the row with the status tokens. `value` accepts simple HTML.
- Optional default slot (a mini chart, image) sits beside the text when there's room and stacks below it when there isn't.
- Examples: Use it when / Avoid it when / Best alternative; Pros / Cons / Verdict.

### Callout
Purpose: Aside for tips, warnings, notes, and "why this works" insights.
Location: `src/components/Callout.astro`
Notes:
- Props: `type?: insight | tip | warning | note` (default `note`), `title?`.
- Wraps the existing `.jdb-callout` styles in `main.css` (section 22): insight uses the default orange box, tip uses `--tip`, warning uses `--warn`, note uses `--quiet`.
- Body is the default slot; markdown works inside it in MDX.

### Steps
Purpose: Numbered how-to steps on a connecting rail.
Location: `src/components/Steps.astro`
Notes:
- Wrap a normal ordered list (a markdown `1.` list in MDX). A bold phrase at the start of an item reads as the step title.
- Optional `label` names the group for screen readers.
- Images inside items get spacing and rounded corners.

```mdx
<Steps label="How to read a Sankey chart">

1. **Start at the left.** Each node is a starting group.
2. **Follow the widest band.** Width is quantity.

</Steps>
```

### Tabs + TabPanel
Purpose: Accessible tabbed content (instructions per tool, code in several languages).
Location: `src/components/Tabs.astro`, `src/components/TabPanel.astro`
Notes:
- `<Tabs label="Build it in" group="build-tool">` wraps `<TabPanel label="Excel">…</TabPanel>` children.
- Without JavaScript the panels stack under their labels. With it, an ARIA tablist is built (arrow keys, Home, End).
- Tab groups that share a `group` switch together, and the choice is remembered in `localStorage` (safe if storage is blocked).
- CSS classes use the `jdb-tabset` prefix; `jdb-tabs` belongs to the header navigation.

### BeforeAfter
Purpose: Before/after comparison of any two visuals, with a "What changed" caption.
Location: `src/components/BeforeAfter.astro`
Notes:
- Images: `before` / `after` props as `{ src, alt, width?, height? }`. Other content (charts, code): the `before` and `after` named slots.
- `beforeLabel` / `afterLabel` default to Before / After. `caption` explains the change.
- `layout="slider"` (images only) overlays the two images with a draggable, keyboard-accessible divider. It falls back to side by side without JavaScript. Use two images of the same size.
- Side by side when each pane gets about 16rem, stacked otherwise.

### AnnotatedFigure
Purpose: Figure with numbered callout markers and a matching numbered legend.
Location: `src/components/AnnotatedFigure.astro`
Notes:
- Props: `src` + `alt` (alt is required when `src` is set), or a default slot for inline SVG; `callouts: { x, y, title, text? }[]`; `caption?`.
- `x` and `y` are percentages from the visual's top-left corner. The legend carries the meaning, so markers are decorative for screen readers.
- Use for chart anatomy, UI teardowns, annotated screenshots.

### DownloadCard
Purpose: Card offering one or more downloads (cheat sheets, datasets, templates).
Location: `src/components/DownloadCard.astro`
Notes:
- Props: `title`, `description?`, `files: { label, href, format, size? }[]`. The first file gets the primary button.
- Local files go in `public/assets/downloads/` and get the `download` attribute. External links (e.g. a Google Sheets copy link) open in a new tab.

### VideoEmbed
Purpose: Privacy-friendly, click-to-load YouTube embed with VideoObject schema.
Location: `src/components/VideoEmbed.astro`
Notes:
- Props: `youtubeId`, `title`, `description`, `uploadDate` (ISO date), `duration?` (ISO 8601, e.g. `PT8M30S`), `chapters?: { start, title }[]` (start in seconds).
- Shows the thumbnail until clicked, then loads a `youtube-nocookie.com` iframe. Chapter buttons start playback at that time.
- Emits its own VideoObject JSON-LD, with chapters as `Clip` parts.

### PostSeriesNav
Purpose: Previous/next links and the numbered list of parts for a multi-part series.
Location: `src/components/PostSeriesNav.astro`
Notes:
- Props: `series`, `current` (slug of the post being viewed).
- Posts join a series with `series` + `seriesOrder` front matter. The post template renders this automatically.
- Renders nothing until two or more posts share the series.

### RelatedPosts
Purpose: Grid of related posts ranked by shared tags.
Location: `src/components/RelatedPosts.astro`
Notes:
- Props: `current?` (slug to exclude), `tags?` (defaults to the current post's tags), `limit?` (default 3), `title?` (default "Keep reading").
- Falls back to the newest posts when nothing matches. Renders `BlogCard`.

### ChartPlayground
Purpose: Live Chart.js chart with toggles that show what a design choice does. (Chart-specific.)
Location: `src/components/ChartPlayground.astro`, loader in `src/lib/chart-loader.ts`
Notes:
- Props: `id`, `type`, `data`, `options?`, `plugins?: ('sankey' | 'treemap')[]`, `controls?: { label, patch, checked? }[]`, `alt` (required text description), `caption?`, `table?: { columns, rows }`, `height?` (px, default 360).
- Each control is a checkbox; when it's on, its `patch` is deep-merged into the config (objects merge, arrays replace, so patch a whole `datasets` array).
- Config is plain JSON: no functions or scriptable options. Colors can be site tokens written as `"var(--jdb-orange-500)"`.
- Chart.js 4.6.1 and plugins load once per page from jsDelivr with SRI, lazily when the chart nears the viewport. The site's dark theme defaults are applied, and animation is off for `prefers-reduced-motion`.
- To upgrade a library, edit the pinned URL and hash in `src/lib/chart-loader.ts` (instructions are in the file).
- `table` adds a "View the data" panel for screen readers, and as a fallback if the chart can't load.

## Interaction guidelines (UX principles)
These rules come from established UX research (the "Laws of UX" collection at lawsofux.com). They shape the components; **don't name them in site copy**, just follow them.

- **Big, close targets (Fitts's Law).** Anything clicked or tapped on its own is at least `--jdb-target` (44px). Make whole cards clickable instead of tiny links inside them.
- **Fewer, clearer choices (Hick's Law, Choice Overload).** One primary button per view, at most one secondary. Keep the main nav to five items.
- **Follow conventions (Jakob's Law).** The logo goes home, `/` and Ctrl/⌘+K open search, Escape closes overlays, external links are marked, visited links in prose look visited, and posts show breadcrumbs.
- **Respond fast (Doherty Threshold).** Give feedback in under 400ms: press states on buttons, "Sending…" on submit, data prefetched on intent.
- **Hover means clickable (Similarity, Uniform Connectedness).** Only links lift on hover (`--jdb-lift`). Static cards and non-link tags don't react.
- **Group by proximity and region (Proximity, Common Region).** Use the spacing scale: tight inside a group, larger between groups, and a card or section surface for content that belongs together.
- **Make the important thing stand out (Von Restorff, Serial Position).** Reserve orange fills and outlines for the main action. Put the most important nav items first and last.
- **Show progress (Goal-Gradient, Zeigarnik).** Multi-step UI shows how far along someone is (quiz progress, reading bar, series "part 2 of 4").
- **End well (Peak-End Rule).** Confirmation, empty, and error states say what happens next and offer one next step.
- **Be forgiving with input (Postel's Law, Tesler's Law).** Use `autocomplete`/`inputmode`, trim whitespace, match search terms in any order, and only flag errors after interaction.
- **Chunk information (Miller's Law, Chunking).** Cap lists of results, use subheads every few paragraphs, and keep prose at about 68ch.
- **Limit motion (Selective Attention, Cognitive Load).** Decorative animation stops after a few cycles and is disabled under `prefers-reduced-motion`.

## Content guidelines (Orbit Media approach)
The site follows Andy Crestodina and Orbit Media's approach to content and conversion (see *Content Chemistry* and the Orbit blog). Apply these when writing pages or posts.

**Every page**
- **Say what you do, for whom, in the header.** Use a descriptive headline, not a clever one. A visitor should get it in five seconds.
- **Answer questions, address objections, add evidence.** Answer what visitors want to know, cover their hesitations (FAQs work well), and back up claims with proof such as logos, specifics, and testimonials. Never invent proof.
- **End with one clear next step.** Use `CallToAction`. Primary action: the SEO Helpline or the contact form. Secondary: the newsletter or the blog.
- **Use descriptive labels.** Use labels like "SEO Helpline", not vague ones like "Solutions". Keep the main nav short with Contact last.
- **Make it scannable.** Write short paragraphs, use a meaningful subhead every few paragraphs, use bullets for lists, and bold sparingly.

**Blog posts**
- **Fit the content mission.** The blog is where marketers and analysts get practical guides on content strategy, data visualization, measurement, and SEO, so they can make better decisions and prove the value of their work. Skip topics that don't fit.
- **Target a real question.** Pick a topic with a clear search or audience need, put the key phrase in the title, H1, URL, and excerpt, and answer the question early.
- **Go deeper than what already ranks.** Add something new: original data or research, a framework, worked examples, visuals, or quotes from contributors (ally-based content).
- **Show the work.** Use charts, screenshots, and annotated figures (`ChartPlayground`, `AnnotatedFigure`, `BeforeAfter`). Every visual needs alt text.
- **Link internally.** Link to related posts. The template adds `RelatedPosts`, a subscribe prompt, and the author box automatically.
- **Promote every post.** Plan the email, social, and ally outreach (people quoted or mentioned) before you publish. Update and re-promote strong older posts rather than letting them decay. Set `updated` in the front matter when you do.

## Component creation checklist
When adding a new component:
1. Create the component in `src/components/`.
2. Add it to this README.
3. Add an example to `src/pages/components.astro`.
4. Reuse existing design tokens and class conventions.
5. Keep props explicit and minimal.
