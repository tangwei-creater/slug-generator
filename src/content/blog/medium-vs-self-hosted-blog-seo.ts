import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "medium-vs-self-hosted-blog-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Medium vs Self-Hosted Blog: Which Is Better for SEO?",
    description: "Compare Medium and self-hosted blogs for SEO. Understand domain authority, URL control, and content ownership.",
    body: `<p>Medium offers convenience but limits your SEO control. A self-hosted blog gives you full ownership of your content and URLs.</p><h2>Comparison</h2><table><thead><tr><th>Factor</th><th>Medium</th><th>Self-Hosted</th></tr></thead><tbody><tr><td>Domain authority</td><td>Uses medium.com (their authority)</td><td>Builds your own domain authority</td></tr><tr><td>URL control</td><td>Limited (<code>medium.com/@user/title-hash</code>)</td><td>Full control</td></tr><tr><td>Content ownership</td><td>Medium can change ToS</td><td>You own everything</td></tr><tr><td>Monetization</td><td>Medium Partner Program</td><td>Ads, affiliates, anything</td></tr><tr><td>SEO customization</td><td>Minimal</td><td>Full (meta tags, schema, sitemap)</td></tr><tr><td>Setup effort</td><td>Zero</td><td>Moderate</td></tr></tbody></table><h2>Recommendation</h2><p>Self-host for serious SEO. Use Medium for distribution only (with canonical URLs pointing to your site).</p><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Medium vs 自前ブログ：SEOにはどちらが有利？",
    description: "MediumとセルフホストブログのSEO比較。",
    body: `<p>Mediumは便利ですがSEOコントロールが制限されます。本格的なSEOにはセルフホスト。</p>`,
  }),
  de: build("de", {
    title: "Medium vs Self-Hosted Blog: Was ist besser für SEO?",
    description: "Medium und Self-Hosted im SEO-Vergleich.",
    body: `<p>Medium ist bequem, aber SEO-Kontrolle ist eingeschränkt. Self-Hosted für ernstes SEO.</p>`,
  }),
  es: build("es", {
    title: "Medium vs blog autoalojado: ¿Cuál es mejor para SEO?",
    description: "Comparación Medium vs autoalojado para SEO.",
    body: `<p>Medium es conveniente pero limita el control SEO. Autoalojado para SEO serio.</p>`,
  }),
  pt: build("pt", {
    title: "Medium vs blog auto-hospedado: Qual é melhor para SEO?",
    description: "Comparação Medium vs auto-hospedado para SEO.",
    body: `<p>Medium é conveniente mas limita o controle SEO. Auto-hospedado para SEO sério.</p>`,
  }),
  fr: build("fr", {
    title: "Medium vs blog auto-hébergé : Lequel est meilleur pour le SEO ?",
    description: "Comparaison Medium vs auto-hébergé pour le SEO.",
    body: `<p>Medium est pratique mais limite le contrôle SEO. Auto-hébergé pour un SEO sérieux.</p>`,
  }),
};
