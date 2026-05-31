import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LineTool from "@/components/LineTool";

const siteUrl = "https://sluggenerator.app";
const path = "/sort-lines-alphabetically";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.sortLinesAlphabetically" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function SortLinesAlphabetically({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.sortLinesAlphabetically");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Sort Lines Alphabetically",
    url: `${siteUrl}${path}`,
    description: "Sort text lines alphabetically (A-Z or Z-A). Free online text sorting tool.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Sort Lines Alphabetically" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <LineTool defaultOp="sort-asc" placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Sort Text Lines Online</h2>
              <p>
                Paste your text with one item per line. Click &quot;Sort A→Z&quot; for ascending
                alphabetical order or &quot;Sort Z→A&quot; for descending. The sorting is
                locale-aware and handles accented characters correctly.
              </p>
              <h2>Common Use Cases</h2>
              <ul>
                <li>Alphabetizing lists (names, cities, products)</li>
                <li>Sorting import statements in code</li>
                <li>Organizing CSS properties alphabetically</li>
                <li>Sorting glossary or dictionary entries</li>
                <li>Arranging bibliography references</li>
                <li>Sorting configuration file keys</li>
              </ul>
            </section>
          )}
          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
