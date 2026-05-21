import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/text-to-slug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.textToSlug" });

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

export default async function TextToSlug({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.textToSlug");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text to Slug Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to a URL-safe slug. Handles accented characters, special symbols, and Unicode.",
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
          <Breadcrumbs items={[{ name: "Text to Slug" }]} />
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
              <h2>How Text to Slug Conversion Works</h2>
              <p>
                Converting text to a slug involves several steps: lowercasing,
                transliterating accented characters (like &eacute; to e),
                replacing spaces with hyphens, and removing special characters.
                This tool handles all of these steps automatically in real time.
              </p>

              <h2>Handling International Characters</h2>
              <p>
                This text to slug converter supports transliteration for Latin
                accented characters, Germanic umlauts, and common symbols. For
                example, &ldquo;&uuml;ber&rdquo; becomes &ldquo;uber&rdquo; and
                &ldquo;caf&eacute;&rdquo; becomes &ldquo;cafe&rdquo;.
              </p>

              <h2>When to Use Text to Slug</h2>
              <ul>
                <li>Creating blog post URLs from article titles</li>
                <li>Generating product page slugs for e-commerce</li>
                <li>Building file names from user-provided text</li>
                <li>Creating database-friendly identifiers</li>
                <li>Naming Git branches from issue titles</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/text-to-slug" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
