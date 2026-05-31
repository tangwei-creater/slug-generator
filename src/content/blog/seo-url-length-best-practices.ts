import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "seo-url-length-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "SEO URL Length: How Long Should Your URLs Be?",
    description: "Learn the ideal URL length for SEO, what Google recommends, and how to keep URLs short without losing meaning.",
    body: `<p>There's no hard limit on URL length, but shorter URLs consistently correlate with higher rankings.</p>
<h2>The Data</h2>
<ul>
<li>Google can index URLs up to ~2,000 characters, but truncates in SERPs around 60-70 characters</li>
<li>Backlinko study: URLs in position 1 average 17 characters shorter than position 10</li>
<li>Ahrefs: URLs with 1-2 path segments outperform deeper structures</li>
</ul>
<h2>Best Practices</h2>
<ul>
<li><strong>Slug length:</strong> 3-5 words, targeting your primary keyword</li>
<li><strong>Total URL:</strong> Under 75 characters including domain</li>
<li><strong>Path depth:</strong> Maximum 2-3 segments (<code>/blog/seo-tips</code> not <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Remove stop words:</strong> "how-to-name-variables" not "how-to-properly-name-your-variables-in-code"</li>
</ul>
<h2>Generate Short Slugs</h2>
<p>Use our <a href="%SLUG%">URL slug generator</a> or <a href="%BLOG%">blog slug generator</a> to create concise, keyword-focused slugs.</p>`,
  }),
  ja: build("ja", {
    title: "SEO URL長さ：URLはどのくらいの長さがベスト？",
    description: "SEOに最適なURL長さ、Googleの推奨、短いURLの作り方。",
    body: `<p>短いURLは一貫して高いランキングと相関します。スラッグは3-5語、合計75文字以内が目安。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "SEO URL-Länge: Wie lang sollten Ihre URLs sein?",
    description: "Ideale URL-Länge für SEO und Best Practices.",
    body: `<p>Kürzere URLs korrelieren mit besseren Rankings. Slug: 3-5 Wörter, gesamt unter 75 Zeichen.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Longitud de URL SEO: ¿Cuán largas deben ser tus URLs?",
    description: "Longitud ideal de URL para SEO y mejores prácticas.",
    body: `<p>URLs más cortas correlacionan con mejores rankings. Slug: 3-5 palabras, total bajo 75 caracteres.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Comprimento de URL SEO: Qual o tamanho ideal?",
    description: "Comprimento ideal de URL para SEO e melhores práticas.",
    body: `<p>URLs mais curtas correlacionam com melhores rankings. Slug: 3-5 palavras, total abaixo de 75 caracteres.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Longueur d'URL SEO : Quelle longueur pour vos URLs ?",
    description: "Longueur idéale d'URL pour le SEO et bonnes pratiques.",
    body: `<p>Les URLs plus courtes corrèlent avec de meilleurs classements. Slug : 3-5 mots, total sous 75 caractères.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`,
  }),
};
