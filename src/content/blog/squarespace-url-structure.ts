import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "squarespace-url-structure", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Squarespace URL Structure: How to Customize and Optimize",
    description: "Learn how Squarespace handles URLs, how to edit slugs, and SEO best practices for your Squarespace site.",
    body: `<p>Squarespace auto-generates URL slugs from page titles and allows customization in page settings.</p><h2>How to Edit</h2><ol><li>Navigate to the page</li><li>Click the gear icon → Settings</li><li>Edit the "URL Slug" field</li><li>Save</li></ol><h2>Squarespace URL Patterns</h2><table><thead><tr><th>Page Type</th><th>Pattern</th></tr></thead><tbody><tr><td>Regular page</td><td><code>/slug</code></td></tr><tr><td>Blog post</td><td><code>/blog/slug</code></td></tr><tr><td>Product</td><td><code>/shop/slug</code></td></tr><tr><td>Portfolio</td><td><code>/portfolio/slug</code></td></tr></tbody></table><h2>Generate Slugs</h2><p><a href="%SLUG%">URL slug generator</a> or <a href="%BLOG%">blog slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "SquarespaceのURL構造：カスタマイズと最適化",
    description: "SquarespaceのURL編集方法とSEOベストプラクティス。",
    body: `<p>Squarespaceはタイトルからスラッグを自動生成、ページ設定で編集可能。</p>`,
  }),
  de: build("de", {
    title: "Squarespace URL-Struktur: Anpassen und Optimieren",
    description: "Squarespace URLs anpassen und SEO-optimieren.",
    body: `<p>Squarespace generiert Slugs automatisch, anpassbar in den Seiteneinstellungen.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL de Squarespace: Personalizar y optimizar",
    description: "Cómo personalizar URLs en Squarespace.",
    body: `<p>Squarespace genera slugs automáticamente, editables en la configuración de página.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL do Squarespace: Personalizar e otimizar",
    description: "Como personalizar URLs no Squarespace.",
    body: `<p>Squarespace gera slugs automaticamente, editáveis nas configurações de página.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL Squarespace : Personnaliser et optimiser",
    description: "Comment personnaliser les URLs dans Squarespace.",
    body: `<p>Squarespace génère les slugs automatiquement, modifiables dans les paramètres de page.</p>`,
  }),
};
