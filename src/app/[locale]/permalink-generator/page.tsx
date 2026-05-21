import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/permalink-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.permalinkGenerator" });

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

export default async function PermalinkGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.permalinkGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Permalink Generator",
    url: `${siteUrl}${path}`,
    description: "Generate clean, permanent URLs for blog posts and web pages. Free online tool.",
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
          <Breadcrumbs items={[{ name: "Permalink Generator" }]} />
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
              <h2>What Is a Permalink?</h2>
              <p>
                A permalink (permanent link) is a URL that is intended to remain
                unchanged for many years, providing a lasting reference to a
                particular web page or blog post. Unlike dynamic URLs with query
                parameters, permalinks are clean, readable, and
                search-engine-friendly.
              </p>

              <h2>Permalink Structure Best Practices</h2>
              <ul>
                <li>Use descriptive words that reflect the page content</li>
                <li>Keep URLs short and readable (under 60 characters)</li>
                <li>Use hyphens to separate words, not underscores</li>
                <li>Avoid dates in permalinks unless content is time-sensitive</li>
                <li>Remove stop words (a, the, is, and) to keep it concise</li>
                <li>Use lowercase letters only</li>
              </ul>

              <h2>Permalink Formats by Platform</h2>
              <ul>
                <li>
                  <strong>WordPress</strong>: Settings &rarr; Permalinks &rarr;
                  Post name (<code>/%postname%/</code>)
                </li>
                <li>
                  <strong>Ghost</strong>: Automatically generates from title
                </li>
                <li>
                  <strong>Hugo</strong>: Configurable via <code>permalinks</code>{" "}
                  in config
                </li>
                <li>
                  <strong>Next.js</strong>: File-based routing with custom slugs
                </li>
              </ul>
            </section>
          )}

          <RelatedTools current="/permalink-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
