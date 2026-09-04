/**
 * The liturgical year.
 *
 * A Catholic church already has a colour system: violet through Advent and
 * Lent, gold at Christmas and Easter, red at Pentecost, green for the rest of
 * the year. The site takes its accent colour from whatever season it is when
 * the page is built, so the site changes with the church rather than sitting
 * on one arbitrary brand colour all year.
 *
 * The site is statically built, so "now" is the build date. Cloudflare and the
 * GitHub Action rebuild on every push, and the bulletin goes up weekly, so in
 * practice the colour is never more than a few days stale. If it ever matters,
 * add a scheduled rebuild — do not add a server.
 */

export type Season = 'advent' | 'christmas' | 'lent' | 'triduum' | 'easter' | 'pentecost' | 'ordinary';

export interface LiturgicalDay {
  season: Season;
  /** Vestment colour worn in this season. */
  colour: 'violet' | 'white' | 'red' | 'green';
  name: { en: string; ms: string };
}

const day = 24 * 60 * 60 * 1000;
const utc = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d));
const addDays = (date: Date, n: number) => new Date(date.getTime() + n * day);

/**
 * Easter Sunday, by the Gregorian computus (Meeus/Jones/Butcher). Every other
 * moveable date in the year is counted from it.
 */
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const dayOfMonth = ((h + l - 7 * m + 114) % 31) + 1;
  return utc(year, month, dayOfMonth);
}

/** The Sunday on or immediately before a given date. */
function sundayOnOrBefore(date: Date): Date {
  return addDays(date, -date.getUTCDay());
}

/** First Sunday of Advent: the fourth Sunday before Christmas Day. */
export function firstSundayOfAdvent(year: number): Date {
  return addDays(sundayOnOrBefore(utc(year, 12, 25)), -21);
}

const SEASONS: Record<Season, Omit<LiturgicalDay, 'season'>> = {
  advent: { colour: 'violet', name: { en: 'Advent', ms: 'Adven' } },
  christmas: { colour: 'white', name: { en: 'Christmas', ms: 'Krismas' } },
  lent: { colour: 'violet', name: { en: 'Lent', ms: 'Prapaskah' } },
  triduum: { colour: 'red', name: { en: 'Holy Week', ms: 'Minggu Suci' } },
  easter: { colour: 'white', name: { en: 'Eastertide', ms: 'Masa Paska' } },
  pentecost: { colour: 'red', name: { en: 'Pentecost', ms: 'Pentakosta' } },
  ordinary: { colour: 'green', name: { en: 'Ordinary Time', ms: 'Masa Biasa' } },
};

export function liturgicalDay(date: Date = new Date()): LiturgicalDay {
  const today = utc(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
  const year = today.getUTCFullYear();

  const easter = easterSunday(year);
  const ashWednesday = addDays(easter, -46);
  const palmSunday = addDays(easter, -7);
  const pentecost = addDays(easter, 49);
  const advent = firstSundayOfAdvent(year);

  // Christmastide runs to the Baptism of the Lord, the Sunday after Epiphany
  // (6 January). Epiphany itself never falls before the 6th, so this is the
  // Sunday on or after 7 January.
  const epiphany = utc(year, 1, 6);
  const baptismOfTheLord = addDays(sundayOnOrBefore(addDays(epiphany, 7)), 0);

  const between = (from: Date, to: Date) =>
    today.getTime() >= from.getTime() && today.getTime() <= to.getTime();

  const christmasDay = utc(year, 12, 25);

  // Ordered so the year reads start to finish: the tail of last year's
  // Christmas season, then Lent, then Easter, then this year's Advent and
  // Christmas. Everything left over is Ordinary Time.
  let season: Season;
  if (today.getTime() <= baptismOfTheLord.getTime()) season = 'christmas';
  else if (today.getTime() >= christmasDay.getTime()) season = 'christmas';
  else if (today.getTime() >= advent.getTime()) season = 'advent';
  else if (between(ashWednesday, addDays(palmSunday, -1))) season = 'lent';
  else if (between(palmSunday, addDays(easter, -1))) season = 'triduum';
  else if (today.getTime() === pentecost.getTime()) season = 'pentecost';
  else if (between(easter, pentecost)) season = 'easter';
  else season = 'ordinary';

  return { season, ...SEASONS[season] };
}
