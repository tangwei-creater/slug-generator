import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "seo-url-length-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "SEO URL Length: How Long Should Your URLs Be?",
    description: "Learn the ideal URL length for SEO, what Google recommends, and how to keep URLs short without losing meaning.",
    body: `<p>There's no hard limit on URL length, but shorter URLs consistently correlate with higher rankings.</p>
<h2>The Data</h2>
<ul>
<li>Google can index URLs up to ~2,000 characters, but truncates in SERPs around 60-70 characters</li>
<li>Backlinko study: URLs in position 1 average 17 characters shorter than position 10</li>
<li>Ahrefs: URLs with 1-2 path segments outperform deeper structures</li>
</ul>
<h2>Best Practices</h2>
<ul>
<li><strong>Slug length:</strong> 3-5 words, targeting your primary keyword</li>
<li><strong>Total URL:</strong> Under 75 characters including domain</li>
<li><strong>Path depth:</strong> Maximum 2-3 segments (<code>/blog/seo-tips</code> not <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Remove stop words:</strong> "how-to-name-variables" not "how-to-properly-name-your-variables-in-code"</li>
</ul>
<h2>Generate Short Slugs</h2>
<p>Use our <a href="%SLUG%">URL slug generator</a> or <a href="%BLOG%">blog slug generator</a> to create concise, keyword-focused slugs.</p>`,
  }),
  ja: build("ja", {
    title: "SEO URL長さ：URLはどのくらいの長さがベスト？",
    description: "SEOに最適なURL長さ、Googleの推奨事項、意味を失わずにURLを短く保つ方法を学びましょう。",
    body: `<p>URL長さに厳密な制限はありませんが、短いURLは一貫して高いランキングと相関します。</p>
<h2>データ</h2>
<ul>
<li>Googleは最大約2,000文字のURLをインデックスできるが、検索結果では約60〜70文字で省略される</li>
<li>Backlinkoの調査：1位のURLは10位に比べて平均17文字短い</li>
<li>Ahrefs：パスが1〜2セグメントのURLはより深い構造のURLを上回る</li>
</ul>
<h2>ベストプラクティス</h2>
<ul>
<li><strong>スラッグ長：</strong> 3〜5語で、主要キーワードを含める</li>
<li><strong>合計URL：</strong> ドメインを含めて75文字以内</li>
<li><strong>パスの深さ：</strong> 最大2〜3セグメント（<code>/blog/seo-tips</code>、<code>/blog/2026/05/category/seo-tips</code>ではなく）</li>
<li><strong>ストップワードを削除：</strong> 「how-to-name-variables」が適切であり「how-to-properly-name-your-variables-in-code」は長すぎ</li>
</ul>
<h2>短いスラッグを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>または<a href="%BLOG%">ブログスラッグジェネレーター</a>で、簡潔でキーワード重視のスラッグを作成しましょう。</p>`,
  }),
  de: build("de", {
    title: "SEO URL-Länge: Wie lang sollten Ihre URLs sein?",
    description: "Erfahren Sie die ideale URL-Länge für SEO, was Google empfiehlt und wie man URLs kurz hält, ohne Bedeutung zu verlieren.",
    body: `<p>Es gibt keine feste Obergrenze für die URL-Länge, aber kürzere URLs korrelieren durchweg mit besseren Rankings.</p>
<h2>Die Daten</h2>
<ul>
<li>Google kann URLs bis ~2.000 Zeichen indexieren, kürzt aber in den SERPs bei ca. 60–70 Zeichen</li>
<li>Backlinko-Studie: URLs auf Position 1 sind im Schnitt 17 Zeichen kürzer als auf Position 10</li>
<li>Ahrefs: URLs mit 1–2 Pfadsegmenten übertreffen tiefere Strukturen</li>
</ul>
<h2>Best Practices</h2>
<ul>
<li><strong>Slug-Länge:</strong> 3–5 Wörter, auf Ihr Hauptkeyword ausgerichtet</li>
<li><strong>Gesamte URL:</strong> Unter 75 Zeichen inklusive Domain</li>
<li><strong>Pfadtiefe:</strong> Maximal 2–3 Segmente (<code>/blog/seo-tips</code> statt <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Stoppwörter entfernen:</strong> „how-to-name-variables" statt „how-to-properly-name-your-variables-in-code"</li>
</ul>
<h2>Kurze Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> oder <a href="%BLOG%">Blog-Slug-Generator</a> für prägnante, keyword-fokussierte Slugs.</p>`,
  }),
  es: build("es", {
    title: "Longitud de URL SEO: ¿Cuán largas deben ser tus URLs?",
    description: "Aprende la longitud ideal de URL para SEO, qué recomienda Google y cómo mantener las URLs cortas sin perder significado.",
    body: `<p>No hay un límite estricto en la longitud de URL, pero las URLs más cortas correlacionan consistentemente con mejores rankings.</p>
<h2>Los datos</h2>
<ul>
<li>Google puede indexar URLs de hasta ~2.000 caracteres, pero las trunca en los SERPs alrededor de 60-70 caracteres</li>
<li>Estudio de Backlinko: las URLs en posición 1 son en promedio 17 caracteres más cortas que las de posición 10</li>
<li>Ahrefs: las URLs con 1-2 segmentos de ruta superan a las estructuras más profundas</li>
</ul>
<h2>Mejores prácticas</h2>
<ul>
<li><strong>Longitud del slug:</strong> 3-5 palabras, apuntando a tu keyword principal</li>
<li><strong>URL total:</strong> Menos de 75 caracteres incluyendo el dominio</li>
<li><strong>Profundidad del path:</strong> Máximo 2-3 segmentos (<code>/blog/seo-tips</code> no <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Eliminar stop words:</strong> «how-to-name-variables» no «how-to-properly-name-your-variables-in-code»</li>
</ul>
<h2>Genera slugs cortos</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs de URL</a> o <a href="%BLOG%">generador de slugs de blog</a> para crear slugs concisos y centrados en keywords.</p>`,
  }),
  pt: build("pt", {
    title: "Comprimento de URL SEO: Qual o tamanho ideal?",
    description: "Aprenda o comprimento ideal de URL para SEO, o que o Google recomenda e como manter as URLs curtas sem perder significado.",
    body: `<p>Não há um limite rígido para o comprimento de URL, mas URLs mais curtas correlacionam consistentemente com melhores rankings.</p>
<h2>Os dados</h2>
<ul>
<li>O Google pode indexar URLs de até ~2.000 caracteres, mas as trunca nos SERPs em torno de 60-70 caracteres</li>
<li>Estudo do Backlinko: URLs na posição 1 são em média 17 caracteres mais curtas do que na posição 10</li>
<li>Ahrefs: URLs com 1-2 segmentos de caminho superam estruturas mais profundas</li>
</ul>
<h2>Melhores práticas</h2>
<ul>
<li><strong>Comprimento do slug:</strong> 3-5 palavras, focando na sua palavra-chave principal</li>
<li><strong>URL total:</strong> Menos de 75 caracteres incluindo o domínio</li>
<li><strong>Profundidade do caminho:</strong> Máximo 2-3 segmentos (<code>/blog/seo-tips</code> não <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Remover stop words:</strong> «how-to-name-variables» e não «how-to-properly-name-your-variables-in-code»</li>
</ul>
<h2>Gere slugs curtos</h2>
<p>Use o nosso <a href="%SLUG%">gerador de slugs de URL</a> ou <a href="%BLOG%">gerador de slugs de blog</a> para criar slugs concisos e focados em keywords.</p>`,
  }),
  fr: build("fr", {
    title: "Longueur d'URL SEO : Quelle longueur pour vos URLs ?",
    description: "Apprenez la longueur idéale d'URL pour le SEO, ce que Google recommande et comment garder les URLs courtes sans perdre de sens.",
    body: `<p>Il n'y a pas de limite stricte sur la longueur d'URL, mais les URLs plus courtes corrèlent systématiquement avec de meilleurs classements.</p>
<h2>Les données</h2>
<ul>
<li>Google peut indexer des URLs jusqu'à ~2 000 caractères, mais les tronque dans les SERPs autour de 60-70 caractères</li>
<li>Étude Backlinko : les URLs en position 1 font en moyenne 17 caractères de moins qu'en position 10</li>
<li>Ahrefs : les URLs avec 1-2 segments de chemin surpassent les structures plus profondes</li>
</ul>
<h2>Bonnes pratiques</h2>
<ul>
<li><strong>Longueur du slug :</strong> 3-5 mots, ciblant votre mot-clé principal</li>
<li><strong>URL totale :</strong> Moins de 75 caractères domaine inclus</li>
<li><strong>Profondeur du chemin :</strong> Maximum 2-3 segments (<code>/blog/seo-tips</code> pas <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Supprimer les mots vides :</strong> « how-to-name-variables » pas « how-to-properly-name-your-variables-in-code »</li>
</ul>
<h2>Générez des slugs courts</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs d'URL</a> ou <a href="%BLOG%">générateur de slugs de blog</a> pour des slugs concis et orientés mots-clés.</p>`,
  }),
};
