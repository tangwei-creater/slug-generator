import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-kebab-case", date: "2026-05-31", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is kebab-case? Definition, Examples, and Usage",
    description: "Learn what kebab-case is, where it's used (CSS, URLs, CLI), and how it compares to other naming conventions like camelCase and snake_case.",
    body: `
<p><strong>kebab-case</strong> is a naming convention where words are lowercase and separated by hyphens: <code>my-variable-name</code>, <code>background-color</code>, <code>user-profile-page</code>.</p>
<h2>Where Is kebab-case Used?</h2>
<table><thead><tr><th>Context</th><th>Example</th></tr></thead><tbody>
<tr><td>CSS properties</td><td><code>background-color</code>, <code>font-size</code></td></tr>
<tr><td>CSS class names (BEM)</td><td><code>.nav-bar__menu-item</code></td></tr>
<tr><td>HTML attributes</td><td><code>data-user-id</code></td></tr>
<tr><td>URL slugs</td><td><code>/blog/what-is-kebab-case</code></td></tr>
<tr><td>CLI flags</td><td><code>--output-dir</code>, <code>--no-cache</code></td></tr>
<tr><td>npm package names</td><td><code>react-router-dom</code></td></tr>
<tr><td>Lisp/Clojure</td><td><code>get-user-name</code></td></tr>
</tbody></table>
<h2>kebab-case vs Other Conventions</h2>
<table><thead><tr><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>kebab-case</td><td><code>my-variable-name</code></td></tr>
<tr><td>camelCase</td><td><code>myVariableName</code></td></tr>
<tr><td>snake_case</td><td><code>my_variable_name</code></td></tr>
<tr><td>PascalCase</td><td><code>MyVariableName</code></td></tr>
</tbody></table>
<h2>Why Can't You Use kebab-case in Most Languages?</h2>
<p>The hyphen is an operator (subtraction) in most languages: <code>my-var</code> is parsed as <code>my</code> minus <code>var</code>. That's why kebab-case is limited to contexts where hyphens aren't operators — CSS, HTML attributes, URLs, and config files.</p>
<h2>Convert to kebab-case</h2>
<p>Use our <a href="%KEBAB%">kebab-case converter</a> to transform any text instantly, or try the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "kebab-caseとは？定義・例・使用場面",
    description: "kebab-caseの定義、CSS・URL・CLIでの使用例、他の命名規則との比較を解説。",
    body: `<p><strong>kebab-case</strong>はハイフンで単語を区切り全て小文字にする命名規則です。CSS、URL、CLI引数で標準的に使われます。</p><h2>使用場面</h2><p>CSSプロパティ、HTMLデータ属性、URLスラッグ、npmパッケージ名など。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-caseコンバーター</a>で変換できます。</p>`,
  }),
  de: build("de", {
    title: "Was ist kebab-case? Definition, Beispiele und Verwendung",
    description: "Erfahren Sie, was kebab-case ist und wo es verwendet wird — CSS, URLs, CLI.",
    body: `<p><strong>kebab-case</strong> trennt Wörter durch Bindestriche in Kleinbuchstaben. Standard in CSS, URLs und CLI-Flags.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">kebab-case-Konverter</a> verwenden.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es kebab-case? Definición, ejemplos y uso",
    description: "Aprende qué es kebab-case, dónde se usa y cómo se compara con camelCase y snake_case.",
    body: `<p><strong>kebab-case</strong> separa palabras con guiones en minúsculas. Estándar en CSS, URLs y flags CLI.</p><h2>Conversión</h2><p>Usa el <a href="%KEBAB%">conversor kebab-case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é kebab-case? Definição, exemplos e uso",
    description: "Aprenda o que é kebab-case, onde é usado e como se compara com camelCase e snake_case.",
    body: `<p><strong>kebab-case</strong> separa palavras com hífens em minúsculas. Padrão em CSS, URLs e flags CLI.</p><h2>Conversão</h2><p>Use o <a href="%KEBAB%">conversor kebab-case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que le kebab-case ? Définition, exemples et utilisation",
    description: "Découvrez ce qu'est le kebab-case, où il est utilisé et comment il se compare au camelCase et snake_case.",
    body: `<p><strong>kebab-case</strong> sépare les mots par des tirets en minuscules. Standard en CSS, URLs et flags CLI.</p><h2>Conversion</h2><p>Utilisez le <a href="%KEBAB%">convertisseur kebab-case</a>.</p>`,
  }),
};
