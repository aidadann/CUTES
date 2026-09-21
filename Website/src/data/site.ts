/**
 * Every fact about the parish that appears in more than one place.
 *
 * Values here were supplied by the committee in FIXES V1 (2026-09-21). Change
 * them only on the committee's word — several are also asserted in
 * src/data/site.test.ts.
 */
export const site = {
  /** Brand name, as it appears in the header and on letterhead. */
  churchName: 'Church Of The Most Holy Redeemer',
  /** Conversational name, used in page titles, SEO and the hero tag. */
  parishName: 'Most Holy Redeemer Church',
  town: 'Tanjung Malim',
  state: 'Perak',
  country: 'Malaysia',

  /** The student community this site also serves. */
  communityName: 'CUTES',
  communityFullName: "Catholic Undergraduate Teachers’ Society",

  /** Academic year the published committee roster belongs to. */
  committeeYear: '2025/2026',

  /** Postal address, copied verbatim from FIXES V1 §8. */
  address: {
    line1: 'Catholic Church Of The Most Holy Redeemer (1960)',
    line2: 'Jalan Rest House',
    postcode: '35900',
    city: 'Tanjong Malim',
    state: 'Perak',
    country: 'Malaysia',
  },

  email: 'cutesfamilyy@gmail.com',

  /**
   * Primary number for general enquiries — the parish priest. The full list of
   * three is `council` below; the sacrament pages quote this one.
   */
  phone: '+60194930768',
  phoneDisplay: '019-4930768',

  /**
   * The Parish Pastoral Council, shown on the home page, in the footer and on
   * the contact page.
   *
   * `roleKey` is a key in src/i18n/ui.ts so the title is translated.
   * `photo` is a path under public/ — empty until the committee uploads the
   * portraits from the shared Drive folder. An empty value renders a monogram
   * instead, so the section is never broken while we wait.
   */
  council: [
    {
      name: 'Fr Vincent Paul',
      roleKey: 'role.parish-priest',
      phone: '+60194930768',
      phoneDisplay: '019-4930768',
      photo: '',
    },
    {
      name: 'Deacon Isaac Alfred',
      roleKey: 'role.parish-deacon',
      phone: '+60126946343',
      phoneDisplay: '012-6946343',
      photo: '',
    },
    {
      name: 'Ryon Joshua Harry',
      roleKey: 'role.cutes-coordinator',
      phone: '+60178970158',
      phoneDisplay: '017-8970158',
      photo: '',
    },
  ],

  /** TODO: replace with the parish pin from Google Maps. */
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Church+Of+The+Most+Holy+Redeemer+Jalan+Rest+House+35900+Tanjong+Malim+Perak',

  /**
   * CUTES social accounts. An entry with an empty `url` renders as plain text
   * rather than a dead link — Facebook was given to us as a page name only.
   */
  social: {
    instagram: { handle: 'cutes_family', url: 'https://www.instagram.com/cutes_family/' },
    facebook: { handle: "Catholic Undergraduate Teachers' Society (CUTES) UPSI", url: '' },
    tiktok: { handle: 'cutesfamily_', url: 'https://www.tiktok.com/@cutesfamily_' },
  },

  /** Diocese, shown in the hero and the footer. */
  diocese: 'Archdiocese of Penang',
} as const;

export type SiteConfig = typeof site;
