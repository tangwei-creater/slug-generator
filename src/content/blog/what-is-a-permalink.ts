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
    description: "パーマリンクとは何か、URLスラッグとの違い、WordPress・Ghost・その他CMSでのパーマリンク構造の設定方法を詳しく解説します。",
    body: `
<p><strong>パーマリンク</strong>（permanent link）は、特定のページ、投稿、またはWebリソースの完全な永続的URLです。一度公開されたら、パーマリンクは変更すべきではありません。ユーザーがブックマークし、共有し、検索エンジンがインデックスするアドレスです。</p>

<h2>パーマリンクとURLスラッグの違い</h2>
<p>この2つの用語は関連していますが異なります：</p>
<table>
<thead><tr><th>用語</th><th>定義</th><th>例</th></tr></thead>
<tbody>
<tr><td>パーマリンク</td><td>完全な永続的URL</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>URLスラッグ</td><td>URLの最後のセグメント</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>スラッグはパーマリンクの<em>一部</em>です。スラッグを編集すると、パーマリンクが変わります。</p>

<h2>パーマリンクが重要な理由</h2>
<ul>
<li><strong>SEO：</strong>検索エンジンはURLを使ってページの内容を理解します。キーワードを含む説明的なパーマリンクは、ランダムなIDよりも上位に表示されます。</li>
<li><strong>ユーザーの信頼：</strong>ユーザーは何を期待できるかがわかるURLの方がクリックしやすい。</li>
<li><strong>リンクの耐久性：</strong>被リンク、SNSシェア、ブックマークはすべてパーマリンクを指します。リダイレクトなしに変更すると、それらすべてが壊れます。</li>
<li><strong>アナリティクス：</strong>クリーンなパーマリンクはGoogle Analyticsなどのツールでトラフィックパターンを分析しやすくします。</li>
</ul>

<h2>WordPressのパーマリンク構造</h2>
<p>WordPressでは設定 > パーマリンクでいくつかの構造を提供しています：</p>
<table>
<thead><tr><th>構造</th><th>パターン</th><th>例</th></tr></thead>
<tbody>
<tr><td>基本</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>日付と投稿名</td><td><code>/YYYY/MM/DD/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>月と投稿名</td><td><code>/YYYY/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>投稿名（推奨）</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>カスタム</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p><strong>投稿名</strong>構造は、最も短く説明的なURLを生成するため、SEOに推奨されます。</p>

<h2>パーマリンクのベストプラクティス</h2>
<ul>
<li><strong>公開前に構造を設定する。</strong>公開後にパーマリンクを変更すると、既存のリンクが壊れます。</li>
<li><strong>スラッグを短く説明的に。</strong>メインキーワードを狙った3〜5語。</li>
<li><strong>ハイフンを使用し、アンダースコアは使わない。</strong>Googleはハイフンを単語の区切りとして扱います。</li>
<li><strong>URLに日付を含めない。</strong>エバーグリーンコンテンツが古く見えてしまいます。</li>
<li><strong>古いURLは必ずリダイレクトする。</strong>パーマリンクを変更する必要がある場合、旧URLから新URLへの301リダイレクトを設定します。</li>
</ul>

<h2>他のプラットフォームのパーマリンク</h2>
<table>
<thead><tr><th>プラットフォーム</th><th>デフォルトパターン</th><th>カスタマイズ可能？</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code>（基本）</td><td>はい、完全に</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>はい、ルーティング経由</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>はい、設定ファイルで</td></tr>
<tr><td>Next.js</td><td>ファイルシステムベース</td><td>はい、ルーティング経由</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>ハンドルのみ</td></tr>
</tbody>
</table>

<h2>クリーンなパーマリンクを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>でSEOフレンドリーなスラッグを作成できます。WordPress専用なら<a href="%WP%">WordPressスラッグジェネレーター</a>や<a href="%BLOG%">ブログスラッグジェネレーター</a>もご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "Was ist ein Permalink? Alles, was Sie wissen müssen",
    description: "Erfahren Sie, was ein Permalink ist, wie er sich vom URL-Slug unterscheidet und wie man Permalink-Strukturen in WordPress, Ghost und anderen CMS-Plattformen einrichtet.",
    body: `
<p>Ein <strong>Permalink</strong> (Permanent Link) ist die vollständige, permanente URL einer bestimmten Seite, eines Beitrags oder einer Ressource im Web. Einmal veröffentlicht, sollte ein Permalink nie geändert werden — es ist die Adresse, die Menschen als Lesezeichen speichern, teilen und die Suchmaschinen indexieren.</p>

<h2>Permalink vs URL-Slug</h2>
<p>Diese beiden Begriffe sind verwandt, aber verschieden:</p>
<table>
<thead><tr><th>Begriff</th><th>Definition</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>Permalink</td><td>Die vollständige, permanente URL</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>URL-Slug</td><td>Das letzte Segment der URL</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>Der Slug ist ein <em>Teil</em> des Permalinks. Wenn Sie den Slug ändern, ändern Sie den Permalink.</p>

<h2>Warum Permalinks wichtig sind</h2>
<ul>
<li><strong>SEO:</strong> Suchmaschinen nutzen die URL, um Seiteninhalt zu verstehen. Ein beschreibender Permalink mit Keywords rankt besser als eine zufällige ID.</li>
<li><strong>Nutzervertrauen:</strong> Nutzer klicken eher auf eine URL, die ihnen verrät, was sie erwartet.</li>
<li><strong>Link-Haltbarkeit:</strong> Backlinks, Social Shares und Lesezeichen zeigen alle auf den Permalink. Eine Änderung ohne Redirect zerstört all diese.</li>
<li><strong>Analytics:</strong> Saubere Permalinks machen es einfacher, Traffic-Muster in Tools wie Google Analytics zu analysieren.</li>
</ul>

<h2>Permalink-Strukturen in WordPress</h2>
<p>WordPress bietet mehrere Permalink-Strukturen unter Einstellungen > Permalinks:</p>
<table>
<thead><tr><th>Struktur</th><th>Muster</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>Einfach</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>Tag und Name</td><td><code>/JJJJ/MM/TT/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>Monat und Name</td><td><code>/JJJJ/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>Beitragsname (empfohlen)</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>Benutzerdefiniert</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p>Die <strong>Beitragsname</strong>-Struktur wird für SEO empfohlen, da sie die kürzesten und beschreibendsten URLs erzeugt.</p>

<h2>Permalink Best Practices</h2>
<ul>
<li><strong>Struktur vor der Veröffentlichung festlegen.</strong> Das Ändern von Permalinks nach dem Launch zerstört bestehende Links.</li>
<li><strong>Slugs kurz und beschreibend halten.</strong> 3-5 Wörter, die auf Ihr primäres Keyword abzielen.</li>
<li><strong>Bindestriche verwenden, keine Unterstriche.</strong> Google behandelt Bindestriche als Worttrenner.</li>
<li><strong>Keine Daten in URLs.</strong> Sie lassen Evergreen-Content veraltet wirken.</li>
<li><strong>Alte URLs immer weiterleiten.</strong> Wenn Sie einen Permalink ändern müssen, richten Sie eine 301-Weiterleitung von der alten zur neuen URL ein.</li>
</ul>

<h2>Permalinks auf anderen Plattformen</h2>
<table>
<thead><tr><th>Plattform</th><th>Standard-Muster</th><th>Anpassbar?</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code> (einfach)</td><td>Ja, vollständig</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>Ja, über Routing</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>Ja, in der Config</td></tr>
<tr><td>Next.js</td><td>Dateisystem-basiert</td><td>Ja, über Routing</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>Nur Handle</td></tr>
</tbody>
</table>

<h2>Saubere Permalinks generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a>, um SEO-freundliche Slugs für Ihre Permalinks zu erstellen. Speziell für WordPress nutzen Sie den <a href="%WP%">WordPress-Slug-Generator</a> oder den <a href="%BLOG%">Blog-Slug-Generator</a>.</p>
`,
  }),
  es: build("es", {
    title: "¿Qué es un permalink? Todo lo que necesitas saber",
    description: "Aprende qué es un permalink, cómo difiere de un slug URL y cómo configurar estructuras de permalink en WordPress, Ghost y otras plataformas CMS.",
    body: `
<p>Un <strong>permalink</strong> (enlace permanente) es la URL completa y permanente de una página, publicación o recurso específico en la web. Una vez publicado, un permalink no debería cambiar nunca — es la dirección que las personas guardan en favoritos, comparten y que los motores de búsqueda indexan.</p>

<h2>Permalink vs slug URL</h2>
<p>Estos dos términos están relacionados pero son diferentes:</p>
<table>
<thead><tr><th>Término</th><th>Definición</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Permalink</td><td>La URL completa y permanente</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>Slug URL</td><td>El último segmento de la URL</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>El slug es una <em>parte</em> del permalink. Cuando editas un slug, cambias el permalink.</p>

<h2>Por qué importan los permalinks</h2>
<ul>
<li><strong>SEO:</strong> Los motores de búsqueda usan la URL para entender el contenido de la página. Un permalink descriptivo con palabras clave posiciona mejor que un ID aleatorio.</li>
<li><strong>Confianza del usuario:</strong> Los usuarios son más propensos a hacer clic en una URL que les dice qué esperar.</li>
<li><strong>Durabilidad de enlaces:</strong> Los backlinks, compartidos en redes y favoritos apuntan al permalink. Cambiarlo sin redirección rompe todos ellos.</li>
<li><strong>Analytics:</strong> Los permalinks limpios facilitan el análisis de patrones de tráfico en herramientas como Google Analytics.</li>
</ul>

<h2>Estructuras de permalink en WordPress</h2>
<p>WordPress ofrece varias estructuras de permalink en Ajustes > Enlaces permanentes:</p>
<table>
<thead><tr><th>Estructura</th><th>Patrón</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Simple</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>Día y nombre</td><td><code>/AAAA/MM/DD/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>Mes y nombre</td><td><code>/AAAA/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>Nombre de entrada (recomendado)</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>Personalizado</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p>La estructura <strong>Nombre de entrada</strong> es recomendada para SEO porque crea las URLs más cortas y descriptivas.</p>

<h2>Mejores prácticas de permalinks</h2>
<ul>
<li><strong>Establece la estructura antes de publicar.</strong> Cambiar permalinks después del lanzamiento rompe enlaces existentes.</li>
<li><strong>Slugs cortos y descriptivos.</strong> 3-5 palabras apuntando a tu palabra clave principal.</li>
<li><strong>Usa guiones, no guiones bajos.</strong> Google trata los guiones como separadores de palabras.</li>
<li><strong>Evita fechas en URLs.</strong> Hacen que el contenido perenne parezca desactualizado.</li>
<li><strong>Siempre redirige las URLs antiguas.</strong> Si debes cambiar un permalink, configura una redirección 301 de la URL antigua a la nueva.</li>
</ul>

<h2>Permalinks en otras plataformas</h2>
<table>
<thead><tr><th>Plataforma</th><th>Patrón predeterminado</th><th>¿Personalizable?</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code> (simple)</td><td>Sí, completamente</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>Sí, vía routing</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>Sí, en config</td></tr>
<tr><td>Next.js</td><td>Basado en sistema de archivos</td><td>Sí, vía routing</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>Solo handle</td></tr>
</tbody>
</table>

<h2>Genera permalinks limpios</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> para crear slugs SEO-friendly para tus permalinks. Para WordPress específicamente, prueba el <a href="%WP%">generador de slugs WordPress</a> o el <a href="%BLOG%">generador de slugs de blog</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "O que é um permalink? Tudo o que você precisa saber",
    description: "Aprenda o que é um permalink, como difere de um slug URL e como configurar estruturas de permalink no WordPress, Ghost e outras plataformas CMS.",
    body: `
<p>Um <strong>permalink</strong> (link permanente) é a URL completa e permanente de uma página, post ou recurso específico na web. Uma vez publicado, um permalink nunca deve mudar — é o endereço que as pessoas salvam nos favoritos, compartilham e que os mecanismos de busca indexam.</p>

<h2>Permalink vs slug URL</h2>
<p>Esses dois termos são relacionados mas diferentes:</p>
<table>
<thead><tr><th>Termo</th><th>Definição</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Permalink</td><td>A URL completa e permanente</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>Slug URL</td><td>O último segmento da URL</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>O slug é uma <em>parte</em> do permalink. Quando você edita um slug, você muda o permalink.</p>

<h2>Por que permalinks importam</h2>
<ul>
<li><strong>SEO:</strong> Mecanismos de busca usam a URL para entender o conteúdo da página. Um permalink descritivo com palavras-chave posiciona melhor que um ID aleatório.</li>
<li><strong>Confiança do usuário:</strong> Usuários são mais propensos a clicar em uma URL que diz o que esperar.</li>
<li><strong>Durabilidade de links:</strong> Backlinks, compartilhamentos sociais e favoritos apontam para o permalink. Mudá-lo sem redirecionamento quebra todos eles.</li>
<li><strong>Analytics:</strong> Permalinks limpos facilitam a análise de padrões de tráfego em ferramentas como Google Analytics.</li>
</ul>

<h2>Estruturas de permalink no WordPress</h2>
<p>O WordPress oferece várias estruturas de permalink em Configurações > Links permanentes:</p>
<table>
<thead><tr><th>Estrutura</th><th>Padrão</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Simples</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>Dia e nome</td><td><code>/AAAA/MM/DD/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>Mês e nome</td><td><code>/AAAA/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>Nome do post (recomendado)</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>Personalizado</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p>A estrutura <strong>Nome do post</strong> é recomendada para SEO porque cria as URLs mais curtas e descritivas.</p>

<h2>Melhores práticas de permalinks</h2>
<ul>
<li><strong>Defina a estrutura antes de publicar.</strong> Mudar permalinks após o lançamento quebra links existentes.</li>
<li><strong>Slugs curtos e descritivos.</strong> 3-5 palavras mirando sua palavra-chave principal.</li>
<li><strong>Use hífens, não underscores.</strong> O Google trata hífens como separadores de palavras.</li>
<li><strong>Evite datas nas URLs.</strong> Elas fazem conteúdo evergreen parecer desatualizado.</li>
<li><strong>Sempre redirecione URLs antigas.</strong> Se precisar mudar um permalink, configure um redirecionamento 301 da URL antiga para a nova.</li>
</ul>

<h2>Permalinks em outras plataformas</h2>
<table>
<thead><tr><th>Plataforma</th><th>Padrão default</th><th>Personalizável?</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code> (simples)</td><td>Sim, totalmente</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>Sim, via routing</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>Sim, no config</td></tr>
<tr><td>Next.js</td><td>Baseado em sistema de arquivos</td><td>Sim, via routing</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>Apenas handle</td></tr>
</tbody>
</table>

<h2>Gere permalinks limpos</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> para criar slugs SEO-friendly para seus permalinks. Para WordPress especificamente, experimente o <a href="%WP%">gerador de slugs WordPress</a> ou o <a href="%BLOG%">gerador de slugs de blog</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce qu'un permalink ? Tout ce que vous devez savoir",
    description: "Apprenez ce qu'est un permalink, comment il diffère d'un slug URL et comment configurer les structures de permalink dans WordPress, Ghost et autres CMS.",
    body: `
<p>Un <strong>permalink</strong> (lien permanent) est l'URL complète et permanente d'une page, d'un article ou d'une ressource spécifique sur le web. Une fois publié, un permalink ne devrait jamais changer — c'est l'adresse que les gens mettent en favoris, partagent et que les moteurs de recherche indexent.</p>

<h2>Permalink vs slug URL</h2>
<p>Ces deux termes sont liés mais différents :</p>
<table>
<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Permalink</td><td>L'URL complète et permanente</td><td><code>https://example.com/blog/what-is-a-permalink</code></td></tr>
<tr><td>Slug URL</td><td>Le dernier segment de l'URL</td><td><code>what-is-a-permalink</code></td></tr>
</tbody>
</table>
<p>Le slug est une <em>partie</em> du permalink. Quand vous modifiez un slug, vous changez le permalink.</p>

<h2>Pourquoi les permalinks comptent</h2>
<ul>
<li><strong>SEO :</strong> Les moteurs de recherche utilisent l'URL pour comprendre le contenu de la page. Un permalink descriptif avec des mots-clés se positionne mieux qu'un ID aléatoire.</li>
<li><strong>Confiance de l'utilisateur :</strong> Les utilisateurs sont plus enclins à cliquer sur une URL qui leur indique ce qu'ils vont trouver.</li>
<li><strong>Durabilité des liens :</strong> Les backlinks, partages sociaux et favoris pointent tous vers le permalink. Le changer sans redirection brise tout cela.</li>
<li><strong>Analytics :</strong> Des permalinks propres facilitent l'analyse des modèles de trafic dans des outils comme Google Analytics.</li>
</ul>

<h2>Structures de permalink dans WordPress</h2>
<p>WordPress propose plusieurs structures de permalink dans Réglages > Permaliens :</p>
<table>
<thead><tr><th>Structure</th><th>Modèle</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Simple</td><td><code>?p=123</code></td><td><code>example.com/?p=123</code></td></tr>
<tr><td>Jour et titre</td><td><code>/AAAA/MM/JJ/slug/</code></td><td><code>example.com/2026/05/31/my-post/</code></td></tr>
<tr><td>Mois et titre</td><td><code>/AAAA/MM/slug/</code></td><td><code>example.com/2026/05/my-post/</code></td></tr>
<tr><td>Titre de la publication (recommandé)</td><td><code>/slug/</code></td><td><code>example.com/my-post/</code></td></tr>
<tr><td>Personnalisé</td><td><code>/blog/%postname%/</code></td><td><code>example.com/blog/my-post/</code></td></tr>
</tbody>
</table>
<p>La structure <strong>Titre de la publication</strong> est recommandée pour le SEO car elle crée les URLs les plus courtes et les plus descriptives.</p>

<h2>Bonnes pratiques des permalinks</h2>
<ul>
<li><strong>Définissez la structure avant de publier.</strong> Changer les permalinks après le lancement brise les liens existants.</li>
<li><strong>Slugs courts et descriptifs.</strong> 3 à 5 mots ciblant votre mot-clé principal.</li>
<li><strong>Utilisez des tirets, pas des underscores.</strong> Google traite les tirets comme des séparateurs de mots.</li>
<li><strong>Évitez les dates dans les URLs.</strong> Elles font paraître le contenu evergreen obsolète.</li>
<li><strong>Redirigez toujours les anciennes URLs.</strong> Si vous devez changer un permalink, mettez en place une redirection 301 de l'ancienne vers la nouvelle URL.</li>
</ul>

<h2>Permalinks sur d'autres plateformes</h2>
<table>
<thead><tr><th>Plateforme</th><th>Modèle par défaut</th><th>Personnalisable ?</th></tr></thead>
<tbody>
<tr><td>WordPress</td><td><code>/?p=123</code> (simple)</td><td>Oui, entièrement</td></tr>
<tr><td>Ghost</td><td><code>/slug/</code></td><td>Oui, via routing</td></tr>
<tr><td>Hugo</td><td><code>/posts/slug/</code></td><td>Oui, dans la config</td></tr>
<tr><td>Next.js</td><td>Basé sur le système de fichiers</td><td>Oui, via routing</td></tr>
<tr><td>Shopify</td><td><code>/products/handle</code></td><td>Handle uniquement</td></tr>
</tbody>
</table>

<h2>Générez des permalinks propres</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> pour créer des slugs SEO-friendly pour vos permalinks. Pour WordPress spécifiquement, essayez le <a href="%WP%">générateur de slugs WordPress</a> ou le <a href="%BLOG%">générateur de slugs de blog</a>.</p>
`,
  }),
};
