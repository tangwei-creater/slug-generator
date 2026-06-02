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
    description: "PascalCase（UpperCamelCase）の定義、使用場面、camelCaseとの違いを主要言語の例付きで解説します。",
    body: `
<p><strong>PascalCase</strong>（UpperCamelCaseとも呼ばれる）は、すべての単語の先頭を大文字にして区切り文字なしで連結する規則です：<code>UserAccount</code>、<code>HttpClient</code>、<code>ShoppingCart</code>。</p>
<h2>PascalCaseが使われる場面</h2>
<table><thead><tr><th>コンテキスト</th><th>言語/フレームワーク</th></tr></thead><tbody>
<tr><td>クラス名</td><td>ほぼすべての言語</td></tr>
<tr><td>Reactコンポーネント</td><td>JavaScript / TypeScript</td></tr>
<tr><td>インターフェース・型エイリアス</td><td>TypeScript</td></tr>
<tr><td>Enum名</td><td>TypeScript、Java、C#、Rust</td></tr>
<tr><td>構造体名</td><td>Go、Rust</td></tr>
<tr><td>パブリックメソッド</td><td>C#</td></tr>
<tr><td>例外クラス</td><td>Python、Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>特徴</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>先頭文字</td><td>大文字</td><td>小文字</td></tr>
<tr><td>典型的な用途</td><td>クラス、型</td><td>変数、関数</td></tr>
<tr><td>例</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>PascalCaseに変換</h2>
<p><a href="%PASCAL%">PascalCaseコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was ist PascalCase? Definition, Regeln und Beispiele",
    description: "Erfahren Sie, was PascalCase (UpperCamelCase) ist, wo es verwendet wird und wie es sich von camelCase unterscheidet — mit Beispielen für jede wichtige Sprache.",
    body: `
<p><strong>PascalCase</strong> (auch UpperCamelCase genannt) schreibt den ersten Buchstaben jedes Wortes groß, ohne Trennzeichen: <code>UserAccount</code>, <code>HttpClient</code>, <code>ShoppingCart</code>.</p>
<h2>Wo wird PascalCase verwendet?</h2>
<table><thead><tr><th>Kontext</th><th>Sprache/Framework</th></tr></thead><tbody>
<tr><td>Klassennamen</td><td>Fast alle Sprachen</td></tr>
<tr><td>React-Komponenten</td><td>JavaScript / TypeScript</td></tr>
<tr><td>Interfaces & Typ-Aliase</td><td>TypeScript</td></tr>
<tr><td>Enum-Namen</td><td>TypeScript, Java, C#, Rust</td></tr>
<tr><td>Struct-Namen</td><td>Go, Rust</td></tr>
<tr><td>Öffentliche Methoden</td><td>C#</td></tr>
<tr><td>Exception-Klassen</td><td>Python, Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>Merkmal</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>Erster Buchstabe</td><td>Großbuchstabe</td><td>Kleinbuchstabe</td></tr>
<tr><td>Typische Verwendung</td><td>Klassen, Typen</td><td>Variablen, Funktionen</td></tr>
<tr><td>Beispiel</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>In PascalCase umwandeln</h2>
<p>Verwenden Sie unseren <a href="%PASCAL%">PascalCase-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es PascalCase? Definición, reglas y ejemplos",
    description: "Aprende qué es PascalCase (UpperCamelCase), dónde se usa y cómo difiere de camelCase. Incluye ejemplos para los principales lenguajes.",
    body: `
<p><strong>PascalCase</strong> (también llamado UpperCamelCase) capitaliza la primera letra de cada palabra sin separadores: <code>UserAccount</code>, <code>HttpClient</code>, <code>ShoppingCart</code>.</p>
<h2>¿Dónde se usa PascalCase?</h2>
<table><thead><tr><th>Contexto</th><th>Lenguaje/Framework</th></tr></thead><tbody>
<tr><td>Nombres de clases</td><td>Casi todos los lenguajes</td></tr>
<tr><td>Componentes React</td><td>JavaScript / TypeScript</td></tr>
<tr><td>Interfaces y alias de tipo</td><td>TypeScript</td></tr>
<tr><td>Nombres de enum</td><td>TypeScript, Java, C#, Rust</td></tr>
<tr><td>Nombres de struct</td><td>Go, Rust</td></tr>
<tr><td>Métodos públicos</td><td>C#</td></tr>
<tr><td>Clases de excepción</td><td>Python, Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>Característica</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>Primera letra</td><td>Mayúscula</td><td>Minúscula</td></tr>
<tr><td>Uso típico</td><td>Clases, tipos</td><td>Variables, funciones</td></tr>
<tr><td>Ejemplo</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>Convertir a PascalCase</h2>
<p>Usa nuestro <a href="%PASCAL%">conversor PascalCase</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é PascalCase? Definição, regras e exemplos",
    description: "Aprenda o que é PascalCase (UpperCamelCase), onde é usado e como difere do camelCase. Inclui exemplos para as principais linguagens.",
    body: `
<p><strong>PascalCase</strong> (também chamado UpperCamelCase) capitaliza a primeira letra de cada palavra sem separadores: <code>UserAccount</code>, <code>HttpClient</code>, <code>ShoppingCart</code>.</p>
<h2>Onde o PascalCase é usado?</h2>
<table><thead><tr><th>Contexto</th><th>Linguagem/Framework</th></tr></thead><tbody>
<tr><td>Nomes de classes</td><td>Quase todas as linguagens</td></tr>
<tr><td>Componentes React</td><td>JavaScript / TypeScript</td></tr>
<tr><td>Interfaces e aliases de tipo</td><td>TypeScript</td></tr>
<tr><td>Nomes de enum</td><td>TypeScript, Java, C#, Rust</td></tr>
<tr><td>Nomes de struct</td><td>Go, Rust</td></tr>
<tr><td>Métodos públicos</td><td>C#</td></tr>
<tr><td>Classes de exceção</td><td>Python, Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>Característica</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>Primeira letra</td><td>Maiúscula</td><td>Minúscula</td></tr>
<tr><td>Uso típico</td><td>Classes, tipos</td><td>Variáveis, funções</td></tr>
<tr><td>Exemplo</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>Converter para PascalCase</h2>
<p>Use o nosso <a href="%PASCAL%">conversor PascalCase</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que PascalCase ? Définition, règles et exemples",
    description: "Découvrez ce qu'est PascalCase (UpperCamelCase), où il est utilisé et comment il diffère du camelCase. Exemples pour chaque langage majeur.",
    body: `
<p><strong>PascalCase</strong> (aussi appelé UpperCamelCase) met en majuscule la première lettre de chaque mot sans séparateur : <code>UserAccount</code>, <code>HttpClient</code>, <code>ShoppingCart</code>.</p>
<h2>Où utilise-t-on PascalCase ?</h2>
<table><thead><tr><th>Contexte</th><th>Langage/Framework</th></tr></thead><tbody>
<tr><td>Noms de classes</td><td>Presque tous les langages</td></tr>
<tr><td>Composants React</td><td>JavaScript / TypeScript</td></tr>
<tr><td>Interfaces et alias de types</td><td>TypeScript</td></tr>
<tr><td>Noms d'enum</td><td>TypeScript, Java, C#, Rust</td></tr>
<tr><td>Noms de struct</td><td>Go, Rust</td></tr>
<tr><td>Méthodes publiques</td><td>C#</td></tr>
<tr><td>Classes d'exception</td><td>Python, Java</td></tr>
</tbody></table>
<h2>PascalCase vs camelCase</h2>
<table><thead><tr><th>Caractéristique</th><th>PascalCase</th><th>camelCase</th></tr></thead><tbody>
<tr><td>Première lettre</td><td>Majuscule</td><td>Minuscule</td></tr>
<tr><td>Usage typique</td><td>Classes, types</td><td>Variables, fonctions</td></tr>
<tr><td>Exemple</td><td><code>UserProfile</code></td><td><code>userProfile</code></td></tr>
</tbody></table>
<h2>Convertir en PascalCase</h2>
<p>Utilisez notre <a href="%PASCAL%">convertisseur PascalCase</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
