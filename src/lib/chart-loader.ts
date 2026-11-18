/**
 * Loads Chart.js (and optional chart-type plugins) from jsDelivr exactly once
 * per page, with Subresource Integrity, and applies the site's dark theme.
 *
 * Versions are pinned. To upgrade one, change the URL and recompute its hash:
 *   npm pack <pkg>@<version> && openssl dgst -sha384 -binary <file> | openssl base64 -A
 */

type ChartGlobal = {
  new (canvas: HTMLCanvasElement, config: unknown): { destroy(): void };
  defaults: Record<string, any>;
};

declare global {
  interface Window {
    Chart?: ChartGlobal;
  }
}

const CHART_JS = {
  src: 'https://cdn.jsdelivr.net/npm/chart.js@4.6.1/dist/chart.umd.min.js',
  integrity: 'sha384-Emf5ZVIUiarAdhkgtqK+5/Z5qIvM6QoVrS+qAVtfyZVuD5lIHrac0me485+Antp0',
};

export const CHART_PLUGINS = {
  sankey: {
    src: 'https://cdn.jsdelivr.net/npm/chartjs-chart-sankey@0.14.0/dist/chartjs-chart-sankey.min.js',
    integrity: 'sha384-qO+UcjSHHumifg7pHEa3yM4N1NlKG5NrZoHwN0wubVR6rlaK60BjNZ3QHrSCU9Fj',
  },
  treemap: {
    src: 'https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@2.3.0/dist/chartjs-chart-treemap.min.js',
    integrity: 'sha384-nr2GTsyDh6Kjn1H+dqXUUJpoNTdiOr8swo074Cg0uOwPSRFx27UcVV98yi4LFw3H',
  },
} as const;

export type ChartPluginName = keyof typeof CHART_PLUGINS;

const pending = new Map<string, Promise<void>>();

function loadScript({ src, integrity }: { src: string; integrity: string }) {
  let promise = pending.get(src);
  if (!promise) {
    promise = new Promise<void>((resolve, reject) => {
      // A post may already include the same script by hand; reuse it.
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
      if (existing && (window.Chart || existing.dataset.loaded)) return resolve();
      const script = existing ?? document.createElement('script');
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
      });
      script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)));
      if (!existing) {
        script.src = src;
        script.integrity = integrity;
        script.crossOrigin = 'anonymous';
        document.head.append(script);
      }
    });
    pending.set(src, promise);
  }
  return promise;
}

let themed = false;

function applyTheme(Chart: ChartGlobal) {
  if (themed) return;
  themed = true;
  const css = getComputedStyle(document.documentElement);
  const token = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;
  Chart.defaults.color = token('--jdb-fg-dim', '#aab4c8');
  Chart.defaults.borderColor = token('--jdb-line', 'rgba(255,255,255,.08)');
  Chart.defaults.font.family = token('--jdb-font-body', 'Inter, sans-serif');
  Chart.defaults.font.size = 13;
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.tooltip.backgroundColor = token('--jdb-navy-900', '#0f1f38');
  Chart.defaults.plugins.tooltip.borderColor = token('--jdb-line-strong', 'rgba(255,255,255,.16)');
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Chart.defaults.animation = false;
  }
}

/** Resolves with the global Chart constructor once Chart.js and the requested plugins are ready. */
export async function loadChart(plugins: ChartPluginName[] = []): Promise<ChartGlobal> {
  await loadScript(CHART_JS);
  // Plugins register themselves on window.Chart, so they load after the core.
  await Promise.all(plugins.map((name) => loadScript(CHART_PLUGINS[name])));
  if (!window.Chart) throw new Error('Chart.js did not initialise');
  applyTheme(window.Chart);
  return window.Chart;
}

/**
 * Canvas can't read CSS variables, so replace any "var(--token)" string in a
 * chart config with the token's computed value. Lets configs use site colours.
 */
export function resolveCssVars<T>(value: T): T {
  const css = getComputedStyle(document.documentElement);
  const walk = (node: unknown): unknown => {
    if (typeof node === 'string') {
      const match = node.match(/^var\((--[\w-]+)\)$/);
      return match ? css.getPropertyValue(match[1]).trim() || node : node;
    }
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === 'object') {
      return Object.fromEntries(Object.entries(node).map(([key, child]) => [key, walk(child)]));
    }
    return node;
  };
  return walk(value) as T;
}
