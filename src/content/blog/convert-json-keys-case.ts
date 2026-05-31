import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "convert-json-keys-case", date: "2026-06-01", readTime: 4 };

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
    title: "How to Convert JSON Keys Between camelCase and snake_case",
    description: "Code examples and tools for converting JSON object keys between camelCase and snake_case in JavaScript and Python.",
    body: `<p>Converting JSON keys between naming conventions is essential when your frontend and backend use different styles.</p><h2>JavaScript: snake_case → camelCase</h2><pre><code>function camelizeKeys(obj) {
  if (Array.isArray(obj)) return obj.map(camelizeKeys);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [
        k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
        camelizeKeys(v)
      ])
    );
  }
  return obj;
}</code></pre><h2>Python: camelCase → snake_case</h2><pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre><h2>Online Tools</h2><p><a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a>.</p>`,
  }),
  ja: build("ja", {
    title: "JSONキーのcamelCase/snake_case変換方法",
    description: "JavaScriptとPythonでのJSONキー変換コード例。",
    body: `<p>フロントエンドとバックエンドで異なる命名規則を使う場合、JSONキーの変換が必要です。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">camelCaseに変換</a>、<a href="%JSON_SNAKE%">snake_caseに変換</a>。</p>`,
  }),
  de: build("de", {
    title: "JSON-Keys zwischen camelCase und snake_case konvertieren",
    description: "Codebeispiele für die JSON-Key-Konvertierung.",
    body: `<p>JSON-Key-Konvertierung zwischen Frontend und Backend Konventionen.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">Konvertieren</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir claves JSON entre camelCase y snake_case",
    description: "Ejemplos de código para la conversión de claves JSON.",
    body: `<p>Conversión de claves JSON entre convenciones de frontend y backend.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Convertir</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter chaves JSON entre camelCase e snake_case",
    description: "Exemplos de código para conversão de chaves JSON.",
    body: `<p>Conversão de chaves JSON entre convenções de frontend e backend.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Converter</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir les clés JSON entre camelCase et snake_case",
    description: "Exemples de code pour la conversion de clés JSON.",
    body: `<p>Conversion de clés JSON entre conventions frontend et backend.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertir</a>.</p>`,
  }),
};
