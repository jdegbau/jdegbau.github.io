/**
 * Astro integration that renders a 1200×630 PNG social card for every blog
 * post (plus a site-wide default) before Astro builds the site.
 *
 * Output: public/assets/img/og/<slug>.png and public/assets/img/og/default.png
 * (git-ignored; regenerated on every `astro build` / `astro dev`).
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { parse as parseYaml } from 'yaml';

const require = createRequire(import.meta.url);
const WIDTH = 1200;
const HEIGHT = 630;

const colors = {
  canvas: '#0a1526',
  panel: '#152a49',
  line: '#223a5e',
  fg: '#e8ecf4',
  dim: '#aab4c8',
  muted: '#8b97b0',
  orange: '#ff4d00',
  orangeTint: '#ff7a3d',
  bracket: '#33547e',
};

// Tiny hyperscript helper for satori's React-element-shaped input.
const h = (type, style, ...children) => ({
  type,
  props: { style: { display: 'flex', ...style }, children: children.flat() },
});

async function loadFonts() {
  const font = (pkg, file) => readFile(require.resolve(`${pkg}/files/${file}`));
  const [monoBold, monoRegular, interRegular] = await Promise.all([
    font('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-700-normal.woff'),
    font('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff'),
    font('@fontsource/inter', 'inter-latin-400-normal.woff'),
  ]);
  return [
    { name: 'JetBrains Mono', data: monoBold, weight: 700, style: 'normal' },
    { name: 'JetBrains Mono', data: monoRegular, weight: 400, style: 'normal' },
    { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
  ];
}

function titleSize(title) {
  if (title.length <= 32) return 72;
  if (title.length <= 52) return 60;
  if (title.length <= 75) return 52;
  return 44;
}

function card({ eyebrow, title, subtitle, footer }) {
  const content = h(
    'div',
    {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '56px 72px 48px',
    },
    // Logo: (jdegbau) => {}
    h(
      'div',
      { fontFamily: 'JetBrains Mono', fontSize: 34, alignItems: 'center' },
      h('span', { color: colors.bracket }, '('),
      h('span', { color: colors.fg }, 'jdegbau'),
      h('span', { color: colors.bracket }, ')'),
      h('span', { color: colors.orange, margin: '0 14px' }, '=>'),
      h('span', { color: colors.fg }, '{'),
      h('span', { width: 16, height: 34, backgroundColor: colors.orange, margin: '0 4px' }),
      h('span', { color: colors.fg }, '}'),
    ),
    h(
      'div',
      { flexDirection: 'column', gap: 20 },
      h(
        'span',
        { fontFamily: 'JetBrains Mono', fontSize: 24, color: colors.orangeTint, textTransform: 'uppercase', letterSpacing: 3 },
        `// ${eyebrow}`,
      ),
      h(
        'span',
        { fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: titleSize(title), lineHeight: 1.15, color: colors.fg },
        title,
      ),
      subtitle ? h('span', { fontSize: 28, lineHeight: 1.4, color: colors.dim }, subtitle) : [],
    ),
    h('span', { fontFamily: 'JetBrains Mono', fontSize: 24, color: colors.muted }, footer),
  );

  return h(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      flexDirection: 'column',
      backgroundColor: colors.canvas,
      backgroundImage: `radial-gradient(circle at 100% 0%, ${colors.panel} 0%, ${colors.canvas} 60%)`,
      fontFamily: 'Inter',
      color: colors.fg,
    },
    content,
    h('div', { height: 12, width: '100%', backgroundColor: colors.orange }),
  );
}

async function render(element, fonts) {
  const svg = await satori(element, { width: WIDTH, height: HEIGHT, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
}

async function readPosts(blogDir) {
  const files = (await readdir(blogDir)).filter((file) => file.endsWith('.md'));
  return Promise.all(
    files.map(async (file) => {
      const source = await readFile(path.join(blogDir, file), 'utf8');
      const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const data = (match && parseYaml(match[1])) || {};
      const slug = String(data.slug ?? file.replace(/\.md$/, '')).replace(/^\/+|\/+$/g, '');
      return { slug, title: String(data.title ?? slug) };
    }),
  );
}

export async function generateOgCards(root) {
  const blogDir = fileURLToPath(new URL('./src/content/blog/', root));
  const outDir = fileURLToPath(new URL('./public/assets/img/og/', root));
  await mkdir(outDir, { recursive: true });
  const fonts = await loadFonts();
  const posts = await readPosts(blogDir);

  const jobs = posts.map(async ({ slug, title }) => {
    const png = await render(card({ eyebrow: 'article', title, footer: 'jdegbau.com/blog' }), fonts);
    await writeFile(path.join(outDir, `${slug}.png`), png);
  });
  jobs.push(
    (async () => {
      const png = await render(
        card({
          eyebrow: 'seo · data · development',
          title: 'Joshua DeGrasse-Baumann',
          subtitle: 'SEO consultant, data enthusiast, and developer writing about analytics, SEO, and measurement.',
          footer: 'jdegbau.com',
        }),
        fonts,
      );
      await writeFile(path.join(outDir, 'default.png'), png);
    })(),
  );
  await Promise.all(jobs);
  return posts.length + 1;
}

export default function ogCards() {
  return {
    name: 'jdegbau:og-cards',
    hooks: {
      'astro:config:setup': async ({ config, logger }) => {
        const count = await generateOgCards(config.root);
        logger.info(`Generated ${count} social cards in public/assets/img/og/`);
      },
    },
  };
}
