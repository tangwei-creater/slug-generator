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
    description: "テキストデータクリーニングに最も役立つ正規表現パターン集。",
    body: `<p>正規表現はテキストクリーニングの万能ツールです。15の必須パターンを紹介。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Regex für Textbereinigung: 15 essentielle Muster",
    description: "Die nützlichsten regulären Ausdrücke für Textbereinigung.",
    body: `<p>Reguläre Ausdrücke sind das Schweizer Taschenmesser der Textbereinigung.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Regex para limpieza de texto: 15 patrones esenciales",
    description: "Las expresiones regulares más útiles para limpiar texto.",
    body: `<p>Las expresiones regulares son la navaja suiza de la limpieza de texto.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Regex para limpeza de texto: 15 padrões essenciais",
    description: "As expressões regulares mais úteis para limpar texto.",
    body: `<p>Expressões regulares são o canivete suíço da limpeza de texto.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Regex pour nettoyage de texte : 15 modèles essentiels",
    description: "Les expressions régulières les plus utiles pour nettoyer du texte.",
    body: `<p>Les expressions régulières sont le couteau suisse du nettoyage de texte.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`,
  }),
};
