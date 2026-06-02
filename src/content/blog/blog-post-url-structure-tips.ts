import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "blog-post-url-structure-tips", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Blog Post URL Structure: 7 Tips for Better Rankings",
    description: "Quick tips for structuring blog post URLs that rank higher in search results.",
    body: `<p>Seven actionable tips for blog post URLs:</p><ol><li><strong>Use /blog/ prefix:</strong> <code>/blog/post-slug</code> — clear content hierarchy</li><li><strong>Include your keyword:</strong> Target keyword in the slug</li><li><strong>Skip dates:</strong> No <code>/2026/05/</code> in URLs</li><li><strong>Remove stop words:</strong> "a", "the", "and", "of", "in"</li><li><strong>Keep it short:</strong> 3-5 words max</li><li><strong>Lowercase + hyphens:</strong> Never underscores or mixed case</li><li><strong>Set before publishing:</strong> Changing later means redirect management</li></ol><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ブログ記事のURL構造：ランキング向上の7つのヒント",
    description: "検索結果で上位表示されるブログ記事URLの構造化に関する、すぐに実践できる7つのヒントを紹介します。",
    body: `<p>ブログ記事URLの7つの実践的ヒント：</p><ol><li><strong>/blog/プレフィックスを使う：</strong><code>/blog/post-slug</code> — 明確なコンテンツ階層</li><li><strong>キーワードを含める：</strong>スラッグにターゲットキーワードを入れる</li><li><strong>日付を省く：</strong>URLに<code>/2026/05/</code>を入れない</li><li><strong>ストップワードを削除する：</strong>「a」「the」「and」「of」「in」を除去</li><li><strong>短く保つ：</strong>最大3〜5語</li><li><strong>小文字+ハイフン：</strong>アンダースコアや大文字小文字の混在は避ける</li><li><strong>公開前に設定する：</strong>後から変更するとリダイレクト管理が必要になる</li></ol><h2>ブログスラッグを生成</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Blog-URL-Struktur: 7 Tipps für bessere Rankings",
    description: "Schnelle, umsetzbare Tipps für die Strukturierung von Blog-Post-URLs, die in Suchergebnissen besser ranken.",
    body: `<p>Sieben umsetzbare Tipps für Blog-Post-URLs:</p><ol><li><strong>/blog/-Präfix verwenden:</strong> <code>/blog/post-slug</code> — klare Inhaltshierarchie</li><li><strong>Keyword einbauen:</strong> Ziel-Keyword im Slug platzieren</li><li><strong>Daten weglassen:</strong> Kein <code>/2026/05/</code> in URLs</li><li><strong>Stoppwörter entfernen:</strong> „a", „the", „and", „of", „in"</li><li><strong>Kurz halten:</strong> Maximal 3-5 Wörter</li><li><strong>Kleinbuchstaben + Bindestriche:</strong> Niemals Unterstriche oder gemischte Groß-/Kleinschreibung</li><li><strong>Vor der Veröffentlichung festlegen:</strong> Spätere Änderungen bedeuten Redirect-Management</li></ol><h2>Blog-Slugs generieren</h2><p><a href="%BLOG%">Blog-Slug-Generator</a> oder <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL de blog: 7 consejos para mejores rankings",
    description: "Consejos rápidos y prácticos para estructurar URLs de artículos de blog que posicionen mejor en los resultados de búsqueda.",
    body: `<p>Siete consejos prácticos para URLs de artículos de blog:</p><ol><li><strong>Usa el prefijo /blog/:</strong> <code>/blog/post-slug</code> — jerarquía de contenido clara</li><li><strong>Incluye tu palabra clave:</strong> Palabra clave objetivo en el slug</li><li><strong>Omite las fechas:</strong> Nada de <code>/2026/05/</code> en las URLs</li><li><strong>Elimina las stop words:</strong> "a", "the", "and", "of", "in"</li><li><strong>Mantenlo corto:</strong> Máximo 3-5 palabras</li><li><strong>Minúsculas + guiones:</strong> Nunca guiones bajos ni mayúsculas mezcladas</li><li><strong>Configúralo antes de publicar:</strong> Cambiarlo después implica gestión de redirecciones</li></ol><h2>Genera slugs para blog</h2><p><a href="%BLOG%">Generador de slugs para blog</a> o <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL de blog: 7 dicas para melhores rankings",
    description: "Dicas rápidas e práticas para estruturar URLs de posts de blog que posicionem melhor nos resultados de busca.",
    body: `<p>Sete dicas práticas para URLs de posts de blog:</p><ol><li><strong>Use o prefixo /blog/:</strong> <code>/blog/post-slug</code> — hierarquia de conteúdo clara</li><li><strong>Inclua sua palavra-chave:</strong> Palavra-chave alvo no slug</li><li><strong>Pule as datas:</strong> Nada de <code>/2026/05/</code> nas URLs</li><li><strong>Remova as stop words:</strong> "a", "the", "and", "of", "in"</li><li><strong>Mantenha curto:</strong> Máximo 3-5 palavras</li><li><strong>Minúsculas + hífens:</strong> Nunca underscores ou maiúsculas/minúsculas misturadas</li><li><strong>Defina antes de publicar:</strong> Mudar depois significa gerenciar redirecionamentos</li></ol><h2>Gere slugs para blog</h2><p><a href="%BLOG%">Gerador de slugs para blog</a> ou <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL de blog : 7 conseils pour de meilleurs classements",
    description: "Conseils rapides et pratiques pour structurer les URLs d'articles de blog afin de mieux se positionner dans les résultats de recherche.",
    body: `<p>Sept conseils pratiques pour les URLs d'articles de blog :</p><ol><li><strong>Utilisez le préfixe /blog/ :</strong> <code>/blog/post-slug</code> — hiérarchie de contenu claire</li><li><strong>Incluez votre mot-clé :</strong> Mot-clé cible dans le slug</li><li><strong>Pas de dates :</strong> Pas de <code>/2026/05/</code> dans les URLs</li><li><strong>Supprimez les mots vides :</strong> « a », « the », « and », « of », « in »</li><li><strong>Restez concis :</strong> 3-5 mots maximum</li><li><strong>Minuscules + tirets :</strong> Jamais d'underscores ni de casse mixte</li><li><strong>Définissez avant de publier :</strong> Changer après implique la gestion des redirections</li></ol><h2>Générez des slugs de blog</h2><p><a href="%BLOG%">Générateur de slugs de blog</a> ou <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
