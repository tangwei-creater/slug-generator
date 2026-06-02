import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
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
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.urlSlugGenerator" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function UrlSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
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

              <h2>Bulk URL Slug Generator</h2>
              <p>
                Need to generate slugs for multiple URLs at once? Switch to
                bulk mode above to convert an entire list of titles into clean
                URL slugs — one per line. This is ideal for batch-importing
                blog posts, product listings, or migrating pages between CMS
                platforms.
              </p>

              <h2>What Makes a Clean, SEO-Friendly Slug?</h2>
              <p>
                A clean URL slug contains only lowercase letters, numbers, and
                hyphens. It removes special characters, accents, and
                unnecessary words to create a concise, human-readable string
                that describes the page content. SEO-friendly slugs directly
                improve your search rankings by:
              </p>
              <ul>
                <li>Including target keywords that match search queries</li>
                <li>Being short enough to display fully in search results</li>
                <li>Making URLs shareable and easy to remember</li>
                <li>Avoiding encoded characters that break on social media</li>
              </ul>
              <p>
                For example, the title &quot;How to Build a REST API with
                Node.js (2024 Guide)&quot; becomes the clean slug{" "}
                <code>how-to-build-rest-api-nodejs-2024-guide</code> — or even
                shorter with stop words removed:{" "}
                <code>build-rest-api-nodejs-2024-guide</code>.
              </p>

              <h2>URL Slug Creator for WordPress, Ghost &amp; Hugo</h2>
              <p>
                This tool works as a universal URL slug creator compatible with
                all major CMS platforms. WordPress uses slugs in its permalink
                structure, Ghost auto-generates them from post titles, and Hugo
                derives them from filenames. Use this generator to preview and
                customize your slug before pasting it into your CMS.
              </p>
            </section>
          )}

          <RelatedTools current="/url-slug-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
