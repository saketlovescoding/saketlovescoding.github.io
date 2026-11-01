# Saket Ramsinghani — Personal Website

## Project Overview
Simple static personal website for Saket Ramsinghani, hosted on GitHub Pages at https://saketlovescoding.github.io/ (user site; repo renamed to `saketlovescoding.github.io`). No custom domain for now — the old `saketramsinghani.life` was dropped; a new domain may be added later via a `CNAME` file. Plain, minimal design with two modes — **Professional** (work, projects, blog, notes, stats) and **Personal** (about, thoughts, reading) — switched in the header, plus a light/dark toggle.

## Tech Stack
- Pure HTML + CSS + vanilla JS (no frameworks, no build tools)
- GitHub Pages for hosting (no custom domain currently)

## File Structure
- `index.html` — Home; one block per mode (`.mode-block--professional` / `--personal`), CSS shows the active one
- `projects.html`, `blogs.html`, `notes.html`, `thoughts.html`, `reading.html`, `stats.html` — content pages
- `404.html` — GitHub Pages not-found page (`noindex`, uses root-absolute paths)
- `styles.css` — single shared stylesheet
- `js/site.js` — theme toggle, mode switch, stats-page streak image tinting
- `robots.txt`, `sitemap.xml` — crawler files
- `_config.yml` — GitHub Pages build config; excludes `CLAUDE.md` and `.claude/` from the published site

## Mode & Theme
- `<html data-mode="professional|personal" data-theme="light|dark">`, both persisted in localStorage; the inline snippet in every page head applies them before paint
- Mode-exclusive pages set `data-page-mode="..."` on that head script, which forces + persists the mode. Professional: projects, blogs, notes, stats. Personal: thoughts, reading. Switching to the other mode on such a page goes to the home page
- Both modes share one cool graphite palette — mode changes only the nav and home content, not colors. `:root` = light, `[data-theme="dark"]` overrides; accent `#B85C38` (`#D17A4F` dark)

## Design System
- Max content width: 680px (`--max-width: 720px` incl. padding)
- Fonts: Cormorant Garamond (headings) + DM Sans (body) from Google Fonts
- Mobile breakpoint at 640px
- No background animation, grain, or decorative hover effects — keep it plain

## Conventions
- All pages share the same head meta, header (logo, mode switch, theme toggle, two nav lists) and footer — edit all pages together when changing it (`404.html` uses `/`-absolute links)
- Nav sets: professional `Work · Projects · Blog · Notes · Stats`, personal `About · Thoughts · Reading`; active link gets `class="active" aria-current="page"` (index marks both Work and About)
- Semantic HTML (header, main, footer, nav); keep it minimal, no new dependencies
- External links use `target="_blank" rel="noopener"`
- Reusable components: `.card`/`.card-list` (projects, notes), `.entry-list` (blog/thoughts listings), `.book-list` (reading)

## SEO / Crawling
- Every page has `<meta name="description">`, `<link rel="canonical">` and Open Graph tags; home also has Person JSON-LD
- Absolute URLs (canonical, og:url, JSON-LD, sitemap, robots `Sitemap:`) use `https://saketlovescoding.github.io/` — update them all together if the domain changes
- When adding or removing a page: add it to the right nav list on every page AND to `sitemap.xml`
- `robots.txt` allows all crawlers; a commented block lists AI-training bots to block if wanted
- Seeing which bots crawl the site can't be done from static files (GitHub Pages exposes no logs); use Google Search Console / Bing Webmaster Tools; Cloudflare bot analytics needs an owned custom domain

## Git / Deployment
- Remote: https://github.com/saketlovescoding/saketlovescoding.github.io.git (formerly `saketramsinghani`)
- Branch: main; deploys automatically via GitHub Pages on push
- Do NOT add or modify a CNAME file unless explicitly asked
