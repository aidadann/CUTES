import { describe, expect, it } from 'vitest';
import { eventWhen } from './content';

/**
 * The committee sometimes announces an event before fixing its date. The
 * event still has to sort somewhere, so it keeps a placeholder startDate and
 * sets dateTbd — and every place that prints a date has to honour the flag,
 * or the placeholder leaks onto the page as if it were real.
 */
describe('eventWhen', () => {
  const tbd = 'Date to be confirmed';

  it('formats a single-day event', () => {
    const when = eventWhen({ startDate: new Date('2026-10-04T00:00:00Z') }, 'en', tbd);
    expect(when).toBe('4 October 2026');
  });

  it('formats a date range', () => {
    const when = eventWhen(
      {
        startDate: new Date('2026-11-20T00:00:00Z'),
        endDate: new Date('2026-11-22T00:00:00Z'),
      },
      'en',
      tbd,
    );
    expect(when).toBe('20 – 22 November 2026');
  });

  it('returns the label instead of the placeholder date when dateTbd is set', () => {
    const when = eventWhen(
      { startDate: new Date('2026-12-20T00:00:00Z'), dateTbd: true },
      'en',
      tbd,
    );
    expect(when).toBe(tbd);
    expect(when).not.toContain('2026');
  });
});
