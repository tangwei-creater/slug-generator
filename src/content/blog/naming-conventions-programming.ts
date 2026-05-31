import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "naming-conventions-programming", date: "2026-05-31", readTime: 7 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Naming Conventions in Programming: The Complete Guide",
    description: "Learn all major naming conventions in programming — camelCase, snake_case, PascalCase, kebab-case, and more. Understand when and why each is used.",
    body: `
<p>Naming conventions are systematic rules for choosing identifiers in source code. Using the right convention improves readability, reduces bugs, and makes codebases easier to maintain across teams.</p>

<h2>Why Naming Conventions Matter</h2>
<p>Code is read far more often than it is written. Consistent naming lets developers understand the purpose and scope of a variable, function, or class at a glance. Most languages have official style guides that mandate specific conventions, and violating them makes your code feel foreign to other developers.</p>

<h2>The Major Naming Conventions</h2>

<h3>camelCase</h3>
<p>Words are joined with no separator; every word after the first is capitalized: <code>getUserName</code>, <code>totalPrice</code>. This is the default for variables and functions in JavaScript, TypeScript, Java, and Swift.</p>

<h3>PascalCase (UpperCamelCase)</h3>
<p>Like camelCase, but the first word is also capitalized: <code>UserAccount</code>, <code>HttpClient</code>. Used for class names in nearly every language, React components, and TypeScript interfaces.</p>

<h3>snake_case</h3>
<p>Words are separated by underscores, all lowercase: <code>user_name</code>, <code>get_total_price</code>. Mandated by PEP 8 for Python, also standard in Ruby, Rust, and SQL.</p>

<h3>SCREAMING_SNAKE_CASE</h3>
<p>All uppercase with underscores: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>. Used for constants in most languages and environment variables.</p>

<h3>kebab-case</h3>
<p>Words separated by hyphens, all lowercase: <code>my-component</code>, <code>user-profile</code>. Standard for CSS classes, HTML attributes, URL slugs, and CLI flags.</p>

<h3>dot.case</h3>
<p>Words separated by dots: <code>com.example.app</code>. Used in Java package names, property file keys, and some configuration formats.</p>

<h2>Convention by Language</h2>
<table>
<thead><tr><th>Language</th><th>Variables/Functions</th><th>Classes</th><th>Constants</th></tr></thead>
<tbody>
<tr><td>JavaScript / TypeScript</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>Python</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>Java</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>Ruby</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>Rust</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>Go</td><td>camelCase</td><td>PascalCase</td><td>camelCase / PascalCase</td></tr>
<tr><td>C#</td><td>camelCase</td><td>PascalCase</td><td>PascalCase</td></tr>
<tr><td>Swift</td><td>camelCase</td><td>PascalCase</td><td>camelCase</td></tr>
<tr><td>PHP</td><td>camelCase / snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td></tr>
<tr><td>CSS</td><td>kebab-case</td><td>—</td><td>—</td></tr>
</tbody>
</table>

<h2>Best Practices</h2>
<ul>
<li><strong>Follow your language's style guide.</strong> PEP 8 for Python, Google Style for Java, Airbnb for JavaScript — don't invent your own rules.</li>
<li><strong>Be consistent within a project.</strong> Mixing camelCase and snake_case in the same file confuses everyone.</li>
<li><strong>Use descriptive names.</strong> <code>getUserById</code> beats <code>getU</code>. The convention is the format; the content should be meaningful.</li>
<li><strong>Avoid abbreviations.</strong> <code>calculateTotalPrice</code> is better than <code>calcTotPrc</code>.</li>
<li><strong>Match the ecosystem.</strong> If your React project uses camelCase props but your Python API returns snake_case, convert at the boundary.</li>
</ul>

<h2>Converting Between Conventions</h2>
<p>Need to switch formats? Use our <a href="%CAMEL%">camelCase converter</a>, <a href="%SNAKE%">snake_case converter</a>, <a href="%PASCAL%">PascalCase converter</a>, or <a href="%KEBAB%">kebab-case converter</a>. Or try the <a href="%HUB%">case converter hub</a> to compare all formats side by side.</p>

<h2>Conclusion</h2>
<p>Naming conventions are not arbitrary. They encode information about scope, type, and intent. Learn the standard for your language, apply it consistently, and your code will be easier to read, review, and maintain.</p>
`,
  }),
  ja: build("ja", {
    title: "プログラミングの命名規則：完全ガイド",
    description: "camelCase、snake_case、PascalCase、kebab-caseなど、プログラミングの主要な命名規則を解説。言語別の使い分けとベストプラクティス。",
    body: `
<p>命名規則はソースコードの識別子を選択するための体系的なルールです。適切な規則を使うことで、可読性が向上し、チーム開発が円滑になります。</p>
<h2>主要な命名規則</h2>
<h3>camelCase</h3>
<p>2番目以降の単語の先頭を大文字に：<code>getUserName</code>。JavaScript、Java、TypeScriptの標準。</p>
<h3>PascalCase</h3>
<p>すべての単語の先頭を大文字に：<code>UserAccount</code>。クラス名に使用。</p>
<h3>snake_case</h3>
<p>アンダースコアで区切り全て小文字：<code>user_name</code>。Python、Ruby、Rustの標準。</p>
<h3>kebab-case</h3>
<p>ハイフンで区切り全て小文字：<code>my-component</code>。CSS、HTML、URLの標準。</p>
<h2>言語別の規則</h2>
<table><thead><tr><th>言語</th><th>変数/関数</th><th>クラス</th></tr></thead>
<tbody>
<tr><td>JavaScript</td><td>camelCase</td><td>PascalCase</td></tr>
<tr><td>Python</td><td>snake_case</td><td>PascalCase</td></tr>
<tr><td>Java</td><td>camelCase</td><td>PascalCase</td></tr>
<tr><td>Ruby</td><td>snake_case</td><td>PascalCase</td></tr>
<tr><td>CSS</td><td>kebab-case</td><td>—</td></tr>
</tbody></table>
<h2>変換ツール</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>、<a href="%SNAKE%">snake_caseコンバーター</a>、<a href="%HUB%">ケース変換ハブ</a>で即座に変換できます。</p>
`,
  }),
  de: build("de", {
    title: "Namenskonventionen in der Programmierung: Der vollständige Leitfaden",
    description: "Lernen Sie alle wichtigen Namenskonventionen — camelCase, snake_case, PascalCase, kebab-case. Wann und warum welche verwendet wird.",
    body: `
<p>Namenskonventionen sind systematische Regeln für Bezeichner im Quellcode. Die richtige Konvention verbessert die Lesbarkeit und erleichtert die Teamarbeit.</p>
<h2>Die wichtigsten Konventionen</h2>
<h3>camelCase</h3>
<p>Wörter ohne Trennzeichen, ab dem zweiten Wort großgeschrieben: <code>getUserName</code>. Standard in JavaScript und Java.</p>
<h3>PascalCase</h3>
<p>Wie camelCase, aber auch das erste Wort groß: <code>UserAccount</code>. Für Klassennamen.</p>
<h3>snake_case</h3>
<p>Unterstriche als Trennzeichen, alles klein: <code>user_name</code>. Standard in Python und Ruby.</p>
<h3>kebab-case</h3>
<p>Bindestriche als Trennzeichen: <code>my-component</code>. Standard in CSS und URLs.</p>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a>, <a href="%SNAKE%">snake_case-Konverter</a> oder den <a href="%HUB%">Konvertierungs-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en programación: Guía completa",
    description: "Aprende todas las convenciones de nombres — camelCase, snake_case, PascalCase, kebab-case. Cuándo y por qué usar cada una.",
    body: `
<p>Las convenciones de nombres son reglas sistemáticas para elegir identificadores en el código fuente. Usar la convención correcta mejora la legibilidad y facilita el trabajo en equipo.</p>
<h2>Principales convenciones</h2>
<h3>camelCase</h3>
<p>Palabras unidas, mayúscula desde la segunda: <code>getUserName</code>. Estándar en JavaScript y Java.</p>
<h3>PascalCase</h3>
<p>Como camelCase pero la primera también en mayúscula: <code>UserAccount</code>. Para nombres de clases.</p>
<h3>snake_case</h3>
<p>Guiones bajos como separador, todo en minúsculas: <code>user_name</code>. Estándar en Python y Ruby.</p>
<h3>kebab-case</h3>
<p>Guiones como separador: <code>my-component</code>. Estándar en CSS y URLs.</p>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%CAMEL%">conversor camelCase</a>, <a href="%SNAKE%">conversor snake_case</a> o el <a href="%HUB%">hub de conversión</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes na programação: Guia completo",
    description: "Aprenda todas as convenções de nomes — camelCase, snake_case, PascalCase, kebab-case. Quando e por que usar cada uma.",
    body: `
<p>Convenções de nomes são regras sistemáticas para escolher identificadores no código-fonte. Usar a convenção correta melhora a legibilidade e facilita o trabalho em equipe.</p>
<h2>Principais convenções</h2>
<h3>camelCase</h3>
<p>Palavras unidas, maiúscula a partir da segunda: <code>getUserName</code>. Padrão em JavaScript e Java.</p>
<h3>PascalCase</h3>
<p>Como camelCase mas a primeira também em maiúscula: <code>UserAccount</code>. Para nomes de classes.</p>
<h3>snake_case</h3>
<p>Underscores como separador, tudo em minúsculas: <code>user_name</code>. Padrão em Python e Ruby.</p>
<h3>kebab-case</h3>
<p>Hífens como separador: <code>my-component</code>. Padrão em CSS e URLs.</p>
<h2>Conversão</h2>
<p>Use nosso <a href="%CAMEL%">conversor camelCase</a>, <a href="%SNAKE%">conversor snake_case</a> ou o <a href="%HUB%">hub de conversão</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage en programmation : Le guide complet",
    description: "Découvrez toutes les conventions de nommage — camelCase, snake_case, PascalCase, kebab-case. Quand et pourquoi utiliser chacune.",
    body: `
<p>Les conventions de nommage sont des règles systématiques pour choisir les identifiants dans le code source. La bonne convention améliore la lisibilité et facilite le travail en équipe.</p>
<h2>Les principales conventions</h2>
<h3>camelCase</h3>
<p>Mots joints, majuscule à partir du deuxième : <code>getUserName</code>. Standard en JavaScript et Java.</p>
<h3>PascalCase</h3>
<p>Comme camelCase mais le premier mot aussi en majuscule : <code>UserAccount</code>. Pour les noms de classes.</p>
<h3>snake_case</h3>
<p>Underscores comme séparateur, tout en minuscules : <code>user_name</code>. Standard en Python et Ruby.</p>
<h3>kebab-case</h3>
<p>Tirets comme séparateur : <code>my-component</code>. Standard en CSS et URLs.</p>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a>, <a href="%SNAKE%">convertisseur snake_case</a> ou le <a href="%HUB%">hub de conversion</a>.</p>
`,
  }),
};
