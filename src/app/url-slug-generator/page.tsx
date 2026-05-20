import type { Metadata } from "next";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";

export const metadata: Metadata = {
  title: "URL Slug Generator - Create SEO-Friendly URLs | SlugGenerator.tools",
  description:
    "Generate clean URL slugs for your web pages. Paste any title or text and get an SEO-optimized URL slug instantly. Supports transliteration and custom separators.",
  alternates: { canonical: "https://sluggenerator.tools/url-slug-generator" },
};

export default function UrlSlugGenerator() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              URL Slug Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create clean, SEO-friendly URL slugs from any text. Perfect for
              blog posts, product pages, and web applications.
            </p>
          </div>

          <SlugTool placeholder="e.g. How to Build a REST API with Node.js" />

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

          <RelatedTools current="/url-slug-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
