import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "json-formatting-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%JSON_CAMEL%", p(l, "/json-keys-to-camelcase"))
    .replaceAll("%JSON_SNAKE%", p(l, "/json-keys-to-snake-case"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "JSON Formatting Best Practices: Structure, Naming, and Style",
    description: "Learn JSON formatting best practices for readable, consistent, and well-structured API responses.",
    body: `<p>Well-formatted JSON is easier to read, debug, and maintain. These best practices apply to API responses, config files, and data storage.</p><h2>Naming</h2><ul><li>Use consistent case (camelCase or snake_case)</li><li>Be descriptive: <code>createdAt</code> not <code>ca</code></li><li>Use plural for arrays: <code>"items"</code> not <code>"item"</code></li></ul><h2>Structure</h2><ul><li>Avoid nesting deeper than 3 levels</li><li>Use arrays for ordered collections, objects for key-value data</li><li>Include <code>null</code> for missing optional fields (don't omit them)</li></ul><h2>Convert Keys</h2><p>Use our <a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a>.</p>`,
  }),
  ja: build("ja", {
    title: "JSONフォーマットのベストプラクティス",
    description: "読みやすく一貫性のあるJSON構造のベストプラクティス。",
    body: `<p>整形されたJSONは読みやすく、デバッグしやすい。命名規則の統一が重要。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに</a>。</p>`,
  }),
  de: build("de", {
    title: "JSON-Formatierung: Best Practices",
    description: "Best Practices für lesbare JSON-Strukturen.",
    body: `<p>Gut formatiertes JSON ist leichter zu lesen und zu debuggen.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">JSON-Keys konvertieren</a>.</p>`,
  }),
  es: build("es", {
    title: "Mejores prácticas de formato JSON",
    description: "Best practices para JSON legible y consistente.",
    body: `<p>JSON bien formateado es más fácil de leer y depurar.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Convertir claves JSON</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Melhores práticas de formatação JSON",
    description: "Best practices para JSON legível e consistente.",
    body: `<p>JSON bem formatado é mais fácil de ler e depurar.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Converter chaves JSON</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Bonnes pratiques de formatage JSON",
    description: "Best practices pour un JSON lisible et cohérent.",
    body: `<p>Un JSON bien formaté est plus facile à lire et déboguer.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertir les clés JSON</a>.</p>`,
  }),
};
