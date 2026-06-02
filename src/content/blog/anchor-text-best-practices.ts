import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "anchor-text-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Anchor Text Best Practices: Types, Examples, and SEO Impact",
    description: "Learn anchor text types, best practices, and how to optimize your internal and external link text for SEO.",
    body: `<p>Anchor text is the clickable text in a hyperlink. It tells search engines what the linked page is about.</p><h2>Types of Anchor Text</h2><table><thead><tr><th>Type</th><th>Example</th><th>SEO Value</th></tr></thead><tbody><tr><td>Exact match</td><td><code><a>snake case converter</a></code></td><td>High (use sparingly)</td></tr><tr><td>Partial match</td><td><code><a>convert to snake case</a></code></td><td>High (safest)</td></tr><tr><td>Branded</td><td><code><a>SlugGenerator.app</a></code></td><td>Medium</td></tr><tr><td>Generic</td><td><code><a>click here</a></code></td><td>Low</td></tr><tr><td>Naked URL</td><td><code><a>sluggenerator.app</a></code></td><td>Low</td></tr></tbody></table><h2>Best Practices</h2><ul><li>Use descriptive, keyword-rich anchor text</li><li>Vary your anchor text — avoid exact-match overuse</li><li>Make it natural within the sentence</li><li>Avoid generic text like "click here" or "read more"</li></ul><p>Start with clean URLs using our <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "アンカーテキストのベストプラクティス：種類と例",
    description: "アンカーテキストの種類、ベストプラクティス、そして内部・外部リンクのテキストをSEO向けに最適化する方法を学びましょう。",
    body: `<p>アンカーテキストとはハイパーリンクのクリック可能なテキストです。リンク先のページが何についてのものかを検索エンジンに伝えます。</p><h2>アンカーテキストの種類</h2><table><thead><tr><th>種類</th><th>例</th><th>SEO価値</th></tr></thead><tbody><tr><td>完全一致</td><td><code><a>スネークケース変換ツール</a></code></td><td>高(控えめに使用)</td></tr><tr><td>部分一致</td><td><code><a>スネークケースに変換</a></code></td><td>高(最も安全)</td></tr><tr><td>ブランド</td><td><code><a>SlugGenerator.app</a></code></td><td>中</td></tr><tr><td>汎用</td><td><code><a>こちらをクリック</a></code></td><td>低</td></tr><tr><td>裸のURL</td><td><code><a>sluggenerator.app</a></code></td><td>低</td></tr></tbody></table><h2>ベストプラクティス</h2><ul><li>説明的でキーワードを含むアンカーテキストを使う</li><li>アンカーテキストを多様化し、完全一致の使いすぎを避ける</li><li>文章の中で自然になるようにする</li><li>「こちらをクリック」「続きを読む」のような汎用的なテキストを避ける</li></ul><p>まずは<a href="%SLUG%">URLスラッグジェネレーター</a>でクリーンなURLを作りましょう。</p>`,
  }),
  de: build("de", {
    title: "Ankertext Best Practices: Typen, Beispiele und SEO",
    description: "Lernen Sie Ankertext-Typen, Best Practices und wie Sie interne und externe Linktexte für SEO optimieren.",
    body: `<p>Ankertext ist der klickbare Text in einem Hyperlink. Er sagt Suchmaschinen, worum es auf der verlinkten Seite geht.</p><h2>Arten von Ankertext</h2><table><thead><tr><th>Typ</th><th>Beispiel</th><th>SEO-Wert</th></tr></thead><tbody><tr><td>Exakte Übereinstimmung</td><td><code><a>Snake-Case-Konverter</a></code></td><td>Hoch (sparsam verwenden)</td></tr><tr><td>Teilweise Übereinstimmung</td><td><code><a>in Snake Case umwandeln</a></code></td><td>Hoch (am sichersten)</td></tr><tr><td>Markenbezogen</td><td><code><a>SlugGenerator.app</a></code></td><td>Mittel</td></tr><tr><td>Generisch</td><td><code><a>hier klicken</a></code></td><td>Niedrig</td></tr><tr><td>Nackte URL</td><td><code><a>sluggenerator.app</a></code></td><td>Niedrig</td></tr></tbody></table><h2>Best Practices</h2><ul><li>Verwenden Sie beschreibenden, keyword-reichen Ankertext</li><li>Variieren Sie Ihren Ankertext — vermeiden Sie übermäßige exakte Übereinstimmungen</li><li>Gestalten Sie ihn natürlich im Satz</li><li>Vermeiden Sie generischen Text wie „hier klicken" oder „mehr lesen"</li></ul><p>Beginnen Sie mit sauberen URLs über unseren <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Mejores prácticas de texto ancla: Tipos, ejemplos y SEO",
    description: "Aprende los tipos de texto ancla, las mejores prácticas y cómo optimizar el texto de tus enlaces internos y externos para SEO.",
    body: `<p>El texto ancla es el texto en el que se puede hacer clic dentro de un hipervínculo. Indica a los buscadores de qué trata la página enlazada.</p><h2>Tipos de texto ancla</h2><table><thead><tr><th>Tipo</th><th>Ejemplo</th><th>Valor SEO</th></tr></thead><tbody><tr><td>Coincidencia exacta</td><td><code><a>conversor a snake case</a></code></td><td>Alto (usar con moderación)</td></tr><tr><td>Coincidencia parcial</td><td><code><a>convertir a snake case</a></code></td><td>Alto (más seguro)</td></tr><tr><td>De marca</td><td><code><a>SlugGenerator.app</a></code></td><td>Medio</td></tr><tr><td>Genérico</td><td><code><a>haz clic aquí</a></code></td><td>Bajo</td></tr><tr><td>URL desnuda</td><td><code><a>sluggenerator.app</a></code></td><td>Bajo</td></tr></tbody></table><h2>Mejores prácticas</h2><ul><li>Usa texto ancla descriptivo y rico en palabras clave</li><li>Varía tu texto ancla — evita abusar de la coincidencia exacta</li><li>Haz que sea natural dentro de la frase</li><li>Evita texto genérico como «haz clic aquí» o «leer más»</li></ul><p>Empieza con URLs limpias usando nuestro <a href="%SLUG%">generador de slugs de URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Melhores práticas de texto âncora: Tipos, exemplos e SEO",
    description: "Aprenda os tipos de texto âncora, as melhores práticas e como otimizar o texto dos seus links internos e externos para SEO.",
    body: `<p>O texto âncora é o texto clicável de um hiperlink. Ele diz aos buscadores sobre o que é a página vinculada.</p><h2>Tipos de texto âncora</h2><table><thead><tr><th>Tipo</th><th>Exemplo</th><th>Valor SEO</th></tr></thead><tbody><tr><td>Correspondência exata</td><td><code><a>conversor para snake case</a></code></td><td>Alto (usar com moderação)</td></tr><tr><td>Correspondência parcial</td><td><code><a>converter para snake case</a></code></td><td>Alto (mais seguro)</td></tr><tr><td>De marca</td><td><code><a>SlugGenerator.app</a></code></td><td>Médio</td></tr><tr><td>Genérico</td><td><code><a>clique aqui</a></code></td><td>Baixo</td></tr><tr><td>URL nua</td><td><code><a>sluggenerator.app</a></code></td><td>Baixo</td></tr></tbody></table><h2>Melhores práticas</h2><ul><li>Use texto âncora descritivo e rico em palavras-chave</li><li>Varie seu texto âncora — evite o uso excessivo de correspondência exata</li><li>Torne-o natural dentro da frase</li><li>Evite texto genérico como "clique aqui" ou "leia mais"</li></ul><p>Comece com URLs limpas usando o nosso <a href="%SLUG%">gerador de slugs de URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Bonnes pratiques de texte d'ancrage : Types, exemples et SEO",
    description: "Apprenez les types de texte d'ancrage, les bonnes pratiques et comment optimiser le texte de vos liens internes et externes pour le SEO.",
    body: `<p>Le texte d'ancrage est le texte cliquable d'un hyperlien. Il indique aux moteurs de recherche le sujet de la page liée.</p><h2>Types de texte d'ancrage</h2><table><thead><tr><th>Type</th><th>Exemple</th><th>Valeur SEO</th></tr></thead><tbody><tr><td>Correspondance exacte</td><td><code><a>convertisseur snake case</a></code></td><td>Élevée (à utiliser avec parcimonie)</td></tr><tr><td>Correspondance partielle</td><td><code><a>convertir en snake case</a></code></td><td>Élevée (la plus sûre)</td></tr><tr><td>De marque</td><td><code><a>SlugGenerator.app</a></code></td><td>Moyenne</td></tr><tr><td>Générique</td><td><code><a>cliquez ici</a></code></td><td>Faible</td></tr><tr><td>URL brute</td><td><code><a>sluggenerator.app</a></code></td><td>Faible</td></tr></tbody></table><h2>Bonnes pratiques</h2><ul><li>Utilisez un texte d'ancrage descriptif et riche en mots-clés</li><li>Variez votre texte d'ancrage — évitez la surutilisation de la correspondance exacte</li><li>Rendez-le naturel dans la phrase</li><li>Évitez les textes génériques comme « cliquez ici » ou « lire la suite »</li></ul><p>Commencez avec des URLs propres grâce à notre <a href="%SLUG%">générateur de slugs d'URL</a>.</p>`,
  }),
};
