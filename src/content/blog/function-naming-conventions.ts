import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "function-naming-conventions", date: "2026-06-01", readTime: 4 };

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
    title: "Function Naming Conventions: Verb Patterns for Clean Code",
    description: "Learn how to name functions using verb patterns: get, set, create, delete, validate, handle, and more.",
    body: `<p>Functions do things, so their names should start with verbs. The right verb pattern instantly communicates what a function does.</p><h2>Common Verb Patterns</h2><table><thead><tr><th>Verb</th><th>Purpose</th><th>Examples</th></tr></thead><tbody><tr><td><code>get</code></td><td>Retrieve data</td><td><code>getUserById</code>, <code>getTotal</code></td></tr><tr><td><code>set</code></td><td>Assign a value</td><td><code>setUserName</code>, <code>setTheme</code></td></tr><tr><td><code>create</code></td><td>Make something new</td><td><code>createOrder</code>, <code>createUser</code></td></tr><tr><td><code>delete/remove</code></td><td>Remove something</td><td><code>deleteUser</code>, <code>removeItem</code></td></tr><tr><td><code>update</code></td><td>Modify existing</td><td><code>updateProfile</code></td></tr><tr><td><code>validate</code></td><td>Check correctness</td><td><code>validateEmail</code></td></tr><tr><td><code>format</code></td><td>Transform display</td><td><code>formatDate</code>, <code>formatCurrency</code></td></tr><tr><td><code>parse</code></td><td>Extract structured data</td><td><code>parseJSON</code>, <code>parseCSV</code></td></tr><tr><td><code>handle</code></td><td>React to events</td><td><code>handleClick</code>, <code>handleError</code></td></tr><tr><td><code>fetch</code></td><td>Retrieve from remote</td><td><code>fetchUsers</code>, <code>fetchData</code></td></tr></tbody></table><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> for JS, <a href="%SNAKE%">snake_case</a> for Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "関数命名規則：クリーンコードのための動詞パターン",
    description: "get、set、create、delete、validateなどの動詞パターンで関数を命名する方法。",
    body: `<p>関数は何かを行うので、名前は動詞で始めるべきです。適切な動詞パターンで機能が即座に伝わります。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Funktions-Namenskonventionen: Verb-Muster für sauberen Code",
    description: "Funktionsbenennung mit Verb-Mustern.",
    body: `<p>Funktionen tun etwas, also sollten ihre Namen mit Verben beginnen.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres de funciones: Patrones de verbos para código limpio",
    description: "Nombres de funciones con patrones de verbos.",
    body: `<p>Las funciones hacen cosas, así que sus nombres deben comenzar con verbos.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes de funções: Padrões de verbos para código limpo",
    description: "Nomes de funções com padrões de verbos.",
    body: `<p>Funções fazem coisas, então seus nomes devem começar com verbos.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des fonctions : Patterns de verbes pour un code propre",
    description: "Nommage de fonctions avec des patterns de verbes.",
    body: `<p>Les fonctions font des choses, donc leurs noms doivent commencer par des verbes.</p>`,
  }),
};
