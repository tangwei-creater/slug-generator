import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "remove-extra-spaces-from-text", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Remove Extra Spaces from Text (Online Tool + Code)",
    description: "Remove double spaces, leading/trailing whitespace, and extra blank lines from text.",
    body: `<p>Extra spaces creep into text from copy-paste, OCR, and word processors. Here's how to clean them.</p><h2>Regex</h2><pre><code>// Collapse multiple spaces to one
text.replace(/  +/g, ' ')

// Trim each line
text.split('\\n').map(l => l.trim()).join('\\n')

// Remove extra blank lines
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Collapse extra spaces" enabled.</p>`,
  }),
  ja: build("ja", {
    title: "テキストから余分なスペースを削除する方法",
    description: "オンラインツールとコードで余分なスペースを削除。",
    body: `<p>余分なスペースはコピペやOCRで発生します。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Extra-Leerzeichen aus Text entfernen",
    description: "Online-Tool und Code zum Entfernen von Leerzeichen.",
    body: `<p>Überflüssige Leerzeichen entstehen durch Copy-Paste und OCR.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar espacios extra del texto",
    description: "Herramienta online y código para eliminar espacios.",
    body: `<p>Los espacios extra aparecen por copiar-pegar y OCR.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover espaços extras do texto",
    description: "Ferramenta online e código para remover espaços.",
    body: `<p>Espaços extras surgem de copiar-colar e OCR.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les espaces supplémentaires du texte",
    description: "Outil en ligne et code pour supprimer les espaces.",
    body: `<p>Les espaces supplémentaires viennent du copier-coller et de l'OCR.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`,
  }),
};
