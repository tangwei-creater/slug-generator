import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "wordpress-permalink-settings-guide", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "WordPress Permalink Settings: Complete Configuration Guide",
    description: "Learn how to configure WordPress permalink settings for optimal SEO, including custom structures and category bases.",
    body: `<p>WordPress permalink settings determine the URL structure for your entire site. Getting them right from the start prevents painful migrations later.</p><h2>Available Structures</h2><table><thead><tr><th>Name</th><th>Pattern</th><th>SEO Impact</th></tr></thead><tbody><tr><td>Plain</td><td><code>?p=123</code></td><td>Worst — no keywords</td></tr><tr><td>Day and name</td><td><code>/2026/05/31/slug/</code></td><td>Bad — dates in URL</td></tr><tr><td>Month and name</td><td><code>/2026/05/slug/</code></td><td>Okay — still has dates</td></tr><tr><td>Post name</td><td><code>/slug/</code></td><td>Best — clean and short</td></tr><tr><td>Custom</td><td><code>/blog/%postname%/</code></td><td>Good — adds structure</td></tr></tbody></table><h2>Recommended: Post name</h2><p>Set to "Post name" (<code>/%postname%/</code>) for the cleanest, most SEO-friendly URLs.</p><h2>Generate Slugs</h2><p>Use our <a href="%WP%">WordPress slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "WordPressパーマリンク設定：完全構成ガイド",
    description: "カスタム構造やカテゴリベースを含む、最適なSEOのためのWordPressパーマリンク設定の構成方法を解説します。",
    body: `<p>WordPressのパーマリンク設定はサイト全体のURL構造を決定します。最初から正しく設定することで、後の面倒な移行を防げます。</p>
<h2>利用可能な構造</h2>
<table><thead><tr><th>名前</th><th>パターン</th><th>SEOへの影響</th></tr></thead><tbody>
<tr><td>基本</td><td><code>?p=123</code></td><td>最悪 — キーワードなし</td></tr>
<tr><td>日付と投稿名</td><td><code>/2026/05/31/slug/</code></td><td>悪い — URLに日付あり</td></tr>
<tr><td>月と投稿名</td><td><code>/2026/05/slug/</code></td><td>まあまあ — まだ日付あり</td></tr>
<tr><td>投稿名</td><td><code>/slug/</code></td><td>最良 — クリーンで短い</td></tr>
<tr><td>カスタム</td><td><code>/blog/%postname%/</code></td><td>良い — 構造を追加</td></tr>
</tbody></table>
<h2>推奨：投稿名</h2>
<p>最もクリーンでSEOフレンドリーなURLを得るには「投稿名」（<code>/%postname%/</code>）に設定してください。</p>
<h2>スラッグを生成</h2>
<p><a href="%WP%">WordPressスラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "WordPress-Permalink-Einstellungen: Vollständiger Konfigurationsguide",
    description: "Erfahren Sie, wie Sie WordPress-Permalink-Einstellungen für optimales SEO konfigurieren, einschließlich benutzerdefinierter Strukturen und Kategorie-Basen.",
    body: `<p>WordPress-Permalink-Einstellungen bestimmen die URL-Struktur Ihrer gesamten Site. Von Anfang an richtig eingestellt, vermeiden Sie schmerzhafte Migrationen.</p>
<h2>Verfügbare Strukturen</h2>
<table><thead><tr><th>Name</th><th>Muster</th><th>SEO-Auswirkung</th></tr></thead><tbody>
<tr><td>Einfach</td><td><code>?p=123</code></td><td>Am schlechtesten — keine Keywords</td></tr>
<tr><td>Tag und Name</td><td><code>/2026/05/31/slug/</code></td><td>Schlecht — Daten in URL</td></tr>
<tr><td>Monat und Name</td><td><code>/2026/05/slug/</code></td><td>Okay — noch Daten</td></tr>
<tr><td>Beitragsname</td><td><code>/slug/</code></td><td>Am besten — sauber und kurz</td></tr>
<tr><td>Benutzerdefiniert</td><td><code>/blog/%postname%/</code></td><td>Gut — fügt Struktur hinzu</td></tr>
</tbody></table>
<h2>Empfohlen: Beitragsname</h2>
<p>Stellen Sie auf „Beitragsname" (<code>/%postname%/</code>) für die saubersten, SEO-freundlichsten URLs.</p>
<h2>Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%WP%">WordPress-Slug-Generator</a> oder den <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Configuración de permalinks en WordPress: Guía completa de configuración",
    description: "Aprende a configurar los permalinks de WordPress para un SEO óptimo, incluyendo estructuras personalizadas y bases de categoría.",
    body: `<p>La configuración de permalinks de WordPress determina la estructura URL de todo tu sitio. Configurarlos correctamente desde el inicio evita migraciones dolorosas después.</p>
<h2>Estructuras disponibles</h2>
<table><thead><tr><th>Nombre</th><th>Patrón</th><th>Impacto SEO</th></tr></thead><tbody>
<tr><td>Simple</td><td><code>?p=123</code></td><td>Peor — sin palabras clave</td></tr>
<tr><td>Día y nombre</td><td><code>/2026/05/31/slug/</code></td><td>Malo — fechas en URL</td></tr>
<tr><td>Mes y nombre</td><td><code>/2026/05/slug/</code></td><td>Regular — aún tiene fechas</td></tr>
<tr><td>Nombre de entrada</td><td><code>/slug/</code></td><td>Mejor — limpio y corto</td></tr>
<tr><td>Personalizado</td><td><code>/blog/%postname%/</code></td><td>Bueno — añade estructura</td></tr>
</tbody></table>
<h2>Recomendado: Nombre de entrada</h2>
<p>Configura "Nombre de entrada" (<code>/%postname%/</code>) para las URLs más limpias y amigables para SEO.</p>
<h2>Genera slugs</h2>
<p>Usa nuestro <a href="%WP%">generador de slugs WordPress</a> o el <a href="%SLUG%">generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Configurações de permalinks do WordPress: Guia completo de configuração",
    description: "Aprenda a configurar as configurações de permalink do WordPress para SEO ideal, incluindo estruturas personalizadas e bases de categoria.",
    body: `<p>As configurações de permalink do WordPress determinam a estrutura URL de todo o seu site. Configurá-las corretamente desde o início evita migrações dolorosas depois.</p>
<h2>Estruturas disponíveis</h2>
<table><thead><tr><th>Nome</th><th>Padrão</th><th>Impacto SEO</th></tr></thead><tbody>
<tr><td>Simples</td><td><code>?p=123</code></td><td>Pior — sem palavras-chave</td></tr>
<tr><td>Dia e nome</td><td><code>/2026/05/31/slug/</code></td><td>Ruim — datas na URL</td></tr>
<tr><td>Mês e nome</td><td><code>/2026/05/slug/</code></td><td>OK — ainda tem datas</td></tr>
<tr><td>Nome do post</td><td><code>/slug/</code></td><td>Melhor — limpo e curto</td></tr>
<tr><td>Personalizado</td><td><code>/blog/%postname%/</code></td><td>Bom — adiciona estrutura</td></tr>
</tbody></table>
<h2>Recomendado: Nome do post</h2>
<p>Configure como "Nome do post" (<code>/%postname%/</code>) para as URLs mais limpas e amigáveis para SEO.</p>
<h2>Gere slugs</h2>
<p>Use nosso <a href="%WP%">gerador de slugs WordPress</a> ou o <a href="%SLUG%">gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Paramètres de permaliens WordPress : guide complet de configuration",
    description: "Apprenez à configurer les paramètres de permaliens WordPress pour un SEO optimal, y compris les structures personnalisées et les bases de catégorie.",
    body: `<p>Les paramètres de permaliens WordPress déterminent la structure URL de tout votre site. Les configurer correctement dès le départ évite des migrations douloureuses plus tard.</p>
<h2>Structures disponibles</h2>
<table><thead><tr><th>Nom</th><th>Modèle</th><th>Impact SEO</th></tr></thead><tbody>
<tr><td>Simple</td><td><code>?p=123</code></td><td>Le pire — pas de mots-clés</td></tr>
<tr><td>Jour et titre</td><td><code>/2026/05/31/slug/</code></td><td>Mauvais — dates dans l'URL</td></tr>
<tr><td>Mois et titre</td><td><code>/2026/05/slug/</code></td><td>Correct — encore des dates</td></tr>
<tr><td>Titre de la publication</td><td><code>/slug/</code></td><td>Le meilleur — propre et court</td></tr>
<tr><td>Personnalisé</td><td><code>/blog/%postname%/</code></td><td>Bon — ajoute de la structure</td></tr>
</tbody></table>
<h2>Recommandé : Titre de la publication</h2>
<p>Réglez sur « Titre de la publication » (<code>/%postname%/</code>) pour les URLs les plus propres et les plus SEO-friendly.</p>
<h2>Générez des slugs</h2>
<p>Utilisez notre <a href="%WP%">générateur de slugs WordPress</a> ou le <a href="%SLUG%">générateur de slugs URL</a>.</p>`,
  }),
};
