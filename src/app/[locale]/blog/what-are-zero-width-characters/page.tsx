import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { getArticle } from "@/lib/blog";
import type { Locale } from "@/i18n/routing";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const siteUrl = "https://sluggenerator.app";
const slug = "what-are-zero-width-characters";
const path = `/blog/${slug}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getArticle(slug, locale as Locale)!;
  return buildMetadata({
    title: `${a.title} | SlugGenerator.app`,
    description: a.description,
    path,
    locale,
  });
}

export default async function WhatAreZeroWidthCharacters({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const a = getArticle(slug, locale as Locale)!;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    inLanguage: locale,
    datePublished: a.date,
    author: { "@type": "Organization", name: "SlugGenerator.app", url: siteUrl },
    publisher: { "@type": "Organization", name: "SlugGenerator.app", url: siteUrl },
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={articleLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Breadcrumbs items={[{ name: t("title"), href: "/blog" }, { name: a.title }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{a.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={a.date}>
                {new Date(a.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span>{a.readTime} {t("minRead")}</span>
            </div>
          </header>
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: a.body }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
