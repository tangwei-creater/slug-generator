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
    description: "公式のコーディング規約に基づくKotlinのプロパティ、関数、クラス、パッケージの命名規則を学びましょう。",
    body: `<p>KotlinはJavaに似た規則に従い、Kotlin固有の追加ルールもあります。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>プロパティ</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>関数</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>クラス</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>オブジェクト/シングルトン</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>定数（トップレベル）</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>パッケージ</td><td>小文字、ドット区切り</td><td><code>com.example.app</code></td></tr>
<tr><td>バッキングプロパティ</td><td>_接頭辞</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>変換</h2><p><a href="%CAMEL%">camelCase</a>、<a href="%PASCAL%">PascalCase</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Kotlin-Namenskonventionen: Offizieller Styleguide",
    description: "Lernen Sie Kotlin-Namenskonventionen für Properties, Funktionen, Klassen und Pakete aus den offiziellen Coding Conventions.",
    body: `<p>Kotlin folgt Konventionen ähnlich wie Java, mit einigen Kotlin-spezifischen Ergänzungen.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Properties</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Funktionen</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Klassen</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Objekte/Singletons</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>Konstanten (Top-Level)</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>Pakete</td><td>Kleinbuchstaben, Punkte</td><td><code>com.example.app</code></td></tr>
<tr><td>Backing-Properties</td><td>_Präfix</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Kotlin: Resumen de la guía oficial",
    description: "Aprende las convenciones de nombres en Kotlin para propiedades, funciones, clases y paquetes de las convenciones oficiales.",
    body: `<p>Kotlin sigue convenciones similares a Java, con algunas adiciones específicas de Kotlin.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Propiedades</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Funciones</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Clases</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Objetos/Singletons</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>Constantes (nivel superior)</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>Paquetes</td><td>Minúsculas, puntos</td><td><code>com.example.app</code></td></tr>
<tr><td>Propiedades de respaldo</td><td>Prefijo _</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Kotlin: Resumo do guia oficial",
    description: "Aprenda as convenções de nomes em Kotlin para propriedades, funções, classes e pacotes das convenções oficiais.",
    body: `<p>O Kotlin segue convenções semelhantes ao Java, com algumas adições específicas do Kotlin.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Propriedades</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Funções</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Objetos/Singletons</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>Constantes (nível superior)</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>Pacotes</td><td>Minúsculas, pontos</td><td><code>com.example.app</code></td></tr>
<tr><td>Propriedades de suporte</td><td>Prefixo _</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>Converter</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Kotlin : Résumé du guide officiel",
    description: "Apprenez les conventions de nommage Kotlin pour les propriétés, fonctions, classes et packages selon les conventions officielles.",
    body: `<p>Kotlin suit des conventions similaires à Java, avec quelques ajouts spécifiques à Kotlin.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Propriétés</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Fonctions</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Objets/Singletons</td><td>PascalCase</td><td><code>DatabaseConfig</code></td></tr>
<tr><td>Constantes (niveau supérieur)</td><td>SCREAMING_SNAKE</td><td><code>MAX_COUNT</code></td></tr>
<tr><td>Packages</td><td>Minuscules, points</td><td><code>com.example.app</code></td></tr>
<tr><td>Propriétés de support</td><td>Préfixe _</td><td><code>_items</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
