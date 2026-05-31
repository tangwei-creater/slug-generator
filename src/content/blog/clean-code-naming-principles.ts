import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "clean-code-naming-principles", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Clean Code Naming Principles: Lessons from Robert C. Martin",
    description: "Learn naming principles from Clean Code by Uncle Bob. Meaningful names, avoiding disinformation, and intention-revealing code.",
    body: `<p>Robert C. Martin's "Clean Code" dedicates an entire chapter to naming. Here are the key principles.</p><h2>Core Rules</h2><ul><li><strong>Use intention-revealing names:</strong> The name should answer why it exists and what it does</li><li><strong>Avoid disinformation:</strong> Don't call something a "list" if it's not a list</li><li><strong>Make meaningful distinctions:</strong> <code>source</code> and <code>destination</code> not <code>a1</code> and <code>a2</code></li><li><strong>Use pronounceable names:</strong> <code>generationTimestamp</code> not <code>genymdhms</code></li><li><strong>Use searchable names:</strong> Named constants instead of magic numbers</li><li><strong>Avoid encodings:</strong> No Hungarian notation, no member prefixes</li><li><strong>Class names are nouns:</strong> <code>Customer</code>, <code>Account</code>, <code>AddressParser</code></li><li><strong>Method names are verbs:</strong> <code>save()</code>, <code>deletePage()</code>, <code>postPayment()</code></li></ul><h2>Convert Names</h2><p>Use the <a href="%HUB%">case converter hub</a> to format names for any convention.</p>`,
  }),
  ja: build("ja", {
    title: "クリーンコードの命名原則：Robert C. Martinの教え",
    description: "Uncle Bobのクリーンコードから命名原則を学ぶ。",
    body: `<p>Robert C. Martinの「クリーンコード」の命名原則：意図を明かす名前、誤情報を避ける、意味のある区別。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Clean Code Naming Principles: Lektionen von Robert C. Martin",
    description: "Namensgebungsprinzipien aus Clean Code.",
    body: `<p>Kernregeln: aussagekräftige Namen, keine Desinformation, suchbare Namen.</p>`,
  }),
  es: build("es", {
    title: "Principios de nombres en Clean Code: Lecciones de Robert C. Martin",
    description: "Principios de nombres de Clean Code.",
    body: `<p>Reglas clave: nombres reveladores de intención, evitar desinformación, nombres buscables.</p>`,
  }),
  pt: build("pt", {
    title: "Princípios de nomes em Clean Code: Lições de Robert C. Martin",
    description: "Princípios de nomes do Clean Code.",
    body: `<p>Regras chave: nomes reveladores de intenção, evitar desinformação, nomes pesquisáveis.</p>`,
  }),
  fr: build("fr", {
    title: "Principes de nommage Clean Code : Leçons de Robert C. Martin",
    description: "Principes de nommage de Clean Code.",
    body: `<p>Règles clés : noms révélateurs d'intention, éviter la désinformation, noms recherchables.</p>`,
  }),
};
