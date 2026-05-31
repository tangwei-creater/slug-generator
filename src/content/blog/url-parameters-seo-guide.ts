import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "url-parameters-seo-guide", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "URL Parameters and SEO: How to Avoid Crawl Waste",
    description: "Learn how URL parameters affect SEO, cause crawl budget waste, and how to manage them correctly.",
    body: `<p>URL parameters (<code>?sort=price&page=2&color=blue</code>) can cause serious SEO issues if not managed properly.</p>
<h2>Problems Parameters Cause</h2>
<ul>
<li><strong>Duplicate content:</strong> <code>/shoes</code> and <code>/shoes?sort=price</code> may have nearly identical content</li>
<li><strong>Crawl waste:</strong> Googlebot crawls every parameter combination</li>
<li><strong>Index bloat:</strong> Thousands of parameterized URLs clog your index</li>
<li><strong>Link equity dilution:</strong> Backlinks spread across parameter variants</li>
</ul>
<h2>Solutions</h2>
<ul>
<li>Use <strong>canonical tags</strong> pointing to the base URL</li>
<li>Set parameter handling in <strong>Google Search Console</strong></li>
<li>Use <strong>robots.txt</strong> to block parameter-heavy paths</li>
<li>Use clean URL paths instead of parameters when possible</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> creates parameter-free slugs.</p>`,
  }),
  ja: build("ja", {
    title: "URLパラメータとSEO：クロール浪費を避ける方法",
    description: "URLパラメータがSEOに与える影響と正しい管理方法。",
    body: `<p>URLパラメータは重複コンテンツやクロール浪費の原因になります。canonical tags、Search Console設定で対処。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "URL-Parameter und SEO: Crawl-Verschwendung vermeiden",
    description: "Wie URL-Parameter SEO beeinflussen.",
    body: `<p>Parameter verursachen Duplicate Content und Crawl-Verschwendung.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Parámetros URL y SEO: Cómo evitar desperdicio de rastreo",
    description: "Cómo los parámetros URL afectan al SEO.",
    body: `<p>Los parámetros causan contenido duplicado y desperdicio de rastreo.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Parâmetros URL e SEO: Como evitar desperdício de rastreamento",
    description: "Como parâmetros URL afetam o SEO.",
    body: `<p>Parâmetros causam conteúdo duplicado e desperdício de rastreamento.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Paramètres URL et SEO : Comment éviter le gaspillage de crawl",
    description: "Comment les paramètres URL affectent le SEO.",
    body: `<p>Les paramètres causent du contenu dupliqué et du gaspillage de crawl.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`,
  }),
};
