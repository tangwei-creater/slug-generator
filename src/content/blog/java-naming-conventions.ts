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
    description: "Oracleのガイドラインに基づくJavaのクラス、メソッド、変数、定数、パッケージの命名規則を学びましょう。",
    body: `<p>Javaには、Oracle（旧Sun Microsystems）由来の確立された命名規則があり、すべてのJava開発者がこれに従います。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>クラス</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>インターフェース</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>メソッド</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>変数</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>定数</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>パッケージ</td><td>すべて小文字、ドット区切り</td><td><code>com.google.common</code></td></tr>
<tr><td>Enum値</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>ジェネリック型</td><td>大文字1文字</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Getter/Setterパターン</h2>
<pre><code>// プロパティ: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// 真偽値: active
public boolean isActive() { return active; }</code></pre>
<h2>変換</h2><p><a href="%CAMEL%">camelCase</a>、<a href="%PASCAL%">PascalCase</a>、<a href="%CONSTANT%">CONSTANT_CASE</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Java-Namenskonventionen: Oracles offizielle Code-Konventionen",
    description: "Lernen Sie Javas Namenskonventionen für Klassen, Methoden, Variablen, Konstanten und Pakete aus Oracles Richtlinien.",
    body: `<p>Java hat fest etablierte Namenskonventionen von Oracle (ursprünglich Sun Microsystems), die jeder Java-Entwickler befolgt.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Klassen</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Methoden</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variablen</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Konstanten</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Pakete</td><td>Alles klein, Punkte</td><td><code>com.google.common</code></td></tr>
<tr><td>Enum-Werte</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Generische Typen</td><td>Einzelner Großbuchstabe</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Getter/Setter-Muster</h2>
<pre><code>// Eigenschaft: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Boolean: active
public boolean isActive() { return active; }</code></pre>
<h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Java: Convenciones oficiales de Oracle",
    description: "Aprende las convenciones de nombres en Java para clases, métodos, variables, constantes y paquetes según las directrices de Oracle.",
    body: `<p>Java tiene convenciones de nombres bien establecidas de Oracle (originalmente Sun Microsystems) que todo desarrollador Java sigue.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Clases</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Métodos</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variables</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Paquetes</td><td>Todo minúsculas, puntos</td><td><code>com.google.common</code></td></tr>
<tr><td>Valores enum</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Tipos genéricos</td><td>Una mayúscula</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Patrón Getter/Setter</h2>
<pre><code>// Propiedad: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Booleano: active
public boolean isActive() { return active; }</code></pre>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Java: Convenções oficiais da Oracle",
    description: "Aprenda as convenções de nomes em Java para classes, métodos, variáveis, constantes e pacotes segundo as diretrizes da Oracle.",
    body: `<p>O Java tem convenções de nomes bem estabelecidas da Oracle (originalmente Sun Microsystems) que todo desenvolvedor Java segue.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Métodos</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variáveis</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Pacotes</td><td>Tudo minúsculo, pontos</td><td><code>com.google.common</code></td></tr>
<tr><td>Valores enum</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Tipos genéricos</td><td>Uma maiúscula</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Padrão Getter/Setter</h2>
<pre><code>// Propriedade: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Booleano: active
public boolean isActive() { return active; }</code></pre>
<h2>Converter</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Java : Conventions officielles d'Oracle",
    description: "Apprenez les conventions de nommage Java pour les classes, méthodes, variables, constantes et packages selon les directives d'Oracle.",
    body: `<p>Java a des conventions de nommage bien établies d'Oracle (à l'origine Sun Microsystems) que tout développeur Java respecte.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Méthodes</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variables</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Packages</td><td>Tout en minuscules, points</td><td><code>com.google.common</code></td></tr>
<tr><td>Valeurs enum</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Types génériques</td><td>Une majuscule</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Modèle Getter/Setter</h2>
<pre><code>// Propriété : firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Booléen : active
public boolean isActive() { return active; }</code></pre>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
