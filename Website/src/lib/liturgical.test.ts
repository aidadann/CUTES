import { describe, expect, it } from 'vitest';
import { easterSunday, firstSundayOfAdvent, liturgicalDay } from './liturgical';

/**
 * The season drives the site's accent colour, so a wrong answer here shows up
 * on every page. The computus in particular is the kind of arithmetic that
 * looks right and is off by a week.
 */

const iso = (d: Date) => d.toISOString().slice(0, 10);
const on = (isoDate: string) => new Date(`${isoDate}T12:00:00Z`);

describe('easterSunday', () => {
  // Published dates, not derived from the same formula.
  it.each([
    [2024, '2024-03-31'],
    [2025, '2025-04-20'],
    [2026, '2026-04-05'],
    [2027, '2027-03-28'],
    [2030, '2030-04-21'],
    [2038, '2038-04-25'], // latest possible date
  ])('%i falls on %s', (year, expected) => {
    expect(iso(easterSunday(year))).toBe(expected);
  });
});

describe('firstSundayOfAdvent', () => {
  it.each([
    [2025, '2025-11-30'],
    [2026, '2026-11-29'],
    [2027, '2027-11-28'],
  ])('%i begins on %s', (year, expected) => {
    expect(iso(firstSundayOfAdvent(year))).toBe(expected);
  });
});

describe('liturgicalDay', () => {
  it('is green through Ordinary Time', () => {
    expect(liturgicalDay(on('2026-09-04'))).toMatchObject({ season: 'ordinary', colour: 'green' });
  });

  it('is violet in Lent', () => {
    // Ash Wednesday 2026 is 18 February.
    expect(liturgicalDay(on('2026-02-18'))).toMatchObject({ season: 'lent', colour: 'violet' });
    expect(liturgicalDay(on('2026-03-20'))).toMatchObject({ season: 'lent' });
  });

  it('turns red for Holy Week and Pentecost', () => {
    expect(liturgicalDay(on('2026-03-29'))).toMatchObject({ season: 'triduum', colour: 'red' });
    expect(liturgicalDay(on('2026-05-24'))).toMatchObject({ season: 'pentecost', colour: 'red' });
  });

  it('is white through Eastertide', () => {
    expect(liturgicalDay(on('2026-04-05'))).toMatchObject({ season: 'easter', colour: 'white' });
    expect(liturgicalDay(on('2026-05-10'))).toMatchObject({ season: 'easter' });
  });

  it('is violet in Advent and white at Christmas', () => {
    expect(liturgicalDay(on('2026-11-29'))).toMatchObject({ season: 'advent', colour: 'violet' });
    expect(liturgicalDay(on('2026-12-24'))).toMatchObject({ season: 'advent' });
    expect(liturgicalDay(on('2026-12-25'))).toMatchObject({ season: 'christmas', colour: 'white' });
    expect(liturgicalDay(on('2027-01-03'))).toMatchObject({ season: 'christmas' });
  });

  it('returns to Ordinary Time after the Baptism of the Lord', () => {
    // Baptism of the Lord 2027 is 10 January.
    expect(liturgicalDay(on('2027-01-11'))).toMatchObject({ season: 'ordinary' });
  });

  it('names the season in both languages', () => {
    const { name } = liturgicalDay(on('2026-09-04'));
    expect(name.en).toBe('Ordinary Time');
    expect(name.ms).toBe('Masa Biasa');
  });
});
