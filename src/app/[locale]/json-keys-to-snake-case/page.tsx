import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import JsonKeyConverterTool from "@/components/JsonKeyConverterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/json-keys-to-snake-case";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.jsonKeysToSnakeCase" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function JsonKeysToSnakeCase({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.jsonKeysToSnakeCase");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON Keys to snake_case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert JSON object keys from camelCase, PascalCase, or kebab-case to snake_case. Handles nested objects and arrays.",
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
          <Breadcrumbs items={[{ name: "JSON Keys to snake_case" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <JsonKeyConverterTool defaultFormat="snake_case" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Why Convert JSON Keys to snake_case?</h2>
              <p>
                Python (PEP 8), Ruby, and most SQL databases use snake_case as the
                standard naming convention. When building APIs or data pipelines,
                converting camelCase keys from JavaScript frontends to snake_case
                ensures consistency with backend and database conventions.
              </p>

              <h2>Conversion Examples</h2>
              <ul>
                <li><code>userName</code> (camelCase) → <code>user_name</code></li>
                <li><code>UserName</code> (PascalCase) → <code>user_name</code></li>
                <li><code>user-name</code> (kebab-case) → <code>user_name</code></li>
                <li><code>firstName</code> → <code>first_name</code></li>
                <li><code>createdAt</code> → <code>created_at</code></li>
              </ul>

              <h2>Common Use Cases</h2>
              <ul>
                <li>Preparing JSON payloads for Python/Django REST APIs</li>
                <li>Converting frontend form data to match database column names</li>
                <li>Normalizing API responses for Ruby on Rails backends</li>
                <li>Mapping GraphQL mutations to PostgreSQL columns</li>
                <li>Converting CSV headers to database-friendly format</li>
              </ul>

              <h2>Nested Object Support</h2>
              <p>
                This tool recursively converts keys in nested objects and arrays.
                A deeply nested structure like{" "}
                <code>{`{"userData": {"firstName": "John", "addressInfo": {"streetName": "Main St"}}}`}</code>{" "}
                becomes{" "}
                <code>{`{"user_data": {"first_name": "John", "address_info": {"street_name": "Main St"}}}`}</code>.
              </p>

              <h2>FAQ</h2>
              <h3>Does this handle acronyms correctly?</h3>
              <p>
                Yes. Keys like <code>userID</code> become <code>user_id</code> and{" "}
                <code>httpURL</code> becomes <code>http_url</code>.
              </p>
              <h3>Can I use this for CSV headers?</h3>
              <p>
                Wrap your headers in a JSON array like{" "}
                <code>{`{"First Name": "", "Last Name": ""}`}</code> and convert.
                Then use the resulting snake_case keys for your database import.
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
