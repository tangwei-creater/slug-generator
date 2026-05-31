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
    title: "ShopifyのURLハンドル：商品URLの最適化ガイド",
    description: "ShopifyのURLハンドルの仕組みと編集方法。",
    body: `<p>ShopifyではURLスラッグを「ハンドル」と呼びます。タイトルから自動生成されますが手動編集可能。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Shopify URL-Handles: Produkt-URLs optimieren",
    description: "Shopify URL-Handles und SEO-Optimierung.",
    body: `<p>Shopify nennt Slugs "Handles". Automatisch generiert, manuell bearbeitbar.</p><h2>Tool</h2><p><a href="%PRODUCT%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Handles de URL en Shopify: Optimizar URLs de productos",
    description: "Handles de URL de Shopify y optimización SEO.",
    body: `<p>Shopify llama a los slugs "handles". Se generan automáticamente pero son editables.</p><h2>Herramienta</h2><p><a href="%PRODUCT%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Handles de URL no Shopify: Otimizar URLs de produtos",
    description: "Handles de URL do Shopify e otimização SEO.",
    body: `<p>Shopify chama os slugs de "handles". Gerados automaticamente mas editáveis.</p><h2>Ferramenta</h2><p><a href="%PRODUCT%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Handles d'URL Shopify : Optimiser les URLs produits",
    description: "Handles d'URL Shopify et optimisation SEO.",
    body: `<p>Shopify appelle les slugs "handles". Générés automatiquement mais modifiables.</p><h2>Outil</h2><p><a href="%PRODUCT%">Générateur</a>.</p>`,
  }),
};
