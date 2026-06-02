import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import CaseConverterTool from "@/components/CaseConverterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/case-converter-online";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.caseConverterOnline" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function CaseConverterOnline({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.caseConverterOnline");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Case Converter Online",
    url: `${siteUrl}${path}`,
    description: "Convert text to any case format: uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Free online tool.",
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
        name: "How do I convert uppercase to lowercase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste your text into the converter above and the lowercase result appears instantly. You can also use keyboard shortcuts in most text editors: Ctrl+Shift+L in VS Code, or select text and press Shift+F3 in Microsoft Word.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between camelCase and PascalCase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In camelCase, the first word starts with a lowercase letter and each subsequent word is capitalized (e.g., myVariableName). In PascalCase, every word starts with a capital letter (e.g., MyVariableName). camelCase is common in JavaScript variables, while PascalCase is used for class names in C#, Java, and React components.",
        },
      },
      {
        "@type": "Question",
        name: "What case formats does this tool support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This tool converts text to 13 formats simultaneously: lowercase, UPPERCASE, Sentence case, Title Case, camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, dot.case, aLtErNaTiNg CaSe, iNVERSE cASE, and URL slug.",
        },
      },
      {
        "@type": "Question",
        name: "Is this case converter free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this case converter is 100% free with no signup required. All text conversion happens in your browser — your text is never sent to any server.",
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
          <Breadcrumbs items={[{ name: "Case Converter Online" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <CaseConverterTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Convert Text to Any Case Format</h2>
              <p>
                This free online case converter transforms your text into 13
                different formats simultaneously. Paste your text once and get
                every case variant — no need to visit separate tools for each
                format.
              </p>

              <h2>Supported Case Formats</h2>
              <table>
                <thead>
                  <tr>
                    <th>Format</th>
                    <th>Example</th>
                    <th>Common use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>lowercase</td><td>hello world</td><td>General text, email</td></tr>
                  <tr><td>UPPERCASE</td><td>HELLO WORLD</td><td>Headings, acronyms, emphasis</td></tr>
                  <tr><td>Sentence case</td><td>Hello world</td><td>UI text, subheadings, Google style</td></tr>
                  <tr><td>Title Case</td><td>Hello World</td><td>Headlines, book titles, AP style</td></tr>
                  <tr><td>camelCase</td><td>helloWorld</td><td>JavaScript, TypeScript, JSON keys</td></tr>
                  <tr><td>PascalCase</td><td>HelloWorld</td><td>C# classes, React components, Java</td></tr>
                  <tr><td>snake_case</td><td>hello_world</td><td>Python, Ruby, database columns</td></tr>
                  <tr><td>SCREAMING_SNAKE</td><td>HELLO_WORLD</td><td>Constants in C, Java, Python</td></tr>
                  <tr><td>kebab-case</td><td>hello-world</td><td>CSS classes, URLs, HTML attributes</td></tr>
                  <tr><td>dot.case</td><td>hello.world</td><td>Java packages, file extensions</td></tr>
                  <tr><td>aLtErNaTiNg</td><td>hElLo WoRlD</td><td>Memes, sarcasm, social media</td></tr>
                  <tr><td>iNVERSE</td><td>HELLO WORLD → hello world</td><td>Fix accidental caps lock</td></tr>
                  <tr><td>url-slug</td><td>hello-world</td><td>SEO-friendly URLs, blog posts</td></tr>
                </tbody>
              </table>

              <h2>Uppercase to Lowercase Converter</h2>
              <p>
                Need to convert UPPERCASE TEXT to lowercase? Paste it into the
                box above and the lowercase result appears instantly. This is
                the fastest way to fix text that was accidentally typed with
                Caps Lock on.
              </p>

              <h2>Lowercase to Uppercase Converter</h2>
              <p>
                Converting lowercase text to ALL CAPS is just as easy. Your
                uppercase result is displayed alongside all other formats so
                you can pick the one you need.
              </p>

              <h2>Programming Case Conventions</h2>
              <p>
                Different programming languages and frameworks use different
                naming conventions:
              </p>
              <ul>
                <li><strong>JavaScript/TypeScript</strong> — camelCase for variables and functions, PascalCase for classes and React components</li>
                <li><strong>Python</strong> — snake_case for variables and functions, PascalCase for classes, SCREAMING_SNAKE_CASE for constants</li>
                <li><strong>CSS</strong> — kebab-case for class names and custom properties</li>
                <li><strong>Java</strong> — camelCase for methods, PascalCase for classes, SCREAMING_SNAKE_CASE for constants</li>
                <li><strong>Ruby</strong> — snake_case for methods and variables, PascalCase for classes</li>
                <li><strong>Go</strong> — PascalCase for exported names, camelCase for unexported</li>
              </ul>

              <h2>FAQ</h2>
              <h3>How do I convert uppercase to lowercase without retyping?</h3>
              <p>
                Paste your text into the converter above. The lowercase version
                appears instantly. You can also use Shift+F3 in Microsoft Word
                or Ctrl+Shift+L in VS Code.
              </p>

              <h3>What is the difference between snake_case and kebab-case?</h3>
              <p>
                Both separate words in multi-word identifiers. snake_case uses
                underscores (common in Python, databases) while kebab-case uses
                hyphens (common in URLs, CSS). Choose based on your
                language&apos;s convention.
              </p>

              <h3>Can I convert between camelCase and snake_case?</h3>
              <p>
                Yes. Enter your camelCase text (e.g., &ldquo;myVariableName&rdquo;)
                and the tool will show the snake_case equivalent
                (my_variable_name) along with all other formats.
              </p>
            </section>
          )}

          <RelatedTools current="/case-converter-online" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
