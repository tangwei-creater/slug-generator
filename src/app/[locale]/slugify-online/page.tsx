import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/slugify-online";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.slugifyOnline" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function SlugifyOnline({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.slugifyOnline");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Slugify Online",
    url: `${siteUrl}${path}`,
    description: "Slugify any text online for free. No installation, works in your browser.",
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
          <Breadcrumbs items={[{ name: "Slugify Online" }]} />
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
              <h2>What Does Slugify Mean?</h2>
              <p>
                &ldquo;Slugify&rdquo; means to convert a string of text into a
                URL-friendly slug. The term comes from the publishing industry,
                where a &ldquo;slug&rdquo; is a short label for an article. In web
                development, slugifying text produces clean URLs that are both
                human-readable and search engine friendly.
              </p>

              <h2>How Slugify Works</h2>
              <ol>
                <li>Input text is converted to lowercase</li>
                <li>Accented characters are transliterated to ASCII</li>
                <li>Special characters and punctuation are removed</li>
                <li>Spaces are replaced with hyphens</li>
                <li>Multiple consecutive hyphens are collapsed</li>
                <li>Leading and trailing hyphens are stripped</li>
              </ol>

              <h2>Slugify in Different Languages</h2>
              <p>
                Most programming languages have slugify libraries:
                <code>slugify</code> for JavaScript/Python,
                <code>Str::slug()</code> in Laravel PHP,
                <code>parameterize</code> in Ruby on Rails, and
                <code>Slugifier</code> in .NET. This online tool works without
                any setup and produces the same results.
              </p>
            </section>
          )}

          <RelatedTools current="/slugify-online" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
