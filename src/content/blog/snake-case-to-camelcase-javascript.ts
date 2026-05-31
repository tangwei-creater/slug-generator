import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "snake-case-to-camelcase-javascript", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Convert snake_case to camelCase in JavaScript",
    description: "Code examples for converting snake_case to camelCase in JavaScript and TypeScript, including JSON key conversion.",
    body: `<p>Converting snake_case API responses to camelCase is one of the most common frontend tasks.</p>
<h2>Simple String Conversion</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Convert All JSON Keys</h2>
<pre><code>function camelizeKeys(obj) {
  if (Array.isArray(obj)) return obj.map(camelizeKeys);
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [snakeToCamel(k), camelizeKeys(v)])
    );
  }
  return obj;
}

const api = { user_name: "Alice", created_at: "2026-01-01" };
camelizeKeys(api); // { userName: "Alice", createdAt: "2026-01-01" }</code></pre>
<h2>Using Libraries</h2>
<p><code>humps</code>, <code>camelcase-keys</code>, and <code>change-case</code> are popular npm packages for this.</p>
<h2>Online Tool</h2>
<p>Use the <a href="%CAMEL%">camelCase converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "JavaScriptでsnake_caseをcamelCaseに変換する方法",
    description: "JavaScriptとTypeScriptでのsnake_caseからcamelCase変換コード例。",
    body: `<p>snake_case APIレスポンスをcamelCaseに変換するのはフロントエンドの一般的なタスクです。</p><h2>変換</h2><p><a href="%CAMEL%">camelCaseコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "snake_case in camelCase umwandeln in JavaScript",
    description: "Codebeispiele für JavaScript und TypeScript.",
    body: `<p>snake_case zu camelCase Konvertierung in JavaScript.</p><h2>Konvertierung</h2><p><a href="%CAMEL%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir snake_case a camelCase en JavaScript",
    description: "Ejemplos de código en JavaScript y TypeScript.",
    body: `<p>Conversión de snake_case a camelCase en JavaScript.</p><h2>Conversión</h2><p><a href="%CAMEL%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter snake_case para camelCase em JavaScript",
    description: "Exemplos de código em JavaScript e TypeScript.",
    body: `<p>Conversão de snake_case para camelCase em JavaScript.</p><h2>Conversão</h2><p><a href="%CAMEL%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir snake_case en camelCase en JavaScript",
    description: "Exemples de code en JavaScript et TypeScript.",
    body: `<p>Conversion de snake_case en camelCase en JavaScript.</p><h2>Conversion</h2><p><a href="%CAMEL%">Convertisseur</a>.</p>`,
  }),
};
