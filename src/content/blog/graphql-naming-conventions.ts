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
    description: "GraphQLの型、フィールド、列挙型の命名規則。",
    body: `<p>GraphQLは明確な命名規則があります。型はPascalCase、フィールドはcamelCase、列挙値はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "GraphQL-Namenskonventionen: Typen, Felder, Queries & Mutations",
    description: "GraphQL-Benennungsregeln.",
    body: `<p>GraphQL: Typen PascalCase, Felder camelCase, Enum-Werte SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en GraphQL: Tipos, campos, queries y mutations",
    description: "Reglas de nombres en GraphQL.",
    body: `<p>GraphQL: tipos PascalCase, campos camelCase, valores enum SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em GraphQL: Tipos, campos, queries e mutations",
    description: "Regras de nomes em GraphQL.",
    body: `<p>GraphQL: tipos PascalCase, campos camelCase, valores enum SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage GraphQL : Types, champs, queries et mutations",
    description: "Règles de nommage GraphQL.",
    body: `<p>GraphQL : types PascalCase, champs camelCase, valeurs enum SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
