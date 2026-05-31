import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "url-structure-ecommerce-seo", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%PRODUCT%", p(l, "/product-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "E-commerce URL Structure: SEO Best Practices for Online Stores",
    description: "Learn how to structure product, category, and collection URLs for maximum SEO impact in e-commerce.",
    body: `<p>URL structure in e-commerce directly impacts crawlability, indexation, and ranking. Get it right from the start.</p>
<h2>Recommended Structures</h2>
<table><thead><tr><th>Page Type</th><th>Recommended</th><th>Avoid</th></tr></thead><tbody>
<tr><td>Product</td><td><code>/product-name</code></td><td><code>/products/category/subcategory/product-name</code></td></tr>
<tr><td>Category</td><td><code>/category-name</code></td><td><code>/shop/all-categories/category-name</code></td></tr>
<tr><td>Subcategory</td><td><code>/category/subcategory</code></td><td><code>/shop/cat/subcat/subsubcat</code></td></tr>
<tr><td>Search results</td><td><code>/search?q=keyword</code></td><td>(index these with caution)</td></tr>
</tbody></table>
<h2>Key Principles</h2>
<ul>
<li><strong>Flat is better:</strong> <code>/blue-running-shoes</code> beats <code>/shoes/running/blue/nike-model-x</code></li>
<li><strong>Use descriptive slugs:</strong> <code>/wireless-bluetooth-headphones</code> not <code>/product-38291</code></li>
<li><strong>Avoid URL parameters for navigation:</strong> <code>?color=blue&size=10</code> creates crawl issues</li>
<li><strong>Canonical tags:</strong> Essential for products that appear in multiple categories</li>
</ul>
<h2>Generate Product Slugs</h2>
<p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ECサイトURL構造：SEOベストプラクティス",
    description: "商品、カテゴリ、コレクションのURL構造をSEOに最適化する方法。",
    body: `<p>ECサイトのURL構造はクロール性、インデックス、ランキングに直接影響します。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "E-Commerce URL-Struktur: SEO Best Practices",
    description: "URL-Strukturen für Produkt-, Kategorie- und Sammlungsseiten.",
    body: `<p>URL-Struktur beeinflusst Crawling und Ranking direkt.</p><h2>Tool</h2><p><a href="%PRODUCT%">Produkt-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura de URL para e-commerce: Mejores prácticas SEO",
    description: "Cómo estructurar URLs de productos y categorías para SEO.",
    body: `<p>La estructura URL impacta directamente el rastreo y ranking.</p><h2>Herramienta</h2><p><a href="%PRODUCT%">Generador de slugs de producto</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura de URL para e-commerce: Melhores práticas de SEO",
    description: "Como estruturar URLs de produtos e categorias para SEO.",
    body: `<p>A estrutura de URL impacta diretamente o rastreamento e ranking.</p><h2>Ferramenta</h2><p><a href="%PRODUCT%">Gerador de slugs de produto</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure d'URL e-commerce : Bonnes pratiques SEO",
    description: "Comment structurer les URLs produits et catégories pour le SEO.",
    body: `<p>La structure d'URL impacte directement le crawl et le ranking.</p><h2>Outil</h2><p><a href="%PRODUCT%">Générateur de slugs produit</a>.</p>`,
  }),
};
