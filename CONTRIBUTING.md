# Editing the website

This guide is for the committee, not for programmers. **You do not need to
install anything.** Everything below is done in a web browser on github.com.

If you get stuck, open an issue on the repository and someone will help.

---

## How editing works, in one paragraph

Every page of the website is a file in this repository. When you change a file
and click *Commit*, a robot rebuilds the whole site and publishes it, usually
within two minutes. Nothing you do can break the live site permanently — if a
change is wrong, it can be undone with one click, and if a change would break
the build, the robot refuses to publish it and emails you instead.

---

## Publish the bulletin

**The filename must be `YYYY-MM-DD.pdf`.** For a bulletin dated 6 September
2026, name the file `2026-09-06.pdf`. Nothing else needs to be filled in.

1. Go to the folder `Website/public/bulletin/` on github.com.
2. Click **Add file → Upload files**.
3. Drag the PDF in.
4. Click **Commit changes**.

Wait about two minutes and it is on the site, at the top of the bulletin page,
labelled *Latest*. Older ones move into the archive list below it, newest first.

**If it does not appear**, the filename is wrong. `Bulletin 6 Sept.pdf` and
`2026-9-6.pdf` are both ignored. Rename it to `2026-09-06.pdf`.

---

## Add photos to the gallery

1. Go to `Website/src/assets/gallery/` and open the album folder you want —
   `retreat`, `family-day`, `mass`, and so on.
2. Click **Add file → Upload files**, drag the photos in, and commit.

That is all. There is no list to update.

**Two things to get right:**

- **Shrink the photos first.** Aim for no more than 2000 pixels on the long
  edge. Straight-from-the-phone photos make the build take ten minutes instead
  of thirty seconds and will eventually make it fail.
- **Filenames set the order.** Photos appear in filename order, so
  `01-arrival.jpg`, `02-mass.jpg`, `03-supper.jpg` gives you the order you want.

### Add a whole new album

1. Create the folder `Website/src/assets/gallery/<name>/` and put photos in it.
2. Add an entry to `Website/src/content/gallery/albums.yaml`, copying the shape
   of an existing one. The `id` must match the folder name exactly.

---

## Update the committee roster

The entire roster is one file: **`Website/src/content/committee/roster.yaml`**.

1. Open it on github.com and click the pencil icon.
2. Edit the names.
3. Commit.

The file has instructions at the top. The rules that matter:

- `role` must be one of: `coordinator`, `vice-coordinator-1`,
  `vice-coordinator-2`, `treasurer`, `vice-treasurer`, `secretary`,
  `vice-secretary`, `leader`, `assistant`, `member`.
- Indentation is meaningful. Copy the shape of an existing entry rather than
  typing a new one from scratch.
- Add or remove `- name:` lines freely; there is no limit.

**Change the academic year** in `Website/src/data/site.ts` — the line that reads
`committeeYear: '2025/2026'`.

Names are written once and shown in both languages. Roles and ministry names are
translated automatically.

---

## Add or edit an event

Events live in `Website/src/content/events/en/` and
`Website/src/content/events/ms/`. Each event is one file per language, with the
same filename in both.

Copy `retreat.md` and change it. The block at the top between the `---` lines is
the settings; below it is the description, written in ordinary text.

| Setting | Meaning |
|---|---|
| `title` | The event name |
| `summary` | One sentence, shown on cards and in search results |
| `startDate` | `YYYY-MM-DD` |
| `endDate` | Optional, for events over more than one day |
| `location` | Free text |
| `gallery` | Optional. An album `id` from `albums.yaml`, to link the photos |
| `registrationUrl` | Optional. A Google Form link |

Events move from *Upcoming* to *Past* automatically once the date has gone by.

---

## Edit a page

| Page | File |
|---|---|
| Vision and mission | `Website/src/content/pages/en/vision-mission.md` |
| Parish priest | `.../pages/en/parish-priest.md` |
| Deacon | `.../pages/en/deacon.md` |
| Parish history | `.../pages/en/parish-history.md` |
| About CUTES | `.../pages/en/about-cutes.md` |
| Life at CUTES | `.../pages/en/life.md` |
| BEC | `.../pages/en/bec.md` |
| Sacraments | `Website/src/content/services/en/*.md` |
| Prayers | `Website/src/content/resources/en/*.md` |

Swap `en` for `ms` for the Bahasa Malaysia version. **Both need editing** — they
are separate files.

Mass times are in `Website/src/content/schedule/mass.yaml`. The parish address,
email and phone number are in `Website/src/data/site.ts`. Buttons and menu
labels are in `Website/src/i18n/ui.ts`.

---

## Add a new prayer or a new sacrament page

1. Copy an existing file in `resources/en/` or `services/en/` and rename it.
2. Do the same in the `ms/` folder.
3. Change the `title`, `summary` and `order`, and write the text.

It appears in the menu and on the index page by itself. Nothing else to update.

---

## When the build fails

You will get an email from GitHub, and the site will keep serving the previous
working version. Nothing is broken for visitors.

Open the failed run under the **Actions** tab and read the last few red lines.
The message names the file and the field, for example:

```
resources/en/rosary.md: "title" is required
```

Fix that file and commit again. If you cannot work it out, undo your change:
find your commit under **Commits**, open it, and click **Revert**.

---

## Before launch

Several pages contain placeholder text. Search the repository for `TODO` — the
GitHub search box at the top, with `TODO` and this repository selected — and
work through the list.

The important ones:

- [ ] `Website/src/data/site.ts` — address, email, phone, Google Maps link
- [ ] `Website/src/content/schedule/mass.yaml` — real mass and confession times
- [ ] `Website/src/content/committee/roster.yaml` — the real committee
- [ ] `pages/en|ms/parish-priest.md` and `deacon.md` — real names, or delete
      `deacon.md` and remove the line from `Website/src/i18n/nav.ts`
- [ ] `pages/en|ms/parish-history.md` — the real history
- [ ] `pages/en|ms/bec.md` — the BEC zones table
- [ ] `services/en|ms/baptism.md` — which Sunday baptisms are celebrated
- [ ] `services/en|ms/funeral.md` — the parish practice on offerings
- [ ] `events/en|ms/*.md` — real dates, venues and registration links
- [ ] The whole Bahasa Malaysia side — drafted by a non-native speaker and
      **needs one review pass by someone who prays in BM**, particularly the
      prayer texts in `resources/ms/`
- [ ] Photos in `Website/src/assets/gallery/` — every album is currently empty
- [ ] `README.md` — the live site URL

---

## For developers

```bash
cd Website
npm install
npm run dev
```

- `npm run build` runs `astro check` first, so type errors fail the build.
- `npm test` covers the URL helpers in `src/i18n/utils.ts`. Those are the only
  functions where a bug breaks every page at once, because the site is deployed
  both at `/` (Cloudflare) and at `/CUTES/` (GitHub Pages).
- **Never hand-write an internal `href`.** Use `localePath(lang, path)` for
  pages and `assetPath(path)` for files in `public/`. A hard-coded `/en/...`
  works on Cloudflare and 404s on GitHub Pages, with no error in the build log.
- Adding a page to the menu is a one-line change in `src/i18n/nav.ts`. The
  sacrament and prayer menus build themselves from the content collections.
