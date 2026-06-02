import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "rust-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Rust Naming Conventions: The Official Style Guide",
    description: "Learn Rust naming conventions enforced by the compiler: snake_case, PascalCase, SCREAMING_SNAKE_CASE, and more.",
    body: `<p>Rust enforces naming conventions at the compiler level — using the wrong case triggers a warning.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Variables</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Functions</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Modules</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Crate names</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Type parameters</td><td>Single uppercase</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Short lowercase</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a>, or <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Rust命名規則：公式スタイルガイド",
    description: "コンパイラが強制するRustの命名規則を学びましょう：snake_case、PascalCase、SCREAMING_SNAKE_CASEなど。",
    body: `<p>Rustはコンパイラレベルで命名規則を強制します — 間違ったケースを使うと警告が出ます。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>変数</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>関数</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>構造体</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>列挙型</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>トレイト</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>定数</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>モジュール</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>クレート名</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>型パラメータ</td><td>大文字1文字</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>ライフタイム</td><td>短い小文字</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>変換</h2><p><a href="%SNAKE%">snake_case</a>、<a href="%PASCAL%">PascalCase</a>、または<a href="%CONSTANT%">CONSTANT_CASE</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Rust-Namenskonventionen: Der offizielle Styleguide",
    description: "Lernen Sie die vom Compiler erzwungenen Rust-Namenskonventionen: snake_case, PascalCase, SCREAMING_SNAKE_CASE und mehr.",
    body: `<p>Rust erzwingt Namenskonventionen auf Compiler-Ebene — die falsche Schreibweise löst eine Warnung aus.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Variablen</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Funktionen</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Konstanten</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Module</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Crate-Namen</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Typparameter</td><td>Einzelner Großbuchstabe</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Kurz, klein</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Konvertieren</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a> oder <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Rust: Guía de estilo oficial",
    description: "Aprende las convenciones de nombres en Rust impuestas por el compilador: snake_case, PascalCase, SCREAMING_SNAKE_CASE y más.",
    body: `<p>Rust impone las convenciones de nombres a nivel de compilador — usar la mayúscula/minúscula incorrecta genera una advertencia.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Variables</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Funciones</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Módulos</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Nombres de crate</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Parámetros de tipo</td><td>Una mayúscula</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Minúscula corta</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a> o <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Rust: Guia de estilo oficial",
    description: "Aprenda as convenções de nomes em Rust impostas pelo compilador: snake_case, PascalCase, SCREAMING_SNAKE_CASE e mais.",
    body: `<p>O Rust impõe as convenções de nomes no nível do compilador — usar a caixa errada gera um aviso.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Variáveis</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Funções</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Módulos</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Nomes de crate</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Parâmetros de tipo</td><td>Uma maiúscula</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Minúscula curta</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Converter</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a> ou <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Rust : Le guide de style officiel",
    description: "Apprenez les conventions de nommage Rust imposées par le compilateur : snake_case, PascalCase, SCREAMING_SNAKE_CASE et plus.",
    body: `<p>Rust impose les conventions de nommage au niveau du compilateur — utiliser la mauvaise casse déclenche un avertissement.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Variables</td><td>snake_case</td><td><code>let user_name = ...</code></td></tr>
<tr><td>Fonctions</td><td>snake_case</td><td><code>fn get_user()</code></td></tr>
<tr><td>Structs</td><td>PascalCase</td><td><code>struct UserAccount</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Color { Red, Blue }</code></td></tr>
<tr><td>Traits</td><td>PascalCase</td><td><code>trait Serialize</code></td></tr>
<tr><td>Constantes</td><td>SCREAMING_SNAKE</td><td><code>const MAX_SIZE: u32</code></td></tr>
<tr><td>Modules</td><td>snake_case</td><td><code>mod user_auth</code></td></tr>
<tr><td>Noms de crate</td><td>snake_case</td><td><code>serde_json</code></td></tr>
<tr><td>Paramètres de type</td><td>Une majuscule</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Lifetimes</td><td>Minuscule courte</td><td><code>'a</code>, <code>'ctx</code></td></tr>
</tbody></table>
<h2>Convertir</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a> ou <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
