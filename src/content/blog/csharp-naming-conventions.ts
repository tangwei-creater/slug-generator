import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "csharp-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "C# Naming Conventions: Microsoft's Official Guidelines",
    description: "Learn C# naming conventions from Microsoft guidelines. PascalCase for most things, camelCase for local variables and parameters.",
    body: `<p>C# has well-documented naming conventions from Microsoft, followed across the .NET ecosystem.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Methods</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Properties</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Events</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Local variables</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parameters</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constants</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Private fields</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Note: C# uses PascalCase for constants, not SCREAMING_SNAKE — unlike most other languages.</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "C#命名規則：Microsoft公式ガイドライン",
    description: "Microsoftガイドラインに基づくC#の命名規則。",
    body: `<p>C#はほとんどにPascalCase、ローカル変数にcamelCaseを使用します。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "C#-Namenskonventionen: Microsofts offizielle Richtlinien",
    description: "C#-Konventionen nach Microsoft-Richtlinien.",
    body: `<p>C#: PascalCase für die meisten Elemente, camelCase für lokale Variablen.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en C#: Directrices oficiales de Microsoft",
    description: "Convenciones C# según directrices de Microsoft.",
    body: `<p>C#: PascalCase para la mayoría, camelCase para variables locales.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em C#: Diretrizes oficiais da Microsoft",
    description: "Convenções C# segundo diretrizes da Microsoft.",
    body: `<p>C#: PascalCase para a maioria, camelCase para variáveis locais.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage C# : Directives officielles de Microsoft",
    description: "Conventions C# selon les directives Microsoft.",
    body: `<p>C# : PascalCase pour la plupart, camelCase pour les variables locales.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
