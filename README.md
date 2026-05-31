# SlugGenerator.app

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Live](https://img.shields.io/badge/live-sluggenerator.app-3b82f6)](https://sluggenerator.app)

A free, client-side URL slug generator. Convert any text into clean,
SEO-friendly URL slugs in your browser — no signup, no tracking, no backend.

**Live site: https://sluggenerator.app**

---

## Why this exists

Every web project I've worked on eventually has someone reinventing
`slugify()` in five lines of regex that breaks on the first accented
character, CJK input, emoji, or unusual punctuation. SlugGenerator.app
handles those edge cases by default, so you don't have to maintain your own
fragile copy of the same regex on every project.

## Features

- **Real-time slug generation** as you type
- **Bulk mode** — paste many titles, get many slugs in one go
- **Transliteration** — accents (`Café` -> `cafe`) via Unicode NFKD
  normalization; CJK and other scripts handled gracefully
- **Stop-word removal** — filter out 100+ common English stop words
- **Custom separator** (hyphen, underscore, dot) and max-length cap
- **8 case-conversion variants** — URL slug, kebab-case, snake_case,
  camelCase, title case, permalink, slugify, text-to-slug
- **One-click copy** to clipboard, with optional leading `/path` prefix
- **6 locales** — English, Japanese, German, Spanish, Portuguese, French
- **100% client-side** — your text never leaves the browser. No analytics
  beyond aggregate page views.

## Tools shipped

All tools live under the same root and share the slug engine. Each variant
has its own SEO-targeted landing page.

| Tool | Path |
|------|------|
| Slug Generator | [/](https://sluggenerator.app/) |
| URL Slug Generator | [/url-slug-generator](https://sluggenerator.app/url-slug-generator) |
| Text to Slug | [/text-to-slug](https://sluggenerator.app/text-to-slug) |
| Kebab Case Converter | [/kebab-case-converter](https://sluggenerator.app/kebab-case-converter) |
| Slugify Online | [/slugify-online](https://sluggenerator.app/slugify-online) |
| Permalink Generator | [/permalink-generator](https://sluggenerator.app/permalink-generator) |
| Snake Case Converter | [/snake-case-converter](https://sluggenerator.app/snake-case-converter) |
| CamelCase Converter | [/camelcase-converter](https://sluggenerator.app/camelcase-converter) |
| Title Case Converter | [/title-case-converter](https://sluggenerator.app/title-case-converter) |

Plus a [blog](https://sluggenerator.app/blog) with technical articles on
slug best practices, slugification in JS/Python/PHP, and handling special
characters.

## SEO

- JSON-LD structured data on every page (WebApplication, FAQPage,
  BreadcrumbList, BlogPosting, WebSite with SearchAction)
- `hreflang` tags for all 6 locales (HTML head + HTTP `Link` header)
- Dynamic sitemap covering 90 URLs across locales
- Open Graph and Twitter Card meta tags
- Per-locale canonical URLs
- Server-side `<html lang>` for crawlers without JS
- Security headers (X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy)

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| i18n | [next-intl v4](https://next-intl.dev/) with `localePrefix: "as-needed"` |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Language | TypeScript |
| Hosting | VPS (Node.js + PM2 + Cloudflare in front) |
| Analytics | Google Analytics 4, Microsoft Clarity |

The slug engine itself is a single TypeScript module (`src/lib/slug.ts`)
with no runtime dependencies. All transformation happens client-side; the
backend serves static markup and JSON.

## Local development

```bash
git clone https://github.com/tangwei-creater/slug-generator.git
cd slug-generator
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build + copy static assets into `.next/standalone` |
| `npm start` | Run production build (standalone server) |
| `npm run lint` | ESLint |

### Project layout

```
src/
  app/
    [locale]/                # All routes are locale-scoped
      page.tsx               # Homepage (Slug Generator)
      blog/                  # Blog listing and posts
      <tool-page>/           # Each tool variant
    layout.tsx               # Root layout (sets <html lang>)
    sitemap.ts               # Dynamic sitemap
    robots.ts                # robots.txt
  components/                # Header, Footer, SlugTool, Breadcrumbs, etc.
  content/blog/              # Per-post localized content (6 languages each)
  i18n/                      # next-intl routing + request config
  lib/                       # slug engine, SEO helpers, blog registry
messages/                    # next-intl translation JSON per locale
```

## Deployment

A reference deploy script (`deploy.sh`) is included for a Linux VPS with
PM2. The general flow is:

1. `npm run build` (postbuild hook copies `public/` and `.next/static/`
   into `.next/standalone/`)
2. Run `node .next/standalone/server.js` under PM2
3. Put Cloudflare (or any reverse proxy) in front with HTTPS

`NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_CLARITY_ID` env vars enable analytics
at build time. Both are optional.

## Contributing

Bug reports, edge-case test inputs, and translation fixes are welcome via
issues or PRs. For new tool variants or feature ideas, open an issue first
so we can discuss scope.

If you find a case where slug generation produces unexpected output, a
minimal test input + expected output is the most useful thing you can
share.

## License

[MIT](./LICENSE) (C) 2026 Tang Wei
