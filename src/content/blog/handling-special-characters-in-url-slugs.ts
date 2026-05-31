import type { Locale } from "@/i18n/routing";
import type { Article } from "@/lib/blog";

export const meta = {
  slug: "handling-special-characters-in-url-slugs",
  date: "2026-05-21",
  readTime: 6,
};

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);

const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HOME%", p(l, "/"))
    .replaceAll("%SLUGIFY%", p(l, "/slugify-online"))
    .replaceAll("%SLUGGUIDE%", p(l, "/blog/slugify-text-javascript-python-php")),
});

const CODE_ACCENTS = `<pre><code>// JavaScript
function removeAccents(text) {
  return text
    .normalize('NFKD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

removeAccents('Café Résumé');
// Output: Cafe Resume</code></pre>`;

const CODE_EMOJI = `<pre><code>text.replace(/[\\u{1F600}-\\u{1F6FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/gu, '')</code></pre>`;

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Handling Special Characters in URL Slugs: A Developer Guide",
    description:
      "How to handle accents, Unicode, CJK characters, emojis, and symbols when generating URL slugs. Covers transliteration, percent-encoding, and best practices.",
    body: `
<p>Most slug generators work fine for plain English text. But the real world has accented characters, non-Latin scripts, emojis, and symbols. This guide covers how to handle all of them when generating URL slugs.</p>
<h2>The Problem: URLs Have a Limited Character Set</h2>
<p>URLs can only safely contain ASCII characters: letters (a-z), digits (0-9), and a few symbols like hyphens and underscores. Everything else must be either converted or percent-encoded (like <code>%C3%A9</code> for &eacute;). Percent-encoded URLs are ugly, hard to read, and bad for SEO. The solution is transliteration.</p>
<h2>Transliteration: The Core Technique</h2>
<p>Transliteration converts characters from one script to their closest ASCII equivalent. Some common examples:</p>
<table>
<thead><tr><th>Input</th><th>Transliterated</th><th>Language</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>French, Portuguese</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>German</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>Spanish</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>German</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>French, Portuguese</td></tr>
</tbody>
</table>
<p>Our <a href="%HOME%">Slug Generator</a> performs transliteration automatically when the &ldquo;Transliterate&rdquo; option is enabled.</p>
<h2>Unicode Normalization</h2>
<p>Before transliteration, you need to normalize Unicode text. The character &eacute; can be stored two ways in Unicode:</p>
<ul>
<li><strong>Composed (NFC)</strong>: a single code point (U+00E9)</li>
<li><strong>Decomposed (NFD)</strong>: the letter &ldquo;e&rdquo; followed by a combining accent mark (U+0065 + U+0301)</li>
</ul>
<p>Both look identical on screen but are different bytes. Normalizing to NFKD (compatibility decomposition) separates the base letter from its accent mark, making it easy to strip the accents:</p>
${CODE_ACCENTS}
<h2>CJK Characters (Chinese, Japanese, Korean)</h2>
<p>CJK characters don&rsquo;t transliterate to Latin in a meaningful way. There are two common approaches:</p>
<ol>
<li><strong>Use romanization</strong> (pinyin for Chinese, romaji for Japanese). Libraries like <code>pinyin</code> (npm) or <code>kuroshiro</code> can do this, but the results may not match user expectations.</li>
<li><strong>Keep the characters as-is</strong>. Modern browsers and search engines handle Unicode URLs well. Google can index URLs with CJK characters. The URL will be percent-encoded in the address bar but will display correctly in search results.</li>
</ol>
<p>For most use cases, option 2 is safer&mdash;romanized CJK text can be unreadable to native speakers.</p>
<h2>Emojis in URLs</h2>
<p>While technically possible (emojis get percent-encoded), emojis in slugs are a bad idea:</p>
<ul>
<li>They become extremely long percent-encoded strings</li>
<li>They break in many systems and APIs</li>
<li>Search engines may not index them properly</li>
<li>They can&rsquo;t be typed manually</li>
</ul>
<p>Always strip emojis during slug generation. A simple regex pattern can remove them:</p>
${CODE_EMOJI}
<h2>Common Special Characters</h2>
<p>Here&rsquo;s how a good slug generator handles common special characters:</p>
<table>
<thead><tr><th>Character</th><th>Action</th><th>Reason</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>Replace with &ldquo;and&rdquo; or remove</td><td>Has special meaning in URLs</td></tr>
<tr><td>@, #, ?, =</td><td>Remove</td><td>Reserved URL characters</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>Remove</td><td>Punctuation, no semantic value in slug</td></tr>
<tr><td>&mdash; &ndash;</td><td>Replace with hyphen</td><td>Similar purpose, normalize to separator</td></tr>
<tr><td>/ \\</td><td>Replace with hyphen</td><td>Slashes create path segments</td></tr>
</tbody>
</table>
<h2>Testing Your Slug Generator</h2>
<p>Test with these tricky inputs to make sure your slug generator handles edge cases:</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>Empty string &rarr; should return empty or a fallback</li>
</ul>
<p>Try these examples directly in our <a href="%SLUGIFY%">Slugify Online</a> tool and see how it handles each case.</p>
<h2>Library Support</h2>
<p>For a deeper comparison of slug libraries across languages, check our guide on <a href="%SLUGGUIDE%">how to slugify text in JavaScript, Python, and PHP</a>. Each library handles special characters differently, so choose one that fits your use case.</p>
`,
  }),

  ja: build("ja", {
    title: "URLスラッグの特殊文字の扱い方：開発者ガイド",
    description:
      "URLスラッグ生成時のアクセント記号・Unicode・CJK文字・絵文字・記号の扱い方。音訳、パーセントエンコーディング、ベストプラクティスを解説します。",
    body: `
<p>ほとんどのスラッグジェネレーターは、素の英語テキストなら問題なく動きます。しかし現実にはアクセント付き文字、非ラテン文字、絵文字、記号があります。本ガイドでは、URLスラッグ生成時にそれらすべてを扱う方法を解説します。</p>
<h2>問題: URLが使える文字は限られている</h2>
<p>URLが安全に含められるのはASCII文字だけです。英字（a-z）、数字（0-9）、ハイフンやアンダースコアなどわずかな記号に限られます。それ以外は変換するかパーセントエンコード（&eacute; なら <code>%C3%A9</code>）する必要があります。パーセントエンコードされたURLは見栄えが悪く、読みにくく、SEOにも不利です。その解決策が音訳です。</p>
<h2>音訳: 中心となる手法</h2>
<p>音訳は、ある文字体系の文字を最も近いASCII相当に変換します。よくある例:</p>
<table>
<thead><tr><th>入力</th><th>音訳後</th><th>言語</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>フランス語・ポルトガル語</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>ドイツ語</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>スペイン語</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>ドイツ語</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>フランス語・ポルトガル語</td></tr>
</tbody>
</table>
<p>当サイトの<a href="%HOME%">スラッグジェネレーター</a>は、「音訳」オプションを有効にすると自動で音訳を行います。</p>
<h2>Unicode正規化</h2>
<p>音訳の前に、Unicodeテキストを正規化する必要があります。文字 &eacute; はUnicodeで2通りに保存できます。</p>
<ul>
<li><strong>合成済み (NFC)</strong>: 単一のコードポイント（U+00E9）</li>
<li><strong>分解 (NFD)</strong>: 文字「e」の後に結合用アクセント記号（U+0065 + U+0301）</li>
</ul>
<p>どちらも画面上は同じに見えますが、バイト列は異なります。NFKD（互換分解）に正規化すると、基本文字とアクセント記号が分離され、アクセントを簡単に除去できます。</p>
${CODE_ACCENTS}
<h2>CJK文字（中国語・日本語・韓国語）</h2>
<p>CJK文字は、意味のある形でラテン文字に音訳できません。一般的なアプローチは2つあります。</p>
<ol>
<li><strong>ローマ字化を使う</strong>（中国語はピンイン、日本語はローマ字）。<code>pinyin</code>（npm）や <code>kuroshiro</code> などのライブラリで可能ですが、結果がユーザーの期待と合わないことがあります。</li>
<li><strong>文字をそのまま残す</strong>。現代のブラウザと検索エンジンはUnicode URLを問題なく扱います。GoogleはCJK文字を含むURLをインデックスできます。アドレスバーではパーセントエンコードされますが、検索結果では正しく表示されます。</li>
</ol>
<p>多くのケースでは選択肢2のほうが安全です&mdash;ローマ字化したCJKテキストはネイティブには読みにくいことがあります。</p>
<h2>URLの絵文字</h2>
<p>技術的には可能（絵文字はパーセントエンコードされる）ですが、スラッグに絵文字を使うのは悪手です。</p>
<ul>
<li>非常に長いパーセントエンコード文字列になる</li>
<li>多くのシステムやAPIで壊れる</li>
<li>検索エンジンが正しくインデックスできないことがある</li>
<li>手で入力できない</li>
</ul>
<p>スラッグ生成時には常に絵文字を取り除きましょう。簡単な正規表現で除去できます。</p>
${CODE_EMOJI}
<h2>よくある特殊文字</h2>
<p>良いスラッグジェネレーターがよくある特殊文字をどう扱うかを示します。</p>
<table>
<thead><tr><th>文字</th><th>処理</th><th>理由</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>「and」に置換、または削除</td><td>URLで特別な意味を持つ</td></tr>
<tr><td>@, #, ?, =</td><td>削除</td><td>URLの予約文字</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>削除</td><td>句読点、スラッグに意味がない</td></tr>
<tr><td>&mdash; &ndash;</td><td>ハイフンに置換</td><td>用途が近く、区切りに正規化</td></tr>
<tr><td>/ \\</td><td>ハイフンに置換</td><td>スラッシュはパスのセグメントを作る</td></tr>
</tbody>
</table>
<h2>スラッグジェネレーターのテスト</h2>
<p>エッジケースを正しく処理できるか、次のような厄介な入力でテストしましょう。</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>空文字列 &rarr; 空、またはフォールバックを返すべき</li>
</ul>
<p>これらの例を当サイトの<a href="%SLUGIFY%">スラッグ化オンラインツール</a>で直接試して、各ケースの処理を確認してみてください。</p>
<h2>ライブラリのサポート</h2>
<p>各言語のスラッグライブラリのより詳しい比較は、<a href="%SLUGGUIDE%">JavaScript・Python・PHPでのテキストのスラッグ化</a>のガイドをご覧ください。ライブラリごとに特殊文字の扱いは異なるので、用途に合うものを選びましょう。</p>
`,
  }),

  de: build("de", {
    title: "Sonderzeichen in URL-Slugs behandeln: Ein Entwicklerleitfaden",
    description:
      "So behandeln Sie Akzente, Unicode, CJK-Zeichen, Emojis und Symbole beim Erzeugen von URL-Slugs. Mit Transliteration, Prozentkodierung und Best Practices.",
    body: `
<p>Die meisten Slug-Generatoren funktionieren mit reinem englischem Text problemlos. Doch die reale Welt hat Akzentbuchstaben, nicht-lateinische Schriften, Emojis und Symbole. Dieser Leitfaden zeigt, wie Sie all das beim Erzeugen von URL-Slugs behandeln.</p>
<h2>Das Problem: URLs haben einen begrenzten Zeichensatz</h2>
<p>URLs dürfen sicher nur ASCII-Zeichen enthalten: Buchstaben (a-z), Ziffern (0-9) und einige Symbole wie Binde- und Unterstriche. Alles andere muss entweder umgewandelt oder prozentkodiert werden (etwa <code>%C3%A9</code> für &eacute;). Prozentkodierte URLs sind hässlich, schwer lesbar und schlecht für SEO. Die Lösung ist Transliteration.</p>
<h2>Transliteration: Die zentrale Technik</h2>
<p>Transliteration wandelt Zeichen einer Schrift in ihr nächstliegendes ASCII-Äquivalent um. Einige gängige Beispiele:</p>
<table>
<thead><tr><th>Eingabe</th><th>Transliteriert</th><th>Sprache</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>Französisch, Portugiesisch</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>Deutsch</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>Spanisch</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>Deutsch</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>Französisch, Portugiesisch</td></tr>
</tbody>
</table>
<p>Unser <a href="%HOME%">Slug-Generator</a> führt die Transliteration automatisch durch, wenn die Option &bdquo;Transliterieren&ldquo; aktiviert ist.</p>
<h2>Unicode-Normalisierung</h2>
<p>Vor der Transliteration müssen Sie Unicode-Text normalisieren. Das Zeichen &eacute; kann in Unicode auf zwei Arten gespeichert werden:</p>
<ul>
<li><strong>Zusammengesetzt (NFC)</strong>: ein einzelner Codepunkt (U+00E9)</li>
<li><strong>Zerlegt (NFD)</strong>: der Buchstabe &bdquo;e&ldquo; gefolgt von einem kombinierenden Akzentzeichen (U+0065 + U+0301)</li>
</ul>
<p>Beide sehen auf dem Bildschirm identisch aus, sind aber unterschiedliche Bytes. Die Normalisierung auf NFKD (Kompatibilitätszerlegung) trennt den Grundbuchstaben vom Akzentzeichen, sodass sich die Akzente leicht entfernen lassen:</p>
${CODE_ACCENTS}
<h2>CJK-Zeichen (Chinesisch, Japanisch, Koreanisch)</h2>
<p>CJK-Zeichen lassen sich nicht sinnvoll ins Lateinische transliterieren. Es gibt zwei gängige Ansätze:</p>
<ol>
<li><strong>Romanisierung verwenden</strong> (Pinyin für Chinesisch, Romaji für Japanisch). Bibliotheken wie <code>pinyin</code> (npm) oder <code>kuroshiro</code> können das, aber die Ergebnisse entsprechen womöglich nicht den Erwartungen der Nutzer.</li>
<li><strong>Die Zeichen unverändert lassen</strong>. Moderne Browser und Suchmaschinen verarbeiten Unicode-URLs gut. Google kann URLs mit CJK-Zeichen indexieren. Die URL wird in der Adressleiste prozentkodiert, in den Suchergebnissen aber korrekt angezeigt.</li>
</ol>
<p>Für die meisten Fälle ist Option 2 sicherer&mdash;romanisierter CJK-Text kann für Muttersprachler unleserlich sein.</p>
<h2>Emojis in URLs</h2>
<p>Technisch möglich (Emojis werden prozentkodiert), aber Emojis in Slugs sind eine schlechte Idee:</p>
<ul>
<li>Sie werden zu extrem langen prozentkodierten Zeichenketten</li>
<li>Sie brechen in vielen Systemen und APIs</li>
<li>Suchmaschinen indexieren sie womöglich nicht korrekt</li>
<li>Sie lassen sich nicht manuell eintippen</li>
</ul>
<p>Entfernen Sie Emojis bei der Slug-Erzeugung immer. Ein einfaches Regex-Muster kann sie entfernen:</p>
${CODE_EMOJI}
<h2>Häufige Sonderzeichen</h2>
<p>So behandelt ein guter Slug-Generator häufige Sonderzeichen:</p>
<table>
<thead><tr><th>Zeichen</th><th>Aktion</th><th>Grund</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>Durch &bdquo;and&ldquo; ersetzen oder entfernen</td><td>Hat in URLs eine besondere Bedeutung</td></tr>
<tr><td>@, #, ?, =</td><td>Entfernen</td><td>Reservierte URL-Zeichen</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>Entfernen</td><td>Satzzeichen, kein semantischer Wert im Slug</td></tr>
<tr><td>&mdash; &ndash;</td><td>Durch Bindestrich ersetzen</td><td>Ähnlicher Zweck, auf Trennzeichen normalisieren</td></tr>
<tr><td>/ \\</td><td>Durch Bindestrich ersetzen</td><td>Schrägstriche erzeugen Pfadsegmente</td></tr>
</tbody>
</table>
<h2>Ihren Slug-Generator testen</h2>
<p>Testen Sie mit diesen kniffligen Eingaben, ob Ihr Slug-Generator Grenzfälle bewältigt:</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>Leerer String &rarr; sollte leer oder einen Fallback zurückgeben</li>
</ul>
<p>Probieren Sie diese Beispiele direkt in unserem Tool <a href="%SLUGIFY%">Slugify Online</a> aus und sehen Sie, wie es jeden Fall behandelt.</p>
<h2>Bibliotheksunterstützung</h2>
<p>Für einen tieferen Vergleich von Slug-Bibliotheken über Sprachen hinweg lesen Sie unseren Leitfaden dazu, <a href="%SLUGGUIDE%">wie man Text in JavaScript, Python und PHP slugifiziert</a>. Jede Bibliothek behandelt Sonderzeichen anders&mdash;wählen Sie also eine, die zu Ihrem Anwendungsfall passt.</p>
`,
  }),

  es: build("es", {
    title: "Manejo de caracteres especiales en slugs de URL: guía para desarrolladores",
    description:
      "Cómo manejar acentos, Unicode, caracteres CJK, emojis y símbolos al generar slugs de URL. Cubre transliteración, codificación porcentual y buenas prácticas.",
    body: `
<p>La mayoría de los generadores de slugs funcionan bien con texto en inglés simple. Pero el mundo real tiene caracteres acentuados, alfabetos no latinos, emojis y símbolos. Esta guía explica cómo manejarlos todos al generar slugs de URL.</p>
<h2>El problema: las URLs tienen un conjunto de caracteres limitado</h2>
<p>Las URLs solo pueden contener de forma segura caracteres ASCII: letras (a-z), dígitos (0-9) y unos pocos símbolos como guiones y guiones bajos. Todo lo demás debe convertirse o codificarse con porcentaje (como <code>%C3%A9</code> para &eacute;). Las URLs con codificación porcentual son feas, difíciles de leer y malas para el SEO. La solución es la transliteración.</p>
<h2>Transliteración: la técnica central</h2>
<p>La transliteración convierte los caracteres de un alfabeto a su equivalente ASCII más cercano. Algunos ejemplos comunes:</p>
<table>
<thead><tr><th>Entrada</th><th>Transliterado</th><th>Idioma</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>Francés, portugués</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>Alemán</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>Español</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>Alemán</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>Francés, portugués</td></tr>
</tbody>
</table>
<p>Nuestro <a href="%HOME%">generador de slugs</a> realiza la transliteración automáticamente cuando la opción &laquo;Transliterar&raquo; está activada.</p>
<h2>Normalización Unicode</h2>
<p>Antes de la transliteración, debes normalizar el texto Unicode. El carácter &eacute; puede almacenarse de dos formas en Unicode:</p>
<ul>
<li><strong>Compuesto (NFC)</strong>: un solo punto de código (U+00E9)</li>
<li><strong>Descompuesto (NFD)</strong>: la letra &laquo;e&raquo; seguida de una marca de acento combinante (U+0065 + U+0301)</li>
</ul>
<p>Ambos se ven idénticos en pantalla, pero son bytes distintos. Normalizar a NFKD (descomposición de compatibilidad) separa la letra base de su marca de acento, lo que facilita eliminar los acentos:</p>
${CODE_ACCENTS}
<h2>Caracteres CJK (chino, japonés, coreano)</h2>
<p>Los caracteres CJK no se transliteran al latín de forma significativa. Hay dos enfoques comunes:</p>
<ol>
<li><strong>Usar romanización</strong> (pinyin para el chino, romaji para el japonés). Librerías como <code>pinyin</code> (npm) o <code>kuroshiro</code> pueden hacerlo, pero los resultados quizá no coincidan con lo que esperan los usuarios.</li>
<li><strong>Mantener los caracteres tal cual</strong>. Los navegadores y buscadores modernos manejan bien las URLs Unicode. Google puede indexar URLs con caracteres CJK. La URL se codificará con porcentaje en la barra de direcciones, pero se mostrará correctamente en los resultados de búsqueda.</li>
</ol>
<p>Para la mayoría de los casos, la opción 2 es más segura&mdash;el texto CJK romanizado puede ser ilegible para los hablantes nativos.</p>
<h2>Emojis en las URLs</h2>
<p>Aunque es técnicamente posible (los emojis se codifican con porcentaje), poner emojis en los slugs es mala idea:</p>
<ul>
<li>Se convierten en cadenas codificadas con porcentaje extremadamente largas</li>
<li>Fallan en muchos sistemas y APIs</li>
<li>Puede que los buscadores no los indexen correctamente</li>
<li>No se pueden escribir manualmente</li>
</ul>
<p>Elimina siempre los emojis durante la generación del slug. Un patrón de regex sencillo puede quitarlos:</p>
${CODE_EMOJI}
<h2>Caracteres especiales comunes</h2>
<p>Así maneja un buen generador de slugs los caracteres especiales comunes:</p>
<table>
<thead><tr><th>Carácter</th><th>Acción</th><th>Motivo</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>Reemplazar por &laquo;and&raquo; o eliminar</td><td>Tiene un significado especial en las URLs</td></tr>
<tr><td>@, #, ?, =</td><td>Eliminar</td><td>Caracteres reservados de URL</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>Eliminar</td><td>Puntuación, sin valor semántico en el slug</td></tr>
<tr><td>&mdash; &ndash;</td><td>Reemplazar por guion</td><td>Propósito similar, normalizar al separador</td></tr>
<tr><td>/ \\</td><td>Reemplazar por guion</td><td>Las barras crean segmentos de ruta</td></tr>
</tbody>
</table>
<h2>Probar tu generador de slugs</h2>
<p>Prueba con estas entradas complicadas para asegurarte de que tu generador maneja los casos límite:</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>Cadena vacía &rarr; debería devolver vacío o un valor por defecto</li>
</ul>
<p>Prueba estos ejemplos directamente en nuestra herramienta <a href="%SLUGIFY%">Slugify Online</a> y observa cómo maneja cada caso.</p>
<h2>Soporte de librerías</h2>
<p>Para una comparación más profunda de las librerías de slugs entre lenguajes, consulta nuestra guía sobre <a href="%SLUGGUIDE%">cómo convertir texto en slug en JavaScript, Python y PHP</a>. Cada librería maneja los caracteres especiales de forma distinta, así que elige la que se ajuste a tu caso de uso.</p>
`,
  }),

  pt: build("pt", {
    title: "Lidando com caracteres especiais em slugs de URL: guia para desenvolvedores",
    description:
      "Como lidar com acentos, Unicode, caracteres CJK, emojis e símbolos ao gerar slugs de URL. Cobre transliteração, codificação por porcentagem e boas práticas.",
    body: `
<p>A maioria dos geradores de slug funciona bem com texto em inglês simples. Mas o mundo real tem caracteres acentuados, alfabetos não latinos, emojis e símbolos. Este guia explica como lidar com todos eles ao gerar slugs de URL.</p>
<h2>O problema: as URLs têm um conjunto de caracteres limitado</h2>
<p>As URLs só podem conter com segurança caracteres ASCII: letras (a-z), dígitos (0-9) e alguns símbolos como hífens e sublinhados. Todo o resto precisa ser convertido ou codificado por porcentagem (como <code>%C3%A9</code> para &eacute;). URLs com codificação por porcentagem são feias, difíceis de ler e ruins para SEO. A solução é a transliteração.</p>
<h2>Transliteração: a técnica central</h2>
<p>A transliteração converte os caracteres de um alfabeto para o equivalente ASCII mais próximo. Alguns exemplos comuns:</p>
<table>
<thead><tr><th>Entrada</th><th>Transliterado</th><th>Idioma</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>Francês, português</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>Alemão</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>Espanhol</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>Alemão</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>Francês, português</td></tr>
</tbody>
</table>
<p>Nosso <a href="%HOME%">gerador de slugs</a> faz a transliteração automaticamente quando a opção &laquo;Transliterar&raquo; está ativada.</p>
<h2>Normalização Unicode</h2>
<p>Antes da transliteração, você precisa normalizar o texto Unicode. O caractere &eacute; pode ser armazenado de duas formas em Unicode:</p>
<ul>
<li><strong>Composto (NFC)</strong>: um único ponto de código (U+00E9)</li>
<li><strong>Decomposto (NFD)</strong>: a letra &laquo;e&raquo; seguida de uma marca de acento combinante (U+0065 + U+0301)</li>
</ul>
<p>Os dois parecem idênticos na tela, mas são bytes diferentes. Normalizar para NFKD (decomposição de compatibilidade) separa a letra base da marca de acento, facilitando a remoção dos acentos:</p>
${CODE_ACCENTS}
<h2>Caracteres CJK (chinês, japonês, coreano)</h2>
<p>Os caracteres CJK não se transliteram para o latim de forma significativa. Há duas abordagens comuns:</p>
<ol>
<li><strong>Usar romanização</strong> (pinyin para o chinês, romaji para o japonês). Bibliotecas como <code>pinyin</code> (npm) ou <code>kuroshiro</code> fazem isso, mas os resultados podem não corresponder às expectativas dos usuários.</li>
<li><strong>Manter os caracteres como estão</strong>. Navegadores e mecanismos de busca modernos lidam bem com URLs Unicode. O Google consegue indexar URLs com caracteres CJK. A URL será codificada por porcentagem na barra de endereços, mas aparecerá corretamente nos resultados de busca.</li>
</ol>
<p>Na maioria dos casos, a opção 2 é mais segura&mdash;texto CJK romanizado pode ser ilegível para falantes nativos.</p>
<h2>Emojis nas URLs</h2>
<p>Embora seja tecnicamente possível (emojis são codificados por porcentagem), colocar emojis em slugs é uma má ideia:</p>
<ul>
<li>Eles viram strings codificadas por porcentagem extremamente longas</li>
<li>Eles quebram em muitos sistemas e APIs</li>
<li>Os mecanismos de busca podem não indexá-los corretamente</li>
<li>Não podem ser digitados manualmente</li>
</ul>
<p>Sempre remova os emojis durante a geração do slug. Um padrão de regex simples pode removê-los:</p>
${CODE_EMOJI}
<h2>Caracteres especiais comuns</h2>
<p>Veja como um bom gerador de slugs lida com caracteres especiais comuns:</p>
<table>
<thead><tr><th>Caractere</th><th>Ação</th><th>Motivo</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>Substituir por &laquo;and&raquo; ou remover</td><td>Tem significado especial nas URLs</td></tr>
<tr><td>@, #, ?, =</td><td>Remover</td><td>Caracteres reservados de URL</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>Remover</td><td>Pontuação, sem valor semântico no slug</td></tr>
<tr><td>&mdash; &ndash;</td><td>Substituir por hífen</td><td>Propósito similar, normalizar para o separador</td></tr>
<tr><td>/ \\</td><td>Substituir por hífen</td><td>As barras criam segmentos de caminho</td></tr>
</tbody>
</table>
<h2>Testando seu gerador de slugs</h2>
<p>Teste com estas entradas complicadas para garantir que seu gerador lida com os casos extremos:</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>String vazia &rarr; deve retornar vazio ou um valor padrão</li>
</ul>
<p>Experimente estes exemplos diretamente na nossa ferramenta <a href="%SLUGIFY%">Slugify Online</a> e veja como ela lida com cada caso.</p>
<h2>Suporte de bibliotecas</h2>
<p>Para uma comparação mais aprofundada das bibliotecas de slug entre linguagens, confira nosso guia sobre <a href="%SLUGGUIDE%">como converter texto em slug em JavaScript, Python e PHP</a>. Cada biblioteca lida com os caracteres especiais de forma diferente, então escolha uma que se adeque ao seu caso de uso.</p>
`,
  }),

  fr: build("fr", {
    title: "Gérer les caractères spéciaux dans les slugs d'URL : guide du développeur",
    description:
      "Comment gérer les accents, l'Unicode, les caractères CJK, les emojis et les symboles lors de la génération de slugs d'URL. Translittération, encodage et bonnes pratiques.",
    body: `
<p>La plupart des générateurs de slugs fonctionnent bien avec du texte anglais simple. Mais le monde réel comporte des caractères accentués, des écritures non latines, des emojis et des symboles. Ce guide explique comment les gérer tous lors de la génération de slugs d'URL.</p>
<h2>Le problème : les URLs ont un jeu de caractères limité</h2>
<p>Les URLs ne peuvent contenir en toute sécurité que des caractères ASCII : lettres (a-z), chiffres (0-9) et quelques symboles comme les traits d'union et les tirets bas. Tout le reste doit être converti ou encodé en pourcentage (comme <code>%C3%A9</code> pour &eacute;). Les URLs encodées en pourcentage sont laides, difficiles à lire et mauvaises pour le SEO. La solution est la translittération.</p>
<h2>Translittération : la technique centrale</h2>
<p>La translittération convertit les caractères d'une écriture vers leur équivalent ASCII le plus proche. Quelques exemples courants :</p>
<table>
<thead><tr><th>Entrée</th><th>Translittéré</th><th>Langue</th></tr></thead>
<tbody>
<tr><td>&eacute;, &egrave;, &ecirc;, &euml;</td><td>e</td><td>Français, portugais</td></tr>
<tr><td>&uuml;, &ouml;, &auml;</td><td>ue, oe, ae</td><td>Allemand</td></tr>
<tr><td>&ntilde;</td><td>n</td><td>Espagnol</td></tr>
<tr><td>&szlig;</td><td>ss</td><td>Allemand</td></tr>
<tr><td>&ccedil;</td><td>c</td><td>Français, portugais</td></tr>
</tbody>
</table>
<p>Notre <a href="%HOME%">générateur de slugs</a> effectue la translittération automatiquement lorsque l'option &laquo;&nbsp;Translittérer&nbsp;&raquo; est activée.</p>
<h2>Normalisation Unicode</h2>
<p>Avant la translittération, vous devez normaliser le texte Unicode. Le caractère &eacute; peut être stocké de deux façons en Unicode :</p>
<ul>
<li><strong>Composé (NFC)</strong> : un seul point de code (U+00E9)</li>
<li><strong>Décomposé (NFD)</strong> : la lettre &laquo;&nbsp;e&nbsp;&raquo; suivie d'un signe diacritique combinant (U+0065 + U+0301)</li>
</ul>
<p>Les deux semblent identiques à l'écran mais correspondent à des octets différents. Normaliser en NFKD (décomposition de compatibilité) sépare la lettre de base de son signe diacritique, ce qui facilite la suppression des accents :</p>
${CODE_ACCENTS}
<h2>Caractères CJK (chinois, japonais, coréen)</h2>
<p>Les caractères CJK ne se translittèrent pas en latin de façon pertinente. Il existe deux approches courantes :</p>
<ol>
<li><strong>Utiliser la romanisation</strong> (pinyin pour le chinois, romaji pour le japonais). Des bibliothèques comme <code>pinyin</code> (npm) ou <code>kuroshiro</code> peuvent le faire, mais les résultats peuvent ne pas correspondre aux attentes des utilisateurs.</li>
<li><strong>Conserver les caractères tels quels</strong>. Les navigateurs et moteurs de recherche modernes gèrent bien les URLs Unicode. Google peut indexer les URLs comportant des caractères CJK. L'URL sera encodée en pourcentage dans la barre d'adresse mais s'affichera correctement dans les résultats de recherche.</li>
</ol>
<p>Dans la plupart des cas, l'option 2 est plus sûre&mdash;un texte CJK romanisé peut être illisible pour les locuteurs natifs.</p>
<h2>Les emojis dans les URLs</h2>
<p>Bien que techniquement possible (les emojis sont encodés en pourcentage), mettre des emojis dans les slugs est une mauvaise idée :</p>
<ul>
<li>Ils deviennent des chaînes encodées en pourcentage extrêmement longues</li>
<li>Ils cassent dans de nombreux systèmes et API</li>
<li>Les moteurs de recherche risquent de ne pas les indexer correctement</li>
<li>Ils ne peuvent pas être saisis manuellement</li>
</ul>
<p>Supprimez toujours les emojis lors de la génération du slug. Un simple motif regex peut les retirer :</p>
${CODE_EMOJI}
<h2>Caractères spéciaux courants</h2>
<p>Voici comment un bon générateur de slugs gère les caractères spéciaux courants :</p>
<table>
<thead><tr><th>Caractère</th><th>Action</th><th>Raison</th></tr></thead>
<tbody>
<tr><td>&amp;</td><td>Remplacer par &laquo;&nbsp;and&nbsp;&raquo; ou supprimer</td><td>A une signification particulière dans les URLs</td></tr>
<tr><td>@, #, ?, =</td><td>Supprimer</td><td>Caractères réservés des URLs</td></tr>
<tr><td>&ldquo; &rdquo; &lsquo; &rsquo;</td><td>Supprimer</td><td>Ponctuation, sans valeur sémantique dans le slug</td></tr>
<tr><td>&mdash; &ndash;</td><td>Remplacer par un trait d'union</td><td>But similaire, normaliser vers le séparateur</td></tr>
<tr><td>/ \\</td><td>Remplacer par un trait d'union</td><td>Les barres obliques créent des segments de chemin</td></tr>
</tbody>
</table>
<h2>Tester votre générateur de slugs</h2>
<p>Testez avec ces entrées délicates pour vérifier que votre générateur gère les cas limites :</p>
<ul>
<li><code>"Caf&eacute; Menu &mdash; Special &Eacute;dition!"</code> &rarr; <code>cafe-menu-special-edition</code></li>
<li><code>"100% Free &amp; Open Source"</code> &rarr; <code>100-free-and-open-source</code></li>
<li><code>"   Lots   of   spaces   "</code> &rarr; <code>lots-of-spaces</code></li>
<li><code>"---triple---hyphens---"</code> &rarr; <code>triple-hyphens</code></li>
<li>Chaîne vide &rarr; doit renvoyer une valeur vide ou de repli</li>
</ul>
<p>Essayez ces exemples directement dans notre outil <a href="%SLUGIFY%">Slugify Online</a> et voyez comment il gère chaque cas.</p>
<h2>Prise en charge par les bibliothèques</h2>
<p>Pour une comparaison plus approfondie des bibliothèques de slugs selon les langages, consultez notre guide sur <a href="%SLUGGUIDE%">comment slugifier du texte en JavaScript, Python et PHP</a>. Chaque bibliothèque gère les caractères spéciaux différemment&mdash;choisissez donc celle qui convient à votre cas d'usage.</p>
`,
  }),
};
