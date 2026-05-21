import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/camelcase-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.camelCaseConverter" });

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

export default async function CamelCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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

          <SlugTool placeholder={t("placeholder")} />

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

              <h2>Where to Use CamelCase</h2>
              <ul>
                <li>JavaScript and TypeScript variable and function names</li>
                <li>Java method and variable names</li>
                <li>JSON object keys in many APIs</li>
                <li>Swift and Kotlin identifiers</li>
                <li>Go exported identifiers (PascalCase)</li>
                <li>React state variables and event handlers</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/camelcase-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
