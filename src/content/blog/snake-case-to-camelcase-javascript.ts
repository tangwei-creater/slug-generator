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
    description: "JavaScriptとTypeScriptでsnake_caseをcamelCaseに変換するコード例。JSONキー変換も含みます。",
    body: `<p>snake_caseのAPIレスポンスをcamelCaseに変換するのは、フロントエンドで最も一般的なタスクの一つです。</p>
<h2>単純な文字列変換</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>JSONキーの一括変換</h2>
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
<h2>ライブラリの活用</h2>
<p><code>humps</code>、<code>camelcase-keys</code>、<code>change-case</code>がこの用途で人気のnpmパッケージです。</p>
<h2>オンラインツール</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "snake_case in camelCase umwandeln in JavaScript",
    description: "Codebeispiele für die Konvertierung von snake_case zu camelCase in JavaScript und TypeScript, einschließlich JSON-Key-Konvertierung.",
    body: `<p>Die Konvertierung von snake_case-API-Antworten zu camelCase ist eine der häufigsten Frontend-Aufgaben.</p>
<h2>Einfache String-Konvertierung</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Alle JSON-Schlüssel konvertieren</h2>
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
<h2>Bibliotheken verwenden</h2>
<p><code>humps</code>, <code>camelcase-keys</code> und <code>change-case</code> sind beliebte npm-Pakete dafür.</p>
<h2>Online-Tool</h2>
<p>Verwenden Sie den <a href="%CAMEL%">camelCase-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir snake_case a camelCase en JavaScript",
    description: "Ejemplos de código para convertir snake_case a camelCase en JavaScript y TypeScript, incluyendo conversión de claves JSON.",
    body: `<p>Convertir respuestas API en snake_case a camelCase es una de las tareas frontend más comunes.</p>
<h2>Conversión simple de cadena</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Convertir todas las claves JSON</h2>
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
<h2>Usando bibliotecas</h2>
<p><code>humps</code>, <code>camelcase-keys</code> y <code>change-case</code> son paquetes npm populares para esto.</p>
<h2>Herramienta online</h2>
<p>Usa el <a href="%CAMEL%">conversor camelCase</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter snake_case para camelCase em JavaScript",
    description: "Exemplos de código para converter snake_case para camelCase em JavaScript e TypeScript, incluindo conversão de chaves JSON.",
    body: `<p>Converter respostas API em snake_case para camelCase é uma das tarefas frontend mais comuns.</p>
<h2>Conversão simples de string</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Converter todas as chaves JSON</h2>
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
<h2>Usando bibliotecas</h2>
<p><code>humps</code>, <code>camelcase-keys</code> e <code>change-case</code> são pacotes npm populares para isso.</p>
<h2>Ferramenta online</h2>
<p>Use o <a href="%CAMEL%">conversor camelCase</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir snake_case en camelCase en JavaScript",
    description: "Exemples de code pour convertir snake_case en camelCase en JavaScript et TypeScript, y compris la conversion de clés JSON.",
    body: `<p>Convertir les réponses API en snake_case vers camelCase est l'une des tâches frontend les plus courantes.</p>
<h2>Conversion simple de chaîne</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Convertir toutes les clés JSON</h2>
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
<h2>Utiliser des bibliothèques</h2>
<p><code>humps</code>, <code>camelcase-keys</code> et <code>change-case</code> sont des paquets npm populaires pour cela.</p>
<h2>Outil en ligne</h2>
<p>Utilisez le <a href="%CAMEL%">convertisseur camelCase</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
