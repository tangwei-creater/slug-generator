import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SingleCaseTool from "@/components/SingleCaseTool";

const siteUrl = "https://sluggenerator.app";
const path = "/snake-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.snakeCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function SnakeCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.snakeCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Snake Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to snake_case format. Ideal for Python variables, database columns, and API fields.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Snake Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SingleCaseTool mode="snake_case" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Snake Case?</h2>
              <p>
                Snake case (also written as snake_case) is a naming convention
                where words are separated by underscores and all letters are
                lowercase. For example, <code>my_variable_name</code> or{" "}
                <code>user_first_name</code>.
              </p>

              <h2>Snake Case vs Other Naming Conventions</h2>
              <ul>
                <li>
                  <strong>Snake case</strong>: <code>my_variable_name</code> —
                  used in Python, Ruby, databases
                </li>
                <li>
                  <strong>Camel case</strong>: <code>myVariableName</code> —
                  used in JavaScript, Java
                </li>
                <li>
                  <strong>Kebab case</strong>: <code>my-variable-name</code> —
                  used in URLs, CSS, HTML attributes
                </li>
                <li>
                  <strong>Pascal case</strong>: <code>MyVariableName</code> —
                  used in C#, React components
                </li>
              </ul>

              <h2>What Is SCREAMING_SNAKE_CASE?</h2>
              <p>
                SCREAMING_SNAKE_CASE (also called upper snake case or
                CONSTANT_CASE) uses uppercase letters with underscores between
                words, e.g. <code>MAX_RETRY_COUNT</code> or{" "}
                <code>API_BASE_URL</code>. It is the standard for constants in
                most programming languages including Python, Java, C, C++,
                JavaScript, and Rust.
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>Example</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>snake_case</td>
                      <td><code>user_first_name</code></td>
                      <td>Variables, functions</td>
                    </tr>
                    <tr>
                      <td>SCREAMING_SNAKE_CASE</td>
                      <td><code>USER_FIRST_NAME</code></td>
                      <td>Constants, env vars</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How to Convert camelCase to snake_case</h2>
              <p>
                Converting camelCase to snake_case is one of the most common text
                transformations developers need. The algorithm inserts an
                underscore before each uppercase letter and then lowercases the
                entire string:
              </p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <p>
                This is useful when migrating JavaScript or Java code to Python,
                converting JSON API responses to match Python conventions, or
                renaming database columns.
              </p>

              <h2>Snake Case in Python (PEP 8)</h2>
              <p>
                Python&apos;s official style guide,{" "}
                <Link href="/blog/python-naming-conventions-pep8">PEP 8</Link>,
                mandates snake_case for variables, functions, methods, and module
                names:
              </p>
              <pre>
                <code>{`# Variables and functions: snake_case
user_count = 42
def calculate_total_price(items, tax_rate):
    ...

# Constants: SCREAMING_SNAKE_CASE
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT_SECONDS = 30

# Classes are the exception: PascalCase
class OrderProcessor:
    def get_pending_orders(self):  # methods: snake_case
        ...`}</code>
              </pre>
              <p>
                Converting JavaScript-style names when porting code? See our guide on{" "}
                <Link href="/blog/camelcase-to-snake-case-python">
                  converting camelCase to snake_case in Python
                </Link>
                .
              </p>

              <h2>Snake Case for SQL Columns and Tables</h2>
              <p>
                Snake_case is the dominant convention for{" "}
                <Link href="/blog/database-naming-conventions">database naming</Link>{" "}
                because SQL is case-insensitive by default and many databases
                (PostgreSQL in particular) fold unquoted identifiers to lowercase:
              </p>
              <pre>
                <code>{`CREATE TABLE customer_orders (
    order_id        BIGINT PRIMARY KEY,
    customer_id     BIGINT REFERENCES customers(customer_id),
    order_date      DATE NOT NULL,
    total_amount    NUMERIC(10, 2),
    shipping_status VARCHAR(20) DEFAULT 'pending'
);`}</code>
              </pre>
              <p>
                Mixed-case column names like <code>orderDate</code> require quoting
                (<code>&quot;orderDate&quot;</code>) in PostgreSQL forever after — snake_case
                avoids that trap entirely.
              </p>

              <h2>Where to Use Snake Case</h2>
              <ul>
                <li>Python variable and function names (PEP 8 standard)</li>
                <li>Database table and column names (SQL convention)</li>
                <li>PHP variable names in many legacy and WordPress codebases</li>
                <li>Ruby method and variable names</li>
                <li>API request and response field names</li>
                <li>Configuration file keys</li>
                <li>File naming in certain frameworks</li>
                <li>Environment variable names (SCREAMING_SNAKE_CASE)</li>
                <li>Rust variable and function names</li>
              </ul>

              <h2>Related Tools</h2>
              <p>
                Convert to hyphenated format with the{" "}
                <Link href="/kebab-case-converter">Kebab Case Converter</Link>.
                Switch between JavaScript and Python naming with the{" "}
                <Link href="/camelcase-converter">CamelCase Converter</Link>.
                For all formats at once, try the{" "}
                <Link href="/case-converter-online">Case Converter Online</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>スネークケースとは？</h2>
              <p>スネークケース（snake_case）は、単語をアンダースコアで区切り、すべての文字を小文字にする命名規則です。例：<code>my_variable_name</code>、<code>user_first_name</code>。</p>
              <h2>スネークケースと他の命名規則の比較</h2>
              <ul>
                <li><strong>スネークケース</strong>: <code>my_variable_name</code> — Python、Ruby、データベースで使用</li>
                <li><strong>キャメルケース</strong>: <code>myVariableName</code> — JavaScript、Javaで使用</li>
                <li><strong>ケバブケース</strong>: <code>my-variable-name</code> — URL、CSS、HTML属性で使用</li>
                <li><strong>パスカルケース</strong>: <code>MyVariableName</code> — C#、Reactコンポーネントで使用</li>
              </ul>
              <h2>SCREAMING_SNAKE_CASEとは？</h2>
              <p>SCREAMING_SNAKE_CASE（アッパースネークケース/CONSTANT_CASE）は、大文字とアンダースコアを組み合わせた形式です。例：<code>MAX_RETRY_COUNT</code>、<code>API_BASE_URL</code>。Python、Java、C、JavaScript、Rustなどほとんどのプログラミング言語で定数の標準形式です。</p>
              <h2>camelCaseからsnake_caseへの変換方法</h2>
              <p>camelCaseからsnake_caseへの変換は、開発者が最も頻繁に必要とするテキスト変換の1つです。各大文字の前にアンダースコアを挿入し、全体を小文字化します：</p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <h2>PythonでのSnake Case（PEP 8）</h2>
              <p>Python公式スタイルガイド<Link href="/blog/python-naming-conventions-pep8">PEP 8</Link>は、変数・関数・メソッド・モジュール名にsnake_caseを義務付けています：</p>
              <pre><code>{`user_count = 42
def calculate_total_price(items, tax_rate):
    ...
MAX_CONNECTIONS = 100  # 定数はSCREAMING_SNAKE_CASE`}</code></pre>
              <h2>SQLカラム・テーブルでのSnake Case</h2>
              <p>SQLはデフォルトで大文字小文字を区別せず、PostgreSQLは引用符なしの識別子を小文字に変換するため、snake_caseが<Link href="/blog/database-naming-conventions">データベース命名</Link>の主流規約です：</p>
              <pre><code>{`CREATE TABLE customer_orders (
    order_id     BIGINT PRIMARY KEY,
    order_date   DATE NOT NULL,
    total_amount NUMERIC(10, 2)
);`}</code></pre>
              <h2>スネークケースの使用場所</h2>
              <ul>
                <li>Pythonの変数名・関数名（PEP 8標準）</li>
                <li>データベースのテーブル名・カラム名（SQL規約）</li>
                <li>Rubyのメソッド名・変数名</li>
                <li>APIのリクエスト/レスポンスフィールド名</li>
                <li>設定ファイルのキー名</li>
                <li>環境変数名（SCREAMING_SNAKE_CASE）</li>
                <li>Rustの変数名・関数名</li>
              </ul>
              <h2>関連ツール</h2>
              <p>ハイフン形式には<Link href="/kebab-case-converter">Kebab Case Converter</Link>を、JavaScript命名には<Link href="/camelcase-converter">CamelCase Converter</Link>を、全形式一括には<Link href="/case-converter-online">Case Converter Online</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist Snake Case?</h2>
              <p>Snake Case (auch snake_case geschrieben) ist eine Namenskonvention, bei der Wörter durch Unterstriche getrennt und alle Buchstaben kleingeschrieben werden. Beispiel: <code>my_variable_name</code> oder <code>user_first_name</code>.</p>
              <h2>Snake Case im Vergleich zu anderen Konventionen</h2>
              <ul>
                <li><strong>Snake Case</strong>: <code>my_variable_name</code> — Python, Ruby, Datenbanken</li>
                <li><strong>Camel Case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Kebab Case</strong>: <code>my-variable-name</code> — URLs, CSS, HTML-Attribute</li>
                <li><strong>Pascal Case</strong>: <code>MyVariableName</code> — C#, React-Komponenten</li>
              </ul>
              <h2>Was ist SCREAMING_SNAKE_CASE?</h2>
              <p>SCREAMING_SNAKE_CASE (auch Upper Snake Case oder CONSTANT_CASE genannt) verwendet Großbuchstaben mit Unterstrichen, z.B. <code>MAX_RETRY_COUNT</code> oder <code>API_BASE_URL</code>. Es ist der Standard für Konstanten in den meisten Programmiersprachen einschließlich Python, Java, C und JavaScript.</p>
              <h2>camelCase in snake_case umwandeln</h2>
              <p>Die Umwandlung von camelCase in snake_case ist eine der häufigsten Texttransformationen. Der Algorithmus fügt vor jedem Großbuchstaben einen Unterstrich ein und schreibt dann alles klein:</p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <h2>Snake Case in Python (PEP 8)</h2>
              <p>Pythons offizieller Styleguide <Link href="/blog/python-naming-conventions-pep8">PEP 8</Link> schreibt snake_case für Variablen, Funktionen, Methoden und Modulnamen vor:</p>
              <pre><code>{`user_count = 42
def calculate_total_price(items, tax_rate):
    ...
MAX_CONNECTIONS = 100  # Konstanten: SCREAMING_SNAKE_CASE`}</code></pre>
              <h2>Snake Case für SQL-Spalten und -Tabellen</h2>
              <p>SQL ist standardmäßig nicht case-sensitiv und PostgreSQL wandelt unquotierte Bezeichner in Kleinbuchstaben um — deshalb ist snake_case die dominierende Konvention bei der <Link href="/blog/database-naming-conventions">Datenbank-Benennung</Link>:</p>
              <pre><code>{`CREATE TABLE customer_orders (
    order_id     BIGINT PRIMARY KEY,
    order_date   DATE NOT NULL,
    total_amount NUMERIC(10, 2)
);`}</code></pre>
              <h2>Verwendung von Snake Case</h2>
              <ul>
                <li>Python-Variablen und -Funktionsnamen (PEP 8 Standard)</li>
                <li>Datenbank-Tabellen- und Spaltennamen (SQL-Konvention)</li>
                <li>Ruby-Methoden- und Variablennamen</li>
                <li>API-Request/Response-Feldnamen</li>
                <li>Konfigurationsdatei-Schlüssel</li>
                <li>Umgebungsvariablen (SCREAMING_SNAKE_CASE)</li>
                <li>Rust-Variablen- und Funktionsnamen</li>
              </ul>
              <h2>Verwandte Tools</h2>
              <p>Für Bindestrich-Format: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Für JavaScript-Benennung: <Link href="/camelcase-converter">CamelCase Converter</Link>. Für alle Formate gleichzeitig: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué es Snake Case?</h2>
              <p>Snake case (también escrito como snake_case) es una convención de nomenclatura donde las palabras se separan con guiones bajos y todas las letras son minúsculas. Ejemplo: <code>my_variable_name</code> o <code>user_first_name</code>.</p>
              <h2>Snake Case vs otras convenciones</h2>
              <ul>
                <li><strong>Snake case</strong>: <code>my_variable_name</code> — Python, Ruby, bases de datos</li>
                <li><strong>Camel case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Kebab case</strong>: <code>my-variable-name</code> — URLs, CSS, atributos HTML</li>
                <li><strong>Pascal case</strong>: <code>MyVariableName</code> — C#, componentes React</li>
              </ul>
              <h2>¿Qué es SCREAMING_SNAKE_CASE?</h2>
              <p>SCREAMING_SNAKE_CASE (también llamado upper snake case o CONSTANT_CASE) usa letras mayúsculas con guiones bajos, ej. <code>MAX_RETRY_COUNT</code> o <code>API_BASE_URL</code>. Es el estándar para constantes en la mayoría de lenguajes incluyendo Python, Java, C y JavaScript.</p>
              <h2>Convertir camelCase a snake_case</h2>
              <p>Convertir camelCase a snake_case es una de las transformaciones más comunes. El algoritmo inserta un guion bajo antes de cada letra mayúscula y luego convierte todo a minúsculas:</p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <h2>Snake Case en Python (PEP 8)</h2>
              <p>La guía de estilo oficial de Python, <Link href="/blog/python-naming-conventions-pep8">PEP 8</Link>, exige snake_case para variables, funciones, métodos y nombres de módulos:</p>
              <pre><code>{`user_count = 42
def calculate_total_price(items, tax_rate):
    ...
MAX_CONNECTIONS = 100  # Constantes: SCREAMING_SNAKE_CASE`}</code></pre>
              <h2>Snake Case para columnas y tablas SQL</h2>
              <p>SQL no distingue mayúsculas por defecto y PostgreSQL convierte los identificadores sin comillas a minúsculas — por eso snake_case es la convención dominante en la <Link href="/blog/database-naming-conventions">nomenclatura de bases de datos</Link>:</p>
              <pre><code>{`CREATE TABLE customer_orders (
    order_id     BIGINT PRIMARY KEY,
    order_date   DATE NOT NULL,
    total_amount NUMERIC(10, 2)
);`}</code></pre>
              <h2>Dónde usar Snake Case</h2>
              <ul>
                <li>Variables y funciones en Python (estándar PEP 8)</li>
                <li>Nombres de tablas y columnas en bases de datos (convención SQL)</li>
                <li>Métodos y variables en Ruby</li>
                <li>Campos de request/response en APIs</li>
                <li>Claves de archivos de configuración</li>
                <li>Variables de entorno (SCREAMING_SNAKE_CASE)</li>
                <li>Variables y funciones en Rust</li>
              </ul>
              <h2>Herramientas relacionadas</h2>
              <p>Para formato con guiones: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Para nomenclatura JavaScript: <Link href="/camelcase-converter">CamelCase Converter</Link>. Para todos los formatos a la vez: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que é Snake Case?</h2>
              <p>Snake case (também escrito como snake_case) é uma convenção de nomenclatura onde as palavras são separadas por underscores e todas as letras são minúsculas. Exemplo: <code>my_variable_name</code> ou <code>user_first_name</code>.</p>
              <h2>Snake Case vs outras convenções</h2>
              <ul>
                <li><strong>Snake case</strong>: <code>my_variable_name</code> — Python, Ruby, bancos de dados</li>
                <li><strong>Camel case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Kebab case</strong>: <code>my-variable-name</code> — URLs, CSS, atributos HTML</li>
                <li><strong>Pascal case</strong>: <code>MyVariableName</code> — C#, componentes React</li>
              </ul>
              <h2>O que é SCREAMING_SNAKE_CASE?</h2>
              <p>SCREAMING_SNAKE_CASE (também chamado de upper snake case ou CONSTANT_CASE) usa letras maiúsculas com underscores, ex. <code>MAX_RETRY_COUNT</code> ou <code>API_BASE_URL</code>. É o padrão para constantes na maioria das linguagens incluindo Python, Java, C e JavaScript.</p>
              <h2>Converter camelCase para snake_case</h2>
              <p>Converter camelCase para snake_case é uma das transformações mais comuns. O algoritmo insere um underscore antes de cada letra maiúscula e converte tudo para minúsculas:</p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <h2>Snake Case em Python (PEP 8)</h2>
              <p>O guia de estilo oficial do Python, <Link href="/blog/python-naming-conventions-pep8">PEP 8</Link>, exige snake_case para variáveis, funções, métodos e nomes de módulos:</p>
              <pre><code>{`user_count = 42
def calculate_total_price(items, tax_rate):
    ...
MAX_CONNECTIONS = 100  # Constantes: SCREAMING_SNAKE_CASE`}</code></pre>
              <h2>Snake Case para colunas e tabelas SQL</h2>
              <p>SQL não diferencia maiúsculas por padrão e o PostgreSQL converte identificadores sem aspas para minúsculas — por isso snake_case é a convenção dominante na <Link href="/blog/database-naming-conventions">nomenclatura de bancos de dados</Link>:</p>
              <pre><code>{`CREATE TABLE customer_orders (
    order_id     BIGINT PRIMARY KEY,
    order_date   DATE NOT NULL,
    total_amount NUMERIC(10, 2)
);`}</code></pre>
              <h2>Onde usar Snake Case</h2>
              <ul>
                <li>Variáveis e funções em Python (padrão PEP 8)</li>
                <li>Nomes de tabelas e colunas em bancos de dados (convenção SQL)</li>
                <li>Métodos e variáveis em Ruby</li>
                <li>Campos de request/response em APIs</li>
                <li>Chaves de arquivos de configuração</li>
                <li>Variáveis de ambiente (SCREAMING_SNAKE_CASE)</li>
                <li>Variáveis e funções em Rust</li>
              </ul>
              <h2>Ferramentas relacionadas</h2>
              <p>Para formato com hífens: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Para nomenclatura JavaScript: <Link href="/camelcase-converter">CamelCase Converter</Link>. Para todos os formatos de uma vez: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce que le Snake Case ?</h2>
              <p>Le snake case (aussi écrit snake_case) est une convention de nommage où les mots sont séparés par des underscores et toutes les lettres sont en minuscules. Exemple : <code>my_variable_name</code> ou <code>user_first_name</code>.</p>
              <h2>Snake Case vs autres conventions</h2>
              <ul>
                <li><strong>Snake case</strong> : <code>my_variable_name</code> — Python, Ruby, bases de données</li>
                <li><strong>Camel case</strong> : <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Kebab case</strong> : <code>my-variable-name</code> — URLs, CSS, attributs HTML</li>
                <li><strong>Pascal case</strong> : <code>MyVariableName</code> — C#, composants React</li>
              </ul>
              <h2>Qu&apos;est-ce que SCREAMING_SNAKE_CASE ?</h2>
              <p>SCREAMING_SNAKE_CASE (aussi appelé upper snake case ou CONSTANT_CASE) utilise des majuscules avec des underscores, ex. <code>MAX_RETRY_COUNT</code> ou <code>API_BASE_URL</code>. C&apos;est le standard pour les constantes dans la plupart des langages dont Python, Java, C et JavaScript.</p>
              <h2>Convertir camelCase en snake_case</h2>
              <p>La conversion de camelCase en snake_case est l&apos;une des transformations les plus courantes. L&apos;algorithme insère un underscore avant chaque lettre majuscule puis convertit tout en minuscules :</p>
              <ul>
                <li><code>myVariableName</code> → <code>my_variable_name</code></li>
                <li><code>getUserById</code> → <code>get_user_by_id</code></li>
                <li><code>HTMLParser</code> → <code>html_parser</code></li>
              </ul>
              <h2>Snake Case en Python (PEP 8)</h2>
              <p>Le guide de style officiel de Python, <Link href="/blog/python-naming-conventions-pep8">PEP 8</Link>, impose le snake_case pour les variables, fonctions, méthodes et noms de modules :</p>
              <pre><code>{`user_count = 42
def calculate_total_price(items, tax_rate):
    ...
MAX_CONNECTIONS = 100  # Constantes : SCREAMING_SNAKE_CASE`}</code></pre>
              <h2>Snake Case pour les colonnes et tables SQL</h2>
              <p>SQL est insensible à la casse par défaut et PostgreSQL convertit les identifiants non quotés en minuscules — c&apos;est pourquoi le snake_case domine la <Link href="/blog/database-naming-conventions">nomenclature des bases de données</Link> :</p>
              <pre><code>{`CREATE TABLE customer_orders (
    order_id     BIGINT PRIMARY KEY,
    order_date   DATE NOT NULL,
    total_amount NUMERIC(10, 2)
);`}</code></pre>
              <h2>Où utiliser le Snake Case</h2>
              <ul>
                <li>Variables et fonctions Python (standard PEP 8)</li>
                <li>Noms de tables et colonnes de bases de données (convention SQL)</li>
                <li>Méthodes et variables Ruby</li>
                <li>Champs de request/response d&apos;API</li>
                <li>Clés de fichiers de configuration</li>
                <li>Variables d&apos;environnement (SCREAMING_SNAKE_CASE)</li>
                <li>Variables et fonctions Rust</li>
              </ul>
              <h2>Outils associés</h2>
              <p>Pour le format avec tirets : <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Pour la nomenclature JavaScript : <Link href="/camelcase-converter">CamelCase Converter</Link>. Pour tous les formats à la fois : <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          <RelatedTools current="/snake-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
