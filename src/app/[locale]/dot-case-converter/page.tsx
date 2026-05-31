import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/dot-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.dotCaseConverter" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function DotCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.dotCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dot Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert text to dot.case format. Used for Java package names, file extensions, and configuration keys.",
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
          <Breadcrumbs items={[{ name: "Dot Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool defaultSeparator="." placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Dot Case?</h2>
              <p>
                Dot case (also called dot notation) uses periods to separate words,
                with all letters in lowercase: <code>my.variable.name</code>. It is one
                of the less common but important naming conventions in programming.
              </p>
              <h2>Where Dot Case Is Used</h2>
              <ul>
                <li>Java and Kotlin package names (<code>com.example.myapp</code>)</li>
                <li>Spring Boot configuration keys (<code>server.port</code>)</li>
                <li>Ruby gem names</li>
                <li>YAML and properties file keys</li>
                <li>DNS hostnames and domain names</li>
                <li>Object property access in JavaScript (<code>user.profile.name</code>)</li>
                <li>Terraform resource naming</li>
              </ul>
              <h2>Dot Case vs Other Conventions</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead><tr><th>Convention</th><th>Example</th><th>Primary Use</th></tr></thead>
                  <tbody>
                    <tr><td>dot.case</td><td><code>my.variable.name</code></td><td>Java packages, config keys</td></tr>
                    <tr><td>kebab-case</td><td><code>my-variable-name</code></td><td>CSS, URLs, HTML</td></tr>
                    <tr><td>snake_case</td><td><code>my_variable_name</code></td><td>Python, databases</td></tr>
                    <tr><td>camelCase</td><td><code>myVariableName</code></td><td>JavaScript, JSON</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>FAQ</h2>
              <h3>Is dot case the same as dot notation?</h3>
              <p>
                Dot notation refers to accessing object properties (<code>obj.key</code>),
                while dot case is a naming convention that uses dots as separators.
                They share the same syntax but serve different purposes.
              </p>
            </section>
          )}
          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
