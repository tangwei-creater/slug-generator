import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "hreflang-tags-guide", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "hreflang Tags: The Complete Guide to Multilingual SEO",
    description: "Learn how to implement hreflang tags for multilingual websites. Covers syntax, common mistakes, and testing tools.",
    body: `<p>hreflang tags tell Google which language and regional version of a page to show to users. Essential for multilingual sites.</p><h2>Syntax</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Common Mistakes</h2><ul><li>Missing return links (hreflang must be bidirectional)</li><li>Wrong language codes</li><li>Missing x-default</li><li>Pointing to non-canonical URLs</li></ul><h2>Generate Multilingual URLs</h2><p><a href="%SLUG%">URL slug generator</a> for clean slugs across languages.</p>`,
  }),
  ja: build("ja", {
    title: "hreflangタグ：多言語SEO完全ガイド",
    description: "多言語サイトのhreflangタグ実装方法。",
    body: `<p>hreflangタグはGoogleにページの言語・地域バージョンを伝えます。</p>`,
  }),
  de: build("de", {
    title: "hreflang-Tags: Der vollständige Guide für mehrsprachiges SEO",
    description: "hreflang-Tags für mehrsprachige Websites.",
    body: `<p>hreflang-Tags teilen Google mit, welche Sprach-/Regionalversion anzuzeigen ist.</p>`,
  }),
  es: build("es", {
    title: "Etiquetas hreflang: Guía completa de SEO multilingüe",
    description: "Implementación de etiquetas hreflang.",
    body: `<p>Las etiquetas hreflang indican a Google qué versión idiomática mostrar.</p>`,
  }),
  pt: build("pt", {
    title: "Tags hreflang: Guia completo de SEO multilíngue",
    description: "Implementação de tags hreflang.",
    body: `<p>Tags hreflang indicam ao Google qual versão linguística mostrar.</p>`,
  }),
  fr: build("fr", {
    title: "Balises hreflang : Guide complet du SEO multilingue",
    description: "Implémentation des balises hreflang.",
    body: `<p>Les balises hreflang indiquent à Google quelle version linguistique afficher.</p>`,
  }),
};
