import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-pascalcase", date: "2026-05-31", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is PascalCase? Definition, Rules, and Examples",
    description: "Learn what PascalCase (UpperCamelCase) is, where it's used, and how it differs from camelCase. Includes examples for every major language.",
    body: `
<p><strong>PascalCase</strong> (also called UpperCamelCase) capitalizes the first letter of every word with no separators: <code>UserAccount</code>, <code>HttpClient</code>, <code>ShoppingCart</code>.</p>
<h2>Where Is PascalCase Used?</h2>
<table><thead><tr><th>Context</th><th>Language/Framework</th></tr></thead><tbody>
<tr><td>Class names</td><td>Nearly all languages</td></tr>
<tr><td>React components</td><td>JavaScript / TypeScript</td></tr>
<tr><td>Interfaces & type aliases</td><td>TypeScript</td></tr>
<tr><td>Enum names</td><td>TypeScript, Java, C#, Rust</td></tr>
<tr><td>Struct names</td><td>Go, Rust</td></tr>
<tr><td>Public methods</td><td>C#</td></tr>
<tr><td>Exception classes</td><td>Python, Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>Feature</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>First letter</td><td>Uppercase</td><td>Lowercase</td></tr>
<tr><td>Typical use</td><td>Classes, types</td><td>Variables, functions</td></tr>
<tr><td>Example</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>Convert to PascalCase</h2>
<p>Use our <a href="%PASCAL%">PascalCase converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "PascalCaseとは？定義・ルール・使用例",
    description: "PascalCase（UpperCamelCase）の定義、使用場面、camelCaseとの違いを解説。",
    body: `<p><strong>PascalCase</strong>はすべての単語の先頭を大文字にする規則です。クラス名、Reactコンポーネント、TypeScriptインターフェースで使用。</p><h2>変換</h2><p><a href="%PASCAL%">PascalCaseコンバーター</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Was ist PascalCase? Definition, Regeln und Beispiele",
    description: "Was PascalCase ist, wo es verwendet wird und wie es sich von camelCase unterscheidet.",
    body: `<p><strong>PascalCase</strong> schreibt den ersten Buchstaben jedes Wortes groß. Standard für Klassennamen.</p><h2>Konvertierung</h2><p><a href="%PASCAL%">PascalCase-Konverter</a> verwenden.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es PascalCase? Definición, reglas y ejemplos",
    description: "Aprende qué es PascalCase, dónde se usa y cómo difiere de camelCase.",
    body: `<p><strong>PascalCase</strong> capitaliza la primera letra de cada palabra. Estándar para nombres de clases.</p><h2>Conversión</h2><p>Usa el <a href="%PASCAL%">conversor PascalCase</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é PascalCase? Definição, regras e exemplos",
    description: "Aprenda o que é PascalCase, onde é usado e como difere do camelCase.",
    body: `<p><strong>PascalCase</strong> capitaliza a primeira letra de cada palavra. Padrão para nomes de classes.</p><h2>Conversão</h2><p>Use o <a href="%PASCAL%">conversor PascalCase</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que PascalCase ? Définition, règles et exemples",
    description: "Découvrez ce qu'est PascalCase, où il est utilisé et comment il diffère du camelCase.",
    body: `<p><strong>PascalCase</strong> met en majuscule la première lettre de chaque mot. Standard pour les noms de classes.</p><h2>Conversion</h2><p>Utilisez le <a href="%PASCAL%">convertisseur PascalCase</a>.</p>`,
  }),
};
