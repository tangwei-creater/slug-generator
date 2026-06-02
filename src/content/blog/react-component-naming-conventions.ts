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
    description: "Reactのコンポーネント、Props、Hooks、イベントハンドラー、ファイル名の命名規則を学びましょう。",
    body: `<p>ReactにはJSX自体によって強制される強力な命名規則があります — コンポーネントは大文字で始めなければなりません。</p>
<h2>コンポーネント：PascalCase</h2>
<p>すべてのReactコンポーネントはPascalCaseを使います：<code>UserProfile</code>、<code>ShoppingCart</code>、<code>NavBar</code>。これは必須です — JSXは小文字のタグをHTML要素として扱うためです。</p>
<h2>Props：camelCase</h2>
<p>PropsはcamelCaseを使います：<code>userName</code>、<code>isLoading</code>、<code>onSubmit</code>、<code>maxRetries</code>。</p>
<h2>Hooks：use + PascalCase</h2>
<p>カスタムHooksは<code>use</code>で始めます：<code>useAuth</code>、<code>useFetch</code>、<code>useLocalStorage</code>。</p>
<h2>イベントハンドラー</h2>
<p>Props：<code>on</code> + イベント（<code>onClick</code>、<code>onSubmit</code>）。ハンドラー関数：<code>handle</code> + イベント（<code>handleClick</code>、<code>handleSubmit</code>）。</p>
<h2>ファイル名</h2>
<table><thead><tr><th>種類</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>コンポーネント</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>ユーティリティ</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>スタイル</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>テスト</td><td>ソースに合わせる</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>名前を変換</h2>
<p>コンポーネントには<a href="%PASCAL%">PascalCaseコンバーター</a>、Propsには<a href="%CAMEL%">camelCase</a>、または<a href="%HUB%">ハブ</a>を使いましょう。</p>`,
  }),
  de: build("de", {
    title: "React-Komponenten-Namenskonventionen: Dateien, Props und Hooks",
    description: "Lernen Sie React-Namenskonventionen für Komponenten, Props, Hooks, Event-Handler und Dateinamen.",
    body: `<p>React hat strenge Namenskonventionen, die von JSX selbst erzwungen werden — Komponenten müssen mit einem Großbuchstaben beginnen.</p>
<h2>Komponenten: PascalCase</h2>
<p>Alle React-Komponenten verwenden PascalCase: <code>UserProfile</code>, <code>ShoppingCart</code>, <code>NavBar</code>. Das ist erforderlich — JSX behandelt Tags in Kleinbuchstaben als HTML-Elemente.</p>
<h2>Props: camelCase</h2>
<p>Props verwenden camelCase: <code>userName</code>, <code>isLoading</code>, <code>onSubmit</code>, <code>maxRetries</code>.</p>
<h2>Hooks: use + PascalCase</h2>
<p>Custom Hooks beginnen mit <code>use</code>: <code>useAuth</code>, <code>useFetch</code>, <code>useLocalStorage</code>.</p>
<h2>Event-Handler</h2>
<p>Props: <code>on</code> + Event (<code>onClick</code>, <code>onSubmit</code>). Handler-Funktionen: <code>handle</code> + Event (<code>handleClick</code>, <code>handleSubmit</code>).</p>
<h2>Dateinamen</h2>
<table><thead><tr><th>Typ</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Komponente</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>Utility</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>Style</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>Test</td><td>Wie die Quelle</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>Namen konvertieren</h2>
<p><a href="%PASCAL%">PascalCase-Konverter</a> für Komponenten, <a href="%CAMEL%">camelCase</a> für Props, oder <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en React: Componentes, Props y Hooks",
    description: "Aprende las convenciones de nombres en React para componentes, props, hooks, manejadores de eventos y nombres de archivo.",
    body: `<p>React tiene convenciones de nombres estrictas impuestas por el propio JSX — los componentes deben empezar con mayúscula.</p>
<h2>Componentes: PascalCase</h2>
<p>Todos los componentes de React usan PascalCase: <code>UserProfile</code>, <code>ShoppingCart</code>, <code>NavBar</code>. Es obligatorio — JSX trata las etiquetas en minúscula como elementos HTML.</p>
<h2>Props: camelCase</h2>
<p>Las props usan camelCase: <code>userName</code>, <code>isLoading</code>, <code>onSubmit</code>, <code>maxRetries</code>.</p>
<h2>Hooks: use + PascalCase</h2>
<p>Los hooks personalizados empiezan con <code>use</code>: <code>useAuth</code>, <code>useFetch</code>, <code>useLocalStorage</code>.</p>
<h2>Manejadores de eventos</h2>
<p>Props: <code>on</code> + Evento (<code>onClick</code>, <code>onSubmit</code>). Funciones manejadoras: <code>handle</code> + Evento (<code>handleClick</code>, <code>handleSubmit</code>).</p>
<h2>Nombres de archivo</h2>
<table><thead><tr><th>Tipo</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Componente</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>Utilidad</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>Estilo</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>Test</td><td>Igual que la fuente</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>Convertir nombres</h2>
<p><a href="%PASCAL%">Conversor a PascalCase</a> para componentes, <a href="%CAMEL%">camelCase</a> para props, o el <a href="%HUB%">hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em React: Componentes, Props e Hooks",
    description: "Aprenda as convenções de nomes em React para componentes, props, hooks, manipuladores de eventos e nomes de arquivo.",
    body: `<p>O React tem convenções de nomes rígidas impostas pelo próprio JSX — os componentes devem começar com letra maiúscula.</p>
<h2>Componentes: PascalCase</h2>
<p>Todos os componentes React usam PascalCase: <code>UserProfile</code>, <code>ShoppingCart</code>, <code>NavBar</code>. É obrigatório — o JSX trata tags em minúsculas como elementos HTML.</p>
<h2>Props: camelCase</h2>
<p>As props usam camelCase: <code>userName</code>, <code>isLoading</code>, <code>onSubmit</code>, <code>maxRetries</code>.</p>
<h2>Hooks: use + PascalCase</h2>
<p>Hooks personalizados começam com <code>use</code>: <code>useAuth</code>, <code>useFetch</code>, <code>useLocalStorage</code>.</p>
<h2>Manipuladores de eventos</h2>
<p>Props: <code>on</code> + Evento (<code>onClick</code>, <code>onSubmit</code>). Funções manipuladoras: <code>handle</code> + Evento (<code>handleClick</code>, <code>handleSubmit</code>).</p>
<h2>Nomes de arquivo</h2>
<table><thead><tr><th>Tipo</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Componente</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>Utilitário</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>Estilo</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>Teste</td><td>Igual à fonte</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>Converter nomes</h2>
<p><a href="%PASCAL%">Conversor para PascalCase</a> para componentes, <a href="%CAMEL%">camelCase</a> para props, ou o <a href="%HUB%">hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage React : Composants, Props et Hooks",
    description: "Apprenez les conventions de nommage React pour les composants, props, hooks, gestionnaires d'événements et noms de fichiers.",
    body: `<p>React a des conventions de nommage strictes imposées par JSX lui-même — les composants doivent commencer par une majuscule.</p>
<h2>Composants : PascalCase</h2>
<p>Tous les composants React utilisent PascalCase : <code>UserProfile</code>, <code>ShoppingCart</code>, <code>NavBar</code>. C'est obligatoire — JSX traite les balises en minuscules comme des éléments HTML.</p>
<h2>Props : camelCase</h2>
<p>Les props utilisent camelCase : <code>userName</code>, <code>isLoading</code>, <code>onSubmit</code>, <code>maxRetries</code>.</p>
<h2>Hooks : use + PascalCase</h2>
<p>Les hooks personnalisés commencent par <code>use</code> : <code>useAuth</code>, <code>useFetch</code>, <code>useLocalStorage</code>.</p>
<h2>Gestionnaires d'événements</h2>
<p>Props : <code>on</code> + Événement (<code>onClick</code>, <code>onSubmit</code>). Fonctions gestionnaires : <code>handle</code> + Événement (<code>handleClick</code>, <code>handleSubmit</code>).</p>
<h2>Noms de fichiers</h2>
<table><thead><tr><th>Type</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Composant</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Hook</td><td>camelCase</td><td><code>useAuth.ts</code></td></tr>
<tr><td>Utilitaire</td><td>camelCase</td><td><code>formatDate.ts</code></td></tr>
<tr><td>Style</td><td>PascalCase</td><td><code>UserProfile.module.css</code></td></tr>
<tr><td>Test</td><td>Comme la source</td><td><code>UserProfile.test.tsx</code></td></tr>
</tbody></table>
<h2>Convertir les noms</h2>
<p><a href="%PASCAL%">Convertisseur PascalCase</a> pour les composants, <a href="%CAMEL%">camelCase</a> pour les props, ou le <a href="%HUB%">hub</a>.</p>`,
  }),
};
