import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "java-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Java Naming Conventions: Oracle's Official Code Conventions",
    description: "Learn Java naming conventions for classes, methods, variables, constants, and packages from Oracle's guidelines.",
    body: `<p>Java has well-established naming conventions from Oracle (originally Sun Microsystems) that every Java developer follows.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Methods</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variables</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Packages</td><td>all lowercase, dots</td><td><code>com.google.common</code></td></tr>
<tr><td>Enum values</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Generic types</td><td>Single uppercase</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Getter/Setter Pattern</h2>
<pre><code>// Property: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Boolean: active
public boolean isActive() { return active; }</code></pre>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Java命名規則：Oracle公式コード規約",
    description: "Oracleガイドラインに基づくJavaの命名規則。",
    body: `<p>Javaは確立された命名規則があります。クラスはPascalCase、メソッドはcamelCase、定数はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Java-Namenskonventionen: Oracles offizielle Code-Konventionen",
    description: "Java-Konventionen nach Oracle-Richtlinien.",
    body: `<p>Java: Klassen PascalCase, Methoden camelCase, Konstanten SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Java: Convenciones oficiales de Oracle",
    description: "Convenciones Java según directrices de Oracle.",
    body: `<p>Java: clases PascalCase, métodos camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Java: Convenções oficiais da Oracle",
    description: "Convenções Java segundo diretrizes da Oracle.",
    body: `<p>Java: classes PascalCase, métodos camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Java : Conventions officielles d'Oracle",
    description: "Conventions Java selon les directives Oracle.",
    body: `<p>Java : classes PascalCase, méthodes camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
