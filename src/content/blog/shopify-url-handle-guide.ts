import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "shopify-url-handle-guide", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PRODUCT%", p(l, "/product-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Shopify URL Handles: How to Optimize Product and Collection URLs",
    description: "Learn how Shopify URL handles work, how to edit them, and SEO best practices for Shopify stores.",
    body: `<p>Shopify calls URL slugs "handles." They're auto-generated from titles but can be manually edited for better SEO.</p><h2>How to Edit</h2><ol><li>Go to Products → Select product</li><li>Scroll to "Search engine listing"</li><li>Click "Edit"</li><li>Change the URL handle</li><li>Save</li></ol><h2>Shopify URL Structure</h2><table><thead><tr><th>Page Type</th><th>URL Pattern</th></tr></thead><tbody><tr><td>Product</td><td><code>/products/handle</code></td></tr><tr><td>Collection</td><td><code>/collections/handle</code></td></tr><tr><td>Page</td><td><code>/pages/handle</code></td></tr><tr><td>Blog post</td><td><code>/blogs/blog-name/handle</code></td></tr></tbody></table><h2>Generate Handles</h2><p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ShopifyのURLハンドル：商品・コレクションURLの最適化ガイド",
    description: "ShopifyのURLハンドルの仕組み、編集方法、ShopifyストアのSEOベストプラクティスを解説します。",
    body: `<p>ShopifyではURLスラッグを「ハンドル」と呼びます。タイトルから自動生成されますが、より良いSEOのために手動編集が可能です。</p>
<h2>編集方法</h2>
<ol>
<li>商品 → 商品を選択</li>
<li>「検索エンジンのリスティング」までスクロール</li>
<li>「編集」をクリック</li>
<li>URLハンドルを変更</li>
<li>保存</li>
</ol>
<h2>ShopifyのURL構造</h2>
<table><thead><tr><th>ページタイプ</th><th>URLパターン</th></tr></thead><tbody>
<tr><td>商品</td><td><code>/products/handle</code></td></tr>
<tr><td>コレクション</td><td><code>/collections/handle</code></td></tr>
<tr><td>ページ</td><td><code>/pages/handle</code></td></tr>
<tr><td>ブログ記事</td><td><code>/blogs/blog-name/handle</code></td></tr>
</tbody></table>
<h2>ハンドルを生成</h2>
<p><a href="%PRODUCT%">商品スラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Shopify URL-Handles: Produkt- und Sammlungs-URLs optimieren",
    description: "Erfahren Sie, wie Shopify URL-Handles funktionieren, wie man sie bearbeitet und welche SEO Best Practices für Shopify-Stores gelten.",
    body: `<p>Shopify nennt URL-Slugs „Handles". Sie werden automatisch aus Titeln generiert, können aber manuell für besseres SEO bearbeitet werden.</p>
<h2>Bearbeitung</h2>
<ol>
<li>Gehen Sie zu Produkte → Produkt auswählen</li>
<li>Scrollen Sie zu „Suchmaschinen-Listing"</li>
<li>Klicken Sie auf „Bearbeiten"</li>
<li>Ändern Sie den URL-Handle</li>
<li>Speichern</li>
</ol>
<h2>Shopify URL-Struktur</h2>
<table><thead><tr><th>Seitentyp</th><th>URL-Muster</th></tr></thead><tbody>
<tr><td>Produkt</td><td><code>/products/handle</code></td></tr>
<tr><td>Sammlung</td><td><code>/collections/handle</code></td></tr>
<tr><td>Seite</td><td><code>/pages/handle</code></td></tr>
<tr><td>Blogbeitrag</td><td><code>/blogs/blog-name/handle</code></td></tr>
</tbody></table>
<h2>Handles generieren</h2>
<p>Verwenden Sie unseren <a href="%PRODUCT%">Produkt-Slug-Generator</a> oder den <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Handles de URL en Shopify: Cómo optimizar URLs de productos y colecciones",
    description: "Aprende cómo funcionan los handles de URL en Shopify, cómo editarlos y las mejores prácticas SEO para tiendas Shopify.",
    body: `<p>Shopify llama a los slugs de URL "handles". Se generan automáticamente a partir de los títulos, pero pueden editarse manualmente para mejorar el SEO.</p>
<h2>Cómo editar</h2>
<ol>
<li>Ve a Productos → Selecciona el producto</li>
<li>Desplázate hasta "Listado de motor de búsqueda"</li>
<li>Haz clic en "Editar"</li>
<li>Cambia el handle de URL</li>
<li>Guardar</li>
</ol>
<h2>Estructura de URL de Shopify</h2>
<table><thead><tr><th>Tipo de página</th><th>Patrón de URL</th></tr></thead><tbody>
<tr><td>Producto</td><td><code>/products/handle</code></td></tr>
<tr><td>Colección</td><td><code>/collections/handle</code></td></tr>
<tr><td>Página</td><td><code>/pages/handle</code></td></tr>
<tr><td>Publicación de blog</td><td><code>/blogs/blog-name/handle</code></td></tr>
</tbody></table>
<h2>Genera handles</h2>
<p>Usa nuestro <a href="%PRODUCT%">generador de slugs de producto</a> o el <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Handles de URL no Shopify: Como otimizar URLs de produtos e coleções",
    description: "Aprenda como os handles de URL do Shopify funcionam, como editá-los e as melhores práticas de SEO para lojas Shopify.",
    body: `<p>O Shopify chama os slugs de URL de "handles". Eles são gerados automaticamente a partir dos títulos, mas podem ser editados manualmente para melhorar o SEO.</p>
<h2>Como editar</h2>
<ol>
<li>Vá em Produtos → Selecione o produto</li>
<li>Role até "Listagem do mecanismo de busca"</li>
<li>Clique em "Editar"</li>
<li>Altere o handle da URL</li>
<li>Salvar</li>
</ol>
<h2>Estrutura de URL do Shopify</h2>
<table><thead><tr><th>Tipo de página</th><th>Padrão de URL</th></tr></thead><tbody>
<tr><td>Produto</td><td><code>/products/handle</code></td></tr>
<tr><td>Coleção</td><td><code>/collections/handle</code></td></tr>
<tr><td>Página</td><td><code>/pages/handle</code></td></tr>
<tr><td>Post de blog</td><td><code>/blogs/blog-name/handle</code></td></tr>
</tbody></table>
<h2>Gere handles</h2>
<p>Use nosso <a href="%PRODUCT%">gerador de slugs de produto</a> ou o <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Handles d'URL Shopify : comment optimiser les URLs produits et collections",
    description: "Apprenez comment fonctionnent les handles d'URL Shopify, comment les modifier et les bonnes pratiques SEO pour les boutiques Shopify.",
    body: `<p>Shopify appelle les slugs d'URL des « handles ». Ils sont générés automatiquement à partir des titres, mais peuvent être modifiés manuellement pour un meilleur SEO.</p>
<h2>Comment modifier</h2>
<ol>
<li>Allez dans Produits → Sélectionnez le produit</li>
<li>Faites défiler jusqu'à « Référencement sur les moteurs de recherche »</li>
<li>Cliquez sur « Modifier »</li>
<li>Changez le handle d'URL</li>
<li>Enregistrer</li>
</ol>
<h2>Structure URL Shopify</h2>
<table><thead><tr><th>Type de page</th><th>Modèle d'URL</th></tr></thead><tbody>
<tr><td>Produit</td><td><code>/products/handle</code></td></tr>
<tr><td>Collection</td><td><code>/collections/handle</code></td></tr>
<tr><td>Page</td><td><code>/pages/handle</code></td></tr>
<tr><td>Article de blog</td><td><code>/blogs/blog-name/handle</code></td></tr>
</tbody></table>
<h2>Générez des handles</h2>
<p>Utilisez notre <a href="%PRODUCT%">générateur de slugs produit</a> ou le <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
