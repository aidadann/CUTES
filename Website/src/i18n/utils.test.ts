import { describe, expect, it } from 'vitest';
import {
  assetPath,
  formatDateRange,
  getLangFromUrl,
  localePath,
  normalizeBase,
  switchLangPath,
} from './utils';

/**
 * These four helpers are the only place a wrong answer breaks every page at
 * once: the site is deployed both at "/" (Cloudflare Pages) and at "/CUTES/"
 * (GitHub Pages), and a link built without the base 404s on the second with no
 * error anywhere in the build log.
 *
 * Every case below is run twice — once per deploy target.
 */

const ROOT = '/';
const SUB = '/CUTES/';

describe('normalizeBase', () => {
  it('always returns a leading and trailing slash', () => {
    expect(normalizeBase('/')).toBe('/');
    expect(normalizeBase('CUTES')).toBe('/CUTES/');
    expect(normalizeBase('/CUTES')).toBe('/CUTES/');
    expect(normalizeBase('/CUTES/')).toBe('/CUTES/');
    expect(normalizeBase('//CUTES//')).toBe('/CUTES/');
  });
});

describe('localePath', () => {
  it('builds the language home', () => {
    expect(localePath('en', '', ROOT)).toBe('/en/');
    expect(localePath('ms', '', SUB)).toBe('/CUTES/ms/');
  });

  it('builds a nested page', () => {
    expect(localePath('en', 'gallery/retreat', ROOT)).toBe('/en/gallery/retreat/');
    expect(localePath('ms', 'gallery/retreat', SUB)).toBe('/CUTES/ms/gallery/retreat/');
  });

  it('tolerates leading and trailing slashes in the path', () => {
    expect(localePath('en', '/bulletin', ROOT)).toBe('/en/bulletin/');
    expect(localePath('en', 'bulletin/', ROOT)).toBe('/en/bulletin/');
    expect(localePath('en', '/bulletin/', SUB)).toBe('/CUTES/en/bulletin/');
  });
});

describe('assetPath', () => {
  it('prefixes the base without adding a language segment', () => {
    expect(assetPath('bulletin/2026-09-06.pdf', ROOT)).toBe('/bulletin/2026-09-06.pdf');
    expect(assetPath('/bulletin/2026-09-06.pdf', SUB)).toBe('/CUTES/bulletin/2026-09-06.pdf');
    expect(assetPath('favicon.svg', SUB)).toBe('/CUTES/favicon.svg');
  });
});

describe('getLangFromUrl', () => {
  it('reads the language segment', () => {
    expect(getLangFromUrl('/en/gallery/', ROOT)).toBe('en');
    expect(getLangFromUrl('/ms/', ROOT)).toBe('ms');
    expect(getLangFromUrl('/CUTES/ms/events/retreat/', SUB)).toBe('ms');
  });

  it('falls back to English rather than throwing', () => {
    expect(getLangFromUrl('/', ROOT)).toBe('en');
    expect(getLangFromUrl('/CUTES/', SUB)).toBe('en');
    expect(getLangFromUrl('/de/gallery/', ROOT)).toBe('en');
  });

  it('accepts a URL object', () => {
    expect(getLangFromUrl(new URL('https://example.org/ms/contact/'), ROOT)).toBe('ms');
  });
});

describe('switchLangPath', () => {
  it('keeps the reader on the same page', () => {
    expect(switchLangPath('/en/gallery/retreat', 'ms', ROOT)).toBe('/ms/gallery/retreat/');
    expect(switchLangPath('/ms/services/baptism/', 'en', ROOT)).toBe('/en/services/baptism/');
  });

  it('works under a repository sub-path', () => {
    expect(switchLangPath('/CUTES/en/cutes/committee/', 'ms', SUB)).toBe(
      '/CUTES/ms/cutes/committee/',
    );
  });

  it('handles the language home', () => {
    expect(switchLangPath('/en/', 'ms', ROOT)).toBe('/ms/');
    expect(switchLangPath('/en', 'ms', ROOT)).toBe('/ms/');
  });

  it('adds a language segment to a path that has none', () => {
    expect(switchLangPath('/', 'ms', ROOT)).toBe('/ms/');
    expect(switchLangPath('/CUTES/', 'en', SUB)).toBe('/CUTES/en/');
  });
});

describe('formatDateRange', () => {
  const d = (iso: string) => new Date(`${iso}T00:00:00Z`);

  it('collapses a single-day range to one date', () => {
    expect(formatDateRange(d('2026-07-18'), undefined, 'en')).not.toContain('–');
    expect(formatDateRange(d('2026-07-18'), d('2026-07-18'), 'en')).not.toContain('–');
  });

  it('shortens a range inside one month', () => {
    const range = formatDateRange(d('2026-03-13'), d('2026-03-15'), 'en');
    expect(range).toContain('13');
    expect(range).toContain('15');
    // The month is written once, not twice.
    expect(range.match(/March/g) ?? []).toHaveLength(1);
  });

  it('writes both months when the range crosses one', () => {
    const range = formatDateRange(d('2026-05-30'), d('2026-06-02'), 'en');
    expect(range).toContain('May');
    expect(range).toContain('June');
  });
});
