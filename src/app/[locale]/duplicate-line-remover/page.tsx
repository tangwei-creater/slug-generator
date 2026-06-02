import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LineTool from "@/components/LineTool";

const siteUrl = "https://sluggenerator.app";
const path = "/duplicate-line-remover";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.duplicateLineRemover" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function DuplicateLineRemover({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.duplicateLineRemover");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Duplicate Line Remover",
    url: `${siteUrl}${path}`,
    description: "Remove duplicate lines from text instantly. Keep unique lines, deduplicate lists, and clean up data. Free online tool.",
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
          <Breadcrumbs items={[{ name: "Duplicate Line Remover" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <LineTool defaultOp="dedupe" placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>How It Works</h2>
              <p>
                Paste your text with one item per line. The tool compares each line against
                all previous lines and removes exact duplicates, keeping only the first
                occurrence. Whitespace is trimmed before comparison.
              </p>
              <h2>Common Use Cases</h2>
              <ul>
                <li>Deduplicating email lists before sending campaigns</li>
                <li>Cleaning up keyword lists from SEO tools</li>
                <li>Removing duplicate entries from CSV columns</li>
                <li>Cleaning log files and error outputs</li>
                <li>Merging multiple lists into a unique set</li>
                <li>Deduplicating import/require statements in code</li>
              </ul>
              <h2>Other Line Operations</h2>
              <p>
                This tool also supports sorting, removing empty lines, reversing order,
                adding prefixes/suffixes, and more. Use the operation buttons above the
                input field to switch modes.
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
