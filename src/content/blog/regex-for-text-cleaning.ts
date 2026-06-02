import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "regex-for-text-cleaning", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Regex for Text Cleaning: 15 Essential Patterns",
    description: "The most useful regular expressions for cleaning text data: whitespace, HTML, URLs, emails, special characters, and more.",
    body: `<p>Regular expressions are the Swiss Army knife of text cleaning. Here are the 15 patterns every developer should know.</p><h2>Essential Patterns</h2><table><thead><tr><th>Task</th><th>Regex</th></tr></thead><tbody><tr><td>Strip HTML tags</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr><tr><td>Collapse whitespace</td><td><code>\\s+</code> → <code> </code></td></tr><tr><td>Remove URLs</td><td><code>https?://\\S+</code></td></tr><tr><td>Remove emails</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr><tr><td>Remove numbers</td><td><code>\\d+</code></td></tr><tr><td>Remove non-ASCII</td><td><code>[^\\x00-\\x7F]</code></td></tr><tr><td>Remove punctuation</td><td><code>[^\\w\\s]</code></td></tr><tr><td>Trim each line</td><td><code>^\\s+|\\s+\$</code> (multiline)</td></tr><tr><td>Remove blank lines</td><td><code>^\\s*\$\\n</code> (multiline)</td></tr><tr><td>Remove duplicate spaces</td><td><code> {2,}</code> → <code> </code></td></tr></tbody></table><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> — it applies these patterns with toggleable options, no regex knowledge needed.</p>`,
  }),
  ja: build("ja", {
    title: "テキストクリーニングのための正規表現：必須15パターン",
    description: "テキストデータクリーニングに最も役立つ正規表現パターン集：空白、HTML、URL、メール、特殊文字などの処理方法。",
    body: `<p>正規表現はテキストクリーニングの万能ツールです。すべての開発者が知っておくべき15のパターンを紹介します。</p>
<h2>必須パターン</h2>
<table><thead><tr><th>タスク</th><th>正規表現</th></tr></thead><tbody>
<tr><td>HTMLタグの除去</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr>
<tr><td>空白の圧縮</td><td><code>\\s+</code> → <code> </code></td></tr>
<tr><td>URLの除去</td><td><code>https?://\\S+</code></td></tr>
<tr><td>メールアドレスの除去</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr>
<tr><td>数字の除去</td><td><code>\\d+</code></td></tr>
<tr><td>非ASCIIの除去</td><td><code>[^\\x00-\\x7F]</code></td></tr>
<tr><td>句読点の除去</td><td><code>[^\\w\\s]</code></td></tr>
<tr><td>各行のトリム</td><td><code>^\\s+|\\s+\$</code>（multiline）</td></tr>
<tr><td>空行の除去</td><td><code>^\\s*\$\\n</code>（multiline）</td></tr>
<tr><td>重複スペースの除去</td><td><code> {2,}</code> → <code> </code></td></tr>
</tbody></table>
<h2>オンラインツール</h2>
<p><a href="%CLEAN%">プレーンテキストコンバーター</a>なら、正規表現の知識がなくても、これらのパターンをトグルオプションで適用できます。</p>`,
  }),
  de: build("de", {
    title: "Regex für Textbereinigung: 15 essentielle Muster",
    description: "Die nützlichsten regulären Ausdrücke zur Bereinigung von Textdaten: Leerzeichen, HTML, URLs, E-Mails, Sonderzeichen und mehr.",
    body: `<p>Reguläre Ausdrücke sind das Schweizer Taschenmesser der Textbereinigung. Hier sind die 15 Muster, die jeder Entwickler kennen sollte.</p>
<h2>Essentielle Muster</h2>
<table><thead><tr><th>Aufgabe</th><th>Regex</th></tr></thead><tbody>
<tr><td>HTML-Tags entfernen</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr>
<tr><td>Leerzeichen zusammenfassen</td><td><code>\\s+</code> → <code> </code></td></tr>
<tr><td>URLs entfernen</td><td><code>https?://\\S+</code></td></tr>
<tr><td>E-Mails entfernen</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr>
<tr><td>Zahlen entfernen</td><td><code>\\d+</code></td></tr>
<tr><td>Nicht-ASCII entfernen</td><td><code>[^\\x00-\\x7F]</code></td></tr>
<tr><td>Satzzeichen entfernen</td><td><code>[^\\w\\s]</code></td></tr>
<tr><td>Jede Zeile trimmen</td><td><code>^\\s+|\\s+\$</code> (multiline)</td></tr>
<tr><td>Leerzeilen entfernen</td><td><code>^\\s*\$\\n</code> (multiline)</td></tr>
<tr><td>Doppelte Leerzeichen entfernen</td><td><code> {2,}</code> → <code> </code></td></tr>
</tbody></table>
<h2>Online-Tool</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a> — er wendet diese Muster mit umschaltbaren Optionen an, ohne Regex-Kenntnisse.</p>`,
  }),
  es: build("es", {
    title: "Regex para limpieza de texto: 15 patrones esenciales",
    description: "Las expresiones regulares más útiles para limpiar datos de texto: espacios en blanco, HTML, URLs, emails, caracteres especiales y más.",
    body: `<p>Las expresiones regulares son la navaja suiza de la limpieza de texto. Aquí están los 15 patrones que todo desarrollador debería conocer.</p>
<h2>Patrones esenciales</h2>
<table><thead><tr><th>Tarea</th><th>Regex</th></tr></thead><tbody>
<tr><td>Eliminar etiquetas HTML</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr>
<tr><td>Colapsar espacios en blanco</td><td><code>\\s+</code> → <code> </code></td></tr>
<tr><td>Eliminar URLs</td><td><code>https?://\\S+</code></td></tr>
<tr><td>Eliminar emails</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr>
<tr><td>Eliminar números</td><td><code>\\d+</code></td></tr>
<tr><td>Eliminar no-ASCII</td><td><code>[^\\x00-\\x7F]</code></td></tr>
<tr><td>Eliminar puntuación</td><td><code>[^\\w\\s]</code></td></tr>
<tr><td>Recortar cada línea</td><td><code>^\\s+|\\s+\$</code> (multiline)</td></tr>
<tr><td>Eliminar líneas en blanco</td><td><code>^\\s*\$\\n</code> (multiline)</td></tr>
<tr><td>Eliminar espacios duplicados</td><td><code> {2,}</code> → <code> </code></td></tr>
</tbody></table>
<h2>Herramienta online</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> — aplica estos patrones con opciones activables, sin necesidad de conocer regex.</p>`,
  }),
  pt: build("pt", {
    title: "Regex para limpeza de texto: 15 padrões essenciais",
    description: "As expressões regulares mais úteis para limpar dados de texto: espaços, HTML, URLs, emails, caracteres especiais e mais.",
    body: `<p>Expressões regulares são o canivete suíço da limpeza de texto. Aqui estão os 15 padrões que todo desenvolvedor deveria conhecer.</p>
<h2>Padrões essenciais</h2>
<table><thead><tr><th>Tarefa</th><th>Regex</th></tr></thead><tbody>
<tr><td>Remover tags HTML</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr>
<tr><td>Colapsar espaços em branco</td><td><code>\\s+</code> → <code> </code></td></tr>
<tr><td>Remover URLs</td><td><code>https?://\\S+</code></td></tr>
<tr><td>Remover emails</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr>
<tr><td>Remover números</td><td><code>\\d+</code></td></tr>
<tr><td>Remover não-ASCII</td><td><code>[^\\x00-\\x7F]</code></td></tr>
<tr><td>Remover pontuação</td><td><code>[^\\w\\s]</code></td></tr>
<tr><td>Aparar cada linha</td><td><code>^\\s+|\\s+\$</code> (multiline)</td></tr>
<tr><td>Remover linhas em branco</td><td><code>^\\s*\$\\n</code> (multiline)</td></tr>
<tr><td>Remover espaços duplicados</td><td><code> {2,}</code> → <code> </code></td></tr>
</tbody></table>
<h2>Ferramenta online</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> — aplica esses padrões com opções alternáveis, sem necessidade de conhecer regex.</p>`,
  }),
  fr: build("fr", {
    title: "Regex pour nettoyage de texte : 15 modèles essentiels",
    description: "Les expressions régulières les plus utiles pour nettoyer des données textuelles : espaces, HTML, URLs, emails, caractères spéciaux et plus.",
    body: `<p>Les expressions régulières sont le couteau suisse du nettoyage de texte. Voici les 15 modèles que tout développeur devrait connaître.</p>
<h2>Modèles essentiels</h2>
<table><thead><tr><th>Tâche</th><th>Regex</th></tr></thead><tbody>
<tr><td>Supprimer les balises HTML</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr>
<tr><td>Réduire les espaces</td><td><code>\\s+</code> → <code> </code></td></tr>
<tr><td>Supprimer les URLs</td><td><code>https?://\\S+</code></td></tr>
<tr><td>Supprimer les emails</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr>
<tr><td>Supprimer les nombres</td><td><code>\\d+</code></td></tr>
<tr><td>Supprimer les non-ASCII</td><td><code>[^\\x00-\\x7F]</code></td></tr>
<tr><td>Supprimer la ponctuation</td><td><code>[^\\w\\s]</code></td></tr>
<tr><td>Trim chaque ligne</td><td><code>^\\s+|\\s+\$</code> (multiline)</td></tr>
<tr><td>Supprimer les lignes vides</td><td><code>^\\s*\$\\n</code> (multiline)</td></tr>
<tr><td>Supprimer les espaces doubles</td><td><code> {2,}</code> → <code> </code></td></tr>
</tbody></table>
<h2>Outil en ligne</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> — il applique ces modèles avec des options activables, sans connaissance de regex nécessaire.</p>`,
  }),
};
