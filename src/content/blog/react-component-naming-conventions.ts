import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "react-component-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "React Component Naming Conventions: Files, Props, and Hooks",
    description: "Learn React naming conventions for components, props, hooks, event handlers, and file names.",
    body: `<p>React has strong naming conventions that are enforced by JSX itself — components must start with an uppercase letter.</p>
<h2>Components: PascalCase</h2>
<p>All React components use PascalCase: <code>UserProfile</code>, <code>ShoppingCart</code>, <code>NavBar</code>. This is required — JSX treats lowercase tags as HTML elements.</p>
<h2>Props: camelCase</h2>
<p>Props use camelCase: <code>userName</code>, <code>isLoading</code>, <code>onSubmit</code>, <code>maxRetries</code>.</p>
<h2>Hooks: use + PascalCase</h2>
<p>Custom hooks start with <code>use</code>: <code>useAuth</code>, <code>useFetch</code>, <code>useLocalStorage</code>.</p>
<h2>Event Handlers</h2>
<p>Props: <code>on</code> + Event (<code>onClick</code>, <code>onSubmit</code>). Handler functions: <code>handle</code> + Event (<code>handleClick</code>, <code>handleSubmit</code>).</p>
<h2>File Names</h2>
<table><thead><tr><th>Type</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Component</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>Utility</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>Style</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>Test</td><td>Match source</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>Convert Names</h2>
<p><a href="%PASCAL%">PascalCase converter</a> for components, <a href="%CAMEL%">camelCase</a> for props, or <a href="%HUB%">hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Reactコンポーネント命名規則：ファイル、Props、Hooks",
    description: "Reactのコンポーネント、Props、Hooks、イベントハンドラーの命名規則を解説。",
    body: `<p>ReactコンポーネントはPascalCase必須。PropsはcamelCase、カスタムHooksはuse接頭辞。</p><h2>変換</h2><p><a href="%PASCAL%">PascalCase</a>、<a href="%CAMEL%">camelCase</a>コンバーター。</p>`,
  }),
  de: build("de", {
    title: "React-Komponenten-Namenskonventionen: Dateien, Props und Hooks",
    description: "React-Namenskonventionen für Komponenten, Props und Hooks.",
    body: `<p>React-Komponenten: PascalCase. Props: camelCase. Hooks: use-Präfix.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en React: Componentes, Props y Hooks",
    description: "Convenciones de nombres en React para componentes, props y hooks.",
    body: `<p>Componentes React: PascalCase. Props: camelCase. Hooks: prefijo use.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em React: Componentes, Props e Hooks",
    description: "Convenções de nomes em React para componentes, props e hooks.",
    body: `<p>Componentes React: PascalCase. Props: camelCase. Hooks: prefixo use.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage React : Composants, Props et Hooks",
    description: "Conventions de nommage React pour composants, props et hooks.",
    body: `<p>Composants React : PascalCase. Props : camelCase. Hooks : préfixe use.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
