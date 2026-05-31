import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "kotlin-naming-conventions", date: "2026-06-01", readTime: 4 };

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
    title: "Kotlin Naming Conventions: Official Style Guide Summary",
    description: "Learn Kotlin naming conventions for properties, functions, classes, and packages from the official coding conventions.",
    body: `<p>Kotlin follows conventions similar to Java, with some Kotlin-specific additions.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Properties</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Functions</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Objects/Singletons</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>Constants (top-level)</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>Packages</td><td>lowercase, dots</td><td><code>com.example.app</code></td></tr>
<tr><td>Backing properties</td><td>_ prefix</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Kotlin命名規則：公式スタイルガイド要約",
    description: "Kotlinのプロパティ、関数、クラスの命名規則。",
    body: `<p>KotlinはJavaに似た規則に従います。プロパティはcamelCase、クラスはPascalCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Kotlin-Namenskonventionen: Offizieller Styleguide",
    description: "Kotlin-Konventionen für Properties, Funktionen und Klassen.",
    body: `<p>Kotlin folgt Java-ähnlichen Konventionen.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Kotlin: Resumen de la guía oficial",
    description: "Convenciones Kotlin para propiedades, funciones y clases.",
    body: `<p>Kotlin sigue convenciones similares a Java.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Kotlin: Resumo do guia oficial",
    description: "Convenções Kotlin para propriedades, funções e classes.",
    body: `<p>Kotlin segue convenções similares ao Java.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Kotlin : Résumé du guide officiel",
    description: "Conventions Kotlin pour propriétés, fonctions et classes.",
    body: `<p>Kotlin suit des conventions similaires à Java.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
