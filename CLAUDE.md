# saketramsinghani.life — Personal Website

## Project Overview
Simple static personal website for Saket Ramsinghani, hosted on GitHub Pages with custom domain `saketramsinghani.life`. One plain design, one nav, light/dark toggle. Keep it minimal.

## Tech Stack
- Pure HTML + CSS + vanilla JS (no frameworks, no build tools)
- GitHub Pages for hosting; custom domain via CNAME

## File Structure
- `index.html` — Home (intro + links)
- `projects.html`, `blogs.html`, `notes.html`, `thoughts.html`, `reading.html`, `stats.html` — content pages
- `404.html` — GitHub Pages not-found page (`noindex`, uses root-absolute paths)
- `styles.css` — single shared stylesheet
- `js/site.js` — theme toggle + stats-page streak image tinting
- `robots.txt`, `sitemap.xml` — crawler files
- `CNAME` — GitHub Pages custom domain config

## Theme
- `<html data-theme="light|dark">`, persisted in localStorage; inline snippet in every page head applies the saved theme or OS preference before paint
- `:root` = light palette, `[data-theme="dark"]` overrides; accent `#B85C38` (`#D17A4F` dark)

## Design System
- Max content width: 680px (`--max-width: 720px` incl. padding)
- Fonts: Cormorant Garamond (headings) + DM Sans (body) from Google Fonts
- Mobile breakpoint at 640px
- No background animation, grain, or decorative hover effects — keep it plain

## Conventions
- All pages share the same head meta, header (logo, theme toggle, nav) and footer — edit all pages together when changing it
- Nav: `Home · Projects · Blog · Notes · Thoughts · Reading · Stats`; active link gets `class="active" aria-current="page"`
- Semantic HTML (header, main, footer, nav); keep it minimal, no new dependencies
- External links use `target="_blank" rel="noopener"`
- Reusable components: `.card`/`.card-list` (projects, notes), `.entry-list` (blog/thoughts listings), `.book-list` (reading)

## SEO / Crawling
- Every page has `<meta name="description">`, `<link rel="canonical">` and Open Graph tags; home also has Person JSON-LD
- When adding or removing a page: add it to the nav on every page AND to `sitemap.xml`
- `robots.txt` allows all crawlers; a commented block lists AI-training bots to block if wanted
- Seeing which bots crawl the site can't be done from static files (GitHub Pages exposes no logs); use Google Search Console / Bing Webmaster Tools, or Cloudflare in front of the domain

## Git / Deployment
- Remote: https://github.com/saketlovescoding/saketramsinghani.git
- Branch: main; deploys automatically via GitHub Pages on push
- Do NOT modify the CNAME file unless explicitly asked
