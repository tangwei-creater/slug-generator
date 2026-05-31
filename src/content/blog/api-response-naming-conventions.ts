import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "api-response-naming-conventions", date: "2026-06-01", readTime: 4 };

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
    title: "API Response Naming Conventions: A Comprehensive Guide",
    description: "Learn how to name fields in API responses consistently. Covers timestamps, IDs, booleans, enums, and pagination.",
    body: `<p>Consistent field naming in API responses reduces confusion and makes your API intuitive for consumers.</p><h2>Common Patterns</h2><table><thead><tr><th>Field Type</th><th>Pattern</th><th>Examples</th></tr></thead><tbody><tr><td>ID</td><td>resource + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr><tr><td>Timestamp</td><td>verb + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr><tr><td>Boolean</td><td>is/has + adjective</td><td><code>isActive</code>, <code>hasVerified</code></td></tr><tr><td>Count</td><td>noun + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr><tr><td>URL</td><td>noun + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr></tbody></table><h2>Pagination</h2><pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre><h2>Convert</h2><p><a href="%JSON_CAMEL%">camelCase</a> or <a href="%JSON_SNAKE%">snake_case</a> JSON key converter.</p>`,
  }),
  ja: build("ja", {
    title: "APIレスポンスの命名規則：包括的ガイド",
    description: "APIレスポンスのフィールド命名パターン。タイムスタンプ、ID、ブール値。",
    body: `<p>APIレスポンスの一貫した命名でAPIが直感的になります。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">JSONキー変換</a>。</p>`,
  }),
  de: build("de", {
    title: "API-Response-Namenskonventionen: Umfassender Leitfaden",
    description: "Feldbenennungsmuster in API-Responses.",
    body: `<p>Konsistente Benennung macht APIs intuitiv.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en respuestas API: Guía completa",
    description: "Patrones de nombres de campos en respuestas API.",
    body: `<p>Nombres consistentes hacen las APIs intuitivas.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em respostas API: Guia completo",
    description: "Padrões de nomes de campos em respostas API.",
    body: `<p>Nomes consistentes tornam as APIs intuitivas.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des réponses API : Guide complet",
    description: "Modèles de nommage de champs dans les réponses API.",
    body: `<p>Des noms cohérents rendent les APIs intuitives.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertisseur</a>.</p>`,
  }),
};
