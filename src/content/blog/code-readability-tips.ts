import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "code-readability-tips", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "10 Code Readability Tips Every Developer Should Know",
    description: "Improve code readability with these practical tips covering naming, formatting, comments, and structure.",
    body: `<p>Readable code reduces bugs, speeds up reviews, and makes maintenance easier. Here are 10 actionable tips.</p><ol><li><strong>Name things well:</strong> The #1 readability factor. Descriptive names eliminate the need for comments.</li><li><strong>Keep functions short:</strong> 20 lines max. Each function should do one thing.</li><li><strong>Follow your language's style guide:</strong> PEP 8 for Python, Airbnb for JS, etc.</li><li><strong>Consistent formatting:</strong> Use a formatter (Prettier, Black, gofmt) — never debate tabs vs spaces manually.</li><li><strong>Avoid deep nesting:</strong> Use early returns and guard clauses to flatten code.</li><li><strong>Write comments for "why", not "what":</strong> Code shows what; comments explain why.</li><li><strong>Use meaningful variable types:</strong> <code>isEnabled</code> (boolean) not <code>enabled</code> (could be string).</li><li><strong>Prefer positive conditions:</strong> <code>if (isValid)</code> not <code>if (!isInvalid)</code>.</li><li><strong>Group related code:</strong> Keep related logic together, separate concerns with blank lines.</li><li><strong>Delete dead code:</strong> Commented-out code is noise. Use version control instead.</li></ol><h2>Format Your Code</h2><p>Use the <a href="%HUB%">case converter hub</a> to ensure consistent naming conventions.</p>`,
  }),
  ja: build("ja", {
    title: "開発者が知るべき10のコード可読性Tips",
    description: "命名、フォーマット、コメント、構造で可読性を向上させる実践的Tips。",
    body: `<p>読みやすいコードはバグを減らし、レビューを速めます。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "10 Code-Lesbarkeits-Tipps für Entwickler",
    description: "Praktische Tipps für bessere Code-Lesbarkeit.",
    body: `<p>Lesbarer Code reduziert Fehler und beschleunigt Reviews.</p>`,
  }),
  es: build("es", {
    title: "10 consejos de legibilidad de código que todo desarrollador debe conocer",
    description: "Consejos prácticos para mejorar la legibilidad del código.",
    body: `<p>El código legible reduce errores y acelera las revisiones.</p>`,
  }),
  pt: build("pt", {
    title: "10 dicas de legibilidade de código que todo desenvolvedor deve conhecer",
    description: "Dicas práticas para melhorar a legibilidade do código.",
    body: `<p>Código legível reduz erros e acelera as revisões.</p>`,
  }),
  fr: build("fr", {
    title: "10 conseils de lisibilité du code pour les développeurs",
    description: "Conseils pratiques pour améliorer la lisibilité du code.",
    body: `<p>Un code lisible réduit les bugs et accélère les revues.</p>`,
  }),
};
