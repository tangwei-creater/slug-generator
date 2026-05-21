import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
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

  const url = locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`,
        ])
      ),
    },
  };
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

              <h2>Where to Use Snake Case</h2>
              <ul>
                <li>Python variable and function names (PEP 8 standard)</li>
                <li>Database table and column names</li>
                <li>Ruby method and variable names</li>
                <li>API request and response field names</li>
                <li>Configuration file keys</li>
                <li>File naming in certain frameworks</li>
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
