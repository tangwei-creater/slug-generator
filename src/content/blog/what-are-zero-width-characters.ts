import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-are-zero-width-characters", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Are Zero-Width Characters? How to Find and Remove Them",
    description: "Learn about zero-width spaces, joiners, and other invisible Unicode characters that cause bugs in code and text.",
    body: `<p>Zero-width characters are invisible Unicode characters that take up no visible space but can cause serious issues in code, data processing, and text comparison.</p><h2>Common Zero-Width Characters</h2><table><thead><tr><th>Name</th><th>Unicode</th><th>Purpose</th></tr></thead><tbody><tr><td>Zero-Width Space (ZWSP)</td><td>U+200B</td><td>Optional line-break point</td></tr><tr><td>Zero-Width Non-Joiner</td><td>U+200C</td><td>Prevents ligatures</td></tr><tr><td>Zero-Width Joiner</td><td>U+200D</td><td>Creates ligatures/emoji combos</td></tr><tr><td>Soft Hyphen</td><td>U+00AD</td><td>Optional hyphenation point</td></tr><tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indicates encoding</td></tr></tbody></table><h2>Problems They Cause</h2><ul><li>String comparison fails: <code>"hello" !== "h\\u200Bello"</code></li><li>JSON parsing errors</li><li>Database unique constraint violations</li><li>Search/filter mismatches</li></ul><h2>Remove Them</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove zero-width characters" enabled.</p>`,
  }),
  ja: build("ja", {
    title: "ゼロ幅文字とは？見つけ方と削除方法",
    description: "ゼロ幅スペースなど不可視Unicode文字がコードに与える問題と対処法。",
    body: `<p>ゼロ幅文字は目に見えないUnicode文字で、コードやデータ処理に問題を起こします。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Was sind Zero-Width-Zeichen? Finden und Entfernen",
    description: "Unsichtbare Unicode-Zeichen und ihre Probleme.",
    body: `<p>Zero-Width-Zeichen sind unsichtbare Unicode-Zeichen, die Probleme in Code und Daten verursachen.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué son los caracteres de ancho cero? Cómo encontrarlos y eliminarlos",
    description: "Caracteres Unicode invisibles y sus problemas.",
    body: `<p>Los caracteres de ancho cero son invisibles pero causan problemas en código y datos.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que são caracteres de largura zero? Como encontrá-los e removê-los",
    description: "Caracteres Unicode invisíveis e seus problemas.",
    body: `<p>Caracteres de largura zero são invisíveis mas causam problemas em código e dados.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Que sont les caractères de largeur nulle ? Comment les trouver et les supprimer",
    description: "Caractères Unicode invisibles et leurs problèmes.",
    body: `<p>Les caractères de largeur nulle sont invisibles mais causent des problèmes dans le code et les données.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`,
  }),
};
