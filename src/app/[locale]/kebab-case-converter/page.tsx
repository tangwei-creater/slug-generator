import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/kebab-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.kebabCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function KebabCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.kebabCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kebab Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to kebab-case for URL slugs, CSS class names, REST endpoints, file names, and JavaScript projects.",
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
          <Breadcrumbs items={[{ name: "Kebab Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SlugTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Kebab Case?</h2>
              <p>
                Kebab case (also called kebab-case, dash-case, or lisp-case) is a
                naming convention where words are separated by hyphens and all
                letters are lowercase. For example,
                <code>my-variable-name</code> or <code>user-profile-page</code>.
              </p>

              <h2>Kebab Case vs Other Naming Conventions</h2>
              <ul>
                <li>
                  <strong>Kebab case</strong>: <code>my-variable-name</code> —
                  used in URLs, CSS, HTML attributes
                </li>
                <li>
                  <strong>Camel case</strong>: <code>myVariableName</code> — used
                  in JavaScript, Java
                </li>
                <li>
                  <strong>Snake case</strong>: <code>my_variable_name</code> —
                  used in Python, Ruby, databases
                </li>
                <li>
                  <strong>Pascal case</strong>: <code>MyVariableName</code> —
                  used in C#, React components
                </li>
              </ul>

              <h2>How to Convert camelCase to kebab-case</h2>
              <p>
                Converting camelCase to kebab-case is common when turning
                JavaScript variable names into CSS classes or URL-friendly
                strings. The algorithm inserts a hyphen before each uppercase
                letter and lowercases everything:
              </p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
                <li><code>backgroundColor</code> → <code>background-color</code></li>
              </ul>
              <p>
                This is especially useful in React projects where component
                names (PascalCase) need to become CSS class names (kebab-case),
                or when generating URL slugs from code identifiers.
              </p>

              <h2>kebab-case vs snake_case</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Convention</th>
                      <th>Separator</th>
                      <th>Example</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>kebab-case</td>
                      <td>hyphen (-)</td>
                      <td><code>my-variable</code></td>
                      <td>URLs, CSS, HTML</td>
                    </tr>
                    <tr>
                      <td>snake_case</td>
                      <td>underscore (_)</td>
                      <td><code>my_variable</code></td>
                      <td>Python, databases, APIs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>kebab-case Slug for SEO URLs</h2>
              <p>
                A kebab-case slug is the standard shape for many SEO-friendly
                URLs because hyphens are easy for people and search engines to
                read. For example, <code>Product Launch Checklist</code> becomes
                <code>product-launch-checklist</code>. If you are creating page
                URLs, you can also use the <Link href="/url-slug-generator">URL Slug Generator</Link>
                for stop-word removal, max length, and bulk mode.
              </p>

              <h2>kebab case in JavaScript, CSS, and REST URLs</h2>
              <p>
                JavaScript code usually uses <code>camelCase</code>, but kebab
                case appears often in CSS class names, custom elements, file
                names, REST endpoint paths, and route slugs. This converter is
                useful when a JS variable such as <code>userProfilePage</code>
                needs to become <code>user-profile-page</code> for a URL or CSS
                selector.
              </p>

              <h2>Where to Use Kebab Case</h2>
              <ul>
                <li>CSS class names and IDs</li>
                <li>URL slugs and file names</li>
                <li>REST endpoint paths such as <code>/user-profiles</code></li>
                <li>HTML data attributes</li>
                <li>npm package names</li>
                <li>Git branch names</li>
                <li>Docker container names</li>
                <li>Kubernetes resource names</li>
                <li>Angular component selectors</li>
              </ul>
              <h2>Related Slug Tools</h2>
              <p>
                Need a full SEO slug workflow? Try the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                Need permanent blog URLs? Use the <Link href="/permalink-generator">Permalink Generator</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>ケバブケースとは？</h2>
              <p>ケバブケース（kebab-case、ダッシュケースとも呼ばれる）は、単語をハイフンで区切り、すべて小文字にする命名規則です。例：<code>my-variable-name</code>、<code>user-profile-page</code>。</p>
              <h2>ケバブケースと他の命名規則の比較</h2>
              <ul>
                <li><strong>ケバブケース</strong>：<code>my-variable-name</code> — URL、CSS、HTML属性</li>
                <li><strong>キャメルケース</strong>：<code>myVariableName</code> — JavaScript、Java</li>
                <li><strong>スネークケース</strong>：<code>my_variable_name</code> — Python、Ruby、データベース</li>
                <li><strong>パスカルケース</strong>：<code>MyVariableName</code> — C#、Reactコンポーネント</li>
              </ul>
              <h2>camelCaseからkebab-caseへの変換</h2>
              <p>camelCaseからkebab-caseへの変換は、JavaScript変数名をCSSクラスやURL向け文字列に変えるときによく行われます。大文字の前にハイフンを挿入し、全体を小文字にします：</p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
                <li><code>backgroundColor</code> → <code>background-color</code></li>
              </ul>
              <h2>SEO URLのためのkebab-caseスラッグ</h2>
              <p>kebab-caseのスラッグは、ハイフンが人間にも検索エンジンにも読みやすいため、SEOフレンドリーなURLの標準形です。ページURLの作成には<Link href="/url-slug-generator">URL Slug Generator</Link>で不要語除去やバルクモードも使えます。</p>
              <h2>JavaScript・CSS・REST URLでのkebab case</h2>
              <p>JavaScriptのコードは通常 <code>camelCase</code> を使いますが、CSSクラス名、カスタム要素、ファイル名、RESTエンドポイントパスではケバブケースがよく使われます。</p>
              <h2>ケバブケースの使用場所</h2>
              <ul>
                <li>CSSクラス名とID</li>
                <li>URLスラッグとファイル名</li>
                <li><code>/user-profiles</code> のようなRESTエンドポイントパス</li>
                <li>HTMLデータ属性</li>
                <li>npmパッケージ名・Gitブランチ名・Dockerコンテナ名</li>
              </ul>
              <h2>関連スラッグツール</h2>
              <p>SEOスラッグの完全なワークフローには<Link href="/url-slug-generator">URL Slug Generator</Link>を、恒久的なブログURLには<Link href="/permalink-generator">Permalink Generator</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist Kebab Case?</h2>
              <p>Kebab Case (auch kebab-case oder Dash-Case genannt) ist eine Namenskonvention, bei der Wörter durch Bindestriche getrennt und kleingeschrieben werden. Beispiel: <code>my-variable-name</code>.</p>
              <h2>Kebab Case im Vergleich</h2>
              <ul>
                <li><strong>Kebab Case</strong>: <code>my-variable-name</code> — URLs, CSS, HTML</li>
                <li><strong>Camel Case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Snake Case</strong>: <code>my_variable_name</code> — Python, Datenbanken</li>
                <li><strong>Pascal Case</strong>: <code>MyVariableName</code> — C#, React</li>
              </ul>
              <h2>camelCase zu kebab-case konvertieren</h2>
              <p>Die Umwandlung ist üblich, wenn JS-Variablennamen zu CSS-Klassen oder URL-Strings werden sollen. Vor jedem Großbuchstaben wird ein Bindestrich eingefügt:</p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
              </ul>
              <h2>kebab-case-Slug für SEO-URLs</h2>
              <p>Ein kebab-case-Slug ist die Standardform für SEO-freundliche URLs. Für die URL-Erstellung nutzen Sie auch den <Link href="/url-slug-generator">URL Slug Generator</Link>.</p>
              <h2>kebab case in JavaScript, CSS und REST-URLs</h2>
              <p>JavaScript verwendet <code>camelCase</code>, aber Kebab Case erscheint in CSS-Klassennamen, Dateinamen, REST-Endpunkten und Route-Slugs.</p>
              <h2>Einsatzgebiete</h2>
              <ul>
                <li>CSS-Klassennamen und IDs</li>
                <li>URL-Slugs und Dateinamen</li>
                <li>REST-Endpunkt-Pfade wie <code>/user-profiles</code></li>
                <li>npm-Paketnamen, Git-Branchnamen, Docker-Containernamen</li>
              </ul>
              <h2>Verwandte Slug-Tools</h2>
              <p>Für einen SEO-Slug-Workflow: <Link href="/url-slug-generator">URL Slug Generator</Link>. Für dauerhafte Blog-URLs: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué es kebab case?</h2>
              <p>Kebab case (también llamado kebab-case o dash-case) es una convención de nombres donde las palabras se separan con guiones y son minúsculas. Ejemplo: <code>my-variable-name</code>.</p>
              <h2>Kebab case vs otras convenciones</h2>
              <ul>
                <li><strong>Kebab case</strong>: <code>my-variable-name</code> — URLs, CSS, HTML</li>
                <li><strong>Camel case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Snake case</strong>: <code>my_variable_name</code> — Python, bases de datos</li>
                <li><strong>Pascal case</strong>: <code>MyVariableName</code> — C#, React</li>
              </ul>
              <h2>Convertir camelCase a kebab-case</h2>
              <p>Es común al transformar variables JS en clases CSS o cadenas URL. Se inserta un guion antes de cada mayúscula:</p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
              </ul>
              <h2>Slug en kebab-case para URLs SEO</h2>
              <p>Un slug en kebab-case es la forma estándar para URLs SEO-friendly. También puedes usar el <Link href="/url-slug-generator">URL Slug Generator</Link> con eliminación de palabras vacías y modo masivo.</p>
              <h2>kebab case en JavaScript, CSS y URLs REST</h2>
              <p>JavaScript usa <code>camelCase</code>, pero kebab case aparece en clases CSS, elementos personalizados, archivos, endpoints REST y slugs de rutas.</p>
              <h2>Dónde usar kebab case</h2>
              <ul>
                <li>Clases CSS e IDs</li>
                <li>Slugs de URL y nombres de archivos</li>
                <li>Endpoints REST como <code>/user-profiles</code></li>
                <li>Paquetes npm, ramas Git, contenedores Docker</li>
              </ul>
              <h2>Herramientas relacionadas</h2>
              <p>Para slugs SEO: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para URLs permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que é kebab case?</h2>
              <p>Kebab case (também chamado de kebab-case ou dash-case) é uma convenção de nomenclatura onde as palavras são separadas por hífens e minúsculas. Exemplo: <code>my-variable-name</code>.</p>
              <h2>Kebab case vs outras convenções</h2>
              <ul>
                <li><strong>Kebab case</strong>: <code>my-variable-name</code> — URLs, CSS, HTML</li>
                <li><strong>Camel case</strong>: <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Snake case</strong>: <code>my_variable_name</code> — Python, bancos de dados</li>
                <li><strong>Pascal case</strong>: <code>MyVariableName</code> — C#, React</li>
              </ul>
              <h2>Converter camelCase para kebab-case</h2>
              <p>É comum ao transformar variáveis JS em classes CSS ou strings URL. Um hífen é inserido antes de cada maiúscula:</p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
              </ul>
              <h2>Slug em kebab-case para URLs SEO</h2>
              <p>Um slug em kebab-case é o formato padrão para URLs SEO-friendly. Você também pode usar o <Link href="/url-slug-generator">URL Slug Generator</Link> com remoção de palavras vazias e modo em massa.</p>
              <h2>kebab case em JavaScript, CSS e URLs REST</h2>
              <p>JavaScript usa <code>camelCase</code>, mas kebab case aparece em classes CSS, elementos personalizados, arquivos, endpoints REST e slugs de rotas.</p>
              <h2>Onde usar kebab case</h2>
              <ul>
                <li>Classes CSS e IDs</li>
                <li>Slugs de URL e nomes de arquivos</li>
                <li>Endpoints REST como <code>/user-profiles</code></li>
                <li>Pacotes npm, branches Git, containers Docker</li>
              </ul>
              <h2>Ferramentas relacionadas</h2>
              <p>Para slugs SEO: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para URLs permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce que le kebab case ?</h2>
              <p>Le kebab case (aussi appelé kebab-case ou dash-case) est une convention de nommage où les mots sont séparés par des tirets en minuscules. Exemple : <code>my-variable-name</code>.</p>
              <h2>Kebab case vs autres conventions</h2>
              <ul>
                <li><strong>Kebab case</strong> : <code>my-variable-name</code> — URLs, CSS, HTML</li>
                <li><strong>Camel case</strong> : <code>myVariableName</code> — JavaScript, Java</li>
                <li><strong>Snake case</strong> : <code>my_variable_name</code> — Python, bases de données</li>
                <li><strong>Pascal case</strong> : <code>MyVariableName</code> — C#, React</li>
              </ul>
              <h2>Convertir camelCase en kebab-case</h2>
              <p>C&apos;est courant lorsqu&apos;on transforme des variables JS en classes CSS ou chaînes URL. Un tiret est inséré avant chaque majuscule :</p>
              <ul>
                <li><code>myComponentName</code> → <code>my-component-name</code></li>
                <li><code>userProfilePage</code> → <code>user-profile-page</code></li>
              </ul>
              <h2>Slug en kebab-case pour les URLs SEO</h2>
              <p>Un slug en kebab-case est la forme standard pour les URLs SEO-friendly. Utilisez aussi le <Link href="/url-slug-generator">URL Slug Generator</Link> avec suppression des mots vides et mode en masse.</p>
              <h2>kebab case en JavaScript, CSS et URLs REST</h2>
              <p>JavaScript utilise <code>camelCase</code>, mais le kebab case apparaît dans les classes CSS, éléments personnalisés, fichiers, endpoints REST et slugs de routes.</p>
              <h2>Où utiliser le kebab case</h2>
              <ul>
                <li>Classes CSS et IDs</li>
                <li>Slugs d&apos;URL et noms de fichiers</li>
                <li>Endpoints REST comme <code>/user-profiles</code></li>
                <li>Packages npm, branches Git, conteneurs Docker</li>
              </ul>
              <h2>Outils associés</h2>
              <p>Pour les slugs SEO : <Link href="/url-slug-generator">URL Slug Generator</Link>. Pour les URLs permanentes : <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          <RelatedTools current="/kebab-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
