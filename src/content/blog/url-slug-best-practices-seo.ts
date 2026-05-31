import type { Locale } from "@/i18n/routing";
import type { Article } from "@/lib/blog";

export const meta = {
  slug: "url-slug-best-practices-seo",
  date: "2026-05-20",
  readTime: 6,
};

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);

const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HOME%", p(l, "/"))
    .replaceAll("%SLUGGEN%", p(l, "/url-slug-generator"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "URL Slug Best Practices for SEO in 2026",
    description:
      "Master URL slug optimization with proven SEO best practices. Learn the right length, format, and keyword strategy for your slugs.",
    body: `
<p>URL slugs are one of the few on-page SEO elements you have full control over. In 2026, with Google&rsquo;s AI Overview answering more informational queries directly, every technical SEO advantage matters. This guide covers the proven best practices for URL slugs that still move the needle.</p>
<h2>1. Keep Slugs Under 60 Characters</h2>
<p>Google displays up to about 512 pixels of a URL in search results, which translates to roughly 60 characters. Anything longer gets truncated with an ellipsis, reducing readability and click-through rates.</p>
<p>Short slugs are also easier to share in messages, emails, and social media. Compare:</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; too long, gets cut off</li>
<li><code>example.com/url-slug-guide</code> &mdash; concise, scannable, fits everywhere</li>
</ul>
<p>Use our <a href="%SLUGGEN%">URL Slug Generator</a> with the max-length option to enforce a character limit automatically.</p>
<h2>2. Use Hyphens, Never Underscores</h2>
<p>Google treats hyphens as word separators but treats underscores as word joiners. The slug <code>url-slug-tips</code> is read as three words, while <code>url_slug_tips</code> is read as a single token.</p>
<p>Google&rsquo;s own documentation explicitly recommends hyphens. If you have existing content with underscores, consider migrating to hyphens with proper 301 redirects. The <a href="%KEBAB%">Kebab Case Converter</a> can help you convert text to the correct hyphenated format.</p>
<h2>3. Include Your Target Keyword</h2>
<p>Place your primary keyword in the slug. If your page targets &ldquo;react hooks tutorial&rdquo;, the slug should be <code>react-hooks-tutorial</code>, not <code>my-latest-programming-post</code>.</p>
<p>Rules of thumb:</p>
<ul>
<li>Put the keyword near the beginning of the slug when possible</li>
<li>Use one primary keyword, not multiple overlapping ones</li>
<li>Match the slug to user intent, not just keyword volume</li>
</ul>
<h2>4. Remove Stop Words</h2>
<p>Stop words like &ldquo;a&rdquo;, &ldquo;an&rdquo;, &ldquo;the&rdquo;, &ldquo;is&rdquo;, &ldquo;in&rdquo;, &ldquo;of&rdquo;, &ldquo;to&rdquo;, and &ldquo;for&rdquo; add length without adding SEO value. Remove them unless they change the meaning:</p>
<ul>
<li>&ldquo;How to Build a REST API in Node.js&rdquo; &rarr; <code>build-rest-api-nodejs</code></li>
<li>&ldquo;The Best Tools for Web Development&rdquo; &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. Use Lowercase Only</h2>
<p>URLs are case-sensitive on most web servers. The URLs <code>example.com/My-Page</code> and <code>example.com/my-page</code> can serve different content, which creates duplicate content issues. Always use lowercase slugs and set up server-side redirects for any uppercase variations.</p>
<h2>6. Avoid Dates in Slugs</h2>
<p>Including the year or date in a slug (e.g., <code>seo-tips-2026</code>) creates two problems:</p>
<ol>
<li>The content looks outdated the moment the year changes, even if you update the content</li>
<li>Changing the slug to update the year breaks existing links and requires redirects</li>
</ol>
<p>Keep dates in the page title if needed, but leave them out of the slug. Use <code>seo-tips</code> instead and update the content regularly.</p>
<h2>7. Never Change Published Slugs Without Redirects</h2>
<p>Once a page is indexed, its URL is its identity. Changing the slug without a 301 redirect means:</p>
<ul>
<li>All existing backlinks point to a 404 page</li>
<li>Google loses the page&rsquo;s ranking history</li>
<li>Users who bookmarked the page can&rsquo;t find it</li>
</ul>
<p>If you must change a slug, always set up a 301 redirect from the old URL to the new one.</p>
<h2>8. Use Flat URL Structures</h2>
<p>Deep nesting adds no SEO value and makes URLs harder to read:</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; too deep</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; flat and clear</li>
</ul>
<p>Google can crawl deep URLs, but flatter structures are easier for users to understand and type manually.</p>
<h2>Quick Reference Checklist</h2>
<ul>
<li>Under 60 characters</li>
<li>Lowercase letters, numbers, and hyphens only</li>
<li>Contains the target keyword</li>
<li>No stop words, dates, or special characters</li>
<li>Hyphens as separators (not underscores)</li>
<li>Descriptive and human-readable</li>
<li>Won&rsquo;t need to change after publishing</li>
</ul>
<p>Use the <a href="%HOME%">Slug Generator</a> to apply all these rules automatically. Paste any title or text and get an optimized slug in seconds.</p>
`,
  }),

  ja: build("ja", {
    title: "2026年のSEOに効くURLスラッグのベストプラクティス",
    description:
      "実証済みのSEOベストプラクティスでURLスラッグを最適化。適切な長さ、形式、キーワード戦略を解説します。",
    body: `
<p>URLスラッグは、自分で完全にコントロールできる数少ないオンページSEO要素の一つです。2026年、GoogleのAI Overviewが情報系クエリに直接答えるようになった今、技術的SEOの優位性はどれも重要です。本ガイドでは、今なお効果のあるURLスラッグのベストプラクティスを解説します。</p>
<h2>1. スラッグは60文字以内に</h2>
<p>Googleは検索結果でURLを最大約512ピクセルまで表示します。これはおおよそ60文字に相当します。それより長いと末尾が省略記号で切られ、読みやすさとクリック率が下がります。</p>
<p>短いスラッグはメッセージ、メール、SNSでも共有しやすくなります。比べてみましょう。</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; 長すぎて途中で切れる</li>
<li><code>example.com/url-slug-guide</code> &mdash; 簡潔で読みやすく、どこにでも収まる</li>
</ul>
<p>当サイトの<a href="%SLUGGEN%">URLスラッグジェネレーター</a>の最大文字数オプションを使えば、文字数制限を自動で適用できます。</p>
<h2>2. ハイフンを使い、アンダースコアは使わない</h2>
<p>Googleはハイフンを単語の区切りとして扱いますが、アンダースコアは単語の結合として扱います。<code>url-slug-tips</code> は3語として読まれ、<code>url_slug_tips</code> は1つのトークンとして読まれます。</p>
<p>Google自身のドキュメントもハイフンを明確に推奨しています。アンダースコアを使った既存コンテンツがある場合は、適切な301リダイレクトを設定してハイフンへ移行することを検討しましょう。<a href="%KEBAB%">ケバブケース変換ツール</a>を使えば、正しいハイフン区切りの形式に変換できます。</p>
<h2>3. 狙うキーワードを含める</h2>
<p>主要キーワードをスラッグに入れましょう。ページが「react hooks tutorial」を狙うなら、スラッグは <code>my-latest-programming-post</code> ではなく <code>react-hooks-tutorial</code> にすべきです。</p>
<p>目安は次のとおりです。</p>
<ul>
<li>可能ならキーワードはスラッグの先頭付近に置く</li>
<li>主要キーワードは1つに絞り、重複させない</li>
<li>検索ボリュームだけでなくユーザーの意図に合わせる</li>
</ul>
<h2>4. ストップワードを取り除く</h2>
<p>「a」「an」「the」「is」「in」「of」「to」「for」などのストップワードは、長さを増やすだけでSEO価値を加えません。意味が変わらない限り取り除きましょう。</p>
<ul>
<li>「How to Build a REST API in Node.js」 &rarr; <code>build-rest-api-nodejs</code></li>
<li>「The Best Tools for Web Development」 &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. 小文字だけを使う</h2>
<p>多くのウェブサーバーでURLは大文字小文字を区別します。<code>example.com/My-Page</code> と <code>example.com/my-page</code> は別のコンテンツを返すことがあり、重複コンテンツの問題を生みます。常に小文字のスラッグを使い、大文字を含むバリエーションにはサーバー側のリダイレクトを設定しましょう。</p>
<h2>6. スラッグに日付を入れない</h2>
<p>スラッグに年や日付を入れる（例: <code>seo-tips-2026</code>）と、2つの問題が生じます。</p>
<ol>
<li>内容を更新しても、年が変わった瞬間に古く見える</li>
<li>年を更新するためにスラッグを変えると、既存リンクが壊れてリダイレクトが必要になる</li>
</ol>
<p>必要なら日付はページタイトルに残し、スラッグからは外しましょう。代わりに <code>seo-tips</code> とし、内容を定期的に更新します。</p>
<h2>7. 公開済みスラッグはリダイレクトなしで変えない</h2>
<p>ページがインデックスされると、そのURLはそのページの identity になります。301リダイレクトなしでスラッグを変えると、次のことが起きます。</p>
<ul>
<li>既存の被リンクがすべて404ページを指す</li>
<li>そのページのランキング履歴をGoogleが失う</li>
<li>ブックマークしたユーザーがページを見つけられない</li>
</ul>
<p>どうしてもスラッグを変える場合は、必ず旧URLから新URLへ301リダイレクトを設定しましょう。</p>
<h2>8. フラットなURL構造を使う</h2>
<p>深い階層はSEO価値を加えず、URLを読みにくくします。</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; 深すぎる</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; フラットで分かりやすい</li>
</ul>
<p>Googleは深いURLもクロールできますが、フラットな構造のほうがユーザーにとって理解しやすく、手入力もしやすくなります。</p>
<h2>クイック・チェックリスト</h2>
<ul>
<li>60文字以内</li>
<li>小文字・数字・ハイフンのみ</li>
<li>狙うキーワードを含む</li>
<li>ストップワード・日付・特殊文字なし</li>
<li>区切りはハイフン（アンダースコアではない）</li>
<li>説明的で人間が読める</li>
<li>公開後に変更する必要がない</li>
</ul>
<p><a href="%HOME%">スラッグジェネレーター</a>を使えば、これらのルールをすべて自動で適用できます。タイトルやテキストを貼り付けるだけで、数秒で最適化されたスラッグが得られます。</p>
`,
  }),

  de: build("de", {
    title: "URL-Slug Best Practices für SEO im Jahr 2026",
    description:
      "Optimieren Sie URL-Slugs mit bewährten SEO-Best-Practices. Lernen Sie die richtige Länge, das Format und die Keyword-Strategie für Ihre Slugs.",
    body: `
<p>URL-Slugs gehören zu den wenigen On-Page-SEO-Elementen, über die Sie volle Kontrolle haben. 2026, da Googles AI Overview immer mehr informationelle Suchanfragen direkt beantwortet, zählt jeder technische SEO-Vorteil. Dieser Leitfaden behandelt die bewährten Best Practices für URL-Slugs, die weiterhin einen Unterschied machen.</p>
<h2>1. Slugs unter 60 Zeichen halten</h2>
<p>Google zeigt in den Suchergebnissen eine URL bis zu etwa 512 Pixel an, was ungefähr 60 Zeichen entspricht. Längeres wird mit Auslassungspunkten abgeschnitten, was Lesbarkeit und Klickrate senkt.</p>
<p>Kurze Slugs lassen sich auch leichter in Nachrichten, E-Mails und sozialen Medien teilen. Vergleichen Sie:</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; zu lang, wird abgeschnitten</li>
<li><code>example.com/url-slug-guide</code> &mdash; prägnant, überschaubar, passt überall</li>
</ul>
<p>Nutzen Sie unseren <a href="%SLUGGEN%">URL-Slug-Generator</a> mit der Option für die maximale Länge, um ein Zeichenlimit automatisch durchzusetzen.</p>
<h2>2. Bindestriche verwenden, niemals Unterstriche</h2>
<p>Google behandelt Bindestriche als Worttrenner, Unterstriche dagegen als Wortverbinder. Der Slug <code>url-slug-tips</code> wird als drei Wörter gelesen, <code>url_slug_tips</code> hingegen als ein einziges Token.</p>
<p>Googles eigene Dokumentation empfiehlt ausdrücklich Bindestriche. Wenn Sie bestehende Inhalte mit Unterstrichen haben, erwägen Sie eine Migration zu Bindestrichen mit korrekten 301-Weiterleitungen. Der <a href="%KEBAB%">Kebab-Case-Konverter</a> hilft Ihnen, Text in das richtige Bindestrich-Format zu bringen.</p>
<h2>3. Ihr Ziel-Keyword einbauen</h2>
<p>Platzieren Sie Ihr Haupt-Keyword im Slug. Wenn Ihre Seite auf &bdquo;react hooks tutorial&ldquo; abzielt, sollte der Slug <code>react-hooks-tutorial</code> lauten, nicht <code>my-latest-programming-post</code>.</p>
<p>Faustregeln:</p>
<ul>
<li>Setzen Sie das Keyword nach Möglichkeit an den Anfang des Slugs</li>
<li>Verwenden Sie ein Haupt-Keyword, nicht mehrere überlappende</li>
<li>Richten Sie den Slug an der Nutzerabsicht aus, nicht nur am Suchvolumen</li>
</ul>
<h2>4. Stoppwörter entfernen</h2>
<p>Stoppwörter wie &bdquo;a&ldquo;, &bdquo;an&ldquo;, &bdquo;the&ldquo;, &bdquo;is&ldquo;, &bdquo;in&ldquo;, &bdquo;of&ldquo;, &bdquo;to&ldquo; und &bdquo;for&ldquo; verlängern den Slug ohne SEO-Mehrwert. Entfernen Sie sie, sofern sie nicht die Bedeutung ändern:</p>
<ul>
<li>&bdquo;How to Build a REST API in Node.js&ldquo; &rarr; <code>build-rest-api-nodejs</code></li>
<li>&bdquo;The Best Tools for Web Development&ldquo; &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. Nur Kleinbuchstaben verwenden</h2>
<p>URLs sind auf den meisten Webservern case-sensitiv. Die URLs <code>example.com/My-Page</code> und <code>example.com/my-page</code> können unterschiedliche Inhalte ausliefern, was zu doppeltem Inhalt führt. Verwenden Sie stets kleingeschriebene Slugs und richten Sie serverseitige Weiterleitungen für Großschreibvarianten ein.</p>
<h2>6. Daten in Slugs vermeiden</h2>
<p>Das Jahr oder Datum im Slug (z.&nbsp;B. <code>seo-tips-2026</code>) führt zu zwei Problemen:</p>
<ol>
<li>Der Inhalt wirkt veraltet, sobald sich das Jahr ändert, selbst wenn Sie ihn aktualisieren</li>
<li>Das Ändern des Slugs zur Aktualisierung des Jahres bricht bestehende Links und erfordert Weiterleitungen</li>
</ol>
<p>Lassen Sie Daten bei Bedarf im Seitentitel, aber nicht im Slug. Verwenden Sie stattdessen <code>seo-tips</code> und aktualisieren Sie den Inhalt regelmäßig.</p>
<h2>7. Veröffentlichte Slugs nie ohne Weiterleitung ändern</h2>
<p>Sobald eine Seite indexiert ist, ist ihre URL ihre Identität. Den Slug ohne 301-Weiterleitung zu ändern bedeutet:</p>
<ul>
<li>Alle bestehenden Backlinks zeigen auf eine 404-Seite</li>
<li>Google verliert die Ranking-Historie der Seite</li>
<li>Nutzer, die die Seite gespeichert haben, finden sie nicht mehr</li>
</ul>
<p>Wenn Sie einen Slug ändern müssen, richten Sie immer eine 301-Weiterleitung von der alten zur neuen URL ein.</p>
<h2>8. Flache URL-Strukturen verwenden</h2>
<p>Tiefe Verschachtelung bringt keinen SEO-Mehrwert und macht URLs schwerer lesbar:</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; zu tief</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; flach und klar</li>
</ul>
<p>Google kann tiefe URLs crawlen, aber flachere Strukturen sind für Nutzer leichter zu verstehen und manuell einzugeben.</p>
<h2>Schnelle Checkliste</h2>
<ul>
<li>Unter 60 Zeichen</li>
<li>Nur Kleinbuchstaben, Zahlen und Bindestriche</li>
<li>Enthält das Ziel-Keyword</li>
<li>Keine Stoppwörter, Daten oder Sonderzeichen</li>
<li>Bindestriche als Trennzeichen (keine Unterstriche)</li>
<li>Beschreibend und menschenlesbar</li>
<li>Muss nach der Veröffentlichung nicht geändert werden</li>
</ul>
<p>Nutzen Sie den <a href="%HOME%">Slug-Generator</a>, um all diese Regeln automatisch anzuwenden. Fügen Sie einen beliebigen Titel oder Text ein und erhalten Sie in Sekunden einen optimierten Slug.</p>
`,
  }),

  es: build("es", {
    title: "Buenas prácticas de slugs de URL para el SEO en 2026",
    description:
      "Optimiza tus slugs de URL con buenas prácticas de SEO comprobadas. Aprende la longitud, el formato y la estrategia de palabras clave adecuados.",
    body: `
<p>Los slugs de URL son uno de los pocos elementos de SEO on-page sobre los que tienes control total. En 2026, con la AI Overview de Google respondiendo más consultas informativas de forma directa, cada ventaja de SEO técnico cuenta. Esta guía cubre las buenas prácticas comprobadas para los slugs de URL que siguen marcando la diferencia.</p>
<h2>1. Mantén los slugs por debajo de 60 caracteres</h2>
<p>Google muestra hasta unos 512 píxeles de una URL en los resultados de búsqueda, lo que equivale a unos 60 caracteres. Lo que exceda se trunca con puntos suspensivos, reduciendo la legibilidad y la tasa de clics.</p>
<p>Los slugs cortos también son más fáciles de compartir en mensajes, correos y redes sociales. Compara:</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; demasiado largo, se corta</li>
<li><code>example.com/url-slug-guide</code> &mdash; conciso, fácil de leer, encaja en todas partes</li>
</ul>
<p>Usa nuestro <a href="%SLUGGEN%">generador de slugs de URL</a> con la opción de longitud máxima para aplicar un límite de caracteres automáticamente.</p>
<h2>2. Usa guiones, nunca guiones bajos</h2>
<p>Google trata los guiones como separadores de palabras, pero los guiones bajos como unificadores. El slug <code>url-slug-tips</code> se lee como tres palabras, mientras que <code>url_slug_tips</code> se lee como un solo token.</p>
<p>La propia documentación de Google recomienda explícitamente los guiones. Si tienes contenido con guiones bajos, plantéate migrar a guiones con redirecciones 301 adecuadas. El <a href="%KEBAB%">conversor a kebab case</a> te ayuda a convertir el texto al formato correcto con guiones.</p>
<h2>3. Incluye tu palabra clave objetivo</h2>
<p>Coloca tu palabra clave principal en el slug. Si tu página apunta a &laquo;react hooks tutorial&raquo;, el slug debería ser <code>react-hooks-tutorial</code>, no <code>my-latest-programming-post</code>.</p>
<p>Reglas generales:</p>
<ul>
<li>Coloca la palabra clave cerca del principio del slug cuando sea posible</li>
<li>Usa una sola palabra clave principal, no varias solapadas</li>
<li>Ajusta el slug a la intención del usuario, no solo al volumen de búsqueda</li>
</ul>
<h2>4. Elimina las palabras vacías</h2>
<p>Las palabras vacías como &laquo;a&raquo;, &laquo;an&raquo;, &laquo;the&raquo;, &laquo;is&raquo;, &laquo;in&raquo;, &laquo;of&raquo;, &laquo;to&raquo; y &laquo;for&raquo; añaden longitud sin valor SEO. Elimínalas salvo que cambien el significado:</p>
<ul>
<li>&laquo;How to Build a REST API in Node.js&raquo; &rarr; <code>build-rest-api-nodejs</code></li>
<li>&laquo;The Best Tools for Web Development&raquo; &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. Usa solo minúsculas</h2>
<p>Las URLs distinguen mayúsculas y minúsculas en la mayoría de los servidores. Las URLs <code>example.com/My-Page</code> y <code>example.com/my-page</code> pueden servir contenido distinto, lo que crea contenido duplicado. Usa siempre slugs en minúsculas y configura redirecciones del lado del servidor para cualquier variación en mayúsculas.</p>
<h2>6. Evita las fechas en los slugs</h2>
<p>Incluir el año o la fecha en un slug (p.&nbsp;ej. <code>seo-tips-2026</code>) crea dos problemas:</p>
<ol>
<li>El contenido parece desactualizado en cuanto cambia el año, aunque lo actualices</li>
<li>Cambiar el slug para actualizar el año rompe los enlaces existentes y exige redirecciones</li>
</ol>
<p>Si hace falta, deja las fechas en el título de la página, pero fuera del slug. Usa <code>seo-tips</code> y actualiza el contenido con regularidad.</p>
<h2>7. Nunca cambies slugs publicados sin redirecciones</h2>
<p>Una vez indexada una página, su URL es su identidad. Cambiar el slug sin una redirección 301 implica:</p>
<ul>
<li>Todos los backlinks existentes apuntan a una página 404</li>
<li>Google pierde el historial de posicionamiento de la página</li>
<li>Los usuarios que la guardaron no pueden encontrarla</li>
</ul>
<p>Si debes cambiar un slug, configura siempre una redirección 301 de la URL antigua a la nueva.</p>
<h2>8. Usa estructuras de URL planas</h2>
<p>El anidamiento profundo no aporta valor SEO y dificulta la lectura de las URLs:</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; demasiado profundo</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; plano y claro</li>
</ul>
<p>Google puede rastrear URLs profundas, pero las estructuras planas son más fáciles de entender y escribir a mano para los usuarios.</p>
<h2>Lista de comprobación rápida</h2>
<ul>
<li>Menos de 60 caracteres</li>
<li>Solo minúsculas, números y guiones</li>
<li>Contiene la palabra clave objetivo</li>
<li>Sin palabras vacías, fechas ni caracteres especiales</li>
<li>Guiones como separadores (no guiones bajos)</li>
<li>Descriptivo y legible para humanos</li>
<li>No necesitará cambiarse tras publicarse</li>
</ul>
<p>Usa el <a href="%HOME%">generador de slugs</a> para aplicar todas estas reglas automáticamente. Pega cualquier título o texto y obtén un slug optimizado en segundos.</p>
`,
  }),

  pt: build("pt", {
    title: "Boas práticas de slugs de URL para SEO em 2026",
    description:
      "Otimize seus slugs de URL com boas práticas de SEO comprovadas. Aprenda o comprimento, o formato e a estratégia de palavras-chave certos.",
    body: `
<p>Os slugs de URL são um dos poucos elementos de SEO on-page sobre os quais você tem controle total. Em 2026, com a AI Overview do Google respondendo mais consultas informativas diretamente, cada vantagem de SEO técnico conta. Este guia cobre as boas práticas comprovadas para slugs de URL que ainda fazem diferença.</p>
<h2>1. Mantenha os slugs abaixo de 60 caracteres</h2>
<p>O Google exibe até cerca de 512 pixels de uma URL nos resultados de busca, o que equivale a aproximadamente 60 caracteres. O que passa disso é truncado com reticências, reduzindo a legibilidade e a taxa de cliques.</p>
<p>Slugs curtos também são mais fáceis de compartilhar em mensagens, e-mails e redes sociais. Compare:</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; longo demais, é cortado</li>
<li><code>example.com/url-slug-guide</code> &mdash; conciso, fácil de ler, cabe em qualquer lugar</li>
</ul>
<p>Use nosso <a href="%SLUGGEN%">gerador de slugs de URL</a> com a opção de comprimento máximo para aplicar um limite de caracteres automaticamente.</p>
<h2>2. Use hífens, nunca sublinhados</h2>
<p>O Google trata hífens como separadores de palavras, mas sublinhados como unificadores. O slug <code>url-slug-tips</code> é lido como três palavras, enquanto <code>url_slug_tips</code> é lido como um único token.</p>
<p>A própria documentação do Google recomenda explicitamente hífens. Se você tem conteúdo com sublinhados, considere migrar para hífens com redirecionamentos 301 adequados. O <a href="%KEBAB%">conversor para kebab case</a> ajuda a converter o texto para o formato correto com hífens.</p>
<h2>3. Inclua sua palavra-chave alvo</h2>
<p>Coloque sua palavra-chave principal no slug. Se sua página mira &laquo;react hooks tutorial&raquo;, o slug deve ser <code>react-hooks-tutorial</code>, e não <code>my-latest-programming-post</code>.</p>
<p>Regras gerais:</p>
<ul>
<li>Coloque a palavra-chave perto do início do slug quando possível</li>
<li>Use uma palavra-chave principal, não várias sobrepostas</li>
<li>Ajuste o slug à intenção do usuário, não apenas ao volume de busca</li>
</ul>
<h2>4. Remova as stop words</h2>
<p>Stop words como &laquo;a&raquo;, &laquo;an&raquo;, &laquo;the&raquo;, &laquo;is&raquo;, &laquo;in&raquo;, &laquo;of&raquo;, &laquo;to&raquo; e &laquo;for&raquo; aumentam o tamanho sem valor de SEO. Remova-as a menos que mudem o significado:</p>
<ul>
<li>&laquo;How to Build a REST API in Node.js&raquo; &rarr; <code>build-rest-api-nodejs</code></li>
<li>&laquo;The Best Tools for Web Development&raquo; &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. Use apenas minúsculas</h2>
<p>As URLs diferenciam maiúsculas de minúsculas na maioria dos servidores. As URLs <code>example.com/My-Page</code> e <code>example.com/my-page</code> podem servir conteúdo diferente, criando conteúdo duplicado. Use sempre slugs em minúsculas e configure redirecionamentos no servidor para quaisquer variações com maiúsculas.</p>
<h2>6. Evite datas nos slugs</h2>
<p>Incluir o ano ou a data em um slug (ex.: <code>seo-tips-2026</code>) cria dois problemas:</p>
<ol>
<li>O conteúdo parece desatualizado assim que o ano muda, mesmo que você o atualize</li>
<li>Mudar o slug para atualizar o ano quebra os links existentes e exige redirecionamentos</li>
</ol>
<p>Se necessário, mantenha as datas no título da página, mas fora do slug. Use <code>seo-tips</code> e atualize o conteúdo regularmente.</p>
<h2>7. Nunca mude slugs publicados sem redirecionamentos</h2>
<p>Depois que uma página é indexada, sua URL é sua identidade. Mudar o slug sem um redirecionamento 301 significa:</p>
<ul>
<li>Todos os backlinks existentes apontam para uma página 404</li>
<li>O Google perde o histórico de classificação da página</li>
<li>Usuários que salvaram a página não conseguem encontrá-la</li>
</ul>
<p>Se você precisar mudar um slug, configure sempre um redirecionamento 301 da URL antiga para a nova.</p>
<h2>8. Use estruturas de URL planas</h2>
<p>O aninhamento profundo não agrega valor de SEO e dificulta a leitura das URLs:</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; profundo demais</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; plano e claro</li>
</ul>
<p>O Google consegue rastrear URLs profundas, mas estruturas planas são mais fáceis de entender e digitar manualmente.</p>
<h2>Checklist rápido</h2>
<ul>
<li>Abaixo de 60 caracteres</li>
<li>Apenas minúsculas, números e hífens</li>
<li>Contém a palavra-chave alvo</li>
<li>Sem stop words, datas ou caracteres especiais</li>
<li>Hífens como separadores (não sublinhados)</li>
<li>Descritivo e legível por humanos</li>
<li>Não precisará ser alterado após a publicação</li>
</ul>
<p>Use o <a href="%HOME%">gerador de slugs</a> para aplicar todas essas regras automaticamente. Cole qualquer título ou texto e obtenha um slug otimizado em segundos.</p>
`,
  }),

  fr: build("fr", {
    title: "Bonnes pratiques des slugs d'URL pour le SEO en 2026",
    description:
      "Optimisez vos slugs d'URL avec des bonnes pratiques SEO éprouvées. Apprenez la bonne longueur, le bon format et la bonne stratégie de mots-clés.",
    body: `
<p>Les slugs d'URL font partie des rares éléments de SEO on-page que vous maîtrisez totalement. En 2026, alors que l'AI Overview de Google répond directement à davantage de requêtes informationnelles, chaque avantage de SEO technique compte. Ce guide couvre les bonnes pratiques éprouvées pour les slugs d'URL qui font encore la différence.</p>
<h2>1. Gardez les slugs sous 60 caractères</h2>
<p>Google affiche jusqu'à environ 512 pixels d'une URL dans les résultats de recherche, soit à peu près 60 caractères. Tout ce qui dépasse est tronqué par des points de suspension, ce qui réduit la lisibilité et le taux de clic.</p>
<p>Les slugs courts sont aussi plus faciles à partager dans les messages, e-mails et réseaux sociaux. Comparez :</p>
<ul>
<li><code>example.com/the-complete-beginners-guide-to-url-slugs</code> &mdash; trop long, coupé</li>
<li><code>example.com/url-slug-guide</code> &mdash; concis, lisible, s'intègre partout</li>
</ul>
<p>Utilisez notre <a href="%SLUGGEN%">générateur de slugs d'URL</a> avec l'option de longueur maximale pour appliquer automatiquement une limite de caractères.</p>
<h2>2. Utilisez des traits d'union, jamais des tirets bas</h2>
<p>Google traite les traits d'union comme des séparateurs de mots, mais les tirets bas comme des liaisons. Le slug <code>url-slug-tips</code> est lu comme trois mots, tandis que <code>url_slug_tips</code> est lu comme un seul token.</p>
<p>La documentation de Google recommande explicitement les traits d'union. Si vous avez du contenu avec des tirets bas, envisagez une migration vers les traits d'union avec des redirections 301 appropriées. Le <a href="%KEBAB%">convertisseur kebab case</a> vous aide à convertir le texte au bon format avec traits d'union.</p>
<h2>3. Incluez votre mot-clé cible</h2>
<p>Placez votre mot-clé principal dans le slug. Si votre page cible &laquo;&nbsp;react hooks tutorial&nbsp;&raquo;, le slug devrait être <code>react-hooks-tutorial</code>, pas <code>my-latest-programming-post</code>.</p>
<p>Règles de base :</p>
<ul>
<li>Placez le mot-clé près du début du slug lorsque c'est possible</li>
<li>Utilisez un seul mot-clé principal, pas plusieurs qui se chevauchent</li>
<li>Alignez le slug sur l'intention de l'utilisateur, pas seulement sur le volume de recherche</li>
</ul>
<h2>4. Supprimez les mots vides</h2>
<p>Les mots vides comme &laquo;&nbsp;a&nbsp;&raquo;, &laquo;&nbsp;an&nbsp;&raquo;, &laquo;&nbsp;the&nbsp;&raquo;, &laquo;&nbsp;is&nbsp;&raquo;, &laquo;&nbsp;in&nbsp;&raquo;, &laquo;&nbsp;of&nbsp;&raquo;, &laquo;&nbsp;to&nbsp;&raquo; et &laquo;&nbsp;for&nbsp;&raquo; allongent le slug sans valeur SEO. Supprimez-les sauf s'ils changent le sens :</p>
<ul>
<li>&laquo;&nbsp;How to Build a REST API in Node.js&nbsp;&raquo; &rarr; <code>build-rest-api-nodejs</code></li>
<li>&laquo;&nbsp;The Best Tools for Web Development&nbsp;&raquo; &rarr; <code>best-web-development-tools</code></li>
</ul>
<h2>5. N'utilisez que des minuscules</h2>
<p>Les URLs sont sensibles à la casse sur la plupart des serveurs. Les URLs <code>example.com/My-Page</code> et <code>example.com/my-page</code> peuvent servir un contenu différent, ce qui crée du contenu dupliqué. Utilisez toujours des slugs en minuscules et configurez des redirections côté serveur pour toute variante en majuscules.</p>
<h2>6. Évitez les dates dans les slugs</h2>
<p>Inclure l'année ou la date dans un slug (par ex. <code>seo-tips-2026</code>) crée deux problèmes :</p>
<ol>
<li>Le contenu paraît obsolète dès que l'année change, même si vous le mettez à jour</li>
<li>Changer le slug pour mettre à jour l'année casse les liens existants et exige des redirections</li>
</ol>
<p>Au besoin, gardez les dates dans le titre de la page, mais hors du slug. Utilisez plutôt <code>seo-tips</code> et mettez le contenu à jour régulièrement.</p>
<h2>7. Ne changez jamais un slug publié sans redirection</h2>
<p>Une fois une page indexée, son URL est son identité. Changer le slug sans redirection 301 signifie :</p>
<ul>
<li>Tous les backlinks existants pointent vers une page 404</li>
<li>Google perd l'historique de classement de la page</li>
<li>Les utilisateurs qui l'ont mise en favori ne la retrouvent plus</li>
</ul>
<p>Si vous devez changer un slug, mettez toujours en place une redirection 301 de l'ancienne URL vers la nouvelle.</p>
<h2>8. Utilisez des structures d'URL plates</h2>
<p>Une imbrication profonde n'apporte aucune valeur SEO et rend les URLs plus difficiles à lire :</p>
<ul>
<li><code>example.com/blog/2026/05/category/tutorials/react-hooks</code> &mdash; trop profond</li>
<li><code>example.com/blog/react-hooks-tutorial</code> &mdash; plat et clair</li>
</ul>
<p>Google peut explorer des URLs profondes, mais les structures plates sont plus faciles à comprendre et à saisir manuellement pour les utilisateurs.</p>
<h2>Check-list rapide</h2>
<ul>
<li>Moins de 60 caractères</li>
<li>Uniquement minuscules, chiffres et traits d'union</li>
<li>Contient le mot-clé cible</li>
<li>Sans mots vides, dates ni caractères spéciaux</li>
<li>Traits d'union comme séparateurs (pas de tirets bas)</li>
<li>Descriptif et lisible par l'humain</li>
<li>N'aura pas besoin d'être changé après publication</li>
</ul>
<p>Utilisez le <a href="%HOME%">générateur de slugs</a> pour appliquer toutes ces règles automatiquement. Collez n'importe quel titre ou texte et obtenez un slug optimisé en quelques secondes.</p>
`,
  }),
};
