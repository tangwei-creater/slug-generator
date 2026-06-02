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
    description: "SQLデータベースのテーブル、カラム、インデックス、外部キーの命名規則を解説。snake_case、単数形vs複数形、命名のアンチパターンを扱います。",
    body: `<p>データベースで一貫した命名をすると、混乱を防ぎ、クエリが簡潔になり、スキーマ移行も安全になります。</p>
<h2>標準：snake_case</h2>
<p>SQLデータベースで圧倒的に主流の規則は、すべてに<strong>snake_case</strong>を使うことです。テーブル名、カラム名、インデックス、制約のすべてに適用されます。</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>テーブル名：単数形か複数形か?</h2>
<table><thead><tr><th>スタイル</th><th>例</th><th>採用例</th></tr></thead><tbody>
<tr><td>単数形</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>複数形</td><td><code>users</code>, <code>orders</code></td><td>Rails、多くのチーム</td></tr>
</tbody></table>
<p>どちらかを選び、一貫させましょう。どちらも有効です。</p>
<h2>カラム命名のルール</h2>
<ul>
<li>主キー: <code>id</code>または<code>table_name_id</code></li>
<li>外部キー: <code>referenced_table_id</code>(例: <code>user_id</code>)</li>
<li>タイムスタンプ: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>真偽値: <code>is_active</code>, <code>has_verified</code></li>
<li>予約語を避ける: <code>order</code>, <code>user</code>, <code>group</code>をカラム名にしない</li>
</ul>
<h2>インデックスと制約の名前</h2>
<pre><code>idx_users_email        -- インデックス
uq_users_email         -- 一意制約
fk_orders_user_id      -- 外部キー
chk_orders_total       -- チェック制約</code></pre>
<h2>snake_caseに変換</h2>
<p><a href="%SNAKE%">snake_caseコンバーター</a>または<a href="%HUB%">ケース変換ハブ</a>を使いましょう。</p>`,
  }),
  de: build("de", {
    title: "Datenbank-Namenskonventionen: Tabellen, Spalten und Schlüssel",
    description: "Lernen Sie SQL-Datenbank-Namenskonventionen für Tabellen, Spalten, Indizes und Fremdschlüssel. Behandelt snake_case, Singular vs. Plural und Anti-Muster.",
    body: `<p>Konsistente Benennung in Datenbanken verhindert Verwirrung, vereinfacht Abfragen und macht Schema-Migrationen sicherer.</p>
<h2>Der Standard: snake_case</h2>
<p>Die überwältigende Konvention in SQL-Datenbanken ist <strong>snake_case</strong> für alles: Tabellennamen, Spaltennamen, Indizes und Constraints.</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>Tabellennamen: Singular oder Plural?</h2>
<table><thead><tr><th>Stil</th><th>Beispiel</th><th>Verwendet von</th></tr></thead><tbody>
<tr><td>Singular</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>Plural</td><td><code>users</code>, <code>orders</code></td><td>Rails, viele Teams</td></tr>
</tbody></table>
<p>Wählen Sie eines und bleiben Sie konsistent. Beide sind gültig.</p>
<h2>Regeln zur Spaltenbenennung</h2>
<ul>
<li>Primärschlüssel: <code>id</code> oder <code>table_name_id</code></li>
<li>Fremdschlüssel: <code>referenced_table_id</code> (z. B. <code>user_id</code>)</li>
<li>Zeitstempel: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>Booleans: <code>is_active</code>, <code>has_verified</code></li>
<li>Reservierte Wörter vermeiden: Benennen Sie Spalten nicht <code>order</code>, <code>user</code>, <code>group</code></li>
</ul>
<h2>Index- und Constraint-Namen</h2>
<pre><code>idx_users_email        -- Index
uq_users_email         -- Unique Constraint
fk_orders_user_id      -- Fremdschlüssel
chk_orders_total       -- Check Constraint</code></pre>
<h2>In snake_case umwandeln</h2>
<p>Nutzen Sie den <a href="%SNAKE%">snake_case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en bases de datos: Tablas, columnas y claves",
    description: "Aprende las convenciones SQL para tablas, columnas, índices y claves foráneas. Cubre snake_case, singular vs plural y antipatrones de nombres.",
    body: `<p>Una nomenclatura consistente en las bases de datos evita confusiones, simplifica las consultas y hace más seguras las migraciones de esquema.</p>
<h2>El estándar: snake_case</h2>
<p>La convención abrumadora en las bases de datos SQL es <strong>snake_case</strong> para todo: nombres de tablas, nombres de columnas, índices y restricciones.</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>Nombres de tabla: ¿singular o plural?</h2>
<table><thead><tr><th>Estilo</th><th>Ejemplo</th><th>Usado por</th></tr></thead><tbody>
<tr><td>Singular</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>Plural</td><td><code>users</code>, <code>orders</code></td><td>Rails, muchos equipos</td></tr>
</tbody></table>
<p>Elige uno y sé consistente. Ambos son válidos.</p>
<h2>Reglas de nombres de columnas</h2>
<ul>
<li>Clave primaria: <code>id</code> o <code>table_name_id</code></li>
<li>Clave foránea: <code>referenced_table_id</code> (p. ej., <code>user_id</code>)</li>
<li>Marcas de tiempo: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>Booleanos: <code>is_active</code>, <code>has_verified</code></li>
<li>Evita palabras reservadas: no nombres columnas <code>order</code>, <code>user</code>, <code>group</code></li>
</ul>
<h2>Nombres de índices y restricciones</h2>
<pre><code>idx_users_email        -- índice
uq_users_email         -- restricción única
fk_orders_user_id      -- clave foránea
chk_orders_total       -- restricción de comprobación</code></pre>
<h2>Convertir a snake_case</h2>
<p>Usa el <a href="%SNAKE%">conversor snake_case</a> o el <a href="%HUB%">hub de conversión de mayúsculas y minúsculas</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em bancos de dados: Tabelas, colunas e chaves",
    description: "Aprenda as convenções SQL para tabelas, colunas, índices e chaves estrangeiras. Cobre snake_case, singular vs plural e antipadrões de nomes.",
    body: `<p>Uma nomenclatura consistente nos bancos de dados evita confusão, simplifica as consultas e torna as migrações de esquema mais seguras.</p>
<h2>O padrão: snake_case</h2>
<p>A convenção esmagadora nos bancos de dados SQL é <strong>snake_case</strong> para tudo: nomes de tabelas, nomes de colunas, índices e restrições.</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>Nomes de tabela: singular ou plural?</h2>
<table><thead><tr><th>Estilo</th><th>Exemplo</th><th>Usado por</th></tr></thead><tbody>
<tr><td>Singular</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>Plural</td><td><code>users</code>, <code>orders</code></td><td>Rails, muitas equipes</td></tr>
</tbody></table>
<p>Escolha um e seja consistente. Ambos são válidos.</p>
<h2>Regras de nomes de colunas</h2>
<ul>
<li>Chave primária: <code>id</code> ou <code>table_name_id</code></li>
<li>Chave estrangeira: <code>referenced_table_id</code> (ex.: <code>user_id</code>)</li>
<li>Carimbos de data/hora: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>Booleanos: <code>is_active</code>, <code>has_verified</code></li>
<li>Evite palavras reservadas: não nomeie colunas como <code>order</code>, <code>user</code>, <code>group</code></li>
</ul>
<h2>Nomes de índices e restrições</h2>
<pre><code>idx_users_email        -- índice
uq_users_email         -- restrição única
fk_orders_user_id      -- chave estrangeira
chk_orders_total       -- restrição de verificação</code></pre>
<h2>Converter para snake_case</h2>
<p>Use o <a href="%SNAKE%">conversor snake_case</a> ou o <a href="%HUB%">hub de conversão de maiúsculas e minúsculas</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage en base de données : Tables, colonnes et clés",
    description: "Apprenez les conventions SQL pour les tables, colonnes, index et clés étrangères. Couvre snake_case, singulier vs pluriel et anti-patterns de nommage.",
    body: `<p>Une nomenclature cohérente dans les bases de données évite la confusion, simplifie les requêtes et rend les migrations de schéma plus sûres.</p>
<h2>Le standard : snake_case</h2>
<p>La convention écrasante dans les bases de données SQL est <strong>snake_case</strong> pour tout : noms de tables, noms de colonnes, index et contraintes.</p>
<pre><code>CREATE TABLE user_accounts (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);</code></pre>
<h2>Noms de tables : singulier ou pluriel ?</h2>
<table><thead><tr><th>Style</th><th>Exemple</th><th>Utilisé par</th></tr></thead><tbody>
<tr><td>Singulier</td><td><code>user</code>, <code>order</code></td><td>Laravel, Django</td></tr>
<tr><td>Pluriel</td><td><code>users</code>, <code>orders</code></td><td>Rails, beaucoup d'équipes</td></tr>
</tbody></table>
<p>Choisissez-en un et soyez cohérent. Les deux sont valides.</p>
<h2>Règles de nommage des colonnes</h2>
<ul>
<li>Clé primaire : <code>id</code> ou <code>table_name_id</code></li>
<li>Clé étrangère : <code>referenced_table_id</code> (p. ex. <code>user_id</code>)</li>
<li>Horodatages : <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code></li>
<li>Booléens : <code>is_active</code>, <code>has_verified</code></li>
<li>Évitez les mots réservés : ne nommez pas des colonnes <code>order</code>, <code>user</code>, <code>group</code></li>
</ul>
<h2>Noms d'index et de contraintes</h2>
<pre><code>idx_users_email        -- index
uq_users_email         -- contrainte unique
fk_orders_user_id      -- clé étrangère
chk_orders_total       -- contrainte de vérification</code></pre>
<h2>Convertir en snake_case</h2>
<p>Utilisez le <a href="%SNAKE%">convertisseur snake_case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
