import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-create-seo-friendly-blog-urls", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Create SEO-Friendly Blog URLs: A Step-by-Step Guide",
    description: "Learn how to craft blog post URLs that rank. Covers keyword placement, slug formatting, and platform-specific tips.",
    body: `<p>Your blog URL is one of the first things both Google and readers see. A well-crafted URL improves click-through rates and helps search engines understand your content.</p>
<h2>Step-by-Step Process</h2>
<ol>
<li><strong>Start with your target keyword:</strong> If targeting "python naming conventions," your slug should be <code>python-naming-conventions</code></li>
<li><strong>Remove stop words:</strong> "a", "the", "is", "to", "and" — unless they're part of the keyword</li>
<li><strong>Keep it under 5 words:</strong> <code>seo-url-best-practices</code> not <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Use hyphens:</strong> Never underscores, spaces, or camelCase in URLs</li>
<li><strong>All lowercase:</strong> Avoid <code>/Blog/My-Post</code> — use <code>/blog/my-post</code></li>
<li><strong>No dates:</strong> <code>/blog/seo-tips</code> not <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Before and After</h2>
<table><thead><tr><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Generate Blog Slugs</h2>
<p>Use our <a href="%BLOG%">blog slug generator</a>, <a href="%WP%">WordPress slug generator</a>, or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "SEOに強いブログURLの作り方：ステップバイステップ",
    description: "ランクインするブログ記事URLの作成方法。キーワード配置、フォーマット、プラットフォーム別のヒント。",
    body: `<p>ブログURLはGoogleと読者が最初に目にするものの一つです。</p><h2>ステップ</h2><ol><li>ターゲットキーワードから始める</li><li>ストップワードを除去</li><li>5語以内に</li><li>ハイフンを使用</li></ol><h2>ツール</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "SEO-freundliche Blog-URLs erstellen: Schritt für Schritt",
    description: "Wie man Blog-URLs erstellt, die ranken.",
    body: `<p>Eine gut gestaltete Blog-URL verbessert CTR und hilft Suchmaschinen.</p><h2>Tool</h2><p><a href="%BLOG%">Blog-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo crear URLs de blog amigables para SEO: Guía paso a paso",
    description: "Cómo crear URLs de blog que posicionen.",
    body: `<p>Una URL bien diseñada mejora el CTR y ayuda a los buscadores.</p><h2>Herramienta</h2><p><a href="%BLOG%">Generador de slugs de blog</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como criar URLs de blog amigáveis para SEO: Guia passo a passo",
    description: "Como criar URLs de blog que ranqueiam.",
    body: `<p>Uma URL bem construída melhora o CTR e ajuda os buscadores.</p><h2>Ferramenta</h2><p><a href="%BLOG%">Gerador de slugs de blog</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment créer des URLs de blog SEO-friendly : Guide étape par étape",
    description: "Comment créer des URLs de blog qui se positionnent.",
    body: `<p>Une URL bien conçue améliore le CTR et aide les moteurs de recherche.</p><h2>Outil</h2><p><a href="%BLOG%">Générateur de slugs de blog</a>.</p>`,
  }),
};
