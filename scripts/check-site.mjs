#!/usr/bin/env node
/**
 * Post-build checks over the generated HTML in dist/client.
 *
 * Fails (exit 1) when it finds:
 * - an internal link, image, script or stylesheet that points at nothing
 *   (no file and no matching rule in public/_redirects),
 * - a same-page #anchor link with no matching id,
 * - a page with no <title>, or an indexable page with no meta description,
 * - an <img> without an alt attribute,
 * - a JSON-LD block that isn't valid JSON.
 *
 * Run after `npm run build`:  npm run check
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist/client');
if (!existsSync(root)) {
  console.error('dist/client not found. Run `npm run build` first.');
  process.exit(1);
}

const redirectSources = new Set(
  readFileSync('public/_redirects', 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/)[0].replace(/\/+$/, '') || '/'),
);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

function targetExists(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (redirectSources.has(clean.replace(/\/+$/, '') || '/')) return true;
  const file = path.join(root, clean);
  return (
    (existsSync(file) && statSync(file).isFile()) ||
    existsSync(path.join(file, 'index.html')) ||
    existsSync(`${file}.html`)
  );
}

const problems = [];
const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const page = '/' + path.relative(root, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  // Ignore code samples and inline scripts, which can contain URL-like text.
  const markup = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
    .replace(/<code\b[\s\S]*?<\/code>/gi, '');
  const report = (message) => problems.push(`${page}: ${message}`);

  if (!/<title>[^<]+<\/title>/.test(html)) report('missing <title>');
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  if (!noindex && !/<meta name="description" content="[^"]+"/.test(html)) report('missing meta description');

  for (const [tag] of markup.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=/.test(tag)) report(`<img> without alt: ${tag.slice(0, 120)}`);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(json);
    } catch (error) {
      report(`invalid JSON-LD (${error.message}): ${json.trim().slice(0, 80)}`);
    }
  }

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const refs = [
    ...markup.matchAll(/<(?:a|link|area)\b[^>]*?\shref="([^"]+)"/gi),
    ...html.matchAll(/<(?:img|script|source|iframe|video|audio)\b[^>]*?\ssrc="([^"]+)"/gi),
  ].map((m) => m[1].replace(/&amp;/g, '&'));

  for (const ref of refs) {
    if (ref.startsWith('#')) {
      const id = decodeURIComponent(ref.slice(1));
      if (id && !ids.has(id)) report(`anchor link to missing id: ${ref}`);
    } else if (ref.startsWith('/') && !ref.startsWith('//')) {
      if (!targetExists(ref)) report(`broken internal link: ${ref}`);
    }
  }
}

if (problems.length) {
  console.error(`Found ${problems.length} problem(s) in ${htmlFiles.length} pages:\n`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} pages: no broken internal links or missing tags.`);
