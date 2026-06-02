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
    description: "BEM、OOCSS、SMACSSなどのCSS命名規則を比較。メンテナブルでスケーラブルなスタイルシートのためのCSSクラス名の付け方を解説します。",
    body: `
<p>CSSクラスの命名は些細なことに思えるかもしれませんが、大規模なコードベースでは最も重要な設計判断の一つになります。適切な命名規則は、詳細度の競合を防ぎ、名前の衝突を減らし、スタイルシートを自己文書化します。</p>

<h2>CSSの命名が重要な理由</h2>
<p>CSSはグローバル名前空間を持ちます。すべてのクラス名はどこからでもアクセス可能で、詳細度ルールがどのスタイルが適用されるかを決定します。命名規則がなければ、チームは必ず衝突を起こします。二人の開発者がともに<code>.card</code>と名付け、一方が他方を上書きしてしまうのです。</p>

<h2>BEM（Block Element Modifier）</h2>
<p>BEMは最も広く採用されているCSS命名規則です。構造化されたパターンを使います：</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* 例 */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>BEMのルール</h3>
<ul>
<li><strong>ブロック：</strong>独立したコンポーネント。kebab-caseで命名：<code>.search-form</code>、<code>.nav-bar</code></li>
<li><strong>エレメント：</strong>ブロックの一部で、単独では意味を持たない。ダブルアンダースコアで区切る：<code>.search-form__input</code></li>
<li><strong>モディファイア：</strong>ブロック/エレメントのバリエーションや状態。ダブルハイフンで区切る：<code>.search-form--dark</code></li>
</ul>

<h3>BEMの利点</h3>
<ul>
<li>自己文書化：<code>.card__title--highlighted</code>は何であるかが一目瞭然</li>
<li>低い詳細度：すべてが単一クラスセレクタ</li>
<li>名前の衝突なし：ブロック名がすべてをスコープ化</li>
<li>フレームワーク非依存：どのテックスタックでも動作</li>
</ul>

<h2>OOCSS（オブジェクト指向CSS）</h2>
<p>OOCSSは構造とスキン、コンテナとコンテンツを分離します：</p>
<pre><code>/* 構造 */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* スキン */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSSは高い再利用性を持つユーティリティオブジェクトを作りますが、一つのHTML要素に多くのクラスが付くことがあります。</p>

<h2>SMACSS（スケーラブルでモジュラーなアーキテクチャ）</h2>
<p>SMACSSはCSSルールを5つのカテゴリに分類し、プレフィックスを使います：</p>
<table>
<thead><tr><th>カテゴリ</th><th>プレフィックス</th><th>例</th></tr></thead>
<tbody>
<tr><td>ベース</td><td>なし</td><td><code>html, body, h1</code></td></tr>
<tr><td>レイアウト</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>モジュール</td><td>なし</td><td><code>.card</code></td></tr>
<tr><td>ステート</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>テーマ</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS ModulesとCSS-in-JS</h2>
<p>Reactなどのモダンフレームワークはツールレベルで名前衝突を解決する代替手段を提供します：</p>
<ul>
<li><strong>CSS Modules：</strong>クラス名を自動的にスコープ化。<code>.title</code>と書くと、ビルドツールが<code>.Card_title_x7kd2</code>を出力。JavaScriptのプロパティになるためcamelCaseを使用。</li>
<li><strong>Tailwind CSS：</strong>ユーティリティクラスを使用し、カスタム命名を完全に排除。</li>
<li><strong>styled-components / Emotion：</strong>自動生成クラス名を持つCSS-in-JS。</li>
</ul>

<h2>どれを選ぶべきか？</h2>
<table>
<thead><tr><th>アプローチ</th><th>最適な用途</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>従来のCSS、多人数チーム、CMSテーマ</td></tr>
<tr><td>CSS Modules</td><td>React/Vue/Svelteのコンポーネントベースプロジェクト</td></tr>
<tr><td>Tailwind</td><td>ラピッドプロトタイピング、ユーティリティファーストのワークフロー</td></tr>
<tr><td>SMACSS</td><td>整理が必要な大規模レガシーコードベース</td></tr>
</tbody>
</table>

<h2>クラス名を変換する</h2>
<p>CSSクラスは常にkebab-caseを使います。他の形式からの変換には<a href="%KEBAB%">kebab-caseコンバーター</a>をご利用ください。CSS Modules用のcamelCaseが必要な場合は<a href="%CAMEL%">camelCaseコンバーター</a>や<a href="%HUB%">ケースコンバーターハブ</a>をお試しください。</p>
`,
  }),
  de: build("de", {
    title: "CSS-Namenskonventionen: BEM, OOCSS, SMACSS im Vergleich",
    description: "Vergleichen Sie CSS-Namenskonventionen wie BEM, OOCSS und SMACSS. Lernen Sie, wie man CSS-Klassen für wartbare, skalierbare Stylesheets benennt.",
    body: `
<p>Die Benennung von CSS-Klassen mag trivial erscheinen, aber in großen Codebases wird sie zu einer der wichtigsten Architekturentscheidungen. Eine gute Namenskonvention verhindert Spezifitätskonflikte, reduziert Namenskollisionen und macht Stylesheets selbstdokumentierend.</p>

<h2>Warum CSS-Benennung wichtig ist</h2>
<p>CSS hat einen globalen Namensraum. Jeder Klassenname ist überall verfügbar, und Spezifitätsregeln bestimmen, welche Stile gewinnen. Ohne eine Namenskonvention erstellen Teams unweigerlich Konflikte: Zwei Entwickler benennen ihre Klasse beide <code>.card</code>, und einer überschreibt den anderen.</p>

<h2>BEM (Block Element Modifier)</h2>
<p>BEM ist die am weitesten verbreitete CSS-Namenskonvention. Sie verwendet ein strukturiertes Muster:</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* Beispiel */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>BEM-Regeln</h3>
<ul>
<li><strong>Block:</strong> Eine eigenständige Komponente. In kebab-case benannt: <code>.search-form</code>, <code>.nav-bar</code>.</li>
<li><strong>Element:</strong> Ein Teil eines Blocks ohne eigenständige Bedeutung. Doppelter Unterstrich als Trenner: <code>.search-form__input</code>.</li>
<li><strong>Modifier:</strong> Eine Variante oder ein Zustand eines Blocks/Elements. Doppelter Bindestrich als Trenner: <code>.search-form--dark</code>.</li>
</ul>

<h3>BEM-Vorteile</h3>
<ul>
<li>Selbstdokumentierend: <code>.card__title--highlighted</code> sagt genau, was es ist</li>
<li>Niedrige Spezifität: alles ist ein einzelner Klassen-Selektor</li>
<li>Keine Namenskollisionen: der Blockname scoped alles</li>
<li>Framework-agnostisch: funktioniert mit jedem Tech-Stack</li>
</ul>

<h2>OOCSS (Objektorientiertes CSS)</h2>
<p>OOCSS trennt Struktur von Skin und Container von Inhalt:</p>
<pre><code>/* Struktur */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* Skin */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSS erstellt hochgradig wiederverwendbare Utility-Objekte, kann aber zu vielen Klassen auf einem einzelnen HTML-Element führen.</p>

<h2>SMACSS (Scalable and Modular Architecture)</h2>
<p>SMACSS kategorisiert CSS-Regeln in fünf Typen mit Präfixen:</p>
<table>
<thead><tr><th>Kategorie</th><th>Präfix</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>Base</td><td>keiner</td><td><code>html, body, h1</code></td></tr>
<tr><td>Layout</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>Modul</td><td>keiner</td><td><code>.card</code></td></tr>
<tr><td>State</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>Theme</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS Modules und CSS-in-JS</h2>
<p>Moderne Frameworks wie React bieten Alternativen, die Namenskollisionen auf Werkzeugebene lösen:</p>
<ul>
<li><strong>CSS Modules:</strong> Scoped Klassennamen automatisch. Sie schreiben <code>.title</code>, das Build-Tool gibt <code>.Card_title_x7kd2</code> aus. Verwenden Sie camelCase für Klassennamen, da sie zu JavaScript-Properties werden.</li>
<li><strong>Tailwind CSS:</strong> Verwendet Utility-Klassen und eliminiert benutzerdefinierte Benennung vollständig.</li>
<li><strong>styled-components / Emotion:</strong> CSS-in-JS mit automatisch generierten Klassennamen.</li>
</ul>

<h2>Welchen Ansatz sollten Sie wählen?</h2>
<table>
<thead><tr><th>Ansatz</th><th>Am besten für</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>Traditionelles CSS, Teams mit mehreren Entwicklern, CMS-Themes</td></tr>
<tr><td>CSS Modules</td><td>React/Vue/Svelte-Komponentenprojekte</td></tr>
<tr><td>Tailwind</td><td>Rapid Prototyping, Utility-first-Workflows</td></tr>
<tr><td>SMACSS</td><td>Große Legacy-Codebases, die Organisation brauchen</td></tr>
</tbody>
</table>

<h2>Klassennamen konvertieren</h2>
<p>CSS-Klassen verwenden immer kebab-case. Konvertieren Sie aus anderen Formaten mit unserem <a href="%KEBAB%">kebab-case-Konverter</a>. Wenn Sie camelCase für CSS Modules benötigen, nutzen Sie den <a href="%CAMEL%">camelCase-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres CSS: BEM, OOCSS, SMACSS comparados",
    description: "Compara las convenciones de nombres CSS como BEM, OOCSS y SMACSS. Aprende a nombrar clases CSS para hojas de estilo mantenibles y escalables.",
    body: `
<p>Nombrar clases CSS puede parecer trivial, pero en grandes bases de código se convierte en una de las decisiones arquitectónicas más importantes. Una buena convención de nombres previene guerras de especificidad, reduce colisiones de nombres y hace que las hojas de estilo se autodocumenten.</p>

<h2>Por qué importa la nomenclatura CSS</h2>
<p>CSS tiene un espacio de nombres global. Cada nombre de clase está disponible en todas partes, y las reglas de especificidad determinan qué estilos ganan. Sin una convención de nombres, los equipos inevitablemente crean conflictos: dos desarrolladores nombran su clase <code>.card</code>, y uno sobrescribe al otro.</p>

<h2>BEM (Block Element Modifier)</h2>
<p>BEM es la convención de nombres CSS más ampliamente adoptada. Usa un patrón estructurado:</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* Ejemplo */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>Reglas de BEM</h3>
<ul>
<li><strong>Bloque:</strong> Un componente independiente. Nombrado en kebab-case: <code>.search-form</code>, <code>.nav-bar</code>.</li>
<li><strong>Elemento:</strong> Una parte del bloque sin significado independiente. Separador de doble guion bajo: <code>.search-form__input</code>.</li>
<li><strong>Modificador:</strong> Una variante o estado de un bloque/elemento. Separador de doble guion: <code>.search-form--dark</code>.</li>
</ul>

<h3>Beneficios de BEM</h3>
<ul>
<li>Autodocumentado: <code>.card__title--highlighted</code> te dice exactamente qué es</li>
<li>Baja especificidad: todo es un selector de clase simple</li>
<li>Sin colisiones de nombres: el nombre del bloque delimita todo</li>
<li>Agnóstico de framework: funciona con cualquier stack tecnológico</li>
</ul>

<h2>OOCSS (CSS Orientado a Objetos)</h2>
<p>OOCSS separa estructura de apariencia y contenedor de contenido:</p>
<pre><code>/* Estructura */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* Apariencia */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSS crea objetos de utilidad altamente reutilizables, pero puede resultar en muchas clases en un solo elemento HTML.</p>

<h2>SMACSS (Arquitectura Escalable y Modular)</h2>
<p>SMACSS categoriza las reglas CSS en cinco tipos con prefijos:</p>
<table>
<thead><tr><th>Categoría</th><th>Prefijo</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Base</td><td>ninguno</td><td><code>html, body, h1</code></td></tr>
<tr><td>Layout</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>Módulo</td><td>ninguno</td><td><code>.card</code></td></tr>
<tr><td>Estado</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>Tema</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS Modules y CSS-in-JS</h2>
<p>Frameworks modernos como React ofrecen alternativas que resuelven las colisiones de nombres a nivel de herramientas:</p>
<ul>
<li><strong>CSS Modules:</strong> Delimita automáticamente los nombres de clase. Escribes <code>.title</code>, la herramienta de build produce <code>.Card_title_x7kd2</code>. Usa camelCase para los nombres de clase ya que se convierten en propiedades JavaScript.</li>
<li><strong>Tailwind CSS:</strong> Usa clases de utilidad, eliminando por completo la nomenclatura personalizada.</li>
<li><strong>styled-components / Emotion:</strong> CSS-in-JS con nombres de clase autogenerados.</li>
</ul>

<h2>¿Cuál deberías elegir?</h2>
<table>
<thead><tr><th>Enfoque</th><th>Mejor para</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>CSS tradicional, equipos multi-desarrollador, temas CMS</td></tr>
<tr><td>CSS Modules</td><td>Proyectos basados en componentes React/Vue/Svelte</td></tr>
<tr><td>Tailwind</td><td>Prototipado rápido, flujos de trabajo utility-first</td></tr>
<tr><td>SMACSS</td><td>Grandes bases de código legacy que necesitan organización</td></tr>
</tbody>
</table>

<h2>Convierte tus nombres de clase</h2>
<p>Las clases CSS siempre usan kebab-case. Convierte desde otros formatos con nuestro <a href="%KEBAB%">conversor kebab-case</a>. Si necesitas camelCase para CSS Modules, prueba el <a href="%CAMEL%">conversor camelCase</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes CSS: BEM, OOCSS, SMACSS comparados",
    description: "Compare convenções de nomes CSS como BEM, OOCSS e SMACSS. Aprenda a nomear classes CSS para folhas de estilo manuteníveis e escaláveis.",
    body: `
<p>Nomear classes CSS pode parecer trivial, mas em grandes bases de código torna-se uma das decisões arquiteturais mais importantes. Uma boa convenção de nomes previne guerras de especificidade, reduz colisões de nomes e torna as folhas de estilo autodocumentadas.</p>

<h2>Por que a nomenclatura CSS importa</h2>
<p>CSS tem um namespace global. Todo nome de classe está disponível em qualquer lugar, e as regras de especificidade determinam quais estilos vencem. Sem uma convenção de nomes, equipes inevitavelmente criam conflitos: dois desenvolvedores nomeiam suas classes como <code>.card</code>, e um sobrescreve o outro.</p>

<h2>BEM (Block Element Modifier)</h2>
<p>BEM é a convenção de nomes CSS mais amplamente adotada. Usa um padrão estruturado:</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* Exemplo */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>Regras do BEM</h3>
<ul>
<li><strong>Bloco:</strong> Um componente independente. Nomeado em kebab-case: <code>.search-form</code>, <code>.nav-bar</code>.</li>
<li><strong>Elemento:</strong> Uma parte do bloco sem significado independente. Separador de duplo underscore: <code>.search-form__input</code>.</li>
<li><strong>Modificador:</strong> Uma variante ou estado de um bloco/elemento. Separador de duplo hífen: <code>.search-form--dark</code>.</li>
</ul>

<h3>Benefícios do BEM</h3>
<ul>
<li>Autodocumentado: <code>.card__title--highlighted</code> diz exatamente o que é</li>
<li>Baixa especificidade: tudo é um seletor de classe simples</li>
<li>Sem colisões de nomes: o nome do bloco delimita tudo</li>
<li>Agnóstico de framework: funciona com qualquer stack tecnológico</li>
</ul>

<h2>OOCSS (CSS Orientado a Objetos)</h2>
<p>OOCSS separa estrutura de aparência e contêiner de conteúdo:</p>
<pre><code>/* Estrutura */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* Aparência */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSS cria objetos utilitários altamente reutilizáveis, mas pode resultar em muitas classes em um único elemento HTML.</p>

<h2>SMACSS (Arquitetura Escalável e Modular)</h2>
<p>SMACSS categoriza regras CSS em cinco tipos com prefixos:</p>
<table>
<thead><tr><th>Categoria</th><th>Prefixo</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Base</td><td>nenhum</td><td><code>html, body, h1</code></td></tr>
<tr><td>Layout</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>Módulo</td><td>nenhum</td><td><code>.card</code></td></tr>
<tr><td>Estado</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>Tema</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS Modules e CSS-in-JS</h2>
<p>Frameworks modernos como React oferecem alternativas que resolvem colisões de nomes no nível de ferramentas:</p>
<ul>
<li><strong>CSS Modules:</strong> Delimita automaticamente os nomes de classe. Você escreve <code>.title</code>, a ferramenta de build produz <code>.Card_title_x7kd2</code>. Use camelCase para nomes de classe, pois eles se tornam propriedades JavaScript.</li>
<li><strong>Tailwind CSS:</strong> Usa classes utilitárias, eliminando completamente a nomenclatura personalizada.</li>
<li><strong>styled-components / Emotion:</strong> CSS-in-JS com nomes de classe autogerados.</li>
</ul>

<h2>Qual você deve escolher?</h2>
<table>
<thead><tr><th>Abordagem</th><th>Melhor para</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>CSS tradicional, equipes multi-desenvolvedores, temas CMS</td></tr>
<tr><td>CSS Modules</td><td>Projetos baseados em componentes React/Vue/Svelte</td></tr>
<tr><td>Tailwind</td><td>Prototipagem rápida, fluxos de trabalho utility-first</td></tr>
<tr><td>SMACSS</td><td>Grandes bases de código legado que precisam de organização</td></tr>
</tbody>
</table>

<h2>Converta seus nomes de classe</h2>
<p>Classes CSS sempre usam kebab-case. Converta de outros formatos com nosso <a href="%KEBAB%">conversor kebab-case</a>. Se precisar de camelCase para CSS Modules, experimente o <a href="%CAMEL%">conversor camelCase</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage CSS : BEM, OOCSS, SMACSS comparés",
    description: "Comparez les conventions de nommage CSS comme BEM, OOCSS et SMACSS. Apprenez à nommer vos classes CSS pour des feuilles de style maintenables et évolutives.",
    body: `
<p>Nommer les classes CSS peut sembler anodin, mais dans les grandes bases de code, c'est l'une des décisions architecturales les plus importantes. Une bonne convention de nommage prévient les guerres de spécificité, réduit les collisions de noms et rend les feuilles de style auto-documentées.</p>

<h2>Pourquoi le nommage CSS est important</h2>
<p>CSS possède un espace de noms global. Chaque nom de classe est disponible partout, et les règles de spécificité déterminent quels styles l'emportent. Sans convention de nommage, les équipes créent inévitablement des conflits : deux développeurs nomment tous deux leur classe <code>.card</code>, et l'un écrase l'autre.</p>

<h2>BEM (Block Element Modifier)</h2>
<p>BEM est la convention de nommage CSS la plus largement adoptée. Elle utilise un motif structuré :</p>
<pre><code>.block {}
.block__element {}
.block--modifier {}

/* Exemple */
.card {}
.card__title {}
.card__image {}
.card--featured {}
.card__title--large {}</code></pre>

<h3>Règles BEM</h3>
<ul>
<li><strong>Bloc :</strong> Un composant autonome. Nommé en kebab-case : <code>.search-form</code>, <code>.nav-bar</code>.</li>
<li><strong>Élément :</strong> Une partie d'un bloc sans signification autonome. Séparateur double underscore : <code>.search-form__input</code>.</li>
<li><strong>Modificateur :</strong> Une variante ou un état d'un bloc/élément. Séparateur double tiret : <code>.search-form--dark</code>.</li>
</ul>

<h3>Avantages de BEM</h3>
<ul>
<li>Auto-documenté : <code>.card__title--highlighted</code> indique exactement ce que c'est</li>
<li>Faible spécificité : tout est un sélecteur de classe simple</li>
<li>Pas de collision de noms : le nom du bloc délimite tout</li>
<li>Agnostique de framework : fonctionne avec n'importe quel stack technique</li>
</ul>

<h2>OOCSS (CSS Orienté Objet)</h2>
<p>OOCSS sépare la structure de l'apparence et le conteneur du contenu :</p>
<pre><code>/* Structure */
.media { display: flex; align-items: start; }
.media__body { flex: 1; }

/* Apparence */
.theme-dark { background: #333; color: #fff; }
.theme-light { background: #fff; color: #333; }</code></pre>
<p>OOCSS crée des objets utilitaires hautement réutilisables, mais peut entraîner de nombreuses classes sur un seul élément HTML.</p>

<h2>SMACSS (Architecture Évolutive et Modulaire)</h2>
<p>SMACSS catégorise les règles CSS en cinq types avec des préfixes :</p>
<table>
<thead><tr><th>Catégorie</th><th>Préfixe</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Base</td><td>aucun</td><td><code>html, body, h1</code></td></tr>
<tr><td>Layout</td><td><code>l-</code></td><td><code>.l-sidebar</code></td></tr>
<tr><td>Module</td><td>aucun</td><td><code>.card</code></td></tr>
<tr><td>État</td><td><code>is-</code></td><td><code>.is-active</code></td></tr>
<tr><td>Thème</td><td><code>t-</code></td><td><code>.t-dark</code></td></tr>
</tbody>
</table>

<h2>CSS Modules et CSS-in-JS</h2>
<p>Les frameworks modernes comme React offrent des alternatives qui résolvent les collisions de noms au niveau des outils :</p>
<ul>
<li><strong>CSS Modules :</strong> Délimite automatiquement les noms de classe. Vous écrivez <code>.title</code>, l'outil de build produit <code>.Card_title_x7kd2</code>. Utilisez camelCase car ils deviennent des propriétés JavaScript.</li>
<li><strong>Tailwind CSS :</strong> Utilise des classes utilitaires, éliminant entièrement le nommage personnalisé.</li>
<li><strong>styled-components / Emotion :</strong> CSS-in-JS avec des noms de classe auto-générés.</li>
</ul>

<h2>Lequel choisir ?</h2>
<table>
<thead><tr><th>Approche</th><th>Idéal pour</th></tr></thead>
<tbody>
<tr><td>BEM</td><td>CSS traditionnel, équipes multi-développeurs, thèmes CMS</td></tr>
<tr><td>CSS Modules</td><td>Projets à composants React/Vue/Svelte</td></tr>
<tr><td>Tailwind</td><td>Prototypage rapide, workflows utility-first</td></tr>
<tr><td>SMACSS</td><td>Grandes bases de code legacy nécessitant une organisation</td></tr>
</tbody>
</table>

<h2>Convertissez vos noms de classe</h2>
<p>Les classes CSS utilisent toujours kebab-case. Convertissez depuis d'autres formats avec notre <a href="%KEBAB%">convertisseur kebab-case</a>. Si vous avez besoin de camelCase pour CSS Modules, essayez le <a href="%CAMEL%">convertisseur camelCase</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>
`,
  }),
};
