import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // For SSR
  adapter: netlify(),
  integrations: [], // Add any Astro integrations here
  vite: {
    ssr: {
      noExternal: ['@chakra-ui/react'] // Ensure Chakra works in SSR
    }
  }
});