# Graph Report - CUTES  (2026-09-04)

## Corpus Check
- Corpus is ~37,228 words - fits in a single context window. You may not need a graph.

## Summary
- 484 nodes · 852 edges · 33 communities (31 shown, 1 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 128 edges (avg confidence: 0.89)
- Token cost: 449,112 input · 0 output

## Community Hubs (Navigation)
- Astro Component Layer
- Ministries and Events Content
- Prayers and Devotions
- Contributor Publishing Workflows
- Build Dependencies
- Gallery Photo Pipeline
- Sacraments: Baptism and Marriage
- TypeScript Configuration
- Content Collection Schemas
- Liturgical Calendar Engine
- CUTES Logo Symbolism
- Event and Gallery Sitemap
- Mass and Devotion Schedule
- Home and Parish Sections
- Committee Ministry Structure
- Layout and Page Modules
- Favicon Design Reduction
- Top-Level Site Sections
- Executive Committee Posts
- Dual Deployment and Handover
- GitHub Actions Deploy Job
- Repository Layout and Astro Choice
- Sacramental Services Index
- Dependabot and Static Hosting
- Decisions and Deferrals Log
- Bilingual i18n Core
- Content-as-Database Rationale
- GitHub Issue Forms
- Services and Resources Modules
- Prayer Resources Index
- Local Developer Setup
- Orphan Gallery Albums

## God Nodes (most connected - your core abstractions)
1. `useTranslations()` - 27 edges
2. `localePath()` - 25 edges
3. `The Holy Rosary (EN)` - 18 edges
4. `localizedPaths()` - 13 edges
5. `localeParams()` - 12 edges
6. `Add Photos to the Gallery` - 12 edges
7. `GALLERY Section` - 11 edges
8. `site` - 10 edges
9. `About CUTES (EN)` - 10 edges
10. `Basic Prayers (EN)` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Filename-Ordered Gallery Photos` --semantically_similar_to--> `Bulletin Filename Rule YYYY-MM-DD.pdf`  [INFERRED] [semantically similar]
  CONTRIBUTING.md → README.md
- `Fail the Build Rather Than Ship a Blank Page` --semantically_similar_to--> `Schema Validation as the Test Suite`  [INFERRED] [semantically similar]
  README.md → Requirement/IMPLEMENTATION_PLAN.md
- `Grouped Monthly Dependency Updates` --semantically_similar_to--> `Astro over WordPress`  [INFERRED] [semantically similar]
  .github/dependabot.yml → Requirement/TECH_STACK.md
- `Developer Setup` --semantically_similar_to--> `npm Command Reference`  [INFERRED] [semantically similar]
  CONTRIBUTING.md → README.md
- `CUTES Logo (Requirement source asset)` --semantically_similar_to--> `CUTES Logo (Website bundled asset)`  [INFERRED] [semantically similar]
  Requirement/logo.jpg → Website/src/assets/logo.jpg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Gallery Photo Publishing Flow** — contributing_add_gallery_photos, contributing_photo_size_limit, contributing_filename_ordering, requirement_implementation_plan_build_cost_warning, requirement_tech_stack_astro_assets_images, website_src_assets_gallery_mass_readme_album_instructions, website_src_assets_gallery_retreat_readme_album_instructions, website_src_assets_gallery_taize_readme_album_instructions [INFERRED 0.85]
- **Filename as the Whole Publishing Specification** — readme_bulletin_filename_rule, website_public_bulletin_readme_filename_spec, contributing_publish_bulletin, contributing_filename_ordering, requirement_tech_stack_bulletin_pdf_publishing, _github_pull_request_template_checklist [INFERRED 0.85]
- **Surviving the Yearly Committee Handover** — requirement_tech_stack_three_constraints, requirement_tech_stack_astro_over_wordpress, requirement_tech_stack_files_over_hosted_cms, readme_handover_ownership, requirement_implementation_plan_m12_deploy_and_handover, contributing_browser_only_editing, _github_dependabot_grouped_monthly_updates [INFERRED 0.85]
- **Ministries that prepare the Sunday student Mass** — website_src_content_pages_en_life_student_mass, website_src_content_committee_roster_liturgy, website_src_content_committee_roster_choir, website_src_content_committee_roster_music, website_src_content_committee_roster_multimedia [EXTRACTED 1.00]
- **The CUTES annual event cycle** — website_src_content_events_en_retreat_cutes_retreat, website_src_content_events_en_gawai_kaamatan_gawai_and_kaamatan_celebration, website_src_content_events_en_family_day_cutes_family_day, website_src_content_pages_en_life_life_at_cutes [EXTRACTED 1.00]
- **Ministries that fund and move people to events** — website_src_content_committee_roster_entrepreneurship, website_src_content_committee_roster_transportation, website_src_content_committee_roster_recreation, website_src_content_events_en_retreat_cutes_retreat [EXTRACTED 1.00]
- **Prayers making up one rosary** — website_src_content_resources_en_basic_prayers_sign_of_the_cross, website_src_content_resources_en_basic_prayers_apostles_creed, website_src_content_resources_en_basic_prayers_our_father, website_src_content_resources_en_basic_prayers_hail_mary, website_src_content_resources_en_basic_prayers_glory_be, website_src_content_resources_en_rosary_fatima_prayer, website_src_content_resources_en_rosary_hail_holy_queen [EXTRACTED 1.00]
- **Parish sacramental and pastoral services** — website_src_content_services_en_rcia_rcia, website_src_content_services_en_baptism_baptism, website_src_content_services_en_marriage_marriage, website_src_content_services_en_funeral_funeral, website_src_content_services_en_blessing_blessings [INFERRED 0.95]
- **Masses flagged highlight for the home page** — website_src_content_schedule_mass_sunday_morning_en, website_src_content_schedule_mass_sunday_morning_bm, website_src_content_schedule_mass_sunday_evening_cutes, website_src_content_schedule_mass_saturday_vigil, website_src_content_schedule_mass_highlight_flag [EXTRACTED 1.00]
- **CUTES Committee Ministry Roster** — requirement_most_holy_redeemer_church__tanjung_malim_website_cutes_committee, requirement_most_holy_redeemer_church__tanjung_malim_website_ministry_of_leaders, requirement_most_holy_redeemer_church__tanjung_malim_website_ministry_role_structure, requirement_most_holy_redeemer_church__tanjung_malim_website_liturgy_ministry, requirement_most_holy_redeemer_church__tanjung_malim_website_choir_ministry, requirement_most_holy_redeemer_church__tanjung_malim_website_music_ministry [EXTRACTED 1.00]
- **Sacramental and Pastoral Services Offering** — requirement_most_holy_redeemer_church__tanjung_malim_website_rcia, requirement_most_holy_redeemer_church__tanjung_malim_website_baptism, requirement_most_holy_redeemer_church__tanjung_malim_website_marriage, requirement_most_holy_redeemer_church__tanjung_malim_website_funeral, requirement_most_holy_redeemer_church__tanjung_malim_website_blessing [EXTRACTED 1.00]
- **Signature CUTES Events Listed as Both Events and Galleries** — requirement_most_holy_redeemer_church__tanjung_malim_website_retreat, requirement_most_holy_redeemer_church__tanjung_malim_website_gawai_kaamatan_cutes, requirement_most_holy_redeemer_church__tanjung_malim_website_cutes_family_day, requirement_most_holy_redeemer_church__tanjung_malim_website_event, requirement_most_holy_redeemer_church__tanjung_malim_website_gallery [INFERRED 0.85]

## Communities (33 total, 1 thin omitted)

### Community 0 - "Astro Component Layer"
Cohesion: 0.06
Nodes (67): href, t, when, rows, t, alternate, canonical, ogImage (+59 more)

### Community 1 - "Ministries and Events Content"
Cohesion: 0.07
Nodes (46): Choir Ministry, Entrepreneurship Ministry, Fail-loud roster validation, Leaders (CUTES Executive Committee), Liturgy Ministry, Multimedia Ministry, Music Ministry, Recreation Ministry (+38 more)

### Community 2 - "Prayers and Devotions"
Cohesion: 0.07
Nodes (42): The Apostles' Creed, Basic Prayers (EN), Eternal Rest (prayer for the dead), Glory Be, Grace Before Meals, Prayer to Our Guardian Angel, The Hail Mary, The Our Father (+34 more)

### Community 3 - "Contributor Publishing Workflows"
Cohesion: 0.06
Nodes (39): Pull Request Checklist, Add Photos to the Gallery, Update the Committee Roster, Filename-Ordered Gallery Photos, 2000px Photo Size Limit, Publish the Bulletin, Bulletin Filename Rule YYYY-MM-DD.pdf, Gallery Build Cost Warning (+31 more)

### Community 4 - "Build Dependencies"
Cohesion: 0.05
Nodes (38): astro, @astrojs/check, @astrojs/sitemap, @fontsource-variable/archivo, @fontsource-variable/source-serif-4, sharp, tailwindcss, @tailwindcss/vite (+30 more)

### Community 5 - "Gallery Photo Pipeline"
Cohesion: 0.15
Nodes (12): albumCount(), albumCover(), byAlbum, files, GalleryPhoto, photosInAlbum(), photos, t (+4 more)

### Community 6 - "Sacraments: Baptism and Marriage"
Cohesion: 0.18
Nodes (14): Baptism (EN), Emergency Baptism, Choosing Godparents, Convalidation, Marriage (EN), Mixed Marriage permission, Marriage Preparation Course, Six-month notice period (+6 more)

### Community 7 - "TypeScript Configuration"
Cohesion: 0.15
Nodes (12): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, compilerOptions, allowJs, baseUrl, paths (+4 more)

### Community 8 - "Content Collection Schemas"
Cohesion: 0.17
Nodes (10): albums, collections, events, LANGS, massTimes, ministries, pages, proseBase (+2 more)

### Community 9 - "Liturgical Calendar Engine"
Cohesion: 0.36
Nodes (9): addDays(), easterSunday(), firstSundayOfAdvent(), liturgicalDay, Season, SEASONS, sundayOnOrBefore(), iso() (+1 more)

### Community 10 - "CUTES Logo Symbolism"
Cohesion: 0.33
Nodes (11): Cloud / Sky Photographic Backdrop, Black Latin Cross Symbol, CUTES Brand Mark, CUTES Organization (Catholic student/youth ministry), CUTES Wordmark (white serif capitals), Diamond Quadrant Layout (yellow / magenta / purple / lime), Red Flame Symbol (Holy Spirit / Pentecost), CUTES Logo (Requirement source asset) (+3 more)

### Community 11 - "Event and Gallery Sitemap"
Cohesion: 0.22
Nodes (11): CUTES Family Day, EVENT Section, GALLERY Section, Gallery: After Mass, Gallery: Chilling, Gallery: Fellowship, Gallery: Mass, Gallery: Sport (+3 more)

### Community 12 - "Mass and Devotion Schedule"
Cohesion: 0.22
Nodes (10): Thursday Adoration (CUTES-led last Thursday), Saturday Confession, First Friday Mass and Sacred Heart Devotion, highlight flag (home page selection), Saturday 6:00pm Vigil Mass, Mass and Devotion Schedule Data, Sunday 6:00pm CUTES Student Mass, Sunday 10:30am Bahasa Malaysia Mass (+2 more)

### Community 13 - "Home and Parish Sections"
Cohesion: 0.25
Nodes (9): Parish Bulletin, Deacon, HOME Section, MAIN Section, Mass Schedule, Parish History, Parish Priest, Upcoming Event (+1 more)

### Community 14 - "Committee Ministry Structure"
Cohesion: 0.39
Nodes (9): Choir Ministry, CUTES Committee, Entrepreneurship Ministry, Liturgy Ministry, Ministry Role Structure (Leader / Assistant / Members), Multimedia and Publicity Ministry, Music Ministry, Recreation and Spiritual Ministry (+1 more)

### Community 15 - "Layout and Page Modules"
Cohesion: 0.25
Nodes (8): Editable Site Areas Taxonomy, Add or Edit an Event, M2 — Layout and Chrome, M4 — Home, M5 — Main / Parish, M7 — Events, Parish Website Sitemap, Tailwind CSS 4

### Community 16 - "Favicon Design Reduction"
Cohesion: 0.46
Nodes (8): Logo Specification (Requirement/logo.md), Reduce Logo To What Survives At 16px, Diamond clipPath Construction, Latin Cross Overlay, CUTES Brand Identity, CUTES Favicon (Diamond Cross Mark), Quadrant Colour Palette (Gold, Magenta, Purple, Ink), Rhombus (Diamond) Silhouette

### Community 17 - "Top-Level Site Sections"
Cohesion: 0.25
Nodes (8): About CUTES, BEC Section, About BEC (Basic Ecclesial Community), CONTACT Section, Contact Page, CUTES Section, Life at CUTES, Most Holy Redeemer Church Tanjung Malim Website

### Community 18 - "Executive Committee Posts"
Cohesion: 0.25
Nodes (8): Koordinator, Ministry of Leaders (Executive Committee), Secretary, Treasurer, Vice Koordinator 1, Vice Koordinator 2, Vice Secretary, Vice Treasurer

### Community 19 - "Dual Deployment and Handover"
Cohesion: 0.33
Nodes (7): BASE_PATH Sub-path Prefix, localePath and assetPath Helpers, Dual Deployment: GitHub Pages and Cloudflare Pages, Handover and Repository Ownership, M12 — Deploy and Handover, Cloudflare Pages Hosting, Three Shaping Constraints

### Community 20 - "GitHub Actions Deploy Job"
Cohesion: 0.33
Nodes (6): Build Job, Serialized Deploy Concurrency Group, Deploy to GitHub Pages Job, Pull Requests Build But Never Publish, When the Build Fails, Fail the Build Rather Than Ship a Blank Page

### Community 21 - "Repository Layout and Astro Choice"
Cohesion: 0.33
Nodes (6): Before Launch TODO List, Page-to-File Map, Repository Layout, Content Authoring Checklist, Astro 5, Astro over Next.js or Nuxt

### Community 22 - "Sacramental Services Index"
Cohesion: 0.33
Nodes (6): Baptism, Blessing, Funeral, Marriage, RCIA (Rite of Christian Initiation of Adults), SERVICES Section

### Community 23 - "Dependabot and Static Hosting"
Cohesion: 0.40
Nodes (5): GitHub Actions Updates, Grouped Monthly Dependency Updates, npm Updates for /Website, Static Site, No Server, Astro over WordPress

### Community 24 - "Decisions and Deferrals Log"
Cohesion: 0.40
Nodes (5): Decisions Log, Deferred, with the Trigger That Un-defers It, Deliberately Not Included, Git-based CMS (Sveltia / Decap), Deferred, Open Decision: What Is a Bulletin?

### Community 25 - "Bilingual i18n Core"
Cohesion: 0.50
Nodes (5): M1 — i18n Core, Bilingual English / Bahasa Malaysia i18n, Header Language Switcher, prefixDefaultLocale URL Trade-off, src/i18n/ui.ts String Table

### Community 26 - "Content-as-Database Rationale"
Cohesion: 0.50
Nodes (5): M3 — Content Collections, Schema Validation as the Test Suite, Astro Content Collections, Files over a Hosted CMS, Markdown and YAML over a Database

### Community 27 - "GitHub Issue Forms"
Cohesion: 0.50
Nodes (4): Bug Report Issue Form, Issue Template Contact Links, Content Update Request Form, Browser-Only Editing Workflow

### Community 28 - "Services and Resources Modules"
Cohesion: 0.50
Nodes (4): M10 — Resources, M9 — Services, Resources Section (Prayers), Services Section (Sacraments)

### Community 29 - "Prayer Resources Index"
Cohesion: 0.50
Nodes (4): Basic Prayer, Divine Mercy Chaplet, RESOURCES Section, Rosary

### Community 30 - "Local Developer Setup"
Cohesion: 0.67
Nodes (3): Developer Setup, npm Command Reference, Windows EBUSY Build Note

## Ambiguous Edges - Review These
- `CUTES Brand Mark` → `Cloud / Sky Photographic Backdrop`  [AMBIGUOUS]
  Requirement/logo.jpg · relation: conceptually_related_to
- `Quadrant Colour Palette (Gold, Magenta, Purple, Ink)` → `Latin Cross Overlay`  [AMBIGUOUS]
  Website/public/favicon.svg · relation: conceptually_related_to

## Knowledge Gaps
- **173 isolated node(s):** `name`, `type`, `version`, `private`, `description` (+168 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 190 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `CUTES Brand Mark` and `Cloud / Sky Photographic Backdrop`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Quadrant Colour Palette (Gold, Magenta, Purple, Ink)` and `Latin Cross Overlay`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Most Holy Redeemer Church Tanjung Malim Website` connect `Top-Level Site Sections` to `Prayer Resources Index`, `Event and Gallery Sitemap`, `Home and Parish Sections`, `Sacramental Services Index`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `The Holy Rosary (EN)` connect `Prayers and Devotions` to `Mass and Devotion Schedule`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `Build Order Phases` connect `Contributor Publishing Workflows` to `Repository Layout and Astro Choice`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `The Holy Rosary (EN)` (e.g. with `The Divine Mercy Chaplet (EN)` and `Saturday 6:00pm Vigil Mass`) actually correct?**
  _`The Holy Rosary (EN)` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _173 weakly-connected nodes found - possible documentation gaps or missing edges._