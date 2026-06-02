import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-search-engines-crawl-urls", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How Search Engines Crawl URLs: A Technical Overview",
    description: "Learn how Googlebot discovers, crawls, and indexes URLs. Covers crawl budget, rendering, and URL discovery.",
    body: `<p>Understanding how search engines crawl your site helps you build URL structures that get indexed efficiently.</p><h2>The Crawl Process</h2><ol><li><strong>Discovery:</strong> Googlebot finds URLs through sitemaps, internal links, and external backlinks</li><li><strong>Crawling:</strong> Googlebot fetches the page content (HTML, CSS, JS)</li><li><strong>Rendering:</strong> JavaScript is executed to get the final DOM</li><li><strong>Indexing:</strong> Content is processed and added to the index</li></ol><h2>Crawl Budget</h2><p>Google allocates a crawl budget per site — the number of pages it will crawl in a given timeframe. Clean URL structures and proper sitemaps maximize your budget.</p><h2>Generate Clean URLs</h2><p>Use the <a href="%SLUG%">URL slug generator</a> for clean, crawlable URLs.</p>`,
  }),
  ja: build("ja", {
    title: "検索エンジンはURLをどうクロールするか：技術概要",
    description: "GooglebotがURLを発見し、クロールし、インデックスする仕組みを解説。クロールバジェット、レンダリング、URL発見を扱います。",
    body: `<p>検索エンジンがサイトをどうクロールするかを理解すれば、効率よくインデックスされるURL構造を設計できます。</p><h2>クロールのプロセス</h2><ol><li><strong>発見:</strong> Googlebotはサイトマップ、内部リンク、外部被リンクを通じてURLを見つけます</li><li><strong>クロール:</strong> Googlebotがページコンテンツ（HTML、CSS、JS）を取得します</li><li><strong>レンダリング:</strong> JavaScriptを実行して最終的なDOMを得ます</li><li><strong>インデックス:</strong> コンテンツが処理され、インデックスに追加されます</li></ol><h2>クロールバジェット</h2><p>Googleはサイトごとにクロールバジェット — 一定期間にクロールするページ数 — を割り当てます。クリーンなURL構造と適切なサイトマップが、このバジェットを最大化します。</p><h2>クリーンなURLを生成</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>でクリーンでクロールしやすいURLを生成しましょう。</p>`,
  }),
  de: build("de", {
    title: "Wie Suchmaschinen URLs crawlen: Technischer Überblick",
    description: "Lernen Sie, wie Googlebot URLs entdeckt, crawlt und indexiert. Behandelt Crawl-Budget, Rendering und URL-Erkennung.",
    body: `<p>Zu verstehen, wie Suchmaschinen Ihre Site crawlen, hilft Ihnen, URL-Strukturen zu bauen, die effizient indexiert werden.</p><h2>Der Crawl-Prozess</h2><ol><li><strong>Entdeckung:</strong> Googlebot findet URLs über Sitemaps, interne Links und externe Backlinks</li><li><strong>Crawling:</strong> Googlebot ruft den Seiteninhalt ab (HTML, CSS, JS)</li><li><strong>Rendering:</strong> JavaScript wird ausgeführt, um das endgültige DOM zu erhalten</li><li><strong>Indexierung:</strong> Der Inhalt wird verarbeitet und dem Index hinzugefügt</li></ol><h2>Crawl-Budget</h2><p>Google weist pro Site ein Crawl-Budget zu — die Anzahl der Seiten, die es in einem bestimmten Zeitraum crawlt. Saubere URL-Strukturen und korrekte Sitemaps maximieren Ihr Budget.</p><h2>Saubere URLs generieren</h2><p>Verwenden Sie den <a href="%SLUG%">URL-Slug-Generator</a> für saubere, crawlbare URLs.</p>`,
  }),
  es: build("es", {
    title: "Cómo los motores de búsqueda rastrean URLs: Visión técnica",
    description: "Aprende cómo Googlebot descubre, rastrea e indexa URLs. Cubre el presupuesto de rastreo, el renderizado y el descubrimiento de URLs.",
    body: `<p>Entender cómo los motores de búsqueda rastrean tu sitio te ayuda a construir estructuras de URL que se indexan de forma eficiente.</p><h2>El proceso de rastreo</h2><ol><li><strong>Descubrimiento:</strong> Googlebot encuentra URLs a través de sitemaps, enlaces internos y backlinks externos</li><li><strong>Rastreo:</strong> Googlebot obtiene el contenido de la página (HTML, CSS, JS)</li><li><strong>Renderizado:</strong> Se ejecuta el JavaScript para obtener el DOM final</li><li><strong>Indexación:</strong> El contenido se procesa y se añade al índice</li></ol><h2>Presupuesto de rastreo</h2><p>Google asigna un presupuesto de rastreo por sitio — el número de páginas que rastreará en un periodo determinado. Las estructuras de URL limpias y los sitemaps correctos maximizan tu presupuesto.</p><h2>Genera URLs limpias</h2><p>Usa el <a href="%SLUG%">generador de slugs de URL</a> para obtener URLs limpias y rastreables.</p>`,
  }),
  pt: build("pt", {
    title: "Como os mecanismos de busca rastreiam URLs: Visão técnica",
    description: "Aprenda como o Googlebot descobre, rastreia e indexa URLs. Cobre o orçamento de rastreamento, a renderização e a descoberta de URLs.",
    body: `<p>Entender como os mecanismos de busca rastreiam o seu site ajuda a construir estruturas de URL que são indexadas de forma eficiente.</p><h2>O processo de rastreamento</h2><ol><li><strong>Descoberta:</strong> O Googlebot encontra URLs através de sitemaps, links internos e backlinks externos</li><li><strong>Rastreamento:</strong> O Googlebot obtém o conteúdo da página (HTML, CSS, JS)</li><li><strong>Renderização:</strong> O JavaScript é executado para obter o DOM final</li><li><strong>Indexação:</strong> O conteúdo é processado e adicionado ao índice</li></ol><h2>Orçamento de rastreamento</h2><p>O Google aloca um orçamento de rastreamento por site — o número de páginas que rastreará num determinado período. Estruturas de URL limpas e sitemaps corretos maximizam o seu orçamento.</p><h2>Gere URLs limpas</h2><p>Use o <a href="%SLUG%">gerador de slugs de URL</a> para URLs limpas e rastreáveis.</p>`,
  }),
  fr: build("fr", {
    title: "Comment les moteurs de recherche crawlent les URLs : Vue technique",
    description: "Apprenez comment Googlebot découvre, crawle et indexe les URLs. Couvre le budget de crawl, le rendering et la découverte d'URLs.",
    body: `<p>Comprendre comment les moteurs de recherche crawlent votre site vous aide à construire des structures d'URL qui sont indexées efficacement.</p><h2>Le processus de crawl</h2><ol><li><strong>Découverte :</strong> Googlebot trouve les URLs via les sitemaps, les liens internes et les backlinks externes</li><li><strong>Crawling :</strong> Googlebot récupère le contenu de la page (HTML, CSS, JS)</li><li><strong>Rendering :</strong> Le JavaScript est exécuté pour obtenir le DOM final</li><li><strong>Indexation :</strong> Le contenu est traité et ajouté à l'index</li></ol><h2>Budget de crawl</h2><p>Google alloue un budget de crawl par site — le nombre de pages qu'il crawlera sur une période donnée. Des structures d'URL propres et des sitemaps corrects maximisent votre budget.</p><h2>Générez des URLs propres</h2><p>Utilisez le <a href="%SLUG%">générateur de slugs d'URL</a> pour des URLs propres et crawlables.</p>`,
  }),
};
