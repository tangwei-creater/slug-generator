import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/sentence-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.sentenceCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function SentenceCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.sentenceCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Sentence Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to sentence case. Capitalize the first letter of each sentence while keeping the rest lowercase. Free online tool.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is sentence case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sentence case is a capitalization style where only the first letter of the first word in a sentence is capitalized, along with proper nouns and the pronoun \"I\". For example: \"The quick brown fox jumps over the lazy dog.\"",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between sentence case and title case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In sentence case, only the first word and proper nouns are capitalized (e.g., \"How to write better headlines\"). In title case, most major words are capitalized (e.g., \"How to Write Better Headlines\").",
        },
      },
      {
        "@type": "Question",
        name: "When should I use sentence case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sentence case is commonly used for body text, email subjects, subheadings, button labels, UI text, and social media posts. Google and many modern style guides prefer sentence case for headings as it feels more natural and readable.",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <JsonLd data={faqLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Sentence Case Converter" }]} />
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
              <h2>What Is Sentence Case?</h2>
              <p>
                Sentence case is a capitalization style where only the first
                letter of the first word in a sentence is capitalized, along
                with proper nouns and the pronoun &ldquo;I&rdquo;. It mirrors
                the way we naturally write sentences in everyday communication.
              </p>
              <p>
                For example: &ldquo;The quick brown fox jumps over the lazy
                dog.&rdquo; — only &ldquo;The&rdquo; is capitalized because it
                starts the sentence.
              </p>

              <h2>Sentence Case vs Title Case</h2>
              <table>
                <thead>
                  <tr>
                    <th>Style</th>
                    <th>Example</th>
                    <th>Use case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sentence case</td>
                    <td>How to write better headlines</td>
                    <td>Subheadings, UI text, Google-style headings</td>
                  </tr>
                  <tr>
                    <td>Title case</td>
                    <td>How to Write Better Headlines</td>
                    <td>Book titles, formal headings, AP style</td>
                  </tr>
                </tbody>
              </table>

              <h2>Sentence Case Rules</h2>
              <ul>
                <li>Capitalize the first letter of the first word</li>
                <li>Capitalize proper nouns (names, places, brands)</li>
                <li>Always capitalize the pronoun &ldquo;I&rdquo;</li>
                <li>Keep acronyms in their original case (HTML, API, CSS)</li>
                <li>Lowercase everything else</li>
              </ul>

              <h2>Where to Use Sentence Case</h2>
              <ul>
                <li>Google and Material Design UI headings</li>
                <li>Email subject lines</li>
                <li>Social media posts and captions</li>
                <li>Subheadings in blog posts and articles</li>
                <li>Button labels and navigation text</li>
                <li>Notification messages and tooltips</li>
                <li>Form labels and helper text</li>
              </ul>

              <h2>Why Sentence Case Is Gaining Popularity</h2>
              <p>
                Many modern style guides — including Google&apos;s Material
                Design, Microsoft&apos;s Fluent, and Apple&apos;s Human
                Interface Guidelines — recommend sentence case for most UI
                text. It reads more naturally, feels less formal, and is easier
                to scan than title case.
              </p>

              <h2>FAQ</h2>
              <h3>What is the difference between sentence case and lowercase?</h3>
              <p>
                Lowercase converts every letter to its small form. Sentence
                case keeps the first letter of each sentence capitalized and
                preserves proper nouns. For example, lowercase:
                &ldquo;the api is ready&rdquo; vs. sentence case:
                &ldquo;The API is ready.&rdquo;
              </p>

              <h3>Does sentence case affect SEO?</h3>
              <p>
                Capitalization style has no direct impact on search rankings.
                However, sentence case can improve click-through rates because
                it looks more natural in search results and feels less
                &ldquo;salesy&rdquo; than all-caps or title case.
              </p>

              <h3>How do I convert text to sentence case automatically?</h3>
              <p>
                Paste your text into the converter above. It will lowercase
                everything and then capitalize the first letter of each
                sentence. For programmatic use, you can use JavaScript,
                Python, or PHP — see our guide on{" "}
                <a href="/blog/slugify-text-javascript-python-php">
                  text transformation in multiple languages
                </a>.
              </p>
            </section>
          )}

          <RelatedTools current="/sentence-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
