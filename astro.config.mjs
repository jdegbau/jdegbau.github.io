import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jdegbau.com',
  vite: {
    build: {
      target: 'es2020',
    },
  },
});
