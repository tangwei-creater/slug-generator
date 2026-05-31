import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "rest-api-naming-conventions", date: "2026-06-01", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "REST API Naming Conventions: URLs, Methods, and JSON Keys",
    description: "Learn REST API naming best practices for endpoints, HTTP methods, query parameters, and response body keys.",
    body: `<p>A well-named REST API is intuitive, consistent, and self-documenting. These conventions are followed by most production APIs.</p>
<h2>URL Path Conventions</h2>
<ul>
<li>Use <strong>kebab-case</strong> or <strong>lowercase</strong> for URL paths: <code>/user-profiles</code></li>
<li>Use <strong>plural nouns</strong> for collections: <code>/users</code>, <code>/orders</code></li>
<li>Use <strong>resource IDs</strong> for individual items: <code>/users/123</code></li>
<li>Nest sub-resources: <code>/users/123/orders</code></li>
<li>Avoid verbs in URLs: <code>POST /users</code> not <code>POST /create-user</code></li>
</ul>
<h2>HTTP Methods</h2>
<table><thead><tr><th>Method</th><th>Purpose</th><th>Example</th></tr></thead><tbody>
<tr><td>GET</td><td>Read</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Create</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Full update</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Partial update</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Delete</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>JSON Response Keys</h2>
<p>Use <strong>camelCase</strong> (Google style) or <strong>snake_case</strong> (GitHub/Stripe style). Pick one and be consistent across all endpoints.</p>
<h2>Query Parameters</h2>
<p>Use snake_case or camelCase consistently: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Convert Formats</h2>
<p><a href="%KEBAB%">kebab-case converter</a> for URLs, <a href="%CAMEL%">camelCase</a> or <a href="%SNAKE%">snake_case</a> for JSON keys. Try the <a href="%HUB%">hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "REST API命名規則：URL、メソッド、JSONキー",
    description: "REST APIのエンドポイント、HTTPメソッド、レスポンスキーの命名ベストプラクティス。",
    body: `<p>適切な命名のREST APIは直感的で一貫性があります。URLはkebab-case、JSONキーはcamelCaseまたはsnake_case。</p><h2>変換</h2><p><a href="%HUB%">ケース変換ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "REST-API-Namenskonventionen: URLs, Methoden und JSON-Keys",
    description: "Best Practices für REST-API-Endpunkte und JSON-Keys.",
    body: `<p>URLs: kebab-case, JSON-Keys: camelCase oder snake_case. Konsistenz ist entscheidend.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en REST API: URLs, métodos y claves JSON",
    description: "Mejores prácticas para endpoints REST y claves JSON.",
    body: `<p>URLs: kebab-case, claves JSON: camelCase o snake_case. La consistencia es clave.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em REST API: URLs, métodos e chaves JSON",
    description: "Melhores práticas para endpoints REST e chaves JSON.",
    body: `<p>URLs: kebab-case, chaves JSON: camelCase ou snake_case. Consistência é fundamental.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage REST API : URLs, méthodes et clés JSON",
    description: "Bonnes pratiques pour endpoints REST et clés JSON.",
    body: `<p>URLs : kebab-case, clés JSON : camelCase ou snake_case. La cohérence est essentielle.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
