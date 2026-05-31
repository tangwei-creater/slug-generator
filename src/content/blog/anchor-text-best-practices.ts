import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "anchor-text-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Anchor Text Best Practices: Types, Examples, and SEO Impact",
    description: "Learn anchor text types, best practices, and how to optimize your internal and external link text for SEO.",
    body: `<p>Anchor text is the clickable text in a hyperlink. It tells search engines what the linked page is about.</p><h2>Types of Anchor Text</h2><table><thead><tr><th>Type</th><th>Example</th><th>SEO Value</th></tr></thead><tbody><tr><td>Exact match</td><td><code><a>snake case converter</a></code></td><td>High (use sparingly)</td></tr><tr><td>Partial match</td><td><code><a>convert to snake case</a></code></td><td>High (safest)</td></tr><tr><td>Branded</td><td><code><a>SlugGenerator.app</a></code></td><td>Medium</td></tr><tr><td>Generic</td><td><code><a>click here</a></code></td><td>Low</td></tr><tr><td>Naked URL</td><td><code><a>sluggenerator.app</a></code></td><td>Low</td></tr></tbody></table><h2>Best Practices</h2><ul><li>Use descriptive, keyword-rich anchor text</li><li>Vary your anchor text — avoid exact-match overuse</li><li>Make it natural within the sentence</li><li>Avoid generic text like "click here" or "read more"</li></ul><p>Start with clean URLs using our <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "アンカーテキストのベストプラクティス：種類と例",
    description: "アンカーテキストの種類、ベストプラクティス、SEOへの影響。",
    body: `<p>アンカーテキストはリンクのクリック可能なテキスト。検索エンジンにリンク先の内容を伝えます。</p>`,
  }),
  de: build("de", {
    title: "Ankertext Best Practices: Typen, Beispiele und SEO",
    description: "Ankertext-Typen und SEO-Optimierung.",
    body: `<p>Ankertext sagt Suchmaschinen, worum es auf der verlinkten Seite geht.</p>`,
  }),
  es: build("es", {
    title: "Mejores prácticas de texto ancla: Tipos, ejemplos y SEO",
    description: "Tipos de texto ancla y optimización SEO.",
    body: `<p>El texto ancla dice a los buscadores de qué trata la página enlazada.</p>`,
  }),
  pt: build("pt", {
    title: "Melhores práticas de texto âncora: Tipos, exemplos e SEO",
    description: "Tipos de texto âncora e otimização SEO.",
    body: `<p>O texto âncora diz aos buscadores sobre o que é a página vinculada.</p>`,
  }),
  fr: build("fr", {
    title: "Bonnes pratiques de texte d'ancrage : Types, exemples et SEO",
    description: "Types de texte d'ancrage et optimisation SEO.",
    body: `<p>Le texte d'ancrage indique aux moteurs de recherche le sujet de la page liée.</p>`,
  }),
};
