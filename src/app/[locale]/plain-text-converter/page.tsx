import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import TextCleanerTool from "@/components/TextCleanerTool";

const siteUrl = "https://sluggenerator.app";
const path = "/plain-text-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.plainTextConverter" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function PlainTextConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.plainTextConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Plain Text Converter",
    url: `${siteUrl}${path}`,
    description: "Strip HTML, remove formatting, clean invisible characters, and convert any text to plain text. Free online tool.",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Plain Text Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <TextCleanerTool placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is a Plain Text Converter?</h2>
              <p>
                A plain text converter strips all formatting from text — HTML tags, smart
                quotes, invisible Unicode characters, extra whitespace, and other artifacts
                that get added when you copy text from websites, Word documents, PDFs, or
                AI tools like ChatGPT.
              </p>
              <h2>Remove Invisible Characters</h2>
              <p>
                Text copied from websites and AI tools often contains hidden Unicode characters
                like zero-width spaces, byte order marks (BOM), non-breaking spaces, and
                soft hyphens. These invisible characters can break code, cause search mismatches,
                and create bugs that are nearly impossible to debug visually.
              </p>
              <h2>Common Use Cases</h2>
              <ul>
                <li>Cleaning text copied from web pages or Google Docs</li>
                <li>Removing HTML tags from email templates</li>
                <li>Stripping formatting from AI-generated text</li>
                <li>Preparing clean text for database imports</li>
                <li>Converting rich text to plain text for plain-text email</li>
                <li>Removing smart quotes before pasting into code editors</li>
                <li>Cleaning PDF-extracted text</li>
              </ul>
              <h2>What This Tool Removes</h2>
              <ul>
                <li>HTML tags (<code>&lt;p&gt;</code>, <code>&lt;strong&gt;</code>, etc.)</li>
                <li>Zero-width characters (U+200B, U+200C, U+200D, U+FEFF)</li>
                <li>Smart quotes and typographic dashes</li>
                <li>Extra spaces and tabs</li>
                <li>Emojis (optional)</li>
                <li>URLs and email addresses (optional)</li>
                <li>Non-ASCII characters (optional)</li>
                <li>Accents and diacritics (optional)</li>
              </ul>
              <h2>FAQ</h2>
              <h3>Is my text sent to a server?</h3>
              <p>
                No. All processing happens locally in your browser. Your text never leaves
                your device.
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
