# Most Holy Redeemer Church, Tanjung Malim

The website for the Church Of The Most Holy Redeemer (Archdiocese of Penang) and
for **CUTES** — the Catholic Undergraduate Teachers' Society, the Catholic UPSI
student community at the parish.

- **Live site:** https://aidadann.github.io/CUTES/ms/
- **Publishing the bulletin, editing the roster, adding photos:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## What this repository is

| Folder | What is in it |
|---|---|
| `Website/` | The site itself — an Astro 5 + Tailwind CSS project. This is what gets built and deployed. |
| `Requirement/` | The original brief from the parish, the technology decision record, and the committee's revision documents. |
| `docs/` | Specs and implementation plans for changes made to the site. |
| `.github/` | Automated build & deploy workflows (`deploy.yml`) and issue templates. |

The site is **static**. There is no database, no complex server, and no CMS logins to secure. Every page is automatically compiled from Markdown, YAML, and TypeScript files directly upon pushing to the `main` branch.

---

## Technical Guide: Updating Content & Assets

This section provides clear, step-by-step instructions for the church technical team, multimedia ministry, and student webmasters.

### 1. Updating Texts & Copy

Content is divided into three distinct categories based on where it lives:

#### A. Parish & CUTES Core Articles (Markdown)
Articles, histories, sacrament guides, and prayers live under `Website/src/content/`. Each page exists in both **English (`en/`)** and **Bahasa Malaysia (`ms/`)**:

| Section / Content | English Path | Bahasa Malaysia Path |
|---|---|---|
| **Vision & Mission** | `Website/src/content/pages/en/vision-mission.md` | `Website/src/content/pages/ms/vision-mission.md` |
| **Parish Priest Message** | `Website/src/content/pages/en/parish-priest.md` | `Website/src/content/pages/ms/parish-priest.md` |
| **Parish History** | `Website/src/content/pages/en/parish-history.md` | `Website/src/content/pages/ms/parish-history.md` |
| **About CUTES** | `Website/src/content/pages/en/about-cutes.md` | `Website/src/content/pages/ms/about-cutes.md` |
| **Life at CUTES** | `Website/src/content/pages/en/life.md` | `Website/src/content/pages/ms/life.md` |
| **BEC (Basic Ecclesial)** | `Website/src/content/pages/en/bec.md` | `Website/src/content/pages/ms/bec.md` |
| **Sacraments** (RCIA, Baptism, Marriage, etc.) | `Website/src/content/services/en/*.md` | `Website/src/content/services/ms/*.md` |
| **Prayers & Devotions** | `Website/src/content/resources/en/*.md` | `Website/src/content/resources/ms/*.md` |

> **Rule for Markdown**: Keep the frontmatter header (the block between `---` at the top) intact (`title:`, `order:`, etc.). Write or edit the body text in standard Markdown below the second `---`. Always update **both** language files so neither version is out of date.

#### B. UI Strings, Buttons, and Homepage Headings (Bilingual)
All navigation menus, buttons, table labels, homepage slogans, and values live in:
- **`Website/src/i18n/ui.ts`**
  - Edit `ui.en` for English text.
  - Edit `ui.ms` for Bahasa Malaysia text.
  - *Example:* Change `'home.heroHeadline': 'WELCOME TO MOST HOLY REDEEMER CHURCH'` or `'home.ctaLocation': 'Our Location'`.
  - **Rule:** every key must exist in **both** `ui.en` and `ui.ms`. A key missing from `ui.ms` silently falls back to English, so the gap is invisible until a reader finds it.

#### C. Parish Coordinates & Contact Information
Address, contact email, social accounts, and the Google Maps URL are kept in a single configuration file:
- **`Website/src/data/site.ts`**
  - Update `site.address`, `site.email`, `site.social`, `site.mapsUrl`.
  - **`site.council`** holds the three Parish Pastoral Council contacts (name, role key, dial number, display number, photo). This one array feeds the home page cards, the footer phone list, and the contact page — correct a number here and it changes in all three.
  - Each council member's `photo` is an empty string until a portrait is added to `Website/public/council/`; an initials monogram renders in the meantime.
  - `site.data.ts` values are asserted by `Website/src/data/site.test.ts`, so a typo in a phone number or the address fails `npm test`.

#### D. Mass Schedule & Committee Roster
- **Mass & Rosary Times**: `Website/src/content/schedule/mass.yaml`
  - Edit days, times, languages, and notes. `kind: mass` for a Mass, `kind: devotion` for the Rosary.
  - Confession ("30 minutes before Mass") and feast days ("refer to the bulletin") are **notes**, not rows — they live as `schedule.confessionNote` and `schedule.feastNote` in `ui.ts`.
- **Committee Roster**: `Website/src/content/committee/roster.yaml`
  - Grouped by ministry (`liturgy`, `choir`, `multimedia`, `transportation`, etc.). Simply add or edit `- name: "Student Name"` under the respective role.

---

### 2. Updating Logo & Branding Graphics

There are **two** marks, and they are not interchangeable:

| File | Used by | Replace when |
|---|---|---|
| `Website/public/church-logo.jpg` | Header brand, footer brand, apple-touch-icon, Open Graph thumbnails | The **church's** mark changes |
| `Website/public/cutes-logo.jpg` | The CUTES page banner | The **CUTES** emblem changes |
| `Website/src/assets/cutes-logo.jpg` | The emblem shown beside its explanation on the About CUTES pages | Same as above — **keep these two CUTES files identical** |

1. **Replace a logo**: overwrite the file keeping the exact same filename. **Recommended specs**: square aspect ratio (1:1), at least `400 x 400px`, clean high-resolution JPG or PNG.
   - The CUTES emblem exists twice on purpose. The `public/` copy is served directly; the `src/assets/` copy goes through Astro's image pipeline, which is what makes it resolve correctly on the GitHub Pages deploy. Update both together.
2. **Replace the Favicon (Browser Tab Icon)**:
   - Location: **`Website/public/favicon.svg`** (or replace with SVG/PNG of the parish emblem).
3. **Commit & Push**: the navigation bar, footer, and social sharing thumbnails update on the next build.

> **Never hand-write an image or link path with a leading slash** in a template (`src="/church-logo.jpg"`). The site deploys both at `/` and at `/CUTES/`; a hand-written path works on the first and 404s on the second **with no build error**. Use `assetPath('church-logo.jpg')` for `public/` files and `localePath(lang, 'contact')` for internal links.

---

### 3. Uploading Photos & Managing the Gallery

Photo management is organized into two areas: **Homepage Editorial Photos** and **Community Gallery Albums**.

#### A. Homepage Editorial Photography
The homepage uses large documentary-style photography:
- `Website/public/hero-community.jpg`: The full-width hero background image (`16:9` ratio, recommended `1920 x 1080px`, warm lighting, candid worship).
- `Website/public/fellowship-casual.jpg`: The "Who We Are" community image (`4:3` ratio, recommended `1200 x 900px`, outdoor student interaction).
- `Website/public/sunday-worship.jpg`: The "Join us this weekend" sanctuary image (`16:10` or `16:9`, bright natural light).
- `Website/public/council/*.jpg`: Parish Pastoral Council portraits (square, ~`400 x 400px`). Drop a file in, then point that member's `photo` field in `Website/src/data/site.ts` at it (e.g. `'council/fr-vincent-paul.jpg'`). Until then the card shows the member's initials.

To replace any of these images, overwrite the corresponding file in `Website/public/` keeping the exact same filename.

#### B. Gallery Albums (`Website/src/assets/gallery/`)
Photos in the community gallery do not require database entries or coding:
1. Open the target album folder under `Website/src/assets/gallery/` (e.g. `mass/`, `fellowship/`, `retreat/`, `sport/`, `family-day/`).
2. Upload the images. Photos are displayed in alphabetical filename order.
   - *Tip:* Prefix filenames to set display order: `01-opening.jpg`, `02-procession.jpg`, `03-communion.jpg`.
3. **Photo Optimization Rule**: Downscale photos before uploading to **under 2000px** on the long edge (aim for 500KB - 1.5MB per image). Raw mobile photos (10MB+) will slow down GitHub Actions builds unnecessarily.

#### C. Creating a New Gallery Album
1. Create a new folder in `Website/src/assets/gallery/<album-id>/` and add photos to it.
2. Register the album in `Website/src/content/gallery/albums.yaml` by adding:
   ```yaml
   - id: your-album-id        # MUST match the folder name exactly
     order: 10
     title:
       en: Album Title in English
       ms: Tajuk Album dalam BM
     description:
       en: Brief one-sentence summary.
       ms: Ringkasan satu ayat.
   ```

---

### 4. Publishing the Weekly Bulletin

The publishing system requires **zero code**:
1. Save the weekly bulletin as a PDF.
2. **Name the file strictly `YYYY-MM-DD.pdf`** (e.g., `2026-09-06.pdf`).
3. Upload the file to **`Website/public/bulletin/`**.
4. Commit. The website will automatically feature this bulletin as **"Latest"** on both the homepage and bulletin page, and archive previous editions chronologically.

---

## Local Development & Testing

For local work on a developer workstation:

```bash
cd Website
npm install
npm run dev        # Starts local server at http://localhost:4321
```

### Verification Commands
Before pushing substantial changes, run:
```bash
npm test           # Runs Vitest unit tests (i18n routing & liturgical engine)
npm run build      # Runs type-checks (astro check) and static site compilation
```

---

## Deployment & Automated GitHub Actions

Deployment runs automatically via **GitHub Actions** upon any commit to `main`:
1. Check progress under the repository's **Actions** tab on GitHub.
2. If a build fails, GitHub displays a red indicator with the file and line number causing the error (e.g., missing YAML property or malformed Markdown frontmatter).
3. The live site will remain on the last successful version until the issue is fixed.

---

## Technical Handover & Governance

1. **Repository Ownership**: Keep this repository under an organization account managed by the parish rather than personal student accounts.
2. **Maintain Admin Access**: Ensure at least two individuals (e.g., parish administrator and multimedia head) retain admin privileges.
3. For general editorial workflows, refer to [CONTRIBUTING.md](CONTRIBUTING.md).
