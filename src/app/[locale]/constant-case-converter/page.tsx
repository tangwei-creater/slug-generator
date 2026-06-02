import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/constant-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.constantCaseConverter" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function ConstantCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.constantCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Constant Case Converter (SCREAMING_SNAKE_CASE)",
    url: `${siteUrl}${path}`,
    description: "Convert text to CONSTANT_CASE (SCREAMING_SNAKE_CASE). The standard for constants and environment variables in most programming languages.",
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
          <Breadcrumbs items={[{ name: "Constant Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool defaultSeparator="_" placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Constant Case (SCREAMING_SNAKE_CASE)?</h2>
              <p>
                Constant case, also known as SCREAMING_SNAKE_CASE or UPPER_SNAKE_CASE,
                uses uppercase letters with underscores between words:{" "}
                <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>,{" "}
                <code>DATABASE_HOST</code>.
              </p>
              <p>
                It is the universal convention for constants, configuration values, and
                environment variables across virtually all programming languages.
              </p>
              <h2>Where Constant Case Is Used</h2>
              <ul>
                <li>Constants in Python, Java, C, C++, JavaScript, Go, Rust</li>
                <li>Environment variables (<code>NODE_ENV</code>, <code>DATABASE_URL</code>)</li>
                <li>Preprocessor macros in C/C++ (<code>#define MAX_BUFFER_SIZE</code>)</li>
                <li>Enum values in many languages</li>
                <li>Docker environment variables</li>
                <li>GitHub Actions and CI/CD secrets</li>
                <li>.env file keys</li>
              </ul>
              <h2>Constant Case by Language</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead><tr><th>Language</th><th>Example</th><th>Used For</th></tr></thead>
                  <tbody>
                    <tr><td>Python</td><td><code>MAX_CONNECTIONS = 100</code></td><td>Module-level constants</td></tr>
                    <tr><td>JavaScript</td><td><code>const API_KEY = &quot;...&quot;</code></td><td>Constants, config</td></tr>
                    <tr><td>Java</td><td><code>static final int MAX_SIZE = 50</code></td><td>Class constants</td></tr>
                    <tr><td>C/C++</td><td><code>#define BUFFER_SIZE 1024</code></td><td>Macros, constants</td></tr>
                    <tr><td>Rust</td><td><code>const MAX_THREADS: u32 = 8</code></td><td>Constants</td></tr>
                    <tr><td>Go</td><td><code>MaxRetries = 3</code></td><td>Exported constants (PascalCase in Go)</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>Constant Case vs snake_case</h2>
              <p>
                Both use underscores as separators. The only difference is letter case:
                constant case is ALL UPPERCASE (<code>MAX_VALUE</code>), while snake_case
                is all lowercase (<code>max_value</code>). This visual distinction immediately
                tells developers whether a name is a constant or a variable.
              </p>
              <h2>FAQ</h2>
              <h3>Why are constants uppercase?</h3>
              <p>
                The convention dates back to C programming, where preprocessor macros
                (which could not be changed at runtime) were written in uppercase to
                distinguish them from regular variables. The pattern became universal
                across languages.
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
