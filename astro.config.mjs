import { defineConfig } from 'astro/config';
import globals from 'astro-globals';
// https://astro.build/config
export default defineConfig({
  integrations: [globals()]
});