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
    description: "Appleのガイドラインに基づくSwiftの命名規則を学びましょう：camelCase、PascalCase、流暢なメソッド命名。",
    body: `<p>SwiftはAppleのAPI設計ガイドラインに従い、明確さ、簡潔さ、一貫性を重視します。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>変数/プロパティ</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>関数/メソッド</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>型（class/struct/enum）</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>プロトコル</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Enumケース</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>主要な原則</h2>
<ul><li>副作用に基づいてメソッド名をつける：変更あり＝動詞（<code>sort()</code>）、変更なし＝名詞（<code>sorted()</code>）</li>
<li>Booleanプロパティは主張として読めるようにする：<code>isEmpty</code>、<code>canBecomeFirstResponder</code></li>
<li>ファクトリメソッドは<code>make</code>で始める：<code>makeIterator()</code></li></ul>
<h2>変換</h2><p><a href="%CAMEL%">camelCase</a>、<a href="%PASCAL%">PascalCase</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Swift-Namenskonventionen: Apples API-Design-Richtlinien",
    description: "Lernen Sie Swift-Namenskonventionen aus Apples Richtlinien: camelCase, PascalCase und fließende Methodennamen.",
    body: `<p>Swift folgt Apples API-Design-Richtlinien, die Klarheit, Kürze und Konsistenz betonen.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Variablen/Properties</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>Funktionen/Methoden</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>Typen (class/struct/enum)</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>Protokolle</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Enum-Cases</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>Wichtige Prinzipien</h2>
<ul><li>Methoden nach ihren Seiteneffekten benennen: mutierend = Verb (<code>sort()</code>), nicht-mutierend = Substantiv (<code>sorted()</code>)</li>
<li>Boolean-Properties als Aussagen lesen: <code>isEmpty</code>, <code>canBecomeFirstResponder</code></li>
<li>Factory-Methoden beginnen mit <code>make</code>: <code>makeIterator()</code></li></ul>
<h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Swift: Guías de diseño de Apple",
    description: "Aprende las convenciones de nombres en Swift según las directrices de Apple: camelCase, PascalCase y nombres de métodos fluidos.",
    body: `<p>Swift sigue las directrices de diseño de API de Apple, que enfatizan la claridad, brevedad y consistencia.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Variables/Propiedades</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>Funciones/Métodos</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>Tipos (class/struct/enum)</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>Protocolos</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Casos de enum</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>Principios clave</h2>
<ul><li>Nombra métodos según sus efectos secundarios: mutante = verbo (<code>sort()</code>), no mutante = sustantivo (<code>sorted()</code>)</li>
<li>Las propiedades booleanas se leen como afirmaciones: <code>isEmpty</code>, <code>canBecomeFirstResponder</code></li>
<li>Los métodos factory comienzan con <code>make</code>: <code>makeIterator()</code></li></ul>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Swift: Diretrizes de design da Apple",
    description: "Aprenda as convenções de nomes em Swift segundo as diretrizes da Apple: camelCase, PascalCase e nomes de métodos fluidos.",
    body: `<p>O Swift segue as diretrizes de design de API da Apple, que enfatizam clareza, brevidade e consistência.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Variáveis/Propriedades</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>Funções/Métodos</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>Tipos (class/struct/enum)</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>Protocolos</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Casos de enum</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>Princípios-chave</h2>
<ul><li>Nomeie métodos pelos seus efeitos colaterais: mutante = verbo (<code>sort()</code>), não mutante = substantivo (<code>sorted()</code>)</li>
<li>Propriedades booleanas lidas como afirmações: <code>isEmpty</code>, <code>canBecomeFirstResponder</code></li>
<li>Métodos factory começam com <code>make</code>: <code>makeIterator()</code></li></ul>
<h2>Converter</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Swift : Directives de design d'Apple",
    description: "Apprenez les conventions de nommage Swift selon les directives d'Apple : camelCase, PascalCase et nommage fluide des méthodes.",
    body: `<p>Swift suit les directives de design d'API d'Apple, qui mettent l'accent sur la clarté, la concision et la cohérence.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Variables/Propriétés</td><td>camelCase</td><td><code>userName</code>, <code>isEnabled</code></td></tr>
<tr><td>Fonctions/Méthodes</td><td>camelCase</td><td><code>makeNoise()</code></td></tr>
<tr><td>Types (class/struct/enum)</td><td>PascalCase</td><td><code>UserProfile</code></td></tr>
<tr><td>Protocoles</td><td>PascalCase</td><td><code>Codable</code>, <code>Equatable</code></td></tr>
<tr><td>Cas d'enum</td><td>camelCase</td><td><code>.loading</code>, <code>.success</code></td></tr>
</tbody></table>
<h2>Principes clés</h2>
<ul><li>Nommez les méthodes selon leurs effets de bord : mutant = verbe (<code>sort()</code>), non-mutant = nom (<code>sorted()</code>)</li>
<li>Les propriétés booléennes se lisent comme des assertions : <code>isEmpty</code>, <code>canBecomeFirstResponder</code></li>
<li>Les méthodes factory commencent par <code>make</code> : <code>makeIterator()</code></li></ul>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
