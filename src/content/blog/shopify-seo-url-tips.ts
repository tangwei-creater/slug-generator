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
    title: "Shopify SEO URLのヒント：ストアURLの最適化方法",
    description: "Shopify固有のURL最適化ヒント。商品、コレクション、ページ、ブログ記事のハンドルを最適化する方法を解説します。",
    body: `<p>ShopifyのURL構造は部分的に固定されています（<code>/products/</code>、<code>/collections/</code>）が、各ページのハンドル（スラッグ）は最適化できます。</p>
<h2>最適化のヒント</h2>
<ul>
<li>公開前にハンドルを編集する — 後から変更するとリダイレクトが必要</li>
<li>ハンドルにターゲットキーワードを含める</li>
<li>ストップワードや不要な語を削除する</li>
<li>ハンドルは5語以内に抑える</li>
<li>URL変更時はShopify組み込みのリダイレクトマネージャーを使う</li>
</ul>
<h2>ShopifyのURL制限</h2>
<ul>
<li><code>/products/</code>、<code>/collections/</code>プレフィックスは削除不可</li>
<li>カスタムURL構造は作成不可</li>
<li>商品URLはコレクション経由のアクセスでも<code>/products/</code>を含む</li>
</ul>
<h2>ハンドルを生成</h2>
<p><a href="%PRODUCT%">商品スラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Shopify SEO URL-Tipps: Optimieren Sie Ihre Store-URLs",
    description: "Lernen Sie Shopify-spezifische URL-Optimierungstipps für Produkte, Sammlungen, Seiten und Blogbeiträge.",
    body: `<p>Shopifys URL-Struktur ist teilweise fest (<code>/products/</code>, <code>/collections/</code>), aber Sie können den Handle (Slug) für jede Seite optimieren.</p>
<h2>Optimierungstipps</h2>
<ul>
<li>Handles vor der Veröffentlichung bearbeiten — spätere Änderungen erfordern Weiterleitungen</li>
<li>Ziel-Keywords in Handles einbauen</li>
<li>Stoppwörter und Füllwörter entfernen</li>
<li>Handles unter 5 Wörtern halten</li>
<li>Den integrierten Redirect-Manager für geänderte URLs nutzen</li>
</ul>
<h2>Shopify URL-Einschränkungen</h2>
<ul>
<li><code>/products/</code>-, <code>/collections/</code>-Präfixe können nicht entfernt werden</li>
<li>Benutzerdefinierte URL-Strukturen sind nicht möglich</li>
<li>Produkt-URLs enthalten <code>/products/</code>, auch wenn über eine Sammlung zugegriffen wird</li>
</ul>
<h2>Handles generieren</h2>
<p>Verwenden Sie unseren <a href="%PRODUCT%">Produkt-Slug-Generator</a> oder den <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Consejos SEO de URLs en Shopify: Optimiza las URLs de tu tienda",
    description: "Aprende consejos de optimización URL específicos de Shopify para productos, colecciones, páginas y publicaciones de blog.",
    body: `<p>La estructura de URL de Shopify es parcialmente fija (<code>/products/</code>, <code>/collections/</code>), pero puedes optimizar el handle (slug) de cada página.</p>
<h2>Consejos de optimización</h2>
<ul>
<li>Edita los handles antes de publicar — cambiarlos después requiere redirecciones</li>
<li>Incluye palabras clave objetivo en los handles</li>
<li>Elimina las stop words y relleno</li>
<li>Mantén los handles en menos de 5 palabras</li>
<li>Usa el gestor de redirecciones integrado para URLs cambiadas</li>
</ul>
<h2>Limitaciones de URL en Shopify</h2>
<ul>
<li>No se pueden eliminar los prefijos <code>/products/</code>, <code>/collections/</code></li>
<li>No se pueden crear estructuras URL personalizadas</li>
<li>Las URLs de productos incluyen <code>/products/</code> aunque se acceda desde una colección</li>
</ul>
<h2>Genera handles</h2>
<p>Usa nuestro <a href="%PRODUCT%">generador de slugs de producto</a> o el <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Dicas de SEO de URLs no Shopify: Otimize as URLs da sua loja",
    description: "Aprenda dicas de otimização de URL específicas do Shopify para produtos, coleções, páginas e posts de blog.",
    body: `<p>A estrutura de URL do Shopify é parcialmente fixa (<code>/products/</code>, <code>/collections/</code>), mas você pode otimizar o handle (slug) de cada página.</p>
<h2>Dicas de otimização</h2>
<ul>
<li>Edite os handles antes de publicar — mudá-los depois requer redirecionamentos</li>
<li>Inclua palavras-chave alvo nos handles</li>
<li>Remova stop words e preenchimento</li>
<li>Mantenha os handles em menos de 5 palavras</li>
<li>Use o gerenciador de redirecionamentos integrado para URLs alteradas</li>
</ul>
<h2>Limitações de URL do Shopify</h2>
<ul>
<li>Não é possível remover os prefixos <code>/products/</code>, <code>/collections/</code></li>
<li>Não é possível criar estruturas URL personalizadas</li>
<li>URLs de produtos incluem <code>/products/</code> mesmo acessados de uma coleção</li>
</ul>
<h2>Gere handles</h2>
<p>Use nosso <a href="%PRODUCT%">gerador de slugs de produto</a> ou o <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conseils SEO URL Shopify : optimisez les URLs de votre boutique",
    description: "Découvrez des conseils d'optimisation URL spécifiques à Shopify pour les produits, collections, pages et articles de blog.",
    body: `<p>La structure URL de Shopify est partiellement fixe (<code>/products/</code>, <code>/collections/</code>), mais vous pouvez optimiser le handle (slug) de chaque page.</p>
<h2>Conseils d'optimisation</h2>
<ul>
<li>Modifiez les handles avant de publier — les changer après nécessite des redirections</li>
<li>Incluez des mots-clés cibles dans les handles</li>
<li>Supprimez les mots vides et le remplissage</li>
<li>Gardez les handles en moins de 5 mots</li>
<li>Utilisez le gestionnaire de redirections intégré pour les URLs modifiées</li>
</ul>
<h2>Limitations URL de Shopify</h2>
<ul>
<li>Impossible de supprimer les préfixes <code>/products/</code>, <code>/collections/</code></li>
<li>Impossible de créer des structures URL personnalisées</li>
<li>Les URLs produits incluent <code>/products/</code> même si accédées depuis une collection</li>
</ul>
<h2>Générez des handles</h2>
<p>Utilisez notre <a href="%PRODUCT%">générateur de slugs produit</a> ou le <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
