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
    description: "camelCaseとsnake_caseの命名規則を比較。どの言語がどちらを使うか、変換ルール、選択基準を解説します。",
    body: `
<p><strong>camelCase</strong>と<strong>snake_case</strong>はプログラミングで最も一般的な2つの命名規則です。正しい選択は、使用する言語、フレームワーク、コンテキストに依存します。</p>
<h2>camelCaseとは？</h2>
<p>camelCaseは単語を区切り文字なしで結合し、最初の単語以外の先頭を大文字にします：<code>myVariableName</code>、<code>getUserById</code>、<code>totalItemCount</code>。</p>
<h2>snake_caseとは？</h2>
<p>snake_caseはアンダースコアで単語を区切り、すべて小文字にします：<code>my_variable_name</code>、<code>get_user_by_id</code>、<code>total_item_count</code>。</p>
<h2>比較表</h2>
<table>
<thead><tr><th>特徴</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>区切り</td><td>なし（大文字）</td><td>アンダースコア（_）</td></tr>
<tr><td>先頭文字</td><td>小文字</td><td>小文字</td></tr>
<tr><td>可読性</td><td>短い名前に適する</td><td>長い名前に優れる</td></tr>
<tr><td>入力速度</td><td>速い（アンダースコア不要）</td><td>遅い（アンダースコアキー）</td></tr>
<tr><td>長さ</td><td>短い</td><td>長い</td></tr>
</tbody>
</table>
<h2>どの言語がどちらを使う？</h2>
<table>
<thead><tr><th>規則</th><th>言語/フレームワーク</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript、TypeScript、Java、Swift、Kotlin、Dart、JSON</td></tr>
<tr><td>snake_case</td><td>Python、Ruby、Rust、Elixir、PHP（部分的）、SQL、C（部分的）</td></tr>
</tbody>
</table>
<h2>camelCaseを使う場面</h2>
<ul>
<li>JavaScriptまたはTypeScriptの変数と関数</li>
<li>Javaのメソッドと変数名</li>
<li>フロントエンド寄りAPIのJSONオブジェクトキー</li>
<li>SwiftとKotlinの識別子</li>
</ul>
<h2>snake_caseを使う場面</h2>
<ul>
<li>Pythonの変数と関数（PEP 8で規定）</li>
<li>Rubyのメソッドと変数名</li>
<li>データベースのテーブル名とカラム名</li>
<li>Python/RubyバックエンドのREST APIフィールド</li>
<li>環境変数名（UPPER_SNAKE_CASE）</li>
</ul>
<h2>変換方法</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>または<a href="%SNAKE%">snake_caseコンバーター</a>で即座に変換できます。<a href="%HUB%">ケースコンバーターハブ</a>ですべての形式を一度に確認できます。</p>
<h2>混在コードベースの問題</h2>
<p>両方の規則に遭遇する最も一般的な状況は、Python/Rubyバックエンド（snake_case）とJavaScriptフロントエンド（camelCase）の境界です。一般的な解決策は、ミドルウェアやユーティリティ関数で境界においてAPIレスポンスキーを変換することです。</p>
<h2>まとめ</h2>
<p>普遍的に「良い」規則はありません。使用する言語やフレームワークの標準に従いましょう。どの規則を選ぶかよりも、プロジェクト内の一貫性が遥かに重要です。</p>
`,
  }),
  de: build("de", {
    title: "camelCase vs snake_case: Wann was verwenden?",
    description: "Vergleichen Sie camelCase und snake_case. Erfahren Sie, welche Sprachen welche verwenden, Konvertierungsregeln und wann Sie sich für eine entscheiden.",
    body: `
<p><strong>camelCase</strong> und <strong>snake_case</strong> sind die zwei häufigsten Namenskonventionen in der Programmierung. Die richtige Wahl hängt von der Sprache, dem Framework und dem Kontext ab.</p>
<h2>Was ist camelCase?</h2>
<p>camelCase verbindet Wörter ohne Trennzeichen und schreibt den ersten Buchstaben jedes Wortes groß (außer dem ersten): <code>myVariableName</code>, <code>getUserById</code>, <code>totalItemCount</code>.</p>
<h2>Was ist snake_case?</h2>
<p>snake_case trennt Wörter mit Unterstrichen in Kleinbuchstaben: <code>my_variable_name</code>, <code>get_user_by_id</code>, <code>total_item_count</code>.</p>
<h2>Direkter Vergleich</h2>
<table>
<thead><tr><th>Merkmal</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>Trennzeichen</td><td>Keines (Großbuchstabe)</td><td>Unterstrich (_)</td></tr>
<tr><td>Erster Buchstabe</td><td>Kleinbuchstabe</td><td>Kleinbuchstabe</td></tr>
<tr><td>Lesbarkeit</td><td>Gut für kurze Namen</td><td>Hervorragend für lange Namen</td></tr>
<tr><td>Tippgeschwindigkeit</td><td>Schneller (kein Unterstrich)</td><td>Langsamer (Unterstrich-Taste)</td></tr>
<tr><td>Länge</td><td>Kürzer</td><td>Länger</td></tr>
</tbody>
</table>
<h2>Welche Sprachen verwenden was?</h2>
<table>
<thead><tr><th>Konvention</th><th>Sprachen / Frameworks</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin, Dart, JSON</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, Elixir, PHP (teilweise), SQL, C (teilweise)</td></tr>
</tbody>
</table>
<h2>Wann camelCase verwenden</h2>
<ul>
<li>JavaScript- oder TypeScript-Variablen und -Funktionen</li>
<li>Java-Methoden- und Variablennamen</li>
<li>JSON-Objektschlüssel in Frontend-zentrierten APIs</li>
<li>Swift- und Kotlin-Bezeichner</li>
</ul>
<h2>Wann snake_case verwenden</h2>
<ul>
<li>Python-Variablen und -Funktionen (PEP 8 schreibt dies vor)</li>
<li>Ruby-Methoden- und Variablennamen</li>
<li>Datenbanktabellen- und Spaltennamen</li>
<li>REST-API-Felder für Python/Ruby-Backends</li>
<li>Umgebungsvariablen (in UPPER_SNAKE_CASE)</li>
</ul>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%CAMEL%">camelCase-Konverter</a> oder <a href="%SNAKE%">snake_case-Konverter</a>, oder probieren Sie den <a href="%HUB%">Case-Converter-Hub</a> für alle Formate auf einen Blick.</p>
<h2>Das Mischcode-Problem</h2>
<p>Die häufigste Situation, in der Entwickler auf beide Konventionen treffen, ist die Grenze zwischen einem Python/Ruby-Backend (snake_case) und einem JavaScript-Frontend (camelCase). Die typische Lösung ist die Konvertierung der API-Antwortschlüssel an der Grenze mit einer Middleware oder Utility-Funktion.</p>
<h2>Zusammenfassung</h2>
<p>Es gibt keine universell „bessere" Konvention. Folgen Sie dem Standard Ihrer Sprache oder Ihres Frameworks. Konsistenz innerhalb eines Projekts ist weitaus wichtiger als die Wahl der Konvention.</p>
`,
  }),
  es: build("es", {
    title: "camelCase vs snake_case: Cuándo usar cada uno",
    description: "Compara las convenciones camelCase y snake_case. Aprende qué lenguajes usan cuál, reglas de conversión y cuándo elegir uno sobre otro.",
    body: `
<p><strong>camelCase</strong> y <strong>snake_case</strong> son las dos convenciones de nombres más comunes en programación. Elegir la correcta depende del lenguaje, framework y contexto.</p>
<h2>¿Qué es camelCase?</h2>
<p>camelCase une palabras sin separador, capitalizando la primera letra de cada palabra excepto la primera: <code>myVariableName</code>, <code>getUserById</code>, <code>totalItemCount</code>.</p>
<h2>¿Qué es snake_case?</h2>
<p>snake_case separa palabras con guiones bajos en minúsculas: <code>my_variable_name</code>, <code>get_user_by_id</code>, <code>total_item_count</code>.</p>
<h2>Comparación directa</h2>
<table>
<thead><tr><th>Característica</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>Separador</td><td>Ninguno (mayúscula)</td><td>Guion bajo (_)</td></tr>
<tr><td>Primera letra</td><td>Minúscula</td><td>Minúscula</td></tr>
<tr><td>Legibilidad</td><td>Buena para nombres cortos</td><td>Excelente para nombres largos</td></tr>
<tr><td>Velocidad de escritura</td><td>Más rápido (sin guion bajo)</td><td>Más lento (tecla guion bajo)</td></tr>
<tr><td>Longitud</td><td>Más corto</td><td>Más largo</td></tr>
</tbody>
</table>
<h2>¿Qué lenguajes usan cuál?</h2>
<table>
<thead><tr><th>Convención</th><th>Lenguajes / Frameworks</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin, Dart, JSON</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, Elixir, PHP (parcialmente), SQL, C (parcialmente)</td></tr>
</tbody>
</table>
<h2>Cuándo usar camelCase</h2>
<ul>
<li>Variables y funciones de JavaScript o TypeScript</li>
<li>Nombres de métodos y variables en Java</li>
<li>Claves de objetos JSON en APIs centradas en frontend</li>
<li>Identificadores de Swift y Kotlin</li>
</ul>
<h2>Cuándo usar snake_case</h2>
<ul>
<li>Variables y funciones de Python (PEP 8 lo exige)</li>
<li>Nombres de métodos y variables en Ruby</li>
<li>Nombres de tablas y columnas de bases de datos</li>
<li>Campos de API REST para backends Python/Ruby</li>
<li>Nombres de variables de entorno (en UPPER_SNAKE_CASE)</li>
</ul>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%CAMEL%">conversor camelCase</a> o <a href="%SNAKE%">conversor snake_case</a>, o prueba el <a href="%HUB%">hub de conversión de case</a> para ver todos los formatos a la vez.</p>
<h2>El problema del código mixto</h2>
<p>La situación más común donde los desarrolladores encuentran ambas convenciones es en la frontera entre un backend Python/Ruby (snake_case) y un frontend JavaScript (camelCase). La solución típica es convertir las claves de respuesta API en la frontera usando middleware o una función utilitaria.</p>
<h2>Resumen</h2>
<p>No existe una convención universalmente «mejor». Sigue el estándar del lenguaje o framework que estés usando. La consistencia dentro del proyecto importa mucho más que qué convención elijas.</p>
`,
  }),
  pt: build("pt", {
    title: "camelCase vs snake_case: Quando usar cada um",
    description: "Compare as convenções camelCase e snake_case. Saiba quais linguagens usam qual, regras de conversão e quando escolher uma sobre a outra.",
    body: `
<p><strong>camelCase</strong> e <strong>snake_case</strong> são as duas convenções de nomes mais comuns na programação. Escolher a correta depende da linguagem, framework e contexto.</p>
<h2>O que é camelCase?</h2>
<p>camelCase une palavras sem separador, capitalizando a primeira letra de cada palavra exceto a primeira: <code>myVariableName</code>, <code>getUserById</code>, <code>totalItemCount</code>.</p>
<h2>O que é snake_case?</h2>
<p>snake_case separa palavras com underscores em minúsculas: <code>my_variable_name</code>, <code>get_user_by_id</code>, <code>total_item_count</code>.</p>
<h2>Comparação direta</h2>
<table>
<thead><tr><th>Característica</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>Separador</td><td>Nenhum (maiúscula)</td><td>Underscore (_)</td></tr>
<tr><td>Primeira letra</td><td>Minúscula</td><td>Minúscula</td></tr>
<tr><td>Legibilidade</td><td>Boa para nomes curtos</td><td>Excelente para nomes longos</td></tr>
<tr><td>Velocidade de digitação</td><td>Mais rápido (sem underscore)</td><td>Mais lento (tecla underscore)</td></tr>
<tr><td>Comprimento</td><td>Mais curto</td><td>Mais longo</td></tr>
</tbody>
</table>
<h2>Quais linguagens usam qual?</h2>
<table>
<thead><tr><th>Convenção</th><th>Linguagens / Frameworks</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin, Dart, JSON</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, Elixir, PHP (parcialmente), SQL, C (parcialmente)</td></tr>
</tbody>
</table>
<h2>Quando usar camelCase</h2>
<ul>
<li>Variáveis e funções JavaScript ou TypeScript</li>
<li>Nomes de métodos e variáveis em Java</li>
<li>Chaves de objetos JSON em APIs centradas no frontend</li>
<li>Identificadores Swift e Kotlin</li>
</ul>
<h2>Quando usar snake_case</h2>
<ul>
<li>Variáveis e funções Python (PEP 8 exige isso)</li>
<li>Nomes de métodos e variáveis em Ruby</li>
<li>Nomes de tabelas e colunas de banco de dados</li>
<li>Campos de API REST para backends Python/Ruby</li>
<li>Nomes de variáveis de ambiente (em UPPER_SNAKE_CASE)</li>
</ul>
<h2>Conversão</h2>
<p>Use o nosso <a href="%CAMEL%">conversor camelCase</a> ou <a href="%SNAKE%">conversor snake_case</a>, ou experimente o <a href="%HUB%">hub de conversão de case</a> para ver todos os formatos de uma vez.</p>
<h2>O problema do código misto</h2>
<p>A situação mais comum onde os desenvolvedores encontram ambas as convenções é na fronteira entre um backend Python/Ruby (snake_case) e um frontend JavaScript (camelCase). A solução típica é converter as chaves de resposta da API na fronteira usando middleware ou uma função utilitária.</p>
<h2>Resumo</h2>
<p>Não existe uma convenção universalmente «melhor». Siga o padrão da linguagem ou framework que estiver usando. A consistência dentro do projeto importa muito mais do que qual convenção você escolhe.</p>
`,
  }),
  fr: build("fr", {
    title: "camelCase vs snake_case : Quand utiliser lequel ?",
    description: "Comparez les conventions camelCase et snake_case. Découvrez quels langages utilisent laquelle, les règles de conversion et quand choisir l'une plutôt que l'autre.",
    body: `
<p><strong>camelCase</strong> et <strong>snake_case</strong> sont les deux conventions de nommage les plus courantes en programmation. Le bon choix dépend du langage, du framework et du contexte.</p>
<h2>Qu'est-ce que camelCase ?</h2>
<p>camelCase joint les mots sans séparateur, en mettant en majuscule la première lettre de chaque mot sauf le premier : <code>myVariableName</code>, <code>getUserById</code>, <code>totalItemCount</code>.</p>
<h2>Qu'est-ce que snake_case ?</h2>
<p>snake_case sépare les mots avec des underscores en minuscules : <code>my_variable_name</code>, <code>get_user_by_id</code>, <code>total_item_count</code>.</p>
<h2>Comparaison directe</h2>
<table>
<thead><tr><th>Caractéristique</th><th>camelCase</th><th>snake_case</th></tr></thead>
<tbody>
<tr><td>Séparateur</td><td>Aucun (majuscule)</td><td>Underscore (_)</td></tr>
<tr><td>Première lettre</td><td>Minuscule</td><td>Minuscule</td></tr>
<tr><td>Lisibilité</td><td>Bonne pour les noms courts</td><td>Excellente pour les noms longs</td></tr>
<tr><td>Vitesse de frappe</td><td>Plus rapide (pas d'underscore)</td><td>Plus lent (touche underscore)</td></tr>
<tr><td>Longueur</td><td>Plus court</td><td>Plus long</td></tr>
</tbody>
</table>
<h2>Quels langages utilisent quoi ?</h2>
<table>
<thead><tr><th>Convention</th><th>Langages / Frameworks</th></tr></thead>
<tbody>
<tr><td>camelCase</td><td>JavaScript, TypeScript, Java, Swift, Kotlin, Dart, JSON</td></tr>
<tr><td>snake_case</td><td>Python, Ruby, Rust, Elixir, PHP (partiellement), SQL, C (partiellement)</td></tr>
</tbody>
</table>
<h2>Quand utiliser camelCase</h2>
<ul>
<li>Variables et fonctions JavaScript ou TypeScript</li>
<li>Noms de méthodes et variables Java</li>
<li>Clés d'objets JSON dans les APIs orientées frontend</li>
<li>Identifiants Swift et Kotlin</li>
</ul>
<h2>Quand utiliser snake_case</h2>
<ul>
<li>Variables et fonctions Python (PEP 8 l'exige)</li>
<li>Noms de méthodes et variables Ruby</li>
<li>Noms de tables et colonnes de bases de données</li>
<li>Champs d'API REST pour backends Python/Ruby</li>
<li>Noms de variables d'environnement (en UPPER_SNAKE_CASE)</li>
</ul>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%CAMEL%">convertisseur camelCase</a> ou <a href="%SNAKE%">convertisseur snake_case</a>, ou essayez le <a href="%HUB%">hub de conversion de casse</a> pour voir tous les formats d'un coup.</p>
<h2>Le problème du code mixte</h2>
<p>La situation la plus courante où les développeurs rencontrent les deux conventions est à la frontière entre un backend Python/Ruby (snake_case) et un frontend JavaScript (camelCase). La solution typique est de convertir les clés de réponse API à la frontière avec un middleware ou une fonction utilitaire.</p>
<h2>Résumé</h2>
<p>Il n'existe pas de convention universellement « meilleure ». Suivez le standard du langage ou framework que vous utilisez. La cohérence au sein d'un projet importe bien plus que le choix de la convention.</p>
`,
  }),
};
