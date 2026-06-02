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
    description: "camelCase、snake_case、PascalCase、kebab-caseなど、プログラミングの主要な命名規則を解説。それぞれがいつ、なぜ使われるかを理解しましょう。",
    body: `
<p>命名規則はソースコードの識別子を選択するための体系的なルールです。適切な規則を使うことで可読性が向上し、バグが減り、チーム間の保守が容易になります。</p>
<h2>なぜ命名規則が重要か</h2>
<p>コードは書かれる回数より読まれる回数の方が圧倒的に多いです。一貫した命名により、変数・関数・クラスの目的とスコープが一目でわかります。</p>
<h2>主要な命名規則</h2>
<h3>camelCase</h3>
<p>区切り文字なしで2番目以降の単語を大文字に：<code>getUserName</code>、<code>totalPrice</code>。JavaScript、TypeScript、Java、Swiftの変数・関数で標準。</p>
<h3>PascalCase（UpperCamelCase）</h3>
<p>camelCaseと同様だが最初の単語も大文字：<code>UserAccount</code>、<code>HttpClient</code>。クラス名、Reactコンポーネント、TypeScriptインターフェースで使用。</p>
<h3>snake_case</h3>
<p>アンダースコア区切りですべて小文字：<code>user_name</code>、<code>get_total_price</code>。PEP 8でPythonに規定、Ruby、Rust、SQLでも標準。</p>
<h3>SCREAMING_SNAKE_CASE</h3>
<p>すべて大文字＋アンダースコア：<code>MAX_RETRY_COUNT</code>、<code>API_BASE_URL</code>。ほとんどの言語の定数と環境変数。</p>
<h3>kebab-case</h3>
<p>ハイフン区切りですべて小文字：<code>my-component</code>、<code>user-profile</code>。CSSクラス、HTML属性、URLスラッグ、CLIフラグで標準。</p>
<h3>dot.case</h3>
<p>ドット区切り：<code>com.example.app</code>。Javaパッケージ名やプロパティファイルキー。</p>
<h2>言語別の規則</h2>
<table>
<thead><tr><th>言語</th><th>変数/関数</th><th>クラス</th><th>定数</th></tr></thead>
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
<h2>ベストプラクティス</h2>
<ul>
<li><strong>言語のスタイルガイドに従う。</strong>PythonはPEP 8、JavaはGoogleスタイル、JavaScriptはAirbnb — 独自ルールを作らない。</li>
<li><strong>プロジェクト内で一貫させる。</strong>同一ファイルでcamelCaseとsnake_caseを混在させない。</li>
<li><strong>記述的な名前を使う。</strong><code>getU</code>より<code>getUserById</code>が望ましい。規則はフォーマットであり、中身は意味のあるものにすべき。</li>
<li><strong>略語を避ける。</strong><code>calcTotPrc</code>より<code>calculateTotalPrice</code>。</li>
<li><strong>エコシステムに合わせる。</strong>ReactプロジェクトでcamelCaseプロパティを使い、Python APIがsnake_caseを返す場合は、境界で変換する。</li>
</ul>
<h2>まとめ</h2>
<p>命名規則は恣意的なものではありません。スコープ、型、意図についての情報をエンコードしています。使用言語の標準を学び、一貫して適用すれば、コードの読みやすさ・レビュー・保守性が向上します。</p>
<h2>規則間の変換</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>、<a href="%SNAKE%">snake_caseコンバーター</a>、<a href="%PASCAL%">PascalCaseコンバーター</a>、<a href="%KEBAB%">kebab-caseコンバーター</a>をご利用ください。<a href="%HUB%">ケース変換ハブ</a>ですべての形式を並べて比較できます。</p>
`,
  }),
  de: build("de", {
    title: "Namenskonventionen in der Programmierung: Der vollständige Leitfaden",
    description: "Lernen Sie alle wichtigen Namenskonventionen — camelCase, snake_case, PascalCase, kebab-case und mehr. Verstehen Sie, wann und warum jede verwendet wird.",
    body: `
<p>Namenskonventionen sind systematische Regeln für die Wahl von Bezeichnern im Quellcode. Die richtige Konvention verbessert die Lesbarkeit, reduziert Bugs und erleichtert die Wartung über Teams hinweg.</p>
<h2>Warum Namenskonventionen wichtig sind</h2>
<p>Code wird weitaus häufiger gelesen als geschrieben. Konsistente Benennung ermöglicht es Entwicklern, Zweck und Gültigkeitsbereich einer Variable, Funktion oder Klasse auf einen Blick zu erkennen.</p>
<h2>Die wichtigsten Konventionen</h2>
<h3>camelCase</h3>
<p>Wörter ohne Trennzeichen, ab dem zweiten Wort großgeschrieben: <code>getUserName</code>, <code>totalPrice</code>. Standard für Variablen und Funktionen in JavaScript, TypeScript, Java und Swift.</p>
<h3>PascalCase (UpperCamelCase)</h3>
<p>Wie camelCase, aber auch das erste Wort groß: <code>UserAccount</code>, <code>HttpClient</code>. Für Klassennamen, React-Komponenten und TypeScript-Interfaces.</p>
<h3>snake_case</h3>
<p>Unterstriche als Trennzeichen, alles klein: <code>user_name</code>, <code>get_total_price</code>. Von PEP 8 für Python vorgeschrieben, auch Standard in Ruby, Rust und SQL.</p>
<h3>SCREAMING_SNAKE_CASE</h3>
<p>Alles groß mit Unterstrichen: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>. Für Konstanten und Umgebungsvariablen.</p>
<h3>kebab-case</h3>
<p>Bindestriche als Trennzeichen, alles klein: <code>my-component</code>, <code>user-profile</code>. Standard in CSS, HTML-Attributen, URLs und CLI-Flags.</p>
<h2>Konvention nach Sprache</h2>
<table>
<thead><tr><th>Sprache</th><th>Variablen/Funktionen</th><th>Klassen</th><th>Konstanten</th></tr></thead>
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
<li><strong>Folgen Sie dem Styleguide Ihrer Sprache.</strong> PEP 8 für Python, Google Style für Java, Airbnb für JavaScript — erfinden Sie keine eigenen Regeln.</li>
<li><strong>Seien Sie innerhalb eines Projekts konsistent.</strong> camelCase und snake_case in derselben Datei zu mischen verwirrt alle.</li>
<li><strong>Verwenden Sie beschreibende Namen.</strong> <code>getUserById</code> statt <code>getU</code>. Die Konvention ist das Format; der Inhalt sollte aussagekräftig sein.</li>
<li><strong>Vermeiden Sie Abkürzungen.</strong> <code>calculateTotalPrice</code> statt <code>calcTotPrc</code>.</li>
<li><strong>Passen Sie sich dem Ökosystem an.</strong> Wenn Ihr React-Projekt camelCase-Props nutzt, aber Ihre Python-API snake_case zurückgibt, konvertieren Sie an der Grenze.</li>
</ul>
<h2>Fazit</h2>
<p>Namenskonventionen sind nicht willkürlich. Sie codieren Informationen über Gültigkeitsbereich, Typ und Absicht. Lernen Sie den Standard Ihrer Sprache, wenden Sie ihn konsistent an, und Ihr Code wird leichter zu lesen, zu reviewen und zu warten sein.</p>
<h2>Zwischen Konventionen umwandeln</h2>
<p>Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a>, <a href="%SNAKE%">snake_case-Konverter</a>, <a href="%PASCAL%">PascalCase-Konverter</a> oder <a href="%KEBAB%">kebab-case-Konverter</a>. Oder probieren Sie den <a href="%HUB%">Case-Converter-Hub</a> zum direkten Vergleich aller Formate.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en programación: Guía completa",
    description: "Aprende todas las convenciones de nombres en programación — camelCase, snake_case, PascalCase, kebab-case y más. Entiende cuándo y por qué usar cada una.",
    body: `
<p>Las convenciones de nombres son reglas sistemáticas para elegir identificadores en el código fuente. Usar la convención correcta mejora la legibilidad, reduce bugs y facilita el mantenimiento entre equipos.</p>
<h2>Por qué importan las convenciones</h2>
<p>El código se lee mucho más de lo que se escribe. Una nomenclatura consistente permite a los desarrolladores entender el propósito y alcance de una variable, función o clase de un vistazo.</p>
<h2>Las principales convenciones</h2>
<h3>camelCase</h3>
<p>Palabras unidas sin separador, mayúscula desde la segunda: <code>getUserName</code>, <code>totalPrice</code>. Estándar para variables y funciones en JavaScript, TypeScript, Java y Swift.</p>
<h3>PascalCase (UpperCamelCase)</h3>
<p>Como camelCase pero la primera también en mayúscula: <code>UserAccount</code>, <code>HttpClient</code>. Para nombres de clases, componentes React e interfaces TypeScript.</p>
<h3>snake_case</h3>
<p>Guiones bajos como separador, todo en minúsculas: <code>user_name</code>, <code>get_total_price</code>. Mandado por PEP 8 para Python, también estándar en Ruby, Rust y SQL.</p>
<h3>SCREAMING_SNAKE_CASE</h3>
<p>Todo en mayúsculas con guiones bajos: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>. Para constantes y variables de entorno.</p>
<h3>kebab-case</h3>
<p>Guiones como separador, todo en minúsculas: <code>my-component</code>, <code>user-profile</code>. Estándar en clases CSS, atributos HTML, slugs de URL y flags CLI.</p>
<h2>Convención por lenguaje</h2>
<table>
<thead><tr><th>Lenguaje</th><th>Variables/Funciones</th><th>Clases</th><th>Constantes</th></tr></thead>
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
<h2>Mejores prácticas</h2>
<ul>
<li><strong>Sigue la guía de estilo de tu lenguaje.</strong> PEP 8 para Python, Google Style para Java, Airbnb para JavaScript — no inventes tus propias reglas.</li>
<li><strong>Sé consistente dentro del proyecto.</strong> Mezclar camelCase y snake_case en el mismo archivo confunde a todos.</li>
<li><strong>Usa nombres descriptivos.</strong> <code>getUserById</code> en lugar de <code>getU</code>. La convención es el formato; el contenido debe ser significativo.</li>
<li><strong>Evita abreviaciones.</strong> <code>calculateTotalPrice</code> en lugar de <code>calcTotPrc</code>.</li>
<li><strong>Adáptate al ecosistema.</strong> Si tu proyecto React usa props en camelCase pero tu API Python devuelve snake_case, convierte en la frontera.</li>
</ul>
<h2>Conclusión</h2>
<p>Las convenciones de nombres no son arbitrarias. Codifican información sobre alcance, tipo e intención. Aprende el estándar de tu lenguaje, aplícalo consistentemente, y tu código será más fácil de leer, revisar y mantener.</p>
<h2>Convertir entre convenciones</h2>
<p>Usa nuestro <a href="%CAMEL%">conversor camelCase</a>, <a href="%SNAKE%">conversor snake_case</a>, <a href="%PASCAL%">conversor PascalCase</a> o <a href="%KEBAB%">conversor kebab-case</a>. O prueba el <a href="%HUB%">hub de conversión de case</a> para comparar todos los formatos.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes na programação: Guia completo",
    description: "Aprenda todas as convenções de nomes na programação — camelCase, snake_case, PascalCase, kebab-case e mais. Entenda quando e por que usar cada uma.",
    body: `
<p>Convenções de nomes são regras sistemáticas para escolher identificadores no código-fonte. Usar a convenção correta melhora a legibilidade, reduz bugs e facilita a manutenção entre equipes.</p>
<h2>Por que as convenções importam</h2>
<p>Código é lido muito mais vezes do que é escrito. Nomenclatura consistente permite que os desenvolvedores entendam o propósito e escopo de uma variável, função ou classe de relance.</p>
<h2>As principais convenções</h2>
<h3>camelCase</h3>
<p>Palavras unidas sem separador, maiúscula a partir da segunda: <code>getUserName</code>, <code>totalPrice</code>. Padrão para variáveis e funções em JavaScript, TypeScript, Java e Swift.</p>
<h3>PascalCase (UpperCamelCase)</h3>
<p>Como camelCase mas a primeira também em maiúscula: <code>UserAccount</code>, <code>HttpClient</code>. Para nomes de classes, componentes React e interfaces TypeScript.</p>
<h3>snake_case</h3>
<p>Underscores como separador, tudo em minúsculas: <code>user_name</code>, <code>get_total_price</code>. Mandado pelo PEP 8 para Python, também padrão em Ruby, Rust e SQL.</p>
<h3>SCREAMING_SNAKE_CASE</h3>
<p>Tudo em maiúsculas com underscores: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>. Para constantes e variáveis de ambiente.</p>
<h3>kebab-case</h3>
<p>Hifens como separador, tudo em minúsculas: <code>my-component</code>, <code>user-profile</code>. Padrão em classes CSS, atributos HTML, slugs de URL e flags CLI.</p>
<h2>Convenção por linguagem</h2>
<table>
<thead><tr><th>Linguagem</th><th>Variáveis/Funções</th><th>Classes</th><th>Constantes</th></tr></thead>
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
<h2>Melhores práticas</h2>
<ul>
<li><strong>Siga o guia de estilo da sua linguagem.</strong> PEP 8 para Python, Google Style para Java, Airbnb para JavaScript — não invente suas próprias regras.</li>
<li><strong>Seja consistente dentro do projeto.</strong> Misturar camelCase e snake_case no mesmo arquivo confunde a todos.</li>
<li><strong>Use nomes descritivos.</strong> <code>getUserById</code> em vez de <code>getU</code>. A convenção é o formato; o conteúdo deve ser significativo.</li>
<li><strong>Evite abreviações.</strong> <code>calculateTotalPrice</code> em vez de <code>calcTotPrc</code>.</li>
<li><strong>Adapte-se ao ecossistema.</strong> Se seu projeto React usa props em camelCase mas sua API Python retorna snake_case, converta na fronteira.</li>
</ul>
<h2>Conclusão</h2>
<p>Convenções de nomes não são arbitrárias. Elas codificam informações sobre escopo, tipo e intenção. Aprenda o padrão da sua linguagem, aplique-o consistentemente, e seu código será mais fácil de ler, revisar e manter.</p>
<h2>Converter entre convenções</h2>
<p>Use o nosso <a href="%CAMEL%">conversor camelCase</a>, <a href="%SNAKE%">conversor snake_case</a>, <a href="%PASCAL%">conversor PascalCase</a> ou <a href="%KEBAB%">conversor kebab-case</a>. Ou experimente o <a href="%HUB%">hub de conversão de case</a> para comparar todos os formatos.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage en programmation : Le guide complet",
    description: "Découvrez toutes les conventions de nommage en programmation — camelCase, snake_case, PascalCase, kebab-case et plus. Comprenez quand et pourquoi chacune est utilisée.",
    body: `
<p>Les conventions de nommage sont des règles systématiques pour choisir les identifiants dans le code source. La bonne convention améliore la lisibilité, réduit les bugs et facilite la maintenance entre équipes.</p>
<h2>Pourquoi les conventions importent</h2>
<p>Le code est lu bien plus souvent qu'il n'est écrit. Un nommage cohérent permet aux développeurs de comprendre le but et la portée d'une variable, fonction ou classe d'un coup d'œil.</p>
<h2>Les principales conventions</h2>
<h3>camelCase</h3>
<p>Mots joints sans séparateur, majuscule à partir du deuxième : <code>getUserName</code>, <code>totalPrice</code>. Standard pour les variables et fonctions en JavaScript, TypeScript, Java et Swift.</p>
<h3>PascalCase (UpperCamelCase)</h3>
<p>Comme camelCase mais le premier mot aussi en majuscule : <code>UserAccount</code>, <code>HttpClient</code>. Pour les noms de classes, composants React et interfaces TypeScript.</p>
<h3>snake_case</h3>
<p>Underscores comme séparateur, tout en minuscules : <code>user_name</code>, <code>get_total_price</code>. Imposé par PEP 8 pour Python, aussi standard en Ruby, Rust et SQL.</p>
<h3>SCREAMING_SNAKE_CASE</h3>
<p>Tout en majuscules avec underscores : <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>. Pour les constantes et variables d'environnement.</p>
<h3>kebab-case</h3>
<p>Tirets comme séparateur, tout en minuscules : <code>my-component</code>, <code>user-profile</code>. Standard pour les classes CSS, attributs HTML, slugs d'URL et flags CLI.</p>
<h2>Convention par langage</h2>
<table>
<thead><tr><th>Langage</th><th>Variables/Fonctions</th><th>Classes</th><th>Constantes</th></tr></thead>
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
<h2>Bonnes pratiques</h2>
<ul>
<li><strong>Suivez le guide de style de votre langage.</strong> PEP 8 pour Python, Google Style pour Java, Airbnb pour JavaScript — n'inventez pas vos propres règles.</li>
<li><strong>Soyez cohérent dans le projet.</strong> Mélanger camelCase et snake_case dans le même fichier sème la confusion.</li>
<li><strong>Utilisez des noms descriptifs.</strong> <code>getUserById</code> plutôt que <code>getU</code>. La convention est le format ; le contenu doit être significatif.</li>
<li><strong>Évitez les abréviations.</strong> <code>calculateTotalPrice</code> plutôt que <code>calcTotPrc</code>.</li>
<li><strong>Adaptez-vous à l'écosystème.</strong> Si votre projet React utilise des props en camelCase mais votre API Python renvoie du snake_case, convertissez à la frontière.</li>
</ul>
<h2>Conclusion</h2>
<p>Les conventions de nommage ne sont pas arbitraires. Elles encodent des informations sur la portée, le type et l'intention. Apprenez le standard de votre langage, appliquez-le systématiquement, et votre code sera plus facile à lire, à relire et à maintenir.</p>
<h2>Convertir entre conventions</h2>
<p>Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a>, <a href="%SNAKE%">convertisseur snake_case</a>, <a href="%PASCAL%">convertisseur PascalCase</a> ou <a href="%KEBAB%">convertisseur kebab-case</a>. Ou essayez le <a href="%HUB%">hub de conversion de casse</a> pour comparer tous les formats côte à côte.</p>
`,
  }),
};
