import { defineConfig, type Plugin } from 'vitest/config';

// content.ts imports `getCollection` from the virtual module `astro:content`,
// which only exists inside Astro's own build pipeline. The unit tests here
// never touch a real collection — eventWhen is pure date formatting — so a
// tiny virtual-module stub is enough to let content.ts load under plain
// Vitest, without pulling in Astro's full Vite plugin chain (which fails to
// report errors usefully inside Vitest's worker pool on this project).
function stubAstroContent(): Plugin {
  const id = 'astro:content';
  return {
    name: 'stub-astro-content',
    resolveId(source) {
      if (source === id) return id;
      return null;
    },
    load(resolvedId) {
      if (resolvedId === id) {
        return 'export function getCollection() { throw new Error("astro:content is stubbed in tests"); }';
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [stubAstroContent()],
});
