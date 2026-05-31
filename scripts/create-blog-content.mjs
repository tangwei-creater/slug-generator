import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const contentDir = join(import.meta.dirname, "../src/content/blog");

// [slug, date, readTime, enTitle, enDesc, links{placeholder:path}, enBody, jaTitleDescBody, deTitleDescBody, ...]
const posts = [

// ─── CASE EXPLAINERS ───
{
  slug: "what-is-kebab-case",
  date: "2026-05-31",
  readTime: 4,
  links: { "%KEBAB%": "/kebab-case-converter", "%HUB%": "/case-converter-online", "%SNAKE%": "/snake-case-converter" },
  en: {
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
<p>Use our <a href="%KEBAB%">kebab-case converter</a> to transform any text instantly, or try the <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "kebab-caseとは？定義・例・使用場面", description: "kebab-caseの定義、CSS・URL・CLIでの使用例、他の命名規則との比較を解説。", body: `<p><strong>kebab-case</strong>はハイフンで単語を区切り全て小文字にする命名規則です。CSS、URL、CLI引数で標準的に使われます。</p><h2>使用場面</h2><p>CSSプロパティ、HTMLデータ属性、URLスラッグ、npmパッケージ名など。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-caseコンバーター</a>で変換できます。</p>` },
  de: { title: "Was ist kebab-case? Definition, Beispiele und Verwendung", description: "Erfahren Sie, was kebab-case ist und wo es verwendet wird — CSS, URLs, CLI.", body: `<p><strong>kebab-case</strong> trennt Wörter durch Bindestriche in Kleinbuchstaben. Standard in CSS, URLs und CLI-Flags.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">kebab-case-Konverter</a> verwenden.</p>` },
  es: { title: "¿Qué es kebab-case? Definición, ejemplos y uso", description: "Aprende qué es kebab-case, dónde se usa y cómo se compara con camelCase y snake_case.", body: `<p><strong>kebab-case</strong> separa palabras con guiones en minúsculas. Estándar en CSS, URLs y flags CLI.</p><h2>Conversión</h2><p>Usa el <a href="%KEBAB%">conversor kebab-case</a>.</p>` },
  pt: { title: "O que é kebab-case? Definição, exemplos e uso", description: "Aprenda o que é kebab-case, onde é usado e como se compara com camelCase e snake_case.", body: `<p><strong>kebab-case</strong> separa palavras com hífens em minúsculas. Padrão em CSS, URLs e flags CLI.</p><h2>Conversão</h2><p>Use o <a href="%KEBAB%">conversor kebab-case</a>.</p>` },
  fr: { title: "Qu'est-ce que le kebab-case ? Définition, exemples et utilisation", description: "Découvrez ce qu'est le kebab-case, où il est utilisé et comment il se compare au camelCase et snake_case.", body: `<p><strong>kebab-case</strong> sépare les mots par des tirets en minuscules. Standard en CSS, URLs et flags CLI.</p><h2>Conversion</h2><p>Utilisez le <a href="%KEBAB%">convertisseur kebab-case</a>.</p>` },
},

{
  slug: "what-is-pascalcase",
  date: "2026-05-31",
  readTime: 4,
  links: { "%PASCAL%": "/pascal-case-converter", "%HUB%": "/case-converter-online", "%CAMEL%": "/camelcase-converter" },
  en: {
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
<p>Use our <a href="%PASCAL%">PascalCase converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "PascalCaseとは？定義・ルール・使用例", description: "PascalCase（UpperCamelCase）の定義、使用場面、camelCaseとの違いを解説。", body: `<p><strong>PascalCase</strong>はすべての単語の先頭を大文字にする規則です。クラス名、Reactコンポーネント、TypeScriptインターフェースで使用。</p><h2>変換</h2><p><a href="%PASCAL%">PascalCaseコンバーター</a>で変換。</p>` },
  de: { title: "Was ist PascalCase? Definition, Regeln und Beispiele", description: "Was PascalCase ist, wo es verwendet wird und wie es sich von camelCase unterscheidet.", body: `<p><strong>PascalCase</strong> schreibt den ersten Buchstaben jedes Wortes groß. Standard für Klassennamen.</p><h2>Konvertierung</h2><p><a href="%PASCAL%">PascalCase-Konverter</a> verwenden.</p>` },
  es: { title: "¿Qué es PascalCase? Definición, reglas y ejemplos", description: "Aprende qué es PascalCase, dónde se usa y cómo difiere de camelCase.", body: `<p><strong>PascalCase</strong> capitaliza la primera letra de cada palabra. Estándar para nombres de clases.</p><h2>Conversión</h2><p>Usa el <a href="%PASCAL%">conversor PascalCase</a>.</p>` },
  pt: { title: "O que é PascalCase? Definição, regras e exemplos", description: "Aprenda o que é PascalCase, onde é usado e como difere do camelCase.", body: `<p><strong>PascalCase</strong> capitaliza a primeira letra de cada palavra. Padrão para nomes de classes.</p><h2>Conversão</h2><p>Use o <a href="%PASCAL%">conversor PascalCase</a>.</p>` },
  fr: { title: "Qu'est-ce que PascalCase ? Définition, règles et exemples", description: "Découvrez ce qu'est PascalCase, où il est utilisé et comment il diffère du camelCase.", body: `<p><strong>PascalCase</strong> met en majuscule la première lettre de chaque mot. Standard pour les noms de classes.</p><h2>Conversion</h2><p>Utilisez le <a href="%PASCAL%">convertisseur PascalCase</a>.</p>` },
},

{
  slug: "what-is-screaming-snake-case",
  date: "2026-05-31",
  readTime: 3,
  links: { "%CONSTANT%": "/constant-case-converter", "%SNAKE%": "/snake-case-converter", "%HUB%": "/case-converter-online" },
  en: {
    title: "What Is SCREAMING_SNAKE_CASE? When to Use ALL CAPS with Underscores",
    description: "Learn what SCREAMING_SNAKE_CASE is, when to use it for constants and environment variables, and how to convert to it.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (also called CONSTANT_CASE or UPPER_SNAKE_CASE) uses all uppercase letters with underscores as separators: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>When to Use SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constants:</strong> Values that never change at runtime — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Environment variables:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Enum values:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (in C, Python)</li>
<li><strong>Preprocessor macros:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Global config:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Language Support</h2>
<table><thead><tr><th>Language</th><th>Used For</th><th>Example</th></tr></thead><tbody>
<tr><td>Python</td><td>Module constants</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>True constants</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>static final fields</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constants</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Convert to SCREAMING_SNAKE_CASE</h2>
<p>Use our <a href="%CONSTANT%">constant case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "SCREAMING_SNAKE_CASEとは？大文字アンダースコアの使い方", description: "SCREAMING_SNAKE_CASEの定義、定数・環境変数での使用場面を解説。", body: `<p><strong>SCREAMING_SNAKE_CASE</strong>は全て大文字でアンダースコア区切りの命名規則です。定数や環境変数で使用されます。</p><h2>変換</h2><p><a href="%CONSTANT%">定数ケースコンバーター</a>で変換。</p>` },
  de: { title: "Was ist SCREAMING_SNAKE_CASE? Großbuchstaben mit Unterstrichen", description: "SCREAMING_SNAKE_CASE für Konstanten und Umgebungsvariablen erklärt.", body: `<p><strong>SCREAMING_SNAKE_CASE</strong> verwendet Großbuchstaben mit Unterstrichen. Standard für Konstanten und Umgebungsvariablen.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Constant-Case-Konverter</a> verwenden.</p>` },
  es: { title: "¿Qué es SCREAMING_SNAKE_CASE? Cuándo usar mayúsculas con guiones bajos", description: "SCREAMING_SNAKE_CASE para constantes y variables de entorno explicado.", body: `<p><strong>SCREAMING_SNAKE_CASE</strong> usa mayúsculas con guiones bajos. Estándar para constantes y variables de entorno.</p><h2>Conversión</h2><p>Usa el <a href="%CONSTANT%">conversor constant case</a>.</p>` },
  pt: { title: "O que é SCREAMING_SNAKE_CASE? Quando usar maiúsculas com underscores", description: "SCREAMING_SNAKE_CASE para constantes e variáveis de ambiente explicado.", body: `<p><strong>SCREAMING_SNAKE_CASE</strong> usa maiúsculas com underscores. Padrão para constantes e variáveis de ambiente.</p><h2>Conversão</h2><p>Use o <a href="%CONSTANT%">conversor constant case</a>.</p>` },
  fr: { title: "Qu'est-ce que SCREAMING_SNAKE_CASE ? Quand utiliser les majuscules avec underscores", description: "SCREAMING_SNAKE_CASE pour les constantes et variables d'environnement expliqué.", body: `<p><strong>SCREAMING_SNAKE_CASE</strong> utilise des majuscules avec des underscores. Standard pour les constantes et variables d'environnement.</p><h2>Conversion</h2><p>Utilisez le <a href="%CONSTANT%">convertisseur constant case</a>.</p>` },
},

{
  slug: "what-is-dot-case",
  date: "2026-05-31",
  readTime: 3,
  links: { "%DOT%": "/dot-case-converter", "%HUB%": "/case-converter-online" },
  en: {
    title: "What Is dot.case? Where Dots Separate Words in Programming",
    description: "Learn what dot.case notation is, where it's used in Java packages, config files, and property keys, and how to convert to it.",
    body: `
<p><strong>dot.case</strong> separates words with periods (dots), typically in all lowercase: <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>Where Is dot.case Used?</h2>
<ul>
<li><strong>Java package names:</strong> <code>com.google.common.collect</code></li>
<li><strong>Spring Boot properties:</strong> <code>server.port=8080</code></li>
<li><strong>.properties files:</strong> <code>app.database.url</code></li>
<li><strong>YAML config keys:</strong> nested keys flattened with dots</li>
<li><strong>JavaScript object paths:</strong> <code>user.address.city</code></li>
<li><strong>Message bundles (i18n):</strong> <code>error.not.found</code></li>
</ul>
<h2>Convert to dot.case</h2>
<p>Use our <a href="%DOT%">dot case converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "dot.caseとは？ドット区切り表記の使い方", description: "dot.caseの定義とJavaパッケージ名、設定ファイルでの使用例を解説。", body: `<p><strong>dot.case</strong>はドットで単語を区切る表記法です。Javaパッケージ名や設定ファイルで使用されます。</p><h2>変換</h2><p><a href="%DOT%">dot caseコンバーター</a>で変換。</p>` },
  de: { title: "Was ist dot.case? Punkt-Notation in der Programmierung", description: "dot.case in Java-Paketen und Konfigurationsdateien erklärt.", body: `<p><strong>dot.case</strong> trennt Wörter mit Punkten. Verwendet in Java-Paketen und Konfigurationsdateien.</p><h2>Konvertierung</h2><p><a href="%DOT%">dot-case-Konverter</a> verwenden.</p>` },
  es: { title: "¿Qué es dot.case? Notación con puntos en programación", description: "dot.case en paquetes Java y archivos de configuración explicado.", body: `<p><strong>dot.case</strong> separa palabras con puntos. Usado en paquetes Java y archivos de configuración.</p><h2>Conversión</h2><p>Usa el <a href="%DOT%">conversor dot case</a>.</p>` },
  pt: { title: "O que é dot.case? Notação com pontos na programação", description: "dot.case em pacotes Java e arquivos de configuração explicado.", body: `<p><strong>dot.case</strong> separa palavras com pontos. Usado em pacotes Java e arquivos de configuração.</p><h2>Conversão</h2><p>Use o <a href="%DOT%">conversor dot case</a>.</p>` },
  fr: { title: "Qu'est-ce que dot.case ? Notation avec points en programmation", description: "dot.case dans les packages Java et fichiers de configuration expliqué.", body: `<p><strong>dot.case</strong> sépare les mots par des points. Utilisé dans les packages Java et fichiers de configuration.</p><h2>Conversion</h2><p>Utilisez le <a href="%DOT%">convertisseur dot case</a>.</p>` },
},

{
  slug: "what-is-constant-case",
  date: "2026-05-31",
  readTime: 3,
  links: { "%CONSTANT%": "/constant-case-converter", "%HUB%": "/case-converter-online" },
  en: {
    title: "What Is CONSTANT_CASE? A Guide to Uppercase Naming for Constants",
    description: "Learn what CONSTANT_CASE is, why it exists, which languages use it, and how it signals immutability in code.",
    body: `
<p><strong>CONSTANT_CASE</strong> is identical to SCREAMING_SNAKE_CASE: all uppercase letters separated by underscores. It signals that a value is a constant — set once, never changed.</p>
<h2>Why Use a Special Case for Constants?</h2>
<p>Constants stand out visually when they're all caps. When you see <code>MAX_CONNECTIONS</code> in code, you instantly know it's a fixed value — no need to trace where it's assigned or whether it changes.</p>
<h2>Examples by Language</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>Convert to CONSTANT_CASE</h2>
<p>Use our <a href="%CONSTANT%">constant case converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "CONSTANT_CASEとは？定数命名の大文字規則ガイド", description: "CONSTANT_CASEの定義、存在理由、言語別の使い方を解説。", body: `<p><strong>CONSTANT_CASE</strong>は全て大文字でアンダースコア区切り。定数が固定値であることを視覚的に示します。</p><h2>変換</h2><p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>で変換。</p>` },
  de: { title: "Was ist CONSTANT_CASE? Großbuchstaben-Benennung für Konstanten", description: "CONSTANT_CASE für Konstanten erklärt.", body: `<p><strong>CONSTANT_CASE</strong> signalisiert unveränderliche Werte durch Großbuchstaben mit Unterstrichen.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Constant-Case-Konverter</a>.</p>` },
  es: { title: "¿Qué es CONSTANT_CASE? Guía de nombres en mayúsculas para constantes", description: "CONSTANT_CASE para constantes explicado.", body: `<p><strong>CONSTANT_CASE</strong> señala valores inmutables con mayúsculas y guiones bajos.</p><h2>Conversión</h2><p><a href="%CONSTANT%">Conversor constant case</a>.</p>` },
  pt: { title: "O que é CONSTANT_CASE? Guia de nomes em maiúsculas para constantes", description: "CONSTANT_CASE para constantes explicado.", body: `<p><strong>CONSTANT_CASE</strong> sinaliza valores imutáveis com maiúsculas e underscores.</p><h2>Conversão</h2><p><a href="%CONSTANT%">Conversor constant case</a>.</p>` },
  fr: { title: "Qu'est-ce que CONSTANT_CASE ? Guide de nommage en majuscules pour les constantes", description: "CONSTANT_CASE pour les constantes expliqué.", body: `<p><strong>CONSTANT_CASE</strong> signale les valeurs immuables par des majuscules avec des underscores.</p><h2>Conversion</h2><p><a href="%CONSTANT%">Convertisseur constant case</a>.</p>` },
},

{
  slug: "how-to-name-variables",
  date: "2026-05-31",
  readTime: 6,
  links: { "%HUB%": "/case-converter-online", "%CAMEL%": "/camelcase-converter", "%SNAKE%": "/snake-case-converter" },
  en: {
    title: "How to Name Variables: A Developer's Guide to Clean, Readable Code",
    description: "Learn variable naming best practices that make code self-documenting. Covers naming rules, patterns, anti-patterns, and language-specific conventions.",
    body: `
<p>Variable naming is the most frequent design decision a programmer makes. Good names make code self-documenting; bad names force readers to decode your logic.</p>
<h2>Core Principles</h2>
<ul>
<li><strong>Reveal intent:</strong> <code>elapsedTimeInDays</code> not <code>d</code></li>
<li><strong>Avoid disinformation:</strong> Don't call a list <code>accountList</code> if it's actually a set</li>
<li><strong>Use pronounceable names:</strong> <code>generationTimestamp</code> not <code>genymdhms</code></li>
<li><strong>Use searchable names:</strong> <code>MAX_STUDENTS_PER_CLASS</code> not <code>7</code></li>
</ul>
<h2>Naming Patterns by Type</h2>
<table><thead><tr><th>Type</th><th>Pattern</th><th>Examples</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + adjective</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Counter</td><td>noun + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Collection</td><td>Plural noun</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Function</td><td>verb + noun</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event handler</td><td>handle/on + event</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Anti-Patterns</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — too vague</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — acceptable only in lambdas and math formulas</li>
<li><code>flag</code> — flag for what? Use <code>isEnabled</code> instead</li>
<li>Hungarian notation (<code>strName</code>, <code>intAge</code>) — outdated with modern IDEs</li>
</ul>
<h2>Format Your Names</h2>
<p>Use the <a href="%CAMEL%">camelCase converter</a> for JavaScript variables, <a href="%SNAKE%">snake_case converter</a> for Python, or the <a href="%HUB%">case converter hub</a>.</p>`
  },
  ja: { title: "変数の命名方法：読みやすいコードのための開発者ガイド", description: "コードを自己文書化する変数命名のベストプラクティス。命名ルール、パターン、アンチパターンを解説。", body: `<p>変数命名はプログラマーが最も頻繁に行う設計判断です。良い名前はコードを自己文書化します。</p><h2>核心原則</h2><ul><li>意図を明かす：<code>elapsedTimeInDays</code></li><li>検索可能な名前を使う</li><li>発音可能な名前を使う</li></ul><h2>変換</h2><p><a href="%HUB%">ケース変換ハブ</a>で変換。</p>` },
  de: { title: "Variablen benennen: Ein Entwickler-Leitfaden für sauberen Code", description: "Best Practices für Variablenbenennung, die Code selbstdokumentierend macht.", body: `<p>Variablenbenennung ist die häufigste Designentscheidung. Gute Namen machen Code selbstdokumentierend.</p><h2>Konvertierung</h2><p><a href="%HUB%">Konvertierungs-Hub</a> verwenden.</p>` },
  es: { title: "Cómo nombrar variables: Guía para código limpio y legible", description: "Mejores prácticas para nombrar variables que hacen el código autodocumentado.", body: `<p>Nombrar variables es la decisión de diseño más frecuente. Buenos nombres hacen el código autodocumentado.</p><h2>Conversión</h2><p>Usa el <a href="%HUB%">hub de conversión</a>.</p>` },
  pt: { title: "Como nomear variáveis: Guia para código limpo e legível", description: "Melhores práticas de nomeação de variáveis para código autodocumentado.", body: `<p>Nomear variáveis é a decisão de design mais frequente. Bons nomes tornam o código autodocumentado.</p><h2>Conversão</h2><p>Use o <a href="%HUB%">hub de conversão</a>.</p>` },
  fr: { title: "Comment nommer les variables : Guide pour un code propre et lisible", description: "Bonnes pratiques de nommage des variables pour un code autodocumenté.", body: `<p>Nommer les variables est la décision de conception la plus fréquente. De bons noms rendent le code autodocumenté.</p><h2>Conversion</h2><p>Utilisez le <a href="%HUB%">hub de conversion</a>.</p>` },
},

];

// ─── GENERATE FILES ───
const locales = ["en","ja","de","es","pt","fr"];

for (const post of posts) {
  const filePath = join(contentDir, `${post.slug}.ts`);
  if (existsSync(filePath)) { console.log(`SKIP: ${post.slug}`); continue; }

  const linkKeys = Object.keys(post.links);
  const replaceLines = linkKeys.map(k => `    .replaceAll("${k}", p(l, "${post.links[k]}"))`).join("\n");

  let articleEntries = "";
  for (const loc of locales) {
    const a = post[loc];
    const escapedBody = a.body.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
    const escapedTitle = a.title.replace(/"/g, '\\"');
    const escapedDesc = a.description.replace(/"/g, '\\"');
    articleEntries += `  ${loc}: build("${loc}", {\n    title: "${escapedTitle}",\n    description: "${escapedDesc}",\n    body: \`${escapedBody}\`,\n  }),\n`;
  }

  const content = `import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "${post.slug}", date: "${post.date}", readTime: ${post.readTime} };

const p = (l: Locale, path: string) => (l === "en" ? path : \`/\${l}\${path}\`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
${replaceLines},
});

export const article: Record<Locale, Article> = {
${articleEntries}};
`;

  writeFileSync(filePath, content, "utf-8");
  console.log(`Created: ${post.slug}`);
}

console.log("\\nBatch done!");
