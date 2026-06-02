import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "www-vs-non-www-seo", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "www vs non-www: Which Is Better for SEO?",
    description: "Learn the difference between www and non-www URLs, how Google handles them, and which to choose for your site.",
    body: `<p>There is <strong>no SEO difference</strong> between <code>www.example.com</code> and <code>example.com</code>. What matters is picking one and redirecting the other.</p>
<h2>Why Choose One?</h2>
<p>If both versions are accessible, Google may index both — splitting your link equity and creating duplicate content.</p>
<h2>How to Fix</h2>
<ol>
<li>Pick your preferred version</li>
<li>301 redirect the other version</li>
<li>Set the preferred version in Google Search Console</li>
<li>Use consistent internal links</li>
</ol>
<h2>Technical Differences</h2>
<ul>
<li><strong>www:</strong> Can use CNAME records, easier for CDN/load balancer configuration</li>
<li><strong>non-www (naked domain):</strong> Shorter, cleaner look, must use A records</li>
</ul>
<p>Most modern sites choose non-www for brevity.</p>`,
  }),
  ja: build("ja", {
    title: "www vs 非www：SEOにはどちらが良い？",
    description: "wwwと非wwwのURLの違い、Googleがそれらをどう扱うか、そして自分のサイトにどちらを選ぶべきかを学びましょう。",
    body: `<p><code>www.example.com</code>と<code>example.com</code>の間に<strong>SEO上の差はありません</strong>。重要なのは、一方を選び、もう一方をリダイレクトすることです。</p>
<h2>なぜ一方を選ぶのか?</h2>
<p>両方のバージョンにアクセスできると、Googleは両方をインデックスし、リンクエクイティが分散して重複コンテンツが生じる可能性があります。</p>
<h2>修正方法</h2>
<ol>
<li>優先するバージョンを選ぶ</li>
<li>もう一方のバージョンを301リダイレクトする</li>
<li>Google Search Consoleで優先バージョンを設定する</li>
<li>一貫した内部リンクを使う</li>
</ol>
<h2>技術的な違い</h2>
<ul>
<li><strong>www:</strong> CNAMEレコードを使える。CDNやロードバランサーの設定が容易。</li>
<li><strong>非www(ネイキッドドメイン):</strong> 短くすっきりした見た目。Aレコードを使う必要がある。</li>
</ul>
<p>最近のサイトの多くは、簡潔さのために非wwwを選びます。</p>`,
  }),
  de: build("de", {
    title: "www vs nicht-www: Was ist besser für SEO?",
    description: "Lernen Sie den Unterschied zwischen www- und nicht-www-URLs, wie Google sie behandelt und welche Sie für Ihre Website wählen sollten.",
    body: `<p>Es gibt <strong>keinen SEO-Unterschied</strong> zwischen <code>www.example.com</code> und <code>example.com</code>. Wichtig ist, eine Version zu wählen und die andere umzuleiten.</p>
<h2>Warum sich für eine entscheiden?</h2>
<p>Wenn beide Versionen erreichbar sind, indexiert Google möglicherweise beide — das verteilt Ihre Link-Equity und erzeugt Duplicate Content.</p>
<h2>So beheben Sie es</h2>
<ol>
<li>Wählen Sie Ihre bevorzugte Version</li>
<li>Leiten Sie die andere Version per 301 um</li>
<li>Legen Sie die bevorzugte Version in der Google Search Console fest</li>
<li>Verwenden Sie konsistente interne Links</li>
</ol>
<h2>Technische Unterschiede</h2>
<ul>
<li><strong>www:</strong> Kann CNAME-Records nutzen, einfacher für CDN-/Load-Balancer-Konfiguration</li>
<li><strong>nicht-www (nackte Domain):</strong> Kürzer, sauberer, muss A-Records nutzen</li>
</ul>
<p>Die meisten modernen Websites wählen aus Gründen der Kürze nicht-www.</p>`,
  }),
  es: build("es", {
    title: "www vs sin www: ¿Cuál es mejor para SEO?",
    description: "Aprende la diferencia entre URLs con www y sin www, cómo las trata Google y cuál elegir para tu sitio.",
    body: `<p>No hay <strong>ninguna diferencia SEO</strong> entre <code>www.example.com</code> y <code>example.com</code>. Lo que importa es elegir una y redirigir la otra.</p>
<h2>¿Por qué elegir una?</h2>
<p>Si ambas versiones son accesibles, Google puede indexar las dos, dividiendo tu link equity y creando contenido duplicado.</p>
<h2>Cómo solucionarlo</h2>
<ol>
<li>Elige tu versión preferida</li>
<li>Redirige la otra versión con un 301</li>
<li>Configura la versión preferida en Google Search Console</li>
<li>Usa enlaces internos consistentes</li>
</ol>
<h2>Diferencias técnicas</h2>
<ul>
<li><strong>www:</strong> Puede usar registros CNAME, más fácil para configurar CDN/balanceador de carga</li>
<li><strong>sin www (dominio desnudo):</strong> Aspecto más corto y limpio, debe usar registros A</li>
</ul>
<p>La mayoría de los sitios modernos eligen sin www por brevedad.</p>`,
  }),
  pt: build("pt", {
    title: "www vs sem www: Qual é melhor para SEO?",
    description: "Aprenda a diferença entre URLs com www e sem www, como o Google as trata e qual escolher para o seu site.",
    body: `<p>Não há <strong>nenhuma diferença de SEO</strong> entre <code>www.example.com</code> e <code>example.com</code>. O que importa é escolher uma e redirecionar a outra.</p>
<h2>Por que escolher uma?</h2>
<p>Se ambas as versões forem acessíveis, o Google pode indexar as duas, dividindo o seu link equity e criando conteúdo duplicado.</p>
<h2>Como corrigir</h2>
<ol>
<li>Escolha a sua versão preferida</li>
<li>Redirecione a outra versão com um 301</li>
<li>Defina a versão preferida no Google Search Console</li>
<li>Use links internos consistentes</li>
</ol>
<h2>Diferenças técnicas</h2>
<ul>
<li><strong>www:</strong> Pode usar registros CNAME, mais fácil para configurar CDN/balanceador de carga</li>
<li><strong>sem www (domínio nu):</strong> Aparência mais curta e limpa, deve usar registros A</li>
</ul>
<p>A maioria dos sites modernos escolhe sem www pela brevidade.</p>`,
  }),
  fr: build("fr", {
    title: "www vs sans www : Lequel est meilleur pour le SEO ?",
    description: "Apprenez la différence entre les URLs avec www et sans www, comment Google les traite et laquelle choisir pour votre site.",
    body: `<p>Il n'y a <strong>aucune différence SEO</strong> entre <code>www.example.com</code> et <code>example.com</code>. Ce qui compte, c'est d'en choisir une et de rediriger l'autre.</p>
<h2>Pourquoi en choisir une ?</h2>
<p>Si les deux versions sont accessibles, Google peut indexer les deux, ce qui divise votre link equity et crée du contenu dupliqué.</p>
<h2>Comment corriger</h2>
<ol>
<li>Choisissez votre version préférée</li>
<li>Redirigez l'autre version en 301</li>
<li>Définissez la version préférée dans la Google Search Console</li>
<li>Utilisez des liens internes cohérents</li>
</ol>
<h2>Différences techniques</h2>
<ul>
<li><strong>www :</strong> Peut utiliser des enregistrements CNAME, plus facile pour la configuration CDN/répartiteur de charge</li>
<li><strong>sans www (domaine nu) :</strong> Aspect plus court et épuré, doit utiliser des enregistrements A</li>
</ul>
<p>La plupart des sites modernes choisissent sans www pour la concision.</p>`,
  }),
};
