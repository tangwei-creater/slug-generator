# Slug Generator

Free online tool to convert any text into clean, SEO-friendly URL slugs.

**Live site: [sluggenerator.app](https://sluggenerator.app)**

## Features

- Real-time slug generation as you type
- Custom separators (hyphens, underscores, dots)
- Unicode transliteration (accented characters to ASCII)
- Max length control with word-boundary awareness
- One-click copy to clipboard
- 6 languages: English, Japanese, German, Spanish, Portuguese, French
- No data sent to any server — everything runs in your browser

## Tools

| Tool | URL | Description |
|------|-----|-------------|
| Slug Generator | [/](https://sluggenerator.app) | Core text-to-slug converter |
| URL Slug Generator | [/url-slug-generator](https://sluggenerator.app/url-slug-generator) | Generate SEO-friendly URL slugs |
| Text to Slug | [/text-to-slug](https://sluggenerator.app/text-to-slug) | Convert any text to a URL-safe slug |
| Kebab Case Converter | [/kebab-case-converter](https://sluggenerator.app/kebab-case-converter) | Convert text to kebab-case |
| Slugify Online | [/slugify-online](https://sluggenerator.app/slugify-online) | Slugify text instantly in your browser |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Internationalization**: next-intl v4
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Linux VPS)

```bash
git clone <this-repo> /var/www/slug-generator
cd /var/www/slug-generator
chmod +x deploy.sh
bash deploy.sh
```

See `deploy.sh` for the full setup (Node.js, PM2, Nginx, SSL).

## License

MIT
