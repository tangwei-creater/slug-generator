import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "redirect-301-vs-302", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "301 vs 302 Redirect: When to Use Which (SEO Guide)",
    description: "Learn the difference between 301 and 302 redirects, their SEO impact, and when to use each type.",
    body: `<p>Choosing the wrong redirect type can silently damage your SEO. Here's the definitive guide.</p>
<h2>Quick Comparison</h2>
<table><thead><tr><th>Feature</th><th>301 (Permanent)</th><th>302 (Temporary)</th></tr></thead><tbody>
<tr><td>Meaning</td><td>Page permanently moved</td><td>Page temporarily moved</td></tr>
<tr><td>SEO equity transfer</td><td>Passes ~95-99% of link equity</td><td>May not pass link equity</td></tr>
<tr><td>Google indexing</td><td>Indexes the new URL</td><td>May keep indexing the old URL</td></tr>
<tr><td>Browser caching</td><td>Cached indefinitely</td><td>Not cached by default</td></tr>
</tbody></table>
<h2>When to Use 301</h2>
<ul>
<li>You changed a URL slug permanently</li>
<li>You moved a page to a new domain</li>
<li>You merged two pages into one</li>
<li>You switched from HTTP to HTTPS</li>
</ul>
<h2>When to Use 302</h2>
<ul>
<li>A/B testing different URLs</li>
<li>Temporary maintenance page</li>
<li>Geo-based redirects (showing different content by country)</li>
</ul>
<h2>Avoid Needing Redirects</h2>
<p>Set the right slug from the start with our <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "301 vs 302リダイレクト：使い分けガイド（SEO）",
    description: "301と302リダイレクトの違い、SEOへの影響、それぞれの使いどころを学びましょう。",
    body: `<p>間違ったリダイレクトを選ぶと、SEOに静かにダメージを与えます。以下が決定版ガイドです。</p>
<h2>比較表</h2>
<table><thead><tr><th>特徴</th><th>301（永続的）</th><th>302（一時的）</th></tr></thead><tbody>
<tr><td>意味</td><td>ページが永続的に移動</td><td>ページが一時的に移動</td></tr>
<tr><td>SEO評価の引き継ぎ</td><td>リンクエクイティの約95〜99%を引き継ぐ</td><td>引き継がない可能性がある</td></tr>
<tr><td>Googleのインデックス</td><td>新URLをインデックスする</td><td>旧URLをインデックスし続ける可能性がある</td></tr>
<tr><td>ブラウザキャッシュ</td><td>無期限にキャッシュされる</td><td>デフォルトではキャッシュされない</td></tr>
</tbody></table>
<h2>301を使う場合</h2>
<ul>
<li>URLスラッグを永続的に変更した</li>
<li>ページを新しいドメインに移動した</li>
<li>2つのページを1つに統合した</li>
<li>HTTPからHTTPSに切り替えた</li>
</ul>
<h2>302を使う場合</h2>
<ul>
<li>異なるURLのA/Bテスト</li>
<li>一時的なメンテナンスページ</li>
<li>ジオベースのリダイレクト（国別にコンテンツを切り替え）</li>
</ul>
<h2>リダイレクトを避ける</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>で最初から正しいスラッグを設定しましょう。</p>`,
  }),
  de: build("de", {
    title: "301 vs 302 Redirect: Wann welchen verwenden? (SEO-Guide)",
    description: "Lernen Sie den Unterschied zwischen 301- und 302-Redirects, ihre SEO-Auswirkungen und wann man welchen verwendet.",
    body: `<p>Der falsche Redirect-Typ kann Ihrem SEO stillschweigend schaden. Hier ist der definitive Leitfaden.</p>
<h2>Schnellvergleich</h2>
<table><thead><tr><th>Merkmal</th><th>301 (Permanent)</th><th>302 (Temporär)</th></tr></thead><tbody>
<tr><td>Bedeutung</td><td>Seite dauerhaft verschoben</td><td>Seite vorübergehend verschoben</td></tr>
<tr><td>SEO-Equity-Transfer</td><td>Überträgt ~95–99 % der Link-Equity</td><td>Überträgt möglicherweise keine Link-Equity</td></tr>
<tr><td>Google-Indexierung</td><td>Indexiert die neue URL</td><td>Kann die alte URL weiter indexieren</td></tr>
<tr><td>Browser-Caching</td><td>Wird unbefristet gecacht</td><td>Wird standardmäßig nicht gecacht</td></tr>
</tbody></table>
<h2>Wann 301 verwenden</h2>
<ul>
<li>URL-Slug dauerhaft geändert</li>
<li>Seite auf eine neue Domain verschoben</li>
<li>Zwei Seiten zu einer zusammengeführt</li>
<li>Von HTTP auf HTTPS umgestellt</li>
</ul>
<h2>Wann 302 verwenden</h2>
<ul>
<li>A/B-Tests mit verschiedenen URLs</li>
<li>Temporäre Wartungsseite</li>
<li>Geo-basierte Redirects (verschiedene Inhalte nach Land)</li>
</ul>
<h2>Redirects vermeiden</h2>
<p>Legen Sie von Anfang an den richtigen Slug fest mit unserem <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "301 vs 302 Redirect: Cuándo usar cada uno (Guía SEO)",
    description: "Aprende la diferencia entre las redirecciones 301 y 302, su impacto en el SEO y cuándo usar cada tipo.",
    body: `<p>Elegir el tipo de redirección incorrecto puede dañar silenciosamente tu SEO. Aquí tienes la guía definitiva.</p>
<h2>Comparación rápida</h2>
<table><thead><tr><th>Característica</th><th>301 (Permanente)</th><th>302 (Temporal)</th></tr></thead><tbody>
<tr><td>Significado</td><td>Página movida permanentemente</td><td>Página movida temporalmente</td></tr>
<tr><td>Transferencia de SEO</td><td>Transfiere ~95-99 % del link equity</td><td>Puede no transferir link equity</td></tr>
<tr><td>Indexación de Google</td><td>Indexa la nueva URL</td><td>Puede seguir indexando la URL antigua</td></tr>
<tr><td>Caché del navegador</td><td>Se almacena en caché indefinidamente</td><td>No se almacena por defecto</td></tr>
</tbody></table>
<h2>Cuándo usar 301</h2>
<ul>
<li>Cambiaste un slug de URL permanentemente</li>
<li>Moviste una página a un nuevo dominio</li>
<li>Fusionaste dos páginas en una</li>
<li>Cambiaste de HTTP a HTTPS</li>
</ul>
<h2>Cuándo usar 302</h2>
<ul>
<li>Pruebas A/B con diferentes URLs</li>
<li>Página de mantenimiento temporal</li>
<li>Redirecciones basadas en geolocalización</li>
</ul>
<h2>Evita necesitar redirecciones</h2>
<p>Establece el slug correcto desde el principio con nuestro <a href="%SLUG%">generador de slugs de URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "301 vs 302 Redirect: Quando usar cada um (Guia SEO)",
    description: "Aprenda a diferença entre redirecionamentos 301 e 302, o impacto no SEO e quando usar cada tipo.",
    body: `<p>Escolher o tipo errado de redirecionamento pode prejudicar silenciosamente o seu SEO. Aqui está o guia definitivo.</p>
<h2>Comparação rápida</h2>
<table><thead><tr><th>Característica</th><th>301 (Permanente)</th><th>302 (Temporário)</th></tr></thead><tbody>
<tr><td>Significado</td><td>Página movida permanentemente</td><td>Página movida temporariamente</td></tr>
<tr><td>Transferência de SEO</td><td>Transfere ~95-99 % do link equity</td><td>Pode não transferir link equity</td></tr>
<tr><td>Indexação do Google</td><td>Indexa a nova URL</td><td>Pode continuar indexando a URL antiga</td></tr>
<tr><td>Cache do navegador</td><td>Armazenado em cache indefinidamente</td><td>Não armazenado por padrão</td></tr>
</tbody></table>
<h2>Quando usar 301</h2>
<ul>
<li>Você mudou um slug de URL permanentemente</li>
<li>Você moveu uma página para um novo domínio</li>
<li>Você mesclou duas páginas em uma</li>
<li>Você migrou de HTTP para HTTPS</li>
</ul>
<h2>Quando usar 302</h2>
<ul>
<li>Testes A/B com URLs diferentes</li>
<li>Página de manutenção temporária</li>
<li>Redirecionamentos baseados em geolocalização</li>
</ul>
<h2>Evite precisar de redirecionamentos</h2>
<p>Defina o slug correto desde o início com o nosso <a href="%SLUG%">gerador de slugs de URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "301 vs 302 Redirect : Quand utiliser lequel ? (Guide SEO)",
    description: "Apprenez la différence entre les redirections 301 et 302, leur impact SEO et quand utiliser chaque type.",
    body: `<p>Choisir le mauvais type de redirection peut nuire silencieusement à votre SEO. Voici le guide définitif.</p>
<h2>Comparaison rapide</h2>
<table><thead><tr><th>Caractéristique</th><th>301 (Permanent)</th><th>302 (Temporaire)</th></tr></thead><tbody>
<tr><td>Signification</td><td>Page déplacée définitivement</td><td>Page déplacée temporairement</td></tr>
<tr><td>Transfert SEO</td><td>Transmet ~95-99 % du link equity</td><td>Peut ne pas transmettre le link equity</td></tr>
<tr><td>Indexation Google</td><td>Indexe la nouvelle URL</td><td>Peut continuer à indexer l'ancienne URL</td></tr>
<tr><td>Cache navigateur</td><td>Mis en cache indéfiniment</td><td>Non mis en cache par défaut</td></tr>
</tbody></table>
<h2>Quand utiliser 301</h2>
<ul>
<li>Vous avez changé un slug d'URL de façon permanente</li>
<li>Vous avez déplacé une page vers un nouveau domaine</li>
<li>Vous avez fusionné deux pages en une</li>
<li>Vous êtes passé de HTTP à HTTPS</li>
</ul>
<h2>Quand utiliser 302</h2>
<ul>
<li>Tests A/B avec différentes URLs</li>
<li>Page de maintenance temporaire</li>
<li>Redirections géolocalisées</li>
</ul>
<h2>Évitez les redirections</h2>
<p>Définissez le bon slug dès le départ avec notre <a href="%SLUG%">générateur de slugs d'URL</a>.</p>`,
  }),
};
