import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "css-naming-conventions-bem", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "CSS Naming Conventions: BEM, OOCSS, SMACSS Compared",
    description: "Compare CSS naming conventions including BEM, OOCSS, and SMACSS. Learn how to name CSS classes for maintainable, scalable stylesheets.",
    body: `
<p>Naming CSS classes might seem trivial, but in large codebases it becomes one of the most important architectural decisions. A good naming convention prevents specificity wars, reduces naming collisions, and makes stylesheets self-documenting.</p>

<h2>Why CSS Naming Matters</h2>
<p>CSS has a global namespace. Every class name is available everywhere, and specificity rules determine which styles win. Without a naming convention, teams inevitably create conflicts: two developers both name their class <code>.card</code>, and one overwrites the other.</p>

<h2>BEM (Block Element Modifier)</h2>
<p>BEM is the most widely adopted CSS naming convention. It uses a structured pattern:</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* Example */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>BEM Rules</h3>
<ul>
<li><strong>Block:</strong> A standalone component. Named in kebab-case: <code>.search-form</code>, <code>.nav-bar</code>.</li>
<li><strong>Element:</strong> A part of a block that has no standalone meaning. Double underscore separator: <code>.search-form__input</code>.</li>
<li><strong>Modifier:</strong> A variant or state of a block/element. Double hyphen separator: <code>.search-form--dark</code>.</li>
</ul>

<h3>BEM Benefits</h3>
<ul>
<li>Self-documenting: <code>.card__title--highlighted</code> tells you exactly what it is</li>
<li>Low specificity: everything is a single class selector</li>
<li>No naming collisions: the block name scopes everything</li>
<li>Framework-agnostic: works with any tech stack</li>
</ul>

<h2>OOCSS (Object-Oriented CSS)</h2>
<p>OOCSS separates structure from skin and container from content:</p>
<pre><code>/* Structure */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* Skin */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSS creates highly reusable utility objects but can lead to many classes on a single HTML element.</p>

<h2>SMACSS (Scalable and Modular Architecture)</h2>
<p>SMACSS categorizes CSS rules into five types with prefixes:</p>
<table>
<thead><tr><th>Category</th><th>Prefix</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Base</td><td>none</td><td><code>html, body, h1</code></td></tr>
<tr><td>Layout</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>Module</td><td>none</td><td><code>.card</code></td></tr>
<tr><td>State</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>Theme</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS Modules and CSS-in-JS</h2>
<p>Modern frameworks like React offer alternatives that solve naming collisions at the tooling level:</p>
<ul>
<li><strong>CSS Modules:</strong> Automatically scopes class names. You write <code>.title</code>, the build tool outputs <code>.Card_title_x7kd2</code>. Use camelCase for class names since they become JavaScript properties.</li>
<li><strong>Tailwind CSS:</strong> Uses utility classes, eliminating custom naming entirely.</li>
<li><strong>styled-components / Emotion:</strong> CSS-in-JS with auto-generated class names.</li>
</ul>

<h2>Which Should You Choose?</h2>
<table>
<thead><tr><th>Approach</th><th>Best For</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>Traditional CSS, multi-developer teams, CMS themes</td></tr>
<tr><td>CSS Modules</td><td>React/Vue/Svelte component-based projects</td></tr>
<tr><td>Tailwind</td><td>Rapid prototyping, utility-first workflows</td></tr>
<tr><td>SMACSS</td><td>Large legacy codebases needing organization</td></tr>
</tbody>
</table>

<h2>Convert Your Class Names</h2>
<p>CSS classes always use kebab-case. Convert from other formats with our <a href="%KEBAB%">kebab-case converter</a>. If you need camelCase for CSS Modules, try the <a href="%CAMEL%">camelCase converter</a> or the <a href="%HUB%">case converter hub</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "CSSの命名規則：BEM、OOCSS、SMACSSの比較",
    description: "BEM、OOCSS、SMACSSなどのCSS命名規則を比較。メンテナブルなCSSクラス名の付け方を解説。",
    body: `
<p>CSSクラスの命名は大規模なコードベースで最も重要な設計判断の一つです。</p>
<h2>BEM（Block Element Modifier）</h2>
<p>最も広く採用されている規則：<code>.block__element--modifier</code></p>
<pre><code>.card {}
.card__title {}
.card--featured {}</code></pre>
<h2>OOCSS</h2>
<p>構造とスキンを分離する手法。再利用性が高い。</p>
<h2>CSS Modules</h2>
<p>ReactやVueでは自動スコーピングで命名衝突を解決。</p>
<h2>変換ツール</h2>
<p><a href="%KEBAB%">kebab-caseコンバーター</a>や<a href="%HUB%">ケース変換ハブ</a>でCSS用に変換できます。</p>
`,
  }),
  de: build("de", {
    title: "CSS-Namenskonventionen: BEM, OOCSS, SMACSS im Vergleich",
    description: "Vergleich von CSS-Namenskonventionen: BEM, OOCSS und SMACSS. Wie man CSS-Klassen für wartbare Stylesheets benennt.",
    body: `
<p>Die Benennung von CSS-Klassen wird bei großen Projekten zu einer der wichtigsten Architekturentscheidungen.</p>
<h2>BEM</h2>
<p>Die am weitesten verbreitete Konvention: <code>.block__element--modifier</code></p>
<h2>OOCSS</h2>
<p>Trennung von Struktur und Skin für maximale Wiederverwendbarkeit.</p>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%KEBAB%">kebab-case-Konverter</a> oder den <a href="%HUB%">Konvertierungs-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres CSS: BEM, OOCSS, SMACSS comparados",
    description: "Compara convenciones de nombres CSS: BEM, OOCSS y SMACSS. Aprende a nombrar clases CSS para hojas de estilo mantenibles.",
    body: `
<p>Nombrar clases CSS se convierte en una de las decisiones arquitectónicas más importantes en proyectos grandes.</p>
<h2>BEM</h2>
<p>La convención más adoptada: <code>.block__element--modifier</code></p>
<h2>OOCSS</h2>
<p>Separación de estructura y apariencia para máxima reutilización.</p>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%KEBAB%">conversor kebab-case</a> o el <a href="%HUB%">hub de conversión</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes CSS: BEM, OOCSS, SMACSS comparados",
    description: "Compare convenções de nomes CSS: BEM, OOCSS e SMACSS. Aprenda a nomear classes CSS para folhas de estilo manuteníveis.",
    body: `
<p>Nomear classes CSS se torna uma das decisões arquiteturais mais importantes em projetos grandes.</p>
<h2>BEM</h2>
<p>A convenção mais adotada: <code>.block__element--modifier</code></p>
<h2>OOCSS</h2>
<p>Separação de estrutura e aparência para máxima reutilização.</p>
<h2>Conversão</h2>
<p>Use nosso <a href="%KEBAB%">conversor kebab-case</a> ou o <a href="%HUB%">hub de conversão</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage CSS : BEM, OOCSS, SMACSS comparés",
    description: "Comparez les conventions de nommage CSS : BEM, OOCSS et SMACSS. Comment nommer vos classes CSS pour des feuilles de style maintenables.",
    body: `
<p>Le nommage des classes CSS devient l'une des décisions architecturales les plus importantes dans les grands projets.</p>
<h2>BEM</h2>
<p>La convention la plus adoptée : <code>.block__element--modifier</code></p>
<h2>OOCSS</h2>
<p>Séparation de la structure et de l'apparence pour une réutilisation maximale.</p>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%KEBAB%">convertisseur kebab-case</a> ou le <a href="%HUB%">hub de conversion</a>.</p>
`,
  }),
};
