import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "url-parameters-seo-guide", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "URL Parameters and SEO: How to Avoid Crawl Waste",
    description: "Learn how URL parameters affect SEO, cause crawl budget waste, and how to manage them correctly.",
    body: `<p>URL parameters (<code>?sort=price&page=2&color=blue</code>) can cause serious SEO issues if not managed properly.</p>
<h2>Problems Parameters Cause</h2>
<ul>
<li><strong>Duplicate content:</strong> <code>/shoes</code> and <code>/shoes?sort=price</code> may have nearly identical content</li>
<li><strong>Crawl waste:</strong> Googlebot crawls every parameter combination</li>
<li><strong>Index bloat:</strong> Thousands of parameterized URLs clog your index</li>
<li><strong>Link equity dilution:</strong> Backlinks spread across parameter variants</li>
</ul>
<h2>Solutions</h2>
<ul>
<li>Use <strong>canonical tags</strong> pointing to the base URL</li>
<li>Set parameter handling in <strong>Google Search Console</strong></li>
<li>Use <strong>robots.txt</strong> to block parameter-heavy paths</li>
<li>Use clean URL paths instead of parameters when possible</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> creates parameter-free slugs.</p>`,
  }),
  ja: build("ja", {
    title: "URLパラメータとSEO：クロール浪費を避ける方法",
    description: "URLパラメータがSEOに与える影響、クロールバジェットの浪費、正しい管理方法を学びましょう。",
    body: `<p>URLパラメータ（<code>?sort=price&page=2&color=blue</code>）は、適切に管理しないとSEOに深刻な問題を引き起こします。</p>
<h2>パラメータが引き起こす問題</h2>
<ul>
<li><strong>重複コンテンツ：</strong> <code>/shoes</code>と<code>/shoes?sort=price</code>はほぼ同じコンテンツの可能性がある</li>
<li><strong>クロールの浪費：</strong> Googlebotがあらゆるパラメータの組み合わせをクロールする</li>
<li><strong>インデックスの肥大化：</strong> 数千のパラメータ付きURLがインデックスを圧迫</li>
<li><strong>リンクエクイティの希薄化：</strong> 被リンクがパラメータバリアント間に分散する</li>
</ul>
<h2>解決策</h2>
<ul>
<li>ベースURLを指す<strong>canonicalタグ</strong>を使う</li>
<li><strong>Google Search Console</strong>でパラメータの処理を設定する</li>
<li><strong>robots.txt</strong>でパラメータの多いパスをブロックする</li>
<li>可能な限りパラメータの代わりにクリーンなURLパスを使う</li>
</ul>
<h2>クリーンなURLを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>でパラメータ不要のスラッグを作成しましょう。</p>`,
  }),
  de: build("de", {
    title: "URL-Parameter und SEO: Crawl-Verschwendung vermeiden",
    description: "Erfahren Sie, wie URL-Parameter SEO beeinflussen, Crawl-Budget verschwenden und wie man sie richtig verwaltet.",
    body: `<p>URL-Parameter (<code>?sort=price&page=2&color=blue</code>) können ernsthafte SEO-Probleme verursachen, wenn sie nicht richtig verwaltet werden.</p>
<h2>Probleme durch Parameter</h2>
<ul>
<li><strong>Duplicate Content:</strong> <code>/shoes</code> und <code>/shoes?sort=price</code> können nahezu identischen Inhalt haben</li>
<li><strong>Crawl-Verschwendung:</strong> Googlebot crawlt jede Parameterkombination</li>
<li><strong>Index-Aufblähung:</strong> Tausende parametrisierte URLs verstopfen Ihren Index</li>
<li><strong>Link-Equity-Verwässerung:</strong> Backlinks verteilen sich über Parametervarianten</li>
</ul>
<h2>Lösungen</h2>
<ul>
<li>Verwenden Sie <strong>Canonical-Tags</strong>, die auf die Basis-URL verweisen</li>
<li>Konfigurieren Sie die Parameterbehandlung in der <strong>Google Search Console</strong></li>
<li>Blockieren Sie parameterreiche Pfade mit <strong>robots.txt</strong></li>
<li>Verwenden Sie wenn möglich saubere URL-Pfade statt Parameter</li>
</ul>
<h2>Saubere URLs generieren</h2>
<p>Unser <a href="%SLUG%">URL-Slug-Generator</a> erstellt parameterfreie Slugs.</p>`,
  }),
  es: build("es", {
    title: "Parámetros URL y SEO: Cómo evitar desperdicio de rastreo",
    description: "Aprende cómo los parámetros URL afectan al SEO, causan desperdicio de presupuesto de rastreo y cómo gestionarlos correctamente.",
    body: `<p>Los parámetros URL (<code>?sort=price&page=2&color=blue</code>) pueden causar problemas serios de SEO si no se gestionan adecuadamente.</p>
<h2>Problemas que causan los parámetros</h2>
<ul>
<li><strong>Contenido duplicado:</strong> <code>/shoes</code> y <code>/shoes?sort=price</code> pueden tener contenido casi idéntico</li>
<li><strong>Desperdicio de rastreo:</strong> Googlebot rastrea cada combinación de parámetros</li>
<li><strong>Inflación del índice:</strong> Miles de URLs con parámetros saturan tu índice</li>
<li><strong>Dilución de link equity:</strong> Los backlinks se reparten entre variantes de parámetros</li>
</ul>
<h2>Soluciones</h2>
<ul>
<li>Usa <strong>etiquetas canonical</strong> apuntando a la URL base</li>
<li>Configura la gestión de parámetros en <strong>Google Search Console</strong></li>
<li>Usa <strong>robots.txt</strong> para bloquear rutas con muchos parámetros</li>
<li>Usa rutas URL limpias en lugar de parámetros cuando sea posible</li>
</ul>
<h2>Genera URLs limpias</h2>
<p>Nuestro <a href="%SLUG%">generador de slugs de URL</a> crea slugs sin parámetros.</p>`,
  }),
  pt: build("pt", {
    title: "Parâmetros URL e SEO: Como evitar desperdício de rastreamento",
    description: "Aprenda como parâmetros URL afetam o SEO, causam desperdício de orçamento de rastreamento e como gerenciá-los corretamente.",
    body: `<p>Parâmetros URL (<code>?sort=price&page=2&color=blue</code>) podem causar problemas sérios de SEO se não forem gerenciados adequadamente.</p>
<h2>Problemas causados por parâmetros</h2>
<ul>
<li><strong>Conteúdo duplicado:</strong> <code>/shoes</code> e <code>/shoes?sort=price</code> podem ter conteúdo quase idêntico</li>
<li><strong>Desperdício de rastreamento:</strong> O Googlebot rastreia cada combinação de parâmetros</li>
<li><strong>Inchaço do índice:</strong> Milhares de URLs parametrizadas congestionam o seu índice</li>
<li><strong>Diluição de link equity:</strong> Backlinks se espalham entre variantes de parâmetros</li>
</ul>
<h2>Soluções</h2>
<ul>
<li>Use <strong>tags canonical</strong> apontando para a URL base</li>
<li>Configure o tratamento de parâmetros no <strong>Google Search Console</strong></li>
<li>Use <strong>robots.txt</strong> para bloquear caminhos com muitos parâmetros</li>
<li>Use caminhos URL limpos em vez de parâmetros quando possível</li>
</ul>
<h2>Gere URLs limpas</h2>
<p>O nosso <a href="%SLUG%">gerador de slugs de URL</a> cria slugs sem parâmetros.</p>`,
  }),
  fr: build("fr", {
    title: "Paramètres URL et SEO : Comment éviter le gaspillage de crawl",
    description: "Apprenez comment les paramètres URL affectent le SEO, gaspillent le budget de crawl et comment les gérer correctement.",
    body: `<p>Les paramètres URL (<code>?sort=price&page=2&color=blue</code>) peuvent causer de graves problèmes SEO s'ils ne sont pas gérés correctement.</p>
<h2>Problèmes causés par les paramètres</h2>
<ul>
<li><strong>Contenu dupliqué :</strong> <code>/shoes</code> et <code>/shoes?sort=price</code> peuvent avoir un contenu quasi identique</li>
<li><strong>Gaspillage de crawl :</strong> Googlebot crawle chaque combinaison de paramètres</li>
<li><strong>Inflation de l'index :</strong> Des milliers d'URLs paramétrées encombrent votre index</li>
<li><strong>Dilution du link equity :</strong> Les backlinks se répartissent entre les variantes de paramètres</li>
</ul>
<h2>Solutions</h2>
<ul>
<li>Utilisez des <strong>balises canonical</strong> pointant vers l'URL de base</li>
<li>Configurez la gestion des paramètres dans la <strong>Google Search Console</strong></li>
<li>Utilisez <strong>robots.txt</strong> pour bloquer les chemins riches en paramètres</li>
<li>Utilisez des chemins URL propres au lieu de paramètres quand c'est possible</li>
</ul>
<h2>Générez des URLs propres</h2>
<p>Notre <a href="%SLUG%">générateur de slugs d'URL</a> crée des slugs sans paramètres.</p>`,
  }),
};
