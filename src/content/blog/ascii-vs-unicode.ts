import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "ascii-vs-unicode", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "ASCII vs Unicode: What's the Difference?",
    description: "Understand the difference between ASCII and Unicode, why Unicode replaced ASCII, and how they work together.",
    body: `<p>ASCII and Unicode are character encoding standards. ASCII came first and handles English; Unicode handles every language on Earth.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Characters</td><td>128 (7-bit)</td><td>149,000+ (21-bit)</td></tr><tr><td>Languages</td><td>English only</td><td>All languages</td></tr><tr><td>Emojis</td><td>No</td><td>Yes</td></tr><tr><td>Encoding</td><td>Single byte</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibility</td><td>Subset of Unicode</td><td>Superset of ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 is the dominant Unicode encoding. It's backwards-compatible with ASCII — the first 128 characters are identical.</p><h2>Clean Your Text</h2><p>Remove non-ASCII characters with our <a href="%CLEAN%">plain text converter</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ASCII vs Unicode：違いは何？",
    description: "ASCIIとUnicodeの違い、UnicodeがASCIIを置き換えた理由。",
    body: `<p>ASCIIは英語128文字。Unicodeは全言語14万9000文字以上をカバー。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "ASCII vs Unicode: Was ist der Unterschied?",
    description: "Unterschied zwischen ASCII und Unicode.",
    body: `<p>ASCII: 128 Zeichen (Englisch). Unicode: 149.000+ Zeichen (alle Sprachen).</p>`,
  }),
  es: build("es", {
    title: "ASCII vs Unicode: ¿Cuál es la diferencia?",
    description: "Diferencia entre ASCII y Unicode.",
    body: `<p>ASCII: 128 caracteres (inglés). Unicode: 149.000+ caracteres (todos los idiomas).</p>`,
  }),
  pt: build("pt", {
    title: "ASCII vs Unicode: Qual a diferença?",
    description: "Diferença entre ASCII e Unicode.",
    body: `<p>ASCII: 128 caracteres (inglês). Unicode: 149.000+ caracteres (todas as línguas).</p>`,
  }),
  fr: build("fr", {
    title: "ASCII vs Unicode : Quelle est la différence ?",
    description: "Différence entre ASCII et Unicode.",
    body: `<p>ASCII : 128 caractères (anglais). Unicode : 149 000+ caractères (toutes les langues).</p>`,
  }),
};
