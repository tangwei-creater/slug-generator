import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/snake-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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

          <SlugTool placeholder={t("placeholder")} />

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

              <h2>Where to Use Snake Case</h2>
              <ul>
                <li>Python variable and function names (PEP 8 standard)</li>
                <li>Database table and column names</li>
                <li>Ruby method and variable names</li>
                <li>API request and response field names</li>
                <li>Configuration file keys</li>
                <li>File naming in certain frameworks</li>
                <li>Environment variable names (SCREAMING_SNAKE_CASE)</li>
                <li>Rust variable and function names</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/snake-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
