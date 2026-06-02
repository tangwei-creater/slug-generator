import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "wix-url-slug-optimization", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Wix URL Slug Optimization: How to Edit and Improve Your URLs",
    description: "Learn how to customize URL slugs in Wix for better SEO and user experience.",
    body: `<p>Wix auto-generates URL slugs from page titles but allows manual editing for optimization.</p><h2>How to Edit</h2><ol><li>Go to the page in the Wix Editor</li><li>Click the page settings (gear icon)</li><li>Under "SEO (Google)", edit the URL slug</li><li>Use lowercase, hyphens, and target keywords</li></ol><h2>Wix URL Limitations</h2><ul><li>Dynamic pages have fixed URL patterns</li><li>Blog URLs include <code>/post/</code> prefix</li><li>Cannot fully customize URL structure like self-hosted sites</li></ul><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> for clean, keyword-optimized slugs.</p>`,
  }),
  ja: build("ja", {
    title: "WixのURLスラッグ最適化：URLを編集・改善する方法",
    description: "WixでURLスラッグをカスタマイズして、SEOとユーザー体験を向上させる方法を解説します。",
    body: `<p>Wixはページタイトルからスラッグを自動生成しますが、最適化のために手動編集が可能です。</p>
<h2>編集方法</h2>
<ol>
<li>Wixエディターでページを開く</li>
<li>ページ設定（歯車アイコン）をクリック</li>
<li>「SEO（Google）」でURLスラッグを編集</li>
<li>小文字、ハイフン、ターゲットキーワードを使用</li>
</ol>
<h2>WixのURL制限</h2>
<ul>
<li>動的ページには固定のURLパターンがある</li>
<li>ブログURLには<code>/post/</code>プレフィックスが含まれる</li>
<li>セルフホスティングサイトのように完全なURL構造のカスタマイズは不可</li>
</ul>
<h2>スラッグを生成</h2>
<p>クリーンでキーワード最適化されたスラッグには<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Wix URL-Slug-Optimierung: URLs bearbeiten und verbessern",
    description: "Erfahren Sie, wie Sie URL-Slugs in Wix für besseres SEO und Nutzererlebnis anpassen.",
    body: `<p>Wix generiert URL-Slugs automatisch aus Seitentiteln, ermöglicht aber manuelle Bearbeitung zur Optimierung.</p>
<h2>Bearbeitung</h2>
<ol>
<li>Gehen Sie zur Seite im Wix-Editor</li>
<li>Klicken Sie auf die Seiteneinstellungen (Zahnrad-Symbol)</li>
<li>Unter „SEO (Google)" den URL-Slug bearbeiten</li>
<li>Verwenden Sie Kleinbuchstaben, Bindestriche und Ziel-Keywords</li>
</ol>
<h2>Wix URL-Einschränkungen</h2>
<ul>
<li>Dynamische Seiten haben feste URL-Muster</li>
<li>Blog-URLs enthalten den <code>/post/</code>-Präfix</li>
<li>Die URL-Struktur kann nicht vollständig wie bei selbst gehosteten Sites angepasst werden</li>
</ul>
<h2>Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> für saubere, keyword-optimierte Slugs.</p>`,
  }),
  es: build("es", {
    title: "Optimización de slugs URL en Wix: Cómo editar y mejorar tus URLs",
    description: "Aprende a personalizar los slugs de URL en Wix para mejorar el SEO y la experiencia del usuario.",
    body: `<p>Wix genera automáticamente los slugs de URL a partir de los títulos de página, pero permite la edición manual para optimización.</p>
<h2>Cómo editar</h2>
<ol>
<li>Ve a la página en el Editor de Wix</li>
<li>Haz clic en la configuración de página (icono de engranaje)</li>
<li>En "SEO (Google)", edita el slug de URL</li>
<li>Usa minúsculas, guiones y palabras clave objetivo</li>
</ol>
<h2>Limitaciones URL de Wix</h2>
<ul>
<li>Las páginas dinámicas tienen patrones URL fijos</li>
<li>Las URLs de blog incluyen el prefijo <code>/post/</code></li>
<li>No se puede personalizar completamente la estructura URL como en sitios self-hosted</li>
</ul>
<h2>Genera slugs</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> para slugs limpios y optimizados con palabras clave.</p>`,
  }),
  pt: build("pt", {
    title: "Otimização de slugs URL no Wix: Como editar e melhorar suas URLs",
    description: "Aprenda a personalizar slugs de URL no Wix para melhorar o SEO e a experiência do usuário.",
    body: `<p>O Wix gera automaticamente os slugs de URL a partir dos títulos das páginas, mas permite edição manual para otimização.</p>
<h2>Como editar</h2>
<ol>
<li>Vá até a página no Editor do Wix</li>
<li>Clique nas configurações da página (ícone de engrenagem)</li>
<li>Em "SEO (Google)", edite o slug da URL</li>
<li>Use minúsculas, hífens e palavras-chave alvo</li>
</ol>
<h2>Limitações URL do Wix</h2>
<ul>
<li>Páginas dinâmicas têm padrões URL fixos</li>
<li>URLs de blog incluem o prefixo <code>/post/</code></li>
<li>Não é possível personalizar totalmente a estrutura URL como em sites self-hosted</li>
</ul>
<h2>Gere slugs</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> para slugs limpos e otimizados com palavras-chave.</p>`,
  }),
  fr: build("fr", {
    title: "Optimisation des slugs URL dans Wix : comment modifier et améliorer vos URLs",
    description: "Apprenez à personnaliser les slugs d'URL dans Wix pour un meilleur SEO et une meilleure expérience utilisateur.",
    body: `<p>Wix génère automatiquement les slugs d'URL à partir des titres de page, mais permet la modification manuelle pour l'optimisation.</p>
<h2>Comment modifier</h2>
<ol>
<li>Allez sur la page dans l'Éditeur Wix</li>
<li>Cliquez sur les paramètres de page (icône d'engrenage)</li>
<li>Sous « SEO (Google) », modifiez le slug d'URL</li>
<li>Utilisez des minuscules, des tirets et des mots-clés cibles</li>
</ol>
<h2>Limitations URL de Wix</h2>
<ul>
<li>Les pages dynamiques ont des modèles URL fixes</li>
<li>Les URLs de blog incluent le préfixe <code>/post/</code></li>
<li>Impossible de personnaliser entièrement la structure URL comme sur les sites auto-hébergés</li>
</ul>
<h2>Générez des slugs</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> pour des slugs propres et optimisés pour les mots-clés.</p>`,
  }),
};
