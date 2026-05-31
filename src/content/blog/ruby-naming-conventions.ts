import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "ruby-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Ruby Naming Conventions: Variables, Methods, Classes & Modules",
    description: "Learn Ruby naming conventions including snake_case for methods, PascalCase for classes, and SCREAMING_SNAKE for constants.",
    body: `<p>Ruby has clear, community-enforced naming conventions that every Ruby developer follows.</p>
<h2>Quick Reference</h2>
<table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Local variable</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Method</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Class</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Module</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constant</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Instance variable</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Class variable</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Global variable</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Predicate method</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Dangerous method</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a> or <a href="%PASCAL%">PascalCase</a> converter. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Ruby命名規則：変数、メソッド、クラス",
    description: "Rubyの命名規則。snake_case、PascalCase、SCREAMING_SNAKEの使い分け。",
    body: `<p>Rubyは明確な命名規則があります。メソッドはsnake_case、クラスはPascalCase、定数はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Ruby-Namenskonventionen: Variablen, Methoden, Klassen",
    description: "Ruby-Namenskonventionen: snake_case, PascalCase, SCREAMING_SNAKE.",
    body: `<p>Ruby: Methoden snake_case, Klassen PascalCase, Konstanten SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Ruby: Variables, métodos, clases",
    description: "Convenciones Ruby: snake_case, PascalCase, SCREAMING_SNAKE.",
    body: `<p>Ruby: métodos snake_case, clases PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Ruby: Variáveis, métodos, classes",
    description: "Convenções Ruby: snake_case, PascalCase, SCREAMING_SNAKE.",
    body: `<p>Ruby: métodos snake_case, classes PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Ruby : Variables, méthodes, classes",
    description: "Conventions Ruby : snake_case, PascalCase, SCREAMING_SNAKE.",
    body: `<p>Ruby : méthodes snake_case, classes PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
