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
    description: "GooglebotのURL発見、クロール、インデックスプロセスを解説。",
    body: `<p>検索エンジンのクロールプロセス：発見→クロール→レンダリング→インデックス。</p>`,
  }),
  de: build("de", {
    title: "Wie Suchmaschinen URLs crawlen: Technischer Überblick",
    description: "Wie Googlebot URLs entdeckt und indexiert.",
    body: `<p>Der Crawl-Prozess: Entdeckung → Crawling → Rendering → Indexierung.</p>`,
  }),
  es: build("es", {
    title: "Cómo los motores de búsqueda rastrean URLs: Visión técnica",
    description: "Cómo Googlebot descubre e indexa URLs.",
    body: `<p>El proceso de rastreo: descubrimiento → crawling → renderizado → indexación.</p>`,
  }),
  pt: build("pt", {
    title: "Como os mecanismos de busca rastreiam URLs: Visão técnica",
    description: "Como o Googlebot descobre e indexa URLs.",
    body: `<p>O processo de rastreamento: descoberta → crawling → renderização → indexação.</p>`,
  }),
  fr: build("fr", {
    title: "Comment les moteurs de recherche crawlent les URLs : Vue technique",
    description: "Comment Googlebot découvre et indexe les URLs.",
    body: `<p>Le processus de crawl : découverte → crawling → rendering → indexation.</p>`,
  }),
};
