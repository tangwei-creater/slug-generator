import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "internal-linking-strategy-seo", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Internal Linking Strategy for SEO: A Complete Guide",
    description: "Learn how to build an effective internal linking strategy that distributes link equity and improves crawlability.",
    body: `<p>Internal links are hyperlinks that point to other pages on the same website. They're one of the most underutilized SEO tools.</p><h2>Why Internal Links Matter</h2><ul><li>Distribute link equity (PageRank) across your site</li><li>Help Google discover and index new pages</li><li>Establish content hierarchy and topical relationships</li><li>Keep users engaged and reduce bounce rate</li></ul><h2>Strategy Framework</h2><ol><li><strong>Pillar and cluster:</strong> Create hub pages that link to related subtopic pages</li><li><strong>Contextual links:</strong> Link naturally within body content, not just navigation</li><li><strong>Descriptive anchor text:</strong> Use keyword-relevant text, not "click here"</li><li><strong>Reasonable quantity:</strong> 3-10 internal links per 1000 words</li><li><strong>Link to deep pages:</strong> Don't only link to your homepage and main pages</li><li><strong>Fix broken links:</strong> Audit regularly for 404s</li></ol><h2>Tools</h2><p>Generate clean URLs with our <a href="%SLUG%">URL slug generator</a>. Try our <a href="%HUB%">case converter hub</a> for formatting.</p>`,
  }),
  ja: build("ja", {
    title: "SEOのための内部リンク戦略：完全ガイド",
    description: "リンクエクイティを分配し、クロール性を高める効果的な内部リンク戦略の作り方を学びましょう。",
    body: `<p>内部リンクとは、同じウェブサイト内の別のページを指すハイパーリンクです。最も活用されていないSEOツールの一つです。</p><h2>内部リンクが重要な理由</h2><ul><li>サイト全体にリンクエクイティ(PageRank)を分配する</li><li>Googleが新しいページを発見・インデックスするのを助ける</li><li>コンテンツの階層とトピックの関連性を確立する</li><li>ユーザーの関心を維持し、直帰率を下げる</li></ul><h2>戦略フレームワーク</h2><ol><li><strong>ピラーとクラスター:</strong> 関連するサブトピックページにリンクするハブページを作る</li><li><strong>文脈リンク:</strong> ナビゲーションだけでなく、本文の中で自然にリンクする</li><li><strong>説明的なアンカーテキスト:</strong> 「こちらをクリック」ではなく、キーワードに関連したテキストを使う</li><li><strong>適切な数量:</strong> 1000語あたり3〜10本の内部リンク</li><li><strong>深い階層のページにもリンクする:</strong> ホームページやメインページだけにリンクしない</li><li><strong>リンク切れを修正する:</strong> 定期的に404を監査する</li></ol><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>でクリーンなURLを生成しましょう。フォーマットには<a href="%HUB%">ケース変換ハブ</a>をお試しください。</p>`,
  }),
  de: build("de", {
    title: "Interne Verlinkungsstrategie für SEO: Vollständiger Guide",
    description: "Lernen Sie, eine effektive interne Verlinkungsstrategie aufzubauen, die Link-Equity verteilt und die Crawlbarkeit verbessert.",
    body: `<p>Interne Links sind Hyperlinks, die auf andere Seiten derselben Website verweisen. Sie gehören zu den am wenigsten genutzten SEO-Werkzeugen.</p><h2>Warum interne Links wichtig sind</h2><ul><li>Verteilen Link-Equity (PageRank) über Ihre Website</li><li>Helfen Google, neue Seiten zu entdecken und zu indexieren</li><li>Etablieren Content-Hierarchie und thematische Beziehungen</li><li>Halten Nutzer auf der Seite und senken die Absprungrate</li></ul><h2>Strategie-Framework</h2><ol><li><strong>Pillar und Cluster:</strong> Erstellen Sie Hub-Seiten, die auf verwandte Unterthemen-Seiten verlinken</li><li><strong>Kontextuelle Links:</strong> Verlinken Sie natürlich im Fließtext, nicht nur in der Navigation</li><li><strong>Beschreibender Ankertext:</strong> Verwenden Sie keyword-relevanten Text, nicht „hier klicken"</li><li><strong>Angemessene Menge:</strong> 3-10 interne Links pro 1000 Wörter</li><li><strong>Auf tiefe Seiten verlinken:</strong> Verlinken Sie nicht nur Startseite und Hauptseiten</li><li><strong>Defekte Links reparieren:</strong> Prüfen Sie regelmäßig auf 404-Fehler</li></ol><h2>Werkzeuge</h2><p>Erstellen Sie saubere URLs mit unserem <a href="%SLUG%">URL-Slug-Generator</a>. Probieren Sie für die Formatierung unseren <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Estrategia de enlaces internos para SEO: Guía completa",
    description: "Aprende a construir una estrategia de enlaces internos eficaz que distribuya el link equity y mejore la rastreabilidad.",
    body: `<p>Los enlaces internos son hipervínculos que apuntan a otras páginas del mismo sitio web. Son una de las herramientas SEO más infrautilizadas.</p><h2>Por qué importan los enlaces internos</h2><ul><li>Distribuyen el link equity (PageRank) por todo tu sitio</li><li>Ayudan a Google a descubrir e indexar páginas nuevas</li><li>Establecen la jerarquía de contenido y las relaciones temáticas</li><li>Mantienen a los usuarios interesados y reducen la tasa de rebote</li></ul><h2>Marco de estrategia</h2><ol><li><strong>Pilar y clúster:</strong> Crea páginas hub que enlacen a páginas de subtemas relacionados</li><li><strong>Enlaces contextuales:</strong> Enlaza de forma natural dentro del contenido, no solo en la navegación</li><li><strong>Texto ancla descriptivo:</strong> Usa texto relevante a la palabra clave, no «haz clic aquí»</li><li><strong>Cantidad razonable:</strong> 3-10 enlaces internos por cada 1000 palabras</li><li><strong>Enlaza a páginas profundas:</strong> No enlaces solo a tu página de inicio y páginas principales</li><li><strong>Corrige enlaces rotos:</strong> Audita regularmente en busca de errores 404</li></ol><h2>Herramientas</h2><p>Genera URLs limpias con nuestro <a href="%SLUG%">generador de slugs de URL</a>. Prueba nuestro <a href="%HUB%">hub de conversión de mayúsculas y minúsculas</a> para el formato.</p>`,
  }),
  pt: build("pt", {
    title: "Estratégia de links internos para SEO: Guia completo",
    description: "Aprenda a construir uma estratégia de links internos eficaz que distribui link equity e melhora a rastreabilidade.",
    body: `<p>Links internos são hiperlinks que apontam para outras páginas do mesmo site. Eles são uma das ferramentas de SEO mais subutilizadas.</p><h2>Por que os links internos importam</h2><ul><li>Distribuem link equity (PageRank) por todo o seu site</li><li>Ajudam o Google a descobrir e indexar páginas novas</li><li>Estabelecem a hierarquia de conteúdo e as relações temáticas</li><li>Mantêm os usuários engajados e reduzem a taxa de rejeição</li></ul><h2>Estrutura da estratégia</h2><ol><li><strong>Pilar e cluster:</strong> Crie páginas hub que apontem para páginas de subtópicos relacionados</li><li><strong>Links contextuais:</strong> Faça links de forma natural no corpo do conteúdo, não apenas na navegação</li><li><strong>Texto âncora descritivo:</strong> Use texto relevante à palavra-chave, não "clique aqui"</li><li><strong>Quantidade razoável:</strong> 3-10 links internos por 1000 palavras</li><li><strong>Faça links para páginas profundas:</strong> Não aponte apenas para a sua página inicial e páginas principais</li><li><strong>Corrija links quebrados:</strong> Audite regularmente em busca de erros 404</li></ol><h2>Ferramentas</h2><p>Gere URLs limpas com o nosso <a href="%SLUG%">gerador de slugs de URL</a>. Experimente o nosso <a href="%HUB%">hub de conversão de maiúsculas e minúsculas</a> para a formatação.</p>`,
  }),
  fr: build("fr", {
    title: "Stratégie de maillage interne pour le SEO : Guide complet",
    description: "Apprenez à construire une stratégie de maillage interne efficace qui distribue le link equity et améliore la crawlabilité.",
    body: `<p>Les liens internes sont des hyperliens qui pointent vers d'autres pages du même site web. Ils comptent parmi les outils SEO les plus sous-utilisés.</p><h2>Pourquoi les liens internes comptent</h2><ul><li>Distribuent le link equity (PageRank) à travers votre site</li><li>Aident Google à découvrir et indexer de nouvelles pages</li><li>Établissent la hiérarchie du contenu et les relations thématiques</li><li>Maintiennent l'engagement des utilisateurs et réduisent le taux de rebond</li></ul><h2>Cadre stratégique</h2><ol><li><strong>Pilier et cluster :</strong> Créez des pages hub qui renvoient vers des pages de sous-thèmes connexes</li><li><strong>Liens contextuels :</strong> Liez naturellement dans le corps du contenu, pas seulement dans la navigation</li><li><strong>Texte d'ancrage descriptif :</strong> Utilisez un texte pertinent par rapport au mot-clé, pas « cliquez ici »</li><li><strong>Quantité raisonnable :</strong> 3 à 10 liens internes pour 1000 mots</li><li><strong>Liez vers des pages profondes :</strong> Ne liez pas uniquement votre page d'accueil et vos pages principales</li><li><strong>Corrigez les liens cassés :</strong> Auditez régulièrement les erreurs 404</li></ol><h2>Outils</h2><p>Générez des URLs propres avec notre <a href="%SLUG%">générateur de slugs d'URL</a>. Essayez notre <a href="%HUB%">hub de conversion de casse</a> pour le formatage.</p>`,
  }),
};
