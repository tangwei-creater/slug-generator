import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";

export function buildMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: string;
}): Metadata {
  const localized = (l: string) =>
    l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`;
  const url = localized(locale);
  const ogImage = {
    url: `${siteUrl}/${locale}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: "Slug Generator - Free Online URL Slug Creator",
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "SlugGenerator.app",
      type: "website",
      locale: locale === "en" ? "en_US" : locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localized(l)])),
        "x-default": `${siteUrl}${path}`,
      },
    },
  };
}
