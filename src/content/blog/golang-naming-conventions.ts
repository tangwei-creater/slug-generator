import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "golang-naming-conventions", date: "2026-06-01", readTime: 5 };

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
    title: "Go (Golang) Naming Conventions: The Complete Reference",
    description: "Learn Go naming conventions for packages, functions, variables, interfaces, and exported identifiers.",
    body: `<p>Go enforces naming conventions through its visibility rules: capitalized names are exported (public), lowercase are unexported (private).</p>
<h2>Visibility by Case</h2>
<pre><code>func GetUser() {}  // Exported — accessible from other packages
func getUser() {}  // Unexported — package-private</code></pre>
<h2>Conventions</h2>
<table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Package</td><td>lowercase, single word</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variable</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Function (exported)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Function (unexported)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interface</td><td>PascalCase + -er suffix</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Constant</td><td>camelCase or PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Go-Specific Rules</h2>
<ul>
<li>No SCREAMING_SNAKE_CASE for constants — Go uses camelCase/PascalCase</li>
<li>Acronyms stay all-caps: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Getters don't use "Get" prefix: <code>user.Name()</code> not <code>user.GetName()</code></li>
<li>Package names should not repeat in exported names: <code>http.Client</code> not <code>http.HttpClient</code></li>
</ul>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> or <a href="%PASCAL%">PascalCase</a> converter. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Go（Golang）命名規則：完全リファレンス",
    description: "Goのパッケージ、関数、変数、インターフェースの命名規則。",
    body: `<p>Goは大文字/小文字でエクスポートの可視性を制御します。大文字開始=公開、小文字開始=非公開。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Go-Namenskonventionen: Die vollständige Referenz",
    description: "Go-Namenskonventionen für Pakete, Funktionen und Variablen.",
    body: `<p>Go steuert Sichtbarkeit durch Groß-/Kleinschreibung.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Go (Golang): Referencia completa",
    description: "Convenciones de nombres en Go para paquetes, funciones y variables.",
    body: `<p>Go controla la visibilidad mediante mayúsculas/minúsculas.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Go (Golang): Referência completa",
    description: "Convenções de nomes em Go para pacotes, funções e variáveis.",
    body: `<p>Go controla a visibilidade por maiúsculas/minúsculas.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Go (Golang) : Référence complète",
    description: "Conventions de nommage Go pour packages, fonctions et variables.",
    body: `<p>Go contrôle la visibilité par majuscules/minuscules.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
