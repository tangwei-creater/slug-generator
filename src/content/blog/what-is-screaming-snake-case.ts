import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-screaming-snake-case", date: "2026-05-31", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is SCREAMING_SNAKE_CASE? When to Use ALL CAPS with Underscores",
    description: "Learn what SCREAMING_SNAKE_CASE is, when to use it for constants and environment variables, and how to convert to it.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (also called CONSTANT_CASE or UPPER_SNAKE_CASE) uses all uppercase letters with underscores as separators: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>When to Use SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constants:</strong> Values that never change at runtime — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Environment variables:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Enum values:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (in C, Python)</li>
<li><strong>Preprocessor macros:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Global config:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Language Support</h2>
<table><thead><tr><th>Language</th><th>Used For</th><th>Example</th></tr></thead><tbody>
<tr><td>Python</td><td>Module constants</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>True constants</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>static final fields</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constants</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Convert to SCREAMING_SNAKE_CASE</h2>
<p>Use our <a href="%CONSTANT%">constant case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "SCREAMING_SNAKE_CASEとは？大文字アンダースコアの使い方",
    description: "SCREAMING_SNAKE_CASEの定義、定数・環境変数での使用場面を解説。",
    body: `<p><strong>SCREAMING_SNAKE_CASE</strong>は全て大文字でアンダースコア区切りの命名規則です。定数や環境変数で使用されます。</p><h2>変換</h2><p><a href="%CONSTANT%">定数ケースコンバーター</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Was ist SCREAMING_SNAKE_CASE? Großbuchstaben mit Unterstrichen",
    description: "SCREAMING_SNAKE_CASE für Konstanten und Umgebungsvariablen erklärt.",
    body: `<p><strong>SCREAMING_SNAKE_CASE</strong> verwendet Großbuchstaben mit Unterstrichen. Standard für Konstanten und Umgebungsvariablen.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Constant-Case-Konverter</a> verwenden.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es SCREAMING_SNAKE_CASE? Cuándo usar mayúsculas con guiones bajos",
    description: "SCREAMING_SNAKE_CASE para constantes y variables de entorno explicado.",
    body: `<p><strong>SCREAMING_SNAKE_CASE</strong> usa mayúsculas con guiones bajos. Estándar para constantes y variables de entorno.</p><h2>Conversión</h2><p>Usa el <a href="%CONSTANT%">conversor constant case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é SCREAMING_SNAKE_CASE? Quando usar maiúsculas com underscores",
    description: "SCREAMING_SNAKE_CASE para constantes e variáveis de ambiente explicado.",
    body: `<p><strong>SCREAMING_SNAKE_CASE</strong> usa maiúsculas com underscores. Padrão para constantes e variáveis de ambiente.</p><h2>Conversão</h2><p>Use o <a href="%CONSTANT%">conversor constant case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que SCREAMING_SNAKE_CASE ? Quand utiliser les majuscules avec underscores",
    description: "SCREAMING_SNAKE_CASE pour les constantes et variables d'environnement expliqué.",
    body: `<p><strong>SCREAMING_SNAKE_CASE</strong> utilise des majuscules avec des underscores. Standard pour les constantes et variables d'environnement.</p><h2>Conversion</h2><p>Utilisez le <a href="%CONSTANT%">convertisseur constant case</a>.</p>`,
  }),
};
