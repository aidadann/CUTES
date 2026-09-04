# Most Holy Redeemer Church, Tanjung Malim

The website for the parish and for **CUTES** — Catholic UPSI Tertiary Education
Students.

- **Live site:** *TODO — add the URL once the domain is attached*
- **Publishing the bulletin, editing the roster, adding photos:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## What this repository is

| Folder | What is in it |
|---|---|
| `Website/` | The site itself — an Astro project. This is what gets deployed. |
| `Requirement/` | The original brief, the technology decision record, and the implementation plan. Background reading, not code. |
| `.github/` | The build and deploy automation, and the issue templates. |

The site is **static**. There is no database, no admin login, and no server to
maintain. Every page is generated from files in this repository, and the whole
thing is served as plain HTML from a CDN. If nobody touches it for two years, it
still works.

Read `Requirement/TECH_STACK.md` for why it was built this way, and
`Requirement/IMPLEMENTATION_PLAN.md` for how it is structured.

---

## The one rule

**A bulletin file must be named `YYYY-MM-DD.pdf`.**

That is the entire publishing specification. Upload
`Website/public/bulletin/2026-09-06.pdf` and it appears at the top of the
bulletin page about a minute later. Sorting, dates and the "Latest" label all
fall out of the filename.

---

## Running it on your own computer

You need [Node.js](https://nodejs.org/) 22 or newer.

```bash
cd Website
npm install
npm run dev      # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Local preview, updates as you save |
| `npm run build` | Type-check and build into `Website/dist/` |
| `npm run preview` | Serve the built site exactly as it will be deployed |
| `npm test` | Run the unit tests |

You do **not** need any of this to publish a bulletin or edit a page — that is
done on github.com in a web browser. See [CONTRIBUTING.md](CONTRIBUTING.md).

### If `npm run build` fails

Read the error message. It names the file and the field. A missing required
field in a Markdown or YAML file stops the build on purpose — a build that fails
is better than a blank page in front of the parish.

> **On Windows**, a build occasionally ends with `EBUSY: resource busy or
> locked` while clearing `dist/`. The site has already been built correctly at
> that point; delete `Website/dist` and run it again. This does not happen on
> the deploy server.

---

## Where things live

```
Website/src/
  content/          Everything the committee edits
    pages/en|ms/      Vision, parish priest, deacon, history, CUTES pages
    events/en|ms/     Retreat, Gawai and Kaamatan, Family Day
    services/en|ms/   RCIA, baptism, marriage, funeral, blessings
    resources/en|ms/  Prayers
    committee/        roster.yaml — the whole committee, one file
    schedule/         mass.yaml — mass and confession times
    gallery/          albums.yaml — album names and order
  assets/gallery/   The photos themselves, one folder per album
  data/site.ts      Address, email, phone, committee year
  i18n/ui.ts        Every button and label, in both languages
Website/public/
  bulletin/         The weekly PDFs
```

---

## Deployment

The site deploys to two places from the same repository, and both are free.

**GitHub Pages** — automatic. `.github/workflows/deploy.yml` builds and
publishes on every push to `main`. Enable it once under *Settings → Pages →
Build and deployment → Source: GitHub Actions*.

**Cloudflare Pages** — optional, and the better option once the parish has its
own domain. Connect the repository in the Cloudflare dashboard with:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `Website` |

Leave `BASE_PATH` unset there. GitHub Pages serves the site from `/CUTES/` and
needs that prefix; a custom domain on Cloudflare serves from the root and does
not.

---

## Handing this over

Every year the committee changes. Two things matter more than anything else in
this file:

1. **The repository should be owned by the parish**, or by a GitHub organisation
   the parish controls — not by a student account. A student graduates; an
   organisation does not.
2. **At least two people should have admin access**, and one of them should not
   be a student.

Everything else in here can be relearned from [CONTRIBUTING.md](CONTRIBUTING.md)
in an afternoon. Access cannot.

---

## Before launch

The site is complete and working, but several pages contain placeholder text
marked `TODO`. Search the repository for `TODO` to find every one. The list is
also in [CONTRIBUTING.md](CONTRIBUTING.md#before-launch).
