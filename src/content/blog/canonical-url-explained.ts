import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "canonical-url-explained", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Canonical URLs Explained: What They Are and How to Use Them",
    description: "Learn what canonical URLs are, why they matter for SEO, and how to implement rel=canonical correctly.",
    body: `<p>A <strong>canonical URL</strong> tells search engines which version of a page is the "official" one when multiple URLs contain similar or identical content.</p>
<h2>When You Need Canonicals</h2>
<ul>
<li>Same product accessible via multiple category URLs</li>
<li>HTTP vs HTTPS, www vs non-www variants</li>
<li>URL parameter variations (<code>?sort=price</code>)</li>
<li>Pagination (<code>?page=2</code>)</li>
<li>Syndicated content on multiple domains</li>
</ul>
<h2>Implementation</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Common Mistakes</h2>
<ul>
<li>Pointing canonical to a 404 page</li>
<li>Using relative URLs instead of absolute</li>
<li>Setting every page's canonical to the homepage</li>
<li>Conflicting canonical and hreflang tags</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Start with clean slugs using our <a href="%SLUG%">URL slug generator</a> to reduce the need for canonicals.</p>`,
  }),
  ja: build("ja", {
    title: "Canonical URL解説：定義と正しい使い方",
    description: "canonical URLとは何か、SEOでなぜ重要なのか、rel=canonicalを正しく実装する方法を学びましょう。",
    body: `<p><strong>canonical URL</strong>は、複数のURLが似たまたは同じコンテンツを含む場合に、どのバージョンが「公式」かを検索エンジンに伝えます。</p>
<h2>canonicalが必要な場合</h2>
<ul>
<li>同じ商品が複数のカテゴリURLからアクセスできる</li>
<li>HTTP vs HTTPS、www vs 非wwwのバリエーション</li>
<li>URLパラメータのバリエーション（<code>?sort=price</code>）</li>
<li>ページネーション（<code>?page=2</code>）</li>
<li>複数のドメインに配信されたコンテンツ</li>
</ul>
<h2>実装</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>よくある間違い</h2>
<ul>
<li>canonicalを404ページに向けている</li>
<li>絶対URLではなく相対URLを使っている</li>
<li>すべてのページのcanonicalをホームページに設定している</li>
<li>canonicalとhreflangタグが矛盾している</li>
</ul>
<h2>クリーンなURLを生成</h2>
<p>canonicalの必要性を減らすために、<a href="%SLUG%">URLスラッグジェネレーター</a>でクリーンなスラッグから始めましょう。</p>`,
  }),
  de: build("de", {
    title: "Canonical URLs erklärt: Was sie sind und wie man sie nutzt",
    description: "Lernen Sie, was Canonical URLs sind, warum sie für SEO wichtig sind und wie man rel=canonical korrekt implementiert.",
    body: `<p>Eine <strong>Canonical URL</strong> teilt Suchmaschinen mit, welche Version einer Seite die „offizielle" ist, wenn mehrere URLs ähnlichen oder identischen Inhalt enthalten.</p>
<h2>Wann Canonicals nötig sind</h2>
<ul>
<li>Dasselbe Produkt über mehrere Kategorie-URLs erreichbar</li>
<li>HTTP vs. HTTPS, www vs. nicht-www Varianten</li>
<li>URL-Parameter-Varianten (<code>?sort=price</code>)</li>
<li>Paginierung (<code>?page=2</code>)</li>
<li>Syndizierter Inhalt auf mehreren Domains</li>
</ul>
<h2>Implementierung</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Häufige Fehler</h2>
<ul>
<li>Canonical auf eine 404-Seite zeigen lassen</li>
<li>Relative statt absolute URLs verwenden</li>
<li>Canonical jeder Seite auf die Startseite setzen</li>
<li>Widersprüchliche Canonical- und hreflang-Tags</li>
</ul>
<h2>Saubere URLs generieren</h2>
<p>Beginnen Sie mit sauberen Slugs über unseren <a href="%SLUG%">URL-Slug-Generator</a>, um den Bedarf an Canonicals zu reduzieren.</p>`,
  }),
  es: build("es", {
    title: "URLs canónicas explicadas: Qué son y cómo usarlas",
    description: "Aprende qué son las URLs canónicas, por qué importan para el SEO y cómo implementar rel=canonical correctamente.",
    body: `<p>Una <strong>URL canónica</strong> indica a los motores de búsqueda cuál es la versión «oficial» de una página cuando múltiples URLs contienen contenido similar o idéntico.</p>
<h2>Cuándo necesitas canonicals</h2>
<ul>
<li>El mismo producto accesible por múltiples URLs de categoría</li>
<li>Variantes HTTP vs HTTPS, www vs sin www</li>
<li>Variaciones de parámetros URL (<code>?sort=price</code>)</li>
<li>Paginación (<code>?page=2</code>)</li>
<li>Contenido sindicado en múltiples dominios</li>
</ul>
<h2>Implementación</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Errores comunes</h2>
<ul>
<li>Apuntar el canonical a una página 404</li>
<li>Usar URLs relativas en vez de absolutas</li>
<li>Poner el canonical de todas las páginas apuntando a la homepage</li>
<li>Tags canonical y hreflang contradictorios</li>
</ul>
<h2>Genera URLs limpias</h2>
<p>Empieza con slugs limpios usando nuestro <a href="%SLUG%">generador de slugs de URL</a> para reducir la necesidad de canonicals.</p>`,
  }),
  pt: build("pt", {
    title: "URLs canônicas explicadas: O que são e como usar",
    description: "Aprenda o que são URLs canônicas, por que importam para o SEO e como implementar rel=canonical corretamente.",
    body: `<p>Uma <strong>URL canônica</strong> indica aos mecanismos de busca qual versão de uma página é a «oficial» quando múltiplas URLs contêm conteúdo semelhante ou idêntico.</p>
<h2>Quando você precisa de canonicals</h2>
<ul>
<li>O mesmo produto acessível por múltiplas URLs de categoria</li>
<li>Variantes HTTP vs HTTPS, www vs sem www</li>
<li>Variações de parâmetros URL (<code>?sort=price</code>)</li>
<li>Paginação (<code>?page=2</code>)</li>
<li>Conteúdo distribuído em múltiplos domínios</li>
</ul>
<h2>Implementação</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Erros comuns</h2>
<ul>
<li>Apontar o canonical para uma página 404</li>
<li>Usar URLs relativas em vez de absolutas</li>
<li>Definir o canonical de todas as páginas para a homepage</li>
<li>Tags canonical e hreflang contraditórias</li>
</ul>
<h2>Gere URLs limpas</h2>
<p>Comece com slugs limpos usando o nosso <a href="%SLUG%">gerador de slugs de URL</a> para reduzir a necessidade de canonicals.</p>`,
  }),
  fr: build("fr", {
    title: "URLs canoniques expliquées : Définition et utilisation",
    description: "Apprenez ce que sont les URLs canoniques, pourquoi elles comptent pour le SEO et comment implémenter rel=canonical correctement.",
    body: `<p>Une <strong>URL canonique</strong> indique aux moteurs de recherche quelle version d'une page est l'« officielle » lorsque plusieurs URLs contiennent un contenu similaire ou identique.</p>
<h2>Quand les canoniques sont nécessaires</h2>
<ul>
<li>Le même produit accessible via plusieurs URLs de catégorie</li>
<li>Variantes HTTP vs HTTPS, www vs sans www</li>
<li>Variations de paramètres URL (<code>?sort=price</code>)</li>
<li>Pagination (<code>?page=2</code>)</li>
<li>Contenu syndiqué sur plusieurs domaines</li>
</ul>
<h2>Implémentation</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Erreurs courantes</h2>
<ul>
<li>Pointer le canonical vers une page 404</li>
<li>Utiliser des URLs relatives au lieu d'absolues</li>
<li>Définir le canonical de toutes les pages vers la page d'accueil</li>
<li>Tags canonical et hreflang contradictoires</li>
</ul>
<h2>Générez des URLs propres</h2>
<p>Commencez par des slugs propres avec notre <a href="%SLUG%">générateur de slugs d'URL</a> pour réduire le besoin de canoniques.</p>`,
  }),
};
