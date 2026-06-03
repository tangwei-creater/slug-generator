import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import CaseConverterTool from "@/components/CaseConverterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/case-converter-online";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.caseConverterOnline" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function CaseConverterOnline({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.caseConverterOnline");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Case Converter Online",
    url: `${siteUrl}${path}`,
    description: "Convert text to any case format: uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Free online tool.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I convert uppercase to lowercase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste your text into the converter above and the lowercase result appears instantly. You can also use keyboard shortcuts in most text editors: Ctrl+Shift+L in VS Code, or select text and press Shift+F3 in Microsoft Word.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between camelCase and PascalCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In camelCase, the first word starts with a lowercase letter and each subsequent word is capitalized (e.g., myVariableName). In PascalCase, every word starts with a capital letter (e.g., MyVariableName). camelCase is common in JavaScript variables, while PascalCase is used for class names in C#, Java, and React components.",
        },
      },
      {
        "@type": "Question",
        name: "What case formats does this tool support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This tool converts text to 13 formats simultaneously: lowercase, UPPERCASE, Sentence case, Title Case, camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, dot.case, aLtErNaTiNg CaSe, iNVERSE cASE, and URL slug.",
        },
      },
      {
        "@type": "Question",
        name: "Is this case converter free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this case converter is 100% free with no signup required. All text conversion happens in your browser — your text is never sent to any server.",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <JsonLd data={faqLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Case Converter Online" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <CaseConverterTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Convert Text to Any Case Format</h2>
              <p>
                This free online case converter transforms your text into 13
                different formats simultaneously. Paste your text once and get
                every case variant — no need to visit separate tools for each
                format.
              </p>

              <h2>Supported Case Formats</h2>
              <table>
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Example</th>
                    <th>Common use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>General text, email</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Headings, acronyms, emphasis</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>UI text, subheadings, Google style</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Headlines, book titles, AP style</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript, JSON keys</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>C# classes, React components, Java</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, database columns</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Constants in C, Java, Python</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS classes, URLs, HTML attributes</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Java packages, file extensions</td></tr>
                  <tr><td>aLtErNaTiNg</td><td>hElLo WoRlD</td><td>Memes, sarcasm, social media</td></tr>
                  <tr><td>iNVERSE</td><td>HELLO WORLD → hello world</td><td>Fix accidental caps lock</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>SEO-friendly URLs, blog posts</td></tr>
                </tbody>
              </table>

              <h2>Uppercase to Lowercase Converter</h2>
              <p>
                Need to convert UPPERCASE TEXT to lowercase? Paste it into the
                box above and the lowercase result appears instantly. This is
                the fastest way to fix text that was accidentally typed with
                Caps Lock on.
              </p>

              <h2>Lowercase to Uppercase Converter</h2>
              <p>
                Converting lowercase text to ALL CAPS is just as easy. Your
                uppercase result is displayed alongside all other formats so
                you can pick the one you need.
              </p>

              <h2>Programming Case Conventions</h2>
              <p>
                Different programming languages and frameworks use different
                naming conventions:
              </p>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase for variables and functions, PascalCase for classes and React components</li>
                <li><strong>Python</strong> — snake_case for variables and functions, PascalCase for classes, SCREAMING_SNAKE_CASE for constants</li>
                <li><strong>CSS</strong> — kebab-case for class names and custom properties</li>
                <li><strong>Java</strong> — camelCase for methods, PascalCase for classes, SCREAMING_SNAKE_CASE for constants</li>
                <li><strong>Ruby</strong> — snake_case for methods and variables, PascalCase for classes</li>
                <li><strong>Go</strong> — PascalCase for exported names, camelCase for unexported</li>
              </ul>

              <h2>FAQ</h2>
              <h3>How do I convert uppercase to lowercase without retyping?</h3>
              <p>
                Paste your text into the converter above. The lowercase version
                appears instantly. You can also use Shift+F3 in Microsoft Word
                or Ctrl+Shift+L in VS Code.
              </p>

              <h3>What is the difference between snake_case and kebab-case?</h3>
              <p>
                Both separate words in multi-word identifiers. snake_case uses
                underscores (common in Python, databases) while kebab-case uses
                hyphens (common in URLs, CSS). Choose based on your
                language&apos;s convention.
              </p>

              <h3>Can I convert between camelCase and snake_case?</h3>
              <p>
                Yes. Enter your camelCase text (e.g., &ldquo;myVariableName&rdquo;)
                and the tool will show the snake_case equivalent
                (my_variable_name) along with all other formats.
              </p>

              <h2>Related Tools</h2>
              <p>
                Need only one format? Try the dedicated converters:{" "}
                <Link href="/camelcase-converter">CamelCase Converter</Link>,{" "}
                <Link href="/snake-case-converter">Snake Case Converter</Link>,{" "}
                <Link href="/kebab-case-converter">Kebab Case Converter</Link>, or{" "}
                <Link href="/sentence-case-converter">Sentence Case Converter</Link>.
                For URL slugs, see the{" "}
                <Link href="/text-to-slug">Text to Slug</Link> converter.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>あらゆるケース形式にテキストを変換</h2>
              <p>この無料オンラインケースコンバーターは、テキストを13種類の形式に同時変換します。一度貼り付けるだけで、すべてのケースバリエーションが表示されます — 各形式ごとに別のツールを使う必要はありません。</p>
              <h2>対応するケース形式</h2>
              <table>
                <thead>
                  <tr>
                    <th>形式</th>
                    <th>例</th>
                    <th>用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>一般テキスト、メール</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>見出し、頭字語、強調</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>UIテキスト、小見出し</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>タイトル、見出し</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript、TypeScript</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>C#クラス、React</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python、Ruby、DB</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>定数（C、Java、Python）</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS、URL、HTML属性</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Javaパッケージ</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>SEOフレンドリーURL</td></tr>
                </tbody>
              </table>
              <h2>大文字から小文字への変換</h2>
              <p>大文字のテキストを小文字に変換するには、上のボックスに貼り付けるだけです。Caps Lockで入力してしまったテキストを修正する最も簡単な方法です。</p>
              <h2>プログラミングのケース規約</h2>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — 変数と関数はcamelCase、クラスとReactコンポーネントはPascalCase</li>
                <li><strong>Python</strong> — 変数と関数はsnake_case、クラスはPascalCase、定数はSCREAMING_SNAKE_CASE</li>
                <li><strong>CSS</strong> — クラス名はkebab-case</li>
                <li><strong>Java</strong> — メソッドはcamelCase、クラスはPascalCase、定数はSCREAMING_SNAKE_CASE</li>
              </ul>
              <h2>FAQ</h2>
              <h3>snake_caseとkebab-caseの違いは？</h3>
              <p>どちらも複数単語の識別子を区切ります。snake_caseはアンダースコアを使用（Python、DB）、kebab-caseはハイフンを使用（URL、CSS）。言語の規約に従って選択してください。</p>
              <h2>関連ツール</h2>
              <p>単一形式なら専用コンバーターをどうぞ：<Link href="/camelcase-converter">CamelCase Converter</Link>、<Link href="/snake-case-converter">Snake Case Converter</Link>、<Link href="/kebab-case-converter">Kebab Case Converter</Link>、<Link href="/sentence-case-converter">Sentence Case Converter</Link>。URLスラッグには<Link href="/text-to-slug">Text to Slug</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Text in jedes Case-Format konvertieren</h2>
              <p>Dieser kostenlose Online-Case-Converter wandelt Ihren Text gleichzeitig in 13 verschiedene Formate um. Einmal einfügen und alle Case-Varianten erhalten — kein Wechsel zwischen verschiedenen Tools nötig.</p>
              <h2>Unterstützte Case-Formate</h2>
              <table>
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Beispiel</th>
                    <th>Verwendung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>Allgemeiner Text, E-Mail</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Überschriften, Akronyme</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>UI-Text, Unterüberschriften</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Titel, Überschriften</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>C#-Klassen, React</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, DB</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Konstanten (C, Java)</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS, URLs, HTML</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Java-Pakete</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>SEO-URLs</td></tr>
                </tbody>
              </table>
              <h2>Großbuchstaben in Kleinbuchstaben umwandeln</h2>
              <p>GROßBUCHSTABEN-TEXT in Kleinbuchstaben umwandeln? Einfach oben einfügen — das Ergebnis erscheint sofort. Die schnellste Methode, versehentlich mit Caps Lock getippten Text zu korrigieren.</p>
              <h2>Programmier-Case-Konventionen</h2>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase für Variablen/Funktionen, PascalCase für Klassen und React-Komponenten</li>
                <li><strong>Python</strong> — snake_case für Variablen/Funktionen, PascalCase für Klassen, SCREAMING_SNAKE_CASE für Konstanten</li>
                <li><strong>CSS</strong> — kebab-case für Klassennamen</li>
                <li><strong>Java</strong> — camelCase für Methoden, PascalCase für Klassen, SCREAMING_SNAKE_CASE für Konstanten</li>
              </ul>
              <h2>FAQ</h2>
              <h3>Was ist der Unterschied zwischen snake_case und kebab-case?</h3>
              <p>Beide trennen Wörter in zusammengesetzten Bezeichnern. snake_case verwendet Unterstriche (Python, Datenbanken), kebab-case verwendet Bindestriche (URLs, CSS). Wählen Sie je nach Sprachkonvention.</p>
              <h2>Verwandte Tools</h2>
              <p>Für einzelne Formate: <Link href="/camelcase-converter">CamelCase Converter</Link>, <Link href="/snake-case-converter">Snake Case Converter</Link>, <Link href="/kebab-case-converter">Kebab Case Converter</Link>, <Link href="/sentence-case-converter">Sentence Case Converter</Link>. Für URL-Slugs: <Link href="/text-to-slug">Text to Slug</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Convierte texto a cualquier formato de mayúsculas</h2>
              <p>Este convertidor de mayúsculas gratuito transforma tu texto en 13 formatos diferentes simultáneamente. Pega tu texto una vez y obtén todas las variantes — sin necesidad de visitar herramientas separadas para cada formato.</p>
              <h2>Formatos soportados</h2>
              <table>
                <thead>
                  <tr>
                    <th>Formato</th>
                    <th>Ejemplo</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>Texto general, email</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Títulos, acrónimos</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>Texto UI, subtítulos</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Titulares, títulos</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>Clases C#, React</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, BD</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Constantes (C, Java)</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS, URLs, HTML</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Paquetes Java</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>URLs SEO</td></tr>
                </tbody>
              </table>
              <h2>Convertidor de mayúsculas a minúsculas</h2>
              <p>¿Necesitas convertir TEXTO EN MAYÚSCULAS a minúsculas? Pégalo en el cuadro de arriba y el resultado aparece al instante. La forma más rápida de corregir texto escrito accidentalmente con Bloq Mayús activado.</p>
              <h2>Convenciones de mayúsculas en programación</h2>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase para variables/funciones, PascalCase para clases y componentes React</li>
                <li><strong>Python</strong> — snake_case para variables/funciones, PascalCase para clases, SCREAMING_SNAKE_CASE para constantes</li>
                <li><strong>CSS</strong> — kebab-case para nombres de clases</li>
                <li><strong>Java</strong> — camelCase para métodos, PascalCase para clases, SCREAMING_SNAKE_CASE para constantes</li>
              </ul>
              <h2>FAQ</h2>
              <h3>¿Cuál es la diferencia entre snake_case y kebab-case?</h3>
              <p>Ambos separan palabras en identificadores compuestos. snake_case usa guiones bajos (Python, bases de datos), kebab-case usa guiones (URLs, CSS). Elige según la convención de tu lenguaje.</p>
              <h2>Herramientas relacionadas</h2>
              <p>Para formatos individuales: <Link href="/camelcase-converter">CamelCase Converter</Link>, <Link href="/snake-case-converter">Snake Case Converter</Link>, <Link href="/kebab-case-converter">Kebab Case Converter</Link>, <Link href="/sentence-case-converter">Sentence Case Converter</Link>. Para slugs de URL: <Link href="/text-to-slug">Text to Slug</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Converta texto para qualquer formato de maiúsculas</h2>
              <p>Este conversor de maiúsculas gratuito transforma seu texto em 13 formatos diferentes simultaneamente. Cole seu texto uma vez e obtenha todas as variantes — sem precisar visitar ferramentas separadas para cada formato.</p>
              <h2>Formatos suportados</h2>
              <table>
                <thead>
                  <tr>
                    <th>Formato</th>
                    <th>Exemplo</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>Texto geral, email</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Títulos, acrônimos</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>Texto UI, subtítulos</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Manchetes, títulos</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>Classes C#, React</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, BD</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Constantes (C, Java)</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS, URLs, HTML</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Pacotes Java</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>URLs SEO</td></tr>
                </tbody>
              </table>
              <h2>Conversor de maiúsculas para minúsculas</h2>
              <p>Precisa converter TEXTO EM MAIÚSCULAS para minúsculas? Cole no quadro acima e o resultado aparece instantaneamente. A forma mais rápida de corrigir texto digitado acidentalmente com Caps Lock ativado.</p>
              <h2>Convenções de maiúsculas em programação</h2>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase para variáveis/funções, PascalCase para classes e componentes React</li>
                <li><strong>Python</strong> — snake_case para variáveis/funções, PascalCase para classes, SCREAMING_SNAKE_CASE para constantes</li>
                <li><strong>CSS</strong> — kebab-case para nomes de classes</li>
                <li><strong>Java</strong> — camelCase para métodos, PascalCase para classes, SCREAMING_SNAKE_CASE para constantes</li>
              </ul>
              <h2>FAQ</h2>
              <h3>Qual a diferença entre snake_case e kebab-case?</h3>
              <p>Ambos separam palavras em identificadores compostos. snake_case usa underscores (Python, bancos de dados), kebab-case usa hífens (URLs, CSS). Escolha conforme a convenção da sua linguagem.</p>
              <h2>Ferramentas relacionadas</h2>
              <p>Para formatos individuais: <Link href="/camelcase-converter">CamelCase Converter</Link>, <Link href="/snake-case-converter">Snake Case Converter</Link>, <Link href="/kebab-case-converter">Kebab Case Converter</Link>, <Link href="/sentence-case-converter">Sentence Case Converter</Link>. Para slugs de URL: <Link href="/text-to-slug">Text to Slug</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Convertir du texte dans n&apos;importe quel format de casse</h2>
              <p>Ce convertisseur de casse gratuit transforme votre texte en 13 formats différents simultanément. Collez votre texte une fois et obtenez toutes les variantes — pas besoin de visiter des outils séparés pour chaque format.</p>
              <h2>Formats de casse supportés</h2>
              <table>
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Exemple</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>Texte général, email</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Titres, acronymes</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>Texte UI, sous-titres</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Gros titres, titres</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>Classes C#, React</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, BDD</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Constantes (C, Java)</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS, URLs, HTML</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Packages Java</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>URLs SEO</td></tr>
                </tbody>
              </table>
              <h2>Convertisseur majuscules en minuscules</h2>
              <p>Besoin de convertir du TEXTE EN MAJUSCULES en minuscules ? Collez-le dans le champ ci-dessus et le résultat apparaît instantanément. Le moyen le plus rapide de corriger du texte tapé accidentellement avec le verrouillage des majuscules activé.</p>
              <h2>Conventions de casse en programmation</h2>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase pour variables/fonctions, PascalCase pour classes et composants React</li>
                <li><strong>Python</strong> — snake_case pour variables/fonctions, PascalCase pour classes, SCREAMING_SNAKE_CASE pour constantes</li>
                <li><strong>CSS</strong> — kebab-case pour les noms de classes</li>
                <li><strong>Java</strong> — camelCase pour méthodes, PascalCase pour classes, SCREAMING_SNAKE_CASE pour constantes</li>
              </ul>
              <h2>FAQ</h2>
              <h3>Quelle est la différence entre snake_case et kebab-case ?</h3>
              <p>Les deux séparent les mots dans les identifiants composés. snake_case utilise des underscores (Python, bases de données), kebab-case utilise des tirets (URLs, CSS). Choisissez selon la convention de votre langage.</p>
              <h2>Outils associés</h2>
              <p>Pour des formats individuels : <Link href="/camelcase-converter">CamelCase Converter</Link>, <Link href="/snake-case-converter">Snake Case Converter</Link>, <Link href="/kebab-case-converter">Kebab Case Converter</Link>, <Link href="/sentence-case-converter">Sentence Case Converter</Link>. Pour les slugs d&apos;URL : <Link href="/text-to-slug">Text to Slug</Link>.</p>
            </section>
          )}

          <RelatedTools current="/case-converter-online" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
