import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/**
 * Content schemas.
 *
 * These are the site's test suite. There is no database and no CMS, so the
 * only thing standing between a mistyped YAML key and a blank page in front of
 * the parish is this file. A schema violation fails `npm run build` with the
 * offending file and field named, before anything is deployed.
 *
 * Language is derived from the folder a file sits in (`en/…`, `ms/…`) rather
 * than a frontmatter field, so it cannot drift out of sync with the route it
 * is rendered on.
 */

const LANGS = ['en', 'ms'] as const;

/** Markdown collections are stored as `<collection>/<lang>/<slug>.md`. */
const markdownIn = (dir: string) =>
  glob({ pattern: '**/[^_]*.{md,mdx}', base: `./src/content/${dir}` });

/** Shared frontmatter for every prose page. */
const proseBase = {
  title: z.string().min(1),
  /** Short summary. Used for meta description, cards and search results. */
  summary: z.string().min(1).max(300),
  /** Lower numbers sort first in listings. */
  order: z.number().int().default(100),
  /** Shown as "Updated 4 September 2026" when present. */
  updated: z.coerce.date().optional(),
  /** Hide from listings without deleting the file. */
  draft: z.boolean().default(false),
};

/**
 * Static prose: vision and mission, parish priest, deacon, parish history,
 * about CUTES, life at CUTES, BEC.
 */
const pages = defineCollection({
  loader: markdownIn('pages'),
  schema: ({ image }) =>
    z.object({
      ...proseBase,
      /** Optional lead image, e.g. a portrait of the parish priest. */
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Free-form grouping used by the parish index page. */
      section: z.enum(['parish', 'cutes', 'home']).default('parish'),
    }),
});

const events = defineCollection({
  loader: markdownIn('events'),
  schema: ({ image }) =>
    z.object({
      ...proseBase,
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      /** Free text: "Parish hall", "Cameron Highlands". */
      location: z.string().min(1),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Slug of a gallery album, if this event has photos. */
      gallery: z.string().optional(),
      /** A Google Form or similar. No registration system is built in. */
      registrationUrl: z.string().url().optional(),
      /** Recurs every year — keeps it listed after the date passes. */
      annual: z.boolean().default(false),
    }),
});

const services = defineCollection({
  loader: markdownIn('services'),
  schema: () =>
    z.object({
      ...proseBase,
      /** Bullet list rendered above the body as "What to prepare". */
      requirements: z.array(z.string()).optional(),
      /** Who to speak to. Falls back to the parish office when omitted. */
      contact: z.string().optional(),
      /** How far ahead the parish needs to be told, e.g. "six months". */
      noticePeriod: z.string().optional(),
    }),
});

const resources = defineCollection({
  loader: markdownIn('resources'),
  schema: () =>
    z.object({
      ...proseBase,
      category: z.enum(['prayer', 'devotion', 'other']).default('prayer'),
    }),
});

/**
 * The CUTES committee, in one language-neutral file. Names are not translated,
 * so roughly sixty of them are typed once instead of twice. Role and ministry
 * *labels* are translated through src/i18n/ui.ts by key.
 */
const ministries = defineCollection({
  loader: file('./src/content/committee/roster.yaml'),
  schema: z.object({
    /** Matches a `ministry.<id>` key in src/i18n/ui.ts. */
    id: z.string(),
    order: z.number().int(),
    /** Ministry of Leaders is rendered differently: no leader/assistant split. */
    isLeadership: z.boolean().default(false),
    /** One or two sentences on what this ministry actually does. */
    description: z
      .object({
        en: z.string(),
        ms: z.string(),
      })
      .optional(),
    members: z
      .array(
        z.object({
          name: z.string().min(1),
          /** Matches a `role.<key>` key in src/i18n/ui.ts. */
          role: z.enum([
            'coordinator',
            'vice-coordinator-1',
            'vice-coordinator-2',
            'treasurer',
            'vice-treasurer',
            'secretary',
            'vice-secretary',
            'leader',
            'assistant',
            'member',
          ]),
          /** Course or faculty, shown small under the name. Optional. */
          detail: z.string().optional(),
        }),
      )
      .min(1),
  }),
});

/**
 * Gallery albums. Photos are discovered from the filesystem by
 * src/lib/gallery.ts — this file only names and orders the albums.
 */
const albums = defineCollection({
  loader: file('./src/content/gallery/albums.yaml'),
  schema: z.object({
    /** Must match the folder name under src/assets/gallery/. */
    id: z.string(),
    order: z.number().int(),
    title: z.object({ en: z.string(), ms: z.string() }),
    description: z.object({ en: z.string(), ms: z.string() }).optional(),
  }),
});

/** Mass times. Language-neutral: the day and time are the same in both locales. */
const massTimes = defineCollection({
  loader: file('./src/content/schedule/mass.yaml'),
  schema: z.object({
    id: z.string(),
    order: z.number().int(),
    /** Day name key, translated in the template. */
    day: z.enum([
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
      'first-friday',
      'weekday',
    ]),
    /** As displayed, e.g. "8:00 am". Kept as text so the parish controls format. */
    time: z.string().min(1),
    /** "English", "Bahasa Malaysia", "Tamil" — a proper noun in both locales. */
    language: z.string().min(1),
    kind: z.enum(['mass', 'confession', 'adoration', 'devotion']).default('mass'),
    note: z.object({ en: z.string(), ms: z.string() }).optional(),
    /** Show on the home page summary. Keeps the home page short. */
    highlight: z.boolean().default(false),
  }),
});

export const collections = { pages, events, services, resources, ministries, albums, massTimes };

export type { LANGS };
