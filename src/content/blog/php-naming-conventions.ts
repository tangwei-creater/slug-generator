import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "php-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "PHP Naming Conventions: PSR Standards and Laravel/Symfony Styles",
    description: "Learn PHP naming conventions from PSR-1/PSR-12 standards and popular frameworks like Laravel and Symfony.",
    body: `<p>PHP naming conventions have evolved significantly with PSR standards and modern frameworks.</p>
<h2>PSR-1/PSR-12 Standard</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Methods</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Properties</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Functions (procedural)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Framework Variations</h2>
<p><strong>Laravel:</strong> snake_case for database columns, camelCase for methods, PascalCase for models.<br>
<strong>Symfony:</strong> Strictly follows PSR-12, camelCase for services and methods.</p>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "PHP命名規則：PSR標準とLaravel/Symfonyスタイル",
    description: "PSR-1/PSR-12標準とLaravelやSymfonyなどのフレームワークに基づくPHPの命名規則を学びましょう。",
    body: `<p>PHPの命名規則はPSR標準とモダンフレームワークによって大きく進化しました。</p>
<h2>PSR-1/PSR-12 標準</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>クラス</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>メソッド</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>定数</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>プロパティ</td><td>camelCase（PSR）</td><td><code>\$userName</code></td></tr>
<tr><td>関数（手続き型）</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>フレームワーク別の違い</h2>
<p><strong>Laravel:</strong> DBカラムはsnake_case、メソッドはcamelCase、モデルはPascalCase。<br>
<strong>Symfony:</strong> PSR-12を厳格に準拠、サービスとメソッドはcamelCase。</p>
<h2>変換</h2><p><a href="%CAMEL%">camelCase</a>、<a href="%PASCAL%">PascalCase</a>、<a href="%SNAKE%">snake_case</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "PHP-Namenskonventionen: PSR-Standards und Laravel/Symfony",
    description: "Lernen Sie PHP-Namenskonventionen aus PSR-1/PSR-12-Standards und Frameworks wie Laravel und Symfony.",
    body: `<p>PHP-Namenskonventionen haben sich mit PSR-Standards und modernen Frameworks erheblich weiterentwickelt.</p>
<h2>PSR-1/PSR-12 Standard</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Klassen</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Methoden</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Konstanten</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Properties</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Funktionen (prozedural)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Framework-Variationen</h2>
<p><strong>Laravel:</strong> snake_case für Datenbankspalten, camelCase für Methoden, PascalCase für Models.<br>
<strong>Symfony:</strong> Hält sich streng an PSR-12, camelCase für Services und Methoden.</p>
<h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en PHP: Estándares PSR y Laravel/Symfony",
    description: "Aprende las convenciones de nombres en PHP de los estándares PSR-1/PSR-12 y frameworks como Laravel y Symfony.",
    body: `<p>Las convenciones de nombres en PHP han evolucionado significativamente con los estándares PSR y los frameworks modernos.</p>
<h2>Estándar PSR-1/PSR-12</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Clases</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Métodos</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Propiedades</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Funciones (procedurales)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Variaciones por framework</h2>
<p><strong>Laravel:</strong> snake_case para columnas de base de datos, camelCase para métodos, PascalCase para modelos.<br>
<strong>Symfony:</strong> Sigue estrictamente PSR-12, camelCase para servicios y métodos.</p>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em PHP: Padrões PSR e Laravel/Symfony",
    description: "Aprenda as convenções de nomes em PHP dos padrões PSR-1/PSR-12 e frameworks como Laravel e Symfony.",
    body: `<p>As convenções de nomes em PHP evoluíram significativamente com os padrões PSR e os frameworks modernos.</p>
<h2>Padrão PSR-1/PSR-12</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Métodos</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Propriedades</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Funções (procedurais)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Variações por framework</h2>
<p><strong>Laravel:</strong> snake_case para colunas do banco de dados, camelCase para métodos, PascalCase para models.<br>
<strong>Symfony:</strong> Segue rigorosamente o PSR-12, camelCase para serviços e métodos.</p>
<h2>Converter</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage PHP : Standards PSR et Laravel/Symfony",
    description: "Apprenez les conventions de nommage PHP des standards PSR-1/PSR-12 et des frameworks comme Laravel et Symfony.",
    body: `<p>Les conventions de nommage PHP ont considérablement évolué avec les standards PSR et les frameworks modernes.</p>
<h2>Standard PSR-1/PSR-12</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Méthodes</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Propriétés</td><td>camelCase (PSR)</td><td><code>\$userName</code></td></tr>
<tr><td>Fonctions (procédurales)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Variations par framework</h2>
<p><strong>Laravel :</strong> snake_case pour les colonnes de base de données, camelCase pour les méthodes, PascalCase pour les modèles.<br>
<strong>Symfony :</strong> Suit strictement PSR-12, camelCase pour les services et méthodes.</p>
<h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
