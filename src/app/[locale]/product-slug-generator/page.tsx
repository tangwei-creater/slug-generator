import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/product-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.productSlugGenerator" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function ProductSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.productSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Product Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate clean URL slugs for e-commerce product pages. Works with Shopify, WooCommerce, Magento, and any platform.",
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
          <Breadcrumbs items={[{ name: "Product Slug Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Why Product URL Slugs Matter for E-Commerce SEO</h2>
              <p>
                Product page URLs are a direct ranking factor for e-commerce sites. A slug
                like <code>organic-cotton-t-shirt-navy-blue</code> outperforms{" "}
                <code>product-id-48291</code> because it tells both Google and shoppers
                exactly what the page contains.
              </p>
              <h2>Product Slug Best Practices</h2>
              <ul>
                <li>Include the main product keyword (e.g., brand + product type)</li>
                <li>Add key attributes if they are frequently searched (color, size, material)</li>
                <li>Keep under 60 characters</li>
                <li>Do not include SKU numbers or internal IDs</li>
                <li>Avoid category paths in the slug — use flat URLs</li>
                <li>Use hyphens, never underscores or spaces</li>
              </ul>
              <h2>Product Slugs by Platform</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead><tr><th>Platform</th><th>URL Format</th><th>Editable?</th></tr></thead>
                  <tbody>
                    <tr><td>Shopify</td><td>/products/your-slug</td><td>Yes</td></tr>
                    <tr><td>WooCommerce</td><td>/product/your-slug</td><td>Yes</td></tr>
                    <tr><td>Magento</td><td>/your-slug.html</td><td>Yes</td></tr>
                    <tr><td>BigCommerce</td><td>/your-slug</td><td>Yes</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>Bulk Product Slug Generation</h2>
              <p>
                Importing a product catalog? Switch to bulk mode to generate slugs for
                hundreds of product names at once. Paste one product name per line and
                copy the results into your CSV import file.
              </p>
              <h2>FAQ</h2>
              <h3>Should I include the brand name in the product slug?</h3>
              <p>
                Yes, if customers search for the brand. For example,{" "}
                <code>nike-air-max-90-white</code> targets the brand keyword while staying
                descriptive.
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
