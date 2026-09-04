import type { UiKey } from './ui';

/**
 * The site map, declared once.
 *
 * The header, the mobile menu and the footer all render from this array, so
 * adding a page to the navigation is a one-line change in one file. Paths are
 * relative to the language root: "gallery" becomes "/en/gallery/" or
 * "/CUTES/ms/gallery/" depending on locale and deploy target.
 *
 * Two menus are filled in from content instead of being listed here — the
 * sacraments and the prayers. Those are open-ended lists the committee adds to
 * by dropping in a Markdown file, and a menu that needs a second edit to show
 * a new page is a menu that goes stale.
 */
export interface NavItem {
  key: UiKey;
  /** Path below the language segment. Empty string means the language home. */
  path: string;
  /** Fixed sub-menu. */
  children?: NavItem[];
  /** Sub-menu built from a content collection at render time. */
  dynamic?: 'services' | 'resources';
}

export const nav: NavItem[] = [
  { key: 'nav.home', path: '' },
  {
    key: 'nav.parish',
    path: 'parish',
    children: [
      { key: 'nav.bulletin', path: 'bulletin' },
      { key: 'nav.massSchedule', path: 'mass-schedule' },
      { key: 'nav.parishPriest', path: 'parish/parish-priest' },
      { key: 'nav.deacon', path: 'parish/deacon' },
      { key: 'nav.parishHistory', path: 'parish/parish-history' },
    ],
  },
  {
    key: 'nav.cutes',
    path: 'cutes',
    children: [
      { key: 'nav.aboutCutes', path: 'cutes' },
      { key: 'nav.lifeAtCutes', path: 'cutes/life' },
      { key: 'nav.committee', path: 'cutes/committee' },
      { key: 'nav.bec', path: 'cutes/bec' },
    ],
  },
  { key: 'nav.events', path: 'events' },
  { key: 'nav.gallery', path: 'gallery' },
  { key: 'nav.services', path: 'services', dynamic: 'services' },
  { key: 'nav.resources', path: 'resources', dynamic: 'resources' },
  { key: 'nav.contact', path: 'contact' },
];
