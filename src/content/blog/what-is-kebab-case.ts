import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-kebab-case", date: "2026-05-31", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is kebab-case? Definition, Examples, and Usage",
    description: "Learn what kebab-case is, where it's used (CSS, URLs, CLI), and how it compares to other naming conventions like camelCase and snake_case.",
    body: `
<p><strong>kebab-case</strong> is a naming convention where words are lowercase and separated by hyphens: <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>Where Is kebab-case Used?</h2>
<table><thead><tr><th>Context</th><th>Example</th></tr></thead><tbody>
<tr><td>CSS properties</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>CSS class names (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>HTML attributes</td><td><code>data-user-id</code></td></tr>
<tr><td>URL slugs</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>CLI flags</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>npm package names</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs Other Conventions</h2>
<table><thead><tr><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>Why Can't You Use kebab-case in Most Languages?</h2>
<p>The hyphen is an operator (subtraction) in most languages: <code>my-var</code> is parsed as <code>my</code> minus <code>var</code>. That's why kebab-case is limited to contexts where hyphens aren't operators — CSS, HTML attributes, URLs, and config files.</p>
<h2>Convert to kebab-case</h2>
<p>Use our <a href="%KEBAB%">kebab-case converter</a> to transform any text instantly, or try the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "kebab-caseとは？定義・例・使用場面",
    description: "kebab-caseの定義、CSS・URL・CLIでの使用例、camelCaseやsnake_caseとの比較を解説します。",
    body: `
<p><strong>kebab-case</strong>は、単語を小文字にしてハイフンで区切る命名規則です：<code>my-variable-name</code>、<code>background-color</code>、<code>user-profile-page</code>。</p>
<h2>kebab-caseが使われる場面</h2>
<table><thead><tr><th>コンテキスト</th><th>例</th></tr></thead><tbody>
<tr><td>CSSプロパティ</td><td><code>background-color</code>、<code>font-size</code></td></tr>
<tr><td>CSSクラス名（BEM）</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>HTML属性</td><td><code>data-user-id</code></td></tr>
<tr><td>URLスラッグ</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>CLIフラグ</td><td><code>--output-dir</code>、<code>--no-cache</code></td></tr>
<tr><td>npmパッケージ名</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs 他の命名規則</h2>
<table><thead><tr><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>なぜ多くの言語でkebab-caseが使えないのか？</h2>
<p>ハイフンはほとんどのプログラミング言語で演算子（減算）です。<code>my-var</code>は<code>my</code>マイナス<code>var</code>と解釈されます。そのためkebab-caseはハイフンが演算子にならない文脈（CSS、HTML属性、URL、設定ファイル）に限定されます。</p>
<h2>kebab-caseに変換</h2>
<p><a href="%KEBAB%">kebab-caseコンバーター</a>で任意のテキストを即座に変換できます。<a href="%HUB%">ケースコンバーターハブ</a>もお試しください。</p>`,
  }),
  de: build("de", {
    title: "Was ist kebab-case? Definition, Beispiele und Verwendung",
    description: "Erfahren Sie, was kebab-case ist, wo es verwendet wird (CSS, URLs, CLI) und wie es sich von camelCase und snake_case unterscheidet.",
    body: `
<p><strong>kebab-case</strong> ist eine Namenskonvention, bei der Wörter kleingeschrieben und durch Bindestriche getrennt werden: <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>Wo wird kebab-case verwendet?</h2>
<table><thead><tr><th>Kontext</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>CSS-Eigenschaften</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>CSS-Klassennamen (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>HTML-Attribute</td><td><code>data-user-id</code></td></tr>
<tr><td>URL-Slugs</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>CLI-Flags</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>npm-Paketnamen</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs andere Konventionen</h2>
<table><thead><tr><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>Warum funktioniert kebab-case nicht in den meisten Sprachen?</h2>
<p>Der Bindestrich ist in den meisten Sprachen ein Operator (Subtraktion): <code>my-var</code> wird als <code>my</code> minus <code>var</code> interpretiert. Deshalb ist kebab-case auf Kontexte beschränkt, in denen Bindestriche keine Operatoren sind — CSS, HTML-Attribute, URLs und Konfigurationsdateien.</p>
<h2>In kebab-case umwandeln</h2>
<p>Verwenden Sie unseren <a href="%KEBAB%">kebab-case-Konverter</a>, um beliebigen Text sofort umzuwandeln, oder probieren Sie den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es kebab-case? Definición, ejemplos y uso",
    description: "Aprende qué es kebab-case, dónde se usa (CSS, URLs, CLI) y cómo se compara con camelCase y snake_case.",
    body: `
<p><strong>kebab-case</strong> es una convención de nombres donde las palabras van en minúsculas separadas por guiones: <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>¿Dónde se usa kebab-case?</h2>
<table><thead><tr><th>Contexto</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Propiedades CSS</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>Clases CSS (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>Atributos HTML</td><td><code>data-user-id</code></td></tr>
<tr><td>Slugs de URL</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>Flags de CLI</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>Nombres de paquetes npm</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs otras convenciones</h2>
<table><thead><tr><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>¿Por qué no se puede usar kebab-case en la mayoría de lenguajes?</h2>
<p>El guion es un operador (resta) en la mayoría de lenguajes: <code>my-var</code> se interpreta como <code>my</code> menos <code>var</code>. Por eso kebab-case se limita a contextos donde los guiones no son operadores — CSS, atributos HTML, URLs y archivos de configuración.</p>
<h2>Convertir a kebab-case</h2>
<p>Usa nuestro <a href="%KEBAB%">conversor kebab-case</a> para transformar cualquier texto al instante, o prueba el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é kebab-case? Definição, exemplos e uso",
    description: "Aprenda o que é kebab-case, onde é usado (CSS, URLs, CLI) e como se compara com camelCase e snake_case.",
    body: `
<p><strong>kebab-case</strong> é uma convenção de nomenclatura onde as palavras ficam em minúsculas separadas por hifens: <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>Onde o kebab-case é usado?</h2>
<table><thead><tr><th>Contexto</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Propriedades CSS</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>Classes CSS (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>Atributos HTML</td><td><code>data-user-id</code></td></tr>
<tr><td>Slugs de URL</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>Flags de CLI</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>Nomes de pacotes npm</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs outras convenções</h2>
<table><thead><tr><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>Por que não se pode usar kebab-case na maioria das linguagens?</h2>
<p>O hifen é um operador (subtração) na maioria das linguagens: <code>my-var</code> é interpretado como <code>my</code> menos <code>var</code>. Por isso o kebab-case é limitado a contextos onde hifens não são operadores — CSS, atributos HTML, URLs e arquivos de configuração.</p>
<h2>Converter para kebab-case</h2>
<p>Use o nosso <a href="%KEBAB%">conversor kebab-case</a> para transformar qualquer texto instantaneamente, ou experimente o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que le kebab-case ? Définition, exemples et utilisation",
    description: "Découvrez ce qu'est le kebab-case, où il est utilisé (CSS, URLs, CLI) et comment il se compare au camelCase et au snake_case.",
    body: `
<p><strong>kebab-case</strong> est une convention de nommage où les mots sont en minuscules et séparés par des tirets : <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>Où utilise-t-on le kebab-case ?</h2>
<table><thead><tr><th>Contexte</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Propriétés CSS</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>Noms de classes CSS (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>Attributs HTML</td><td><code>data-user-id</code></td></tr>
<tr><td>Slugs d'URL</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>Flags CLI</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>Noms de paquets npm</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs autres conventions</h2>
<table><thead><tr><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>Pourquoi le kebab-case ne fonctionne-t-il pas dans la plupart des langages ?</h2>
<p>Le tiret est un opérateur (soustraction) dans la plupart des langages : <code>my-var</code> est interprété comme <code>my</code> moins <code>var</code>. C'est pourquoi le kebab-case est limité aux contextes où les tirets ne sont pas des opérateurs — CSS, attributs HTML, URLs et fichiers de configuration.</p>
<h2>Convertir en kebab-case</h2>
<p>Utilisez notre <a href="%KEBAB%">convertisseur kebab-case</a> pour transformer n'importe quel texte instantanément, ou essayez le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
