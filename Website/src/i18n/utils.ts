import { defaultLang, languages, type Lang } from './ui';

/**
 * URL helpers.
 *
 * The site is deployed to two places with different roots:
 *
 *   Cloudflare Pages -> base "/"
 *   GitHub Pages     -> base "/CUTES/"
 *
 * A hand-written `href="/en/gallery"` works on the first and 404s on the
 * second, and the failure is invisible until someone opens the deployed site.
 * So every internal link in this codebase goes through `localePath()` or
 * `assetPath()`. That is the whole reason this file exists, and it is why
 * these four functions are the only ones with unit tests.
 */

/** Astro injects BASE_URL at build time. Fall back to "/" outside Astro (tests). */
const RUNTIME_BASE: string =
  (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';

/** Collapse duplicate slashes and guarantee exactly one leading and trailing slash. */
export function normalizeBase(base: string): string {
  const trimmed = base.replace(/\/+/g, '/').replace(/^\/*/, '/').replace(/\/*$/, '/');
  return trimmed === '' ? '/' : trimmed;
}

export function isLang(value: string): value is Lang {
  return Object.prototype.hasOwnProperty.call(languages, value);
}

/**
 * Build an internal URL for a page in a given language.
 *
 *   localePath('en')                   -> "/en/"
 *   localePath('ms', 'gallery/retreat') -> "/ms/gallery/retreat/"
 *   localePath('en', '/bulletin')       -> "/en/bulletin/"
 */
export function localePath(lang: Lang, path = '', base: string = RUNTIME_BASE): string {
  const root = normalizeBase(base);
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean === '' ? `${root}${lang}/` : `${root}${lang}/${clean}/`;
}

/**
 * Build a URL for something in `public/` — a PDF, the favicon, an og:image.
 *
 *   assetPath('bulletin/2026-09-06.pdf') -> "/bulletin/2026-09-06.pdf"
 */
export function assetPath(path: string, base: string = RUNTIME_BASE): string {
  const root = normalizeBase(base);
  return `${root}${path.replace(/^\/+/, '')}`;
}

/**
 * Read the active language out of the request URL. Anything unrecognised
 * (or the bare root) falls back to the default language rather than throwing.
 */
export function getLangFromUrl(url: URL | string, base: string = RUNTIME_BASE): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const root = normalizeBase(base);
  const rest = pathname.startsWith(root) ? pathname.slice(root.length) : pathname.replace(/^\/+/, '');
  const first = rest.split('/').filter(Boolean)[0] ?? '';
  return isLang(first) ? first : defaultLang;
}

/**
 * Swap the language segment of the current path, keeping the reader on the
 * same page. This is what makes the header language switcher useful instead of
 * a link that dumps everyone back on the home page.
 *
 *   switchLangPath('/en/gallery/retreat', 'ms') -> "/ms/gallery/retreat/"
 */
export function switchLangPath(
  pathname: string,
  toLang: Lang,
  base: string = RUNTIME_BASE,
): string {
  const root = normalizeBase(base);
  const rest = pathname.startsWith(root) ? pathname.slice(root.length) : pathname.replace(/^\/+/, '');
  const segments = rest.split('/').filter(Boolean);
  if (segments.length > 0 && isLang(segments[0]!)) segments.shift();
  return localePath(toLang, segments.join('/'), base);
}

/** The other language. With exactly two locales this is a toggle, not a menu. */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ms' : 'en';
}

/** Every locale, for `getStaticPaths`. */
export function localeParams(): { params: { lang: Lang } }[] {
  return (Object.keys(languages) as Lang[]).map((lang) => ({ params: { lang } }));
}

/** BCP 47 tag for `<html lang>` and `hreflang`. */
export const htmlLang: Record<Lang, string> = {
  en: 'en-MY',
  ms: 'ms-MY',
};

/** Locale tag for Intl date formatting. */
export const intlLocale: Record<Lang, string> = {
  en: 'en-MY',
  ms: 'ms-MY',
};

/** Format a date the way each language writes it. */
export function formatDate(date: Date, lang: Lang, opts?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(intlLocale[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
    ...opts,
  }).format(date);
}

/** Format a start/end pair, collapsing "3 – 3 May" to a single date. */
export function formatDateRange(start: Date, end: Date | undefined, lang: Lang): string {
  if (!end || start.getTime() === end.getTime()) return formatDate(start, lang);
  const sameMonth =
    start.getUTCFullYear() === end.getUTCFullYear() && start.getUTCMonth() === end.getUTCMonth();
  if (sameMonth) {
    const day = new Intl.DateTimeFormat(intlLocale[lang], { day: 'numeric', timeZone: 'UTC' }).format(start);
    return `${day} – ${formatDate(end, lang)}`;
  }
  return `${formatDate(start, lang)} – ${formatDate(end, lang)}`;
}
