import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://julianvoss.axvolestudio.com',
  integrations: [sitemap()],
});