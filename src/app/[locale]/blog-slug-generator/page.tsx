import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/blog-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.blogSlugGenerator" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function BlogSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.blogSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Blog Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate clean, SEO-optimized URL slugs for blog posts. Works with WordPress, Ghost, Hugo, Jekyll, and any CMS.",
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
          <Breadcrumbs items={[{ name: "Blog Slug Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Why Blog Post Slugs Matter for SEO</h2>
              <p>
                Your blog post slug is one of the first things Google evaluates when
                crawling a new page. A well-crafted slug with relevant keywords signals
                to search engines what the content is about, improving your chances of
                ranking for those terms.
              </p>
              <h2>Blog Slug Formula</h2>
              <p>The best blog slugs follow a simple formula:</p>
              <ol>
                <li>Take your blog post title</li>
                <li>Remove stop words (a, the, is, how, to, etc.)</li>
                <li>Keep 3-5 core keywords</li>
                <li>Separate with hyphens</li>
              </ol>
              <p>
                Example: &quot;How to Build a REST API with Node.js in 2024&quot; →{" "}
                <code>build-rest-api-nodejs</code>
              </p>
              <h2>Slugs for Different Blog Platforms</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead><tr><th>Platform</th><th>Slug Location</th><th>Auto-generates?</th></tr></thead>
                  <tbody>
                    <tr><td>WordPress</td><td>Permalink settings</td><td>Yes, from title</td></tr>
                    <tr><td>Ghost</td><td>Post settings sidebar</td><td>Yes, from title</td></tr>
                    <tr><td>Hugo</td><td>Filename or frontmatter</td><td>From filename</td></tr>
                    <tr><td>Jekyll</td><td>Filename</td><td>From filename</td></tr>
                    <tr><td>Next.js</td><td>Route/filename</td><td>Manual</td></tr>
                    <tr><td>Gatsby</td><td>Frontmatter slug field</td><td>Manual</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>Bulk Blog Slug Generation</h2>
              <p>
                Planning a content calendar? Switch to bulk mode to generate slugs for
                all your upcoming blog post titles at once. Paste one title per line.
              </p>
              <h2>FAQ</h2>
              <h3>Should I include the year in my blog slug?</h3>
              <p>
                Only if the content is genuinely time-sensitive (e.g., &quot;best-tools-2024&quot;).
                For evergreen content, omit the year so the URL stays relevant when you update
                the post.
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
