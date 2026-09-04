// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Two deploy targets are supported from one config:
//
//   Cloudflare Pages  -> BASE_PATH unset, site served from the domain root.
//   GitHub Pages      -> BASE_PATH=/CUTES/, site served from a repo subpath.
//
// Every internal link is built through `localePath()` in src/i18n/utils.ts,
// which prefixes import.meta.env.BASE_URL. Never hand-write a leading-slash
// href in a template: it works on Cloudflare and 404s on GitHub Pages.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://aidadann.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-MY', ms: 'ms-MY' },
      },
    }),
  ],
  image: {
    // The gallery is the only heavy part of the site. Cap the work the build
    // has to do so a folder of 4000px phone photos cannot blow up CI time.
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    // Cast: @tailwindcss/vite ships a Vite 6 Plugin type, Astro 5 expects its
    // own bundled Vite types. Same object, different type identity.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
