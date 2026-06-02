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
    description: "AP、APA、シカゴスタイルのタイトルケース大文字化ルールを比較。比較表、単語ごとのルール、よくある例外を解説。",
    body: `
<p>タイトルケースとは、タイトルや見出しの主要な単語を大文字にすることです。しかし、どの単語が「主要」かはスタイルガイドによって異なります。最もよく使われる3つは、AP（Associated Press）、APA（American Psychological Association）、シカゴ（The Chicago Manual of Style）です。</p>

<h2>共通ルール</h2>
<p>3つのスタイルガイドすべてが以下の基本に同意しています：</p>
<ul>
<li>最初と最後の単語は常に大文字</li>
<li>名詞、動詞、形容詞、副詞、代名詞は大文字</li>
<li>冠詞（<em>a</em>、<em>an</em>、<em>the</em>）はタイトルの先頭でない限り小文字</li>
<li>等位接続詞（<em>and</em>、<em>but</em>、<em>or</em>、<em>nor</em>、<em>for</em>、<em>yet</em>、<em>so</em>）はタイトルの先頭でない限り小文字</li>
</ul>

<h2>スタイル間の違い</h2>
<table>
<thead><tr><th>ルール</th><th>APスタイル</th><th>APAスタイル</th><th>シカゴスタイル</th></tr></thead>
<tbody>
<tr><td>前置詞</td><td>3文字以下は小文字</td><td>3文字以下は小文字</td><td>長さに関係なくすべて小文字</td></tr>
<tr><td>"With"（4文字）</td><td>大文字</td><td>大文字</td><td>小文字</td></tr>
<tr><td>"Between"（7文字）</td><td>大文字</td><td>大文字</td><td>小文字</td></tr>
<tr><td>ハイフン付き複合語</td><td>最初の要素を大文字</td><td>両方の要素を大文字</td><td>両方の要素を大文字</td></tr>
<tr><td>不定詞の"to"</td><td>小文字</td><td>小文字</td><td>小文字</td></tr>
<tr><td>コロン後の単語</td><td>大文字</td><td>大文字</td><td>大文字</td></tr>
</tbody>
</table>

<h2>例</h2>
<table>
<thead><tr><th>スタイル</th><th>タイトル</th></tr></thead>
<tbody>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>常に小文字にする単語</h2>
<p>タイトルの最初または最後の単語でない限り：</p>
<ul>
<li><strong>冠詞：</strong>a, an, the</li>
<li><strong>等位接続詞：</strong>and, but, or, nor, for, yet, so</li>
<li><strong>短い前置詞（AP/APA）：</strong>at, by, in, of, on, to, up</li>
<li><strong>すべての前置詞（シカゴ）：</strong>at, by, in, of, on, to, up, with, from, into, between, throughなど</li>
</ul>

<h2>常に大文字にする単語</h2>
<ul>
<li><strong>動詞：</strong>Is, Are, Was, Be, Do, Has, Have（短くても！）</li>
<li><strong>代名詞：</strong>It, He, She, We, They, My, Your</li>
<li><strong>"Not"：</strong>3つのスタイルすべてで常に大文字</li>
</ul>

<h2>どのスタイルを使うべきか</h2>
<table>
<thead><tr><th>文脈</th><th>スタイルガイド</th></tr></thead>
<tbody>
<tr><td>ニュース記事、ジャーナリズム</td><td>AP</td></tr>
<tr><td>学術論文、研究</td><td>APA</td></tr>
<tr><td>書籍、出版</td><td>シカゴ</td></tr>
<tr><td>ブログ記事、Webコンテンツ</td><td>APまたはシカゴ（一つ選んで統一）</td></tr>
</tbody>
</table>

<h2>タイトルケースに即座に変換</h2>
<p>ルールを暗記する必要はありません。<a href="%HUB%">ケースコンバーター</a>で自動的にタイトルケースを適用できます。タイトルからURLスラッグを生成するには<a href="%SLUG%">URLスラッグジェネレーター</a>もご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "Title Case Regeln: AP, APA und Chicago Style im Vergleich",
    description: "Lernen Sie die Title-Case-Großschreibungsregeln für AP, APA und Chicago Style. Vergleichstabelle, Regeln Wort für Wort und häufige Ausnahmen.",
    body: `
<p>Title Case bedeutet, die wichtigen Wörter in einem Titel oder einer Überschrift großzuschreiben. Welche Wörter als „wichtig" gelten, hängt vom jeweiligen Styleguide ab. Die drei gebräuchlichsten sind AP (Associated Press), APA (American Psychological Association) und Chicago (The Chicago Manual of Style).</p>

<h2>Die universellen Regeln</h2>
<p>Alle drei Styleguides stimmen in diesen Grundlagen überein:</p>
<ul>
<li>Erstes und letztes Wort immer großschreiben</li>
<li>Nomen, Verben, Adjektive, Adverbien und Pronomen großschreiben</li>
<li>Artikel (<em>a</em>, <em>an</em>, <em>the</em>) kleinschreiben, es sei denn, sie stehen am Titelanfang</li>
<li>Koordinierende Konjunktionen (<em>and</em>, <em>but</em>, <em>or</em>, <em>nor</em>, <em>for</em>, <em>yet</em>, <em>so</em>) kleinschreiben, es sei denn, sie stehen am Titelanfang</li>
</ul>

<h2>Wo sie sich unterscheiden</h2>
<table>
<thead><tr><th>Regel</th><th>AP Style</th><th>APA Style</th><th>Chicago Style</th></tr></thead>
<tbody>
<tr><td>Präpositionen</td><td>Klein, wenn 3 Buchstaben oder weniger</td><td>Klein, wenn 3 Buchstaben oder weniger</td><td>Alle Präpositionen klein, unabhängig der Länge</td></tr>
<tr><td>„With" (4 Buchstaben)</td><td>Groß</td><td>Groß</td><td>Klein</td></tr>
<tr><td>„Between" (7 Buchstaben)</td><td>Groß</td><td>Groß</td><td>Klein</td></tr>
<tr><td>Zusammengesetzte Wörter mit Bindestrich</td><td>Erstes Element groß</td><td>Beide Elemente groß</td><td>Beide Elemente groß</td></tr>
<tr><td>„to" im Infinitiv</td><td>Klein</td><td>Klein</td><td>Klein</td></tr>
<tr><td>Wörter nach Doppelpunkt</td><td>Groß</td><td>Groß</td><td>Groß</td></tr>
</tbody>
</table>

<h2>Beispiele</h2>
<table>
<thead><tr><th>Style</th><th>Titel</th></tr></thead>
<tbody>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>Immer kleingeschriebene Wörter</h2>
<p>Es sei denn, sie sind das erste oder letzte Wort des Titels:</p>
<ul>
<li><strong>Artikel:</strong> a, an, the</li>
<li><strong>Koordinierende Konjunktionen:</strong> and, but, or, nor, for, yet, so</li>
<li><strong>Kurze Präpositionen (AP/APA):</strong> at, by, in, of, on, to, up</li>
<li><strong>Alle Präpositionen (Chicago):</strong> at, by, in, of, on, to, up, with, from, into, between, through usw.</li>
</ul>

<h2>Immer großgeschriebene Wörter</h2>
<ul>
<li><strong>Verben:</strong> Is, Are, Was, Be, Do, Has, Have (auch kurze!)</li>
<li><strong>Pronomen:</strong> It, He, She, We, They, My, Your</li>
<li><strong>„Not":</strong> In allen drei Styles immer großgeschrieben</li>
</ul>

<h2>Welchen Style wann verwenden</h2>
<table>
<thead><tr><th>Kontext</th><th>Styleguide</th></tr></thead>
<tbody>
<tr><td>Nachrichtenartikel, Journalismus</td><td>AP</td></tr>
<tr><td>Akademische Arbeiten, Forschung</td><td>APA</td></tr>
<tr><td>Bücher, Verlagswesen</td><td>Chicago</td></tr>
<tr><td>Blogbeiträge, Web-Inhalte</td><td>AP oder Chicago (eins wählen, konsistent bleiben)</td></tr>
</tbody>
</table>

<h2>Sofort in Title Case konvertieren</h2>
<p>Keine Regeln auswendig lernen — verwenden Sie unseren <a href="%HUB%">Case-Konverter</a>, um Title Case automatisch anzuwenden. Sie können auch URL-Slugs aus Titeln mit dem <a href="%SLUG%">URL-Slug-Generator</a> erstellen.</p>
`,
  }),
  es: build("es", {
    title: "Reglas de Title Case: AP, APA y Chicago Style comparados",
    description: "Aprende las reglas de capitalización Title Case para AP, APA y Chicago Style. Tabla comparativa, reglas palabra por palabra y excepciones comunes.",
    body: `
<p>Title Case significa capitalizar las palabras principales en un título o encabezado. Pero cuáles son las palabras "principales" depende de la guía de estilo que sigas. Las tres más comunes son AP (Associated Press), APA (American Psychological Association) y Chicago (The Chicago Manual of Style).</p>

<h2>Las reglas universales</h2>
<p>Las tres guías de estilo coinciden en estos principios básicos:</p>
<ul>
<li>Capitalizar la primera y última palabra, siempre</li>
<li>Capitalizar sustantivos, verbos, adjetivos, adverbios y pronombres</li>
<li>Artículos (<em>a</em>, <em>an</em>, <em>the</em>) en minúscula, salvo al inicio del título</li>
<li>Conjunciones coordinantes (<em>and</em>, <em>but</em>, <em>or</em>, <em>nor</em>, <em>for</em>, <em>yet</em>, <em>so</em>) en minúscula, salvo al inicio del título</li>
</ul>

<h2>Donde difieren</h2>
<table>
<thead><tr><th>Regla</th><th>Estilo AP</th><th>Estilo APA</th><th>Estilo Chicago</th></tr></thead>
<tbody>
<tr><td>Preposiciones</td><td>Minúscula si 3 letras o menos</td><td>Minúscula si 3 letras o menos</td><td>Todas las preposiciones en minúscula sin importar longitud</td></tr>
<tr><td>"With" (4 letras)</td><td>Mayúscula</td><td>Mayúscula</td><td>Minúscula</td></tr>
<tr><td>"Between" (7 letras)</td><td>Mayúscula</td><td>Mayúscula</td><td>Minúscula</td></tr>
<tr><td>Compuestos con guion</td><td>Capitalizar primer elemento</td><td>Capitalizar ambos elementos</td><td>Capitalizar ambos elementos</td></tr>
<tr><td>"to" en infinitivos</td><td>Minúscula</td><td>Minúscula</td><td>Minúscula</td></tr>
<tr><td>Palabras tras dos puntos</td><td>Mayúscula</td><td>Mayúscula</td><td>Mayúscula</td></tr>
</tbody>
</table>

<h2>Ejemplos</h2>
<table>
<thead><tr><th>Estilo</th><th>Título</th></tr></thead>
<tbody>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>Palabras siempre en minúscula</h2>
<p>A menos que sean la primera o última palabra del título:</p>
<ul>
<li><strong>Artículos:</strong> a, an, the</li>
<li><strong>Conjunciones coordinantes:</strong> and, but, or, nor, for, yet, so</li>
<li><strong>Preposiciones cortas (AP/APA):</strong> at, by, in, of, on, to, up</li>
<li><strong>Todas las preposiciones (Chicago):</strong> at, by, in, of, on, to, up, with, from, into, between, through, etc.</li>
</ul>

<h2>Palabras siempre en mayúscula</h2>
<ul>
<li><strong>Verbos:</strong> Is, Are, Was, Be, Do, Has, Have (¡incluso los cortos!)</li>
<li><strong>Pronombres:</strong> It, He, She, We, They, My, Your</li>
<li><strong>"Not":</strong> Siempre en mayúscula en los tres estilos</li>
</ul>

<h2>Cuándo usar cada estilo</h2>
<table>
<thead><tr><th>Contexto</th><th>Guía de estilo</th></tr></thead>
<tbody>
<tr><td>Artículos periodísticos</td><td>AP</td></tr>
<tr><td>Trabajos académicos, investigación</td><td>APA</td></tr>
<tr><td>Libros, editorial</td><td>Chicago</td></tr>
<tr><td>Posts de blog, contenido web</td><td>AP o Chicago (elige uno, sé consistente)</td></tr>
</tbody>
</table>

<h2>Convierte a Title Case al instante</h2>
<p>No memorices las reglas — usa nuestro <a href="%HUB%">conversor de casos</a> para aplicar Title Case automáticamente. También puedes generar slugs URL desde títulos con el <a href="%SLUG%">generador de slugs URL</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Regras de Title Case: AP, APA e Chicago Style comparados",
    description: "Aprenda as regras de capitalização Title Case para AP, APA e Chicago Style. Tabela comparativa, regras palavra por palavra e exceções comuns.",
    body: `
<p>Title Case significa capitalizar as palavras principais em um título ou cabeçalho. Mas quais palavras contam como "principais" depende do guia de estilo que você segue. Os três mais comuns são AP (Associated Press), APA (American Psychological Association) e Chicago (The Chicago Manual of Style).</p>

<h2>As regras universais</h2>
<p>Os três guias de estilo concordam nestes princípios básicos:</p>
<ul>
<li>Capitalizar a primeira e a última palavra, sempre</li>
<li>Capitalizar substantivos, verbos, adjetivos, advérbios e pronomes</li>
<li>Artigos (<em>a</em>, <em>an</em>, <em>the</em>) em minúscula, exceto no início do título</li>
<li>Conjunções coordenativas (<em>and</em>, <em>but</em>, <em>or</em>, <em>nor</em>, <em>for</em>, <em>yet</em>, <em>so</em>) em minúscula, exceto no início do título</li>
</ul>

<h2>Onde diferem</h2>
<table>
<thead><tr><th>Regra</th><th>Estilo AP</th><th>Estilo APA</th><th>Estilo Chicago</th></tr></thead>
<tbody>
<tr><td>Preposições</td><td>Minúscula se 3 letras ou menos</td><td>Minúscula se 3 letras ou menos</td><td>Todas as preposições em minúscula independente do tamanho</td></tr>
<tr><td>"With" (4 letras)</td><td>Maiúscula</td><td>Maiúscula</td><td>Minúscula</td></tr>
<tr><td>"Between" (7 letras)</td><td>Maiúscula</td><td>Maiúscula</td><td>Minúscula</td></tr>
<tr><td>Compostos com hífen</td><td>Capitalizar primeiro elemento</td><td>Capitalizar ambos elementos</td><td>Capitalizar ambos elementos</td></tr>
<tr><td>"to" em infinitivos</td><td>Minúscula</td><td>Minúscula</td><td>Minúscula</td></tr>
<tr><td>Palavras após dois pontos</td><td>Maiúscula</td><td>Maiúscula</td><td>Maiúscula</td></tr>
</tbody>
</table>

<h2>Exemplos</h2>
<table>
<thead><tr><th>Estilo</th><th>Título</th></tr></thead>
<tbody>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>Palavras sempre em minúscula</h2>
<p>A menos que sejam a primeira ou última palavra do título:</p>
<ul>
<li><strong>Artigos:</strong> a, an, the</li>
<li><strong>Conjunções coordenativas:</strong> and, but, or, nor, for, yet, so</li>
<li><strong>Preposições curtas (AP/APA):</strong> at, by, in, of, on, to, up</li>
<li><strong>Todas as preposições (Chicago):</strong> at, by, in, of, on, to, up, with, from, into, between, through, etc.</li>
</ul>

<h2>Palavras sempre em maiúscula</h2>
<ul>
<li><strong>Verbos:</strong> Is, Are, Was, Be, Do, Has, Have (mesmo os curtos!)</li>
<li><strong>Pronomes:</strong> It, He, She, We, They, My, Your</li>
<li><strong>"Not":</strong> Sempre em maiúscula nos três estilos</li>
</ul>

<h2>Quando usar cada estilo</h2>
<table>
<thead><tr><th>Contexto</th><th>Guia de estilo</th></tr></thead>
<tbody>
<tr><td>Artigos jornalísticos</td><td>AP</td></tr>
<tr><td>Trabalhos acadêmicos, pesquisa</td><td>APA</td></tr>
<tr><td>Livros, editorial</td><td>Chicago</td></tr>
<tr><td>Posts de blog, conteúdo web</td><td>AP ou Chicago (escolha um, seja consistente)</td></tr>
</tbody>
</table>

<h2>Converta para Title Case instantaneamente</h2>
<p>Não memorize as regras — use nosso <a href="%HUB%">conversor de casos</a> para aplicar Title Case automaticamente. Você também pode gerar slugs URL a partir de títulos com o <a href="%SLUG%">gerador de slugs URL</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Règles du Title Case : AP, APA et Chicago Style comparés",
    description: "Apprenez les règles de capitalisation Title Case pour AP, APA et Chicago Style. Tableau comparatif, règles mot par mot et exceptions courantes.",
    body: `
<p>Le Title Case consiste à mettre en majuscule les mots importants d'un titre ou d'un en-tête. Mais quels mots comptent comme « importants » dépend du guide de style que vous suivez. Les trois plus courants sont AP (Associated Press), APA (American Psychological Association) et Chicago (The Chicago Manual of Style).</p>

<h2>Les règles universelles</h2>
<p>Les trois guides de style s'accordent sur ces bases :</p>
<ul>
<li>Mettre en majuscule le premier et le dernier mot, toujours</li>
<li>Mettre en majuscule les noms, verbes, adjectifs, adverbes et pronoms</li>
<li>Articles (<em>a</em>, <em>an</em>, <em>the</em>) en minuscule, sauf s'ils commencent le titre</li>
<li>Conjonctions de coordination (<em>and</em>, <em>but</em>, <em>or</em>, <em>nor</em>, <em>for</em>, <em>yet</em>, <em>so</em>) en minuscule, sauf en début de titre</li>
</ul>

<h2>Là où ils diffèrent</h2>
<table>
<thead><tr><th>Règle</th><th>Style AP</th><th>Style APA</th><th>Style Chicago</th></tr></thead>
<tbody>
<tr><td>Prépositions</td><td>Minuscule si 3 lettres ou moins</td><td>Minuscule si 3 lettres ou moins</td><td>Toutes les prépositions en minuscule quelle que soit la longueur</td></tr>
<tr><td>« With » (4 lettres)</td><td>Majuscule</td><td>Majuscule</td><td>Minuscule</td></tr>
<tr><td>« Between » (7 lettres)</td><td>Majuscule</td><td>Majuscule</td><td>Minuscule</td></tr>
<tr><td>Composés avec trait d'union</td><td>Premier élément en majuscule</td><td>Les deux éléments en majuscule</td><td>Les deux éléments en majuscule</td></tr>
<tr><td>« to » dans les infinitifs</td><td>Minuscule</td><td>Minuscule</td><td>Minuscule</td></tr>
<tr><td>Mots après deux-points</td><td>Majuscule</td><td>Majuscule</td><td>Majuscule</td></tr>
</tbody>
</table>

<h2>Exemples</h2>
<table>
<thead><tr><th>Style</th><th>Titre</th></tr></thead>
<tbody>
<tr><td>AP</td><td>Running With Scissors</td></tr>
<tr><td>APA</td><td>Running With Scissors</td></tr>
<tr><td>Chicago</td><td>Running with Scissors</td></tr>
</tbody>
</table>

<h2>Mots toujours en minuscule</h2>
<p>Sauf s'ils sont le premier ou le dernier mot du titre :</p>
<ul>
<li><strong>Articles :</strong> a, an, the</li>
<li><strong>Conjonctions de coordination :</strong> and, but, or, nor, for, yet, so</li>
<li><strong>Prépositions courtes (AP/APA) :</strong> at, by, in, of, on, to, up</li>
<li><strong>Toutes les prépositions (Chicago) :</strong> at, by, in, of, on, to, up, with, from, into, between, through, etc.</li>
</ul>

<h2>Mots toujours en majuscule</h2>
<ul>
<li><strong>Verbes :</strong> Is, Are, Was, Be, Do, Has, Have (même les courts !)</li>
<li><strong>Pronoms :</strong> It, He, She, We, They, My, Your</li>
<li><strong>« Not » :</strong> Toujours en majuscule dans les trois styles</li>
</ul>

<h2>Quand utiliser quel style</h2>
<table>
<thead><tr><th>Contexte</th><th>Guide de style</th></tr></thead>
<tbody>
<tr><td>Articles de presse, journalisme</td><td>AP</td></tr>
<tr><td>Articles académiques, recherche</td><td>APA</td></tr>
<tr><td>Livres, édition</td><td>Chicago</td></tr>
<tr><td>Articles de blog, contenu web</td><td>AP ou Chicago (choisissez-en un, soyez cohérent)</td></tr>
</tbody>
</table>

<h2>Convertissez en Title Case instantanément</h2>
<p>Ne mémorisez pas les règles — utilisez notre <a href="%HUB%">convertisseur de cas</a> pour appliquer le Title Case automatiquement. Vous pouvez aussi générer des slugs URL à partir de titres avec le <a href="%SLUG%">générateur de slugs URL</a>.</p>
`,
  }),
};
