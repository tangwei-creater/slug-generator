import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "typescript-naming-conventions", date: "2026-06-01", readTime: 5 };

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
    title: "TypeScript Naming Conventions: Interfaces, Types, Enums & More",
    description: "Learn TypeScript-specific naming conventions for interfaces, type aliases, enums, generics, and utility types.",
    body: `<p>TypeScript inherits JavaScript conventions and adds rules for its type system features.</p>
<h2>TypeScript-Specific Rules</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (no I prefix)</td><td><code>UserProps</code></td></tr>
<tr><td>Type aliases</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Enum members</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Generics</td><td>Single uppercase</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Utility types</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>No "I" Prefix for Interfaces</h2>
<p>The TypeScript team explicitly discourages the Hungarian-style <code>IUser</code> pattern. Use <code>User</code> for the interface and <code>UserImpl</code> or a descriptive name for implementations.</p>
<h2>File Naming</h2>
<p>React components: <code>UserProfile.tsx</code> (PascalCase). Everything else: <code>userUtils.ts</code> (camelCase) or <code>user-utils.ts</code> (kebab-case).</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "TypeScript命名規則：インターフェース、型、Enum",
    description: "TypeScript固有の命名規則。インターフェース、型エイリアス、Enum、ジェネリクス。",
    body: `<p>TypeScriptはJavaScriptの規則を継承し、型システム機能の規則を追加します。インターフェースはPascalCase（I接頭辞なし）。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "TypeScript-Namenskonventionen: Interfaces, Types, Enums",
    description: "TypeScript-spezifische Konventionen für Interfaces und Types.",
    body: `<p>TypeScript erbt JS-Konventionen. Interfaces: PascalCase ohne I-Präfix.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en TypeScript: Interfaces, tipos, enums",
    description: "Convenciones TypeScript para interfaces, tipos y enums.",
    body: `<p>TypeScript hereda convenciones de JS. Interfaces: PascalCase sin prefijo I.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em TypeScript: Interfaces, tipos, enums",
    description: "Convenções TypeScript para interfaces, tipos e enums.",
    body: `<p>TypeScript herda convenções do JS. Interfaces: PascalCase sem prefixo I.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage TypeScript : Interfaces, types, enums",
    description: "Conventions TypeScript pour interfaces, types et enums.",
    body: `<p>TypeScript hérite des conventions JS. Interfaces : PascalCase sans préfixe I.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
