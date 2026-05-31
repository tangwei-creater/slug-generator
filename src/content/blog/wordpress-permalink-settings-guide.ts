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
    title: "WordPressパーマリンク設定：完全ガイド",
    description: "WordPressパーマリンク設定の最適な構成方法。",
    body: `<p>パーマリンク設定はサイト全体のURL構造を決定します。「投稿名」が最もSEOに有利。</p><h2>ツール</h2><p><a href="%WP%">WordPressスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "WordPress-Permalink-Einstellungen: Vollständiger Guide",
    description: "WordPress-Permalink-Konfiguration für optimales SEO.",
    body: `<p>Permalink-Einstellungen bestimmen die URL-Struktur. "Beitragsname" ist am besten.</p>`,
  }),
  es: build("es", {
    title: "Configuración de permalinks en WordPress: Guía completa",
    description: "Configuración de permalinks WordPress para SEO óptimo.",
    body: `<p>Los permalinks determinan la estructura URL. "Nombre de la entrada" es la mejor opción.</p>`,
  }),
  pt: build("pt", {
    title: "Configurações de permalinks do WordPress: Guia completo",
    description: "Configuração de permalinks WordPress para SEO ótimo.",
    body: `<p>Permalinks determinam a estrutura URL. "Nome do post" é a melhor opção.</p>`,
  }),
  fr: build("fr", {
    title: "Paramètres de permaliens WordPress : Guide complet",
    description: "Configuration des permaliens WordPress pour un SEO optimal.",
    body: `<p>Les permaliens déterminent la structure URL. "Nom de l'article" est le meilleur choix.</p>`,
  }),
};
