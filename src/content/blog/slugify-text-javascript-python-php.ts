import type { Locale } from "@/i18n/routing";
import type { Article } from "@/lib/blog";

export const meta = {
  slug: "slugify-text-javascript-python-php",
  date: "2026-05-20",
  readTime: 7,
};

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);

const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUGIFY%", p(l, "/slugify-online"))
    .replaceAll("%TEXT%", p(l, "/text-to-slug")),
});

// Shared, untranslated code samples.
const JS_INSTALL = `npm install slugify`;
const JS_LIB = `const slugify = require('slugify');

const title = "Café Menu — Special Édition!";
const slug = slugify(title, {
  lower: true,
  strict: true,
  trim: true
});

console.log(slug);
// Output: cafe-menu-special-edition`;
const JS_MANUAL = `function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/[\\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}`;
const PY_INSTALL = `pip install python-slugify`;
const PY_LIB = `from slugify import slugify

title = "Café Menu — Special Édition!"
slug = slugify(title)

print(slug)
# Output: cafe-menu-special-edition`;
const PY_DJANGO = `from django.utils.text import slugify

slug = slugify("My Blog Post Title")
# Output: my-blog-post-title`;
const PHP_LARAVEL = `use Illuminate\\Support\\Str;

$slug = Str::slug("Café Menu — Special Édition!");
// Output: cafe-menu-special-edition`;
const PHP_MANUAL = `function slugify(string $text): string {
    $text = transliterator_transliterate(
        'Any-Latin; Latin-ASCII; Lower()',
        $text
    );
    $text = preg_replace('/[^a-z0-9\\s-]/', '', $text);
    $text = preg_replace('/[\\s_]+/', '-', $text);
    $text = preg_replace('/-+/', '-', $text);
    return trim($text, '-');
}`;

const code = (s: string) => `<pre><code>${s}</code></pre>`;

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Slugify Text in JavaScript, Python, and PHP",
    description:
      "Code examples and libraries for converting text to URL slugs in JavaScript, Python, and PHP. Copy-paste ready solutions.",
    body: `
<p>Slugifying text&mdash;converting a human-readable string into a URL-safe slug&mdash;is a common task in web development. Whether you&rsquo;re building a blog, e-commerce site, or API, you&rsquo;ll need to generate clean URL slugs from titles and other text. This guide shows you how to do it in the three most popular server-side languages.</p>
<p>Don&rsquo;t want to write code? Use our <a href="%SLUGIFY%">Slugify Online</a> tool to convert text to slugs instantly in your browser.</p>
<h2>JavaScript / Node.js</h2>
<h3>Using the slugify Library</h3>
<p>The most popular approach in JavaScript is the <code>slugify</code> npm package:</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>Options explained:</p>
<ul>
<li><code>lower: true</code> &mdash; converts to lowercase</li>
<li><code>strict: true</code> &mdash; strips all characters that aren&rsquo;t letters, numbers, or the separator</li>
<li><code>trim: true</code> &mdash; removes leading/trailing separators</li>
</ul>
<h3>Manual Implementation</h3>
<p>If you prefer not to add a dependency, here&rsquo;s a minimal slugify function:</p>
${code(JS_MANUAL)}
<p>This handles accented characters via Unicode normalization, converts to lowercase, removes special characters, and collapses whitespace into single hyphens.</p>
<h2>Python</h2>
<h3>Using python-slugify</h3>
<p>The standard library for Python slugification is <code>python-slugify</code>:</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p><code>python-slugify</code> uses the <code>text-unidecode</code> library under the hood for transliteration, which handles a wide range of Unicode characters including CJK.</p>
<h3>Django&rsquo;s Built-in slugify</h3>
<p>If you&rsquo;re using Django, it has a built-in slugify utility:</p>
${code(PY_DJANGO)}
<p>Note: Django&rsquo;s <code>slugify</code> doesn&rsquo;t handle transliteration by default. For accented characters, combine it with <code>unidecode</code>.</p>
<h2>PHP</h2>
<h3>Laravel&rsquo;s Str::slug()</h3>
<p>Laravel provides a clean slug helper:</p>
${code(PHP_LARAVEL)}
<p><code>Str::slug()</code> handles transliteration, lowercasing, and special character removal in one call.</p>
<h3>Manual Implementation</h3>
<p>Without a framework, here&rsquo;s a PHP slugify function:</p>
${code(PHP_MANUAL)}
<p>This uses PHP&rsquo;s <code>intl</code> extension for transliteration. Make sure the <code>intl</code> extension is enabled in your <code>php.ini</code>.</p>
<h2>Comparison Table</h2>
<table>
<thead><tr><th>Feature</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>Transliteration</td><td>Basic Latin</td><td>Full Unicode</td><td>Full Unicode</td></tr>
<tr><td>Custom separator</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Max length</td><td>No</td><td>Yes</td><td>No (manual)</td></tr>
<tr><td>CJK support</td><td>No</td><td>Yes</td><td>Partial</td></tr>
</tbody>
</table>
<h2>When to Use a Library vs. Online Tool</h2>
<p>Use a <strong>library</strong> when you need to generate slugs programmatically at runtime&mdash;for example, auto-generating a URL when a user creates a blog post.</p>
<p>Use an <strong>online tool</strong> when you need a one-off slug or want to quickly check what a title looks like as a URL. Our <a href="%TEXT%">Text to Slug</a> converter supports custom separators, max length, and transliteration&mdash;all the options you&rsquo;d configure in a library, without writing any code.</p>
`,
  }),

  ja: build("ja", {
    title: "JavaScript・Python・PHPでテキストをスラッグ化する方法",
    description:
      "JavaScript、Python、PHPでテキストをURLスラッグに変換するコード例とライブラリ。コピペで使える実装を紹介します。",
    body: `
<p>テキストのスラッグ化&mdash;人間が読める文字列をURLセーフなスラッグに変換すること&mdash;はウェブ開発でよくある作業です。ブログ、ECサイト、APIのいずれを作る場合でも、タイトルなどのテキストからきれいなURLスラッグを生成する必要があります。本ガイドでは、最も人気のあるサーバーサイド言語3つでの方法を紹介します。</p>
<p>コードを書きたくない場合は、当サイトの<a href="%SLUGIFY%">スラッグ化オンラインツール</a>を使えば、ブラウザ上で瞬時にテキストをスラッグへ変換できます。</p>
<h2>JavaScript / Node.js</h2>
<h3>slugify ライブラリを使う</h3>
<p>JavaScriptで最も一般的なのは <code>slugify</code> という npm パッケージです。</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>オプションの説明:</p>
<ul>
<li><code>lower: true</code> &mdash; 小文字に変換する</li>
<li><code>strict: true</code> &mdash; 英数字と区切り文字以外をすべて取り除く</li>
<li><code>trim: true</code> &mdash; 先頭・末尾の区切り文字を削除する</li>
</ul>
<h3>自前で実装する</h3>
<p>依存を増やしたくない場合は、最小限のスラッグ化関数を示します。</p>
${code(JS_MANUAL)}
<p>これはUnicode正規化でアクセント付き文字を処理し、小文字に変換し、特殊文字を除去し、空白を単一のハイフンにまとめます。</p>
<h2>Python</h2>
<h3>python-slugify を使う</h3>
<p>Pythonのスラッグ化の定番ライブラリは <code>python-slugify</code> です。</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p><code>python-slugify</code> は内部で <code>text-unidecode</code> ライブラリを使って音訳を行い、CJKを含む幅広いUnicode文字に対応します。</p>
<h3>Django 組み込みの slugify</h3>
<p>Djangoを使っているなら、組み込みのslugifyユーティリティがあります。</p>
${code(PY_DJANGO)}
<p>注意: Djangoの <code>slugify</code> は既定では音訳を行いません。アクセント付き文字には <code>unidecode</code> と組み合わせてください。</p>
<h2>PHP</h2>
<h3>Laravel の Str::slug()</h3>
<p>Laravelはきれいなスラッグヘルパーを提供します。</p>
${code(PHP_LARAVEL)}
<p><code>Str::slug()</code> は音訳・小文字化・特殊文字の除去を一度の呼び出しで処理します。</p>
<h3>自前で実装する</h3>
<p>フレームワークなしの場合のPHPスラッグ化関数です。</p>
${code(PHP_MANUAL)}
<p>これはPHPの <code>intl</code> 拡張を音訳に使います。<code>php.ini</code> で <code>intl</code> 拡張が有効になっていることを確認してください。</p>
<h2>比較表</h2>
<table>
<thead><tr><th>機能</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>音訳</td><td>基本ラテン</td><td>フルUnicode</td><td>フルUnicode</td></tr>
<tr><td>区切り文字の指定</td><td>可</td><td>可</td><td>可</td></tr>
<tr><td>最大長</td><td>不可</td><td>可</td><td>不可（手動）</td></tr>
<tr><td>CJK対応</td><td>不可</td><td>可</td><td>一部</td></tr>
</tbody>
</table>
<h2>ライブラリとオンラインツールの使い分け</h2>
<p>実行時にプログラムでスラッグを生成する必要があるとき&mdash;たとえばユーザーがブログ記事を作成した際にURLを自動生成する場合&mdash;は<strong>ライブラリ</strong>を使いましょう。</p>
<p>一度きりのスラッグが欲しいときや、タイトルがURLとしてどう見えるかをすぐ確認したいときは<strong>オンラインツール</strong>を使いましょう。当サイトの<a href="%TEXT%">テキストをスラッグに変換するツール</a>は、区切り文字の指定・最大長・音訳に対応しており、ライブラリで設定するようなオプションをコードを書かずに使えます。</p>
`,
  }),

  de: build("de", {
    title: "Text slugifizieren in JavaScript, Python und PHP",
    description:
      "Codebeispiele und Bibliotheken, um Text in JavaScript, Python und PHP in URL-Slugs umzuwandeln. Copy-paste-fertige Lösungen.",
    body: `
<p>Text zu slugifizieren&mdash;eine menschenlesbare Zeichenkette in einen URL-sicheren Slug umzuwandeln&mdash;ist eine häufige Aufgabe in der Webentwicklung. Ob Sie einen Blog, einen Onlineshop oder eine API bauen: Sie müssen saubere URL-Slugs aus Titeln und anderem Text erzeugen. Dieser Leitfaden zeigt, wie das in den drei beliebtesten serverseitigen Sprachen geht.</p>
<p>Sie möchten keinen Code schreiben? Nutzen Sie unser Tool <a href="%SLUGIFY%">Slugify Online</a>, um Text sofort im Browser in Slugs umzuwandeln.</p>
<h2>JavaScript / Node.js</h2>
<h3>Die slugify-Bibliothek verwenden</h3>
<p>Der gängigste Ansatz in JavaScript ist das npm-Paket <code>slugify</code>:</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>Die Optionen erklärt:</p>
<ul>
<li><code>lower: true</code> &mdash; wandelt in Kleinbuchstaben um</li>
<li><code>strict: true</code> &mdash; entfernt alle Zeichen, die keine Buchstaben, Zahlen oder das Trennzeichen sind</li>
<li><code>trim: true</code> &mdash; entfernt führende/abschließende Trennzeichen</li>
</ul>
<h3>Manuelle Implementierung</h3>
<p>Wenn Sie keine Abhängigkeit hinzufügen möchten, hier eine minimale slugify-Funktion:</p>
${code(JS_MANUAL)}
<p>Sie verarbeitet Akzentbuchstaben per Unicode-Normalisierung, wandelt in Kleinbuchstaben um, entfernt Sonderzeichen und fasst Leerraum zu einzelnen Bindestrichen zusammen.</p>
<h2>Python</h2>
<h3>python-slugify verwenden</h3>
<p>Die Standardbibliothek für die Slug-Erzeugung in Python ist <code>python-slugify</code>:</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p><code>python-slugify</code> nutzt im Hintergrund die Bibliothek <code>text-unidecode</code> für die Transliteration, die eine breite Palette an Unicode-Zeichen einschließlich CJK abdeckt.</p>
<h3>Djangos eingebautes slugify</h3>
<p>Wenn Sie Django nutzen, gibt es ein eingebautes slugify-Hilfsmittel:</p>
${code(PY_DJANGO)}
<p>Hinweis: Djangos <code>slugify</code> führt standardmäßig keine Transliteration durch. Kombinieren Sie es für Akzentbuchstaben mit <code>unidecode</code>.</p>
<h2>PHP</h2>
<h3>Laravels Str::slug()</h3>
<p>Laravel bietet einen sauberen Slug-Helfer:</p>
${code(PHP_LARAVEL)}
<p><code>Str::slug()</code> erledigt Transliteration, Kleinschreibung und das Entfernen von Sonderzeichen in einem Aufruf.</p>
<h3>Manuelle Implementierung</h3>
<p>Ohne Framework hier eine PHP-slugify-Funktion:</p>
${code(PHP_MANUAL)}
<p>Sie nutzt die <code>intl</code>-Erweiterung von PHP für die Transliteration. Stellen Sie sicher, dass die <code>intl</code>-Erweiterung in Ihrer <code>php.ini</code> aktiviert ist.</p>
<h2>Vergleichstabelle</h2>
<table>
<thead><tr><th>Funktion</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>Transliteration</td><td>Basis-Latein</td><td>Volles Unicode</td><td>Volles Unicode</td></tr>
<tr><td>Eigenes Trennzeichen</td><td>Ja</td><td>Ja</td><td>Ja</td></tr>
<tr><td>Maximale Länge</td><td>Nein</td><td>Ja</td><td>Nein (manuell)</td></tr>
<tr><td>CJK-Unterstützung</td><td>Nein</td><td>Ja</td><td>Teilweise</td></tr>
</tbody>
</table>
<h2>Wann Bibliothek, wann Online-Tool?</h2>
<p>Verwenden Sie eine <strong>Bibliothek</strong>, wenn Sie Slugs zur Laufzeit programmatisch erzeugen müssen&mdash;etwa um beim Erstellen eines Blogbeitrags automatisch eine URL zu generieren.</p>
<p>Verwenden Sie ein <strong>Online-Tool</strong>, wenn Sie einen einmaligen Slug brauchen oder schnell prüfen möchten, wie ein Titel als URL aussieht. Unser <a href="%TEXT%">Text-zu-Slug</a>-Konverter unterstützt eigene Trennzeichen, maximale Länge und Transliteration&mdash;alle Optionen, die Sie in einer Bibliothek konfigurieren würden, ganz ohne Code.</p>
`,
  }),

  es: build("es", {
    title: "Cómo convertir texto en slug en JavaScript, Python y PHP",
    description:
      "Ejemplos de código y librerías para convertir texto en slugs de URL en JavaScript, Python y PHP. Soluciones listas para copiar y pegar.",
    body: `
<p>Convertir texto en slug&mdash;transformar una cadena legible en un slug seguro para URL&mdash;es una tarea habitual en el desarrollo web. Tanto si creas un blog, una tienda online o una API, necesitarás generar slugs limpios a partir de títulos y otros textos. Esta guía te muestra cómo hacerlo en los tres lenguajes de servidor más populares.</p>
<p>¿No quieres escribir código? Usa nuestra herramienta <a href="%SLUGIFY%">Slugify Online</a> para convertir texto en slugs al instante en tu navegador.</p>
<h2>JavaScript / Node.js</h2>
<h3>Usar la librería slugify</h3>
<p>El enfoque más popular en JavaScript es el paquete npm <code>slugify</code>:</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>Opciones explicadas:</p>
<ul>
<li><code>lower: true</code> &mdash; convierte a minúsculas</li>
<li><code>strict: true</code> &mdash; elimina todos los caracteres que no sean letras, números o el separador</li>
<li><code>trim: true</code> &mdash; elimina los separadores al inicio y al final</li>
</ul>
<h3>Implementación manual</h3>
<p>Si prefieres no añadir una dependencia, aquí tienes una función slugify mínima:</p>
${code(JS_MANUAL)}
<p>Maneja los caracteres acentuados mediante normalización Unicode, convierte a minúsculas, elimina caracteres especiales y colapsa los espacios en guiones simples.</p>
<h2>Python</h2>
<h3>Usar python-slugify</h3>
<p>La librería estándar para crear slugs en Python es <code>python-slugify</code>:</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p><code>python-slugify</code> usa por debajo la librería <code>text-unidecode</code> para la transliteración, que maneja una amplia gama de caracteres Unicode, incluido CJK.</p>
<h3>El slugify integrado de Django</h3>
<p>Si usas Django, incluye una utilidad slugify integrada:</p>
${code(PY_DJANGO)}
<p>Nota: el <code>slugify</code> de Django no hace transliteración por defecto. Para caracteres acentuados, combínalo con <code>unidecode</code>.</p>
<h2>PHP</h2>
<h3>Str::slug() de Laravel</h3>
<p>Laravel ofrece un ayudante de slug limpio:</p>
${code(PHP_LARAVEL)}
<p><code>Str::slug()</code> realiza la transliteración, el paso a minúsculas y la eliminación de caracteres especiales en una sola llamada.</p>
<h3>Implementación manual</h3>
<p>Sin framework, aquí tienes una función slugify en PHP:</p>
${code(PHP_MANUAL)}
<p>Usa la extensión <code>intl</code> de PHP para la transliteración. Asegúrate de que la extensión <code>intl</code> esté habilitada en tu <code>php.ini</code>.</p>
<h2>Tabla comparativa</h2>
<table>
<thead><tr><th>Característica</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>Transliteración</td><td>Latín básico</td><td>Unicode completo</td><td>Unicode completo</td></tr>
<tr><td>Separador personalizado</td><td>Sí</td><td>Sí</td><td>Sí</td></tr>
<tr><td>Longitud máxima</td><td>No</td><td>Sí</td><td>No (manual)</td></tr>
<tr><td>Soporte CJK</td><td>No</td><td>Sí</td><td>Parcial</td></tr>
</tbody>
</table>
<h2>Cuándo usar una librería frente a una herramienta online</h2>
<p>Usa una <strong>librería</strong> cuando necesites generar slugs de forma programática en tiempo de ejecución&mdash;por ejemplo, autogenerar una URL cuando un usuario crea una entrada de blog.</p>
<p>Usa una <strong>herramienta online</strong> cuando necesites un slug puntual o quieras comprobar rápidamente cómo se ve un título como URL. Nuestro conversor <a href="%TEXT%">de texto a slug</a> admite separadores personalizados, longitud máxima y transliteración&mdash;todas las opciones que configurarías en una librería, sin escribir código.</p>
`,
  }),

  pt: build("pt", {
    title: "Como converter texto em slug em JavaScript, Python e PHP",
    description:
      "Exemplos de código e bibliotecas para converter texto em slugs de URL em JavaScript, Python e PHP. Soluções prontas para copiar e colar.",
    body: `
<p>Converter texto em slug&mdash;transformar uma string legível em um slug seguro para URL&mdash;é uma tarefa comum no desenvolvimento web. Seja criando um blog, uma loja virtual ou uma API, você precisará gerar slugs limpos a partir de títulos e outros textos. Este guia mostra como fazer isso nas três linguagens de servidor mais populares.</p>
<p>Não quer escrever código? Use nossa ferramenta <a href="%SLUGIFY%">Slugify Online</a> para converter texto em slugs instantaneamente no navegador.</p>
<h2>JavaScript / Node.js</h2>
<h3>Usando a biblioteca slugify</h3>
<p>A abordagem mais popular em JavaScript é o pacote npm <code>slugify</code>:</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>Opções explicadas:</p>
<ul>
<li><code>lower: true</code> &mdash; converte para minúsculas</li>
<li><code>strict: true</code> &mdash; remove todos os caracteres que não sejam letras, números ou o separador</li>
<li><code>trim: true</code> &mdash; remove os separadores do início e do fim</li>
</ul>
<h3>Implementação manual</h3>
<p>Se preferir não adicionar uma dependência, aqui está uma função slugify mínima:</p>
${code(JS_MANUAL)}
<p>Ela trata caracteres acentuados via normalização Unicode, converte para minúsculas, remove caracteres especiais e condensa os espaços em hífens simples.</p>
<h2>Python</h2>
<h3>Usando python-slugify</h3>
<p>A biblioteca padrão para gerar slugs em Python é <code>python-slugify</code>:</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p>O <code>python-slugify</code> usa por baixo a biblioteca <code>text-unidecode</code> para transliteração, que lida com uma ampla gama de caracteres Unicode, incluindo CJK.</p>
<h3>O slugify embutido do Django</h3>
<p>Se você usa Django, ele tem um utilitário slugify embutido:</p>
${code(PY_DJANGO)}
<p>Observação: o <code>slugify</code> do Django não faz transliteração por padrão. Para caracteres acentuados, combine-o com <code>unidecode</code>.</p>
<h2>PHP</h2>
<h3>Str::slug() do Laravel</h3>
<p>O Laravel oferece um helper de slug limpo:</p>
${code(PHP_LARAVEL)}
<p>O <code>Str::slug()</code> faz a transliteração, a conversão para minúsculas e a remoção de caracteres especiais em uma única chamada.</p>
<h3>Implementação manual</h3>
<p>Sem framework, aqui está uma função slugify em PHP:</p>
${code(PHP_MANUAL)}
<p>Ela usa a extensão <code>intl</code> do PHP para transliteração. Certifique-se de que a extensão <code>intl</code> esteja habilitada no seu <code>php.ini</code>.</p>
<h2>Tabela comparativa</h2>
<table>
<thead><tr><th>Recurso</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>Transliteração</td><td>Latim básico</td><td>Unicode completo</td><td>Unicode completo</td></tr>
<tr><td>Separador personalizado</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
<tr><td>Comprimento máximo</td><td>Não</td><td>Sim</td><td>Não (manual)</td></tr>
<tr><td>Suporte a CJK</td><td>Não</td><td>Sim</td><td>Parcial</td></tr>
</tbody>
</table>
<h2>Quando usar uma biblioteca x ferramenta online</h2>
<p>Use uma <strong>biblioteca</strong> quando precisar gerar slugs de forma programática em tempo de execução&mdash;por exemplo, gerar uma URL automaticamente quando um usuário cria um post de blog.</p>
<p>Use uma <strong>ferramenta online</strong> quando precisar de um slug pontual ou quiser verificar rapidamente como um título fica como URL. Nosso conversor <a href="%TEXT%">de texto para slug</a> oferece separadores personalizados, comprimento máximo e transliteração&mdash;todas as opções que você configuraria em uma biblioteca, sem escrever código.</p>
`,
  }),

  fr: build("fr", {
    title: "Comment slugifier du texte en JavaScript, Python et PHP",
    description:
      "Exemples de code et bibliothèques pour convertir du texte en slugs d'URL en JavaScript, Python et PHP. Des solutions prêtes à copier-coller.",
    body: `
<p>Slugifier du texte&mdash;convertir une chaîne lisible par l'humain en un slug compatible avec les URLs&mdash;est une tâche courante en développement web. Que vous construisiez un blog, un site e-commerce ou une API, vous devrez générer des slugs propres à partir de titres et d'autres textes. Ce guide montre comment le faire dans les trois langages serveur les plus populaires.</p>
<p>Vous ne voulez pas écrire de code ? Utilisez notre outil <a href="%SLUGIFY%">Slugify Online</a> pour convertir du texte en slugs instantanément dans votre navigateur.</p>
<h2>JavaScript / Node.js</h2>
<h3>Utiliser la bibliothèque slugify</h3>
<p>L'approche la plus populaire en JavaScript est le paquet npm <code>slugify</code> :</p>
${code(JS_INSTALL)}
${code(JS_LIB)}
<p>Les options expliquées :</p>
<ul>
<li><code>lower: true</code> &mdash; convertit en minuscules</li>
<li><code>strict: true</code> &mdash; supprime tous les caractères qui ne sont pas des lettres, des chiffres ou le séparateur</li>
<li><code>trim: true</code> &mdash; supprime les séparateurs au début et à la fin</li>
</ul>
<h3>Implémentation manuelle</h3>
<p>Si vous préférez ne pas ajouter de dépendance, voici une fonction slugify minimale :</p>
${code(JS_MANUAL)}
<p>Elle gère les caractères accentués via la normalisation Unicode, convertit en minuscules, supprime les caractères spéciaux et réduit les espaces en simples traits d'union.</p>
<h2>Python</h2>
<h3>Utiliser python-slugify</h3>
<p>La bibliothèque standard pour la slugification en Python est <code>python-slugify</code> :</p>
${code(PY_INSTALL)}
${code(PY_LIB)}
<p><code>python-slugify</code> utilise en interne la bibliothèque <code>text-unidecode</code> pour la translittération, qui gère un large éventail de caractères Unicode, y compris le CJK.</p>
<h3>Le slugify intégré de Django</h3>
<p>Si vous utilisez Django, il dispose d'un utilitaire slugify intégré :</p>
${code(PY_DJANGO)}
<p>Remarque : le <code>slugify</code> de Django ne gère pas la translittération par défaut. Pour les caractères accentués, combinez-le avec <code>unidecode</code>.</p>
<h2>PHP</h2>
<h3>Str::slug() de Laravel</h3>
<p>Laravel fournit un helper de slug propre :</p>
${code(PHP_LARAVEL)}
<p><code>Str::slug()</code> gère la translittération, la mise en minuscules et la suppression des caractères spéciaux en un seul appel.</p>
<h3>Implémentation manuelle</h3>
<p>Sans framework, voici une fonction slugify en PHP :</p>
${code(PHP_MANUAL)}
<p>Elle utilise l'extension <code>intl</code> de PHP pour la translittération. Assurez-vous que l'extension <code>intl</code> est activée dans votre <code>php.ini</code>.</p>
<h2>Tableau comparatif</h2>
<table>
<thead><tr><th>Fonctionnalité</th><th>JS (slugify)</th><th>Python (python-slugify)</th><th>PHP (Laravel)</th></tr></thead>
<tbody>
<tr><td>Translittération</td><td>Latin de base</td><td>Unicode complet</td><td>Unicode complet</td></tr>
<tr><td>Séparateur personnalisé</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Longueur maximale</td><td>Non</td><td>Oui</td><td>Non (manuel)</td></tr>
<tr><td>Prise en charge du CJK</td><td>Non</td><td>Oui</td><td>Partielle</td></tr>
</tbody>
</table>
<h2>Quand utiliser une bibliothèque plutôt qu'un outil en ligne</h2>
<p>Utilisez une <strong>bibliothèque</strong> lorsque vous devez générer des slugs de façon programmatique à l'exécution&mdash;par exemple, générer automatiquement une URL quand un utilisateur crée un article de blog.</p>
<p>Utilisez un <strong>outil en ligne</strong> lorsque vous avez besoin d'un slug ponctuel ou que vous voulez vérifier rapidement à quoi ressemble un titre en tant qu'URL. Notre convertisseur <a href="%TEXT%">de texte en slug</a> prend en charge les séparateurs personnalisés, la longueur maximale et la translittération&mdash;toutes les options que vous configureriez dans une bibliothèque, sans écrire de code.</p>
`,
  }),
};
