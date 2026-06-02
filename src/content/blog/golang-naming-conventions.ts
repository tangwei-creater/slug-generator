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
    description: "Goのパッケージ、関数、変数、インターフェース、エクスポートされる識別子の命名規則を学びましょう。",
    body: `<p>Goは可視性ルールによって命名規則を強制します。大文字で始まる名前はエクスポート(公開)、小文字で始まる名前は非エクスポート(非公開)です。</p>
<h2>大文字/小文字による可視性</h2>
<pre><code>func GetUser() {}  // エクスポート — 他のパッケージからアクセス可能
func getUser() {}  // 非エクスポート — パッケージ内のみ</code></pre>
<h2>規則</h2>
<table><thead><tr><th>要素</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>パッケージ</td><td>小文字、単一の単語</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>変数</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>関数(エクスポート)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>関数(非エクスポート)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>インターフェース</td><td>PascalCase + -er 接尾辞</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>構造体</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>定数</td><td>camelCase または PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Go固有のルール</h2>
<ul>
<li>定数にSCREAMING_SNAKE_CASEは使わない — GoはcamelCase/PascalCaseを使う</li>
<li>頭字語はすべて大文字のまま: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>ゲッターに「Get」接頭辞を付けない: <code>user.GetName()</code>ではなく<code>user.Name()</code></li>
<li>パッケージ名をエクスポート名で繰り返さない: <code>http.HttpClient</code>ではなく<code>http.Client</code></li>
</ul>
<h2>変換</h2><p><a href="%CAMEL%">camelCase</a>または<a href="%PASCAL%">PascalCase</a>コンバーター。<a href="%HUB%">ハブはこちら</a>。</p>`,
  }),
  de: build("de", {
    title: "Go-Namenskonventionen: Die vollständige Referenz",
    description: "Lernen Sie Go-Namenskonventionen für Pakete, Funktionen, Variablen, Interfaces und exportierte Bezeichner.",
    body: `<p>Go erzwingt Namenskonventionen über seine Sichtbarkeitsregeln: Großgeschriebene Namen sind exportiert (öffentlich), kleingeschriebene sind nicht exportiert (privat).</p>
<h2>Sichtbarkeit nach Schreibweise</h2>
<pre><code>func GetUser() {}  // Exportiert — aus anderen Paketen zugänglich
func getUser() {}  // Nicht exportiert — paketprivat</code></pre>
<h2>Konventionen</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Paket</td><td>kleingeschrieben, ein Wort</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variable</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Funktion (exportiert)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Funktion (nicht exportiert)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interface</td><td>PascalCase + -er-Suffix</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Konstante</td><td>camelCase oder PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Go-spezifische Regeln</h2>
<ul>
<li>Kein SCREAMING_SNAKE_CASE für Konstanten — Go nutzt camelCase/PascalCase</li>
<li>Akronyme bleiben durchgehend großgeschrieben: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Getter verwenden kein „Get"-Präfix: <code>user.Name()</code> statt <code>user.GetName()</code></li>
<li>Paketnamen sollten sich nicht in exportierten Namen wiederholen: <code>http.Client</code> statt <code>http.HttpClient</code></li>
</ul>
<h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a>- oder <a href="%PASCAL%">PascalCase</a>-Konverter. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Go (Golang): Referencia completa",
    description: "Aprende las convenciones de nombres en Go para paquetes, funciones, variables, interfaces e identificadores exportados.",
    body: `<p>Go impone convenciones de nombres mediante sus reglas de visibilidad: los nombres en mayúscula inicial se exportan (públicos) y los de minúscula inicial no se exportan (privados).</p>
<h2>Visibilidad según mayúsculas</h2>
<pre><code>func GetUser() {}  // Exportada — accesible desde otros paquetes
func getUser() {}  // No exportada — privada del paquete</code></pre>
<h2>Convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Paquete</td><td>minúsculas, una sola palabra</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variable</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Función (exportada)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Función (no exportada)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interfaz</td><td>PascalCase + sufijo -er</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Constante</td><td>camelCase o PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Reglas específicas de Go</h2>
<ul>
<li>Sin SCREAMING_SNAKE_CASE para constantes — Go usa camelCase/PascalCase</li>
<li>Las siglas se mantienen en mayúsculas: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Los getters no usan el prefijo «Get»: <code>user.Name()</code> en lugar de <code>user.GetName()</code></li>
<li>Los nombres de paquete no deben repetirse en los nombres exportados: <code>http.Client</code> en lugar de <code>http.HttpClient</code></li>
</ul>
<h2>Convertir</h2><p>Conversor a <a href="%CAMEL%">camelCase</a> o <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Go (Golang): Referência completa",
    description: "Aprenda as convenções de nomes em Go para pacotes, funções, variáveis, interfaces e identificadores exportados.",
    body: `<p>Go impõe convenções de nomes através das suas regras de visibilidade: nomes com inicial maiúscula são exportados (públicos) e com inicial minúscula não são exportados (privados).</p>
<h2>Visibilidade conforme a caixa</h2>
<pre><code>func GetUser() {}  // Exportada — acessível de outros pacotes
func getUser() {}  // Não exportada — privada do pacote</code></pre>
<h2>Convenções</h2>
<table><thead><tr><th>Elemento</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Pacote</td><td>minúsculas, uma única palavra</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variável</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Função (exportada)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Função (não exportada)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interface</td><td>PascalCase + sufixo -er</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Constante</td><td>camelCase ou PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Regras específicas do Go</h2>
<ul>
<li>Sem SCREAMING_SNAKE_CASE para constantes — Go usa camelCase/PascalCase</li>
<li>As siglas permanecem todas em maiúsculas: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Os getters não usam o prefixo "Get": <code>user.Name()</code> em vez de <code>user.GetName()</code></li>
<li>Os nomes de pacote não devem se repetir nos nomes exportados: <code>http.Client</code> em vez de <code>http.HttpClient</code></li>
</ul>
<h2>Converter</h2><p>Conversor para <a href="%CAMEL%">camelCase</a> ou <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Go (Golang) : Référence complète",
    description: "Apprenez les conventions de nommage Go pour les packages, fonctions, variables, interfaces et identifiants exportés.",
    body: `<p>Go impose des conventions de nommage via ses règles de visibilité : les noms avec majuscule initiale sont exportés (publics), ceux en minuscule ne sont pas exportés (privés).</p>
<h2>Visibilité selon la casse</h2>
<pre><code>func GetUser() {}  // Exportée — accessible depuis d'autres packages
func getUser() {}  // Non exportée — privée au package</code></pre>
<h2>Conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Package</td><td>minuscules, un seul mot</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variable</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Fonction (exportée)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Fonction (non exportée)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interface</td><td>PascalCase + suffixe -er</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Constante</td><td>camelCase ou PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Règles spécifiques à Go</h2>
<ul>
<li>Pas de SCREAMING_SNAKE_CASE pour les constantes — Go utilise camelCase/PascalCase</li>
<li>Les acronymes restent en majuscules : <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Les getters n'utilisent pas le préfixe « Get » : <code>user.Name()</code> plutôt que <code>user.GetName()</code></li>
<li>Les noms de package ne doivent pas se répéter dans les noms exportés : <code>http.Client</code> plutôt que <code>http.HttpClient</code></li>
</ul>
<h2>Convertir</h2><p>Convertisseur <a href="%CAMEL%">camelCase</a> ou <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
