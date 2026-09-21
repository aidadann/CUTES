import { describe, expect, it } from 'vitest';
import { site } from './site';

/**
 * The committee supplied these values in writing (FIXES V1). They are the kind
 * of detail that gets "tidied" by a later edit and then quietly ships wrong —
 * a phone number nobody answers, a diocese the parish does not belong to.
 */
describe('site facts from FIXES V1', () => {
  it('names the church both ways', () => {
    expect(site.churchName).toBe('Church Of The Most Holy Redeemer');
    expect(site.parishName).toBe('Most Holy Redeemer Church');
  });

  it('belongs to the Archdiocese of Penang', () => {
    expect(site.diocese).toBe('Archdiocese of Penang');
  });

  it('uses the postal address as given', () => {
    expect(site.address.line1).toBe('Catholic Church Of The Most Holy Redeemer (1960)');
    expect(site.address.line2).toBe('Jalan Rest House');
    expect(site.address.postcode).toBe('35900');
    expect(site.address.city).toBe('Tanjong Malim');
    expect(site.address.state).toBe('Perak');
  });

  it('uses the CUTES mailbox', () => {
    expect(site.email).toBe('cutesfamilyy@gmail.com');
  });

  it('expands CUTES without "Tertiary Education"', () => {
    expect(site.communityFullName).toBe("Catholic Undergraduate Teachers’ Society");
    expect(site.communityFullName).not.toMatch(/Tertiary/);
  });

  it('lists the three pastoral council members with dialable numbers', () => {
    expect(site.council.map((m) => [m.name, m.phoneDisplay])).toEqual([
      ['Fr Vincent Paul', '019-4930768'],
      ['Deacon Isaac Alfred', '012-6946343'],
      ['Ryon Joshua Harry', '017-8970158'],
    ]);
    for (const member of site.council) {
      expect(member.phone).toMatch(/^\+60\d{9}$/);
    }
  });

  it('points at the CUTES social accounts', () => {
    expect(site.social.instagram.handle).toBe('cutes_family');
    expect(site.social.tiktok.handle).toBe('cutesfamily_');
    expect(site.social.facebook.handle).toBe("Catholic Undergraduate Teachers' Society (CUTES) UPSI");
  });
});
