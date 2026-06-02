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
    description: "JavaScriptの命名規則を解説。変数、関数、クラス、定数、ファイル名のcamelCase、PascalCase、SCREAMING_SNAKE_CASEの使い分けと具体例。",
    body: `
<p>JavaScriptの命名規則は言語自体では強制されませんが、エコシステム全体で広く従われています。このガイドではJavaScript/TypeScript開発者が知っておくべきことをすべてカバーします。</p>

<h2>変数と関数：camelCase</h2>
<p>変数、関数、メソッド名はcamelCaseを使用します。最初の単語は小文字、以降の単語は大文字で始まります：</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>クラスとコンポーネント：PascalCase</h2>
<p>クラス、Reactコンポーネント、コンストラクタ関数はPascalCaseを使用します：</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// Reactコンポーネント
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>定数：SCREAMING_SNAKE_CASE</h2>
<p>真の定数（値が変わることがなく、コンパイル時に既知のもの）は大文字とアンダースコアを使用します：</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>注意：すべての<code>const</code>変数がこの意味での「定数」ではありません。<code>const user = getUser()</code>は通常の変数なのでcamelCaseを使います。</p>

<h2>ブール変数</h2>
<p>ブール値には<code>is</code>、<code>has</code>、<code>can</code>、<code>should</code>をプレフィックスとして付けます：</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>プライベートフィールド</h2>
<p>モダンJavaScriptでは<code>#</code>プレフィックスで真にプライベートなクラスフィールドを定義します。古いアンダースコア規則（<code>_name</code>）もライブラリではまだ一般的です：</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>ファイル名</h2>
<table>
<thead><tr><th>タイプ</th><th>規則</th><th>例</th></tr></thead>
<tbody>
<tr><td>Reactコンポーネント</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>ユーティリティモジュール</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>設定ファイル</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>テストファイル</td><td>ソースに合わせる</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>CSSモジュール</td><td>PascalCaseまたはkebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>TypeScript固有の規則</h2>
<ul>
<li><strong>インターフェース：</strong>PascalCase、<code>I</code>プレフィックスなし。<code>UserProps</code>であり<code>IUserProps</code>ではない。</li>
<li><strong>型エイリアス：</strong>PascalCase。<code>type ApiResponse = { ... }</code></li>
<li><strong>列挙型：</strong>列挙型名もメンバーもPascalCase。<code>enum Color { Red, Green, Blue }</code></li>
<li><strong>ジェネリクス：</strong>大文字1文字。<code>T</code>、<code>K</code>、<code>V</code></li>
</ul>

<h2>Reactのイベントハンドラ</h2>
<p>イベントハンドラ関数には<code>handle</code>プレフィックス、propsには<code>on</code>プレフィックスを使います：</p>
<pre><code>// Props: onSubmit, onClick, onChange
// ハンドラ: handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>JavaScript規則に変換</h2>
<p>snake_caseを返すPython APIを扱っていますか？<a href="%CAMEL%">camelCaseコンバーター</a>でキーを変換できます。Reactコンポーネントの命名には<a href="%PASCAL%">PascalCaseコンバーター</a>をお試しください。すべての形式を<a href="%HUB%">ケース変換ハブ</a>で比較できます。</p>
`,
  }),
  de: build("de", {
    title: "JavaScript-Namenskonventionen: Variablen, Funktionen, Klassen & mehr",
    description: "Lernen Sie JavaScript-Namenskonventionen für Variablen, Funktionen, Klassen, Konstanten und Dateien. camelCase, PascalCase und SCREAMING_SNAKE_CASE mit Beispielen.",
    body: `
<p>JavaScripts Namenskonventionen werden von der Sprache nicht erzwungen, aber im gesamten Ökosystem universell befolgt. Dieser Guide deckt alles ab, was jeder JavaScript- und TypeScript-Entwickler wissen sollte.</p>

<h2>Variablen und Funktionen: camelCase</h2>
<p>Variablen, Funktionen und Methodennamen verwenden camelCase — das erste Wort ist kleingeschrieben, nachfolgende Wörter werden großgeschrieben:</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>Klassen und Komponenten: PascalCase</h2>
<p>Klassen, React-Komponenten und Konstruktorfunktionen verwenden PascalCase:</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// React-Komponenten
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>Konstanten: SCREAMING_SNAKE_CASE</h2>
<p>Echte Konstanten — Werte, die sich nie ändern und zur Kompilierzeit bekannt sind — verwenden Großbuchstaben mit Unterstrichen:</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>Hinweis: Nicht jede <code>const</code>-Variable ist in diesem Sinne eine „Konstante". <code>const user = getUser()</code> ist eine reguläre Variable — verwenden Sie camelCase.</p>

<h2>Boolean-Variablen</h2>
<p>Versehen Sie Booleans mit den Präfixen <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code> für Klarheit:</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>Private Felder</h2>
<p>Modernes JavaScript verwendet den <code>#</code>-Präfix für echte private Klassenfelder. Die ältere Unterstrich-Konvention (<code>_name</code>) ist in Bibliotheken noch üblich:</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>Dateinamen</h2>
<table>
<thead><tr><th>Typ</th><th>Konvention</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>React-Komponente</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Utility-Modul</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>Config-Datei</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Testdatei</td><td>Wie Quelldatei</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>CSS-Modul</td><td>PascalCase oder kebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>TypeScript-Besonderheiten</h2>
<ul>
<li><strong>Interfaces:</strong> PascalCase, kein <code>I</code>-Präfix. <code>UserProps</code>, nicht <code>IUserProps</code>.</li>
<li><strong>Type-Aliases:</strong> PascalCase. <code>type ApiResponse = { ... }</code></li>
<li><strong>Enums:</strong> PascalCase für das Enum, PascalCase für Mitglieder. <code>enum Color { Red, Green, Blue }</code></li>
<li><strong>Generics:</strong> Einzelner Großbuchstabe. <code>T</code>, <code>K</code>, <code>V</code></li>
</ul>

<h2>Event-Handler in React</h2>
<p>Event-Handler-Funktionen erhalten den Präfix <code>handle</code>, Props den Präfix <code>on</code>:</p>
<pre><code>// Props: onSubmit, onClick, onChange
// Handler: handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>In JavaScript-Konventionen konvertieren</h2>
<p>Arbeiten Sie mit einer Python-API, die snake_case zurückgibt? Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a> für die Schlüssel-Transformation. Brauchen Sie einen Namen für eine React-Komponente? Probieren Sie den <a href="%PASCAL%">PascalCase-Konverter</a>. Vergleichen Sie alle Formate im <a href="%HUB%">Konvertierungs-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en JavaScript: Variables, funciones, clases y más",
    description: "Aprende las convenciones de nombres en JavaScript para variables, funciones, clases, constantes y archivos. camelCase, PascalCase y SCREAMING_SNAKE_CASE con ejemplos.",
    body: `
<p>Las convenciones de nombres de JavaScript no son impuestas por el lenguaje, pero se siguen universalmente en el ecosistema. Esta guía cubre lo que todo desarrollador JavaScript y TypeScript debería saber.</p>

<h2>Variables y funciones: camelCase</h2>
<p>Variables, funciones y nombres de métodos usan camelCase — la primera palabra en minúscula, las siguientes con mayúscula inicial:</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>Clases y componentes: PascalCase</h2>
<p>Clases, componentes React y funciones constructoras usan PascalCase:</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// Componentes React
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Las constantes verdaderas — valores que nunca cambian y se conocen en tiempo de compilación — usan mayúsculas con guiones bajos:</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>Nota: no toda variable <code>const</code> es una "constante" en este sentido. <code>const user = getUser()</code> es una variable normal — usa camelCase.</p>

<h2>Variables booleanas</h2>
<p>Prefija los booleanos con <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code> para mayor claridad:</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>Campos privados</h2>
<p>JavaScript moderno usa el prefijo <code>#</code> para campos de clase verdaderamente privados. La convención antigua con guion bajo (<code>_name</code>) sigue siendo común en librerías:</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>Nombres de archivo</h2>
<table>
<thead><tr><th>Tipo</th><th>Convención</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Componente React</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Módulo de utilidades</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>Archivo de config</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Archivo de test</td><td>Igual que el fuente</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>Módulo CSS</td><td>PascalCase o kebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>Especificidades de TypeScript</h2>
<ul>
<li><strong>Interfaces:</strong> PascalCase, sin prefijo <code>I</code>. <code>UserProps</code>, no <code>IUserProps</code>.</li>
<li><strong>Type aliases:</strong> PascalCase. <code>type ApiResponse = { ... }</code></li>
<li><strong>Enums:</strong> PascalCase para el enum y para los miembros. <code>enum Color { Red, Green, Blue }</code></li>
<li><strong>Genéricos:</strong> Una sola letra mayúscula. <code>T</code>, <code>K</code>, <code>V</code></li>
</ul>

<h2>Event handlers en React</h2>
<p>Prefija las funciones de manejo de eventos con <code>handle</code>, y los props con <code>on</code>:</p>
<pre><code>// Props: onSubmit, onClick, onChange
// Handlers: handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>Convierte a convenciones JavaScript</h2>
<p>¿Trabajas con una API Python que devuelve snake_case? Usa nuestro <a href="%CAMEL%">conversor camelCase</a> para transformar las claves. ¿Necesitas nombrar un componente React? Prueba el <a href="%PASCAL%">conversor PascalCase</a>. Compara todos los formatos en el <a href="%HUB%">hub de conversión</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em JavaScript: Variáveis, funções, classes e mais",
    description: "Aprenda as convenções de nomes em JavaScript para variáveis, funções, classes, constantes e arquivos. camelCase, PascalCase e SCREAMING_SNAKE_CASE com exemplos.",
    body: `
<p>As convenções de nomes do JavaScript não são impostas pela linguagem, mas são seguidas universalmente no ecossistema. Este guia cobre o que todo desenvolvedor JavaScript e TypeScript deveria saber.</p>

<h2>Variáveis e funções: camelCase</h2>
<p>Variáveis, funções e nomes de métodos usam camelCase — a primeira palavra em minúscula, as seguintes com inicial maiúscula:</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>Classes e componentes: PascalCase</h2>
<p>Classes, componentes React e funções construtoras usam PascalCase:</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// Componentes React
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Constantes verdadeiras — valores que nunca mudam e são conhecidos em tempo de compilação — usam maiúsculas com underscores:</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>Nota: nem toda variável <code>const</code> é uma "constante" nesse sentido. <code>const user = getUser()</code> é uma variável normal — use camelCase.</p>

<h2>Variáveis booleanas</h2>
<p>Prefixe booleanos com <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code> para clareza:</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>Campos privados</h2>
<p>JavaScript moderno usa o prefixo <code>#</code> para campos de classe verdadeiramente privados. A convenção antiga com underscore (<code>_name</code>) ainda é comum em bibliotecas:</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>Nomes de arquivo</h2>
<table>
<thead><tr><th>Tipo</th><th>Convenção</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Componente React</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Módulo de utilidades</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>Arquivo de config</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Arquivo de teste</td><td>Igual ao fonte</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>Módulo CSS</td><td>PascalCase ou kebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>Especificidades do TypeScript</h2>
<ul>
<li><strong>Interfaces:</strong> PascalCase, sem prefixo <code>I</code>. <code>UserProps</code>, não <code>IUserProps</code>.</li>
<li><strong>Type aliases:</strong> PascalCase. <code>type ApiResponse = { ... }</code></li>
<li><strong>Enums:</strong> PascalCase para o enum e para os membros. <code>enum Color { Red, Green, Blue }</code></li>
<li><strong>Genéricos:</strong> Uma única letra maiúscula. <code>T</code>, <code>K</code>, <code>V</code></li>
</ul>

<h2>Event handlers no React</h2>
<p>Prefixe funções de manipulação de eventos com <code>handle</code>, e props com <code>on</code>:</p>
<pre><code>// Props: onSubmit, onClick, onChange
// Handlers: handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>Converta para convenções JavaScript</h2>
<p>Trabalhando com uma API Python que retorna snake_case? Use nosso <a href="%CAMEL%">conversor camelCase</a> para transformar as chaves. Precisa nomear um componente React? Experimente o <a href="%PASCAL%">conversor PascalCase</a>. Compare todos os formatos no <a href="%HUB%">hub de conversão</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage JavaScript : Variables, fonctions, classes et plus",
    description: "Apprenez les conventions de nommage JavaScript pour les variables, fonctions, classes, constantes et fichiers. camelCase, PascalCase et SCREAMING_SNAKE_CASE avec exemples.",
    body: `
<p>Les conventions de nommage JavaScript ne sont pas imposées par le langage, mais sont universellement suivies dans l'écosystème. Ce guide couvre tout ce que chaque développeur JavaScript et TypeScript devrait savoir.</p>

<h2>Variables et fonctions : camelCase</h2>
<p>Variables, fonctions et noms de méthodes utilisent le camelCase — le premier mot en minuscule, les mots suivants avec majuscule initiale :</p>
<pre><code>const userName = "Alice";
let totalPrice = 0;

function getUserById(id) { /* ... */ }
const calculateShipping = (weight) => weight * 2.5;</code></pre>

<h2>Classes et composants : PascalCase</h2>
<p>Classes, composants React et fonctions constructeurs utilisent le PascalCase :</p>
<pre><code>class UserAccount { /* ... */ }
class HttpClient { /* ... */ }

// Composants React
function UserProfile({ name }) { /* ... */ }
const ShoppingCart = () => { /* ... */ };</code></pre>

<h2>Constantes : SCREAMING_SNAKE_CASE</h2>
<p>Les vraies constantes — valeurs qui ne changent jamais et sont connues à la compilation — utilisent les majuscules avec des underscores :</p>
<pre><code>const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_PAGE_SIZE = 20;</code></pre>
<p>Note : toute variable <code>const</code> n'est pas une « constante » dans ce sens. <code>const user = getUser()</code> est une variable normale — utilisez le camelCase.</p>

<h2>Variables booléennes</h2>
<p>Préfixez les booléens avec <code>is</code>, <code>has</code>, <code>can</code>, <code>should</code> pour plus de clarté :</p>
<pre><code>const isLoading = true;
const hasPermission = false;
const canEdit = user.role === "admin";
const shouldRedirect = !isAuthenticated;</code></pre>

<h2>Champs privés</h2>
<p>Le JavaScript moderne utilise le préfixe <code>#</code> pour les champs de classe véritablement privés. L'ancienne convention avec underscore (<code>_name</code>) est encore courante dans les bibliothèques :</p>
<pre><code>class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
}</code></pre>

<h2>Noms de fichiers</h2>
<table>
<thead><tr><th>Type</th><th>Convention</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Composant React</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Module utilitaire</td><td>camelCase</td><td><code>dateUtils.ts</code></td></tr>
<tr><td>Fichier de config</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Fichier de test</td><td>Identique à la source</td><td><code>UserProfile.test.tsx</code></td></tr>
<tr><td>Module CSS</td><td>PascalCase ou kebab</td><td><code>UserProfile.module.css</code></td></tr>
</tbody>
</table>

<h2>Spécificités TypeScript</h2>
<ul>
<li><strong>Interfaces :</strong> PascalCase, sans préfixe <code>I</code>. <code>UserProps</code>, pas <code>IUserProps</code>.</li>
<li><strong>Type aliases :</strong> PascalCase. <code>type ApiResponse = { ... }</code></li>
<li><strong>Enums :</strong> PascalCase pour l'enum et pour les membres. <code>enum Color { Red, Green, Blue }</code></li>
<li><strong>Génériques :</strong> Une seule lettre majuscule. <code>T</code>, <code>K</code>, <code>V</code></li>
</ul>

<h2>Gestionnaires d'événements React</h2>
<p>Préfixez les fonctions de gestion d'événements avec <code>handle</code>, et les props avec <code>on</code> :</p>
<pre><code>// Props : onSubmit, onClick, onChange
// Handlers : handleSubmit, handleClick, handleChange
&lt;Button onClick={handleSubmit} /&gt;</code></pre>

<h2>Convertir aux conventions JavaScript</h2>
<p>Vous travaillez avec une API Python qui retourne du snake_case ? Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a> pour transformer les clés. Besoin de nommer un composant React ? Essayez le <a href="%PASCAL%">convertisseur PascalCase</a>. Comparez tous les formats dans le <a href="%HUB%">hub de conversion</a>.</p>
`,
  }),
};
