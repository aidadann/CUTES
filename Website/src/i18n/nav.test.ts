import { describe, expect, it } from 'vitest';
import { nav } from './nav';

describe('site map', () => {
  it('lists BEC as its own section directly after CUTES', () => {
    const keys = nav.map((item) => item.key);
    const cutes = keys.indexOf('nav.cutes');
    const bec = keys.indexOf('nav.bec');

    expect(cutes).toBeGreaterThan(-1);
    expect(bec).toBe(cutes + 1);
  });

  it('does not also hide BEC inside the CUTES dropdown', () => {
    const cutes = nav.find((item) => item.key === 'nav.cutes');
    expect(cutes?.children?.map((child) => child.key)).not.toContain('nav.bec');
  });

  it('keeps BEC on its existing URL', () => {
    expect(nav.find((item) => item.key === 'nav.bec')?.path).toBe('cutes/bec');
  });
});
