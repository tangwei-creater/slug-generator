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
    description: "APIレスポンスのフィールドを一貫して命名する方法を学びましょう。タイムスタンプ、ID、ブール値、Enum、ページネーションを解説します。",
    body: `<p>APIレスポンスのフィールド名を一貫させることで、混乱を減らしAPIを直感的にできます。</p>
<h2>よくあるパターン</h2>
<table><thead><tr><th>フィールド型</th><th>パターン</th><th>例</th></tr></thead><tbody>
<tr><td>ID</td><td>リソース + Id/id</td><td><code>userId</code>、<code>orderId</code></td></tr>
<tr><td>タイムスタンプ</td><td>動詞 + At/at</td><td><code>createdAt</code>、<code>updatedAt</code></td></tr>
<tr><td>Boolean</td><td>is/has + 形容詞</td><td><code>isActive</code>、<code>hasVerified</code></td></tr>
<tr><td>カウント</td><td>名詞 + Count</td><td><code>itemCount</code>、<code>pageCount</code></td></tr>
<tr><td>URL</td><td>名詞 + Url</td><td><code>avatarUrl</code>、<code>websiteUrl</code></td></tr>
</tbody></table>
<h2>ページネーション</h2>
<pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre>
<h2>変換</h2>
<p><a href="%JSON_CAMEL%">camelCase JSONキーコンバーター</a>または<a href="%JSON_SNAKE%">snake_case JSONキーコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "API-Response-Namenskonventionen: Umfassender Leitfaden",
    description: "Lernen Sie, wie Sie Felder in API-Responses konsistent benennen. Zeitstempel, IDs, Booleans, Enums und Paginierung.",
    body: `<p>Konsistente Feldbenennung in API-Responses reduziert Verwirrung und macht Ihre API für Nutzer intuitiv.</p>
<h2>Häufige Muster</h2>
<table><thead><tr><th>Feldtyp</th><th>Muster</th><th>Beispiele</th></tr></thead><tbody>
<tr><td>ID</td><td>Ressource + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr>
<tr><td>Zeitstempel</td><td>Verb + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr>
<tr><td>Boolean</td><td>is/has + Adjektiv</td><td><code>isActive</code>, <code>hasVerified</code></td></tr>
<tr><td>Anzahl</td><td>Substantiv + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr>
<tr><td>URL</td><td>Substantiv + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr>
</tbody></table>
<h2>Paginierung</h2>
<pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre>
<h2>Umwandeln</h2>
<p>Verwenden Sie den <a href="%JSON_CAMEL%">camelCase</a>- oder <a href="%JSON_SNAKE%">snake_case</a>-JSON-Key-Konverter.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en respuestas API: Guía completa",
    description: "Aprende a nombrar campos en respuestas API de forma consistente. Cubre timestamps, IDs, booleanos, enums y paginación.",
    body: `<p>La nomenclatura consistente en respuestas API reduce la confusión y hace tu API intuitiva para los consumidores.</p>
<h2>Patrones comunes</h2>
<table><thead><tr><th>Tipo de campo</th><th>Patrón</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td>ID</td><td>recurso + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr>
<tr><td>Timestamp</td><td>verbo + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr>
<tr><td>Boolean</td><td>is/has + adjetivo</td><td><code>isActive</code>, <code>hasVerified</code></td></tr>
<tr><td>Conteo</td><td>sustantivo + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr>
<tr><td>URL</td><td>sustantivo + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr>
</tbody></table>
<h2>Paginación</h2>
<pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre>
<h2>Convertir</h2>
<p>Usa el conversor de claves JSON a <a href="%JSON_CAMEL%">camelCase</a> o <a href="%JSON_SNAKE%">snake_case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em respostas API: Guia completo",
    description: "Aprenda a nomear campos em respostas API de forma consistente. Cobre timestamps, IDs, booleanos, enums e paginação.",
    body: `<p>Nomenclatura consistente em respostas API reduz confusão e torna sua API intuitiva para os consumidores.</p>
<h2>Padrões comuns</h2>
<table><thead><tr><th>Tipo de campo</th><th>Padrão</th><th>Exemplos</th></tr></thead><tbody>
<tr><td>ID</td><td>recurso + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr>
<tr><td>Timestamp</td><td>verbo + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr>
<tr><td>Boolean</td><td>is/has + adjetivo</td><td><code>isActive</code>, <code>hasVerified</code></td></tr>
<tr><td>Contagem</td><td>substantivo + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr>
<tr><td>URL</td><td>substantivo + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr>
</tbody></table>
<h2>Paginação</h2>
<pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre>
<h2>Converter</h2>
<p>Use o conversor de chaves JSON para <a href="%JSON_CAMEL%">camelCase</a> ou <a href="%JSON_SNAKE%">snake_case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des réponses API : Guide complet",
    description: "Apprenez à nommer les champs des réponses API de manière cohérente. Timestamps, IDs, booléens, enums et pagination.",
    body: `<p>Un nommage cohérent des champs dans les réponses API réduit la confusion et rend votre API intuitive pour les consommateurs.</p>
<h2>Patterns courants</h2>
<table><thead><tr><th>Type de champ</th><th>Pattern</th><th>Exemples</th></tr></thead><tbody>
<tr><td>ID</td><td>ressource + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr>
<tr><td>Timestamp</td><td>verbe + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr>
<tr><td>Boolean</td><td>is/has + adjectif</td><td><code>isActive</code>, <code>hasVerified</code></td></tr>
<tr><td>Compteur</td><td>nom + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr>
<tr><td>URL</td><td>nom + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr>
</tbody></table>
<h2>Pagination</h2>
<pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre>
<h2>Convertir</h2>
<p>Utilisez le convertisseur de clés JSON en <a href="%JSON_CAMEL%">camelCase</a> ou <a href="%JSON_SNAKE%">snake_case</a>.</p>`,
  }),
};
