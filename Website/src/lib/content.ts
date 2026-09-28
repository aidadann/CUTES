import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { defaultLang } from '../i18n/ui';

/**
 * Language-aware access to the Markdown collections.
 *
 * Entry ids are the file path without the extension, so a file at
 * `src/content/pages/en/parish-history.md` has the id `en/parish-history`.
 * The language is therefore the first path segment and the slug is the rest —
 * no frontmatter field to keep in sync, and no way for the two to disagree.
 */

type LocalizedCollection = 'pages' | 'events' | 'services' | 'resources';

export function langOf(id: string): Lang {
  const first = id.split('/')[0];
  return first === 'ms' ? 'ms' : 'en';
}

export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

/**
 * Every published entry of a collection in one language, sorted by `order`
 * then title. Drafts are dropped in production but kept while running
 * `astro dev`, so a half-written page can be previewed without publishing it.
 */
export async function localized<C extends LocalizedCollection>(
  collection: C,
  lang: Lang,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, ({ id, data }) => {
    if (langOf(id) !== lang) return false;
    return import.meta.env.DEV || !(data as { draft?: boolean }).draft;
  });

  return entries.sort((a, b) => {
    const orderDiff = (a.data as { order: number }).order - (b.data as { order: number }).order;
    if (orderDiff !== 0) return orderDiff;
    return (a.data as { title: string }).title.localeCompare((b.data as { title: string }).title);
  });
}

/**
 * One entry by language and slug, falling back to English when a Bahasa
 * Malaysia translation has not been written yet. A missing translation should
 * show the reader the English page, not a 404.
 */
export async function localizedEntry<C extends LocalizedCollection>(
  collection: C,
  lang: Lang,
  slug: string,
): Promise<CollectionEntry<C> | undefined> {
  // Filtered through getCollection rather than getEntry: asking getEntry for an
  // id that does not exist logs a build warning, and "the BM translation has
  // not been written yet" is an expected state, not a warning.
  const wanted = new Set([`${lang}/${slug}`, `${defaultLang}/${slug}`]);
  const matches = await getCollection(collection, ({ id }) => wanted.has(id));
  return (
    matches.find((entry) => entry.id === `${lang}/${slug}`) ??
    matches.find((entry) => entry.id === `${defaultLang}/${slug}`)
  );
}

/**
 * Build `getStaticPaths` entries for a `[lang]/[slug]` route.
 *
 * English pages are always routed in both languages, so `/ms/services/baptism`
 * exists even before the BM translation does — it renders the English text
 * with the BM interface around it rather than 404ing.
 */
export async function localizedPaths<C extends LocalizedCollection>(
  collection: C,
  langs: readonly Lang[],
): Promise<{ params: { lang: Lang; slug: string }; props: { entry: CollectionEntry<C> } }[]> {
  const paths: {
    params: { lang: Lang; slug: string };
    props: { entry: CollectionEntry<C> };
  }[] = [];

  for (const lang of langs) {
    const entries = await localized(collection, lang);
    const seen = new Set(entries.map((entry) => slugOf(entry.id)));
    for (const entry of entries) {
      paths.push({ params: { lang, slug: slugOf(entry.id) }, props: { entry } });
    }

    if (lang !== defaultLang) {
      // Fill the gaps with the English original.
      const fallbacks = await localized(collection, defaultLang);
      for (const entry of fallbacks) {
        const slug = slugOf(entry.id);
        if (seen.has(slug)) continue;
        paths.push({ params: { lang, slug }, props: { entry } });
      }
    }
  }

  return paths;
}

/** Events split into upcoming and past, relative to the build date. */
export function splitEvents(entries: CollectionEntry<'events'>[]) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const isUpcoming = (entry: CollectionEntry<'events'>) => {
    const end = entry.data.endDate ?? entry.data.startDate;
    return end.getTime() >= today.getTime();
  };

  const upcoming = entries
    .filter(isUpcoming)
    .sort((a, b) => a.data.startDate.getTime() - b.data.startDate.getTime());

  const past = entries
    .filter((entry) => !isUpcoming(entry))
    .sort((a, b) => b.data.startDate.getTime() - a.data.startDate.getTime());

  return { upcoming, past };
}
