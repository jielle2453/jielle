import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jielle2453.github.io',
  base: '/jielle/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    svelte(),
    tailwind({ applyBaseStyles: false }),
  ],
  server: { port: 4321 },
});
