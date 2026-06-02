import type { Metadata } from "next";
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
    description: "Convert any text to kebab-case format. Ideal for CSS class names, URL slugs, and file naming.",
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

              <h2>Where to Use Kebab Case</h2>
              <ul>
                <li>CSS class names and IDs</li>
                <li>URL slugs and file names</li>
                <li>HTML data attributes</li>
                <li>npm package names</li>
                <li>Git branch names</li>
                <li>Docker container names</li>
                <li>Kubernetes resource names</li>
                <li>Angular component selectors</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/kebab-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
