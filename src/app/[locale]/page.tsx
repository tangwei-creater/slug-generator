import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";
import { JsonLd } from "@/components/JsonLd";

async function SeoContent() {
  const t = await getTranslations("seo");

  return (
    <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
      <h2>{t("whatIsSlug")}</h2>
      <p>{t("whatIsSlugP1")}</p>
      <p>{t("whatIsSlugP2")}</p>

      <h2>{t("whyUse")}</h2>
      <ul>
        <li>
          <strong>{t("seoFriendly")}</strong> &mdash; {t("seoFriendlyDesc")}
        </li>
        <li>
          <strong>{t("consistency")}</strong> &mdash; {t("consistencyDesc")}
        </li>
        <li>
          <strong>{t("saveTime")}</strong> &mdash; {t("saveTimeDesc")}
        </li>
        <li>
          <strong>{t("avoidBroken")}</strong> &mdash; {t("avoidBrokenDesc")}
        </li>
      </ul>

      <h2>{t("howToCreate")}</h2>
      <ol>
        <li>{t("howToStep1")}</li>
        <li>{t("howToStep2")}</li>
        <li>{t("howToStep3")}</li>
        <li>{t("howToStep4")}</li>
        <li>{t("howToStep5")}</li>
        <li>{t("howToStep6")}</li>
      </ol>

      <h2>{t("features")}</h2>
      <p>{t("featuresIntro")}</p>
      <ul>
        <li>
          <strong>{t("feature1")}</strong> &mdash; {t("feature1Desc")}
        </li>
        <li>
          <strong>{t("feature2")}</strong> &mdash; {t("feature2Desc")}
        </li>
        <li>
          <strong>{t("feature3")}</strong> &mdash; {t("feature3Desc")}
        </li>
        <li>
          <strong>{t("feature4")}</strong> &mdash; {t("feature4Desc")}
        </li>
        <li>
          <strong>{t("feature5")}</strong> &mdash; {t("feature5Desc")}
        </li>
      </ul>

      <h2>{t("useCases")}</h2>
      <ul>
        <li>{t("useCase1")}</li>
        <li>{t("useCase2")}</li>
        <li>{t("useCase3")}</li>
        <li>{t("useCase4")}</li>
        <li>{t("useCase5")}</li>
        <li>{t("useCase6")}</li>
      </ul>

      <h2>{t("faq")}</h2>
      <h3>{t("faqQ1")}</h3>
      <p>{t("faqA1")}</p>
      <h3>{t("faqQ2")}</h3>
      <p>{t("faqA2")}</p>
      <h3>{t("faqQ3")}</h3>
      <p>{t("faqA3")}</p>
    </section>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");
  const tSeo = await getTranslations("seo");

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Slug Generator",
    url: "https://sluggenerator.app",
    description: "Generate clean, SEO-friendly URL slugs instantly. Convert any text to a URL-safe slug with custom separators, transliteration, and more.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: tSeo("faqQ1"), acceptedAnswer: { "@type": "Answer", text: tSeo("faqA1") } },
      { "@type": "Question", name: tSeo("faqQ2"), acceptedAnswer: { "@type": "Answer", text: tSeo("faqA2") } },
      { "@type": "Question", name: tSeo("faqQ3"), acceptedAnswer: { "@type": "Answer", text: tSeo("faqA3") } },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={webAppLd} />
      <JsonLd data={faqLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SlugTool />
          <SeoContent />
          <RelatedTools current="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
