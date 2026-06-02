import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-name-variables", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
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
<p>Use the <a href="%CAMEL%">camelCase converter</a> for JavaScript variables, <a href="%SNAKE%">snake_case converter</a> for Python, or the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "変数の命名方法：読みやすいコードのための開発者ガイド",
    description: "コードを自己文書化する変数命名のベストプラクティス。命名ルール、パターン、アンチパターン、言語別の規則を解説します。",
    body: `
<p>変数命名はプログラマーが最も頻繁に行う設計判断です。良い名前はコードを自己文書化し、悪い名前はロジックの解読を強います。</p>
<h2>基本原則</h2>
<ul>
<li><strong>意図を明らかにする：</strong> <code>d</code>ではなく<code>elapsedTimeInDays</code></li>
<li><strong>誤解を招かない：</strong> 実際はセットなのに<code>accountList</code>と名付けない</li>
<li><strong>発音可能な名前を使う：</strong> <code>genymdhms</code>ではなく<code>generationTimestamp</code></li>
<li><strong>検索可能な名前を使う：</strong> <code>7</code>ではなく<code>MAX_STUDENTS_PER_CLASS</code></li>
</ul>
<h2>型別の命名パターン</h2>
<table><thead><tr><th>型</th><th>パターン</th><th>例</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + 形容詞</td><td><code>isActive</code>、<code>hasPermission</code></td></tr>
<tr><td>カウンター</td><td>名詞 + Count/Total</td><td><code>retryCount</code>、<code>totalItems</code></td></tr>
<tr><td>コレクション</td><td>複数形の名詞</td><td><code>users</code>、<code>selectedItems</code></td></tr>
<tr><td>関数</td><td>動詞 + 名詞</td><td><code>calculateTotal</code>、<code>fetchUser</code></td></tr>
<tr><td>イベントハンドラー</td><td>handle/on + イベント</td><td><code>handleClick</code>、<code>onSubmit</code></td></tr>
</tbody></table>
<h2>アンチパターン</h2>
<ul>
<li><code>data</code>、<code>info</code>、<code>temp</code>、<code>stuff</code> — 曖昧すぎる</li>
<li><code>a</code>、<code>b</code>、<code>x</code> — ラムダや数式でのみ許容</li>
<li><code>flag</code> — 何のフラグ？代わりに<code>isEnabled</code>を使う</li>
<li>ハンガリアン記法（<code>strName</code>、<code>intAge</code>） — モダンIDEでは時代遅れ</li>
</ul>
<h2>名前をフォーマット</h2>
<p>JavaScriptには<a href="%CAMEL%">camelCaseコンバーター</a>、Pythonには<a href="%SNAKE%">snake_caseコンバーター</a>、または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Variablen benennen: Ein Entwickler-Leitfaden für sauberen Code",
    description: "Lernen Sie Best Practices für Variablenbenennung, die Code selbstdokumentierend macht. Regeln, Muster, Anti-Muster und sprachspezifische Konventionen.",
    body: `
<p>Variablenbenennung ist die häufigste Designentscheidung eines Programmierers. Gute Namen machen Code selbstdokumentierend; schlechte Namen zwingen Leser, Ihre Logik zu entschlüsseln.</p>
<h2>Kernprinzipien</h2>
<ul>
<li><strong>Absicht offenlegen:</strong> <code>elapsedTimeInDays</code> statt <code>d</code></li>
<li><strong>Desinformation vermeiden:</strong> Nennen Sie eine Liste nicht <code>accountList</code>, wenn es eigentlich ein Set ist</li>
<li><strong>Aussprechbare Namen verwenden:</strong> <code>generationTimestamp</code> statt <code>genymdhms</code></li>
<li><strong>Suchbare Namen verwenden:</strong> <code>MAX_STUDENTS_PER_CLASS</code> statt <code>7</code></li>
</ul>
<h2>Namensmuster nach Typ</h2>
<table><thead><tr><th>Typ</th><th>Muster</th><th>Beispiele</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + Adjektiv</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Zähler</td><td>Substantiv + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Sammlung</td><td>Plural-Substantiv</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Funktion</td><td>Verb + Substantiv</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event-Handler</td><td>handle/on + Event</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Anti-Muster</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — zu vage</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — nur in Lambdas und Mathe-Formeln akzeptabel</li>
<li><code>flag</code> — Flag wofür? Verwenden Sie stattdessen <code>isEnabled</code></li>
<li>Ungarische Notation (<code>strName</code>, <code>intAge</code>) — veraltet mit modernen IDEs</li>
</ul>
<h2>Namen formatieren</h2>
<p>Verwenden Sie den <a href="%CAMEL%">camelCase-Konverter</a> für JavaScript-Variablen, den <a href="%SNAKE%">snake_case-Konverter</a> für Python oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo nombrar variables: Guía para código limpio y legible",
    description: "Aprende las mejores prácticas de nomenclatura de variables que hacen el código autodocumentado. Cubre reglas, patrones, antipatrones y convenciones por lenguaje.",
    body: `
<p>Nombrar variables es la decisión de diseño más frecuente que toma un programador. Buenos nombres hacen el código autodocumentado; malos nombres obligan a los lectores a descifrar tu lógica.</p>
<h2>Principios fundamentales</h2>
<ul>
<li><strong>Revelar la intención:</strong> <code>elapsedTimeInDays</code> no <code>d</code></li>
<li><strong>Evitar desinformación:</strong> No llames <code>accountList</code> a algo que en realidad es un set</li>
<li><strong>Usar nombres pronunciables:</strong> <code>generationTimestamp</code> no <code>genymdhms</code></li>
<li><strong>Usar nombres buscables:</strong> <code>MAX_STUDENTS_PER_CLASS</code> no <code>7</code></li>
</ul>
<h2>Patrones de nombres por tipo</h2>
<table><thead><tr><th>Tipo</th><th>Patrón</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + adjetivo</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Contador</td><td>sustantivo + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Colección</td><td>Sustantivo en plural</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Función</td><td>verbo + sustantivo</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event handler</td><td>handle/on + evento</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Antipatrones</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — demasiado vagos</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — aceptables solo en lambdas y fórmulas matemáticas</li>
<li><code>flag</code> — ¿flag de qué? Usa <code>isEnabled</code> en su lugar</li>
<li>Notación húngara (<code>strName</code>, <code>intAge</code>) — obsoleta con IDEs modernos</li>
</ul>
<h2>Formatea tus nombres</h2>
<p>Usa el <a href="%CAMEL%">conversor camelCase</a> para variables JavaScript, el <a href="%SNAKE%">conversor snake_case</a> para Python, o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como nomear variáveis: Guia para código limpo e legível",
    description: "Aprenda as melhores práticas de nomeação de variáveis que tornam o código autodocumentado. Cobre regras, padrões, antipadrões e convenções por linguagem.",
    body: `
<p>Nomear variáveis é a decisão de design mais frequente que um programador toma. Bons nomes tornam o código autodocumentado; maus nomes forçam os leitores a decifrar sua lógica.</p>
<h2>Princípios fundamentais</h2>
<ul>
<li><strong>Revelar a intenção:</strong> <code>elapsedTimeInDays</code> e não <code>d</code></li>
<li><strong>Evitar desinformação:</strong> Não chame de <code>accountList</code> algo que na verdade é um set</li>
<li><strong>Usar nomes pronunciáveis:</strong> <code>generationTimestamp</code> e não <code>genymdhms</code></li>
<li><strong>Usar nomes pesquisáveis:</strong> <code>MAX_STUDENTS_PER_CLASS</code> e não <code>7</code></li>
</ul>
<h2>Padrões de nomes por tipo</h2>
<table><thead><tr><th>Tipo</th><th>Padrão</th><th>Exemplos</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + adjetivo</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Contador</td><td>substantivo + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Coleção</td><td>Substantivo no plural</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Função</td><td>verbo + substantivo</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event handler</td><td>handle/on + evento</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Antipadrões</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — vagos demais</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — aceitáveis apenas em lambdas e fórmulas matemáticas</li>
<li><code>flag</code> — flag de quê? Use <code>isEnabled</code> em vez disso</li>
<li>Notação húngara (<code>strName</code>, <code>intAge</code>) — obsoleta com IDEs modernos</li>
</ul>
<h2>Formate seus nomes</h2>
<p>Use o <a href="%CAMEL%">conversor camelCase</a> para variáveis JavaScript, o <a href="%SNAKE%">conversor snake_case</a> para Python, ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment nommer les variables : Guide pour un code propre et lisible",
    description: "Apprenez les bonnes pratiques de nommage des variables pour un code autodocumenté. Règles, patterns, anti-patterns et conventions par langage.",
    body: `
<p>Le nommage des variables est la décision de conception la plus fréquente d'un programmeur. De bons noms rendent le code autodocumenté ; de mauvais noms forcent les lecteurs à déchiffrer votre logique.</p>
<h2>Principes fondamentaux</h2>
<ul>
<li><strong>Révéler l'intention :</strong> <code>elapsedTimeInDays</code> et non <code>d</code></li>
<li><strong>Éviter la désinformation :</strong> Ne nommez pas <code>accountList</code> quelque chose qui est en fait un set</li>
<li><strong>Utiliser des noms prononçables :</strong> <code>generationTimestamp</code> et non <code>genymdhms</code></li>
<li><strong>Utiliser des noms recherchables :</strong> <code>MAX_STUDENTS_PER_CLASS</code> et non <code>7</code></li>
</ul>
<h2>Patterns de nommage par type</h2>
<table><thead><tr><th>Type</th><th>Pattern</th><th>Exemples</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + adjectif</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Compteur</td><td>nom + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Collection</td><td>Nom au pluriel</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Fonction</td><td>verbe + nom</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event handler</td><td>handle/on + événement</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Anti-patterns</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — trop vagues</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — acceptables uniquement dans les lambdas et formules mathématiques</li>
<li><code>flag</code> — flag de quoi ? Utilisez <code>isEnabled</code> à la place</li>
<li>Notation hongroise (<code>strName</code>, <code>intAge</code>) — obsolète avec les IDEs modernes</li>
</ul>
<h2>Formatez vos noms</h2>
<p>Utilisez le <a href="%CAMEL%">convertisseur camelCase</a> pour les variables JavaScript, le <a href="%SNAKE%">convertisseur snake_case</a> pour Python, ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
