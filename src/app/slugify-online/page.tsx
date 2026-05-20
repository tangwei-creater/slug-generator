import type { Metadata } from "next";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";

export const metadata: Metadata = {
  title: "Slugify Online - Free Online Text Slugifier | SlugGenerator.tools",
  description:
    "Slugify any text online for free. Converts titles, sentences, and phrases into clean URL-friendly slugs. No installation, works in your browser.",
  alternates: { canonical: "https://sluggenerator.tools/slugify-online" },
};

export default function SlugifyOnline() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Slugify Online
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Slugify any text online instantly. No installation or signup
              needed. Everything runs in your browser.
            </p>
          </div>

          <SlugTool placeholder="e.g. 10 Tips for Better Code Reviews (2024 Edition)" />

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

          <RelatedTools current="/slugify-online" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
