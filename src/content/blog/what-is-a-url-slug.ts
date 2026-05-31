import type { Locale } from "@/i18n/routing";

export interface Article {
  title: string;
  description: string;
  body: string;
}

export const meta = {
  slug: "what-is-a-url-slug",
  date: "2026-05-20",
  readTime: 5,
};

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);

const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HOME%", p(l, "/"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%TEXT%", p(l, "/text-to-slug")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is a URL Slug? A Complete Guide",
    description:
      "Learn what URL slugs are, why they matter for SEO, and how to create effective ones. Includes examples and best practices.",
    body: `
<p>A <strong>URL slug</strong> is the part of a web address that identifies a specific page in a human-readable format. In the URL <code>https://example.com/what-is-a-url-slug</code>, the slug is <code>what-is-a-url-slug</code>.</p>
<p>The term &ldquo;slug&rdquo; comes from the newspaper industry, where a slug was a short name given to an article during production. In web development, the concept works the same way&mdash;a slug is a short, descriptive label that identifies a specific page.</p>
<h2>Why URL Slugs Matter for SEO</h2>
<p>URL slugs are one of the simplest SEO signals you can control. Search engines like Google use the URL to understand what a page is about. A descriptive slug gives both Google and users immediate context about the page content.</p>
<p>Consider these two URLs:</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; tells nothing about the content</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; clearly describes the page topic</li>
</ul>
<p>Google has confirmed that keywords in URLs are a minor ranking factor. While they won&rsquo;t single-handedly get you to page one, they contribute to the overall relevance signal and improve click-through rates from search results.</p>
<h2>Anatomy of a Good URL Slug</h2>
<p>A well-crafted URL slug has these characteristics:</p>
<ol>
<li><strong>Lowercase</strong> &mdash; URLs are case-sensitive on most servers. Using lowercase avoids duplicate content issues.</li>
<li><strong>Hyphen-separated</strong> &mdash; Google treats hyphens as word separators but doesn&rsquo;t treat underscores the same way.</li>
<li><strong>Descriptive</strong> &mdash; Contains relevant keywords that describe the page content.</li>
<li><strong>Concise</strong> &mdash; Generally under 60 characters. Shorter slugs are easier to read and share.</li>
<li><strong>No special characters</strong> &mdash; Only uses letters (a-z), numbers (0-9), and hyphens (-).</li>
</ol>
<h2>How URL Slugs Are Created</h2>
<p>The process of creating a URL slug (called &ldquo;slugification&rdquo;) typically involves:</p>
<ol>
<li>Taking the page title or a descriptive phrase</li>
<li>Converting it to lowercase</li>
<li>Replacing spaces with hyphens</li>
<li>Removing special characters and punctuation</li>
<li>Transliterating accented characters (&eacute; &rarr; e, &uuml; &rarr; u)</li>
<li>Collapsing multiple consecutive hyphens into one</li>
<li>Trimming hyphens from the start and end</li>
</ol>
<p>For example, the title &ldquo;Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!&rdquo; becomes the slug <code>cafe-menu-special-edition-2024</code>.</p>
<p>You can automate this process using our <a href="%HOME%">Slug Generator</a>, which handles all these steps instantly in your browser.</p>
<h2>Common URL Slug Mistakes</h2>
<ol>
<li><strong>Including stop words unnecessarily</strong> &mdash; Words like &ldquo;a&rdquo;, &ldquo;the&rdquo;, &ldquo;is&rdquo;, &ldquo;and&rdquo; add length without value.</li>
<li><strong>Using IDs instead of slugs</strong> &mdash; URLs like <code>example.com/post/12345</code> waste the SEO opportunity of having keywords in the URL.</li>
<li><strong>Changing slugs after publishing</strong> &mdash; Once Google indexes a URL, changing the slug creates a 404 error unless you set up a redirect. Only change slugs when absolutely necessary.</li>
<li><strong>Keyword stuffing</strong> &mdash; Cramming every possible keyword into a slug looks spammy and can hurt rather than help.</li>
<li><strong>Using underscores</strong> &mdash; Google explicitly recommends hyphens over underscores. The <a href="%KEBAB%">Kebab Case Converter</a> ensures your text uses the correct format.</li>
</ol>
<h2>URL Slugs in Different Platforms</h2>
<p>Most content management systems generate slugs automatically:</p>
<ul>
<li><strong>WordPress</strong> creates slugs from the post title but lets you edit them</li>
<li><strong>Shopify</strong> generates product slugs from the product name</li>
<li><strong>Ghost</strong> and <strong>Hugo</strong> use the title as the default slug</li>
<li><strong>Next.js</strong> and <strong>Gatsby</strong> use file names or programmatic routing</li>
</ul>
<p>For custom applications, you can use our <a href="%TEXT%">Text to Slug converter</a> to generate slugs that work with any platform.</p>
<h2>Summary</h2>
<p>URL slugs are a small but important part of SEO and web development. They help search engines understand your content, improve click-through rates, and make URLs more user-friendly. The best slugs are short, descriptive, lowercase, and use hyphens as separators.</p>
`,
  }),

  ja: build("ja", {
    title: "URLスラッグとは？完全ガイド",
    description:
      "URLスラッグとは何か、なぜSEOで重要なのか、効果的な作り方を解説。具体例とベストプラクティス付き。",
    body: `
<p><strong>URLスラッグ</strong>とは、ウェブアドレスのうち特定のページを人間が読みやすい形で識別する部分です。<code>https://example.com/what-is-a-url-slug</code> というURLでは、スラッグは <code>what-is-a-url-slug</code> の部分です。</p>
<p>「スラッグ（slug）」という言葉は新聞業界に由来し、制作中の記事に付ける短い識別名を指していました。ウェブ開発でも考え方は同じで、スラッグは特定のページを識別する短く説明的なラベルです。</p>
<h2>URLスラッグがSEOで重要な理由</h2>
<p>URLスラッグは、自分でコントロールできる最もシンプルなSEOシグナルの一つです。Googleなどの検索エンジンはURLを使ってページの内容を理解します。説明的なスラッグは、Googleとユーザーの双方にページ内容の手がかりをすぐに与えます。</p>
<p>次の2つのURLを比べてみましょう。</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; 内容について何も伝えない</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; ページのテーマを明確に示す</li>
</ul>
<p>GoogleはURL内のキーワードが軽微なランキング要因であることを認めています。単独で1ページ目に押し上げる力はありませんが、全体的な関連性シグナルに寄与し、検索結果でのクリック率を高めます。</p>
<h2>良いURLスラッグの構造</h2>
<p>よく練られたURLスラッグには次の特徴があります。</p>
<ol>
<li><strong>小文字</strong> &mdash; 多くのサーバーでURLは大文字小文字を区別します。小文字に統一すると重複コンテンツの問題を避けられます。</li>
<li><strong>ハイフン区切り</strong> &mdash; Googleはハイフンを単語の区切りとして扱いますが、アンダースコアは同じようには扱いません。</li>
<li><strong>説明的</strong> &mdash; ページ内容を表す関連キーワードを含みます。</li>
<li><strong>簡潔</strong> &mdash; おおむね60文字以内。短いスラッグは読みやすく共有しやすいです。</li>
<li><strong>特殊文字なし</strong> &mdash; 英字（a-z）、数字（0-9）、ハイフン（-）のみを使います。</li>
</ol>
<h2>URLスラッグの作り方</h2>
<p>URLスラッグを作る処理（「スラッグ化」と呼ばれます）は通常、次の手順を含みます。</p>
<ol>
<li>ページタイトルや説明的なフレーズを用意する</li>
<li>小文字に変換する</li>
<li>スペースをハイフンに置き換える</li>
<li>特殊文字や句読点を取り除く</li>
<li>アクセント付き文字を音訳する（&eacute; &rarr; e、&uuml; &rarr; u）</li>
<li>連続するハイフンを1つにまとめる</li>
<li>先頭と末尾のハイフンを削る</li>
</ol>
<p>たとえば「Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!」というタイトルは、<code>cafe-menu-special-edition-2024</code> というスラッグになります。</p>
<p>この処理は当サイトの<a href="%HOME%">スラッグジェネレーター</a>で自動化できます。ブラウザ上でこれらの手順を瞬時に処理します。</p>
<h2>よくあるURLスラッグの間違い</h2>
<ol>
<li><strong>不要なストップワードを含める</strong> &mdash; 「a」「the」「is」「and」などの語は長さを増やすだけで価値がありません。</li>
<li><strong>スラッグの代わりにIDを使う</strong> &mdash; <code>example.com/post/12345</code> のようなURLは、URLにキーワードを入れるSEOの機会を無駄にします。</li>
<li><strong>公開後にスラッグを変更する</strong> &mdash; GoogleがURLをインデックスした後にスラッグを変えると、リダイレクトを設定しない限り404エラーになります。本当に必要なときだけ変更しましょう。</li>
<li><strong>キーワードの詰め込み</strong> &mdash; あらゆるキーワードをスラッグに詰め込むとスパムに見え、逆効果になりかねません。</li>
<li><strong>アンダースコアの使用</strong> &mdash; Googleはアンダースコアよりハイフンを明確に推奨しています。<a href="%KEBAB%">ケバブケース変換ツール</a>を使えば正しい形式にできます。</li>
</ol>
<h2>プラットフォーム別のURLスラッグ</h2>
<p>ほとんどのCMSはスラッグを自動生成します。</p>
<ul>
<li><strong>WordPress</strong> は投稿タイトルからスラッグを作り、編集も可能です</li>
<li><strong>Shopify</strong> は商品名から商品スラッグを生成します</li>
<li><strong>Ghost</strong> と <strong>Hugo</strong> はタイトルを既定のスラッグとして使います</li>
<li><strong>Next.js</strong> と <strong>Gatsby</strong> はファイル名やプログラムによるルーティングを使います</li>
</ul>
<p>独自アプリケーションでは、当サイトの<a href="%TEXT%">テキストをスラッグに変換するツール</a>を使えば、どんなプラットフォームでも使えるスラッグを生成できます。</p>
<h2>まとめ</h2>
<p>URLスラッグはSEOとウェブ開発において小さくとも重要な要素です。検索エンジンがコンテンツを理解する助けとなり、クリック率を高め、URLを分かりやすくします。最良のスラッグは短く、説明的で、小文字で、区切りにハイフンを使います。</p>
`,
  }),

  de: build("de", {
    title: "Was ist ein URL-Slug? Ein vollständiger Leitfaden",
    description:
      "Erfahren Sie, was URL-Slugs sind, warum sie für SEO wichtig sind und wie Sie effektive Slugs erstellen. Mit Beispielen und Best Practices.",
    body: `
<p>Ein <strong>URL-Slug</strong> ist der Teil einer Webadresse, der eine bestimmte Seite in einem menschenlesbaren Format identifiziert. In der URL <code>https://example.com/what-is-a-url-slug</code> ist der Slug <code>what-is-a-url-slug</code>.</p>
<p>Der Begriff &bdquo;Slug&ldquo; stammt aus der Zeitungsbranche, wo ein Slug ein kurzer Name war, den man einem Artikel während der Produktion gab. In der Webentwicklung funktioniert das Konzept genauso&mdash;ein Slug ist eine kurze, beschreibende Bezeichnung, die eine bestimmte Seite identifiziert.</p>
<h2>Warum URL-Slugs für SEO wichtig sind</h2>
<p>URL-Slugs gehören zu den einfachsten SEO-Signalen, die Sie kontrollieren können. Suchmaschinen wie Google nutzen die URL, um zu verstehen, worum es auf einer Seite geht. Ein beschreibender Slug gibt sowohl Google als auch Nutzern sofort Kontext zum Seiteninhalt.</p>
<p>Vergleichen Sie diese beiden URLs:</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; sagt nichts über den Inhalt aus</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; beschreibt das Thema der Seite klar</li>
</ul>
<p>Google hat bestätigt, dass Keywords in URLs ein geringfügiger Rankingfaktor sind. Sie bringen Sie zwar nicht im Alleingang auf die erste Seite, tragen aber zum gesamten Relevanzsignal bei und verbessern die Klickrate in den Suchergebnissen.</p>
<h2>Aufbau eines guten URL-Slugs</h2>
<p>Ein gut gestalteter URL-Slug hat diese Eigenschaften:</p>
<ol>
<li><strong>Kleinschreibung</strong> &mdash; URLs sind auf den meisten Servern case-sensitiv. Kleinschreibung vermeidet Probleme mit doppeltem Inhalt.</li>
<li><strong>Mit Bindestrichen getrennt</strong> &mdash; Google behandelt Bindestriche als Worttrenner, Unterstriche jedoch nicht auf dieselbe Weise.</li>
<li><strong>Beschreibend</strong> &mdash; Enthält relevante Keywords, die den Seiteninhalt beschreiben.</li>
<li><strong>Prägnant</strong> &mdash; In der Regel unter 60 Zeichen. Kürzere Slugs sind leichter zu lesen und zu teilen.</li>
<li><strong>Keine Sonderzeichen</strong> &mdash; Nur Buchstaben (a-z), Zahlen (0-9) und Bindestriche (-).</li>
</ol>
<h2>Wie URL-Slugs erstellt werden</h2>
<p>Der Prozess zum Erstellen eines URL-Slugs (genannt &bdquo;Slugification&ldquo;) umfasst typischerweise:</p>
<ol>
<li>Den Seitentitel oder eine beschreibende Phrase nehmen</li>
<li>In Kleinbuchstaben umwandeln</li>
<li>Leerzeichen durch Bindestriche ersetzen</li>
<li>Sonderzeichen und Satzzeichen entfernen</li>
<li>Akzentbuchstaben transliterieren (&eacute; &rarr; e, &uuml; &rarr; u)</li>
<li>Mehrere aufeinanderfolgende Bindestriche zu einem zusammenfassen</li>
<li>Bindestriche am Anfang und Ende entfernen</li>
</ol>
<p>Zum Beispiel wird der Titel &bdquo;Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!&ldquo; zum Slug <code>cafe-menu-special-edition-2024</code>.</p>
<p>Diesen Vorgang können Sie mit unserem <a href="%HOME%">Slug-Generator</a> automatisieren, der all diese Schritte sofort in Ihrem Browser erledigt.</p>
<h2>Häufige Fehler bei URL-Slugs</h2>
<ol>
<li><strong>Unnötige Stoppwörter einbauen</strong> &mdash; Wörter wie &bdquo;a&ldquo;, &bdquo;the&ldquo;, &bdquo;is&ldquo;, &bdquo;and&ldquo; verlängern den Slug ohne Mehrwert.</li>
<li><strong>IDs statt Slugs verwenden</strong> &mdash; URLs wie <code>example.com/post/12345</code> verschenken die SEO-Chance, Keywords in der URL zu haben.</li>
<li><strong>Slugs nach der Veröffentlichung ändern</strong> &mdash; Sobald Google eine URL indexiert hat, führt eine Slug-Änderung ohne Weiterleitung zu einem 404-Fehler. Ändern Sie Slugs nur, wenn es unbedingt nötig ist.</li>
<li><strong>Keyword-Stuffing</strong> &mdash; Jedes mögliche Keyword in einen Slug zu pressen, wirkt spammy und kann eher schaden als nützen.</li>
<li><strong>Unterstriche verwenden</strong> &mdash; Google empfiehlt ausdrücklich Bindestriche statt Unterstriche. Der <a href="%KEBAB%">Kebab-Case-Konverter</a> sorgt für das richtige Format.</li>
</ol>
<h2>URL-Slugs in verschiedenen Plattformen</h2>
<p>Die meisten Content-Management-Systeme erzeugen Slugs automatisch:</p>
<ul>
<li><strong>WordPress</strong> erstellt Slugs aus dem Beitragstitel, lässt sie aber bearbeiten</li>
<li><strong>Shopify</strong> generiert Produkt-Slugs aus dem Produktnamen</li>
<li><strong>Ghost</strong> und <strong>Hugo</strong> verwenden den Titel als Standard-Slug</li>
<li><strong>Next.js</strong> und <strong>Gatsby</strong> nutzen Dateinamen oder programmatisches Routing</li>
</ul>
<p>Für eigene Anwendungen können Sie unseren <a href="%TEXT%">Text-zu-Slug-Konverter</a> verwenden, um Slugs zu erzeugen, die mit jeder Plattform funktionieren.</p>
<h2>Zusammenfassung</h2>
<p>URL-Slugs sind ein kleiner, aber wichtiger Teil von SEO und Webentwicklung. Sie helfen Suchmaschinen, Ihre Inhalte zu verstehen, verbessern die Klickrate und machen URLs nutzerfreundlicher. Die besten Slugs sind kurz, beschreibend, kleingeschrieben und verwenden Bindestriche als Trennzeichen.</p>
`,
  }),

  es: build("es", {
    title: "¿Qué es un slug de URL? Guía completa",
    description:
      "Aprende qué son los slugs de URL, por qué importan para el SEO y cómo crear slugs efectivos. Incluye ejemplos y buenas prácticas.",
    body: `
<p>Un <strong>slug de URL</strong> es la parte de una dirección web que identifica una página específica en un formato legible para las personas. En la URL <code>https://example.com/what-is-a-url-slug</code>, el slug es <code>what-is-a-url-slug</code>.</p>
<p>El término &laquo;slug&raquo; proviene de la industria periodística, donde un slug era un nombre corto que se daba a un artículo durante su producción. En el desarrollo web el concepto funciona igual: un slug es una etiqueta corta y descriptiva que identifica una página concreta.</p>
<h2>Por qué los slugs de URL importan para el SEO</h2>
<p>Los slugs de URL son una de las señales SEO más sencillas que puedes controlar. Los motores de búsqueda como Google usan la URL para entender de qué trata una página. Un slug descriptivo da contexto inmediato sobre el contenido tanto a Google como a los usuarios.</p>
<p>Compara estas dos URLs:</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; no dice nada sobre el contenido</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; describe claramente el tema de la página</li>
</ul>
<p>Google ha confirmado que las palabras clave en las URLs son un factor de posicionamiento menor. Aunque por sí solas no te llevarán a la primera página, contribuyen a la señal general de relevancia y mejoran la tasa de clics desde los resultados de búsqueda.</p>
<h2>Anatomía de un buen slug de URL</h2>
<p>Un slug de URL bien elaborado tiene estas características:</p>
<ol>
<li><strong>Minúsculas</strong> &mdash; Las URLs distinguen mayúsculas y minúsculas en la mayoría de los servidores. Usar minúsculas evita problemas de contenido duplicado.</li>
<li><strong>Separado por guiones</strong> &mdash; Google trata los guiones como separadores de palabras, pero no hace lo mismo con los guiones bajos.</li>
<li><strong>Descriptivo</strong> &mdash; Contiene palabras clave relevantes que describen el contenido de la página.</li>
<li><strong>Conciso</strong> &mdash; Generalmente menos de 60 caracteres. Los slugs más cortos son más fáciles de leer y compartir.</li>
<li><strong>Sin caracteres especiales</strong> &mdash; Solo usa letras (a-z), números (0-9) y guiones (-).</li>
</ol>
<h2>Cómo se crean los slugs de URL</h2>
<p>El proceso de crear un slug de URL (llamado &laquo;slugificación&raquo;) suele incluir:</p>
<ol>
<li>Tomar el título de la página o una frase descriptiva</li>
<li>Convertirlo a minúsculas</li>
<li>Reemplazar los espacios por guiones</li>
<li>Eliminar caracteres especiales y signos de puntuación</li>
<li>Transliterar los caracteres acentuados (&eacute; &rarr; e, &uuml; &rarr; u)</li>
<li>Unir varios guiones consecutivos en uno solo</li>
<li>Recortar los guiones del principio y del final</li>
</ol>
<p>Por ejemplo, el título &laquo;Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!&raquo; se convierte en el slug <code>cafe-menu-special-edition-2024</code>.</p>
<p>Puedes automatizar este proceso con nuestro <a href="%HOME%">generador de slugs</a>, que realiza todos estos pasos al instante en tu navegador.</p>
<h2>Errores comunes con los slugs de URL</h2>
<ol>
<li><strong>Incluir palabras vacías innecesarias</strong> &mdash; Palabras como &laquo;a&raquo;, &laquo;the&raquo;, &laquo;is&raquo;, &laquo;and&raquo; añaden longitud sin valor.</li>
<li><strong>Usar IDs en lugar de slugs</strong> &mdash; URLs como <code>example.com/post/12345</code> desaprovechan la oportunidad SEO de tener palabras clave en la URL.</li>
<li><strong>Cambiar los slugs tras publicar</strong> &mdash; Una vez que Google indexa una URL, cambiar el slug provoca un error 404 salvo que configures una redirección. Cambia los slugs solo cuando sea imprescindible.</li>
<li><strong>Saturación de palabras clave</strong> &mdash; Meter todas las palabras clave posibles en un slug parece spam y puede perjudicar más que ayudar.</li>
<li><strong>Usar guiones bajos</strong> &mdash; Google recomienda explícitamente los guiones frente a los guiones bajos. El <a href="%KEBAB%">conversor a kebab case</a> garantiza el formato correcto.</li>
</ol>
<h2>Los slugs de URL en distintas plataformas</h2>
<p>La mayoría de los gestores de contenido generan slugs automáticamente:</p>
<ul>
<li><strong>WordPress</strong> crea slugs a partir del título de la entrada, pero permite editarlos</li>
<li><strong>Shopify</strong> genera los slugs de producto a partir del nombre del producto</li>
<li><strong>Ghost</strong> y <strong>Hugo</strong> usan el título como slug por defecto</li>
<li><strong>Next.js</strong> y <strong>Gatsby</strong> usan nombres de archivo o enrutamiento programático</li>
</ul>
<p>Para aplicaciones a medida, puedes usar nuestro <a href="%TEXT%">conversor de texto a slug</a> para generar slugs que funcionen en cualquier plataforma.</p>
<h2>Resumen</h2>
<p>Los slugs de URL son una parte pequeña pero importante del SEO y el desarrollo web. Ayudan a los motores de búsqueda a entender tu contenido, mejoran la tasa de clics y hacen las URLs más amigables. Los mejores slugs son cortos, descriptivos, en minúsculas y usan guiones como separadores.</p>
`,
  }),

  pt: build("pt", {
    title: "O que é um slug de URL? Guia completo",
    description:
      "Saiba o que são slugs de URL, por que importam para o SEO e como criar slugs eficazes. Inclui exemplos e boas práticas.",
    body: `
<p>Um <strong>slug de URL</strong> é a parte de um endereço web que identifica uma página específica em um formato legível para as pessoas. Na URL <code>https://example.com/what-is-a-url-slug</code>, o slug é <code>what-is-a-url-slug</code>.</p>
<p>O termo &laquo;slug&raquo; vem da indústria jornalística, onde um slug era um nome curto dado a um artigo durante a produção. No desenvolvimento web o conceito funciona da mesma forma: um slug é um rótulo curto e descritivo que identifica uma página específica.</p>
<h2>Por que os slugs de URL importam para o SEO</h2>
<p>Os slugs de URL são um dos sinais de SEO mais simples que você pode controlar. Mecanismos de busca como o Google usam a URL para entender do que trata uma página. Um slug descritivo dá contexto imediato sobre o conteúdo tanto ao Google quanto aos usuários.</p>
<p>Compare estas duas URLs:</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; não diz nada sobre o conteúdo</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; descreve claramente o tema da página</li>
</ul>
<p>O Google confirmou que palavras-chave nas URLs são um fator de classificação secundário. Embora sozinhas não o levem à primeira página, contribuem para o sinal geral de relevância e melhoram a taxa de cliques nos resultados de busca.</p>
<h2>Anatomia de um bom slug de URL</h2>
<p>Um slug de URL bem elaborado tem estas características:</p>
<ol>
<li><strong>Minúsculas</strong> &mdash; As URLs diferenciam maiúsculas de minúsculas na maioria dos servidores. Usar minúsculas evita problemas de conteúdo duplicado.</li>
<li><strong>Separado por hífens</strong> &mdash; O Google trata hífens como separadores de palavras, mas não faz o mesmo com sublinhados.</li>
<li><strong>Descritivo</strong> &mdash; Contém palavras-chave relevantes que descrevem o conteúdo da página.</li>
<li><strong>Conciso</strong> &mdash; Geralmente abaixo de 60 caracteres. Slugs mais curtos são mais fáceis de ler e compartilhar.</li>
<li><strong>Sem caracteres especiais</strong> &mdash; Usa apenas letras (a-z), números (0-9) e hífens (-).</li>
</ol>
<h2>Como os slugs de URL são criados</h2>
<p>O processo de criar um slug de URL (chamado &laquo;slugificação&raquo;) costuma envolver:</p>
<ol>
<li>Pegar o título da página ou uma frase descritiva</li>
<li>Convertê-lo para minúsculas</li>
<li>Substituir os espaços por hífens</li>
<li>Remover caracteres especiais e pontuação</li>
<li>Transliterar os caracteres acentuados (&eacute; &rarr; e, &uuml; &rarr; u)</li>
<li>Unir vários hífens consecutivos em um só</li>
<li>Remover os hífens do início e do fim</li>
</ol>
<p>Por exemplo, o título &laquo;Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!&raquo; vira o slug <code>cafe-menu-special-edition-2024</code>.</p>
<p>Você pode automatizar esse processo com nosso <a href="%HOME%">gerador de slugs</a>, que executa todos esses passos instantaneamente no seu navegador.</p>
<h2>Erros comuns com slugs de URL</h2>
<ol>
<li><strong>Incluir palavras vazias desnecessárias</strong> &mdash; Palavras como &laquo;a&raquo;, &laquo;the&raquo;, &laquo;is&raquo;, &laquo;and&raquo; aumentam o tamanho sem valor.</li>
<li><strong>Usar IDs em vez de slugs</strong> &mdash; URLs como <code>example.com/post/12345</code> desperdiçam a oportunidade de SEO de ter palavras-chave na URL.</li>
<li><strong>Mudar os slugs após publicar</strong> &mdash; Depois que o Google indexa uma URL, mudar o slug gera um erro 404 a menos que você configure um redirecionamento. Mude os slugs apenas quando for imprescindível.</li>
<li><strong>Excesso de palavras-chave</strong> &mdash; Enfiar todas as palavras-chave possíveis em um slug parece spam e pode prejudicar mais do que ajudar.</li>
<li><strong>Usar sublinhados</strong> &mdash; O Google recomenda explicitamente hífens em vez de sublinhados. O <a href="%KEBAB%">conversor para kebab case</a> garante o formato correto.</li>
</ol>
<h2>Slugs de URL em diferentes plataformas</h2>
<p>A maioria dos sistemas de gerenciamento de conteúdo gera slugs automaticamente:</p>
<ul>
<li><strong>WordPress</strong> cria slugs a partir do título do post, mas permite editá-los</li>
<li><strong>Shopify</strong> gera slugs de produto a partir do nome do produto</li>
<li><strong>Ghost</strong> e <strong>Hugo</strong> usam o título como slug padrão</li>
<li><strong>Next.js</strong> e <strong>Gatsby</strong> usam nomes de arquivo ou roteamento programático</li>
</ul>
<p>Para aplicações personalizadas, você pode usar nosso <a href="%TEXT%">conversor de texto para slug</a> para gerar slugs que funcionam em qualquer plataforma.</p>
<h2>Resumo</h2>
<p>Os slugs de URL são uma parte pequena, mas importante do SEO e do desenvolvimento web. Eles ajudam os mecanismos de busca a entender seu conteúdo, melhoram a taxa de cliques e tornam as URLs mais amigáveis. Os melhores slugs são curtos, descritivos, em minúsculas e usam hífens como separadores.</p>
`,
  }),

  fr: build("fr", {
    title: "Qu'est-ce qu'un slug d'URL ? Guide complet",
    description:
      "Découvrez ce que sont les slugs d'URL, pourquoi ils comptent pour le SEO et comment créer des slugs efficaces. Avec exemples et bonnes pratiques.",
    body: `
<p>Un <strong>slug d'URL</strong> est la partie d'une adresse web qui identifie une page précise dans un format lisible par l'humain. Dans l'URL <code>https://example.com/what-is-a-url-slug</code>, le slug est <code>what-is-a-url-slug</code>.</p>
<p>Le terme &laquo;&nbsp;slug&nbsp;&raquo; vient de l'industrie de la presse, où un slug était un nom court donné à un article pendant sa production. En développement web, le concept fonctionne de la même façon : un slug est une étiquette courte et descriptive qui identifie une page donnée.</p>
<h2>Pourquoi les slugs d'URL comptent pour le SEO</h2>
<p>Les slugs d'URL font partie des signaux SEO les plus simples que vous pouvez contrôler. Les moteurs de recherche comme Google utilisent l'URL pour comprendre le sujet d'une page. Un slug descriptif donne un contexte immédiat sur le contenu, à la fois à Google et aux utilisateurs.</p>
<p>Comparez ces deux URLs :</p>
<ul>
<li><code>example.com/p?id=1234</code> &mdash; ne dit rien sur le contenu</li>
<li><code>example.com/what-is-a-url-slug</code> &mdash; décrit clairement le sujet de la page</li>
</ul>
<p>Google a confirmé que les mots-clés dans les URLs sont un facteur de classement mineur. S'ils ne vous propulsent pas seuls en première page, ils contribuent au signal global de pertinence et améliorent le taux de clic depuis les résultats de recherche.</p>
<h2>Anatomie d'un bon slug d'URL</h2>
<p>Un slug d'URL bien conçu présente ces caractéristiques :</p>
<ol>
<li><strong>Minuscules</strong> &mdash; Les URLs sont sensibles à la casse sur la plupart des serveurs. Les minuscules évitent les problèmes de contenu dupliqué.</li>
<li><strong>Séparé par des traits d'union</strong> &mdash; Google traite les traits d'union comme des séparateurs de mots, mais pas les tirets bas de la même manière.</li>
<li><strong>Descriptif</strong> &mdash; Contient des mots-clés pertinents qui décrivent le contenu de la page.</li>
<li><strong>Concis</strong> &mdash; Généralement moins de 60 caractères. Les slugs courts sont plus faciles à lire et à partager.</li>
<li><strong>Sans caractères spéciaux</strong> &mdash; N'utilise que des lettres (a-z), des chiffres (0-9) et des traits d'union (-).</li>
</ol>
<h2>Comment les slugs d'URL sont créés</h2>
<p>Le processus de création d'un slug d'URL (appelé &laquo;&nbsp;slugification&nbsp;&raquo;) comprend généralement :</p>
<ol>
<li>Prendre le titre de la page ou une phrase descriptive</li>
<li>Le convertir en minuscules</li>
<li>Remplacer les espaces par des traits d'union</li>
<li>Supprimer les caractères spéciaux et la ponctuation</li>
<li>Translittérer les caractères accentués (&eacute; &rarr; e, &uuml; &rarr; u)</li>
<li>Fusionner plusieurs traits d'union consécutifs en un seul</li>
<li>Retirer les traits d'union au début et à la fin</li>
</ol>
<p>Par exemple, le titre &laquo;&nbsp;Caf&eacute; Menu &mdash; Special &Eacute;dition (2024)!&nbsp;&raquo; devient le slug <code>cafe-menu-special-edition-2024</code>.</p>
<p>Vous pouvez automatiser ce processus avec notre <a href="%HOME%">générateur de slugs</a>, qui effectue toutes ces étapes instantanément dans votre navigateur.</p>
<h2>Erreurs courantes avec les slugs d'URL</h2>
<ol>
<li><strong>Inclure des mots vides inutiles</strong> &mdash; Des mots comme &laquo;&nbsp;a&nbsp;&raquo;, &laquo;&nbsp;the&nbsp;&raquo;, &laquo;&nbsp;is&nbsp;&raquo;, &laquo;&nbsp;and&nbsp;&raquo; allongent le slug sans valeur ajoutée.</li>
<li><strong>Utiliser des ID au lieu de slugs</strong> &mdash; Des URLs comme <code>example.com/post/12345</code> gâchent l'opportunité SEO d'avoir des mots-clés dans l'URL.</li>
<li><strong>Changer les slugs après publication</strong> &mdash; Une fois qu'une URL est indexée par Google, changer le slug crée une erreur 404 sauf si vous configurez une redirection. Ne changez les slugs qu'en cas de réelle nécessité.</li>
<li><strong>Bourrage de mots-clés</strong> &mdash; Entasser tous les mots-clés possibles dans un slug paraît spammy et peut nuire plus qu'aider.</li>
<li><strong>Utiliser des tirets bas</strong> &mdash; Google recommande explicitement les traits d'union plutôt que les tirets bas. Le <a href="%KEBAB%">convertisseur kebab case</a> garantit le bon format.</li>
</ol>
<h2>Les slugs d'URL selon les plateformes</h2>
<p>La plupart des systèmes de gestion de contenu génèrent les slugs automatiquement :</p>
<ul>
<li><strong>WordPress</strong> crée des slugs à partir du titre de l'article, mais permet de les modifier</li>
<li><strong>Shopify</strong> génère les slugs de produit à partir du nom du produit</li>
<li><strong>Ghost</strong> et <strong>Hugo</strong> utilisent le titre comme slug par défaut</li>
<li><strong>Next.js</strong> et <strong>Gatsby</strong> utilisent les noms de fichiers ou un routage programmatique</li>
</ul>
<p>Pour des applications sur mesure, vous pouvez utiliser notre <a href="%TEXT%">convertisseur de texte en slug</a> pour générer des slugs compatibles avec n'importe quelle plateforme.</p>
<h2>Résumé</h2>
<p>Les slugs d'URL sont une partie petite mais importante du SEO et du développement web. Ils aident les moteurs de recherche à comprendre votre contenu, améliorent le taux de clic et rendent les URLs plus conviviales. Les meilleurs slugs sont courts, descriptifs, en minuscules et utilisent des traits d'union comme séparateurs.</p>
`,
  }),
};
