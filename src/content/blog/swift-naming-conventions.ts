import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "swift-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Swift Naming Conventions: Apple's Official API Design Guidelines",
    description: "Learn Swift naming conventions from Apple's guidelines: camelCase, PascalCase, and fluent method naming.",
    body: `<p>Swift follows Apple's API Design Guidelines, which emphasize clarity, brevity, and consistency.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Variables/Properties</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>Functions/Methods</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>Types (class/struct/enum)</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>Protocols</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Enum cases</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>Key Principles</h2>
<ul><li>Name methods for their side effects: mutating = verb (<code>sort()</code>), non-mutating = noun (<code>sorted()</code>)</li>
<li>Boolean properties read as assertions: <code>isEmpty</code>, <code>canBecomeFirstResponder</code></li>
<li>Factory methods begin with <code>make</code>: <code>makeIterator()</code></li></ul>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Swift命名規則：AppleのAPI設計ガイドライン",
    description: "Apple公式ガイドラインに基づくSwiftの命名規則。",
    body: `<p>SwiftはAppleのAPI設計ガイドラインに従います。変数はcamelCase、型はPascalCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Swift-Namenskonventionen: Apples API-Design-Richtlinien",
    description: "Swift-Konventionen nach Apples Richtlinien.",
    body: `<p>Swift folgt Apples API-Design-Richtlinien.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Swift: Guías de diseño de Apple",
    description: "Convenciones Swift según las directrices de Apple.",
    body: `<p>Swift sigue las directrices de diseño de API de Apple.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Swift: Diretrizes de design da Apple",
    description: "Convenções Swift segundo as diretrizes da Apple.",
    body: `<p>Swift segue as diretrizes de design de API da Apple.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Swift : Directives de design d'Apple",
    description: "Conventions Swift selon les directives d'Apple.",
    body: `<p>Swift suit les directives de design d'API d'Apple.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
