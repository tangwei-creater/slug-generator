import { writeFileSync, existsSync } from "fs";
import { join } from "path";
const contentDir = join(import.meta.dirname, "../src/content/blog");
const locales = ["en","ja","de","es","pt","fr"];

function gen(post) {
  const filePath = join(contentDir, `${post.slug}.ts`);
  if (existsSync(filePath)) { console.log(`SKIP: ${post.slug}`); return; }
  const linkKeys = Object.keys(post.links || {});
  const replaceLines = linkKeys.length ? linkKeys.map(k => `    .replaceAll("${k}", p(l, "${post.links[k]}"))`).join("\n") : '    // no links';
  let entries = "";
  for (const loc of locales) {
    const a = post[loc];
    const eb = a.body.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$");
    entries += `  ${loc}: build("${loc}", {\n    title: "${a.title.replace(/"/g,'\\"')}",\n    description: "${a.description.replace(/"/g,'\\"')}",\n    body: \`${eb}\`,\n  }),\n`;
  }
  const c = `import type { Locale } from "@/i18n/routing";\n\nexport interface Article { title: string; description: string; body: string; }\n\nexport const meta = { slug: "${post.slug}", date: "${post.date}", readTime: ${post.readTime} };\n\nconst p = (l: Locale, path: string) => (l === "en" ? path : \`/\${l}\${path}\`);\nconst build = (l: Locale, t: Article): Article => ({\n  ...t,\n  body: t.body\n${replaceLines},\n});\n\nexport const article: Record<Locale, Article> = {\n${entries}};\n`;
  writeFileSync(filePath, c, "utf-8");
  console.log(`Created: ${post.slug}`);
}

const L = (en,ja,de,es,pt,fr) => ({en,ja,de,es,pt,fr});
const T = (title,description,body) => ({title,description,body});

// Helper for short locale bodies with tool link
const sl = (tool, toolLabel, hub) => ({
  ja: (tl,desc) => T(tl,desc,`<p>${desc}</p><h2>変換</h2><p><a href="${tool}">${toolLabel}コンバーター</a>や<a href="${hub}">ケース変換ハブ</a>で変換。</p>`),
  de: (tl,desc) => T(tl,desc,`<p>${desc}</p><h2>Konvertierung</h2><p><a href="${tool}">${toolLabel}-Konverter</a> oder <a href="${hub}">Hub</a>.</p>`),
  es: (tl,desc) => T(tl,desc,`<p>${desc}</p><h2>Conversión</h2><p><a href="${tool}">Conversor ${toolLabel}</a> o <a href="${hub}">hub</a>.</p>`),
  pt: (tl,desc) => T(tl,desc,`<p>${desc}</p><h2>Conversão</h2><p><a href="${tool}">Conversor ${toolLabel}</a> ou <a href="${hub}">hub</a>.</p>`),
  fr: (tl,desc) => T(tl,desc,`<p>${desc}</p><h2>Conversion</h2><p><a href="${tool}">Convertisseur ${toolLabel}</a> ou <a href="${hub}">hub</a>.</p>`),
});

const posts = [

// ─── LANGUAGE-SPECIFIC NAMING ───
{slug:"database-naming-conventions",date:"2026-06-01",readTime:6,
links:{"%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("Database Naming Conventions: Tables, Columns, and Keys",
"Learn SQL database naming conventions for tables, columns, indexes, and foreign keys. Covers snake_case, singular vs plural, and naming anti-patterns.",
`<p>Consistent naming in databases prevents confusion, simplifies queries, and makes schema migrations safer.</p>
<h2>The Standard: snake_case</h2>
<p>The overwhelming convention in SQL databases is <strong>snake_case</strong> for everything: table names, column names, indexes, and constraints.</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>Table Names: Singular or Plural?</h2>
<table><thead><tr><th>Style</th><th>Example</th><th>Used By</th></tr></thead><tbody>
<tr><td>Singular</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>Plural</td><td><code>users</code>, <code>orders</code></td><td>Rails, many teams</td></tr>
</tbody></table>
<p>Pick one and be consistent. Both are valid.</p>
<h2>Column Naming Rules</h2>
<ul>
<li>Primary key: <code>id</code> or <code>table_name_id</code></li>
<li>Foreign key: <code>referenced_table_id</code> (e.g., <code>user_id</code>)</li>
<li>Timestamps: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>Booleans: <code>is_active</code>, <code>has_verified</code></li>
<li>Avoid reserved words: don't name columns <code>order</code>, <code>user</code>, <code>group</code></li>
</ul>
<h2>Index and Constraint Names</h2>
<pre><code>idx_users_email        -- index
uq_users_email         -- unique constraint
fk_orders_user_id      -- foreign key
chk_orders_total       -- check constraint</code></pre>
<h2>Convert to snake_case</h2>
<p>Use the <a href="%SNAKE%">snake_case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`),
ja:T("データベース命名規則：テーブル、カラム、キー","SQLデータベースの命名規則を解説。snake_case、単数形vs複数形など。",`<p>データベースではsnake_caseが標準。テーブル名、カラム名、インデックスすべてに適用されます。</p><h2>変換</h2><p><a href="%SNAKE%">snake_caseコンバーター</a>で変換。</p>`),
de:T("Datenbank-Namenskonventionen: Tabellen, Spalten und Schlüssel","SQL-Namenskonventionen für Tabellen, Spalten und Indizes.",`<p>In SQL-Datenbanken ist snake_case der Standard für alles.</p><h2>Konvertierung</h2><p><a href="%SNAKE%">snake_case-Konverter</a>.</p>`),
es:T("Convenciones de nombres en bases de datos: Tablas, columnas y claves","Convenciones SQL para tablas, columnas e índices.",`<p>En bases de datos SQL, snake_case es el estándar para todo.</p><h2>Conversión</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`),
pt:T("Convenções de nomes em bancos de dados: Tabelas, colunas e chaves","Convenções SQL para tabelas, colunas e índices.",`<p>Em bancos SQL, snake_case é o padrão para tudo.</p><h2>Conversão</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`),
fr:T("Conventions de nommage en base de données : Tables, colonnes et clés","Conventions SQL pour tables, colonnes et index.",`<p>En SQL, snake_case est le standard pour tout.</p><h2>Conversion</h2><p><a href="%SNAKE%">Convertisseur snake_case</a>.</p>`),
},

{slug:"rest-api-naming-conventions",date:"2026-06-01",readTime:6,
links:{"%KEBAB%":"/kebab-case-converter","%SNAKE%":"/snake-case-converter","%CAMEL%":"/camelcase-converter","%HUB%":"/case-converter-online"},
en:T("REST API Naming Conventions: URLs, Methods, and JSON Keys",
"Learn REST API naming best practices for endpoints, HTTP methods, query parameters, and response body keys.",
`<p>A well-named REST API is intuitive, consistent, and self-documenting. These conventions are followed by most production APIs.</p>
<h2>URL Path Conventions</h2>
<ul>
<li>Use <strong>kebab-case</strong> or <strong>lowercase</strong> for URL paths: <code>/user-profiles</code></li>
<li>Use <strong>plural nouns</strong> for collections: <code>/users</code>, <code>/orders</code></li>
<li>Use <strong>resource IDs</strong> for individual items: <code>/users/123</code></li>
<li>Nest sub-resources: <code>/users/123/orders</code></li>
<li>Avoid verbs in URLs: <code>POST /users</code> not <code>POST /create-user</code></li>
</ul>
<h2>HTTP Methods</h2>
<table><thead><tr><th>Method</th><th>Purpose</th><th>Example</th></tr></thead><tbody>
<tr><td>GET</td><td>Read</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Create</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Full update</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Partial update</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Delete</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>JSON Response Keys</h2>
<p>Use <strong>camelCase</strong> (Google style) or <strong>snake_case</strong> (GitHub/Stripe style). Pick one and be consistent across all endpoints.</p>
<h2>Query Parameters</h2>
<p>Use snake_case or camelCase consistently: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Convert Formats</h2>
<p><a href="%KEBAB%">kebab-case converter</a> for URLs, <a href="%CAMEL%">camelCase</a> or <a href="%SNAKE%">snake_case</a> for JSON keys. Try the <a href="%HUB%">hub</a>.</p>`),
ja:T("REST API命名規則：URL、メソッド、JSONキー","REST APIのエンドポイント、HTTPメソッド、レスポンスキーの命名ベストプラクティス。",`<p>適切な命名のREST APIは直感的で一貫性があります。URLはkebab-case、JSONキーはcamelCaseまたはsnake_case。</p><h2>変換</h2><p><a href="%HUB%">ケース変換ハブ</a>。</p>`),
de:T("REST-API-Namenskonventionen: URLs, Methoden und JSON-Keys","Best Practices für REST-API-Endpunkte und JSON-Keys.",`<p>URLs: kebab-case, JSON-Keys: camelCase oder snake_case. Konsistenz ist entscheidend.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en REST API: URLs, métodos y claves JSON","Mejores prácticas para endpoints REST y claves JSON.",`<p>URLs: kebab-case, claves JSON: camelCase o snake_case. La consistencia es clave.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em REST API: URLs, métodos e chaves JSON","Melhores práticas para endpoints REST e chaves JSON.",`<p>URLs: kebab-case, chaves JSON: camelCase ou snake_case. Consistência é fundamental.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage REST API : URLs, méthodes et clés JSON","Bonnes pratiques pour endpoints REST et clés JSON.",`<p>URLs : kebab-case, clés JSON : camelCase ou snake_case. La cohérence est essentielle.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"react-component-naming-conventions",date:"2026-06-01",readTime:5,links:{"%PASCAL%":"/pascal-case-converter","%CAMEL%":"/camelcase-converter","%KEBAB%":"/kebab-case-converter","%HUB%":"/case-converter-online"},
en:T("React Component Naming Conventions: Files, Props, and Hooks","Learn React naming conventions for components, props, hooks, event handlers, and file names.",
`<p>React has strong naming conventions that are enforced by JSX itself — components must start with an uppercase letter.</p>
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
<p><a href="%PASCAL%">PascalCase converter</a> for components, <a href="%CAMEL%">camelCase</a> for props, or <a href="%HUB%">hub</a>.</p>`),
ja:T("Reactコンポーネント命名規則：ファイル、Props、Hooks","Reactのコンポーネント、Props、Hooks、イベントハンドラーの命名規則を解説。",`<p>ReactコンポーネントはPascalCase必須。PropsはcamelCase、カスタムHooksはuse接頭辞。</p><h2>変換</h2><p><a href="%PASCAL%">PascalCase</a>、<a href="%CAMEL%">camelCase</a>コンバーター。</p>`),
de:T("React-Komponenten-Namenskonventionen: Dateien, Props und Hooks","React-Namenskonventionen für Komponenten, Props und Hooks.",`<p>React-Komponenten: PascalCase. Props: camelCase. Hooks: use-Präfix.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en React: Componentes, Props y Hooks","Convenciones de nombres en React para componentes, props y hooks.",`<p>Componentes React: PascalCase. Props: camelCase. Hooks: prefijo use.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em React: Componentes, Props e Hooks","Convenções de nomes em React para componentes, props e hooks.",`<p>Componentes React: PascalCase. Props: camelCase. Hooks: prefixo use.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage React : Composants, Props et Hooks","Conventions de nommage React pour composants, props et hooks.",`<p>Composants React : PascalCase. Props : camelCase. Hooks : préfixe use.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

// ─── More language-specific naming guides (compact) ───
{slug:"golang-naming-conventions",date:"2026-06-01",readTime:5,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%HUB%":"/case-converter-online"},
en:T("Go (Golang) Naming Conventions: The Complete Reference","Learn Go naming conventions for packages, functions, variables, interfaces, and exported identifiers.",
`<p>Go enforces naming conventions through its visibility rules: capitalized names are exported (public), lowercase are unexported (private).</p>
<h2>Visibility by Case</h2>
<pre><code>func GetUser() {}  // Exported — accessible from other packages
func getUser() {}  // Unexported — package-private</code></pre>
<h2>Conventions</h2>
<table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Package</td><td>lowercase, single word</td><td><code>http</code>, <code>fmt</code>, <code>json</code></td></tr>
<tr><td>Variable</td><td>camelCase</td><td><code>userName</code>, <code>maxRetries</code></td></tr>
<tr><td>Function (exported)</td><td>PascalCase</td><td><code>ParseJSON</code></td></tr>
<tr><td>Function (unexported)</td><td>camelCase</td><td><code>parseJSON</code></td></tr>
<tr><td>Interface</td><td>PascalCase + -er suffix</td><td><code>Reader</code>, <code>Writer</code>, <code>Stringer</code></td></tr>
<tr><td>Struct</td><td>PascalCase</td><td><code>HttpClient</code></td></tr>
<tr><td>Constant</td><td>camelCase or PascalCase</td><td><code>maxSize</code>, <code>StatusOK</code></td></tr>
</tbody></table>
<h2>Go-Specific Rules</h2>
<ul>
<li>No SCREAMING_SNAKE_CASE for constants — Go uses camelCase/PascalCase</li>
<li>Acronyms stay all-caps: <code>HTTPClient</code>, <code>XMLParser</code>, <code>URL</code></li>
<li>Getters don't use "Get" prefix: <code>user.Name()</code> not <code>user.GetName()</code></li>
<li>Package names should not repeat in exported names: <code>http.Client</code> not <code>http.HttpClient</code></li>
</ul>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> or <a href="%PASCAL%">PascalCase</a> converter. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Go（Golang）命名規則：完全リファレンス","Goのパッケージ、関数、変数、インターフェースの命名規則。",`<p>Goは大文字/小文字でエクスポートの可視性を制御します。大文字開始=公開、小文字開始=非公開。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Go-Namenskonventionen: Die vollständige Referenz","Go-Namenskonventionen für Pakete, Funktionen und Variablen.",`<p>Go steuert Sichtbarkeit durch Groß-/Kleinschreibung.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Go (Golang): Referencia completa","Convenciones de nombres en Go para paquetes, funciones y variables.",`<p>Go controla la visibilidad mediante mayúsculas/minúsculas.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Go (Golang): Referência completa","Convenções de nomes em Go para pacotes, funções e variáveis.",`<p>Go controla a visibilidade por maiúsculas/minúsculas.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Go (Golang) : Référence complète","Conventions de nommage Go pour packages, fonctions et variables.",`<p>Go contrôle la visibilité par majuscules/minuscules.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"ruby-naming-conventions",date:"2026-06-01",readTime:4,links:{"%SNAKE%":"/snake-case-converter","%PASCAL%":"/pascal-case-converter","%HUB%":"/case-converter-online"},
en:T("Ruby Naming Conventions: Variables, Methods, Classes & Modules","Learn Ruby naming conventions including snake_case for methods, PascalCase for classes, and SCREAMING_SNAKE for constants.",
`<p>Ruby has clear, community-enforced naming conventions that every Ruby developer follows.</p>
<h2>Quick Reference</h2>
<table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Local variable</td><td>snake_case</td><td><code>user_name</code></td></tr>
<tr><td>Method</td><td>snake_case</td><td><code>calculate_total</code></td></tr>
<tr><td>Class</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Module</td><td>PascalCase</td><td><code>Enumerable</code></td></tr>
<tr><td>Constant</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Instance variable</td><td>@snake_case</td><td><code>@user_name</code></td></tr>
<tr><td>Class variable</td><td>@@snake_case</td><td><code>@@instance_count</code></td></tr>
<tr><td>Global variable</td><td>$snake_case</td><td><code>$debug_mode</code></td></tr>
<tr><td>Predicate method</td><td>snake_case?</td><td><code>empty?</code>, <code>valid?</code></td></tr>
<tr><td>Dangerous method</td><td>snake_case!</td><td><code>save!</code>, <code>sort!</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a> or <a href="%PASCAL%">PascalCase</a> converter. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Ruby命名規則：変数、メソッド、クラス","Rubyの命名規則。snake_case、PascalCase、SCREAMING_SNAKEの使い分け。",`<p>Rubyは明確な命名規則があります。メソッドはsnake_case、クラスはPascalCase、定数はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Ruby-Namenskonventionen: Variablen, Methoden, Klassen","Ruby-Namenskonventionen: snake_case, PascalCase, SCREAMING_SNAKE.",`<p>Ruby: Methoden snake_case, Klassen PascalCase, Konstanten SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Ruby: Variables, métodos, clases","Convenciones Ruby: snake_case, PascalCase, SCREAMING_SNAKE.",`<p>Ruby: métodos snake_case, clases PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Ruby: Variáveis, métodos, classes","Convenções Ruby: snake_case, PascalCase, SCREAMING_SNAKE.",`<p>Ruby: métodos snake_case, classes PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Ruby : Variables, méthodes, classes","Conventions Ruby : snake_case, PascalCase, SCREAMING_SNAKE.",`<p>Ruby : méthodes snake_case, classes PascalCase, constantes SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"rust-naming-conventions",date:"2026-06-01",readTime:4,links:{"%SNAKE%":"/snake-case-converter","%PASCAL%":"/pascal-case-converter","%CONSTANT%":"/constant-case-converter","%HUB%":"/case-converter-online"},
en:T("Rust Naming Conventions: The Official Style Guide","Learn Rust naming conventions enforced by the compiler: snake_case, PascalCase, SCREAMING_SNAKE_CASE, and more.",
`<p>Rust enforces naming conventions at the compiler level — using the wrong case triggers a warning.</p>
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
<h2>Convert</h2><p><a href="%SNAKE%">snake_case</a>, <a href="%PASCAL%">PascalCase</a>, or <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Rust命名規則：公式スタイルガイド","コンパイラが強制するRustの命名規則を解説。",`<p>Rustはコンパイラレベルで命名規則を強制します。snake_case、PascalCase、SCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Rust-Namenskonventionen: Der offizielle Styleguide","Vom Compiler erzwungene Rust-Namenskonventionen.",`<p>Rust erzwingt Konventionen auf Compiler-Ebene.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Rust: Guía de estilo oficial","Convenciones de nombres enforced por el compilador de Rust.",`<p>Rust impone convenciones a nivel de compilador.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Rust: Guia de estilo oficial","Convenções de nomes impostas pelo compilador Rust.",`<p>Rust impõe convenções no nível do compilador.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Rust : Le guide de style officiel","Conventions imposées par le compilateur Rust.",`<p>Rust impose les conventions au niveau du compilateur.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"swift-naming-conventions",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%HUB%":"/case-converter-online"},
en:T("Swift Naming Conventions: Apple's Official API Design Guidelines","Learn Swift naming conventions from Apple's guidelines: camelCase, PascalCase, and fluent method naming.",
`<p>Swift follows Apple's API Design Guidelines, which emphasize clarity, brevity, and consistency.</p>
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
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Swift命名規則：AppleのAPI設計ガイドライン","Apple公式ガイドラインに基づくSwiftの命名規則。",`<p>SwiftはAppleのAPI設計ガイドラインに従います。変数はcamelCase、型はPascalCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Swift-Namenskonventionen: Apples API-Design-Richtlinien","Swift-Konventionen nach Apples Richtlinien.",`<p>Swift folgt Apples API-Design-Richtlinien.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Swift: Guías de diseño de Apple","Convenciones Swift según las directrices de Apple.",`<p>Swift sigue las directrices de diseño de API de Apple.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Swift: Diretrizes de design da Apple","Convenções Swift segundo as diretrizes da Apple.",`<p>Swift segue as diretrizes de design de API da Apple.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Swift : Directives de design d'Apple","Conventions Swift selon les directives d'Apple.",`<p>Swift suit les directives de design d'API d'Apple.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"kotlin-naming-conventions",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%HUB%":"/case-converter-online"},
en:T("Kotlin Naming Conventions: Official Style Guide Summary","Learn Kotlin naming conventions for properties, functions, classes, and packages from the official coding conventions.",
`<p>Kotlin follows conventions similar to Java, with some Kotlin-specific additions.</p>
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
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Kotlin命名規則：公式スタイルガイド要約","Kotlinのプロパティ、関数、クラスの命名規則。",`<p>KotlinはJavaに似た規則に従います。プロパティはcamelCase、クラスはPascalCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Kotlin-Namenskonventionen: Offizieller Styleguide","Kotlin-Konventionen für Properties, Funktionen und Klassen.",`<p>Kotlin folgt Java-ähnlichen Konventionen.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Kotlin: Resumen de la guía oficial","Convenciones Kotlin para propiedades, funciones y clases.",`<p>Kotlin sigue convenciones similares a Java.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Kotlin: Resumo do guia oficial","Convenções Kotlin para propriedades, funções e classes.",`<p>Kotlin segue convenções similares ao Java.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Kotlin : Résumé du guide officiel","Conventions Kotlin pour propriétés, fonctions et classes.",`<p>Kotlin suit des conventions similaires à Java.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"php-naming-conventions",date:"2026-06-01",readTime:5,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("PHP Naming Conventions: PSR Standards and Laravel/Symfony Styles","Learn PHP naming conventions from PSR-1/PSR-12 standards and popular frameworks like Laravel and Symfony.",
`<p>PHP naming conventions have evolved significantly with PSR standards and modern frameworks.</p>
<h2>PSR-1/PSR-12 Standard</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>UserController</code></td></tr>
<tr><td>Methods</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>MAX_RETRIES</code></td></tr>
<tr><td>Properties</td><td>camelCase (PSR)</td><td><code>$userName</code></td></tr>
<tr><td>Functions (procedural)</td><td>snake_case</td><td><code>array_map()</code></td></tr>
</tbody></table>
<h2>Framework Variations</h2>
<p><strong>Laravel:</strong> snake_case for database columns, camelCase for methods, PascalCase for models.<br>
<strong>Symfony:</strong> Strictly follows PSR-12, camelCase for services and methods.</p>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("PHP命名規則：PSR標準とLaravel/Symfonyスタイル","PSR-1/PSR-12標準とLaravel、Symfonyの命名規則。",`<p>PHPの命名規則はPSR標準で統一されています。クラスはPascalCase、メソッドはcamelCase。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("PHP-Namenskonventionen: PSR-Standards und Laravel/Symfony","PHP-Konventionen nach PSR-1/PSR-12.",`<p>PHP folgt PSR-Standards. Klassen: PascalCase, Methoden: camelCase.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en PHP: Estándares PSR y Laravel/Symfony","Convenciones PHP según PSR-1/PSR-12.",`<p>PHP sigue estándares PSR. Clases: PascalCase, métodos: camelCase.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em PHP: Padrões PSR e Laravel/Symfony","Convenções PHP segundo PSR-1/PSR-12.",`<p>PHP segue padrões PSR. Classes: PascalCase, métodos: camelCase.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage PHP : Standards PSR et Laravel/Symfony","Conventions PHP selon PSR-1/PSR-12.",`<p>PHP suit les standards PSR. Classes : PascalCase, méthodes : camelCase.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"csharp-naming-conventions",date:"2026-06-01",readTime:5,links:{"%PASCAL%":"/pascal-case-converter","%CAMEL%":"/camelcase-converter","%HUB%":"/case-converter-online"},
en:T("C# Naming Conventions: Microsoft's Official Guidelines","Learn C# naming conventions from Microsoft guidelines. PascalCase for most things, camelCase for local variables and parameters.",
`<p>C# has well-documented naming conventions from Microsoft, followed across the .NET ecosystem.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Methods</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Properties</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Events</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Local variables</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parameters</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constants</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Private fields</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Note: C# uses PascalCase for constants, not SCREAMING_SNAKE — unlike most other languages.</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("C#命名規則：Microsoft公式ガイドライン","Microsoftガイドラインに基づくC#の命名規則。",`<p>C#はほとんどにPascalCase、ローカル変数にcamelCaseを使用します。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("C#-Namenskonventionen: Microsofts offizielle Richtlinien","C#-Konventionen nach Microsoft-Richtlinien.",`<p>C#: PascalCase für die meisten Elemente, camelCase für lokale Variablen.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en C#: Directrices oficiales de Microsoft","Convenciones C# según directrices de Microsoft.",`<p>C#: PascalCase para la mayoría, camelCase para variables locales.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em C#: Diretrizes oficiais da Microsoft","Convenções C# segundo diretrizes da Microsoft.",`<p>C#: PascalCase para a maioria, camelCase para variáveis locais.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage C# : Directives officielles de Microsoft","Conventions C# selon les directives Microsoft.",`<p>C# : PascalCase pour la plupart, camelCase pour les variables locales.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"java-naming-conventions",date:"2026-06-01",readTime:5,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%CONSTANT%":"/constant-case-converter","%HUB%":"/case-converter-online"},
en:T("Java Naming Conventions: Oracle's Official Code Conventions","Learn Java naming conventions for classes, methods, variables, constants, and packages from Oracle's guidelines.",
`<p>Java has well-established naming conventions from Oracle (originally Sun Microsystems) that every Java developer follows.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes</td><td>PascalCase</td><td><code>ArrayList</code>, <code>HttpServlet</code></td></tr>
<tr><td>Interfaces</td><td>PascalCase</td><td><code>Serializable</code>, <code>Comparable</code></td></tr>
<tr><td>Methods</td><td>camelCase</td><td><code>getUserById()</code></td></tr>
<tr><td>Variables</td><td>camelCase</td><td><code>firstName</code>, <code>itemCount</code></td></tr>
<tr><td>Constants</td><td>SCREAMING_SNAKE</td><td><code>MAX_VALUE</code>, <code>PI</code></td></tr>
<tr><td>Packages</td><td>all lowercase, dots</td><td><code>com.google.common</code></td></tr>
<tr><td>Enum values</td><td>SCREAMING_SNAKE</td><td><code>STATUS_ACTIVE</code></td></tr>
<tr><td>Generic types</td><td>Single uppercase</td><td><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code></td></tr>
</tbody></table>
<h2>Getter/Setter Pattern</h2>
<pre><code>// Property: firstName
public String getFirstName() { return firstName; }
public void setFirstName(String firstName) { this.firstName = firstName; }
// Boolean: active
public boolean isActive() { return active; }</code></pre>
<h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Java命名規則：Oracle公式コード規約","Oracleガイドラインに基づくJavaの命名規則。",`<p>Javaは確立された命名規則があります。クラスはPascalCase、メソッドはcamelCase、定数はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Java-Namenskonventionen: Oracles offizielle Code-Konventionen","Java-Konventionen nach Oracle-Richtlinien.",`<p>Java: Klassen PascalCase, Methoden camelCase, Konstanten SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en Java: Convenciones oficiales de Oracle","Convenciones Java según directrices de Oracle.",`<p>Java: clases PascalCase, métodos camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em Java: Convenções oficiais da Oracle","Convenções Java segundo diretrizes da Oracle.",`<p>Java: classes PascalCase, métodos camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage Java : Conventions officielles d'Oracle","Conventions Java selon les directives Oracle.",`<p>Java : classes PascalCase, méthodes camelCase, constantes SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"typescript-naming-conventions",date:"2026-06-01",readTime:5,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%HUB%":"/case-converter-online"},
en:T("TypeScript Naming Conventions: Interfaces, Types, Enums & More","Learn TypeScript-specific naming conventions for interfaces, type aliases, enums, generics, and utility types.",
`<p>TypeScript inherits JavaScript conventions and adds rules for its type system features.</p>
<h2>TypeScript-Specific Rules</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (no I prefix)</td><td><code>UserProps</code></td></tr>
<tr><td>Type aliases</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Enum members</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Generics</td><td>Single uppercase</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Utility types</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>No "I" Prefix for Interfaces</h2>
<p>The TypeScript team explicitly discourages the Hungarian-style <code>IUser</code> pattern. Use <code>User</code> for the interface and <code>UserImpl</code> or a descriptive name for implementations.</p>
<h2>File Naming</h2>
<p>React components: <code>UserProfile.tsx</code> (PascalCase). Everything else: <code>userUtils.ts</code> (camelCase) or <code>user-utils.ts</code> (kebab-case).</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("TypeScript命名規則：インターフェース、型、Enum","TypeScript固有の命名規則。インターフェース、型エイリアス、Enum、ジェネリクス。",`<p>TypeScriptはJavaScriptの規則を継承し、型システム機能の規則を追加します。インターフェースはPascalCase（I接頭辞なし）。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("TypeScript-Namenskonventionen: Interfaces, Types, Enums","TypeScript-spezifische Konventionen für Interfaces und Types.",`<p>TypeScript erbt JS-Konventionen. Interfaces: PascalCase ohne I-Präfix.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en TypeScript: Interfaces, tipos, enums","Convenciones TypeScript para interfaces, tipos y enums.",`<p>TypeScript hereda convenciones de JS. Interfaces: PascalCase sin prefijo I.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em TypeScript: Interfaces, tipos, enums","Convenções TypeScript para interfaces, tipos e enums.",`<p>TypeScript herda convenções do JS. Interfaces: PascalCase sem prefixo I.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage TypeScript : Interfaces, types, enums","Conventions TypeScript pour interfaces, types et enums.",`<p>TypeScript hérite des conventions JS. Interfaces : PascalCase sans préfixe I.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

// ─── PRACTICAL / DEV ───
{slug:"file-naming-conventions",date:"2026-06-01",readTime:5,links:{"%KEBAB%":"/kebab-case-converter","%PASCAL%":"/pascal-case-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("File Naming Conventions: A Guide for Every Project Type","Learn file naming best practices for web projects, Python packages, documentation, and design assets.",
`<p>File naming conventions vary by project type, framework, and team preference. This guide covers the most common patterns.</p>
<h2>By Project Type</h2>
<table><thead><tr><th>Project</th><th>Convention</th><th>Examples</th></tr></thead><tbody>
<tr><td>React/Next.js components</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Vue components</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Angular components</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Python modules</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Config files</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Documentation</td><td>kebab-case or UPPERCASE</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Universal Rules</h2>
<ul>
<li>No spaces in file names — ever</li>
<li>Lowercase is safer across OS (Linux is case-sensitive, macOS isn't)</li>
<li>Avoid special characters except hyphens and underscores</li>
<li>Be consistent within a project</li>
</ul>
<h2>Convert</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("ファイル命名規則：プロジェクト別ガイド","Web、Python、ドキュメントのファイル命名ベストプラクティス。",`<p>ファイル名の規則はプロジェクトタイプによって異なります。Reactはパスカル、Pythonはスネーク、CSSはケバブ。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Dateibenennungskonventionen: Leitfaden für jedes Projekt","Best Practices für Dateinamen in Web-, Python- und Dokumentationsprojekten.",`<p>Dateinamen-Konventionen variieren je nach Projekttyp.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres de archivos: Guía para cada proyecto","Mejores prácticas para nombres de archivos en web, Python y documentación.",`<p>Las convenciones de nombres de archivos varían según el tipo de proyecto.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes de arquivos: Guia para cada projeto","Melhores práticas para nomes de arquivos em web, Python e documentação.",`<p>As convenções de nomes de arquivos variam por tipo de projeto.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage de fichiers : Guide pour chaque projet","Bonnes pratiques pour nommer les fichiers web, Python et documentation.",`<p>Les conventions de nommage des fichiers varient selon le type de projet.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

{slug:"git-branch-naming-conventions",date:"2026-06-01",readTime:4,links:{"%KEBAB%":"/kebab-case-converter","%SLUG%":"/url-slug-generator","%HUB%":"/case-converter-online"},
en:T("Git Branch Naming Conventions: Best Practices for Teams","Learn git branch naming conventions used by professional teams. Covers prefixes, formats, and common patterns.",
`<p>A consistent branch naming convention helps teams understand what each branch does at a glance.</p>
<h2>Common Prefixes</h2>
<table><thead><tr><th>Prefix</th><th>Purpose</th><th>Example</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>New feature</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> or <code>bugfix/</code></td><td>Bug fix</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Urgent production fix</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Release preparation</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Maintenance tasks</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Documentation</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Code refactoring</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Format: kebab-case</h2>
<p>Always use lowercase and hyphens. Git branches are case-sensitive, and <code>Feature/Login</code> vs <code>feature/login</code> causes confusion.</p>
<h2>Including Ticket Numbers</h2>
<p><code>feature/PROJ-123-user-auth</code> or <code>fix/PROJ-456-cart-total</code></p>
<h2>Convert</h2><p><a href="%KEBAB%">kebab-case converter</a> or <a href="%SLUG%">slug generator</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("Gitブランチ命名規則：チーム開発のベストプラクティス","プロフェッショナルチームのGitブランチ命名規則。",`<p>一貫したブランチ名でチームの理解を助けます。feature/、fix/、hotfix/などのプレフィックスを使用。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-case</a>コンバーター。</p>`),
de:T("Git-Branch-Namenskonventionen: Best Practices für Teams","Git-Branch-Naming für professionelle Teams.",`<p>Konsistente Branch-Namen: feature/, fix/, hotfix/ Präfixe + kebab-case.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`),
es:T("Convenciones de nombres de ramas Git: Mejores prácticas","Convenciones de nombres de ramas Git para equipos.",`<p>Nombres consistentes: prefijos feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversión</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`),
pt:T("Convenções de nomes de branches Git: Melhores práticas","Convenções de nomes de branches Git para equipes.",`<p>Nomes consistentes: prefixos feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversão</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`),
fr:T("Conventions de nommage des branches Git : Bonnes pratiques","Conventions de nommage des branches Git pour équipes.",`<p>Noms consistants : préfixes feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversion</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`),
},

{slug:"environment-variable-naming-conventions",date:"2026-06-01",readTime:4,links:{"%CONSTANT%":"/constant-case-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("Environment Variable Naming Conventions: Best Practices","Learn how to name environment variables correctly. Covers SCREAMING_SNAKE_CASE, prefixes, and security considerations.",
`<p>Environment variables use <strong>SCREAMING_SNAKE_CASE</strong> universally: <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Naming Rules</h2>
<ul>
<li>ALL_CAPS with underscores — no exceptions</li>
<li>Use meaningful prefixes: <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>App-specific prefix to avoid conflicts: <code>MYAPP_API_KEY</code></li>
<li>Boolean vars: <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Common Patterns</h2>
<table><thead><tr><th>Category</th><th>Examples</th></tr></thead><tbody>
<tr><td>Database</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Server</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%CONSTANT%">CONSTANT_CASE converter</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("環境変数の命名規則：ベストプラクティス","環境変数のSCREAMING_SNAKE_CASE命名とセキュリティ上の注意点。",`<p>環境変数は普遍的にSCREAMING_SNAKE_CASEを使用：<code>DATABASE_URL</code>、<code>NODE_ENV</code>。</p><h2>変換</h2><p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>。</p>`),
de:T("Umgebungsvariablen-Namenskonventionen: Best Practices","SCREAMING_SNAKE_CASE für Umgebungsvariablen.",`<p>Umgebungsvariablen: immer SCREAMING_SNAKE_CASE.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Converter</a>.</p>`),
es:T("Convenciones de nombres para variables de entorno","SCREAMING_SNAKE_CASE para variables de entorno.",`<p>Variables de entorno: siempre SCREAMING_SNAKE_CASE.</p><h2>Conversión</h2><p><a href="%CONSTANT%">Conversor</a>.</p>`),
pt:T("Convenções de nomes para variáveis de ambiente","SCREAMING_SNAKE_CASE para variáveis de ambiente.",`<p>Variáveis de ambiente: sempre SCREAMING_SNAKE_CASE.</p><h2>Conversão</h2><p><a href="%CONSTANT%">Conversor</a>.</p>`),
fr:T("Conventions de nommage des variables d'environnement","SCREAMING_SNAKE_CASE pour les variables d'environnement.",`<p>Variables d'environnement : toujours SCREAMING_SNAKE_CASE.</p><h2>Conversion</h2><p><a href="%CONSTANT%">Convertisseur</a>.</p>`),
},

];

for (const p of posts) gen(p);
console.log(`\nBatch 2 done! ${posts.length} posts processed.`);
