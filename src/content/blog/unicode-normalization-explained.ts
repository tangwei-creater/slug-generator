import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "unicode-normalization-explained", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Unicode Normalization Explained: NFC, NFD, NFKC, NFKD",
    description: "Learn what Unicode normalization forms are, why they matter, and how they affect text comparison and search.",
    body: `<p>The same text can have multiple Unicode representations. Normalization converts text to a standard form for reliable comparison.</p><h2>The Four Forms</h2><table><thead><tr><th>Form</th><th>Name</th><th>Use Case</th></tr></thead><tbody><tr><td>NFC</td><td>Composed</td><td>Most common — recommended for web and storage</td></tr><tr><td>NFD</td><td>Decomposed</td><td>Used by macOS file system</td></tr><tr><td>NFKC</td><td>Compatibility Composed</td><td>Search and matching</td></tr><tr><td>NFKD</td><td>Compatibility Decomposed</td><td>Stripping accents</td></tr></tbody></table><h2>Why It Matters</h2><p>"café" can be encoded as 4 characters (NFC: é as single code point) or 5 characters (NFD: e + combining accent). Without normalization, string comparison fails.</p><h2>Remove Accents</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove accents/diacritics" to normalize text.</p>`,
  }),
  ja: build("ja", {
    title: "Unicode正規化解説：NFC、NFD、NFKC、NFKD",
    description: "Unicode正規化形式の違いとテキスト比較への影響。",
    body: `<p>同じテキストに複数のUnicode表現が存在します。正規化で統一的な比較が可能に。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Unicode-Normalisierung erklärt: NFC, NFD, NFKC, NFKD",
    description: "Unicode-Normalisierungsformen und ihre Bedeutung.",
    body: `<p>Gleicher Text kann verschiedene Unicode-Darstellungen haben. Normalisierung standardisiert sie.</p>`,
  }),
  es: build("es", {
    title: "Normalización Unicode explicada: NFC, NFD, NFKC, NFKD",
    description: "Formas de normalización Unicode y su importancia.",
    body: `<p>El mismo texto puede tener múltiples representaciones Unicode. La normalización las estandariza.</p>`,
  }),
  pt: build("pt", {
    title: "Normalização Unicode explicada: NFC, NFD, NFKC, NFKD",
    description: "Formas de normalização Unicode e sua importância.",
    body: `<p>O mesmo texto pode ter múltiplas representações Unicode. A normalização as padroniza.</p>`,
  }),
  fr: build("fr", {
    title: "Normalisation Unicode expliquée : NFC, NFD, NFKC, NFKD",
    description: "Formes de normalisation Unicode et leur importance.",
    body: `<p>Le même texte peut avoir plusieurs représentations Unicode. La normalisation les standardise.</p>`,
  }),
};
