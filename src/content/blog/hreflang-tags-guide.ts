import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "hreflang-tags-guide", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "hreflang Tags: The Complete Guide to Multilingual SEO",
    description: "Learn how to implement hreflang tags for multilingual websites. Covers syntax, common mistakes, and testing tools.",
    body: `<p>hreflang tags tell Google which language and regional version of a page to show to users. Essential for multilingual sites.</p><h2>Syntax</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Common Mistakes</h2><ul><li>Missing return links (hreflang must be bidirectional)</li><li>Wrong language codes</li><li>Missing x-default</li><li>Pointing to non-canonical URLs</li></ul><h2>Generate Multilingual URLs</h2><p><a href="%SLUG%">URL slug generator</a> for clean slugs across languages.</p>`,
  }),
  ja: build("ja", {
    title: "hreflangタグ：多言語SEO完全ガイド",
    description: "多言語サイトでのhreflangタグの実装方法を学びましょう。構文、よくある間違い、テストツールを扱います。",
    body: `<p>hreflangタグは、ページのどの言語・地域バージョンをユーザーに表示すべきかをGoogleに伝えます。多言語サイトには不可欠です。</p><h2>構文</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>よくある間違い</h2><ul><li>リターンリンクの欠落（hreflangは双方向でなければならない）</li><li>誤った言語コード</li><li>x-defaultの欠落</li><li>非canonical URLを指している</li></ul><h2>多言語URLを生成</h2><p>言語をまたいだクリーンなスラッグには<a href="%SLUG%">URLスラッグジェネレーター</a>を使いましょう。</p>`,
  }),
  de: build("de", {
    title: "hreflang-Tags: Der vollständige Guide für mehrsprachiges SEO",
    description: "Lernen Sie, hreflang-Tags für mehrsprachige Websites zu implementieren. Behandelt Syntax, häufige Fehler und Test-Tools.",
    body: `<p>hreflang-Tags teilen Google mit, welche Sprach- und Regionalversion einer Seite Nutzern angezeigt werden soll. Unverzichtbar für mehrsprachige Sites.</p><h2>Syntax</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Häufige Fehler</h2><ul><li>Fehlende Rückverweise (hreflang muss bidirektional sein)</li><li>Falsche Sprachcodes</li><li>Fehlendes x-default</li><li>Verweis auf nicht-kanonische URLs</li></ul><h2>Mehrsprachige URLs generieren</h2><p><a href="%SLUG%">URL-Slug-Generator</a> für saubere Slugs in allen Sprachen.</p>`,
  }),
  es: build("es", {
    title: "Etiquetas hreflang: Guía completa de SEO multilingüe",
    description: "Aprende a implementar etiquetas hreflang para sitios multilingües. Cubre la sintaxis, los errores comunes y las herramientas de prueba.",
    body: `<p>Las etiquetas hreflang indican a Google qué versión idiomática y regional de una página mostrar a los usuarios. Esenciales para sitios multilingües.</p><h2>Sintaxis</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Errores comunes</h2><ul><li>Faltan enlaces de retorno (hreflang debe ser bidireccional)</li><li>Códigos de idioma incorrectos</li><li>Falta x-default</li><li>Apuntar a URLs no canónicas</li></ul><h2>Genera URLs multilingües</h2><p><a href="%SLUG%">Generador de slugs de URL</a> para slugs limpios en todos los idiomas.</p>`,
  }),
  pt: build("pt", {
    title: "Tags hreflang: Guia completo de SEO multilíngue",
    description: "Aprenda a implementar tags hreflang para sites multilíngues. Cobre a sintaxe, os erros comuns e as ferramentas de teste.",
    body: `<p>As tags hreflang indicam ao Google qual versão linguística e regional de uma página mostrar aos usuários. Essenciais para sites multilíngues.</p><h2>Sintaxe</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Erros comuns</h2><ul><li>Faltam links de retorno (hreflang deve ser bidirecional)</li><li>Códigos de idioma errados</li><li>Falta x-default</li><li>Apontar para URLs não canônicas</li></ul><h2>Gere URLs multilíngues</h2><p><a href="%SLUG%">Gerador de slugs de URL</a> para slugs limpas em todos os idiomas.</p>`,
  }),
  fr: build("fr", {
    title: "Balises hreflang : Guide complet du SEO multilingue",
    description: "Apprenez à implémenter les balises hreflang pour les sites multilingues. Couvre la syntaxe, les erreurs courantes et les outils de test.",
    body: `<p>Les balises hreflang indiquent à Google quelle version linguistique et régionale d'une page afficher aux utilisateurs. Essentielles pour les sites multilingues.</p><h2>Syntaxe</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;
&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Erreurs courantes</h2><ul><li>Liens de retour manquants (hreflang doit être bidirectionnel)</li><li>Codes de langue erronés</li><li>x-default manquant</li><li>Pointer vers des URLs non canoniques</li></ul><h2>Générez des URLs multilingues</h2><p><a href="%SLUG%">Générateur de slugs d'URL</a> pour des slugs propres dans toutes les langues.</p>`,
  }),
};
