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
    description: "Hugoでパーマリンク、フロントマターのslugフィールド、URL管理を使ってURLスラッグを設定する方法を解説します。",
    body: `<p>Hugoはデフォルトでファイル名からURLを生成しますが、設定ファイルとフロントマターで幅広いカスタマイズが可能です。</p>
<h2>スラッグの設定</h2>
<pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre>
<h2>パーマリンクテンプレート</h2>
<pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre>
<h2>スラッグを生成</h2>
<p>クリーンなHugoスラッグには<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Hugo URL-Slug-Konfiguration: Permalinks und Front Matter",
    description: "Erfahren Sie, wie man URL-Slugs in Hugo über Permalinks, das Front-Matter-Slug-Feld und URL-Management konfiguriert.",
    body: `<p>Hugo generiert URLs standardmäßig aus Dateinamen, bietet aber umfangreiche Anpassungsmöglichkeiten über Config und Front Matter.</p>
<h2>Slugs setzen</h2>
<pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre>
<h2>Permalink-Templates</h2>
<pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre>
<h2>Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> für saubere Hugo-Slugs.</p>`,
  }),
  es: build("es", {
    title: "Configuración de slugs URL en Hugo: Permalinks y Front Matter",
    description: "Aprende a configurar slugs de URL en Hugo usando permalinks, el campo slug del front matter y la gestión de URLs.",
    body: `<p>Hugo genera URLs a partir de los nombres de archivo por defecto, pero ofrece una amplia personalización a través de la configuración y el front matter.</p>
<h2>Configurar slugs</h2>
<pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre>
<h2>Plantillas de permalink</h2>
<pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre>
<h2>Genera slugs</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> para slugs limpios en Hugo.</p>`,
  }),
  pt: build("pt", {
    title: "Configuração de slugs URL no Hugo: Permalinks e Front Matter",
    description: "Aprenda a configurar slugs de URL no Hugo usando permalinks, o campo slug do front matter e gerenciamento de URLs.",
    body: `<p>O Hugo gera URLs a partir dos nomes de arquivo por padrão, mas oferece ampla personalização através da configuração e do front matter.</p>
<h2>Configurar slugs</h2>
<pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre>
<h2>Templates de permalink</h2>
<pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre>
<h2>Gere slugs</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> para slugs limpos no Hugo.</p>`,
  }),
  fr: build("fr", {
    title: "Configuration des slugs URL dans Hugo : permalinks et front matter",
    description: "Apprenez à configurer les slugs d'URL dans Hugo en utilisant les permalinks, le champ slug du front matter et la gestion des URLs.",
    body: `<p>Hugo génère les URLs à partir des noms de fichiers par défaut, mais offre une personnalisation étendue via la configuration et le front matter.</p>
<h2>Définir les slugs</h2>
<pre><code>---
title: "My Blog Post"
slug: "custom-slug"
---</code></pre>
<h2>Templates de permalink</h2>
<pre><code># hugo.toml
[permalinks]
  posts = '/blog/:slug/'
  pages = '/:slug/'</code></pre>
<h2>Générez des slugs</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> pour des slugs Hugo propres.</p>`,
  }),
};
