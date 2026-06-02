import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LineTool from "@/components/LineTool";

const siteUrl = "https://sluggenerator.app";
const path = "/remove-empty-lines";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.removeEmptyLines" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function RemoveEmptyLines({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.removeEmptyLines");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Remove Empty Lines",
    url: `${siteUrl}${path}`,
    description: "Remove blank and empty lines from text. Clean up code, data, and documents by removing unnecessary whitespace lines.",
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
          <Breadcrumbs items={[{ name: "Remove Empty Lines" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <LineTool defaultOp="remove-empty" placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Remove Blank Lines from Text</h2>
              <p>
                This tool removes all empty or whitespace-only lines from your text.
                Lines containing only spaces, tabs, or other whitespace characters are
                treated as empty and removed.
              </p>
              <h2>Common Use Cases</h2>
              <ul>
                <li>Cleaning up code with excessive blank lines</li>
                <li>Compressing text copied from PDFs or web pages</li>
                <li>Preparing data for CSV/TSV imports</li>
                <li>Cleaning log files for analysis</li>
                <li>Formatting text for email or messaging</li>
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
