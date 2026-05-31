import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "wix-url-slug-optimization", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Wix URL Slug Optimization: How to Edit and Improve Your URLs",
    description: "Learn how to customize URL slugs in Wix for better SEO and user experience.",
    body: `<p>Wix auto-generates URL slugs from page titles but allows manual editing for optimization.</p><h2>How to Edit</h2><ol><li>Go to the page in the Wix Editor</li><li>Click the page settings (gear icon)</li><li>Under "SEO (Google)", edit the URL slug</li><li>Use lowercase, hyphens, and target keywords</li></ol><h2>Wix URL Limitations</h2><ul><li>Dynamic pages have fixed URL patterns</li><li>Blog URLs include <code>/post/</code> prefix</li><li>Cannot fully customize URL structure like self-hosted sites</li></ul><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> for clean, keyword-optimized slugs.</p>`,
  }),
  ja: build("ja", {
    title: "WixのURLスラッグ最適化",
    description: "WixでURLスラッグを編集して最適化する方法。",
    body: `<p>Wixはタイトルからスラッグを自動生成しますが、手動編集で最適化可能。</p>`,
  }),
  de: build("de", {
    title: "Wix URL-Slug-Optimierung",
    description: "URLs in Wix anpassen und optimieren.",
    body: `<p>Wix generiert Slugs automatisch, aber manuelle Bearbeitung ist möglich.</p>`,
  }),
  es: build("es", {
    title: "Optimización de slugs URL en Wix",
    description: "Cómo editar y mejorar URLs en Wix.",
    body: `<p>Wix genera slugs automáticamente pero permite edición manual.</p>`,
  }),
  pt: build("pt", {
    title: "Otimização de slugs URL no Wix",
    description: "Como editar e melhorar URLs no Wix.",
    body: `<p>Wix gera slugs automaticamente mas permite edição manual.</p>`,
  }),
  fr: build("fr", {
    title: "Optimisation des slugs URL dans Wix",
    description: "Comment éditer et améliorer les URLs dans Wix.",
    body: `<p>Wix génère les slugs automatiquement mais permet l'édition manuelle.</p>`,
  }),
};
