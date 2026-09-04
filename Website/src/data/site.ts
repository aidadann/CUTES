/**
 * Every fact about the parish that appears in more than one place.
 *
 * TODO (committee): replace every value marked `TODO` below with the real
 * detail before launch. Nothing else in the codebase hard-codes these.
 */
export const site = {
  /** Legal / display name of the parish. */
  parishName: 'Most Holy Redeemer Church',
  parishShortName: 'Most Holy Redeemer',
  town: 'Tanjung Malim',
  state: 'Perak',
  country: 'Malaysia',

  /** The student community this site also serves. */
  communityName: 'CUTES',
  communityFullName: 'Catholic UPSI Tertiary Education Students',

  /** Academic year the published committee roster belongs to. */
  committeeYear: '2025/2026',

  /** TODO: confirm the street address with the parish office. */
  address: {
    line1: 'Most Holy Redeemer Church',
    line2: 'Jalan Slim',
    postcode: '35900',
    city: 'Tanjung Malim',
    state: 'Perak Darul Ridzuan',
    country: 'Malaysia',
  },

  /** TODO: confirm office contact details. */
  email: 'parish@mhrtanjungmalim.org',
  cutesEmail: 'cutes@mhrtanjungmalim.org',
  phone: '+60 5-459 0000',
  phoneDisplay: '05-459 0000',

  /** TODO: replace with the parish pin from Google Maps. */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Most+Holy+Redeemer+Church+Tanjung+Malim',

  /** TODO: remove any the parish does not have. Empty entries are not rendered. */
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },

  /** Used for canonical URLs and Open Graph tags. */
  defaultOgImage: '/logo.jpg',

  /** Diocese, shown in the footer. */
  diocese: 'Archdiocese of Kuala Lumpur',
} as const;

export type SiteConfig = typeof site;
