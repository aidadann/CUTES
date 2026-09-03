# Implementation Plan — Most Holy Redeemer Church / CUTES Website

## Purpose and scope

This document turns the sitemap in `MOST HOLY REDEEMER CHURCH, TANJUNG MALIM
WEBSITE.md` into buildable modules. It assumes the reader has already read
`TECH_STACK.md`, which settles the technology choices and is not repeated here.

Covered: what gets built, in what order, in which files, with which data schema,
and which Claude Code skill drives each module.

Not covered: the rationale for Astro, Tailwind, or Cloudflare Pages. That lives
in `TECH_STACK.md`.

The project root is `Website/`. It is empty at the time of writing.

---

## Decisions log

These were open in `TECH_STACK.md` and are now settled. They are not to be
reopened during the build.

| Decision | Answer | Consequence |
|---|---|---|
| What is a bulletin? | A weekly PDF, uploaded by the committee | No CMS anywhere in the build. Sveltia stays deferred. The filename rule `YYYY-MM-DD.pdf` is the entire publishing specification. |
| Bilingual scope | English and Bahasa Malaysia from day one | Every content page ships two locale files. A missing translation is a launch blocker, tracked in the authoring checklist below. |
| Plan detail | Full specification per module | Each module carries files, schema, components, and acceptance criteria. |

---

## Repository layout

```
Website/
  astro.config.mjs
  package.json
  tsconfig.json
  README.md                        <- handover instructions
  public/
    favicon.ico
    logo.jpg
    bulletin/
      2026-09-06.pdf               <- filename IS the publish date
  src/
    assets/
      logo.jpg                     <- processed by astro:assets
      gallery/<album>/*.jpg
    components/
      Header.astro
      Footer.astro
      LangSwitch.astro
      Nav.astro
      Seo.astro
      MassScheduleTable.astro
      EventCard.astro
      MinistryRoster.astro
      PhotoGrid.astro
      Lightbox.astro
      PageHeader.astro
    content/
      pages/{en,ms}/*.md
      events/{en,ms}/*.md
      services/{en,ms}/*.md
      resources/{en,ms}/*.md
      committee/roster.yaml        <- language-neutral, one file
      gallery/*.yaml               <- one per album
      schedule/mass.yaml           <- language-neutral times
    content.config.ts              <- all zod schemas
    i18n/
      ui.ts                        <- UI string table + useTranslations
      utils.ts                     <- path helpers for the language switcher
    layouts/
      BaseLayout.astro
      PageLayout.astro
      ProseLayout.astro            <- services + resources
    pages/
      index.astro                  <- redirect to /en/
      [lang]/
        index.astro
        bulletin.astro
        mass-schedule.astro
        parish/[slug].astro
        cutes/index.astro
        cutes/committee.astro
        cutes/bec.astro
        events/index.astro
        events/[slug].astro
        gallery/index.astro
        gallery/[album].astro
        services/[slug].astro
        resources/[slug].astro
        contact.astro
    styles/
      global.css                   <- Tailwind 4 @theme tokens
```

---

## Module overview

| ID | Module | Depends on | Driving skill | Size |
|---|---|---|---|---|
| M0 | Project foundation | — | `fullstack-dev-skills:devops-engineer` | S |
| M1 | i18n core | M0 | `fullstack-dev-skills:typescript-pro` | S |
| M2 | Layout and chrome | M1 | `frontend-design` | M |
| M3 | Content collections | M0 | `fullstack-dev-skills:typescript-pro` | M |
| M4 | Home | M2, M3 | `frontend-design` | M |
| M5 | Main / Parish | M2, M3 | `caveman:cavecrew-builder` | M |
| M6 | CUTES | M2, M3 | `caveman:cavecrew-builder` | L |
| M7 | Events | M2, M3 | `caveman:cavecrew-builder` | S |
| M8 | Gallery | M2, M3 | `frontend-design` | L |
| M9 | Services | M2, M3 | `caveman:cavecrew-builder` | S |
| M10 | Resources | M2, M3 | `caveman:cavecrew-builder` | S |
| M11 | Contact | M2 | `caveman:cavecrew-builder` | S |
| M12 | Deploy and handover | all | `fullstack-dev-skills:devops-engineer` + `fullstack-dev-skills:code-documenter` | S |

There is no Astro-specific skill in the installed set. Astro idiom comes from
`TECH_STACK.md` and the Astro documentation, not from a skill.

---

## M0 — Project foundation

**Skill:** `fullstack-dev-skills:devops-engineer`

**Files created:** `package.json`, `astro.config.mjs`, `tsconfig.json`,
`src/styles/global.css`, `public/logo.jpg`, `public/favicon.ico`, `.gitignore`,
`README.md` (stub).

**Steps**

1. `npm create astro@latest Website -- --template minimal --typescript strict`
2. `npx astro add tailwind` (Astro 5 wires `@tailwindcss/vite` for Tailwind 4)
3. Copy `Requirement/logo.jpg` to `Website/src/assets/logo.jpg` and
   `Website/public/logo.jpg`; generate the favicon from it.
4. Define theme tokens in `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --color-gold: #D4AF37;
  --color-purple: #7B1FA2;
  --color-magenta: #D81B60;
  --color-crimson: #E53935;
  --color-ink: #1A1A1A;
}
```

5. `astro.config.mjs` carries the i18n block exactly as specified in
   `TECH_STACK.md` (`defaultLocale: 'en'`, `locales: ['en','ms']`,
   `prefixDefaultLocale: true`, `redirects: { '/': '/en/' }`).

**Acceptance criteria**

- `npm run build` succeeds on an empty site.
- `npm run dev` serves `/en/` after following the root redirect.
- A Tailwind class using `text-gold` renders `#D4AF37`.

---

## M1 — i18n core

**Skill:** `fullstack-dev-skills:typescript-pro`

**Files created:** `src/i18n/ui.ts`, `src/i18n/utils.ts`.

**`ui.ts` shape**

```ts
export const languages = { en: 'English', ms: 'Bahasa Malaysia' } as const;
export const defaultLang = 'en';

export const ui = {
  en: { 'nav.home': 'Home', 'nav.cutes': 'CUTES', /* ... */ },
  ms: { 'nav.home': 'Utama', 'nav.cutes': 'CUTES', /* ... */ },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
```

The `?? ui[defaultLang][key]` fallback is deliberate: a missing Bahasa Malaysia
string renders English rather than an empty element. Missing translations are
tracked in the authoring checklist, not enforced by a crash.

**`utils.ts`** exports `getLangFromUrl(url)` and `switchLangPath(url, lang)`.
`switchLangPath` swaps only the leading `/en/` or `/ms/` segment so the switcher
lands on the same page in the other language.

**Every route** under `src/pages/[lang]/` exports:

```ts
export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
```

**Acceptance criteria**

- `/en/` and `/ms/` both build.
- `switchLangPath('/en/gallery/retreat', 'ms')` returns `/ms/gallery/retreat`.
- An unknown key falls back to English instead of throwing.
- A unit test file `src/i18n/utils.test.ts` covers `switchLangPath` for the
  root path, a nested path, and a trailing slash.

---

## M2 — Layout and chrome

**Skill:** `frontend-design`

**Files created:** `src/layouts/BaseLayout.astro`, `PageLayout.astro`,
`ProseLayout.astro`, `src/components/{Header,Nav,LangSwitch,Footer,Seo,PageHeader}.astro`.

**Navigation structure** (mirrors the sitemap top-level headings):

```
Home | Main v | CUTES v | Events | Gallery | Services v | Resources v | Contact
       Bulletin        About CUTES              RCIA         Rosary
       Mass Schedule   Life at CUTES            Baptism      Basic Prayers
       Parish Priest   Committee                Marriage     Divine Mercy Chaplet
       Deacon          BEC                      Funeral
       Parish History                           Blessing
```

**Requirements**

- Mobile-first. The dropdowns are `<details>`/`<summary>` so the menu works with
  zero JavaScript; a small progressive enhancement may close them on outside
  click, nothing more.
- Header carries `logo.jpg` as the mark, linking to `/<lang>/`.
- `LangSwitch` renders two `<a>` tags built from `switchLangPath`. No JavaScript.
- `Seo.astro` sets `<title>`, description, Open Graph tags, `<html lang>`, and a
  `<link rel="alternate" hreflang>` pair pointing at the other locale.
- Accessibility floor: a skip-to-content link, `<header>`/`<nav>`/`<main>`/`<footer>`
  landmarks, visible focus rings, and gold-on-white used only at heading sizes
  where its contrast is acceptable. Body text is `ink` on white.
- Footer: mass times summary, address, contact email, copyright, language switch.

**Acceptance criteria**

- Every page renders inside `BaseLayout` with exactly one `<h1>`.
- Keyboard-only navigation reaches every nav item and the skip link.
- The site is usable with JavaScript disabled.

---

## M3 — Content collections

**Skill:** `fullstack-dev-skills:typescript-pro`

**File created:** `src/content.config.ts`.

Schema validation is the project's test suite: a malformed committee entry must
fail `astro build` rather than render an empty row.

**Collections and schemas**

```ts
// pages — parish priest, deacon, parish history, about CUTES, life at CUTES, BEC
pages: {
  title: string, lang: 'en' | 'ms', slug: string,
  order: number, updated: date optional, image: image() optional
}

// events — retreat, gawai kaamatan, family day
events: {
  title: string, lang: 'en' | 'ms',
  startDate: date, endDate: date optional,
  location: string, summary: string,
  cover: image(), gallery: string optional,   // album slug
  registrationUrl: url optional               // a Google Form link
}

// services — RCIA, baptism, marriage, funeral, blessing
services: {
  title: string, lang: 'en' | 'ms', order: number,
  summary: string, contact: string optional,
  requirements: string[] optional
}

// resources — rosary, basic prayers, divine mercy chaplet
resources: {
  title: string, lang: 'en' | 'ms', order: number,
  category: 'prayer' | 'devotion' | 'other'
}

// committee — ONE language-neutral YAML file
committee: {
  year: string,                       // "2025/2026"
  ministries: [{
    name: string,                     // "Liturgy Ministry"
    slug: string,
    order: number,
    members: [{ name: string, role: string, photo: image() optional }]
  }]
}

// gallery — one YAML per album
gallery: {
  slug: string, title: { en: string, ms: string },
  order: number, cover: image(),
  photos: [{ src: image(), alt: { en: string, ms: string }, caption: string optional }]
}

// schedule — language-neutral mass times
schedule: {
  services: [{ day: string, time: string, language: string, note: string optional }]
}
```

**Notes**

- `committee`, `gallery`, and `schedule` are language-neutral. Only the labels
  around them are translated. This is the single biggest saving in the build:
  sixty names are typed once, not twice.
- Roles inside `committee` are stored as keys (`coordinator`, `vice-coordinator-1`,
  `treasurer`, `member`, ...) and translated through `ui.ts`, so a role label can
  be renamed in Bahasa Malaysia without touching the roster.

**Acceptance criteria**

- Deleting a required field from any content file breaks `npm run build` with a
  message naming the file and the field.
- `getCollection('committee')` returns the roster with typed members.

---

## M4 — Home

**Skill:** `frontend-design`

**File created:** `src/pages/[lang]/index.astro`. Components:
`MassScheduleTable.astro`, `EventCard.astro`.

**Sections, in order**

1. Hero — logo mark, parish name, one-line identity, and two buttons: mass times
   and the current bulletin.
2. Vision and Mission — from `content/pages/{lang}/vision-mission.md`.
3. Mass Schedule summary — `MassScheduleTable` reading `schedule/mass.yaml`, with
   a link to the full page.
4. Upcoming Events — the next three entries from `events` where the start date is
   on or after the build date, ascending. If none, the strip renders a
   "no upcoming events" line rather than collapsing to nothing.

**Note on "upcoming"** — the site is statically built, so "today" is the build
date. Events fall off the home page only on the next deploy. This is acceptable
because Cloudflare rebuilds on every push and the bulletin is uploaded weekly. If
it ever matters, add a scheduled rebuild; do not add a server.

**Acceptance criteria**

- The home page renders correctly with zero events in the collection.
- The mass schedule table is readable at 360px wide without horizontal scroll.
- Above-the-fold content ships no JavaScript.

---

## M5 — Main / Parish

**Skill:** `caveman:cavecrew-builder`

**Files created:** `src/pages/[lang]/bulletin.astro`, `mass-schedule.astro`,
`parish/[slug].astro`.

**Bulletin index** — the only piece of logic in this module: glob
`/public/bulletin/*.pdf` at build time, take the basename, sort ascending, then
reverse. Renders a list of dated links, newest first, with the newest marked
"This week". The date shown is parsed from the filename and formatted per locale.

**Parish pages** — `parish/[slug].astro` covers Parish Priest, Deacon, and Parish
History from the `pages` collection filtered to the current language and a
`parish/` prefix. One template, three pages, two locales.

**Mass schedule** — the full `schedule/mass.yaml` table plus any notes about
holy days, rendered with the same `MassScheduleTable` component as the home page.

**Acceptance criteria**

- Dropping `2026-09-06.pdf` into `public/bulletin/` and rebuilding puts it at the
  top of the list, labelled "This week", with no code change.
- An empty `public/bulletin/` folder renders an empty-state line, not an error.
- Both locales render the parish pages from their own Markdown.

---

## M6 — CUTES

**Skill:** `caveman:cavecrew-builder`

**Files created:** `src/pages/[lang]/cutes/index.astro`, `committee.astro`,
`bec.astro`. Component: `MinistryRoster.astro`. Content:
`content/committee/roster.yaml`.

This is the largest content module: roughly sixty names across eight groupings.

**Groupings and their fixed order**

1. Ministry of Leaders — Coordinator, Vice Coordinator 1, Vice Coordinator 2,
   Treasurer, Vice Treasurer, Secretary, Vice Secretary
2. Liturgy Ministry
3. Choir Ministry
4. Music Ministry
5. Multimedia and Publicity Ministry
6. Transportation Ministry
7. Recreation and Spiritual Ministry
8. Entrepreneurship Ministry

Groups 2 through 8 each carry a Leader, an Assistant, and an open-ended list of
members. `MinistryRoster.astro` renders one grouping: heading, leader and
assistant highlighted, members as a plain list.

**Photos are optional.** The roster must render correctly when every member lacks
a photo — do not build a layout that collapses without images. Committee photos
are the most likely thing never to be supplied.

**Other pages** — About CUTES and Life at CUTES come from the `pages` collection.
BEC About is a single page under the same collection, linked from the CUTES nav
as the sitemap places it.

**Handover note** — the yearly roster change is one YAML file edit. The README
section written in M12 walks through it with a worked example.

**Acceptance criteria**

- All eight groupings render in the fixed order above, driven by `order`.
- A member with a photo and a member without render side by side without layout
  shift.
- Changing `year` in the YAML updates the heading on the committee page.

---

## M7 — Events

**Skill:** `caveman:cavecrew-builder`

**Files created:** `src/pages/[lang]/events/index.astro`, `events/[slug].astro`.

Three events at launch: Retreat, Gawai Kaamatan CUTES, CUTES Family Day. The
index splits them into Upcoming and Past by start date against the build date,
upcoming ascending and past descending.

A detail page renders the Markdown body, the cover image, date, location, an
optional Google Form registration link, and a link to the matching gallery album
when `gallery` is set.

**Acceptance criteria**

- Adding a fourth event is one Markdown file per locale and no code change.
- An event without `registrationUrl` renders no empty button.
- Past events remain reachable by URL after they drop off the upcoming list.

---

## M8 — Gallery

**Skill:** `frontend-design`

**Files created:** `src/pages/[lang]/gallery/index.astro`, `gallery/[album].astro`.
Components: `PhotoGrid.astro`, `Lightbox.astro`. Content: `content/gallery/*.yaml`.

**Albums** (from the sitemap): Mass, Fellowship, Sport, Retreat, Gawai Kaamatan
CUTES, CUTES Family Day, After Mass, Chilling, Taize.

**Requirements**

- Every photo goes through `astro:assets` `<Image>` with WebP output, an explicit
  `widths` array, and a `sizes` attribute. Source files live in
  `src/assets/gallery/<album>/`, never in `public/`, so they are processed.
- `loading="lazy"` and `decoding="async"` on everything below the first row.
- The lightbox is a native `<dialog>` plus roughly fifteen lines of vanilla
  JavaScript: open on click, close on Escape or backdrop click, arrow keys for
  previous and next. No library.
- With JavaScript disabled, clicking a thumbnail opens the full image directly.
- Alt text is required by the schema and is bilingual.

**Build cost warning** — this is the only module that can make builds slow. Before
adding photos in bulk, downscale source files to at most 2000px on the long edge.
A folder of 4000px phone photos turns a thirty-second build into several minutes
on Cloudflare's free tier.

**Acceptance criteria**

- An album page scores at least 90 on Lighthouse mobile performance.
- The lightbox traps focus while open and returns focus to the thumbnail on close.
- No layout shift: every image renders with intrinsic width and height.

---

## M9 — Services

**Skill:** `caveman:cavecrew-builder`

**File created:** `src/pages/[lang]/services/[slug].astro` using `ProseLayout`.

Five pages: RCIA, Baptism, Marriage, Funeral, Blessing. Each is one Markdown file
per locale in `content/services/`. The template renders the title, summary, the
optional requirements list as a checklist, the body, and a contact line that
falls back to the parish office email when `contact` is absent.

An index at `/[lang]/services/` lists all five by `order`.

**Acceptance criteria**

- Adding a sixth service is two Markdown files and no code change.
- A page with no requirements list renders no empty heading.

---

## M10 — Resources

**Skill:** `caveman:cavecrew-builder`

**File created:** `src/pages/[lang]/resources/[slug].astro` using `ProseLayout`.

Prayers at launch: Rosary, Basic Prayers, Divine Mercy Chaplet. The sitemap marks
this list as open-ended, so the template must not hard-code three.

**Prayer-text specifics**

- Measure capped at roughly 65 characters for readability on a phone.
- Prayer responses distinguished from leader text using a blockquote or a bold
  run, styled once in `ProseLayout`.
- A print stylesheet: no navigation, no footer, black on white, readable at 11pt.
  Someone will print these.

**Acceptance criteria**

- Print preview of a prayer page shows only the prayer text and its title.
- A new prayer is two Markdown files and no code change.

---

## M11 — Contact

**Skill:** `caveman:cavecrew-builder`

**File created:** `src/pages/[lang]/contact.astro`.

Contents: parish address, a `mailto:` link, a `tel:` link, office hours, mass
times summary, social media links if any, and a map.

**The map is a static image linking out to Google Maps**, not an embedded iframe.
An iframe loads several hundred kilobytes of third-party JavaScript and sets
cookies on a page that only needs to show an address. A photo of the location
plus a link does the job.

**No contact form.** This is settled in `TECH_STACK.md`: a form needs a server, a
spam filter, and someone to watch an inbox that nobody will watch after handover.

**Acceptance criteria**

- The email and phone links work from a phone.
- The page makes no third-party requests.

---

## M12 — Deploy and handover

**Skills:** `fullstack-dev-skills:devops-engineer`, then
`fullstack-dev-skills:code-documenter` for the README.

**Deploy**

1. Push the repository to a GitHub organisation owned by the parish, not to a
   student account. This is the single most important line in this document: an
   account owned by a graduating student is how the site is lost.
2. Cloudflare Pages: connect the repo, framework preset Astro, build command
   `npm run build`, output directory `dist`.
3. Attach the custom domain and confirm SSL.
4. Give at least two people repository admin: one committee member and one person
   who is not a student.

**README handover sections** — written in plain language for a non-developer:

- Publish the week's bulletin (the `YYYY-MM-DD.pdf` rule, with screenshots of the
  GitHub upload flow)
- Add photos to a gallery album
- Update the committee roster for a new academic year
- Add an event
- Add a service or prayer page
- What to do when the build fails (read the error; it names the file)

**Acceptance criteria**

- A committee member who has not seen the repository can publish a bulletin using
  only the README.
- A push to `main` deploys within about two minutes.
- The "Deliberately not included" table from `TECH_STACK.md` is linked from the
  README so next year's committee sees what was skipped and why.

---

## Build order

| Phase | Modules | Gate before moving on |
|---|---|---|
| 1. Skeleton | M0, M1, M3, M2 | `/en/` and `/ms/` render the shell, the language switcher preserves the path, `npm run build` passes |
| 2. Core content | M4, M5, M6 | Parish pages, bulletin, and committee reachable from the nav in both locales |
| 3. Rest of sitemap | M7, M9, M10, M11 | Every sitemap heading resolves to a real page |
| 4. Gallery | M8 | Lighthouse mobile at least 90 on an album page |
| 5. Ship | M12 | Live on the custom domain, README handover complete |

M3 is built before M2 in Phase 1 so the layout has real typed data to render
against instead of placeholder markup that gets thrown away.

The gallery is last on purpose. It is the heaviest module, it needs photos the
committee has to supply, and nothing else depends on it. If the launch date
slips, ship without it and add albums afterwards.

---

## Skills and plugins summary

| Skill | Used for |
|---|---|
| `fullstack-dev-skills:devops-engineer` | M0 scaffold and build config, M12 Cloudflare Pages setup |
| `fullstack-dev-skills:typescript-pro` | M1 typed locale lookup, M3 zod content schemas |
| `frontend-design` | M2 layout and navigation, M4 home page, M8 gallery and lightbox |
| `caveman:cavecrew-builder` | M5, M6, M7, M9, M10, M11 — the repetitive per-page template work, one or two files at a time |
| `fullstack-dev-skills:code-documenter` | M12 README and handover instructions |
| `code-review` | Run at each phase gate on the diff |
| `ponytail:ponytail-review` | Run at each phase gate to catch scope creep before it lands |
| `superpowers:executing-plans` | Drive the phases from this document |
| `caveman:cavecrew-investigator` | Locate existing components before writing a new one, from Phase 2 onward |

Deliberately not used: `fullstack-dev-skills:react-expert`, `nextjs-developer`,
`postgres-pro`, `api-designer`, and every backend skill. There is no server, no
database, and no API in this project.

---

## Content authoring checklist

Every row needs both locale files before launch. This table is the translation
tracker; mark cells as they are written.

| Page | Collection | EN | MS |
|---|---|---|---|
| Vision and Mission | pages | ☐ | ☐ |
| Parish Priest | pages | ☐ | ☐ |
| Deacon | pages | ☐ | ☐ |
| Parish History | pages | ☐ | ☐ |
| About CUTES | pages | ☐ | ☐ |
| Life at CUTES | pages | ☐ | ☐ |
| BEC — About | pages | ☐ | ☐ |
| Retreat | events | ☐ | ☐ |
| Gawai Kaamatan CUTES | events | ☐ | ☐ |
| CUTES Family Day | events | ☐ | ☐ |
| RCIA | services | ☐ | ☐ |
| Baptism | services | ☐ | ☐ |
| Marriage | services | ☐ | ☐ |
| Funeral | services | ☐ | ☐ |
| Blessing | services | ☐ | ☐ |
| Rosary | resources | ☐ | ☐ |
| Basic Prayers | resources | ☐ | ☐ |
| Divine Mercy Chaplet | resources | ☐ | ☐ |
| UI strings | `src/i18n/ui.ts` | ☐ | ☐ |

Language-neutral, written once: the committee roster, the mass schedule, gallery
photos, and bulletin PDFs.

---

## Verification

**Per commit**

- `npm run build`. Schema violations fail here by design — this is the test suite.
- `npm run preview`, then click every nav item in both locales.

**Before deploy**

- Bulletin drill: drop a dummy `2026-09-06.pdf` into `public/bulletin/`, rebuild,
  confirm it appears first and is labelled "This week", then delete it.
- Roster drill: rename one committee member in `roster.yaml`, rebuild, confirm the
  change appears. Then delete a required field and confirm the build fails with a
  message naming the file.
- Lighthouse mobile on `/en/gallery/retreat` — the heaviest page. Target 90 or
  above on performance and 100 on accessibility.
- Broken-link sweep across `dist/` (`npx linkinator dist --recurse`).
- Disable JavaScript and confirm navigation, the language switcher, and gallery
  thumbnails still work.
- Open the site on a phone over campus wifi, not on a laptop over broadband.

**After deploy**

- Push a trivial commit and confirm Cloudflare rebuilds and serves it.
- Hand the README to someone who did not build the site and watch them publish a
  bulletin without help. If they get stuck, the README is wrong, not the person.

---

## Deferred, with the trigger that un-defers it

| Deferred | Add it when |
|---|---|
| Sveltia or Decap CMS | The committee says the GitHub upload flow is too hard, in those words, after actually trying it |
| Site search | The site passes roughly fifty pages |
| Contact form | Someone commits to watching the inbox after handover |
| Event registration | A Google Form link proves insufficient for a real event |
| Scheduled rebuilds | A stale "upcoming event" on the home page actually causes confusion |
| Third or later language | Someone asks and volunteers to translate |
| Analytics | The committee has a question that page views would answer |

Each of these is cheap to add later and expensive to carry now. Nothing in the
architecture blocks any of them.
