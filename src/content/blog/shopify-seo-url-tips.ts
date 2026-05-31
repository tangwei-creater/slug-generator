import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "shopify-seo-url-tips", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PRODUCT%", p(l, "/product-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Shopify SEO URL Tips: Optimize Your Store's URLs",
    description: "Learn Shopify-specific URL optimization tips for products, collections, pages, and blog posts.",
    body: `<p>Shopify's URL structure is partially fixed (<code>/products/</code>, <code>/collections/</code>), but you can optimize the handle (slug) for each page.</p><h2>Optimization Tips</h2><ul><li>Edit handles before publishing — changing later requires redirects</li><li>Include target keywords in handles</li><li>Remove stop words and filler</li><li>Keep handles under 5 words</li><li>Use the built-in redirect manager for changed URLs</li></ul><h2>Shopify URL Limitations</h2><ul><li>Cannot remove <code>/products/</code>, <code>/collections/</code> prefixes</li><li>Cannot create custom URL structures</li><li>Product URLs include <code>/products/</code> even if accessed from a collection</li></ul><h2>Generate Handles</h2><p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Shopify SEO URLのヒント：ストアURLの最適化",
    description: "Shopify固有のURL最適化のヒント。",
    body: `<p>ShopifyのURL構造は部分的に固定ですが、ハンドル（スラッグ）は最適化可能。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Shopify SEO URL-Tipps: Store-URLs optimieren",
    description: "Shopify-spezifische URL-Optimierungstipps.",
    body: `<p>Shopifys URL-Struktur ist teilweise fest, aber Handles sind optimierbar.</p>`,
  }),
  es: build("es", {
    title: "Consejos SEO de URLs en Shopify: Optimiza las URLs de tu tienda",
    description: "Consejos de optimización URL específicos de Shopify.",
    body: `<p>La estructura URL de Shopify es parcialmente fija, pero los handles son optimizables.</p>`,
  }),
  pt: build("pt", {
    title: "Dicas de SEO de URLs no Shopify: Otimize as URLs da sua loja",
    description: "Dicas de otimização URL específicas do Shopify.",
    body: `<p>A estrutura URL do Shopify é parcialmente fixa, mas os handles são otimizáveis.</p>`,
  }),
  fr: build("fr", {
    title: "Conseils SEO URL Shopify : Optimisez les URLs de votre boutique",
    description: "Conseils d'optimisation URL spécifiques à Shopify.",
    body: `<p>La structure URL de Shopify est partiellement fixe, mais les handles sont optimisables.</p>`,
  }),
};
