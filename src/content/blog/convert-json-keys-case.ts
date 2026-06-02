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
    description: "JavaScriptとPythonでJSONオブジェクトキーをcamelCaseとsnake_case間で変換するコード例とツールを紹介します。",
    body: `<p>フロントエンドとバックエンドで異なる命名規則を使う場合、JSONキーの変換が不可欠です。</p>
<h2>JavaScript：snake_case → camelCase</h2>
<pre><code>function camelizeKeys(obj) {
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
}</code></pre>
<h2>Python：camelCase → snake_case</h2>
<pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre>
<h2>オンラインツール</h2>
<p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに変換</a>または<a href="%JSON_SNAKE%">JSONキーをsnake_caseに変換</a>。</p>`,
  }),
  de: build("de", {
    title: "JSON-Keys zwischen camelCase und snake_case konvertieren",
    description: "Codebeispiele und Tools für die Konvertierung von JSON-Objektschlüsseln zwischen camelCase und snake_case in JavaScript und Python.",
    body: `<p>Die Konvertierung von JSON-Schlüsseln zwischen Namenskonventionen ist unerlässlich, wenn Frontend und Backend unterschiedliche Stile verwenden.</p>
<h2>JavaScript: snake_case → camelCase</h2>
<pre><code>function camelizeKeys(obj) {
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
}</code></pre>
<h2>Python: camelCase → snake_case</h2>
<pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre>
<h2>Online-Tools</h2>
<p><a href="%JSON_CAMEL%">JSON-Keys zu camelCase</a> oder <a href="%JSON_SNAKE%">JSON-Keys zu snake_case</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir claves JSON entre camelCase y snake_case",
    description: "Ejemplos de código y herramientas para convertir claves de objetos JSON entre camelCase y snake_case en JavaScript y Python.",
    body: `<p>Convertir claves JSON entre convenciones de nombres es esencial cuando tu frontend y backend usan estilos diferentes.</p>
<h2>JavaScript: snake_case → camelCase</h2>
<pre><code>function camelizeKeys(obj) {
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
}</code></pre>
<h2>Python: camelCase → snake_case</h2>
<pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre>
<h2>Herramientas online</h2>
<p><a href="%JSON_CAMEL%">Claves JSON a camelCase</a> o <a href="%JSON_SNAKE%">claves JSON a snake_case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter chaves JSON entre camelCase e snake_case",
    description: "Exemplos de código e ferramentas para converter chaves de objetos JSON entre camelCase e snake_case em JavaScript e Python.",
    body: `<p>Converter chaves JSON entre convenções de nomes é essencial quando seu frontend e backend usam estilos diferentes.</p>
<h2>JavaScript: snake_case → camelCase</h2>
<pre><code>function camelizeKeys(obj) {
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
}</code></pre>
<h2>Python: camelCase → snake_case</h2>
<pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre>
<h2>Ferramentas online</h2>
<p><a href="%JSON_CAMEL%">Chaves JSON para camelCase</a> ou <a href="%JSON_SNAKE%">chaves JSON para snake_case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir les clés JSON entre camelCase et snake_case",
    description: "Exemples de code et outils pour convertir les clés d'objets JSON entre camelCase et snake_case en JavaScript et Python.",
    body: `<p>Convertir les clés JSON entre conventions de nommage est essentiel quand votre frontend et backend utilisent des styles différents.</p>
<h2>JavaScript : snake_case → camelCase</h2>
<pre><code>function camelizeKeys(obj) {
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
}</code></pre>
<h2>Python : camelCase → snake_case</h2>
<pre><code>import re
def snake_keys(obj):
    if isinstance(obj, dict):
        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [snake_keys(i) for i in obj]
    return obj</code></pre>
<h2>Outils en ligne</h2>
<p><a href="%JSON_CAMEL%">Clés JSON en camelCase</a> ou <a href="%JSON_SNAKE%">clés JSON en snake_case</a>.</p>`,
  }),
};
