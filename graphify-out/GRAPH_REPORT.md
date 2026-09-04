# Graph Report - CUTES  (2026-09-04)

## Corpus Check
- 113 files · ~150,572 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 530 nodes · 898 edges · 31 communities (28 shown, 2 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 145 edges (avg confidence: 0.88)
- Token cost: 240,639 input · 0 output

## Community Hubs (Navigation)
- Astro Components and Pages
- Ministries and Community Events
- Catholic Prayers and Devotions
- Build Toolchain and Dependencies
- Site Sitemap and Editable Areas
- CI, Deploy and Base Path
- Navigation and Liturgical Calendar
- Gallery and Contact Decisions
- CUTES Committee and BEC Structure
- Sacrament Preparation Rules
- TypeScript Configuration
- Architecture Decisions (Astro, Files-over-CMS)
- Content Collection Schemas
- CUTES Logo Symbolism
- Gallery Photo Pipeline
- Bilingual i18n Core
- Mass and Devotion Schedule
- Bulletin and Event Publishing
- Build Phases and Theme Colours
- Favicon and Logo Reduction
- Sunday Worship Hero Photo
- Campus Fellowship Hero Photo
- Community Worship Hero Photo
- Issue Forms and Layout Chrome
- Student Story Portrait Photo
- Deferred and Open Decisions
- Committee Roster Maintenance
- Services and Resources Sections
- Fellowship Gallery Albums
- Developer Setup

## God Nodes (most connected - your core abstractions)
1. `useTranslations()` - 27 edges
2. `localePath()` - 25 edges
3. `[]` - 24 edges
4. `The Holy Rosary (EN)` - 18 edges
5. `localizedPaths()` - 13 edges
6. `localeParams()` - 12 edges
7. `Add Photos to the Gallery` - 12 edges
8. `GALLERY Section` - 11 edges
9. `site` - 10 edges
10. `About CUTES (EN)` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Grouped Monthly Dependency Updates` --semantically_similar_to--> `Astro over WordPress`  [INFERRED] [semantically similar]
  .github/dependabot.yml → Requirement/TECH_STACK.md
- `CUTES Logo (Requirement source asset)` --semantically_similar_to--> `CUTES Logo (Website bundled asset)`  [INFERRED] [semantically similar]
  Requirement/logo.jpg → Website/src/assets/logo.jpg
- `Content Update Request Form` --conceptually_related_to--> `Bilingual English / Bahasa Malaysia i18n`  [INFERRED]
  .github/ISSUE_TEMPLATE/content-update.yml → Requirement/TECH_STACK.md
- `After Mass Album Photo Instructions` --implements--> `Add Photos to the Gallery`  [INFERRED]
  Website/src/assets/gallery/after-mass/README.md → CONTRIBUTING.md
- `Chilling Album Photo Instructions` --implements--> `Add Photos to the Gallery`  [INFERRED]
  Website/src/assets/gallery/chilling/README.md → CONTRIBUTING.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Gallery Photo Publishing Flow** — contributing_add_gallery_photos, contributing_photo_size_limit, contributing_filename_ordering, requirement_implementation_plan_build_cost_warning, requirement_tech_stack_astro_assets_images, website_src_assets_gallery_mass_readme_album_instructions, website_src_assets_gallery_retreat_readme_album_instructions, website_src_assets_gallery_taize_readme_album_instructions [INFERRED 0.85]
- **Surviving the Yearly Committee Handover** — requirement_tech_stack_three_constraints, requirement_tech_stack_astro_over_wordpress, requirement_tech_stack_files_over_hosted_cms, requirement_implementation_plan_m12_deploy_and_handover, contributing_browser_only_editing, _github_dependabot_grouped_monthly_updates [INFERRED 0.85]
- **Ministries that fund and move people to events** — website_src_content_committee_roster_entrepreneurship, website_src_content_committee_roster_transportation, website_src_content_committee_roster_recreation, website_src_content_events_en_retreat_cutes_retreat [EXTRACTED 1.00]
- **Ministries that prepare the Sunday student Mass** — website_src_content_pages_en_life_student_mass, website_src_content_committee_roster_liturgy, website_src_content_committee_roster_choir, website_src_content_committee_roster_music, website_src_content_committee_roster_multimedia [EXTRACTED 1.00]
- **The CUTES annual event cycle** — website_src_content_events_en_retreat_cutes_retreat, website_src_content_events_en_gawai_kaamatan_gawai_and_kaamatan_celebration, website_src_content_events_en_family_day_cutes_family_day, website_src_content_pages_en_life_life_at_cutes [EXTRACTED 1.00]
- **Prayers making up one rosary** — website_src_content_resources_en_basic_prayers_sign_of_the_cross, website_src_content_resources_en_basic_prayers_apostles_creed, website_src_content_resources_en_basic_prayers_our_father, website_src_content_resources_en_basic_prayers_hail_mary, website_src_content_resources_en_basic_prayers_glory_be, website_src_content_resources_en_rosary_fatima_prayer, website_src_content_resources_en_rosary_hail_holy_queen [EXTRACTED 1.00]
- **Masses flagged highlight for the home page** — website_src_content_schedule_mass_sunday_morning_en, website_src_content_schedule_mass_sunday_morning_bm, website_src_content_schedule_mass_sunday_evening_cutes, website_src_content_schedule_mass_saturday_vigil, website_src_content_schedule_mass_highlight_flag [EXTRACTED 1.00]
- **Parish sacramental and pastoral services** — website_src_content_services_en_rcia_rcia, website_src_content_services_en_baptism_baptism, website_src_content_services_en_marriage_marriage, website_src_content_services_en_funeral_funeral, website_src_content_services_en_blessing_blessings [INFERRED 0.95]
- **CUTES Committee Ministry Roster** — requirement_most_holy_redeemer_church__tanjung_malim_website_cutes_committee, requirement_most_holy_redeemer_church__tanjung_malim_website_ministry_of_leaders, requirement_most_holy_redeemer_church__tanjung_malim_website_ministry_role_structure, requirement_most_holy_redeemer_church__tanjung_malim_website_liturgy_ministry, requirement_most_holy_redeemer_church__tanjung_malim_website_choir_ministry, requirement_most_holy_redeemer_church__tanjung_malim_website_music_ministry [EXTRACTED 1.00]
- **Sacramental and Pastoral Services Offering** — requirement_most_holy_redeemer_church__tanjung_malim_website_rcia, requirement_most_holy_redeemer_church__tanjung_malim_website_baptism, requirement_most_holy_redeemer_church__tanjung_malim_website_marriage, requirement_most_holy_redeemer_church__tanjung_malim_website_funeral, requirement_most_holy_redeemer_church__tanjung_malim_website_blessing [EXTRACTED 1.00]
- **Signature CUTES Events Listed as Both Events and Galleries** — requirement_most_holy_redeemer_church__tanjung_malim_website_retreat, requirement_most_holy_redeemer_church__tanjung_malim_website_gawai_kaamatan_cutes, requirement_most_holy_redeemer_church__tanjung_malim_website_cutes_family_day, requirement_most_holy_redeemer_church__tanjung_malim_website_event, requirement_most_holy_redeemer_church__tanjung_malim_website_gallery [INFERRED 0.85]
- **Committee-edited structured content sources** — readme_committee_roster, readme_mass_schedule, readme_gallery_albums, readme_bilingual_content, readme_site_data [INFERRED 0.85]
- **Zero-maintenance, outlives-the-committee design stance** — readme_static_site_architecture, readme_bulletin_filename_convention, readme_browser_only_editing, readme_handover_governance, readme_fail_fast_build [INFERRED 0.85]
- **Build and deploy pipeline** — readme_astro_project, readme_deploy_workflow, readme_dual_deployment, readme_base_path [EXTRACTED 1.00]
- **Casual Campus Fellowship Scene** — website_public_fellowship_casual_student_fellowship, website_public_fellowship_casual_campus_setting, website_public_fellowship_casual_grace_fellowship_mug, website_public_fellowship_casual_warmth_marketing_imagery [INFERRED 0.80]
- **Worship Gathering Scene Composition** — website_public_hero_community_corporate_worship, website_public_hero_community_young_adult_congregation, website_public_hero_community_worship_band_stage, website_public_hero_community_lyrics_projection_screen [INFERRED 0.85]
- **Student Story Visual Narrative** — website_public_person_story_image, website_public_person_story_student_subject, website_public_person_story_campus_setting, website_public_person_story_testimonial_imagery [INFERRED 0.75]
- **Worship Scene Composition** — website_public_sunday_worship_congregation, website_public_sunday_worship_chancel_focal_point, website_public_sunday_worship_liturgical_furnishings, website_public_sunday_worship_sunday_worship_service [INFERRED 0.85]

## Communities (31 total, 2 thin omitted)

### Community 0 - "Astro Components and Pages"
Cohesion: 0.06
Nodes (68): href, t, when, rows, t, alternate, canonical, ogImage (+60 more)

### Community 1 - "Ministries and Community Events"
Cohesion: 0.07
Nodes (46): Choir Ministry, Entrepreneurship Ministry, Fail-loud roster validation, Leaders (CUTES Executive Committee), Liturgy Ministry, Multimedia Ministry, Music Ministry, Recreation Ministry (+38 more)

### Community 2 - "Catholic Prayers and Devotions"
Cohesion: 0.07
Nodes (42): The Apostles' Creed, Basic Prayers (EN), Eternal Rest (prayer for the dead), Glory Be, Grace Before Meals, Prayer to Our Guardian Angel, The Hail Mary, The Our Father (+34 more)

### Community 3 - "Build Toolchain and Dependencies"
Cohesion: 0.05
Nodes (38): astro, @astrojs/check, @astrojs/sitemap, @fontsource-variable/archivo, @fontsource-variable/source-serif-4, sharp, tailwindcss, @tailwindcss/vite (+30 more)

### Community 4 - "Site Sitemap and Editable Areas"
Cohesion: 0.07
Nodes (36): About CUTES, Baptism, Basic Prayer, Blessing, Parish Bulletin, CONTACT Section, Contact Page, CUTES Section (+28 more)

### Community 5 - "CI, Deploy and Base Path"
Cohesion: 0.07
Nodes (33): GitHub Actions Updates, Grouped Monthly Dependency Updates, npm Updates for /Website, BASE_PATH Sub-path Prefix, Build Job, Serialized Deploy Concurrency Group, Deploy to GitHub Pages Job, Pull Requests Build But Never Publish (+25 more)

### Community 6 - "Navigation and Liturgical Calendar"
Cohesion: 0.16
Nodes (16): [], dynamicChildren, other, t, nav, NavItem, languageShort, otherLang() (+8 more)

### Community 7 - "Gallery and Contact Decisions"
Cohesion: 0.11
Nodes (20): Add Photos to the Gallery, Filename-Ordered Gallery Photos, 2000px Photo Size Limit, Gallery Build Cost Warning, M11 — Contact, M8 — Gallery, Static Map Image over an Embedded Iframe, Gallery Albums (+12 more)

### Community 8 - "CUTES Committee and BEC Structure"
Cohesion: 0.14
Nodes (19): BEC Section, About BEC (Basic Ecclesial Community), Choir Ministry, CUTES Committee, Entrepreneurship Ministry, Koordinator, Liturgy Ministry, Ministry of Leaders (Executive Committee) (+11 more)

### Community 9 - "Sacrament Preparation Rules"
Cohesion: 0.18
Nodes (14): Baptism (EN), Emergency Baptism, Choosing Godparents, Convalidation, Marriage (EN), Mixed Marriage permission, Marriage Preparation Course, Six-month notice period (+6 more)

### Community 10 - "TypeScript Configuration"
Cohesion: 0.15
Nodes (12): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, compilerOptions, allowJs, baseUrl, paths (+4 more)

### Community 11 - "Architecture Decisions (Astro, Files-over-CMS)"
Cohesion: 0.20
Nodes (12): Issue Template Contact Links, Browser-Only Editing Workflow, M12 — Deploy and Handover, M3 — Content Collections, Schema Validation as the Test Suite, Astro 5, Astro over Next.js or Nuxt, Cloudflare Pages Hosting (+4 more)

### Community 12 - "Content Collection Schemas"
Cohesion: 0.17
Nodes (10): albums, collections, events, LANGS, massTimes, ministries, pages, proseBase (+2 more)

### Community 13 - "CUTES Logo Symbolism"
Cohesion: 0.33
Nodes (11): Cloud / Sky Photographic Backdrop, Black Latin Cross Symbol, CUTES Brand Mark, CUTES Organization (Catholic student/youth ministry), CUTES Wordmark (white serif capitals), Diamond Quadrant Layout (yellow / magenta / purple / lime), Red Flame Symbol (Holy Spirit / Pentecost), CUTES Logo (Requirement source asset) (+3 more)

### Community 14 - "Gallery Photo Pipeline"
Cohesion: 0.22
Nodes (8): t, albumCount(), albumCover(), byAlbum, files, GalleryPhoto, photosInAlbum(), albums

### Community 15 - "Bilingual i18n Core"
Cohesion: 0.24
Nodes (10): Pull Request Checklist, Before Launch TODO List, Page-to-File Map, Content Authoring Checklist, M1 — i18n Core, Bilingual English / Bahasa Malaysia i18n, Language-Neutral Assets, Header Language Switcher (+2 more)

### Community 16 - "Mass and Devotion Schedule"
Cohesion: 0.22
Nodes (10): Thursday Adoration (CUTES-led last Thursday), Saturday Confession, First Friday Mass and Sacred Heart Devotion, highlight flag (home page selection), Saturday 6:00pm Vigil Mass, Mass and Devotion Schedule Data, Sunday 6:00pm CUTES Student Mass, Sunday 10:30am Bahasa Malaysia Mass (+2 more)

### Community 17 - "Bulletin and Event Publishing"
Cohesion: 0.25
Nodes (8): Add or Edit an Event, Publish the Bulletin, M4 — Home, M5 — Main / Parish, M7 — Events, Verification Drills, Bulletin PDF Publishing Flow, Bulletin Folder Filename Spec

### Community 18 - "Build Phases and Theme Colours"
Cohesion: 0.29
Nodes (8): Build Order Phases, M0 — Project Foundation, Central Latin Cross, Logo Colour Palette and Liturgical Meanings, CUTES Logo, Holy Spirit Flame, Uplifted Hands, Theme Colour Tokens

### Community 19 - "Favicon and Logo Reduction"
Cohesion: 0.46
Nodes (8): Logo Specification (Requirement/logo.md), Reduce Logo To What Survives At 16px, Diamond clipPath Construction, Latin Cross Overlay, CUTES Brand Identity, CUTES Favicon (Diamond Cross Mark), Quadrant Colour Palette (Gold, Magenta, Purple, Ink), Rhombus (Diamond) Silhouette

### Community 20 - "Sunday Worship Hero Photo"
Cohesion: 0.32
Nodes (8): Chancel Focal Point (Altar, Cross, Lectern), Seated Congregation, Public Hero Imagery Asset, Sunday Worship Photo (Modern Chapel Interior), Liturgical Furnishings (Paschal Candle, Altar Candles, Lilies, Gospel Book), Nordic Minimal Church Architecture, Sunday Worship Service, Warm Neutral Wood-and-Plaster Palette

### Community 21 - "Campus Fellowship Hero Photo"
Cohesion: 0.43
Nodes (7): Fellowship Casual Photo (Campus Cafe Gathering), University Campus Outdoor Setting, "Hikmat Church Fellowship" Book on Table, "Grace Fellowship" Branded Mug, Multicultural and Inclusive Representation, Student Fellowship Gathering, Warm Approachable Hero Imagery

### Community 22 - "Community Worship Hero Photo"
Cohesion: 0.43
Nodes (7): Hero Image: Community Worship Gathering, Community and Belonging Theme, Corporate Worship Scene, Landing Page Hero Banner Asset, Lyrics Projection Screen, Worship Band Stage Setup, Young Adult Congregation

### Community 23 - "Issue Forms and Layout Chrome"
Cohesion: 0.33
Nodes (6): Bug Report Issue Form, Content Update Request Form, Editable Site Areas Taxonomy, M2 — Layout and Chrome, Parish Website Sitemap, Tailwind CSS 4

### Community 24 - "Student Story Portrait Photo"
Cohesion: 0.53
Nodes (6): University Campus Courtyard Setting, Person Story Hero Photo, Shallow Depth-of-Field Portrait Framing, STUDENT EVENT Poster, Smiling Student Subject, Personal Testimonial Imagery Pattern

### Community 25 - "Deferred and Open Decisions"
Cohesion: 0.40
Nodes (5): Decisions Log, Deferred, with the Trigger That Un-defers It, Deliberately Not Included, Git-based CMS (Sveltia / Decap), Deferred, Open Decision: What Is a Bulletin?

### Community 26 - "Committee Roster Maintenance"
Cohesion: 0.67
Nodes (4): Update the Committee Roster, M6 — CUTES, Committee Photos Are Optional, CUTES Committee Structure

### Community 27 - "Services and Resources Sections"
Cohesion: 0.50
Nodes (4): M10 — Resources, M9 — Services, Resources Section (Prayers), Services Section (Sacraments)

## Ambiguous Edges - Review These
- `CUTES Brand Mark` → `Cloud / Sky Photographic Backdrop`  [AMBIGUOUS]
  Requirement/logo.jpg · relation: conceptually_related_to
- `Quadrant Colour Palette (Gold, Magenta, Purple, Ink)` → `Latin Cross Overlay`  [AMBIGUOUS]
  Website/public/favicon.svg · relation: conceptually_related_to
- `Fellowship Casual Photo (Campus Cafe Gathering)` → `"Hikmat Church Fellowship" Book on Table`  [AMBIGUOUS]
  Website/public/fellowship-casual.jpg · relation: references

## Knowledge Gaps
- **190 isolated node(s):** `name`, `type`, `version`, `private`, `description` (+185 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 208 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `CUTES Brand Mark` and `Cloud / Sky Photographic Backdrop`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Quadrant Colour Palette (Gold, Magenta, Purple, Ink)` and `Latin Cross Overlay`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Fellowship Casual Photo (Campus Cafe Gathering)` and `"Hikmat Church Fellowship" Book on Table`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Bilingual English / Bahasa Malaysia i18n` connect `Bilingual i18n Core` to `Build Phases and Theme Colours`, `Issue Forms and Layout Chrome`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `M1 — i18n Core` connect `Bilingual i18n Core` to `CI, Deploy and Base Path`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `The Holy Rosary (EN)` (e.g. with `The Divine Mercy Chaplet (EN)` and `Saturday 6:00pm Vigil Mass`) actually correct?**
  _`The Holy Rosary (EN)` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _190 weakly-connected nodes found - possible documentation gaps or missing edges._