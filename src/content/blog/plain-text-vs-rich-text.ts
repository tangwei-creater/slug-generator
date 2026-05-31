import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "plain-text-vs-rich-text", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Plain Text vs Rich Text: What's the Difference?",
    description: "Understand the difference between plain text and rich text, when to use each, and how to convert between them.",
    body: `<p><strong>Plain text</strong> contains only characters — no formatting, fonts, or styling. <strong>Rich text</strong> includes formatting like bold, italic, colors, and links.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>Plain Text</th><th>Rich Text</th></tr></thead><tbody><tr><td>Formatting</td><td>None</td><td>Bold, italic, colors, fonts</td></tr><tr><td>File size</td><td>Smallest</td><td>Larger</td></tr><tr><td>Portability</td><td>Universal</td><td>Format-dependent</td></tr><tr><td>Examples</td><td>.txt, code files</td><td>.docx, .rtf, HTML</td></tr><tr><td>Best for</td><td>Code, data, logs</td><td>Documents, emails</td></tr></tbody></table><h2>Convert Rich to Plain</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip all formatting.</p>`,
  }),
  ja: build("ja", {
    title: "プレーンテキスト vs リッチテキスト：違いは？",
    description: "プレーンテキストとリッチテキストの違いと使い分け。",
    body: `<p>プレーンテキストは文字のみ。リッチテキストは書式情報を含みます。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Plain Text vs Rich Text: Was ist der Unterschied?",
    description: "Unterschied zwischen Plain Text und Rich Text.",
    body: `<p>Plain Text: nur Zeichen. Rich Text: mit Formatierung.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Texto plano vs texto enriquecido: ¿Cuál es la diferencia?",
    description: "Diferencia entre texto plano y texto enriquecido.",
    body: `<p>Texto plano: solo caracteres. Texto enriquecido: con formato.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Texto simples vs texto rico: Qual a diferença?",
    description: "Diferença entre texto simples e texto rico.",
    body: `<p>Texto simples: apenas caracteres. Texto rico: com formatação.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Texte brut vs texte riche : Quelle est la différence ?",
    description: "Différence entre texte brut et texte riche.",
    body: `<p>Texte brut : uniquement des caractères. Texte riche : avec formatage.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`,
  }),
};
