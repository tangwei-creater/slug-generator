import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/title-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.titleCaseConverter" });

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

export default async function TitleCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.titleCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Title Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to Title Case format. Capitalize headings, titles, and text properly. Free online tool.",
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
          <Breadcrumbs items={[{ name: "Title Case Converter" }]} />
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
              <h2>What Is Title Case?</h2>
              <p>
                Title case is a capitalization style where the first letter of
                each major word is capitalized, while minor words (articles,
                prepositions, and conjunctions) remain lowercase unless they
                start the title. For example: &ldquo;The Quick Brown Fox Jumps
                Over the Lazy Dog.&rdquo;
              </p>

              <h2>Title Case Rules</h2>
              <ul>
                <li>Capitalize the first and last word of the title</li>
                <li>Capitalize all major words (nouns, verbs, adjectives, adverbs)</li>
                <li>Lowercase articles: a, an, the</li>
                <li>Lowercase short prepositions: in, on, at, to, for, of, with</li>
                <li>Lowercase conjunctions: and, but, or, nor, yet, so</li>
                <li>Capitalize words of 4+ letters regardless of part of speech</li>
              </ul>

              <h2>Common Title Case Styles</h2>
              <ul>
                <li>
                  <strong>AP Style</strong> — Used by journalists and news outlets
                </li>
                <li>
                  <strong>APA Style</strong> — Used in academic and scientific writing
                </li>
                <li>
                  <strong>Chicago Style</strong> — Used in book publishing
                </li>
                <li>
                  <strong>MLA Style</strong> — Used in humanities and liberal arts
                </li>
              </ul>

              <h2>Where to Use Title Case</h2>
              <ul>
                <li>Blog post and article headlines</li>
                <li>Book titles and chapter headings</li>
                <li>Email subject lines</li>
                <li>Presentation slide titles</li>
                <li>Navigation menus and button labels</li>
                <li>SEO meta titles and page headings</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/title-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
