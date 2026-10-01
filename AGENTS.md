# AGENTS.md

This repository uses Astro components in `src/components` as the shared UI building blocks for pages and blog posts.

## First check
Before creating a new reusable UI component, read and follow the guidance in:
- `src/components/README.md`
- `src/pages/components.astro`

## Component rules
1. Prefer reusing an existing component over creating a new one.
2. If a component already exists that covers the pattern, update that component rather than duplicating behavior.
3. New UI should be created as a reusable Astro component in `src/components/` when it is intended for broader use.
4. Keep components self-contained, prop-driven, and easy to reuse across pages.
5. Every new component should be documented in `src/components/README.md`.
6. Every new component should also be represented on `src/pages/components.astro` as an example usage.

## File conventions
- Place reusable UI in `src/components/*.astro`.
- Keep page-specific logic in pages or layouts when possible.
- Use the existing site design tokens (`--jdb-*`) and layout classes from the current codebase.
- Favor clear, explicit prop names over hardcoded assumptions.

## When to create a new component
Create a new component only when:
- the pattern is reusable beyond a single page,
- the same structure would otherwise be duplicated,
- or the UI needs to be documented and showcased as a shared library item.

## Documentation workflow
After adding a new component:
1. Add it to `src/components/README.md`.
2. Add an example block to `src/pages/components.astro`.
3. Keep the component and its docs in sync.
