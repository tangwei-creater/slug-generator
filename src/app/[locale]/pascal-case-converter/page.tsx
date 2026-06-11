import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SingleCaseTool from "@/components/SingleCaseTool";

const siteUrl = "https://sluggenerator.app";
const path = "/pascal-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.pascalCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function PascalCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.pascalCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pascal Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to PascalCase format. Ideal for class names in C#, Java, React components, and TypeScript interfaces. Free online tool.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PascalCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PascalCase (also called UpperCamelCase) is a naming convention where the first letter of every word is capitalized and words are joined without separators. For example: MyVariableName, UserProfile, HttpResponse.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between PascalCase and camelCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The only difference is the first letter: PascalCase capitalizes it (MyVariable), while camelCase keeps it lowercase (myVariable). PascalCase is used for class names and types; camelCase is used for variables and functions.",
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
          <Breadcrumbs items={[{ name: "Pascal Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SingleCaseTool mode="PascalCase" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is PascalCase?</h2>
              <p>
                PascalCase (also called UpperCamelCase or StudlyCase) is a
                naming convention where the first letter of every word is
                capitalized and all words are joined without spaces or
                separators. For example: <code>MyClassName</code>,
                <code>UserProfileService</code>, <code>HttpResponseCode</code>.
              </p>

              <h2>PascalCase vs camelCase</h2>
              <table>
                <thead>
                  <tr>
                    <th>Convention</th>
                    <th>Example</th>
                    <th>First letter</th>
                    <th>Used for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PascalCase</td>
                    <td><code>MyVariable</code></td>
                    <td>Uppercase</td>
                    <td>Classes, types, components</td>
                  </tr>
                  <tr>
                    <td>camelCase</td>
                    <td><code>myVariable</code></td>
                    <td>Lowercase</td>
                    <td>Variables, functions, methods</td>
                  </tr>
                </tbody>
              </table>

              <h2>Where PascalCase Is Used</h2>
              <ul>
                <li><strong>C# / .NET</strong> — classes, methods, properties, namespaces</li>
                <li><strong>Java</strong> — class names and interfaces</li>
                <li><strong>React / Next.js</strong> — component names (<code>UserProfile</code>, <code>NavBar</code>)</li>
                <li><strong>TypeScript</strong> — interfaces, types, enums</li>
                <li><strong>Go</strong> — exported (public) identifiers</li>
                <li><strong>Swift</strong> — types, protocols, enum cases</li>
                <li><strong>Kotlin</strong> — classes and objects</li>
              </ul>

              <h2>Convert snake_case to PascalCase</h2>
              <p>
                Paste your snake_case text (e.g., <code>user_first_name</code>)
                into the converter above. The tool splits on underscores and
                capitalizes each word to produce <code>UserFirstName</code>.
              </p>

              <h2>Convert kebab-case to PascalCase</h2>
              <p>
                Similarly, kebab-case input like <code>my-component-name</code>
                is converted to <code>MyComponentName</code>. This is useful
                when converting CSS class names or URL slugs to React component
                names.
              </p>

              <h2>FAQ</h2>
              <h3>Is PascalCase the same as Title Case?</h3>
              <p>
                No. Title Case keeps spaces between words
                (&ldquo;My Variable Name&rdquo;) while PascalCase removes them
                (<code>MyVariableName</code>). Title Case is for human-readable
                text; PascalCase is for code identifiers.
              </p>

              <h3>When should I use PascalCase vs snake_case?</h3>
              <p>
                Follow your language&apos;s convention. C#, Java, and
                TypeScript types use PascalCase. Python and Ruby use
                snake_case for most identifiers. Mixing conventions in the
                same codebase is considered bad practice.
              </p>
            </section>
          )}

          <RelatedTools current="/pascal-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
