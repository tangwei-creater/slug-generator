import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "php-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "PHP Naming Conventions: PSR Standards and Laravel/Symfony Styles",
    description: "Learn PHP naming conventions from PSR-1/PSR-12 standards and popular frameworks like Laravel and Symfony.",
    body: `<p>PHP naming conventions have evolved significantly with PSR standards and modern frameworks.</p>
<h2>PSR-1/PSR-12 Standard</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Methods</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Properties</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Functions (procedural)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Framework Variations</h2>
<p><strong>Laravel:</strong> snake_case for database columns, camelCase for methods, PascalCase for models.<br>
<strong>Symfony:</strong> Strictly follows PSR-12, camelCase for services and methods.</p>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "PHP命名規則：PSR標準とLaravel/Symfonyスタイル",
    description: "PSR-1/PSR-12標準とLaravel、Symfonyの命名規則。",
    body: `<p>PHPの命名規則はPSR標準で統一されています。クラスはPascalCase、メソッドはcamelCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "PHP-Namenskonventionen: PSR-Standards und Laravel/Symfony",
    description: "PHP-Konventionen nach PSR-1/PSR-12.",
    body: `<p>PHP folgt PSR-Standards. Klassen: PascalCase, Methoden: camelCase.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en PHP: Estándares PSR y Laravel/Symfony",
    description: "Convenciones PHP según PSR-1/PSR-12.",
    body: `<p>PHP sigue estándares PSR. Clases: PascalCase, métodos: camelCase.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em PHP: Padrões PSR e Laravel/Symfony",
    description: "Convenções PHP segundo PSR-1/PSR-12.",
    body: `<p>PHP segue padrões PSR. Classes: PascalCase, métodos: camelCase.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage PHP : Standards PSR et Laravel/Symfony",
    description: "Conventions PHP selon PSR-1/PSR-12.",
    body: `<p>PHP suit les standards PSR. Classes : PascalCase, méthodes : camelCase.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
