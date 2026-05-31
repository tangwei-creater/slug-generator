import type { Locale } from "@/i18n/routing";
import type { Article } from "@/lib/blog";

export const meta = {
  slug: "url-slug-vs-url-path-whats-the-difference",
  date: "2026-05-21",
  readTime: 5,
};

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);

const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HOME%", p(l, "/"))
    .replaceAll("%TEXT%", p(l, "/text-to-slug"))
    .replaceAll("%BEST%", p(l, "/blog/url-slug-best-practices-seo")),
});

const DIAGRAM = `<pre><code>https://example.com/blog/url-slug-guide?ref=twitter#introduction
|______|  |__________|  |_________________| |_________| |____________|
scheme     domain         path               query       fragment</code></pre>`;

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "URL Slug vs URL Path: What's the Difference?",
    description:
      "Understand the difference between a URL slug, path, and permalink. Clear definitions with visual examples for web developers and content creators.",
    body: `
<p>When discussing URLs, terms like &ldquo;slug&rdquo;, &ldquo;path&rdquo;, and &ldquo;permalink&rdquo; are often used interchangeably. But they mean different things. Understanding the distinction helps you structure better URLs for SEO and maintainability.</p>
<h2>Anatomy of a URL</h2>
<p>Let&rsquo;s break down a complete URL into its parts using an example:</p>
${DIAGRAM}
<p>Each component serves a different purpose. The part we care about for SEO is the <strong>path</strong>&mdash;and within the path, the <strong>slug</strong>.</p>
<h2>What Is a URL Path?</h2>
<p>The <strong>URL path</strong> is everything after the domain name and before the query string. In our example, the path is <code>/blog/url-slug-guide</code>. The path can include multiple segments separated by forward slashes:</p>
<ul>
<li><code>/blog</code> &mdash; a single-segment path</li>
<li><code>/blog/url-slug-guide</code> &mdash; a two-segment path</li>
<li><code>/products/electronics/headphones</code> &mdash; a three-segment path</li>
</ul>
<h2>What Is a URL Slug?</h2>
<p>The <strong>URL slug</strong> is typically the <em>last segment</em> of the path&mdash;the part that uniquely identifies a specific page within its section. In <code>/blog/url-slug-guide</code>, the slug is <code>url-slug-guide</code>.</p>
<p>Slugs are derived from human-readable text (usually a title) and follow specific formatting rules: lowercase, no spaces, no special characters, hyphens as separators. Our <a href="%HOME%">Slug Generator</a> handles all these rules automatically.</p>
<h2>What Is a Permalink?</h2>
<p>A <strong>permalink</strong> (permanent link) is the full, canonical URL of a page&mdash;domain, path, and all. The term originated in blogging platforms like WordPress to emphasize that a post&rsquo;s URL shouldn&rsquo;t change after publishing.</p>
<p>A permalink is <code>https://example.com/blog/url-slug-guide</code>. It includes both the path (<code>/blog/url-slug-guide</code>) and the slug (<code>url-slug-guide</code>).</p>
<h2>Key Differences at a Glance</h2>
<table>
<thead><tr><th>Term</th><th>Scope</th><th>Example</th></tr></thead>
<tbody>
<tr><td>URL Path</td><td>All segments after the domain</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>URL Slug</td><td>Last segment that identifies the page</td><td><code>url-slug-guide</code></td></tr>
<tr><td>Permalink</td><td>The full permanent URL</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>Why It Matters for SEO</h2>
<p>The slug is the part you have the most control over and the part that carries the most SEO weight within the URL. Google uses the words in the slug to understand page relevance. When optimizing:</p>
<ul>
<li>Focus on the <strong>slug</strong> for keyword placement</li>
<li>Keep the <strong>path</strong> shallow (fewer segments = easier to crawl)</li>
<li>Treat the <strong>permalink</strong> as permanent&mdash;never change it without a redirect</li>
</ul>
<p>For best practices on writing SEO-optimized slugs, see our guide on <a href="%BEST%">URL Slug Best Practices for SEO</a>.</p>
<h2>Common Platform Patterns</h2>
<p>Different platforms structure paths and slugs differently:</p>
<ul>
<li><strong>WordPress</strong>: <code>/2026/05/my-post-title</code> (date-based path, slug at end)</li>
<li><strong>Next.js</strong>: <code>/blog/my-post-title</code> (file-system routing)</li>
<li><strong>Shopify</strong>: <code>/products/my-product-name</code> (category prefix + slug)</li>
<li><strong>Medium</strong>: <code>/username/my-post-title-a1b2c3</code> (slug + hash)</li>
</ul>
<p>Regardless of platform, the slug is always the part you should optimize. Use the <a href="%TEXT%">Text to Slug</a> converter to create clean slugs that work with any platform.</p>
<h2>Summary</h2>
<p>Think of a URL like a mailing address: the path is the full route to the mailbox, and the slug is the name on the mailbox. Both matter, but when people talk about &ldquo;optimizing your URLs&rdquo;, they usually mean writing better slugs.</p>
`,
  }),

  ja: build("ja", {
    title: "URLスラッグとURLパスの違いとは？",
    description:
      "URLスラッグ、パス、パーマリンクの違いを理解しましょう。ウェブ開発者と制作者向けに、視覚的な例で明確に解説します。",
    body: `
<p>URLについて話すとき、「スラッグ」「パス」「パーマリンク」といった用語はしばしば同じ意味で使われます。しかし、これらは異なる概念です。違いを理解すれば、SEOと保守性に優れたURL設計ができます。</p>
<h2>URLの構造</h2>
<p>例を使って、完全なURLを各部分に分解してみましょう。</p>
${DIAGRAM}
<p>各要素には異なる役割があります。SEOで重要なのは<strong>パス</strong>、そしてパスの中の<strong>スラッグ</strong>です。</p>
<h2>URLパスとは？</h2>
<p><strong>URLパス</strong>とは、ドメイン名の後からクエリ文字列の前までのすべてです。先ほどの例ではパスは <code>/blog/url-slug-guide</code> です。パスはスラッシュで区切られた複数のセグメントを含むことができます。</p>
<ul>
<li><code>/blog</code> &mdash; 1セグメントのパス</li>
<li><code>/blog/url-slug-guide</code> &mdash; 2セグメントのパス</li>
<li><code>/products/electronics/headphones</code> &mdash; 3セグメントのパス</li>
</ul>
<h2>URLスラッグとは？</h2>
<p><strong>URLスラッグ</strong>は通常、パスの<em>最後のセグメント</em>であり、そのセクション内で特定のページを一意に識別する部分です。<code>/blog/url-slug-guide</code> ではスラッグは <code>url-slug-guide</code> です。</p>
<p>スラッグは人間が読めるテキスト（通常はタイトル）から作られ、小文字・スペースなし・特殊文字なし・区切りはハイフン、という決まった書式に従います。当サイトの<a href="%HOME%">スラッグジェネレーター</a>はこれらのルールをすべて自動で処理します。</p>
<h2>パーマリンクとは？</h2>
<p><strong>パーマリンク</strong>（permanent link＝恒久リンク）は、ドメイン・パスを含むページの完全な正規URLです。この用語はWordPressのようなブログプラットフォームに由来し、投稿のURLは公開後に変えるべきでないことを強調しています。</p>
<p>パーマリンクは <code>https://example.com/blog/url-slug-guide</code> です。パス（<code>/blog/url-slug-guide</code>）とスラッグ（<code>url-slug-guide</code>）の両方を含みます。</p>
<h2>違いの早わかり表</h2>
<table>
<thead><tr><th>用語</th><th>範囲</th><th>例</th></tr></thead>
<tbody>
<tr><td>URLパス</td><td>ドメインの後のすべてのセグメント</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>URLスラッグ</td><td>ページを識別する最後のセグメント</td><td><code>url-slug-guide</code></td></tr>
<tr><td>パーマリンク</td><td>完全な恒久URL</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>なぜSEOで重要なのか</h2>
<p>スラッグは最もコントロールしやすく、URLの中でSEO上の重みが最も大きい部分です。Googleはスラッグ内の語を使ってページの関連性を理解します。最適化の際は次を意識しましょう。</p>
<ul>
<li>キーワードは<strong>スラッグ</strong>に置くことに集中する</li>
<li><strong>パス</strong>は浅く保つ（セグメントが少ないほどクロールしやすい）</li>
<li><strong>パーマリンク</strong>は恒久的なものとして扱い、リダイレクトなしに変えない</li>
</ul>
<p>SEO最適化されたスラッグの書き方については、<a href="%BEST%">SEOに効くURLスラッグのベストプラクティス</a>のガイドをご覧ください。</p>
<h2>主要プラットフォームのパターン</h2>
<p>プラットフォームによってパスとスラッグの構成は異なります。</p>
<ul>
<li><strong>WordPress</strong>: <code>/2026/05/my-post-title</code>（日付ベースのパス、末尾にスラッグ）</li>
<li><strong>Next.js</strong>: <code>/blog/my-post-title</code>（ファイルシステムルーティング）</li>
<li><strong>Shopify</strong>: <code>/products/my-product-name</code>（カテゴリ接頭辞＋スラッグ）</li>
<li><strong>Medium</strong>: <code>/username/my-post-title-a1b2c3</code>（スラッグ＋ハッシュ）</li>
</ul>
<p>どのプラットフォームでも、最適化すべきは常にスラッグです。<a href="%TEXT%">テキストをスラッグに変換するツール</a>を使えば、どんなプラットフォームでも使えるきれいなスラッグを作れます。</p>
<h2>まとめ</h2>
<p>URLを郵便の住所にたとえると、パスは郵便受けまでの経路全体、スラッグは郵便受けに書かれた名前です。どちらも重要ですが、人が「URLを最適化する」と言うとき、たいていはより良いスラッグを書くことを指しています。</p>
`,
  }),

  de: build("de", {
    title: "URL-Slug vs. URL-Pfad: Was ist der Unterschied?",
    description:
      "Verstehen Sie den Unterschied zwischen URL-Slug, Pfad und Permalink. Klare Definitionen mit anschaulichen Beispielen für Entwickler und Redakteure.",
    body: `
<p>Wenn es um URLs geht, werden Begriffe wie &bdquo;Slug&ldquo;, &bdquo;Pfad&ldquo; und &bdquo;Permalink&ldquo; oft synonym verwendet. Doch sie bedeuten Unterschiedliches. Wer die Unterscheidung versteht, baut bessere URLs für SEO und Wartbarkeit.</p>
<h2>Aufbau einer URL</h2>
<p>Zerlegen wir eine vollständige URL anhand eines Beispiels in ihre Teile:</p>
${DIAGRAM}
<p>Jede Komponente erfüllt einen anderen Zweck. Für SEO interessiert uns der <strong>Pfad</strong>&mdash;und innerhalb des Pfads der <strong>Slug</strong>.</p>
<h2>Was ist ein URL-Pfad?</h2>
<p>Der <strong>URL-Pfad</strong> ist alles nach dem Domainnamen und vor der Query-Zeichenkette. In unserem Beispiel ist der Pfad <code>/blog/url-slug-guide</code>. Der Pfad kann mehrere durch Schrägstriche getrennte Segmente enthalten:</p>
<ul>
<li><code>/blog</code> &mdash; ein Pfad mit einem Segment</li>
<li><code>/blog/url-slug-guide</code> &mdash; ein Pfad mit zwei Segmenten</li>
<li><code>/products/electronics/headphones</code> &mdash; ein Pfad mit drei Segmenten</li>
</ul>
<h2>Was ist ein URL-Slug?</h2>
<p>Der <strong>URL-Slug</strong> ist typischerweise das <em>letzte Segment</em> des Pfads&mdash;der Teil, der eine bestimmte Seite innerhalb ihres Bereichs eindeutig identifiziert. In <code>/blog/url-slug-guide</code> ist der Slug <code>url-slug-guide</code>.</p>
<p>Slugs werden aus menschenlesbarem Text (meist einem Titel) abgeleitet und folgen festen Formatregeln: Kleinschreibung, keine Leerzeichen, keine Sonderzeichen, Bindestriche als Trenner. Unser <a href="%HOME%">Slug-Generator</a> erledigt all diese Regeln automatisch.</p>
<h2>Was ist ein Permalink?</h2>
<p>Ein <strong>Permalink</strong> (permanenter Link) ist die vollständige, kanonische URL einer Seite&mdash;Domain, Pfad und alles. Der Begriff stammt von Blogging-Plattformen wie WordPress und betont, dass sich die URL eines Beitrags nach der Veröffentlichung nicht ändern sollte.</p>
<p>Ein Permalink ist <code>https://example.com/blog/url-slug-guide</code>. Er umfasst sowohl den Pfad (<code>/blog/url-slug-guide</code>) als auch den Slug (<code>url-slug-guide</code>).</p>
<h2>Die wichtigsten Unterschiede auf einen Blick</h2>
<table>
<thead><tr><th>Begriff</th><th>Umfang</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>URL-Pfad</td><td>Alle Segmente nach der Domain</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>URL-Slug</td><td>Letztes Segment, das die Seite identifiziert</td><td><code>url-slug-guide</code></td></tr>
<tr><td>Permalink</td><td>Die vollständige permanente URL</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>Warum es für SEO wichtig ist</h2>
<p>Der Slug ist der Teil, den Sie am meisten kontrollieren und der innerhalb der URL das größte SEO-Gewicht trägt. Google nutzt die Wörter im Slug, um die Relevanz der Seite zu verstehen. Beim Optimieren gilt:</p>
<ul>
<li>Konzentrieren Sie sich für die Keyword-Platzierung auf den <strong>Slug</strong></li>
<li>Halten Sie den <strong>Pfad</strong> flach (weniger Segmente = leichter crawlbar)</li>
<li>Behandeln Sie den <strong>Permalink</strong> als permanent&mdash;ändern Sie ihn nie ohne Weiterleitung</li>
</ul>
<p>Best Practices für das Schreiben SEO-optimierter Slugs finden Sie in unserem Leitfaden zu den <a href="%BEST%">URL-Slug Best Practices für SEO</a>.</p>
<h2>Häufige Plattform-Muster</h2>
<p>Verschiedene Plattformen strukturieren Pfade und Slugs unterschiedlich:</p>
<ul>
<li><strong>WordPress</strong>: <code>/2026/05/my-post-title</code> (datumsbasierter Pfad, Slug am Ende)</li>
<li><strong>Next.js</strong>: <code>/blog/my-post-title</code> (Dateisystem-Routing)</li>
<li><strong>Shopify</strong>: <code>/products/my-product-name</code> (Kategorie-Präfix + Slug)</li>
<li><strong>Medium</strong>: <code>/username/my-post-title-a1b2c3</code> (Slug + Hash)</li>
</ul>
<p>Unabhängig von der Plattform ist der Slug immer der Teil, den Sie optimieren sollten. Nutzen Sie den <a href="%TEXT%">Text-zu-Slug</a>-Konverter, um saubere Slugs zu erstellen, die mit jeder Plattform funktionieren.</p>
<h2>Zusammenfassung</h2>
<p>Stellen Sie sich eine URL wie eine Postanschrift vor: Der Pfad ist der ganze Weg zum Briefkasten, der Slug der Name auf dem Briefkasten. Beides zählt, aber wenn Leute davon sprechen, &bdquo;ihre URLs zu optimieren&ldquo;, meinen sie meist, bessere Slugs zu schreiben.</p>
`,
  }),

  es: build("es", {
    title: "Slug de URL vs. ruta de URL: ¿cuál es la diferencia?",
    description:
      "Entiende la diferencia entre slug de URL, ruta y enlace permanente. Definiciones claras con ejemplos visuales para desarrolladores y creadores.",
    body: `
<p>Al hablar de URLs, términos como &laquo;slug&raquo;, &laquo;ruta&raquo; y &laquo;enlace permanente&raquo; suelen usarse indistintamente. Pero significan cosas distintas. Entender la diferencia te ayuda a estructurar mejores URLs para el SEO y el mantenimiento.</p>
<h2>Anatomía de una URL</h2>
<p>Desglosemos una URL completa en sus partes con un ejemplo:</p>
${DIAGRAM}
<p>Cada componente cumple una función distinta. La parte que nos importa para el SEO es la <strong>ruta</strong>&mdash;y dentro de la ruta, el <strong>slug</strong>.</p>
<h2>¿Qué es una ruta de URL?</h2>
<p>La <strong>ruta de URL</strong> es todo lo que viene después del nombre de dominio y antes de la cadena de consulta. En nuestro ejemplo, la ruta es <code>/blog/url-slug-guide</code>. La ruta puede incluir varios segmentos separados por barras:</p>
<ul>
<li><code>/blog</code> &mdash; una ruta de un solo segmento</li>
<li><code>/blog/url-slug-guide</code> &mdash; una ruta de dos segmentos</li>
<li><code>/products/electronics/headphones</code> &mdash; una ruta de tres segmentos</li>
</ul>
<h2>¿Qué es un slug de URL?</h2>
<p>El <strong>slug de URL</strong> suele ser el <em>último segmento</em> de la ruta&mdash;la parte que identifica de forma única una página dentro de su sección. En <code>/blog/url-slug-guide</code>, el slug es <code>url-slug-guide</code>.</p>
<p>Los slugs se derivan de texto legible (normalmente un título) y siguen reglas de formato concretas: minúsculas, sin espacios, sin caracteres especiales, guiones como separadores. Nuestro <a href="%HOME%">generador de slugs</a> aplica todas estas reglas automáticamente.</p>
<h2>¿Qué es un enlace permanente?</h2>
<p>Un <strong>enlace permanente</strong> (permalink) es la URL completa y canónica de una página&mdash;dominio, ruta y todo. El término nació en plataformas de blogs como WordPress para subrayar que la URL de una entrada no debería cambiar tras publicarse.</p>
<p>Un enlace permanente es <code>https://example.com/blog/url-slug-guide</code>. Incluye tanto la ruta (<code>/blog/url-slug-guide</code>) como el slug (<code>url-slug-guide</code>).</p>
<h2>Diferencias clave de un vistazo</h2>
<table>
<thead><tr><th>Término</th><th>Alcance</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Ruta de URL</td><td>Todos los segmentos tras el dominio</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>Slug de URL</td><td>Último segmento que identifica la página</td><td><code>url-slug-guide</code></td></tr>
<tr><td>Enlace permanente</td><td>La URL permanente completa</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>Por qué importa para el SEO</h2>
<p>El slug es la parte sobre la que tienes más control y la que más peso SEO aporta dentro de la URL. Google usa las palabras del slug para entender la relevancia de la página. Al optimizar:</p>
<ul>
<li>Céntrate en el <strong>slug</strong> para colocar las palabras clave</li>
<li>Mantén la <strong>ruta</strong> poco profunda (menos segmentos = más fácil de rastrear)</li>
<li>Trata el <strong>enlace permanente</strong> como permanente&mdash;nunca lo cambies sin una redirección</li>
</ul>
<p>Para conocer buenas prácticas sobre cómo escribir slugs optimizados para SEO, consulta nuestra guía de <a href="%BEST%">buenas prácticas de slugs de URL para SEO</a>.</p>
<h2>Patrones comunes por plataforma</h2>
<p>Cada plataforma estructura las rutas y los slugs de forma distinta:</p>
<ul>
<li><strong>WordPress</strong>: <code>/2026/05/my-post-title</code> (ruta basada en fecha, slug al final)</li>
<li><strong>Next.js</strong>: <code>/blog/my-post-title</code> (enrutamiento por sistema de archivos)</li>
<li><strong>Shopify</strong>: <code>/products/my-product-name</code> (prefijo de categoría + slug)</li>
<li><strong>Medium</strong>: <code>/username/my-post-title-a1b2c3</code> (slug + hash)</li>
</ul>
<p>Independientemente de la plataforma, el slug es siempre la parte que debes optimizar. Usa el conversor <a href="%TEXT%">de texto a slug</a> para crear slugs limpios que funcionen en cualquier plataforma.</p>
<h2>Resumen</h2>
<p>Piensa en una URL como en una dirección postal: la ruta es el camino completo hasta el buzón, y el slug es el nombre en el buzón. Ambos importan, pero cuando la gente habla de &laquo;optimizar tus URLs&raquo;, normalmente se refiere a escribir mejores slugs.</p>
`,
  }),

  pt: build("pt", {
    title: "Slug de URL vs. caminho de URL: qual é a diferença?",
    description:
      "Entenda a diferença entre slug de URL, caminho e link permanente. Definições claras com exemplos visuais para desenvolvedores e criadores.",
    body: `
<p>Ao falar de URLs, termos como &laquo;slug&raquo;, &laquo;caminho&raquo; e &laquo;link permanente&raquo; costumam ser usados como sinônimos. Mas eles significam coisas diferentes. Entender a distinção ajuda você a estruturar URLs melhores para SEO e manutenção.</p>
<h2>Anatomia de uma URL</h2>
<p>Vamos desmembrar uma URL completa em suas partes com um exemplo:</p>
${DIAGRAM}
<p>Cada componente cumpre uma função diferente. A parte que nos interessa para SEO é o <strong>caminho</strong>&mdash;e, dentro do caminho, o <strong>slug</strong>.</p>
<h2>O que é um caminho de URL?</h2>
<p>O <strong>caminho de URL</strong> é tudo o que vem depois do nome de domínio e antes da string de consulta. No nosso exemplo, o caminho é <code>/blog/url-slug-guide</code>. O caminho pode incluir vários segmentos separados por barras:</p>
<ul>
<li><code>/blog</code> &mdash; um caminho de um único segmento</li>
<li><code>/blog/url-slug-guide</code> &mdash; um caminho de dois segmentos</li>
<li><code>/products/electronics/headphones</code> &mdash; um caminho de três segmentos</li>
</ul>
<h2>O que é um slug de URL?</h2>
<p>O <strong>slug de URL</strong> normalmente é o <em>último segmento</em> do caminho&mdash;a parte que identifica de forma única uma página específica dentro de sua seção. Em <code>/blog/url-slug-guide</code>, o slug é <code>url-slug-guide</code>.</p>
<p>Os slugs são derivados de texto legível (geralmente um título) e seguem regras de formatação específicas: minúsculas, sem espaços, sem caracteres especiais, hífens como separadores. Nosso <a href="%HOME%">gerador de slugs</a> aplica todas essas regras automaticamente.</p>
<h2>O que é um link permanente?</h2>
<p>Um <strong>link permanente</strong> (permalink) é a URL completa e canônica de uma página&mdash;domínio, caminho e tudo. O termo surgiu em plataformas de blog como o WordPress para enfatizar que a URL de um post não deveria mudar após a publicação.</p>
<p>Um link permanente é <code>https://example.com/blog/url-slug-guide</code>. Ele inclui tanto o caminho (<code>/blog/url-slug-guide</code>) quanto o slug (<code>url-slug-guide</code>).</p>
<h2>Principais diferenças num relance</h2>
<table>
<thead><tr><th>Termo</th><th>Escopo</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Caminho de URL</td><td>Todos os segmentos após o domínio</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>Slug de URL</td><td>Último segmento que identifica a página</td><td><code>url-slug-guide</code></td></tr>
<tr><td>Link permanente</td><td>A URL permanente completa</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>Por que isso importa para o SEO</h2>
<p>O slug é a parte sobre a qual você tem mais controle e a que carrega mais peso de SEO dentro da URL. O Google usa as palavras do slug para entender a relevância da página. Ao otimizar:</p>
<ul>
<li>Concentre-se no <strong>slug</strong> para posicionar as palavras-chave</li>
<li>Mantenha o <strong>caminho</strong> raso (menos segmentos = mais fácil de rastrear)</li>
<li>Trate o <strong>link permanente</strong> como permanente&mdash;nunca o mude sem um redirecionamento</li>
</ul>
<p>Para boas práticas sobre como escrever slugs otimizados para SEO, veja nosso guia de <a href="%BEST%">boas práticas de slugs de URL para SEO</a>.</p>
<h2>Padrões comuns por plataforma</h2>
<p>Cada plataforma estrutura caminhos e slugs de forma diferente:</p>
<ul>
<li><strong>WordPress</strong>: <code>/2026/05/my-post-title</code> (caminho baseado em data, slug no fim)</li>
<li><strong>Next.js</strong>: <code>/blog/my-post-title</code> (roteamento por sistema de arquivos)</li>
<li><strong>Shopify</strong>: <code>/products/my-product-name</code> (prefixo de categoria + slug)</li>
<li><strong>Medium</strong>: <code>/username/my-post-title-a1b2c3</code> (slug + hash)</li>
</ul>
<p>Independentemente da plataforma, o slug é sempre a parte que você deve otimizar. Use o conversor <a href="%TEXT%">de texto para slug</a> para criar slugs limpos que funcionem em qualquer plataforma.</p>
<h2>Resumo</h2>
<p>Pense em uma URL como um endereço postal: o caminho é a rota completa até a caixa de correio, e o slug é o nome na caixa de correio. Ambos importam, mas quando as pessoas falam em &laquo;otimizar suas URLs&raquo;, normalmente querem dizer escrever slugs melhores.</p>
`,
  }),

  fr: build("fr", {
    title: "Slug d'URL vs chemin d'URL : quelle différence ?",
    description:
      "Comprenez la différence entre slug d'URL, chemin et permalien. Des définitions claires avec des exemples visuels pour développeurs et créateurs.",
    body: `
<p>Quand on parle d'URLs, des termes comme &laquo;&nbsp;slug&nbsp;&raquo;, &laquo;&nbsp;chemin&nbsp;&raquo; et &laquo;&nbsp;permalien&nbsp;&raquo; sont souvent employés de façon interchangeable. Pourtant, ils désignent des choses différentes. Comprendre la distinction vous aide à structurer de meilleures URLs pour le SEO et la maintenabilité.</p>
<h2>Anatomie d'une URL</h2>
<p>Décomposons une URL complète en ses différentes parties à l'aide d'un exemple :</p>
${DIAGRAM}
<p>Chaque composant a un rôle différent. La partie qui nous intéresse pour le SEO est le <strong>chemin</strong>&mdash;et, au sein du chemin, le <strong>slug</strong>.</p>
<h2>Qu'est-ce qu'un chemin d'URL ?</h2>
<p>Le <strong>chemin d'URL</strong> est tout ce qui suit le nom de domaine et précède la chaîne de requête. Dans notre exemple, le chemin est <code>/blog/url-slug-guide</code>. Le chemin peut comporter plusieurs segments séparés par des barres obliques :</p>
<ul>
<li><code>/blog</code> &mdash; un chemin à un seul segment</li>
<li><code>/blog/url-slug-guide</code> &mdash; un chemin à deux segments</li>
<li><code>/products/electronics/headphones</code> &mdash; un chemin à trois segments</li>
</ul>
<h2>Qu'est-ce qu'un slug d'URL ?</h2>
<p>Le <strong>slug d'URL</strong> est généralement le <em>dernier segment</em> du chemin&mdash;la partie qui identifie de façon unique une page précise au sein de sa section. Dans <code>/blog/url-slug-guide</code>, le slug est <code>url-slug-guide</code>.</p>
<p>Les slugs sont dérivés d'un texte lisible (généralement un titre) et suivent des règles de format précises : minuscules, pas d'espaces, pas de caractères spéciaux, traits d'union comme séparateurs. Notre <a href="%HOME%">générateur de slugs</a> applique toutes ces règles automatiquement.</p>
<h2>Qu'est-ce qu'un permalien ?</h2>
<p>Un <strong>permalien</strong> (lien permanent) est l'URL complète et canonique d'une page&mdash;domaine, chemin et tout le reste. Le terme vient des plateformes de blog comme WordPress pour souligner que l'URL d'un article ne devrait pas changer après publication.</p>
<p>Un permalien est <code>https://example.com/blog/url-slug-guide</code>. Il inclut à la fois le chemin (<code>/blog/url-slug-guide</code>) et le slug (<code>url-slug-guide</code>).</p>
<h2>Les différences clés en un coup d'œil</h2>
<table>
<thead><tr><th>Terme</th><th>Portée</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Chemin d'URL</td><td>Tous les segments après le domaine</td><td><code>/blog/url-slug-guide</code></td></tr>
<tr><td>Slug d'URL</td><td>Dernier segment qui identifie la page</td><td><code>url-slug-guide</code></td></tr>
<tr><td>Permalien</td><td>L'URL permanente complète</td><td><code>https://example.com/blog/url-slug-guide</code></td></tr>
</tbody>
</table>
<h2>Pourquoi c'est important pour le SEO</h2>
<p>Le slug est la partie que vous maîtrisez le mieux et celle qui porte le plus de poids SEO au sein de l'URL. Google utilise les mots du slug pour comprendre la pertinence de la page. Lors de l'optimisation :</p>
<ul>
<li>Concentrez-vous sur le <strong>slug</strong> pour le placement des mots-clés</li>
<li>Gardez le <strong>chemin</strong> peu profond (moins de segments = plus facile à explorer)</li>
<li>Traitez le <strong>permalien</strong> comme permanent&mdash;ne le changez jamais sans redirection</li>
</ul>
<p>Pour les bonnes pratiques d'écriture de slugs optimisés pour le SEO, consultez notre guide sur les <a href="%BEST%">bonnes pratiques des slugs d'URL pour le SEO</a>.</p>
<h2>Modèles courants selon les plateformes</h2>
<p>Les plateformes structurent les chemins et les slugs différemment :</p>
<ul>
<li><strong>WordPress</strong> : <code>/2026/05/my-post-title</code> (chemin basé sur la date, slug à la fin)</li>
<li><strong>Next.js</strong> : <code>/blog/my-post-title</code> (routage par système de fichiers)</li>
<li><strong>Shopify</strong> : <code>/products/my-product-name</code> (préfixe de catégorie + slug)</li>
<li><strong>Medium</strong> : <code>/username/my-post-title-a1b2c3</code> (slug + hash)</li>
</ul>
<p>Quelle que soit la plateforme, le slug est toujours la partie à optimiser. Utilisez le convertisseur <a href="%TEXT%">de texte en slug</a> pour créer des slugs propres compatibles avec n'importe quelle plateforme.</p>
<h2>Résumé</h2>
<p>Voyez une URL comme une adresse postale : le chemin est l'itinéraire complet jusqu'à la boîte aux lettres, et le slug est le nom sur la boîte. Les deux comptent, mais quand on parle d'&laquo;&nbsp;optimiser ses URLs&nbsp;&raquo;, on veut généralement dire écrire de meilleurs slugs.</p>
`,
  }),
};
