import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SingleCaseTool from "@/components/SingleCaseTool";

const siteUrl = "https://sluggenerator.app";
const path = "/camelcase-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.camelCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function CamelCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.camelCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CamelCase Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to camelCase format. Ideal for JavaScript variables, JSON keys, and programming conventions.",
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
          <Breadcrumbs items={[{ name: "CamelCase Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SingleCaseTool mode="camelCase" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is CamelCase?</h2>
              <p>
                CamelCase is a naming convention where each word begins with a
                capital letter and no spaces or separators are used. There are
                two variants: <strong>lowerCamelCase</strong> (first word
                lowercase, e.g. <code>myVariableName</code>) and{" "}
                <strong>UpperCamelCase</strong> or PascalCase (all words
                capitalized, e.g. <code>MyClassName</code>).
              </p>

              <h2>CamelCase vs Other Naming Conventions</h2>
              <ul>
                <li>
                  <strong>camelCase</strong>: <code>myVariableName</code> —
                  JavaScript, Java, TypeScript variables
                </li>
                <li>
                  <strong>PascalCase</strong>: <code>MyClassName</code> — C#
                  classes, React components
                </li>
                <li>
                  <strong>snake_case</strong>: <code>my_variable_name</code> —
                  Python, Ruby, databases
                </li>
                <li>
                  <strong>kebab-case</strong>: <code>my-variable-name</code> —
                  URLs, CSS classes, HTML attributes
                </li>
              </ul>

              <h2>How to Convert underscore_case to camelCase</h2>
              <p>
                Converting snake_case (underscore notation) to camelCase is
                essential when working across Python and JavaScript codebases.
                The algorithm removes each underscore and capitalizes the
                following letter:
              </p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <p>
                This conversion is common when consuming Python or Ruby APIs
                from a JavaScript frontend, or when migrating database column
                names into JSON response keys.
              </p>

              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Convention</th>
                      <th>Example</th>
                      <th>First Letter</th>
                      <th>Common Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>lowercase</td>
                      <td>JS/TS variables, JSON keys</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>uppercase</td>
                      <td>Classes, React components</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Where to Use CamelCase</h2>
              <ul>
                <li>JavaScript and TypeScript variable and function names</li>
                <li>Java method and variable names</li>
                <li>JSON object keys in many APIs</li>
                <li>Swift and Kotlin identifiers</li>
                <li>Go exported identifiers (PascalCase)</li>
                <li>React state variables and event handlers</li>
                <li>C# local variables and method parameters</li>
                <li>GraphQL field names</li>
              </ul>

              <h2>Related Tools</h2>
              <p>
                Convert to Python-style naming with the{" "}
                <Link href="/snake-case-converter">Snake Case Converter</Link>.
                For URL-friendly formats, try the{" "}
                <Link href="/kebab-case-converter">Kebab Case Converter</Link>.
                For all formats at once, use the{" "}
                <Link href="/case-converter-online">Case Converter Online</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>キャメルケースとは？</h2>
              <p>キャメルケース（CamelCase）は、各単語の先頭を大文字にし、スペースや区切り文字を使わない命名規則です。2つのバリエーションがあります：<strong>lowerCamelCase</strong>（最初の単語は小文字、例：<code>myVariableName</code>）と<strong>UpperCamelCase</strong>（パスカルケース、例：<code>MyClassName</code>）。</p>
              <h2>キャメルケースと他の命名規則の比較</h2>
              <ul>
                <li><strong>camelCase</strong>: <code>myVariableName</code> — JavaScript、Java、TypeScriptの変数</li>
                <li><strong>PascalCase</strong>: <code>MyClassName</code> — C#クラス、Reactコンポーネント</li>
                <li><strong>snake_case</strong>: <code>my_variable_name</code> — Python、Ruby、データベース</li>
                <li><strong>kebab-case</strong>: <code>my-variable-name</code> — URL、CSSクラス、HTML属性</li>
              </ul>
              <h2>underscore_caseからcamelCaseへの変換</h2>
              <p>snake_case（アンダースコア記法）からcamelCaseへの変換は、PythonとJavaScriptのコードベース間で作業する際に不可欠です。各アンダースコアを削除し、続く文字を大文字化します：</p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>規則</th>
                      <th>例</th>
                      <th>先頭文字</th>
                      <th>用途</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>小文字</td>
                      <td>JS/TSの変数、JSONキー</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>大文字</td>
                      <td>クラス、Reactコンポーネント</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>キャメルケースの使用場所</h2>
              <ul>
                <li>JavaScript/TypeScriptの変数名・関数名</li>
                <li>Javaのメソッド名・変数名</li>
                <li>多くのAPIのJSONオブジェクトキー</li>
                <li>SwiftとKotlinの識別子</li>
                <li>Goのエクスポートされた識別子（PascalCase）</li>
                <li>Reactのstate変数とイベントハンドラ</li>
                <li>GraphQLのフィールド名</li>
              </ul>
              <h2>関連ツール</h2>
              <p>Python命名には<Link href="/snake-case-converter">Snake Case Converter</Link>を、URL向けには<Link href="/kebab-case-converter">Kebab Case Converter</Link>を、全形式一括には<Link href="/case-converter-online">Case Converter Online</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist CamelCase?</h2>
              <p>CamelCase ist eine Namenskonvention, bei der jedes Wort mit einem Großbuchstaben beginnt und keine Leerzeichen oder Trennzeichen verwendet werden. Es gibt zwei Varianten: <strong>lowerCamelCase</strong> (erstes Wort klein, z.B. <code>myVariableName</code>) und <strong>UpperCamelCase</strong> oder PascalCase (alle Wörter groß, z.B. <code>MyClassName</code>).</p>
              <h2>CamelCase im Vergleich zu anderen Konventionen</h2>
              <ul>
                <li><strong>camelCase</strong>: <code>myVariableName</code> — JavaScript-, Java-, TypeScript-Variablen</li>
                <li><strong>PascalCase</strong>: <code>MyClassName</code> — C#-Klassen, React-Komponenten</li>
                <li><strong>snake_case</strong>: <code>my_variable_name</code> — Python, Ruby, Datenbanken</li>
                <li><strong>kebab-case</strong>: <code>my-variable-name</code> — URLs, CSS-Klassen, HTML-Attribute</li>
              </ul>
              <h2>underscore_case in camelCase umwandeln</h2>
              <p>Die Umwandlung von snake_case in camelCase ist beim Arbeiten mit Python- und JavaScript-Codebasen unerlässlich. Der Algorithmus entfernt Unterstriche und schreibt den folgenden Buchstaben groß:</p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Konvention</th>
                      <th>Beispiel</th>
                      <th>Anfangsbuchstabe</th>
                      <th>Verwendung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>kleinbuchstabe</td>
                      <td>JS/TS-Variablen, JSON-Keys</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>Großbuchstabe</td>
                      <td>Klassen, React-Komponenten</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Verwendung von CamelCase</h2>
              <ul>
                <li>JavaScript- und TypeScript-Variablen- und Funktionsnamen</li>
                <li>Java-Methoden- und Variablennamen</li>
                <li>JSON-Objekt-Schlüssel in vielen APIs</li>
                <li>Swift- und Kotlin-Bezeichner</li>
                <li>Go-exportierte Bezeichner (PascalCase)</li>
                <li>React-State-Variablen und Event-Handler</li>
                <li>GraphQL-Feldnamen</li>
              </ul>
              <h2>Verwandte Tools</h2>
              <p>Für Python-Benennung: <Link href="/snake-case-converter">Snake Case Converter</Link>. Für URL-Formate: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Für alle Formate gleichzeitig: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué es CamelCase?</h2>
              <p>CamelCase es una convención de nomenclatura donde cada palabra comienza con mayúscula y no se usan espacios ni separadores. Tiene dos variantes: <strong>lowerCamelCase</strong> (primera palabra en minúscula, ej. <code>myVariableName</code>) y <strong>UpperCamelCase</strong> o PascalCase (todas las palabras en mayúscula, ej. <code>MyClassName</code>).</p>
              <h2>CamelCase vs otras convenciones</h2>
              <ul>
                <li><strong>camelCase</strong>: <code>myVariableName</code> — variables JavaScript, Java, TypeScript</li>
                <li><strong>PascalCase</strong>: <code>MyClassName</code> — clases C#, componentes React</li>
                <li><strong>snake_case</strong>: <code>my_variable_name</code> — Python, Ruby, bases de datos</li>
                <li><strong>kebab-case</strong>: <code>my-variable-name</code> — URLs, clases CSS, atributos HTML</li>
              </ul>
              <h2>Convertir underscore_case a camelCase</h2>
              <p>Convertir snake_case a camelCase es esencial al trabajar entre código Python y JavaScript. El algoritmo elimina cada guion bajo y capitaliza la letra siguiente:</p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Convención</th>
                      <th>Ejemplo</th>
                      <th>Primera letra</th>
                      <th>Uso común</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>minúscula</td>
                      <td>Variables JS/TS, claves JSON</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>mayúscula</td>
                      <td>Clases, componentes React</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Dónde usar CamelCase</h2>
              <ul>
                <li>Variables y funciones en JavaScript y TypeScript</li>
                <li>Métodos y variables en Java</li>
                <li>Claves de objetos JSON en muchas APIs</li>
                <li>Identificadores en Swift y Kotlin</li>
                <li>Identificadores exportados en Go (PascalCase)</li>
                <li>Variables de estado y event handlers en React</li>
                <li>Nombres de campos en GraphQL</li>
              </ul>
              <h2>Herramientas relacionadas</h2>
              <p>Para nomenclatura Python: <Link href="/snake-case-converter">Snake Case Converter</Link>. Para formatos URL: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Para todos los formatos a la vez: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que é CamelCase?</h2>
              <p>CamelCase é uma convenção de nomenclatura onde cada palavra começa com maiúscula e não são usados espaços ou separadores. Tem duas variantes: <strong>lowerCamelCase</strong> (primeira palavra em minúscula, ex. <code>myVariableName</code>) e <strong>UpperCamelCase</strong> ou PascalCase (todas as palavras com maiúscula, ex. <code>MyClassName</code>).</p>
              <h2>CamelCase vs outras convenções</h2>
              <ul>
                <li><strong>camelCase</strong>: <code>myVariableName</code> — variáveis JavaScript, Java, TypeScript</li>
                <li><strong>PascalCase</strong>: <code>MyClassName</code> — classes C#, componentes React</li>
                <li><strong>snake_case</strong>: <code>my_variable_name</code> — Python, Ruby, bancos de dados</li>
                <li><strong>kebab-case</strong>: <code>my-variable-name</code> — URLs, classes CSS, atributos HTML</li>
              </ul>
              <h2>Converter underscore_case para camelCase</h2>
              <p>Converter snake_case para camelCase é essencial ao trabalhar entre código Python e JavaScript. O algoritmo remove cada underscore e capitaliza a letra seguinte:</p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Convenção</th>
                      <th>Exemplo</th>
                      <th>Primeira letra</th>
                      <th>Uso comum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>minúscula</td>
                      <td>Variáveis JS/TS, chaves JSON</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>maiúscula</td>
                      <td>Classes, componentes React</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Onde usar CamelCase</h2>
              <ul>
                <li>Variáveis e funções em JavaScript e TypeScript</li>
                <li>Métodos e variáveis em Java</li>
                <li>Chaves de objetos JSON em muitas APIs</li>
                <li>Identificadores em Swift e Kotlin</li>
                <li>Identificadores exportados em Go (PascalCase)</li>
                <li>Variáveis de estado e event handlers em React</li>
                <li>Nomes de campos em GraphQL</li>
              </ul>
              <h2>Ferramentas relacionadas</h2>
              <p>Para nomenclatura Python: <Link href="/snake-case-converter">Snake Case Converter</Link>. Para formatos URL: <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Para todos os formatos de uma vez: <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce que le CamelCase ?</h2>
              <p>Le CamelCase est une convention de nommage où chaque mot commence par une majuscule sans espaces ni séparateurs. Il existe deux variantes : <strong>lowerCamelCase</strong> (premier mot en minuscule, ex. <code>myVariableName</code>) et <strong>UpperCamelCase</strong> ou PascalCase (tous les mots en majuscule, ex. <code>MyClassName</code>).</p>
              <h2>CamelCase vs autres conventions</h2>
              <ul>
                <li><strong>camelCase</strong> : <code>myVariableName</code> — variables JavaScript, Java, TypeScript</li>
                <li><strong>PascalCase</strong> : <code>MyClassName</code> — classes C#, composants React</li>
                <li><strong>snake_case</strong> : <code>my_variable_name</code> — Python, Ruby, bases de données</li>
                <li><strong>kebab-case</strong> : <code>my-variable-name</code> — URLs, classes CSS, attributs HTML</li>
              </ul>
              <h2>Convertir underscore_case en camelCase</h2>
              <p>La conversion de snake_case en camelCase est essentielle pour travailler entre Python et JavaScript. L&apos;algorithme supprime chaque underscore et met en majuscule la lettre suivante :</p>
              <ul>
                <li><code>user_first_name</code> → <code>userFirstName</code></li>
                <li><code>get_user_by_id</code> → <code>getUserById</code></li>
                <li><code>api_base_url</code> → <code>apiBaseUrl</code></li>
              </ul>
              <h2>camelCase vs PascalCase</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Convention</th>
                      <th>Exemple</th>
                      <th>Première lettre</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>camelCase</td>
                      <td><code>myVariable</code></td>
                      <td>minuscule</td>
                      <td>Variables JS/TS, clés JSON</td>
                    </tr>
                    <tr>
                      <td>PascalCase</td>
                      <td><code>MyVariable</code></td>
                      <td>majuscule</td>
                      <td>Classes, composants React</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Où utiliser le CamelCase</h2>
              <ul>
                <li>Variables et fonctions JavaScript et TypeScript</li>
                <li>Méthodes et variables Java</li>
                <li>Clés d&apos;objets JSON dans de nombreuses APIs</li>
                <li>Identifiants Swift et Kotlin</li>
                <li>Identifiants exportés en Go (PascalCase)</li>
                <li>Variables d&apos;état et gestionnaires d&apos;événements React</li>
                <li>Noms de champs GraphQL</li>
              </ul>
              <h2>Outils associés</h2>
              <p>Pour la nomenclature Python : <Link href="/snake-case-converter">Snake Case Converter</Link>. Pour les formats URL : <Link href="/kebab-case-converter">Kebab Case Converter</Link>. Pour tous les formats à la fois : <Link href="/case-converter-online">Case Converter Online</Link>.</p>
            </section>
          )}

          <RelatedTools current="/camelcase-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
