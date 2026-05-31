import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "title-case-rules-ap-apa-chicago", date: "2026-05-31", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%TITLE%", p(l, "/title-case-converter"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Title Case Rules: AP, APA, and Chicago Style Compared",
    description: "Learn the title case capitalization rules for AP, APA, and Chicago style. Comparison table, word-by-word rules, and common exceptions.",
    body: `
<p>Title case means capitalizing the major words in a title or heading. But which words count as "major" depends on which style guide you follow. The three most common are AP (Associated Press), APA (American Psychological Association), and Chicago (The Chicago Manual of Style).</p>

<h2>The Universal Rules</h2>
<p>All three style guides agree on these basics:</p>
<ul>
<li>Capitalize the first and last word, always</li>
<li>Capitalize nouns, verbs, adjectives, adverbs, and pronouns</li>
<li>Lowercase articles (<em>a</em>, <em>an</em>, <em>the</em>) unless they start the title</li>
<li>Lowercase coordinating conjunctions (<em>and</em>, <em>but</em>, <em>or</em>, <em>nor</em>, <em>for</em>, <em>yet</em>, <em>so</em>) unless they start the title</li>
</ul>

<h2>Where They Differ</h2>
<table>
<thead><tr><th>Rule</th><th>AP Style</th><th>APA Style</th><th>Chicago Style</th></tr></thead>
<tbody>
<tr><td>Prepositions</td><td>Lowercase if 3 letters or fewer</td><td>Lowercase if 3 letters or fewer</td><td>Lowercase all prepositions regardless of length</td></tr>
<tr><td>"With" (4 letters)</td><td>Capitalize</td><td>Capitalize</td><td>Lowercase</td></tr>
<tr><td>"Between" (7 letters)</td><td>Capitalize</td><td>Capitalize</td><td>Lowercase</td></tr>
<tr><td>Hyphenated compounds</td><td>Capitalize first element</td><td>Capitalize both elements</td><td>Capitalize both elements</td></tr>
<tr><td>"to" in infinitives</td><td>Lowercase</td><td>Lowercase</td><td>Lowercase</td></tr>
<tr><td>Words after colons</td><td>Capitalize</td><td>Capitalize</td><td>Capitalize</td></tr>
</tbody>
</table>

<h2>Examples</h2>
<table>
<thead><tr><th>Style</th><th>Title</th></tr></thead>
<tbody>
<tr><td>AP</td><td>The Man Who Sold the World</td></tr>
<tr><td>APA</td><td>The Man Who Sold the World</td></tr>
<tr><td>Chicago</td><td>The Man Who Sold the World</td></tr>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>Words That Are Always Lowercase</h2>
<p>Unless they are the first or last word of the title:</p>
<ul>
<li><strong>Articles:</strong> a, an, the</li>
<li><strong>Coordinating conjunctions:</strong> and, but, or, nor, for, yet, so</li>
<li><strong>Short prepositions (AP/APA):</strong> at, by, in, of, on, to, up</li>
<li><strong>All prepositions (Chicago):</strong> at, by, in, of, on, to, up, with, from, into, between, through, etc.</li>
</ul>

<h2>Words That Are Always Capitalized</h2>
<ul>
<li><strong>Verbs:</strong> Is, Are, Was, Be, Do, Has, Have (even short ones!)</li>
<li><strong>Pronouns:</strong> It, He, She, We, They, My, Your</li>
<li><strong>"Not":</strong> Always capitalized in all three styles</li>
</ul>

<h2>When to Use Which Style</h2>
<table>
<thead><tr><th>Context</th><th>Style Guide</th></tr></thead>
<tbody>
<tr><td>News articles, journalism</td><td>AP</td></tr>
<tr><td>Academic papers, research</td><td>APA</td></tr>
<tr><td>Books, publishing</td><td>Chicago</td></tr>
<tr><td>Blog posts, web content</td><td>AP or Chicago (pick one, be consistent)</td></tr>
</tbody>
</table>

<h2>Convert to Title Case Instantly</h2>
<p>Don't memorize the rules — use our <a href="%HUB%">case converter</a> to automatically apply title case. You can also generate URL slugs from titles with the <a href="%SLUG%">URL slug generator</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "タイトルケースのルール：AP、APA、シカゴスタイルの比較",
    description: "AP、APA、シカゴスタイルのタイトルケース大文字化ルールを比較。単語ごとのルールと一般的な例外。",
    body: `
<p>タイトルケースとは、タイトルや見出しの主要な単語を大文字にすることです。どの単語が「主要」かはスタイルガイドによって異なります。</p>
<h2>共通ルール</h2>
<ul>
<li>最初と最後の単語は常に大文字</li>
<li>名詞、動詞、形容詞、副詞、代名詞は大文字</li>
<li>冠詞（a、an、the）は小文字（タイトルの先頭を除く）</li>
</ul>
<h2>スタイル別の違い</h2>
<p>APとAPAは3文字以下の前置詞を小文字に、シカゴは長さに関係なくすべての前置詞を小文字にします。</p>
<h2>変換ツール</h2>
<p><a href="%HUB%">ケースコンバーター</a>で自動的にタイトルケースを適用できます。</p>
`,
  }),
  de: build("de", {
    title: "Title Case Regeln: AP, APA und Chicago Style im Vergleich",
    description: "Vergleich der Title-Case-Regeln für AP, APA und Chicago Style. Welche Wörter groß, welche klein geschrieben werden.",
    body: `
<p>Title Case bedeutet, die wichtigen Wörter in einem Titel großzuschreiben. Welche Wörter als „wichtig" gelten, hängt vom Styleguide ab.</p>
<h2>Gemeinsame Regeln</h2>
<ul>
<li>Erstes und letztes Wort immer groß</li>
<li>Nomen, Verben, Adjektive, Adverbien groß</li>
<li>Artikel (a, an, the) klein</li>
</ul>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%HUB%">Case-Konverter</a> für automatische Title-Case-Formatierung.</p>
`,
  }),
  es: build("es", {
    title: "Reglas de Title Case: AP, APA y Chicago Style comparados",
    description: "Aprende las reglas de capitalización Title Case para AP, APA y Chicago. Tabla comparativa, reglas palabra por palabra y excepciones comunes.",
    body: `
<p>Title Case significa capitalizar las palabras principales en un título. Qué palabras se consideran "principales" depende de la guía de estilo.</p>
<h2>Reglas comunes</h2>
<ul>
<li>Primera y última palabra siempre en mayúscula</li>
<li>Sustantivos, verbos, adjetivos, adverbios en mayúscula</li>
<li>Artículos (a, an, the) en minúscula</li>
</ul>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%HUB%">conversor de casos</a> para aplicar Title Case automáticamente.</p>
`,
  }),
  pt: build("pt", {
    title: "Regras de Title Case: AP, APA e Chicago Style comparados",
    description: "Aprenda as regras de capitalização Title Case para AP, APA e Chicago. Tabela comparativa, regras por palavra e exceções comuns.",
    body: `
<p>Title Case significa capitalizar as palavras principais em um título. Quais palavras são "principais" depende do guia de estilo.</p>
<h2>Regras comuns</h2>
<ul>
<li>Primeira e última palavra sempre em maiúscula</li>
<li>Substantivos, verbos, adjetivos, advérbios em maiúscula</li>
<li>Artigos (a, an, the) em minúscula</li>
</ul>
<h2>Conversão</h2>
<p>Use nosso <a href="%HUB%">conversor de casos</a> para aplicar Title Case automaticamente.</p>
`,
  }),
  fr: build("fr", {
    title: "Règles du Title Case : AP, APA et Chicago Style comparés",
    description: "Apprenez les règles de capitalisation Title Case pour AP, APA et Chicago. Tableau comparatif, règles mot par mot et exceptions courantes.",
    body: `
<p>Le Title Case consiste à mettre en majuscule les mots importants d'un titre. Quels mots sont « importants » dépend du guide de style.</p>
<h2>Règles communes</h2>
<ul>
<li>Premier et dernier mot toujours en majuscule</li>
<li>Noms, verbes, adjectifs, adverbes en majuscule</li>
<li>Articles (a, an, the) en minuscule</li>
</ul>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%HUB%">convertisseur de cas</a> pour appliquer le Title Case automatiquement.</p>
`,
  }),
};
