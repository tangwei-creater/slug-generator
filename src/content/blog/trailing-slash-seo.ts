import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "trailing-slash-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Trailing Slash in URLs: Does It Matter for SEO?",
    description: "Learn whether a trailing slash affects SEO, how Google handles it, and how to configure your server correctly.",
    body: `<p>The trailing slash debate: is <code>/about/</code> the same as <code>/about</code>? For SEO, consistency is what matters.</p>
<h2>How Google Treats Them</h2>
<p>Google treats <code>/page</code> and <code>/page/</code> as different URLs by default. If both return 200, Google may index both — creating duplicate content.</p>
<h2>Server Behavior</h2>
<table><thead><tr><th>Platform</th><th>Default</th></tr></thead><tbody>
<tr><td>Apache</td><td>Adds trailing slash to directories</td></tr>
<tr><td>Nginx</td><td>No trailing slash by default</td></tr>
<tr><td>Next.js</td><td>No trailing slash (configurable)</td></tr>
<tr><td>WordPress</td><td>Trailing slash on posts</td></tr>
<tr><td>Netlify</td><td>Adds trailing slash</td></tr>
</tbody></table>
<h2>Best Practice</h2>
<p>Pick one format and 301 redirect the other. Set canonical URLs. Most modern frameworks use <strong>no trailing slash</strong>.</p>
<h2>Generate Clean URLs</h2>
<p><a href="%SLUG%">URL slug generator</a> creates clean slugs without trailing slashes.</p>`,
  }),
  ja: build("ja", {
    title: "URLの末尾スラッシュ：SEOに影響するか？",
    description: "末尾スラッシュがSEOに与える影響とサーバー設定方法。",
    body: `<p>末尾スラッシュの有無でGoogleは異なるURLとして扱います。一貫性が重要。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Trailing Slash in URLs: Ist er SEO-relevant?",
    description: "Ob ein abschließender Schrägstrich SEO beeinflusst.",
    body: `<p>Google behandelt /page und /page/ als verschiedene URLs. Konsistenz ist wichtig.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Barra final en URLs: ¿Importa para SEO?",
    description: "Si la barra final afecta al SEO.",
    body: `<p>Google trata /page y /page/ como URLs diferentes. La consistencia importa.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Barra final em URLs: Importa para SEO?",
    description: "Se a barra final afeta o SEO.",
    body: `<p>Google trata /page e /page/ como URLs diferentes. Consistência importa.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Slash final dans les URLs : Impact sur le SEO ?",
    description: "Si le slash final affecte le SEO.",
    body: `<p>Google traite /page et /page/ comme des URLs différentes. La cohérence compte.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`,
  }),
};
