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
    title: "SquarespaceのURL構造：カスタマイズと最適化方法",
    description: "SquarespaceでのURL管理方法、スラッグの編集方法、SquarespaceサイトのSEOベストプラクティスを解説します。",
    body: `<p>SquarespaceはページタイトルからURLスラッグを自動生成し、ページ設定でカスタマイズが可能です。</p>
<h2>編集方法</h2>
<ol>
<li>ページに移動</li>
<li>歯車アイコン → 設定をクリック</li>
<li>「URLスラッグ」フィールドを編集</li>
<li>保存</li>
</ol>
<h2>SquarespaceのURLパターン</h2>
<table><thead><tr><th>ページタイプ</th><th>パターン</th></tr></thead><tbody>
<tr><td>通常ページ</td><td><code>/slug</code></td></tr>
<tr><td>ブログ記事</td><td><code>/blog/slug</code></td></tr>
<tr><td>商品</td><td><code>/shop/slug</code></td></tr>
<tr><td>ポートフォリオ</td><td><code>/portfolio/slug</code></td></tr>
</tbody></table>
<h2>スラッグを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>または<a href="%BLOG%">ブログスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Squarespace URL-Struktur: Anpassen und Optimieren",
    description: "Erfahren Sie, wie Squarespace URLs verwaltet, wie man Slugs bearbeitet und welche SEO Best Practices für Ihre Squarespace-Site gelten.",
    body: `<p>Squarespace generiert URL-Slugs automatisch aus Seitentiteln und erlaubt die Anpassung in den Seiteneinstellungen.</p>
<h2>Bearbeitung</h2>
<ol>
<li>Navigieren Sie zur Seite</li>
<li>Klicken Sie auf das Zahnrad-Symbol → Einstellungen</li>
<li>Bearbeiten Sie das Feld „URL-Slug"</li>
<li>Speichern</li>
</ol>
<h2>Squarespace URL-Muster</h2>
<table><thead><tr><th>Seitentyp</th><th>Muster</th></tr></thead><tbody>
<tr><td>Reguläre Seite</td><td><code>/slug</code></td></tr>
<tr><td>Blogbeitrag</td><td><code>/blog/slug</code></td></tr>
<tr><td>Produkt</td><td><code>/shop/slug</code></td></tr>
<tr><td>Portfolio</td><td><code>/portfolio/slug</code></td></tr>
</tbody></table>
<h2>Slugs generieren</h2>
<p><a href="%SLUG%">URL-Slug-Generator</a> oder <a href="%BLOG%">Blog-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL de Squarespace: Cómo personalizar y optimizar",
    description: "Aprende cómo Squarespace gestiona las URLs, cómo editar slugs y las mejores prácticas SEO para tu sitio Squarespace.",
    body: `<p>Squarespace genera automáticamente los slugs de URL a partir de los títulos de página y permite la personalización en la configuración de la página.</p>
<h2>Cómo editar</h2>
<ol>
<li>Navega hasta la página</li>
<li>Haz clic en el icono de engranaje → Configuración</li>
<li>Edita el campo "URL Slug"</li>
<li>Guardar</li>
</ol>
<h2>Patrones URL de Squarespace</h2>
<table><thead><tr><th>Tipo de página</th><th>Patrón</th></tr></thead><tbody>
<tr><td>Página regular</td><td><code>/slug</code></td></tr>
<tr><td>Publicación de blog</td><td><code>/blog/slug</code></td></tr>
<tr><td>Producto</td><td><code>/shop/slug</code></td></tr>
<tr><td>Portafolio</td><td><code>/portfolio/slug</code></td></tr>
</tbody></table>
<h2>Genera slugs</h2>
<p><a href="%SLUG%">Generador de slugs URL</a> o <a href="%BLOG%">generador de slugs de blog</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL do Squarespace: Como personalizar e otimizar",
    description: "Aprenda como o Squarespace gerencia URLs, como editar slugs e as melhores práticas de SEO para seu site Squarespace.",
    body: `<p>O Squarespace gera automaticamente os slugs de URL a partir dos títulos das páginas e permite personalização nas configurações da página.</p>
<h2>Como editar</h2>
<ol>
<li>Navegue até a página</li>
<li>Clique no ícone de engrenagem → Configurações</li>
<li>Edite o campo "URL Slug"</li>
<li>Salvar</li>
</ol>
<h2>Padrões URL do Squarespace</h2>
<table><thead><tr><th>Tipo de página</th><th>Padrão</th></tr></thead><tbody>
<tr><td>Página regular</td><td><code>/slug</code></td></tr>
<tr><td>Post de blog</td><td><code>/blog/slug</code></td></tr>
<tr><td>Produto</td><td><code>/shop/slug</code></td></tr>
<tr><td>Portfólio</td><td><code>/portfolio/slug</code></td></tr>
</tbody></table>
<h2>Gere slugs</h2>
<p><a href="%SLUG%">Gerador de slugs URL</a> ou <a href="%BLOG%">gerador de slugs de blog</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL Squarespace : comment personnaliser et optimiser",
    description: "Apprenez comment Squarespace gère les URLs, comment modifier les slugs et les bonnes pratiques SEO pour votre site Squarespace.",
    body: `<p>Squarespace génère automatiquement les slugs d'URL à partir des titres de page et permet la personnalisation dans les paramètres de page.</p>
<h2>Comment modifier</h2>
<ol>
<li>Naviguez vers la page</li>
<li>Cliquez sur l'icône d'engrenage → Paramètres</li>
<li>Modifiez le champ « URL Slug »</li>
<li>Enregistrer</li>
</ol>
<h2>Modèles URL Squarespace</h2>
<table><thead><tr><th>Type de page</th><th>Modèle</th></tr></thead><tbody>
<tr><td>Page standard</td><td><code>/slug</code></td></tr>
<tr><td>Article de blog</td><td><code>/blog/slug</code></td></tr>
<tr><td>Produit</td><td><code>/shop/slug</code></td></tr>
<tr><td>Portfolio</td><td><code>/portfolio/slug</code></td></tr>
</tbody></table>
<h2>Générez des slugs</h2>
<p><a href="%SLUG%">Générateur de slugs URL</a> ou <a href="%BLOG%">générateur de slugs de blog</a>.</p>`,
  }),
};
