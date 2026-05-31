import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "database-naming-conventions", date: "2026-06-01", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Database Naming Conventions: Tables, Columns, and Keys",
    description: "Learn SQL database naming conventions for tables, columns, indexes, and foreign keys. Covers snake_case, singular vs plural, and naming anti-patterns.",
    body: `<p>Consistent naming in databases prevents confusion, simplifies queries, and makes schema migrations safer.</p>
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
<p>Use the <a href="%SNAKE%">snake_case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "データベース命名規則：テーブル、カラム、キー",
    description: "SQLデータベースの命名規則を解説。snake_case、単数形vs複数形など。",
    body: `<p>データベースではsnake_caseが標準。テーブル名、カラム名、インデックスすべてに適用されます。</p><h2>変換</h2><p><a href="%SNAKE%">snake_caseコンバーター</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Datenbank-Namenskonventionen: Tabellen, Spalten und Schlüssel",
    description: "SQL-Namenskonventionen für Tabellen, Spalten und Indizes.",
    body: `<p>In SQL-Datenbanken ist snake_case der Standard für alles.</p><h2>Konvertierung</h2><p><a href="%SNAKE%">snake_case-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en bases de datos: Tablas, columnas y claves",
    description: "Convenciones SQL para tablas, columnas e índices.",
    body: `<p>En bases de datos SQL, snake_case es el estándar para todo.</p><h2>Conversión</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em bancos de dados: Tabelas, colunas e chaves",
    description: "Convenções SQL para tabelas, colunas e índices.",
    body: `<p>Em bancos SQL, snake_case é o padrão para tudo.</p><h2>Conversão</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage en base de données : Tables, colonnes et clés",
    description: "Conventions SQL pour tables, colonnes et index.",
    body: `<p>En SQL, snake_case est le standard pour tout.</p><h2>Conversion</h2><p><a href="%SNAKE%">Convertisseur snake_case</a>.</p>`,
  }),
};
