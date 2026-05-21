import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/url-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.urlSlugGenerator" });

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

export default async function UrlSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.urlSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate clean URL slugs for your web pages. Paste any title or text and get an SEO-optimized URL slug instantly.",
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
          <Breadcrumbs items={[{ name: "URL Slug Generator" }]} />
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
              <h2>What Is a URL Slug Generator?</h2>
              <p>
                A URL slug generator converts human-readable text into a
                URL-friendly format. It takes titles, headings, or any text and
                produces a clean string that works as part of a web address.
              </p>

              <h2>Why Do URLs Need Slugs?</h2>
              <p>
                Search engines use URLs to understand page content. A URL like
                <code>/how-to-build-rest-api-nodejs</code> tells Google exactly
                what the page is about, while <code>/page?id=12345</code> provides
                no context. Clean URL slugs improve click-through rates from search
                results and make links more shareable.
              </p>

              <h2>Best Practices for URL Slugs</h2>
              <ul>
                <li>Use hyphens as word separators, not underscores</li>
                <li>Keep slugs under 60 characters</li>
                <li>Include your target keyword in the slug</li>
                <li>Use lowercase letters only</li>
                <li>Remove stop words (a, the, is, and) when possible</li>
                <li>Avoid changing slugs after a page is indexed</li>
              </ul>
            </section>
          )}

          <RelatedTools current="/url-slug-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
