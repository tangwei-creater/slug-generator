import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "canonical-url-explained", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Canonical URLs Explained: What They Are and How to Use Them",
    description: "Learn what canonical URLs are, why they matter for SEO, and how to implement rel=canonical correctly.",
    body: `<p>A <strong>canonical URL</strong> tells search engines which version of a page is the "official" one when multiple URLs contain similar or identical content.</p>
<h2>When You Need Canonicals</h2>
<ul>
<li>Same product accessible via multiple category URLs</li>
<li>HTTP vs HTTPS, www vs non-www variants</li>
<li>URL parameter variations (<code>?sort=price</code>)</li>
<li>Pagination (<code>?page=2</code>)</li>
<li>Syndicated content on multiple domains</li>
</ul>
<h2>Implementation</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Common Mistakes</h2>
<ul>
<li>Pointing canonical to a 404 page</li>
<li>Using relative URLs instead of absolute</li>
<li>Setting every page's canonical to the homepage</li>
<li>Conflicting canonical and hreflang tags</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Start with clean slugs using our <a href="%SLUG%">URL slug generator</a> to reduce the need for canonicals.</p>`,
  }),
  ja: build("ja", {
    title: "Canonical URL解説：定義と正しい使い方",
    description: "canonical URLとは何か、SEOでの重要性、正しい実装方法。",
    body: `<p>canonical URLは複数のURLが似た内容を持つ時、「公式」バージョンを検索エンジンに伝えます。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Canonical URLs erklärt: Was sie sind und wie man sie nutzt",
    description: "Was Canonical URLs sind und wie man sie implementiert.",
    body: `<p>Canonical URLs teilen Suchmaschinen mit, welche Version einer Seite die offizielle ist.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "URLs canónicas explicadas: Qué son y cómo usarlas",
    description: "Qué son las URLs canónicas y cómo implementarlas.",
    body: `<p>Las URLs canónicas indican a los buscadores cuál es la versión oficial de una página.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "URLs canônicas explicadas: O que são e como usar",
    description: "O que são URLs canônicas e como implementá-las.",
    body: `<p>URLs canônicas indicam aos buscadores qual é a versão oficial de uma página.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "URLs canoniques expliquées : Définition et utilisation",
    description: "Ce que sont les URLs canoniques et comment les implémenter.",
    body: `<p>Les URLs canoniques indiquent aux moteurs de recherche quelle version d'une page est officielle.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`,
  }),
};
