import type { Metadata } from "next";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";

export const metadata: Metadata = {
  title: "Text to Slug Converter - Instant Text Slugification | SlugGenerator.tools",
  description:
    "Convert any text to a URL-safe slug. Handles accented characters, special symbols, and Unicode. Instant results with one-click copy.",
  alternates: { canonical: "https://sluggenerator.tools/text-to-slug" },
};

export default function TextToSlug() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Text to Slug Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform any text into a URL-safe slug. Handles accented
              characters, symbols, and Unicode automatically.
            </p>
          </div>

          <SlugTool placeholder="e.g. Ça fait déjà 10 ans — Résumé complet" />

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

          <RelatedTools current="/text-to-slug" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
