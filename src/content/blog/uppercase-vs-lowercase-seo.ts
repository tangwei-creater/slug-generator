import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "uppercase-vs-lowercase-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Uppercase vs Lowercase in URLs: Does Case Affect SEO?",
    description: "Learn whether URL case matters for SEO, how servers handle case sensitivity, and best practices for URL formatting.",
    body: `<p>Short answer: <strong>always use lowercase URLs</strong>. Here's why it matters.</p>
<h2>Are URLs Case-Sensitive?</h2>
<p>It depends on the server:</p>
<ul>
<li><strong>Linux servers (Apache, Nginx):</strong> Case-sensitive. <code>/About-Us</code> and <code>/about-us</code> are different pages.</li>
<li><strong>Windows servers (IIS):</strong> Case-insensitive. Both resolve to the same page.</li>
<li><strong>Most cloud platforms:</strong> Case-sensitive by default.</li>
</ul>
<h2>SEO Impact</h2>
<ul>
<li><strong>Duplicate content:</strong> If <code>/About</code> and <code>/about</code> both work, Google may index both as separate pages with duplicate content.</li>
<li><strong>Link equity split:</strong> Backlinks to different cases split your page authority.</li>
<li><strong>Crawl budget waste:</strong> Googlebot may crawl multiple case variants.</li>
</ul>
<h2>Best Practice</h2>
<p>Always use lowercase. Set up 301 redirects from uppercase variants to lowercase. In Nginx:</p>
<pre><code>if (\$uri ~ [A-Z]) {
  return 301 \$scheme://\$host\$uri_lowercase;
}</code></pre>
<h2>Generate Lowercase URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> always outputs lowercase, hyphen-separated slugs.</p>`,
  }),
  ja: build("ja", {
    title: "URLの大文字と小文字：ケースはSEOに影響するか？",
    description: "URLの大小文字がSEOに影響するか、サーバーが大小文字をどう扱うか、URLフォーマットのベストプラクティスを学びましょう。",
    body: `<p>結論：<strong>常に小文字URLを使いましょう</strong>。なぜ重要かを説明します。</p>
<h2>URLは大文字小文字を区別するか？</h2>
<p>サーバーによります：</p>
<ul>
<li><strong>Linuxサーバー（Apache、Nginx）：</strong> 大文字小文字を区別する。<code>/About-Us</code>と<code>/about-us</code>は別ページ。</li>
<li><strong>Windowsサーバー（IIS）：</strong> 大文字小文字を区別しない。どちらも同じページ。</li>
<li><strong>ほとんどのクラウドプラットフォーム：</strong> デフォルトで大文字小文字を区別。</li>
</ul>
<h2>SEOへの影響</h2>
<ul>
<li><strong>重複コンテンツ：</strong> <code>/About</code>と<code>/about</code>の両方が機能すると、Googleは両方を別ページとしてインデックスする可能性がある。</li>
<li><strong>リンクエクイティの分散：</strong> 異なるケースへの被リンクがページの権威を分散させる。</li>
<li><strong>クロールバジェットの無駄：</strong> Googlebotが複数のケースバリアントをクロールする可能性がある。</li>
</ul>
<h2>ベストプラクティス</h2>
<p>常に小文字を使い、大文字バリアントから小文字への301リダイレクトを設定しましょう。</p>
<h2>小文字URLを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>は常に小文字でハイフン区切りのスラッグを出力します。</p>`,
  }),
  de: build("de", {
    title: "Groß- vs Kleinschreibung in URLs: Beeinflusst die Schreibweise SEO?",
    description: "Erfahren Sie, ob die URL-Schreibweise für SEO wichtig ist, wie Server die Groß-/Kleinschreibung handhaben und Best Practices für URL-Formatierung.",
    body: `<p>Kurzantwort: <strong>Verwenden Sie immer URLs in Kleinbuchstaben</strong>. Hier erfahren Sie, warum das wichtig ist.</p>
<h2>Sind URLs case-sensitiv?</h2>
<p>Es kommt auf den Server an:</p>
<ul>
<li><strong>Linux-Server (Apache, Nginx):</strong> Case-sensitiv. <code>/About-Us</code> und <code>/about-us</code> sind verschiedene Seiten.</li>
<li><strong>Windows-Server (IIS):</strong> Nicht case-sensitiv. Beide führen zur gleichen Seite.</li>
<li><strong>Die meisten Cloud-Plattformen:</strong> Standardmäßig case-sensitiv.</li>
</ul>
<h2>SEO-Auswirkung</h2>
<ul>
<li><strong>Duplicate Content:</strong> Wenn <code>/About</code> und <code>/about</code> beide funktionieren, indexiert Google möglicherweise beide als separate Seiten.</li>
<li><strong>Link-Equity-Aufteilung:</strong> Backlinks zu verschiedenen Schreibweisen teilen Ihre Seitenautorität.</li>
<li><strong>Crawl-Budget-Verschwendung:</strong> Googlebot crawlt möglicherweise mehrere Schreibvarianten.</li>
</ul>
<h2>Best Practice</h2>
<p>Immer Kleinbuchstaben verwenden. 301-Redirects von Großbuchstaben-Varianten einrichten.</p>
<h2>URLs in Kleinbuchstaben generieren</h2>
<p>Unser <a href="%SLUG%">URL-Slug-Generator</a> gibt immer Slugs in Kleinbuchstaben mit Bindestrichen aus.</p>`,
  }),
  es: build("es", {
    title: "Mayúsculas vs minúsculas en URLs: ¿Afecta al SEO?",
    description: "Aprende si las mayúsculas en las URLs importan para el SEO, cómo los servidores manejan la sensibilidad de caja y las mejores prácticas.",
    body: `<p>Respuesta corta: <strong>usa siempre URLs en minúsculas</strong>. Aquí te explicamos por qué importa.</p>
<h2>¿Las URLs distinguen mayúsculas?</h2>
<p>Depende del servidor:</p>
<ul>
<li><strong>Servidores Linux (Apache, Nginx):</strong> Distinguen mayúsculas. <code>/About-Us</code> y <code>/about-us</code> son páginas diferentes.</li>
<li><strong>Servidores Windows (IIS):</strong> No distinguen. Ambas resuelven a la misma página.</li>
<li><strong>La mayoría de plataformas cloud:</strong> Distinguen mayúsculas por defecto.</li>
</ul>
<h2>Impacto SEO</h2>
<ul>
<li><strong>Contenido duplicado:</strong> Si <code>/About</code> y <code>/about</code> funcionan, Google puede indexar ambas como páginas separadas.</li>
<li><strong>División de link equity:</strong> Los backlinks a diferentes variantes dividen la autoridad de tu página.</li>
<li><strong>Desperdicio de presupuesto de rastreo:</strong> Googlebot puede rastrear múltiples variantes.</li>
</ul>
<h2>Mejor práctica</h2>
<p>Usa siempre minúsculas. Configura redirecciones 301 de las variantes en mayúsculas.</p>
<h2>Genera URLs en minúsculas</h2>
<p>Nuestro <a href="%SLUG%">generador de slugs de URL</a> siempre produce slugs en minúsculas separados por guiones.</p>`,
  }),
  pt: build("pt", {
    title: "Maiúsculas vs minúsculas em URLs: Afeta o SEO?",
    description: "Aprenda se as maiúsculas nas URLs importam para o SEO, como os servidores lidam com a sensibilidade de caixa e as melhores práticas.",
    body: `<p>Resposta curta: <strong>use sempre URLs em minúsculas</strong>. Aqui está o porquê.</p>
<h2>As URLs são sensíveis a maiúsculas?</h2>
<p>Depende do servidor:</p>
<ul>
<li><strong>Servidores Linux (Apache, Nginx):</strong> Sensíveis. <code>/About-Us</code> e <code>/about-us</code> são páginas diferentes.</li>
<li><strong>Servidores Windows (IIS):</strong> Não sensíveis. Ambos resolvem para a mesma página.</li>
<li><strong>A maioria das plataformas cloud:</strong> Sensíveis por padrão.</li>
</ul>
<h2>Impacto no SEO</h2>
<ul>
<li><strong>Conteúdo duplicado:</strong> Se <code>/About</code> e <code>/about</code> funcionam, o Google pode indexar ambas como páginas separadas.</li>
<li><strong>Divisão de link equity:</strong> Backlinks para variantes diferentes dividem a autoridade da sua página.</li>
<li><strong>Desperdício de orçamento de rastreamento:</strong> O Googlebot pode rastrear múltiplas variantes.</li>
</ul>
<h2>Melhor prática</h2>
<p>Use sempre minúsculas. Configure redirecionamentos 301 das variantes em maiúsculas.</p>
<h2>Gere URLs em minúsculas</h2>
<p>O nosso <a href="%SLUG%">gerador de slugs de URL</a> sempre produz slugs em minúsculas separados por hifens.</p>`,
  }),
  fr: build("fr", {
    title: "Majuscules vs minuscules dans les URLs : Impact sur le SEO ?",
    description: "Apprenez si la casse des URLs affecte le SEO, comment les serveurs la gèrent et les bonnes pratiques de formatage d'URL.",
    body: `<p>Réponse courte : <strong>utilisez toujours des URLs en minuscules</strong>. Voici pourquoi c'est important.</p>
<h2>Les URLs sont-elles sensibles à la casse ?</h2>
<p>Cela dépend du serveur :</p>
<ul>
<li><strong>Serveurs Linux (Apache, Nginx) :</strong> Sensibles. <code>/About-Us</code> et <code>/about-us</code> sont des pages différentes.</li>
<li><strong>Serveurs Windows (IIS) :</strong> Non sensibles. Les deux mènent à la même page.</li>
<li><strong>La plupart des plateformes cloud :</strong> Sensibles par défaut.</li>
</ul>
<h2>Impact SEO</h2>
<ul>
<li><strong>Contenu dupliqué :</strong> Si <code>/About</code> et <code>/about</code> fonctionnent, Google peut indexer les deux comme des pages séparées.</li>
<li><strong>Division du link equity :</strong> Les backlinks vers différentes variantes divisent l'autorité de votre page.</li>
<li><strong>Gaspillage du budget de crawl :</strong> Googlebot peut crawler plusieurs variantes.</li>
</ul>
<h2>Bonne pratique</h2>
<p>Toujours utiliser des minuscules. Configurez des redirections 301 depuis les variantes en majuscules.</p>
<h2>Générez des URLs en minuscules</h2>
<p>Notre <a href="%SLUG%">générateur de slugs d'URL</a> produit toujours des slugs en minuscules séparés par des tirets.</p>`,
  }),
};
