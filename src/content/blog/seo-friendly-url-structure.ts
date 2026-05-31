import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "seo-friendly-url-structure", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "SEO-Friendly URL Structure: Best Practices for 2026",
    description: "Learn how to create SEO-friendly URLs that rank higher. Covers URL structure, slug optimization, keyword placement, and common mistakes to avoid.",
    body: `
<p>URL structure is one of the most overlooked SEO factors. A clean, descriptive URL helps search engines understand your content and gives users confidence before they click.</p>

<h2>What Makes a URL SEO-Friendly?</h2>
<p>An SEO-friendly URL is short, descriptive, uses real words, and gives both humans and search engines a clear idea of what the page contains. Compare these:</p>
<table>
<thead><tr><th>Bad URL</th><th>Good URL</th></tr></thead>
<tbody>
<tr><td><code>/p?id=839&cat=12</code></td><td><code>/blog/seo-friendly-url-structure</code></td></tr>
<tr><td><code>/2026/05/31/post</code></td><td><code>/blog/python-naming-conventions</code></td></tr>
<tr><td><code>/products/item-839283</code></td><td><code>/products/wireless-bluetooth-headphones</code></td></tr>
</tbody>
</table>

<h2>URL Structure Best Practices</h2>

<h3>1. Use Hyphens, Not Underscores</h3>
<p>Google treats hyphens as word separators but underscores as word joiners. <code>seo-friendly-url</code> is three words to Google; <code>seo_friendly_url</code> is one.</p>

<h3>2. Keep It Short</h3>
<p>Aim for 3-5 words in the slug. Shorter URLs are easier to share, remember, and display in search results. Google truncates URLs longer than ~60 characters in SERPs.</p>

<h3>3. Include Your Target Keyword</h3>
<p>Place your primary keyword in the URL slug. If your article targets "python naming conventions," your URL should be <code>/blog/python-naming-conventions</code>.</p>

<h3>4. Use Lowercase Only</h3>
<p>URLs are case-sensitive on most servers. <code>/About-Us</code> and <code>/about-us</code> are different pages. Stick to lowercase to avoid duplicate content issues.</p>

<h3>5. Avoid Stop Words</h3>
<p>Remove words like "a", "the", "and", "of", "in" unless they are essential for meaning. <code>/best-practices-seo</code> is better than <code>/the-best-practices-for-seo</code>.</p>

<h3>6. No Special Characters</h3>
<p>Avoid spaces (which become <code>%20</code>), accented characters, and symbols. Stick to lowercase letters, numbers, and hyphens.</p>

<h3>7. Use a Flat Structure</h3>
<p>Prefer <code>/product-name</code> over <code>/category/subcategory/product-name</code> unless you have a strong reason for depth. Flatter URLs pass more link equity and are easier to manage.</p>

<h2>URL Structure by Content Type</h2>
<table>
<thead><tr><th>Content Type</th><th>Recommended Pattern</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Blog post</td><td><code>/blog/keyword-slug</code></td><td><code>/blog/seo-url-tips</code></td></tr>
<tr><td>Product page</td><td><code>/products/product-slug</code></td><td><code>/products/blue-running-shoes</code></td></tr>
<tr><td>Category page</td><td><code>/category/name</code></td><td><code>/category/electronics</code></td></tr>
<tr><td>Landing page</td><td><code>/keyword-slug</code></td><td><code>/free-seo-audit</code></td></tr>
</tbody>
</table>

<h2>Common Mistakes</h2>
<ul>
<li><strong>Dates in URLs:</strong> <code>/2026/05/31/my-post</code> makes content look outdated. Use <code>/blog/my-post</code> instead.</li>
<li><strong>ID numbers:</strong> <code>/product/83921</code> means nothing to users or search engines.</li>
<li><strong>Dynamic parameters:</strong> <code>?page=2&sort=price</code> creates crawl issues. Use clean paths.</li>
<li><strong>Changing URLs without redirects:</strong> Always set up 301 redirects when changing URL structure.</li>
</ul>

<h2>Generate SEO-Friendly Slugs</h2>
<p>Use our <a href="%SLUG%">URL slug generator</a> to create clean slugs from any text. For WordPress sites, try the <a href="%WP%">WordPress slug generator</a>. For blog titles, use the <a href="%BLOG%">blog slug generator</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "SEOに強いURL構造：2026年のベストプラクティス",
    description: "検索順位を上げるSEOフレンドリーなURLの作り方。URL構造、スラッグ最適化、キーワード配置、よくある間違いを解説。",
    body: `
<p>URL構造は見過ごされがちなSEO要素です。クリーンで説明的なURLは検索エンジンの理解を助け、ユーザーにクリック前の安心感を与えます。</p>
<h2>SEOフレンドリーなURLとは</h2>
<p>短く、説明的で、実際の単語を使い、ページの内容が明確にわかるURLです。</p>
<h2>ベストプラクティス</h2>
<ul>
<li>ハイフンを使用（アンダースコアではなく）</li>
<li>3〜5語に抑える</li>
<li>ターゲットキーワードを含める</li>
<li>小文字のみ使用</li>
<li>ストップワードを避ける</li>
</ul>
<h2>スラッグ生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>や<a href="%WP%">WordPressスラッグジェネレーター</a>で即座に作成できます。</p>
`,
  }),
  de: build("de", {
    title: "SEO-freundliche URL-Struktur: Best Practices für 2026",
    description: "Erfahren Sie, wie Sie SEO-freundliche URLs erstellen. URL-Struktur, Slug-Optimierung, Keyword-Platzierung und häufige Fehler.",
    body: `
<p>Die URL-Struktur ist einer der am meisten übersehenen SEO-Faktoren. Eine saubere, beschreibende URL hilft Suchmaschinen und gibt Nutzern Vertrauen.</p>
<h2>Best Practices</h2>
<ul>
<li>Bindestriche verwenden (keine Unterstriche)</li>
<li>Kurz halten (3-5 Wörter)</li>
<li>Ziel-Keyword einbauen</li>
<li>Nur Kleinbuchstaben</li>
</ul>
<h2>Slug generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> oder den <a href="%WP%">WordPress-Slug-Generator</a>.</p>
`,
  }),
  es: build("es", {
    title: "Estructura de URL amigable para SEO: Mejores prácticas 2026",
    description: "Aprende a crear URLs amigables para SEO. Estructura de URL, optimización de slug, ubicación de palabras clave y errores comunes.",
    body: `
<p>La estructura de URL es uno de los factores SEO más ignorados. Una URL limpia y descriptiva ayuda a los motores de búsqueda y da confianza a los usuarios.</p>
<h2>Mejores prácticas</h2>
<ul>
<li>Usar guiones (no guiones bajos)</li>
<li>Mantenerla corta (3-5 palabras)</li>
<li>Incluir la palabra clave objetivo</li>
<li>Solo minúsculas</li>
</ul>
<h2>Generar slugs</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> o el <a href="%WP%">generador de slugs WordPress</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Estrutura de URL amigável para SEO: Melhores práticas 2026",
    description: "Aprenda a criar URLs amigáveis para SEO. Estrutura de URL, otimização de slug, posicionamento de palavras-chave e erros comuns.",
    body: `
<p>A estrutura de URL é um dos fatores de SEO mais ignorados. Uma URL limpa e descritiva ajuda os mecanismos de busca e dá confiança aos usuários.</p>
<h2>Melhores práticas</h2>
<ul>
<li>Usar hífens (não underscores)</li>
<li>Manter curta (3-5 palavras)</li>
<li>Incluir a palavra-chave alvo</li>
<li>Apenas minúsculas</li>
</ul>
<h2>Gerar slugs</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> ou o <a href="%WP%">gerador de slugs WordPress</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Structure d'URL SEO-friendly : Bonnes pratiques 2026",
    description: "Apprenez à créer des URLs optimisées pour le SEO. Structure d'URL, optimisation de slug, placement de mots-clés et erreurs courantes.",
    body: `
<p>La structure d'URL est l'un des facteurs SEO les plus négligés. Une URL propre et descriptive aide les moteurs de recherche et donne confiance aux utilisateurs.</p>
<h2>Bonnes pratiques</h2>
<ul>
<li>Utiliser des tirets (pas des underscores)</li>
<li>Garder court (3-5 mots)</li>
<li>Inclure le mot-clé cible</li>
<li>Uniquement en minuscules</li>
</ul>
<h2>Générer des slugs</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> ou le <a href="%WP%">générateur de slugs WordPress</a>.</p>
`,
  }),
};
