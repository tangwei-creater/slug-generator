import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "ghost-blog-url-structure", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Ghost Blog URL Structure: Slugs, Routes, and SEO Settings",
    description: "Learn how Ghost CMS handles URL slugs and routes, and how to optimize them for SEO.",
    body: `<p>Ghost uses clean, flat URL structures by default: <code>example.com/post-slug</code>. No dates, no categories in URLs.</p><h2>Editing Slugs</h2><p>In the Ghost editor, click the gear icon → change the "Post URL" field.</p><h2>Custom Routes</h2><p>Ghost's <code>routes.yaml</code> lets you create custom URL structures like <code>/blog/slug</code> or <code>/tutorials/slug</code>.</p><h2>Generate Slugs</h2><p>Use our <a href="%BLOG%">blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Ghost BlogのURL構造：スラッグ、ルート、SEO設定",
    description: "Ghost CMSのURLスラッグとルート設定。",
    body: `<p>GhostはデフォルトでクリーンなフラットURL構造を使用します。</p><h2>ツール</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Ghost Blog URL-Struktur: Slugs, Routes und SEO",
    description: "Ghost CMS URL-Slugs und Routen.",
    body: `<p>Ghost verwendet standardmäßig saubere, flache URLs.</p><h2>Tool</h2><p><a href="%BLOG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura de URL en Ghost: Slugs, rutas y SEO",
    description: "URLs y rutas en Ghost CMS.",
    body: `<p>Ghost usa URLs limpias y planas por defecto.</p><h2>Herramienta</h2><p><a href="%BLOG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura de URL no Ghost: Slugs, rotas e SEO",
    description: "URLs e rotas no Ghost CMS.",
    body: `<p>Ghost usa URLs limpas e planas por padrão.</p><h2>Ferramenta</h2><p><a href="%BLOG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure d'URL Ghost : Slugs, routes et SEO",
    description: "URLs et routes dans Ghost CMS.",
    body: `<p>Ghost utilise des URLs propres et plates par défaut.</p><h2>Outil</h2><p><a href="%BLOG%">Générateur</a>.</p>`,
  }),
};
