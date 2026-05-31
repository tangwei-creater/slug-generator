import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LineTool from "@/components/LineTool";

const siteUrl = "https://sluggenerator.app";
const path = "/remove-line-breaks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.removeLineBreaks" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function RemoveLineBreaks({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.removeLineBreaks");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Remove Line Breaks",
    url: `${siteUrl}${path}`,
    description: "Remove line breaks and join text into a single line. Convert multi-line text to one continuous paragraph.",
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
          <Breadcrumbs items={[{ name: "Remove Line Breaks" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <LineTool defaultOp="remove-breaks" placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Remove Line Breaks from Text</h2>
              <p>
                This tool removes all line breaks (newlines) from your text and joins
                everything into a single continuous line, separated by spaces. Empty lines
                are discarded and each line is trimmed before joining.
              </p>
              <h2>Common Use Cases</h2>
              <ul>
                <li>Cleaning text copied from PDFs (which add line breaks at page margins)</li>
                <li>Joining multi-line addresses into a single line</li>
                <li>Converting poetry or lyrics to prose format</li>
                <li>Preparing text for spreadsheet cells</li>
                <li>Cleaning output from terminal/command line tools</li>
                <li>Removing line breaks from SQL queries for inline use</li>
              </ul>
              <h2>Line Breaks Explained</h2>
              <p>
                Different operating systems use different line break characters:
                Windows uses <code>\r\n</code> (CRLF), macOS/Linux uses <code>\n</code> (LF),
                and classic Mac OS used <code>\r</code> (CR). This tool handles all three
                formats automatically.
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
