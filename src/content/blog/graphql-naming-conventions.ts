import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "graphql-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "GraphQL Naming Conventions: Types, Fields, Queries & Mutations",
    description: "Learn GraphQL naming conventions for types, fields, queries, mutations, enums, and input types.",
    body: `<p>GraphQL has clear naming conventions that make schemas self-documenting.</p><h2>Convention Table</h2><table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody><tr><td>Types</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr><tr><td>Fields</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr><tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr><tr><td>Mutations</td><td>camelCase verb</td><td><code>createUser</code>, <code>updatePost</code></td></tr><tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr><tr><td>Enum values</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr><tr><td>Input types</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr></tbody></table><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "GraphQL命名規則：型、フィールド、クエリ、ミューテーション",
    description: "GraphQLの型、フィールド、クエリ、ミューテーション、列挙型、入力型の命名規則を学びましょう。",
    body: `<p>GraphQLには明確な命名規則があり、スキーマを自己文書化します。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>要素</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>型</td><td>PascalCase</td><td><code>User</code>、<code>BlogPost</code></td></tr>
<tr><td>フィールド</td><td>camelCase</td><td><code>firstName</code>、<code>createdAt</code></td></tr>
<tr><td>クエリ</td><td>camelCase</td><td><code>user</code>、<code>blogPosts</code></td></tr>
<tr><td>ミューテーション</td><td>camelCase動詞</td><td><code>createUser</code>、<code>updatePost</code></td></tr>
<tr><td>Enum</td><td>PascalCase</td><td><code>UserRole</code></td></tr>
<tr><td>Enum値</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>、<code>MODERATOR</code></td></tr>
<tr><td>入力型</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr>
</tbody></table>
<h2>変換</h2>
<p><a href="%CAMEL%">camelCaseコンバーター</a>、<a href="%PASCAL%">PascalCaseコンバーター</a>、<a href="%CONSTANT%">CONSTANT_CASEコンバーター</a>、または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "GraphQL-Namenskonventionen: Typen, Felder, Queries & Mutations",
    description: "Lernen Sie die GraphQL-Namenskonventionen für Typen, Felder, Queries, Mutations, Enums und Input-Typen.",
    body: `<p>GraphQL hat klare Namenskonventionen, die Schemas selbstdokumentierend machen.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Typen</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr>
<tr><td>Felder</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr>
<tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr>
<tr><td>Mutations</td><td>camelCase Verb</td><td><code>createUser</code>, <code>updatePost</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr>
<tr><td>Enum-Werte</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr>
<tr><td>Input-Typen</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr>
</tbody></table>
<h2>Umwandeln</h2>
<p>Verwenden Sie <a href="%CAMEL%">camelCase</a>-, <a href="%PASCAL%">PascalCase</a>-, <a href="%CONSTANT%">CONSTANT_CASE</a>-Konverter oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en GraphQL: Tipos, campos, queries y mutations",
    description: "Aprende las convenciones de nombres en GraphQL para tipos, campos, queries, mutations, enums y tipos de entrada.",
    body: `<p>GraphQL tiene convenciones de nombres claras que hacen los esquemas autodocumentados.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Tipos</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr>
<tr><td>Campos</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr>
<tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr>
<tr><td>Mutations</td><td>camelCase verbo</td><td><code>createUser</code>, <code>updatePost</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr>
<tr><td>Valores de enum</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr>
<tr><td>Tipos de entrada</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr>
</tbody></table>
<h2>Convertir</h2>
<p>Usa los conversores <a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em GraphQL: Tipos, campos, queries e mutations",
    description: "Aprenda as convenções de nomes em GraphQL para tipos, campos, queries, mutations, enums e tipos de entrada.",
    body: `<p>GraphQL tem convenções de nomes claras que tornam os schemas autodocumentados.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Elemento</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Tipos</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr>
<tr><td>Campos</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr>
<tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr>
<tr><td>Mutations</td><td>camelCase verbo</td><td><code>createUser</code>, <code>updatePost</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr>
<tr><td>Valores de enum</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr>
<tr><td>Tipos de entrada</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr>
</tbody></table>
<h2>Converter</h2>
<p>Use os conversores <a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage GraphQL : Types, champs, queries et mutations",
    description: "Apprenez les conventions de nommage GraphQL pour les types, champs, queries, mutations, enums et types d'entrée.",
    body: `<p>GraphQL a des conventions de nommage claires qui rendent les schémas autodocumentés.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Types</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr>
<tr><td>Champs</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr>
<tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr>
<tr><td>Mutations</td><td>verbe camelCase</td><td><code>createUser</code>, <code>updatePost</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr>
<tr><td>Valeurs d'enum</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr>
<tr><td>Types d'entrée</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr>
</tbody></table>
<h2>Convertir</h2>
<p>Utilisez les convertisseurs <a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
