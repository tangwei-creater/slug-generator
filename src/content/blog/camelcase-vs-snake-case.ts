import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "camelcase-vs-snake-case", date: "2026-05-31", readTime: 5 };

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
    title: "camelCase vs snake_case: When to Use Which",
    description: "Compare camelCase and snake_case naming conventions. Learn which languages use which, conversion rules, and when to pick one over the other.",
    body: `
<p><strong>camelCase</strong> and <strong>snake_case</strong> are the two most common naming conventions in programming. Choosing the right one depends on the language, framework, and context you are working in.</p>

<h2>What Is camelCase?</h2>
<p>camelCase joins words together with no separator, capitalizing the first letter of each word except the first: <code>myVariableName</code>, <code>getUserById</code>, <code>totalItemCount</code>.</p>
<p>The name comes from the uppercase letters in the middle of the word, resembling the humps of a camel.</p>

<h2>What Is snake_case?</h2>
<p>snake_case separates words with underscores and uses all lowercase letters: <code>my_variable_name</code>, <code>get_user_by_id</code>, <code>total_item_count</code>.</p>

<h2>Side-by-Side Comparison</h2>
<table>
<thead><tr><th>Feature</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>Separator</td><td>None (uppercase letter)</td><td>Underscore (_)</td></tr>
<tr><td>First letter</td><td>Lowercase</td><td>Lowercase</td></tr>
<tr><td>Readability</td><td>Good for short names</td><td>Excellent for long names</td></tr>
<tr><td>Typing speed</td><td>Faster (no underscore)</td><td>Slower (underscore key)</td></tr>
<tr><td>Length</td><td>Shorter</td><td>Longer</td></tr>
</tbody>
</table>

<h2>Which Languages Use Which?</h2>
<table>
<thead><tr><th>Convention</th><th>Languages / Frameworks</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin, Dart, JSON</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, Elixir, PHP (partially), SQL, C (partially)</td></tr>
</tbody>
</table>

<h2>When to Use camelCase</h2>
<ul>
<li>JavaScript or TypeScript variables and functions</li>
<li>Java method and variable names</li>
<li>JSON object keys in frontend-centric APIs</li>
<li>Swift and Kotlin identifiers</li>
<li>React state variables and event handlers</li>
</ul>

<h2>When to Use snake_case</h2>
<ul>
<li>Python variables and functions (PEP 8 mandates this)</li>
<li>Ruby method and variable names</li>
<li>Database table and column names</li>
<li>REST API fields for Python/Ruby backends</li>
<li>Configuration file keys</li>
<li>Environment variable names (in UPPER_SNAKE_CASE)</li>
</ul>

<h2>Converting Between Them</h2>
<p>Converting camelCase to snake_case: insert an underscore before each uppercase letter, then lowercase everything. <code>getUserById</code> becomes <code>get_user_by_id</code>.</p>
<p>Converting snake_case to camelCase: remove each underscore and capitalize the following letter. <code>get_user_by_id</code> becomes <code>getUserById</code>.</p>
<p>Use our <a href="%CAMEL%">camelCase converter</a> or <a href="%SNAKE%">snake_case converter</a> to do this instantly, or try the <a href="%HUB%">case converter hub</a> to see all formats at once.</p>

<h2>The Mixed-Codebase Problem</h2>
<p>The most common situation where developers encounter both conventions is at the boundary between a Python/Ruby backend (snake_case) and a JavaScript frontend (camelCase). The typical solution is to convert API response keys at the boundary using a middleware or utility function.</p>

<h2>Summary</h2>
<p>There is no universally "better" convention. Follow the standard of whatever language or framework you are using. Consistency within a project matters far more than which convention you choose.</p>
`,
  }),
  ja: build("ja", {
    title: "camelCase vs snake_case：どちらを使うべきか",
    description: "camelCaseとsnake_caseの命名規則を比較。言語別の使い分け、変換ルール、選択基準を解説。",
    body: `
<p><strong>camelCase</strong>と<strong>snake_case</strong>はプログラミングで最も一般的な2つの命名規則です。</p>
<h2>camelCaseとは</h2>
<p>camelCaseは単語を区切り文字なしで結合し、2番目以降の単語の先頭を大文字にします：<code>myVariableName</code>。JavaScript、Java、TypeScriptで標準です。</p>
<h2>snake_caseとは</h2>
<p>snake_caseはアンダースコアで単語を区切り、すべて小文字にします：<code>my_variable_name</code>。Python、Ruby、SQLで標準です。</p>
<h2>言語別の使い分け</h2>
<table><thead><tr><th>規則</th><th>言語</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript、TypeScript、Java、Swift、Kotlin</td></tr>
<tr><td>snake_case</td><td>Python、Ruby、Rust、SQL</td></tr>
</tbody></table>
<h2>変換方法</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>または<a href="%SNAKE%">snake_caseコンバーター</a>で即座に変換できます。</p>
<h2>まとめ</h2>
<p>使用する言語やフレームワークの標準に従いましょう。プロジェクト内の一貫性が最も重要です。</p>
`,
  }),
  de: build("de", {
    title: "camelCase vs snake_case: Wann was verwenden?",
    description: "Vergleich von camelCase und snake_case. Erfahren Sie, welche Sprachen welche Konvention verwenden und wie Sie zwischen ihnen konvertieren.",
    body: `
<p><strong>camelCase</strong> und <strong>snake_case</strong> sind die zwei häufigsten Namenskonventionen in der Programmierung.</p>
<h2>Was ist camelCase?</h2>
<p>camelCase verbindet Wörter ohne Trennzeichen und schreibt den ersten Buchstaben jedes Wortes groß (außer dem ersten): <code>myVariableName</code>. Standard in JavaScript, Java und TypeScript.</p>
<h2>Was ist snake_case?</h2>
<p>snake_case trennt Wörter mit Unterstrichen und verwendet nur Kleinbuchstaben: <code>my_variable_name</code>. Standard in Python, Ruby und SQL.</p>
<h2>Sprachvergleich</h2>
<table><thead><tr><th>Konvention</th><th>Sprachen</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, SQL</td></tr>
</tbody></table>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a> oder <a href="%SNAKE%">snake_case-Konverter</a> für sofortige Ergebnisse.</p>
`,
  }),
  es: build("es", {
    title: "camelCase vs snake_case: Cuándo usar cada uno",
    description: "Compara las convenciones camelCase y snake_case. Aprende qué lenguajes usan cuál, reglas de conversión y cuándo elegir uno sobre otro.",
    body: `
<p><strong>camelCase</strong> y <strong>snake_case</strong> son las dos convenciones de nombres más comunes en programación.</p>
<h2>¿Qué es camelCase?</h2>
<p>camelCase une palabras sin separador, capitalizando la primera letra de cada palabra excepto la primera: <code>myVariableName</code>. Es estándar en JavaScript, Java y TypeScript.</p>
<h2>¿Qué es snake_case?</h2>
<p>snake_case separa palabras con guiones bajos y usa solo minúsculas: <code>my_variable_name</code>. Es estándar en Python, Ruby y SQL.</p>
<h2>Comparación por lenguaje</h2>
<table><thead><tr><th>Convención</th><th>Lenguajes</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, SQL</td></tr>
</tbody></table>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%CAMEL%">conversor camelCase</a> o <a href="%SNAKE%">conversor snake_case</a> para resultados instantáneos.</p>
`,
  }),
  pt: build("pt", {
    title: "camelCase vs snake_case: Quando usar cada um",
    description: "Compare as convenções camelCase e snake_case. Saiba quais linguagens usam qual, regras de conversão e quando escolher uma sobre a outra.",
    body: `
<p><strong>camelCase</strong> e <strong>snake_case</strong> são as duas convenções de nomes mais comuns na programação.</p>
<h2>O que é camelCase?</h2>
<p>camelCase une palavras sem separador, capitalizando a primeira letra de cada palavra exceto a primeira: <code>myVariableName</code>. É padrão em JavaScript, Java e TypeScript.</p>
<h2>O que é snake_case?</h2>
<p>snake_case separa palavras com underscores e usa apenas minúsculas: <code>my_variable_name</code>. É padrão em Python, Ruby e SQL.</p>
<h2>Comparação por linguagem</h2>
<table><thead><tr><th>Convenção</th><th>Linguagens</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, SQL</td></tr>
</tbody></table>
<h2>Conversão</h2>
<p>Use nosso <a href="%CAMEL%">conversor camelCase</a> ou <a href="%SNAKE%">conversor snake_case</a> para resultados instantâneos.</p>
`,
  }),
  fr: build("fr", {
    title: "camelCase vs snake_case : Quand utiliser lequel ?",
    description: "Comparez les conventions camelCase et snake_case. Découvrez quels langages utilisent laquelle, les règles de conversion et comment choisir.",
    body: `
<p><strong>camelCase</strong> et <strong>snake_case</strong> sont les deux conventions de nommage les plus courantes en programmation.</p>
<h2>Qu'est-ce que camelCase ?</h2>
<p>camelCase joint les mots sans séparateur, en mettant en majuscule la première lettre de chaque mot sauf le premier : <code>myVariableName</code>. Standard en JavaScript, Java et TypeScript.</p>
<h2>Qu'est-ce que snake_case ?</h2>
<p>snake_case sépare les mots avec des underscores et utilise uniquement des minuscules : <code>my_variable_name</code>. Standard en Python, Ruby et SQL.</p>
<h2>Comparaison par langage</h2>
<table><thead><tr><th>Convention</th><th>Langages</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, SQL</td></tr>
</tbody></table>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a> ou <a href="%SNAKE%">convertisseur snake_case</a> pour des résultats instantanés.</p>
`,
  }),
};
