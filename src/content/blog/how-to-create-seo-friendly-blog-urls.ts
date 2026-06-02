import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-create-seo-friendly-blog-urls", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Create SEO-Friendly Blog URLs: A Step-by-Step Guide",
    description: "Learn how to craft blog post URLs that rank. Covers keyword placement, slug formatting, and platform-specific tips.",
    body: `<p>Your blog URL is one of the first things both Google and readers see. A well-crafted URL improves click-through rates and helps search engines understand your content.</p>
<h2>Step-by-Step Process</h2>
<ol>
<li><strong>Start with your target keyword:</strong> If targeting "python naming conventions," your slug should be <code>python-naming-conventions</code></li>
<li><strong>Remove stop words:</strong> "a", "the", "is", "to", "and" — unless they're part of the keyword</li>
<li><strong>Keep it under 5 words:</strong> <code>seo-url-best-practices</code> not <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Use hyphens:</strong> Never underscores, spaces, or camelCase in URLs</li>
<li><strong>All lowercase:</strong> Avoid <code>/Blog/My-Post</code> — use <code>/blog/my-post</code></li>
<li><strong>No dates:</strong> <code>/blog/seo-tips</code> not <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Before and After</h2>
<table><thead><tr><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Generate Blog Slugs</h2>
<p>Use our <a href="%BLOG%">blog slug generator</a>, <a href="%WP%">WordPress slug generator</a>, or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "SEOに強いブログURLの作り方：ステップバイステップガイド",
    description: "検索上位に表示されるブログ記事URLの作成方法を解説。キーワード配置、スラッグのフォーマット、プラットフォーム別のヒントを網羅します。",
    body: `<p>ブログのURLは、Googleと読者が最初に目にするものの一つです。よく練られたURLはクリック率を向上させ、検索エンジンがコンテンツを理解するのを助けます。</p>
<h2>ステップバイステップのプロセス</h2>
<ol>
<li><strong>ターゲットキーワードから始める：</strong>「python naming conventions」を狙うなら、スラッグは<code>python-naming-conventions</code>にすべき</li>
<li><strong>ストップワードを除去：</strong>「a」「the」「is」「to」「and」—— キーワードの一部でない限り</li>
<li><strong>5語以内に：</strong><code>seo-url-best-practices</code>であって<code>the-best-practices-for-seo-friendly-url-optimization</code>ではない</li>
<li><strong>ハイフンを使用：</strong>URLにアンダースコア、スペース、camelCaseは使わない</li>
<li><strong>すべて小文字：</strong><code>/Blog/My-Post</code>は避け、<code>/blog/my-post</code>を使う</li>
<li><strong>日付なし：</strong><code>/blog/seo-tips</code>であって<code>/blog/2026/05/seo-tips</code>ではない</li>
</ol>
<h2>ビフォー＆アフター</h2>
<table><thead><tr><th>変更前</th><th>変更後</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>ブログスラッグを生成</h2>
<p><a href="%BLOG%">ブログスラッグジェネレーター</a>、<a href="%WP%">WordPressスラッグジェネレーター</a>、または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "SEO-freundliche Blog-URLs erstellen: Schritt-für-Schritt-Anleitung",
    description: "Erfahren Sie, wie Sie Blog-Post-URLs gestalten, die ranken. Keyword-Platzierung, Slug-Formatierung und plattformspezifische Tipps.",
    body: `<p>Ihre Blog-URL ist eines der ersten Dinge, die sowohl Google als auch Leser sehen. Eine gut gestaltete URL verbessert die Klickrate und hilft Suchmaschinen, Ihren Inhalt zu verstehen.</p>
<h2>Schritt-für-Schritt-Prozess</h2>
<ol>
<li><strong>Beginnen Sie mit Ihrem Ziel-Keyword:</strong> Wenn Sie auf „python naming conventions" abzielen, sollte Ihr Slug <code>python-naming-conventions</code> lauten</li>
<li><strong>Stoppwörter entfernen:</strong> „a", „the", „is", „to", „and" — es sei denn, sie sind Teil des Keywords</li>
<li><strong>Unter 5 Wörtern halten:</strong> <code>seo-url-best-practices</code> nicht <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Bindestriche verwenden:</strong> Niemals Unterstriche, Leerzeichen oder camelCase in URLs</li>
<li><strong>Alles kleingeschrieben:</strong> Vermeiden Sie <code>/Blog/My-Post</code> — verwenden Sie <code>/blog/my-post</code></li>
<li><strong>Keine Daten:</strong> <code>/blog/seo-tips</code> nicht <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Vorher und Nachher</h2>
<table><thead><tr><th>Vorher</th><th>Nachher</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Blog-Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%BLOG%">Blog-Slug-Generator</a>, <a href="%WP%">WordPress-Slug-Generator</a> oder <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo crear URLs de blog amigables para SEO: Guía paso a paso",
    description: "Aprende a crear URLs de artículos de blog que posicionen. Cubre ubicación de palabras clave, formato de slug y consejos por plataforma.",
    body: `<p>La URL de tu blog es una de las primeras cosas que ven tanto Google como los lectores. Una URL bien diseñada mejora la tasa de clics y ayuda a los motores de búsqueda a entender tu contenido.</p>
<h2>Proceso paso a paso</h2>
<ol>
<li><strong>Empieza con tu palabra clave objetivo:</strong> Si apuntas a "python naming conventions", tu slug debería ser <code>python-naming-conventions</code></li>
<li><strong>Elimina las stop words:</strong> "a", "the", "is", "to", "and" — a menos que formen parte de la palabra clave</li>
<li><strong>Menos de 5 palabras:</strong> <code>seo-url-best-practices</code> no <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Usa guiones:</strong> Nunca guiones bajos, espacios o camelCase en URLs</li>
<li><strong>Todo en minúsculas:</strong> Evita <code>/Blog/My-Post</code> — usa <code>/blog/my-post</code></li>
<li><strong>Sin fechas:</strong> <code>/blog/seo-tips</code> no <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Antes y después</h2>
<table><thead><tr><th>Antes</th><th>Después</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Genera slugs de blog</h2>
<p>Usa nuestro <a href="%BLOG%">generador de slugs de blog</a>, <a href="%WP%">generador de slugs WordPress</a> o <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como criar URLs de blog amigáveis para SEO: Guia passo a passo",
    description: "Aprenda a criar URLs de posts de blog que ranqueiam. Cobre posicionamento de palavras-chave, formatação de slug e dicas por plataforma.",
    body: `<p>A URL do seu blog é uma das primeiras coisas que tanto o Google quanto os leitores veem. Uma URL bem elaborada melhora a taxa de cliques e ajuda os mecanismos de busca a entender seu conteúdo.</p>
<h2>Processo passo a passo</h2>
<ol>
<li><strong>Comece com sua palavra-chave alvo:</strong> Se você visa "python naming conventions", seu slug deve ser <code>python-naming-conventions</code></li>
<li><strong>Remova as stop words:</strong> "a", "the", "is", "to", "and" — a menos que façam parte da palavra-chave</li>
<li><strong>Menos de 5 palavras:</strong> <code>seo-url-best-practices</code> não <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Use hífens:</strong> Nunca underscores, espaços ou camelCase em URLs</li>
<li><strong>Tudo em minúsculas:</strong> Evite <code>/Blog/My-Post</code> — use <code>/blog/my-post</code></li>
<li><strong>Sem datas:</strong> <code>/blog/seo-tips</code> não <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Antes e depois</h2>
<table><thead><tr><th>Antes</th><th>Depois</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Gere slugs de blog</h2>
<p>Use nosso <a href="%BLOG%">gerador de slugs de blog</a>, <a href="%WP%">gerador de slugs WordPress</a> ou <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment créer des URLs de blog SEO-friendly : guide étape par étape",
    description: "Apprenez à créer des URLs d'articles de blog qui se positionnent bien. Placement de mots-clés, formatage de slug et conseils par plateforme.",
    body: `<p>L'URL de votre blog est l'une des premières choses que Google et les lecteurs voient. Une URL bien conçue améliore le taux de clics et aide les moteurs de recherche à comprendre votre contenu.</p>
<h2>Processus étape par étape</h2>
<ol>
<li><strong>Commencez par votre mot-clé cible :</strong> Si vous ciblez « python naming conventions », votre slug devrait être <code>python-naming-conventions</code></li>
<li><strong>Supprimez les mots vides :</strong> « a », « the », « is », « to », « and » — sauf s'ils font partie du mot-clé</li>
<li><strong>Moins de 5 mots :</strong> <code>seo-url-best-practices</code> pas <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Utilisez des tirets :</strong> Jamais d'underscores, d'espaces ou de camelCase dans les URLs</li>
<li><strong>Tout en minuscules :</strong> Évitez <code>/Blog/My-Post</code> — utilisez <code>/blog/my-post</code></li>
<li><strong>Pas de dates :</strong> <code>/blog/seo-tips</code> pas <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Avant et après</h2>
<table><thead><tr><th>Avant</th><th>Après</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Générez des slugs de blog</h2>
<p>Utilisez notre <a href="%BLOG%">générateur de slugs de blog</a>, <a href="%WP%">générateur de slugs WordPress</a> ou <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
