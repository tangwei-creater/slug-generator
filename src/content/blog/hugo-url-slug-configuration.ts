import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "hugo-url-slug-configuration", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Hugo URL Slug Configuration: Permalinks and Front Matter",
    description: "Learn how to configure URL slugs in Hugo using permalinks, front matter slug field, and URL management.",
    body: `<p>Hugo generates URLs from file names by default but offers extensive customization through config and front matter.</p><h2>Setting Slugs</h2><pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre><h2>Permalink Templates</h2><pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> for clean Hugo slugs.</p>`,
  }),
  ja: build("ja", {
    title: "HugoのURLスラッグ設定：パーマリンクとフロントマター",
    description: "Hugoでのスラッグ設定方法。",
    body: `<p>Hugoはファイル名からURLを生成しますが、フロントマターとパーマリンク設定でカスタマイズ可能。</p>`,
  }),
  de: build("de", {
    title: "Hugo URL-Slug-Konfiguration: Permalinks und Front Matter",
    description: "Slug-Konfiguration in Hugo.",
    body: `<p>Hugo generiert URLs aus Dateinamen, anpassbar durch Config und Front Matter.</p>`,
  }),
  es: build("es", {
    title: "Configuración de slugs URL en Hugo: Permalinks y Front Matter",
    description: "Configuración de slugs en Hugo.",
    body: `<p>Hugo genera URLs de nombres de archivo, personalizable con config y front matter.</p>`,
  }),
  pt: build("pt", {
    title: "Configuração de slugs URL no Hugo: Permalinks e Front Matter",
    description: "Configuração de slugs no Hugo.",
    body: `<p>Hugo gera URLs a partir de nomes de arquivo, personalizável com config e front matter.</p>`,
  }),
  fr: build("fr", {
    title: "Configuration des slugs URL dans Hugo : Permalinks et Front Matter",
    description: "Configuration des slugs dans Hugo.",
    body: `<p>Hugo génère les URLs à partir des noms de fichiers, personnalisable via config et front matter.</p>`,
  }),
};
