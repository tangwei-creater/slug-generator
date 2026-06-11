import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SingleCaseTool from "@/components/SingleCaseTool";

const siteUrl = "https://sluggenerator.app";
const path = "/alternating-case-converter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.alternatingCaseConverter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function AlternatingCaseConverter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.alternatingCaseConverter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Alternating Case Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to aLtErNaTiNg CaSe. Create mocking spongebob-style text for memes and social media. Free online tool.",
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
        name: "What is alternating case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alternating case (also called alternating caps or studly caps) is a text style where letters alternate between lowercase and uppercase: lIkE tHiS. It's commonly used to convey sarcasm or mockery online.",
        },
      },
      {
        "@type": "Question",
        name: "What is the mocking text meme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The mocking text meme (also known as the Mocking SpongeBob meme) uses alternating caps to convey a sarcastic, mocking tone. For example: 'i'M sO sMaRt' — it became popular in 2017 and is still widely used on social media.",
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
          <Breadcrumbs items={[{ name: "Alternating Case Converter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SingleCaseTool mode="alternating" placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Alternating Case?</h2>
              <p>
                Alternating case (also called alternating caps, studly caps, or
                sarcasm case) is a text style where each letter alternates
                between lowercase and uppercase. For example:
                &ldquo;hElLo WoRlD&rdquo; or &ldquo;tHiS iS aLtErNaTiNg CaSe&rdquo;.
              </p>
              <p>
                The pattern typically starts with a lowercase letter, then
                uppercase, then lowercase, and so on — skipping spaces and
                punctuation.
              </p>

              <h2>Mocking Text Generator</h2>
              <p>
                Alternating case became famous through the &ldquo;Mocking
                SpongeBob&rdquo; meme in 2017, where text written in
                alternating caps conveys a sarcastic, mocking tone. Today
                it&apos;s widely used across social media, Discord, Reddit,
                Twitter/X, and gaming chats.
              </p>
              <p>
                Simply paste your text into the converter above to generate
                mocking text instantly. Copy it with one click and paste
                wherever you need it.
              </p>

              <h2>Where Alternating Case Is Used</h2>
              <ul>
                <li>Social media posts and comments (sarcasm, humor)</li>
                <li>Discord and Twitch chat messages</li>
                <li>Reddit comments and meme captions</li>
                <li>Gaming usernames and clan tags</li>
                <li>Creative typography and design</li>
                <li>Aesthetic text for bios and profiles</li>
              </ul>

              <h2>Alternating Case vs Random Case</h2>
              <p>
                Alternating case follows a strict pattern (lower, upper, lower,
                upper…), while random case capitalizes letters randomly. Both
                are hard to read by design, but alternating case has a
                recognizable rhythm that signals sarcasm.
              </p>

              <h2>FAQ</h2>
              <h3>How do I type in alternating caps?</h3>
              <p>
                Manually typing alternating caps is tedious. Use this converter
                instead — paste your text and get the alternating case version
                instantly, then copy it to your clipboard.
              </p>

              <h3>Does alternating case affect SEO?</h3>
              <p>
                Don&apos;t use alternating case in titles, headings, or meta
                descriptions. Search engines may interpret it as spam.
                Alternating case is for social media and informal
                communication only.
              </p>
            </section>
          )}

          <RelatedTools current="/alternating-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
