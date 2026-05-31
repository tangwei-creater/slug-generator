import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-a-permalink", date: "2026-05-31", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is a Permalink? Everything You Need to Know",
    description: "Learn what a permalink is, how it differs from a URL slug, and how to set up permalink structures in WordPress, Ghost, and other CMS platforms.",
    body: `
<p>A <strong>permalink</strong> (permanent link) is the full, permanent URL of a specific page, post, or resource on the web. Once published, a permalink should never change — it's the address that people bookmark, share, and that search engines index.</p>

<h2>Permalink vs URL Slug</h2>
<p>These two terms are related but different:</p>
<table>
<thead><tr><th>Term</th><th>Definition</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Permalink</td><td>The complete, permanent URL</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>URL Slug</td><td>The last segment of the URL</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>The slug is a <em>part</em> of the permalink. When you edit a slug, you change the permalink.</p>

<h2>Why Permalinks Matter</h2>
<ul>
<li><strong>SEO:</strong> Search engines use the URL to understand page content. A descriptive permalink with keywords ranks better than a random ID.</li>
<li><strong>User trust:</strong> Users are more likely to click a URL that tells them what to expect.</li>
<li><strong>Link durability:</strong> Backlinks, social shares, and bookmarks all point to the permalink. Changing it without a redirect breaks all of those.</li>
<li><strong>Analytics:</strong> Clean permalinks make it easier to analyze traffic patterns in tools like Google Analytics.</li>
</ul>

<h2>Permalink Structures in WordPress</h2>
<p>WordPress offers several permalink structures in Settings > Permalinks:</p>
<table>
<thead><tr><th>Structure</th><th>Pattern</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Plain</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>Day and name</td><td><code>/YYYY/MM/DD/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>Month and name</td><td><code>/YYYY/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>Post name (recommended)</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>Custom</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p>The <strong>Post name</strong> structure is recommended for SEO because it creates the shortest, most descriptive URLs.</p>

<h2>Permalink Best Practices</h2>
<ul>
<li><strong>Set your structure before publishing.</strong> Changing permalinks after launch breaks existing links.</li>
<li><strong>Keep slugs short and descriptive.</strong> 3-5 words targeting your primary keyword.</li>
<li><strong>Use hyphens, not underscores.</strong> Google treats hyphens as word separators.</li>
<li><strong>Avoid dates in URLs.</strong> They make evergreen content look outdated.</li>
<li><strong>Always redirect old URLs.</strong> If you must change a permalink, set up a 301 redirect from the old URL to the new one.</li>
</ul>

<h2>Permalinks in Other Platforms</h2>
<table>
<thead><tr><th>Platform</th><th>Default Pattern</th><th>Customizable?</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code> (plain)</td><td>Yes, fully</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>Yes, via routing</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>Yes, in config</td></tr>
<tr><td>Next.js</td><td>File-system based</td><td>Yes, via routing</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>Handle only</td></tr>
</tbody>
</table>

<h2>Generate Clean Permalinks</h2>
<p>Use our <a href="%SLUG%">URL slug generator</a> to create SEO-friendly slugs for your permalinks. For WordPress specifically, try the <a href="%WP%">WordPress slug generator</a> or the <a href="%BLOG%">blog slug generator</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "パーマリンクとは？知っておくべきすべてのこと",
    description: "パーマリンクとは何か、URLスラッグとの違い、WordPress・Ghost・その他CMSでのパーマリンク設定方法を解説。",
    body: `
<p><strong>パーマリンク</strong>（permanent link）は、Webページやブログ記事の完全な永続的URLです。</p>
<h2>パーマリンクとURLスラッグの違い</h2>
<p>パーマリンクは完全なURL、スラッグはURLの最後のセグメントです。</p>
<h2>WordPressのパーマリンク構造</h2>
<p>「投稿名」構造が最も推奨されます：<code>example.com/my-post/</code></p>
<h2>ベストプラクティス</h2>
<ul>
<li>公開前に構造を設定</li>
<li>短く説明的なスラッグ</li>
<li>ハイフンを使用</li>
<li>URLに日付を含めない</li>
</ul>
<h2>スラッグ生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>や<a href="%WP%">WordPressスラッグジェネレーター</a>をご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "Was ist ein Permalink? Alles, was Sie wissen müssen",
    description: "Erfahren Sie, was ein Permalink ist, wie er sich vom URL-Slug unterscheidet und wie man Permalink-Strukturen einrichtet.",
    body: `
<p>Ein <strong>Permalink</strong> (Permanent Link) ist die vollständige, permanente URL einer Seite oder eines Beitrags.</p>
<h2>Permalink vs URL-Slug</h2>
<p>Der Permalink ist die vollständige URL, der Slug ist das letzte Segment.</p>
<h2>Best Practices</h2>
<ul>
<li>Struktur vor der Veröffentlichung festlegen</li>
<li>Kurze, beschreibende Slugs</li>
<li>Bindestriche verwenden</li>
</ul>
<h2>Slug generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> oder den <a href="%WP%">WordPress-Slug-Generator</a>.</p>
`,
  }),
  es: build("es", {
    title: "¿Qué es un permalink? Todo lo que necesitas saber",
    description: "Aprende qué es un permalink, cómo difiere de un slug URL y cómo configurar estructuras de permalink en WordPress y otros CMS.",
    body: `
<p>Un <strong>permalink</strong> (enlace permanente) es la URL completa y permanente de una página o publicación.</p>
<h2>Permalink vs slug URL</h2>
<p>El permalink es la URL completa, el slug es el último segmento.</p>
<h2>Mejores prácticas</h2>
<ul>
<li>Establecer la estructura antes de publicar</li>
<li>Slugs cortos y descriptivos</li>
<li>Usar guiones</li>
</ul>
<h2>Generar slugs</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> o el <a href="%WP%">generador de slugs WordPress</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "O que é um permalink? Tudo o que você precisa saber",
    description: "Aprenda o que é um permalink, como difere de um slug URL e como configurar estruturas de permalink no WordPress e outros CMS.",
    body: `
<p>Um <strong>permalink</strong> (link permanente) é a URL completa e permanente de uma página ou postagem.</p>
<h2>Permalink vs slug URL</h2>
<p>O permalink é a URL completa, o slug é o último segmento.</p>
<h2>Melhores práticas</h2>
<ul>
<li>Definir a estrutura antes de publicar</li>
<li>Slugs curtos e descritivos</li>
<li>Usar hífens</li>
</ul>
<h2>Gerar slugs</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> ou o <a href="%WP%">gerador de slugs WordPress</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce qu'un permalink ? Tout ce que vous devez savoir",
    description: "Apprenez ce qu'est un permalink, comment il diffère d'un slug URL et comment configurer les structures de permalink dans WordPress et autres CMS.",
    body: `
<p>Un <strong>permalink</strong> (lien permanent) est l'URL complète et permanente d'une page ou d'un article.</p>
<h2>Permalink vs slug URL</h2>
<p>Le permalink est l'URL complète, le slug est le dernier segment.</p>
<h2>Bonnes pratiques</h2>
<ul>
<li>Définir la structure avant de publier</li>
<li>Slugs courts et descriptifs</li>
<li>Utiliser des tirets</li>
</ul>
<h2>Générer des slugs</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> ou le <a href="%WP%">générateur de slugs WordPress</a>.</p>
`,
  }),
};
