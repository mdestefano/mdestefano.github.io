import { defineConfig } from 'astro/config';

// Root user page (mdestefano.github.io) → served at the domain root, no base path.
export default defineConfig({
  site: 'https://mdestefano.github.io',
});
