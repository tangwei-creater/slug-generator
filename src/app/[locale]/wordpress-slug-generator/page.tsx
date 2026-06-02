import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/wordpress-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.wordpressSlugGenerator" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function WordpressSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.wordpressSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "WordPress Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate SEO-friendly URL slugs for WordPress posts and pages. Preview your permalink before publishing.",
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
          <Breadcrumbs items={[{ name: "WordPress Slug Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>How WordPress Handles Slugs</h2>
              <p>
                WordPress automatically generates a slug from your post title when you create
                a new post or page. However, the auto-generated slug often includes stop words
                and can be unnecessarily long. Using this tool, you can preview and optimize
                your slug before pasting it into the WordPress editor.
              </p>
              <h2>WordPress Permalink Settings</h2>
              <p>For best SEO results, use the &quot;Post name&quot; permalink structure
                (<code>/%postname%/</code>) in WordPress Settings → Permalinks. This puts
                your slug directly after the domain, creating clean URLs like{" "}
                <code>example.com/your-optimized-slug</code>.</p>
              <h2>WordPress Slug Best Practices</h2>
              <ul>
                <li>Keep slugs under 5-6 words for better readability</li>
                <li>Remove stop words (a, the, is, and, or, but)</li>
                <li>Include your target keyword in the slug</li>
                <li>Use hyphens only — WordPress converts underscores to hyphens</li>
                <li>Never change a slug after the post is indexed without setting up a redirect</li>
                <li>Avoid dates in slugs unless the content is time-sensitive</li>
              </ul>
              <h2>Bulk Slug Generation for WordPress</h2>
              <p>
                Migrating content to WordPress? Switch to bulk mode above to generate slugs
                for an entire list of post titles at once. This is ideal for CSV imports using
                plugins like WP All Import.
              </p>
              <h2>FAQ</h2>
              <h3>How do I change a slug in WordPress?</h3>
              <p>
                In the WordPress block editor, click the post title, then click the URL/Permalink
                section in the right sidebar. You can edit the slug directly there.
              </p>
              <h3>What happens if two posts have the same slug?</h3>
              <p>
                WordPress automatically appends a number (e.g., <code>my-post-2</code>) to
                avoid duplicate slugs. It is better to create unique, descriptive slugs from
                the start.
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
