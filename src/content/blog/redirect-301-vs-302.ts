import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "redirect-301-vs-302", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "301 vs 302 Redirect: When to Use Which (SEO Guide)",
    description: "Learn the difference between 301 and 302 redirects, their SEO impact, and when to use each type.",
    body: `<p>Choosing the wrong redirect type can silently damage your SEO. Here's the definitive guide.</p>
<h2>Quick Comparison</h2>
<table><thead><tr><th>Feature</th><th>301 (Permanent)</th><th>302 (Temporary)</th></tr></thead><tbody>
<tr><td>Meaning</td><td>Page permanently moved</td><td>Page temporarily moved</td></tr>
<tr><td>SEO equity transfer</td><td>Passes ~95-99% of link equity</td><td>May not pass link equity</td></tr>
<tr><td>Google indexing</td><td>Indexes the new URL</td><td>May keep indexing the old URL</td></tr>
<tr><td>Browser caching</td><td>Cached indefinitely</td><td>Not cached by default</td></tr>
</tbody></table>
<h2>When to Use 301</h2>
<ul>
<li>You changed a URL slug permanently</li>
<li>You moved a page to a new domain</li>
<li>You merged two pages into one</li>
<li>You switched from HTTP to HTTPS</li>
</ul>
<h2>When to Use 302</h2>
<ul>
<li>A/B testing different URLs</li>
<li>Temporary maintenance page</li>
<li>Geo-based redirects (showing different content by country)</li>
</ul>
<h2>Avoid Needing Redirects</h2>
<p>Set the right slug from the start with our <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "301 vs 302リダイレクト：使い分けガイド",
    description: "301と302リダイレクトの違い、SEOへの影響、使い分け。",
    body: `<p>301は永続的移動でリンク評価を引き継ぎます。302は一時的移動。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "301 vs 302 Redirect: Wann welchen verwenden?",
    description: "Unterschied zwischen 301 und 302 Redirects.",
    body: `<p>301 = permanent, überträgt Link-Equity. 302 = temporär.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "301 vs 302 Redirect: Cuándo usar cada uno",
    description: "Diferencia entre redirecciones 301 y 302.",
    body: `<p>301 = permanente, transfiere link equity. 302 = temporal.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`,
  }),
  pt: build("pt", {
    title: "301 vs 302 Redirect: Quando usar cada um",
    description: "Diferença entre redirecionamentos 301 e 302.",
    body: `<p>301 = permanente, transfere link equity. 302 = temporário.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`,
  }),
  fr: build("fr", {
    title: "301 vs 302 Redirect : Quand utiliser lequel ?",
    description: "Différence entre redirections 301 et 302.",
    body: `<p>301 = permanent, transfère le link equity. 302 = temporaire.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`,
  }),
};
