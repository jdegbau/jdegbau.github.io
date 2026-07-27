/// <reference types="vite/client" />

declare interface ImportMeta {
  glob<T = Record<string, unknown>>(pattern: string, options?: { eager?: boolean } & Record<string, unknown>): T;
  globEager<T = Record<string, unknown>>(pattern: string): T;
}
