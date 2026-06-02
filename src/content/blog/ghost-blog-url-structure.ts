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
    description: "Ghost CMSのURLスラッグとルートの仕組み、SEO最適化の方法を解説します。",
    body: `<p>GhostはデフォルトでクリーンなフラットURL構造を使用します：<code>example.com/post-slug</code>。URLに日付もカテゴリも含まれません。</p>
<h2>スラッグの編集</h2>
<p>Ghostエディターで歯車アイコンをクリック → 「Post URL」フィールドを変更します。</p>
<h2>カスタムルート</h2>
<p>Ghostの<code>routes.yaml</code>を使えば、<code>/blog/slug</code>や<code>/tutorials/slug</code>のようなカスタムURL構造を作成できます。</p>
<h2>スラッグを生成</h2>
<p><a href="%BLOG%">ブログスラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Ghost Blog URL-Struktur: Slugs, Routes und SEO-Einstellungen",
    description: "Erfahren Sie, wie Ghost CMS URL-Slugs und Routes handhabt und wie man sie für SEO optimiert.",
    body: `<p>Ghost verwendet standardmäßig saubere, flache URL-Strukturen: <code>example.com/post-slug</code>. Keine Daten, keine Kategorien in URLs.</p>
<h2>Slugs bearbeiten</h2>
<p>Im Ghost-Editor klicken Sie auf das Zahnrad-Symbol → ändern Sie das Feld „Post URL".</p>
<h2>Benutzerdefinierte Routes</h2>
<p>Ghosts <code>routes.yaml</code> ermöglicht benutzerdefinierte URL-Strukturen wie <code>/blog/slug</code> oder <code>/tutorials/slug</code>.</p>
<h2>Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%BLOG%">Blog-Slug-Generator</a> oder den <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura de URL en Ghost: Slugs, rutas y configuración SEO",
    description: "Aprende cómo Ghost CMS gestiona los slugs de URL y las rutas, y cómo optimizarlos para SEO.",
    body: `<p>Ghost usa estructuras URL limpias y planas por defecto: <code>example.com/post-slug</code>. Sin fechas, sin categorías en las URLs.</p>
<h2>Editar slugs</h2>
<p>En el editor de Ghost, haz clic en el icono de engranaje → cambia el campo "Post URL".</p>
<h2>Rutas personalizadas</h2>
<p>El archivo <code>routes.yaml</code> de Ghost permite crear estructuras URL personalizadas como <code>/blog/slug</code> o <code>/tutorials/slug</code>.</p>
<h2>Genera slugs</h2>
<p>Usa nuestro <a href="%BLOG%">generador de slugs de blog</a> o el <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura de URL no Ghost: Slugs, rotas e configurações SEO",
    description: "Aprenda como o Ghost CMS gerencia slugs de URL e rotas, e como otimizá-los para SEO.",
    body: `<p>O Ghost usa estruturas URL limpas e planas por padrão: <code>example.com/post-slug</code>. Sem datas, sem categorias nas URLs.</p>
<h2>Editar slugs</h2>
<p>No editor do Ghost, clique no ícone de engrenagem → altere o campo "Post URL".</p>
<h2>Rotas personalizadas</h2>
<p>O arquivo <code>routes.yaml</code> do Ghost permite criar estruturas URL personalizadas como <code>/blog/slug</code> ou <code>/tutorials/slug</code>.</p>
<h2>Gere slugs</h2>
<p>Use nosso <a href="%BLOG%">gerador de slugs de blog</a> ou o <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure d'URL Ghost : slugs, routes et paramètres SEO",
    description: "Apprenez comment Ghost CMS gère les slugs d'URL et les routes, et comment les optimiser pour le SEO.",
    body: `<p>Ghost utilise des structures URL propres et plates par défaut : <code>example.com/post-slug</code>. Pas de dates, pas de catégories dans les URLs.</p>
<h2>Modifier les slugs</h2>
<p>Dans l'éditeur Ghost, cliquez sur l'icône d'engrenage → modifiez le champ « Post URL ».</p>
<h2>Routes personnalisées</h2>
<p>Le fichier <code>routes.yaml</code> de Ghost permet de créer des structures URL personnalisées comme <code>/blog/slug</code> ou <code>/tutorials/slug</code>.</p>
<h2>Générez des slugs</h2>
<p>Utilisez notre <a href="%BLOG%">générateur de slugs de blog</a> ou le <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
