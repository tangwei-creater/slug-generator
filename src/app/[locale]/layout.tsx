import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

const siteUrl = "https://sluggenerator.app";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const url = locale === "en" ? siteUrl : `${siteUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(siteUrl),
    authors: [{ name: "SlugGenerator.app" }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "SlugGenerator.app",
      type: "website",
      locale: locale === "en" ? "en_US" : locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [
            l,
            l === "en" ? siteUrl : `${siteUrl}/${l}`,
          ])
        ),
        "x-default": siteUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SlugGenerator.app",
            url: "https://sluggenerator.app",
            description:
              "Free online tool to convert any text into clean, SEO-friendly URL slugs.",
            inLanguage: ["en", "ja", "de", "es", "pt", "fr"],
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://sluggenerator.app?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
