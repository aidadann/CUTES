# Tech Stack — Most Holy Redeemer Church / CUTES Website

## Context

Most Holy Redeemer Church, Tanjung Malim needs a public website serving CUTES
(the Catholic UPSI Tertiary Education Students community) and the wider parish.

The requirements document is a sitemap of eight sections: parish information,
the CUTES committee roster, events, a photo gallery, sacramental services,
prayer resources, and contact details. Every item in it is **static content**.
There is no login, no payments, no user accounts, no search, and no data that
changes without a human editing it.

The one recurring publishing task is the weekly bulletin, which is a PDF.

Three constraints shape every choice below:

1. **No budget.** A student club cannot carry a monthly hosting bill.
2. **Yearly handover.** The committee turns over every academic year, so the
   site must survive being handed to someone who did not build it.
3. **Phones on campus wifi.** Most visitors arrive on mobile over a slow link.

---

## The stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5** | Ships zero JavaScript by default. Content Collections give type-checked Markdown and YAML. i18n routing is built in. |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`) | No bespoke CSS architecture to hand over. Theme tokens are sampled from `logo.md`. |
| Content | Markdown + YAML in the repository | No database. The committee roster is roughly sixty names in one YAML file. |
| Images | `astro:assets` `<Image>` | Automatic WebP conversion and responsive resizing at build time. The gallery is the only heavy part of the site. |
| Bulletin | PDFs in `public/bulletin/` | Publishing is a file upload through the GitHub web UI. No CMS, no admin login. |
| Hosting | **Cloudflare Pages** (static output) | Free tier, free SSL, global CDN, deploy on git push. The only recurring cost is the domain, roughly RM50 a year. |
| Languages | Astro built-in i18n, English + Bahasa Malaysia | Header toggle between `/en/` and `/ms/`. No i18n library. |

Total recurring cost: **the domain name, and nothing else.**

---

## Why each choice

### Astro over Next.js or Nuxt

Next.js and Nuxt exist to run server-side logic. This site has none. Every page
is known at build time, so shipping a React or Vue runtime to the visitor's
phone buys nothing and costs roughly 90 KB of JavaScript before a single word
of content renders. Astro renders the same pages to plain HTML and sends no
framework at all.

Astro also has the two features this project would otherwise have to build by
hand: Content Collections (schema-validated Markdown and YAML, so a malformed
committee entry fails the build instead of silently rendering blank) and
built-in i18n routing.

### Astro over WordPress

WordPress is how most church websites are built, and it is how most of them
die. It requires paid PHP hosting, a database, and a continuous stream of core,
theme, and plugin updates. Skip those updates for one semester after the
student admin graduates and the site becomes a defaced or malware-serving page
on the parish domain.

An Astro site is static HTML on a CDN. There is no admin panel to break into,
no database to lose, and nothing to patch. If nobody touches it for two years,
it still works.

### Markdown and YAML over a database

A database is for data you need to query. Nothing here is queried. The
committee roster is a fixed list rendered in a fixed order; the mass schedule
is a table; the prayers are text. Putting these in Postgres or Firebase adds a
service that can go down, expire, or hit a free-tier limit, in exchange for
nothing.

Files in a git repository have a second advantage: every change is attributed
and reversible. When next year's committee edits the roster and gets it wrong,
the fix is one revert.

### Files over a hosted CMS

Sanity, Contentful, and Strapi all tie the site's content to a SaaS account.
That account belongs to whoever created it — a student who graduates. When the
billing card expires or the email bounces, the content is gone and the site
breaks.

A git repository owned by the parish organisation does not expire.

A **git-based CMS** (Sveltia or Decap) is the right answer if the GitHub upload
flow proves too hard for the committee — it stores content as files in the same
repo and adds only a login screen. It is deliberately deferred, not rejected:
add it when someone actually asks, not before.

### Cloudflare Pages over shared hosting or a VPS

Free, unmetered bandwidth on a global CDN, automatic SSL, and a deploy on every
git push. A VPS would cost money and require someone to run OS updates. Shared
hosting costs money and is slower. Netlify's free tier is an equivalent
alternative if the parish already uses it.

---

## Publishing the bulletin

```
public/bulletin/
  2026-09-06.pdf
  2026-08-30.pdf
```

The bulletin page globs that folder at build time, sorts descending by
filename, and lists what it finds. Adding this week's bulletin is:

1. Open the repository on github.com
2. *Add file → Upload files*, drag the PDF in
3. Commit

Cloudflare rebuilds in about thirty seconds. No CMS, no admin account, no
upload form to secure, no server to store files on.

**The entire publishing specification is one rule: the filename must be
`YYYY-MM-DD.pdf`.** That rule goes in the README, and the date-sorted ordering
falls out of it for free.

---

## Bilingual support

Astro's built-in i18n, configured with `prefixDefaultLocale: true`:

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ms'],
  routing: { prefixDefaultLocale: true },
},
redirects: { '/': '/en/' },
```

- **UI strings** live in one `src/i18n/ui.ts` object plus a four-line
  `useTranslations(lang)` lookup. This is Astro's documented recipe; it does not
  need an i18n library.
- **Page content** lives in language-keyed collections:
  `src/content/pages/en/parish-history.md` and `.../ms/parish-history.md`.
- **The switcher** is a header component that swaps the leading `/en/` ↔ `/ms/`
  segment of the current path, so it lands on the same page in the other
  language rather than bouncing to the home page. Two `<a>` tags, no JavaScript.
- **Language-neutral assets** — bulletin PDFs, gallery photos, and committee
  names — are stored once and shared by both locales. Only the surrounding
  labels are translated.

**Trade-off, accepted deliberately:** URLs are `/en/gallery`, not `/gallery`.
In exchange, every page exists as one file under `src/pages/[lang]/` instead of
being duplicated into a parallel `src/pages/ms/` tree. Halving the number of
files to maintain is worth more than a three-character URL prefix on a site
that changes hands every year.

---

## Theme

Colours are sampled from `logo.md` and defined once as Tailwind theme tokens in
`src/styles/global.css`:

| Token | Hex | Use |
|---|---|---|
| `gold` | `#D4AF37` | Primary accent, headings, active navigation |
| `purple` | `#7B1FA2` | Secondary, footer, section bands |
| `magenta` | `#D81B60` | CUTES section accent |
| `crimson` | `#E53935` | Sparingly — event highlights, alerts |
| `ink` | `#1A1A1A` | Body text |

`logo.jpg` becomes the navbar mark and the favicon source.

---

## Deliberately not included

| Not used | Reason |
|---|---|
| WordPress | Hosting cost, patch treadmill, the standard failure mode for church sites |
| React / Next.js / Nuxt | A server runtime and a client framework for a site with no server logic |
| Any database (Postgres, Firebase, Supabase) | Nothing on this site is queried |
| Hosted CMS (Sanity, Contentful, Strapi) | Ties parish content to a SaaS account that outlives nobody |
| An i18n library (i18next, vue-i18n) | Astro's built-in routing plus a plain string object covers it |
| A lightbox library | Native `<dialog>` and about fifteen lines of vanilla JavaScript |
| Site search | Twenty-five pages do not need search |
| A contact form | A `mailto:` link needs no server, no spam filtering, and no form service |
| Event registration | Link a Google Form until someone actually asks for more |

---

## Open decision

The requirements list a **Bulletin** section without saying what a bulletin is.
This document assumes it is a weekly PDF, which is why no CMS appears anywhere
above. If the bulletin is instead written as web text and must be published
weekly by someone who will not touch git, add **Sveltia CMS** from day one —
it is git-backed, free, and roughly one config file, but it is wasted work if
the answer is "we just upload the PDF."
