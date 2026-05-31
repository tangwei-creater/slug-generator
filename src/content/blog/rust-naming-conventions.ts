import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "rust-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Rust Naming Conventions: The Official Style Guide",
    description: "Learn Rust naming conventions enforced by the compiler: snake_case, PascalCase, SCREAMING_SNAKE_CASE, and more.",
    body: `<p>Rust enforces naming conventions at the compiler level — using the wrong case triggers a warning.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Variables</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Functions</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Modules</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Crate names</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Type parameters</td><td>Single uppercase</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Short lowercase</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a>, or <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Rust命名規則：公式スタイルガイド",
    description: "コンパイラが強制するRustの命名規則を解説。",
    body: `<p>Rustはコンパイラレベルで命名規則を強制します。snake_case、PascalCase、SCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Rust-Namenskonventionen: Der offizielle Styleguide",
    description: "Vom Compiler erzwungene Rust-Namenskonventionen.",
    body: `<p>Rust erzwingt Konventionen auf Compiler-Ebene.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Rust: Guía de estilo oficial",
    description: "Convenciones de nombres enforced por el compilador de Rust.",
    body: `<p>Rust impone convenciones a nivel de compilador.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Rust: Guia de estilo oficial",
    description: "Convenções de nomes impostas pelo compilador Rust.",
    body: `<p>Rust impõe convenções no nível do compilador.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Rust : Le guide de style officiel",
    description: "Conventions imposées par le compilateur Rust.",
    body: `<p>Rust impose les conventions au niveau du compilateur.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
