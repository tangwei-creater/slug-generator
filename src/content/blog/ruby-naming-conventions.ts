import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "ruby-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Ruby Naming Conventions: Variables, Methods, Classes & Modules",
    description: "Learn Ruby naming conventions including snake_case for methods, PascalCase for classes, and SCREAMING_SNAKE for constants.",
    body: `<p>Ruby has clear, community-enforced naming conventions that every Ruby developer follows.</p>
<h2>Quick Reference</h2>
<table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Local variable</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Method</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Class</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Module</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constant</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Instance variable</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Class variable</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Global variable</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Predicate method</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Dangerous method</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a> or <a href="%PASCAL%">PascalCase</a> converter. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Ruby命名規則：変数、メソッド、クラス、モジュール",
    description: "メソッドのsnake_case、クラスのPascalCase、定数のSCREAMING_SNAKEなど、Rubyの命名規則を学びましょう。",
    body: `<p>Rubyには明確でコミュニティ主導の命名規則があり、すべてのRuby開発者がこれに従います。</p>
<h2>クイックリファレンス</h2>
<table><thead><tr><th>要素</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>ローカル変数</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>メソッド</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>クラス</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>モジュール</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>定数</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>インスタンス変数</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>クラス変数</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>グローバル変数</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>述語メソッド</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>破壊的メソッド</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>変換</h2><p><a href="%SNAKE%">snake_case</a>または<a href="%PASCAL%">PascalCase</a>コンバーター。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Ruby-Namenskonventionen: Variablen, Methoden, Klassen und Module",
    description: "Lernen Sie Ruby-Namenskonventionen: snake_case für Methoden, PascalCase für Klassen und SCREAMING_SNAKE für Konstanten.",
    body: `<p>Ruby hat klare, von der Community durchgesetzte Namenskonventionen, die jeder Ruby-Entwickler befolgt.</p>
<h2>Kurzübersicht</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Lokale Variable</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Methode</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Klasse</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Modul</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Konstante</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Instanzvariable</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Klassenvariable</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Globale Variable</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Prädikatmethode</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Destruktive Methode</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Konvertieren</h2><p><a href="%SNAKE%">snake_case</a> oder <a href="%PASCAL%">PascalCase</a>-Konverter. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Ruby: Variables, métodos, clases y módulos",
    description: "Aprende las convenciones de nombres en Ruby: snake_case para métodos, PascalCase para clases y SCREAMING_SNAKE para constantes.",
    body: `<p>Ruby tiene convenciones de nombres claras, impuestas por la comunidad, que todo desarrollador Ruby sigue.</p>
<h2>Referencia rápida</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Variable local</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Método</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Clase</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Módulo</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constante</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Variable de instancia</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Variable de clase</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Variable global</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Método predicado</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Método destructivo</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%SNAKE%">snake_case</a> o <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Ruby: Variáveis, métodos, classes e módulos",
    description: "Aprenda as convenções de nomes em Ruby: snake_case para métodos, PascalCase para classes e SCREAMING_SNAKE para constantes.",
    body: `<p>O Ruby tem convenções de nomes claras, impostas pela comunidade, que todo desenvolvedor Ruby segue.</p>
<h2>Referência rápida</h2>
<table><thead><tr><th>Elemento</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Variável local</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Método</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Classe</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Módulo</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constante</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Variável de instância</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Variável de classe</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Variável global</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Método predicado</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Método destrutivo</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Converter</h2><p><a href="%SNAKE%">snake_case</a> ou <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Ruby : Variables, méthodes, classes et modules",
    description: "Apprenez les conventions de nommage Ruby : snake_case pour les méthodes, PascalCase pour les classes et SCREAMING_SNAKE pour les constantes.",
    body: `<p>Ruby a des conventions de nommage claires, imposées par la communauté, que tout développeur Ruby respecte.</p>
<h2>Référence rapide</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Variable locale</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Méthode</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Classe</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Module</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constante</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Variable d'instance</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Variable de classe</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Variable globale</td><td>\$snake_case</td><td><code>\$debug_mode</code></td></tr>
<tr><td>Méthode prédicat</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Méthode destructive</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%SNAKE%">snake_case</a> ou <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
