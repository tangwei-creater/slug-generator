import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "javascript-naming-conventions", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "JavaScript Naming Conventions: Variables, Functions, Classes & More",
    description: "Learn JavaScript naming conventions for variables, functions, classes, constants, and files. Covers camelCase, PascalCase, and SCREAMING_SNAKE_CASE with examples.",
    body: `
<p>JavaScript's naming conventions are not enforced by the language itself, but they are universally followed in the ecosystem. This guide covers what every JavaScript and TypeScript developer should know.</p>

<h2>Variables and Functions: camelCase</h2>
<p>Variables, functions, and method names use camelCase — the first word is lowercase, subsequent words are capitalized:</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>Classes and Components: PascalCase</h2>
<p>Classes, React components, and constructor functions use PascalCase:</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// React components
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>Constants: SCREAMING_SNAKE_CASE</h2>
<p>True constants — values that never change and are known at compile time — use uppercase with underscores:</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>Note: not every <code>const</code> variable is a "constant" in this sense. <code>const user = getUser()</code> is a regular variable — use camelCase.</p>

<h2>Boolean Variables</h2>
<p>Prefix booleans with <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code> for clarity:</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>Private Fields</h2>
<p>Modern JavaScript uses the <code>#</code> prefix for truly private class fields. The older underscore convention (<code>_name</code>) is still common in libraries:</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>File Names</h2>
<table>
<thead><tr><th>Type</th><th>Convention</th><th>Example</th></tr></thead>
<tbody>
<tr><td>React component</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Utility module</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>Config file</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Test file</td><td>Match source</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>CSS module</td><td>PascalCase or kebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>TypeScript Specifics</h2>
<ul>
<li><strong>Interfaces:</strong> PascalCase, no <code>I</code> prefix. <code>UserProps</code>, not <code>IUserProps</code>.</li>
<li><strong>Type aliases:</strong> PascalCase. <code>type ApiResponse = { ... }</code></li>
<li><strong>Enums:</strong> PascalCase for the enum, PascalCase for members. <code>enum Color { Red, Green, Blue }</code></li>
<li><strong>Generics:</strong> Single uppercase letter. <code>T</code>, <code>K</code>, <code>V</code></li>
</ul>

<h2>Event Handlers in React</h2>
<p>Prefix event handler functions with <code>handle</code>, and props with <code>on</code>:</p>
<pre><code>// Props: onSubmit, onClick, onChange
// Handlers: handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>Convert to JavaScript Conventions</h2>
<p>Working with a Python API that returns snake_case? Use our <a href="%CAMEL%">camelCase converter</a> to transform keys. Need to name a React component? Try the <a href="%PASCAL%">PascalCase converter</a>. Compare all formats in the <a href="%HUB%">case converter hub</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "JavaScriptの命名規則：変数、関数、クラスなど",
    description: "JavaScriptの命名規則を解説。変数、関数、クラス、定数、ファイル名のcamelCase、PascalCase、SCREAMING_SNAKE_CASEの使い分け。",
    body: `
<p>JavaScriptの命名規則は言語自体では強制されませんが、エコシステム全体で広く従われています。</p>
<h2>変数と関数：camelCase</h2>
<p>変数と関数はcamelCaseを使用：<code>userName</code>、<code>getUserById()</code></p>
<h2>クラスとコンポーネント：PascalCase</h2>
<p>クラスとReactコンポーネントはPascalCase：<code>UserAccount</code>、<code>UserProfile</code></p>
<h2>定数：SCREAMING_SNAKE_CASE</h2>
<p>真の定数は大文字とアンダースコア：<code>MAX_RETRY_COUNT</code></p>
<h2>変換ツール</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>や<a href="%HUB%">ケース変換ハブ</a>で変換できます。</p>
`,
  }),
  de: build("de", {
    title: "JavaScript-Namenskonventionen: Variablen, Funktionen, Klassen & mehr",
    description: "Lernen Sie JavaScript-Namenskonventionen für Variablen, Funktionen, Klassen und Konstanten. camelCase, PascalCase und SCREAMING_SNAKE_CASE mit Beispielen.",
    body: `
<p>JavaScripts Namenskonventionen werden von der Sprache nicht erzwungen, aber im gesamten Ökosystem universell befolgt.</p>
<h2>Variablen und Funktionen: camelCase</h2>
<p><code>userName</code>, <code>getUserById()</code></p>
<h2>Klassen und Komponenten: PascalCase</h2>
<p><code>UserAccount</code>, <code>UserProfile</code></p>
<h2>Konstanten: SCREAMING_SNAKE_CASE</h2>
<p><code>MAX_RETRY_COUNT</code></p>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a> oder den <a href="%HUB%">Konvertierungs-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en JavaScript: Variables, funciones, clases y más",
    description: "Aprende las convenciones de nombres en JavaScript para variables, funciones, clases y constantes. camelCase, PascalCase y SCREAMING_SNAKE_CASE con ejemplos.",
    body: `
<p>Las convenciones de nombres de JavaScript no son impuestas por el lenguaje, pero se siguen universalmente en el ecosistema.</p>
<h2>Variables y funciones: camelCase</h2>
<p><code>userName</code>, <code>getUserById()</code></p>
<h2>Clases y componentes: PascalCase</h2>
<p><code>UserAccount</code>, <code>UserProfile</code></p>
<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p><code>MAX_RETRY_COUNT</code></p>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%CAMEL%">conversor camelCase</a> o el <a href="%HUB%">hub de conversión</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em JavaScript: Variáveis, funções, classes e mais",
    description: "Aprenda as convenções de nomes em JavaScript para variáveis, funções, classes e constantes. camelCase, PascalCase e SCREAMING_SNAKE_CASE com exemplos.",
    body: `
<p>As convenções de nomes do JavaScript não são impostas pela linguagem, mas são seguidas universalmente no ecossistema.</p>
<h2>Variáveis e funções: camelCase</h2>
<p><code>userName</code>, <code>getUserById()</code></p>
<h2>Classes e componentes: PascalCase</h2>
<p><code>UserAccount</code>, <code>UserProfile</code></p>
<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p><code>MAX_RETRY_COUNT</code></p>
<h2>Conversão</h2>
<p>Use nosso <a href="%CAMEL%">conversor camelCase</a> ou o <a href="%HUB%">hub de conversão</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage JavaScript : Variables, fonctions, classes et plus",
    description: "Apprenez les conventions de nommage JavaScript pour les variables, fonctions, classes et constantes. camelCase, PascalCase et SCREAMING_SNAKE_CASE avec exemples.",
    body: `
<p>Les conventions de nommage JavaScript ne sont pas imposées par le langage, mais sont universellement suivies dans l'écosystème.</p>
<h2>Variables et fonctions : camelCase</h2>
<p><code>userName</code>, <code>getUserById()</code></p>
<h2>Classes et composants : PascalCase</h2>
<p><code>UserAccount</code>, <code>UserProfile</code></p>
<h2>Constantes : SCREAMING_SNAKE_CASE</h2>
<p><code>MAX_RETRY_COUNT</code></p>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a> ou le <a href="%HUB%">hub de conversion</a>.</p>
`,
  }),
};
