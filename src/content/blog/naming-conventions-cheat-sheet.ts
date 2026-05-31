import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "naming-conventions-cheat-sheet", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Naming Conventions Cheat Sheet: Every Language at a Glance",
    description: "A one-page cheat sheet of naming conventions for JavaScript, Python, Java, C#, Go, Ruby, Rust, PHP, Swift, and Kotlin.",
    body: `<p>Bookmark this page. Every naming convention for every major language, in one table.</p><h2>The Master Table</h2><table><thead><tr><th>Language</th><th>Variables</th><th>Functions</th><th>Classes</th><th>Constants</th><th>Files</th></tr></thead><tbody><tr><td>JavaScript</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>camelCase/PascalCase</td></tr><tr><td>Python</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>Java</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>C#</td><td>camelCase</td><td>PascalCase</td><td>PascalCase</td><td>PascalCase</td><td>PascalCase</td></tr><tr><td>Go</td><td>camelCase</td><td>camelCase/PascalCase</td><td>PascalCase</td><td>camelCase/PascalCase</td><td>snake_case</td></tr><tr><td>Ruby</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>Rust</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>PHP</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>Swift</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>camelCase</td><td>PascalCase</td></tr><tr><td>Kotlin</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>CSS</td><td>kebab-case</td><td>—</td><td>—</td><td>—</td><td>kebab-case</td></tr></tbody></table><h2>Convert Any Format</h2><p><a href="%CAMEL%">camelCase</a> · <a href="%SNAKE%">snake_case</a> · <a href="%PASCAL%">PascalCase</a> · <a href="%KEBAB%">kebab-case</a> · <a href="%CONSTANT%">CONSTANT_CASE</a> · <a href="%HUB%">All Formats</a></p>`,
  }),
  ja: build("ja", {
    title: "命名規則チートシート：全言語一覧",
    description: "JavaScript、Python、Java、C#、Go、Ruby、Rust、PHP、Swift、Kotlinの命名規則。",
    body: `<p>すべての主要言語の命名規則を1つのテーブルで。</p><h2>変換</h2><p><a href="%CAMEL%">camelCase</a> · <a href="%SNAKE%">snake_case</a> · <a href="%PASCAL%">PascalCase</a> · <a href="%KEBAB%">kebab-case</a> · <a href="%HUB%">全フォーマット</a></p>`,
  }),
  de: build("de", {
    title: "Namenskonventionen Cheat Sheet: Alle Sprachen auf einen Blick",
    description: "Namenskonventionen für alle wichtigen Sprachen.",
    body: `<p>Alle Konventionen in einer Tabelle.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Cheat Sheet de convenciones de nombres: Todos los lenguajes",
    description: "Convenciones de nombres para todos los lenguajes principales.",
    body: `<p>Todas las convenciones en una tabla.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Cheat Sheet de convenções de nomes: Todas as linguagens",
    description: "Convenções de nomes para todas as linguagens principais.",
    body: `<p>Todas as convenções em uma tabela.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Cheat Sheet des conventions de nommage : Tous les langages",
    description: "Conventions de nommage pour tous les langages principaux.",
    body: `<p>Toutes les conventions dans un tableau.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
