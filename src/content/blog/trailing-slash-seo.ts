import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "trailing-slash-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Trailing Slash in URLs: Does It Matter for SEO?",
    description: "Learn whether a trailing slash affects SEO, how Google handles it, and how to configure your server correctly.",
    body: `<p>The trailing slash debate: is <code>/about/</code> the same as <code>/about</code>? For SEO, consistency is what matters.</p>
<h2>How Google Treats Them</h2>
<p>Google treats <code>/page</code> and <code>/page/</code> as different URLs by default. If both return 200, Google may index both — creating duplicate content.</p>
<h2>Server Behavior</h2>
<table><thead><tr><th>Platform</th><th>Default</th></tr></thead><tbody>
<tr><td>Apache</td><td>Adds trailing slash to directories</td></tr>
<tr><td>Nginx</td><td>No trailing slash by default</td></tr>
<tr><td>Next.js</td><td>No trailing slash (configurable)</td></tr>
<tr><td>WordPress</td><td>Trailing slash on posts</td></tr>
<tr><td>Netlify</td><td>Adds trailing slash</td></tr>
</tbody></table>
<h2>Best Practice</h2>
<p>Pick one format and 301 redirect the other. Set canonical URLs. Most modern frameworks use <strong>no trailing slash</strong>.</p>
<h2>Generate Clean URLs</h2>
<p><a href="%SLUG%">URL slug generator</a> creates clean slugs without trailing slashes.</p>`,
  }),
  ja: build("ja", {
    title: "URLの末尾スラッシュ：SEOに影響するか？",
    description: "末尾スラッシュがSEOに影響するか、Googleがどう扱うか、サーバーの正しい設定方法を学びましょう。",
    body: `<p>末尾スラッシュ論争：<code>/about/</code>と<code>/about</code>は同じか？SEOでは、一貫性こそが重要です。</p>
<h2>Googleの扱い方</h2>
<p>Googleはデフォルトで<code>/page</code>と<code>/page/</code>を別のURLとして扱います。両方が200を返すと、両方をインデックスし重複コンテンツが発生する場合があります。</p>
<h2>サーバーの動作</h2>
<table><thead><tr><th>プラットフォーム</th><th>デフォルト</th></tr></thead><tbody>
<tr><td>Apache</td><td>ディレクトリに末尾スラッシュを追加</td></tr>
<tr><td>Nginx</td><td>デフォルトでは末尾スラッシュなし</td></tr>
<tr><td>Next.js</td><td>末尾スラッシュなし（設定変更可）</td></tr>
<tr><td>WordPress</td><td>投稿に末尾スラッシュあり</td></tr>
<tr><td>Netlify</td><td>末尾スラッシュを追加</td></tr>
</tbody></table>
<h2>ベストプラクティス</h2>
<p>一つの形式を選び、もう一方を301リダイレクトしましょう。canonical URLを設定してください。ほとんどのモダンフレームワークは<strong>末尾スラッシュなし</strong>を使います。</p>
<h2>クリーンなURLを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>で末尾スラッシュなしのクリーンなスラッグを作成しましょう。</p>`,
  }),
  de: build("de", {
    title: "Trailing Slash in URLs: Ist er SEO-relevant?",
    description: "Erfahren Sie, ob ein abschließender Schrägstrich SEO beeinflusst, wie Google ihn behandelt und wie Sie Ihren Server richtig konfigurieren.",
    body: `<p>Die Trailing-Slash-Debatte: Ist <code>/about/</code> dasselbe wie <code>/about</code>? Für SEO kommt es auf Konsistenz an.</p>
<h2>Wie Google sie behandelt</h2>
<p>Google behandelt <code>/page</code> und <code>/page/</code> standardmäßig als verschiedene URLs. Wenn beide 200 zurückgeben, indexiert Google möglicherweise beide — was zu Duplicate Content führt.</p>
<h2>Server-Verhalten</h2>
<table><thead><tr><th>Plattform</th><th>Standard</th></tr></thead><tbody>
<tr><td>Apache</td><td>Fügt Verzeichnissen Trailing Slash hinzu</td></tr>
<tr><td>Nginx</td><td>Kein Trailing Slash standardmäßig</td></tr>
<tr><td>Next.js</td><td>Kein Trailing Slash (konfigurierbar)</td></tr>
<tr><td>WordPress</td><td>Trailing Slash bei Beiträgen</td></tr>
<tr><td>Netlify</td><td>Fügt Trailing Slash hinzu</td></tr>
</tbody></table>
<h2>Best Practice</h2>
<p>Wählen Sie ein Format und leiten Sie das andere per 301 um. Setzen Sie Canonical-URLs. Die meisten modernen Frameworks verwenden <strong>keinen Trailing Slash</strong>.</p>
<h2>Saubere URLs generieren</h2>
<p>Der <a href="%SLUG%">URL-Slug-Generator</a> erstellt saubere Slugs ohne Trailing Slash.</p>`,
  }),
  es: build("es", {
    title: "Barra final en URLs: ¿Importa para SEO?",
    description: "Aprende si la barra final afecta al SEO, cómo la trata Google y cómo configurar tu servidor correctamente.",
    body: `<p>El debate de la barra final: ¿<code>/about/</code> es lo mismo que <code>/about</code>? Para el SEO, lo que importa es la consistencia.</p>
<h2>Cómo las trata Google</h2>
<p>Google trata <code>/page</code> y <code>/page/</code> como URLs diferentes por defecto. Si ambas devuelven 200, Google puede indexar las dos, creando contenido duplicado.</p>
<h2>Comportamiento del servidor</h2>
<table><thead><tr><th>Plataforma</th><th>Por defecto</th></tr></thead><tbody>
<tr><td>Apache</td><td>Añade barra final a los directorios</td></tr>
<tr><td>Nginx</td><td>Sin barra final por defecto</td></tr>
<tr><td>Next.js</td><td>Sin barra final (configurable)</td></tr>
<tr><td>WordPress</td><td>Barra final en las entradas</td></tr>
<tr><td>Netlify</td><td>Añade barra final</td></tr>
</tbody></table>
<h2>Mejor práctica</h2>
<p>Elige un formato y redirige el otro con 301. Configura las URLs canónicas. La mayoría de frameworks modernos usan <strong>sin barra final</strong>.</p>
<h2>Genera URLs limpias</h2>
<p>El <a href="%SLUG%">generador de slugs de URL</a> crea slugs limpios sin barra final.</p>`,
  }),
  pt: build("pt", {
    title: "Barra final em URLs: Importa para SEO?",
    description: "Aprenda se a barra final afeta o SEO, como o Google a trata e como configurar o seu servidor corretamente.",
    body: `<p>O debate da barra final: <code>/about/</code> é o mesmo que <code>/about</code>? Para SEO, o que importa é a consistência.</p>
<h2>Como o Google as trata</h2>
<p>O Google trata <code>/page</code> e <code>/page/</code> como URLs diferentes por padrão. Se ambas retornam 200, o Google pode indexar as duas — criando conteúdo duplicado.</p>
<h2>Comportamento do servidor</h2>
<table><thead><tr><th>Plataforma</th><th>Padrão</th></tr></thead><tbody>
<tr><td>Apache</td><td>Adiciona barra final aos diretórios</td></tr>
<tr><td>Nginx</td><td>Sem barra final por padrão</td></tr>
<tr><td>Next.js</td><td>Sem barra final (configurável)</td></tr>
<tr><td>WordPress</td><td>Barra final nos posts</td></tr>
<tr><td>Netlify</td><td>Adiciona barra final</td></tr>
</tbody></table>
<h2>Melhor prática</h2>
<p>Escolha um formato e redirecione o outro com 301. Defina URLs canônicas. A maioria dos frameworks modernos usa <strong>sem barra final</strong>.</p>
<h2>Gere URLs limpas</h2>
<p>O <a href="%SLUG%">gerador de slugs de URL</a> cria slugs limpos sem barra final.</p>`,
  }),
  fr: build("fr", {
    title: "Slash final dans les URLs : Impact sur le SEO ?",
    description: "Apprenez si le slash final affecte le SEO, comment Google le traite et comment configurer votre serveur correctement.",
    body: `<p>Le débat du slash final : <code>/about/</code> est-il identique à <code>/about</code> ? Pour le SEO, c'est la cohérence qui compte.</p>
<h2>Comment Google les traite</h2>
<p>Google traite <code>/page</code> et <code>/page/</code> comme des URLs différentes par défaut. Si les deux retournent 200, Google peut indexer les deux — créant du contenu dupliqué.</p>
<h2>Comportement du serveur</h2>
<table><thead><tr><th>Plateforme</th><th>Par défaut</th></tr></thead><tbody>
<tr><td>Apache</td><td>Ajoute un slash final aux répertoires</td></tr>
<tr><td>Nginx</td><td>Pas de slash final par défaut</td></tr>
<tr><td>Next.js</td><td>Pas de slash final (configurable)</td></tr>
<tr><td>WordPress</td><td>Slash final sur les articles</td></tr>
<tr><td>Netlify</td><td>Ajoute un slash final</td></tr>
</tbody></table>
<h2>Bonne pratique</h2>
<p>Choisissez un format et redirigez l'autre en 301. Définissez les URLs canoniques. La plupart des frameworks modernes utilisent <strong>pas de slash final</strong>.</p>
<h2>Générez des URLs propres</h2>
<p>Le <a href="%SLUG%">générateur de slugs d'URL</a> crée des slugs propres sans slash final.</p>`,
  }),
};
