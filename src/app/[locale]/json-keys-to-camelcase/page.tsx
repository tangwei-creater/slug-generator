import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import JsonKeyConverterTool from "@/components/JsonKeyConverterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/json-keys-to-camelcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.jsonKeysToCamelcase" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function JsonKeysToCamelcase({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.jsonKeysToCamelcase");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON Keys to camelCase Converter",
    url: `${siteUrl}${path}`,
    description: "Convert JSON object keys from snake_case, kebab-case, or PascalCase to camelCase. Handles nested objects and arrays.",
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
        name: "Why convert JSON keys to camelCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JavaScript and TypeScript conventions use camelCase for object properties. When consuming APIs that return snake_case keys (common in Python/Ruby backends), converting to camelCase keeps your frontend code consistent.",
        },
      },
      {
        "@type": "Question",
        name: "Does this tool handle nested JSON objects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the converter recursively processes all nested objects and arrays, converting every key at every depth level to camelCase.",
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
          <Breadcrumbs items={[{ name: "JSON Keys to camelCase" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <JsonKeyConverterTool defaultFormat="camelCase" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Why Convert JSON Keys to camelCase?</h2>
              <p>
                Most JavaScript and TypeScript codebases follow the camelCase convention
                for variable and property names. However, APIs built with Python (Django,
                Flask), Ruby (Rails), or Go often return JSON with snake_case keys like{" "}
                <code>user_first_name</code> or <code>created_at</code>.
              </p>
              <p>
                Converting these keys to camelCase (<code>userFirstName</code>,{" "}
                <code>createdAt</code>) keeps your frontend code consistent and avoids
                mixing naming conventions within the same codebase.
              </p>

              <h2>How the Conversion Works</h2>
              <p>The converter handles multiple source formats:</p>
              <ul>
                <li><code>user_name</code> (snake_case) → <code>userName</code></li>
                <li><code>user-name</code> (kebab-case) → <code>userName</code></li>
                <li><code>UserName</code> (PascalCase) → <code>userName</code></li>
                <li><code>user.name</code> (dot.case) → <code>userName</code></li>
              </ul>
              <p>
                Nested objects and arrays of objects are processed recursively — every
                key at every depth level is converted.
              </p>

              <h2>Common Use Cases</h2>
              <ul>
                <li>Consuming REST APIs from Python/Ruby backends in a React frontend</li>
                <li>Normalizing third-party API responses before storing in state</li>
                <li>Converting database query results for GraphQL resolvers</li>
                <li>Migrating JSON configuration files between conventions</li>
                <li>Preparing mock data for JavaScript unit tests</li>
              </ul>

              <h2>JSON Keys to camelCase in Code</h2>
              <p>
                In production, you would typically use a library like{" "}
                <code>camelcase-keys</code> (npm) or write a recursive function.
                This online tool is useful for quick one-off conversions, debugging
                API responses, or converting sample data without writing code.
              </p>

              <h2>FAQ</h2>
              <h3>Does this tool modify JSON values?</h3>
              <p>
                No. Only the keys (property names) are converted. All values —
                strings, numbers, booleans, nulls, nested objects, and arrays —
                remain unchanged.
              </p>
              <h3>What about keys with numbers?</h3>
              <p>
                Keys containing numbers are handled correctly. For example,{" "}
                <code>item_2_name</code> becomes <code>item2Name</code>.
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
