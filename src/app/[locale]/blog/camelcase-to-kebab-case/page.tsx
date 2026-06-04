import type { Metadata } from "next";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { getArticle } from "@/lib/blog";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const siteUrl = "https://sluggenerator.app";
const slug = "camelcase-to-kebab-case";
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

export default async function CamelcaseToKebabCase({
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
          <nav className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Tools</h2>
            <ul className="space-y-2 text-base">
              <li><Link href="/camelcase-converter" className="text-blue-600 hover:underline">CamelCase Converter</Link> — Convert text to camelCase</li>
              <li><Link href="/kebab-case-converter" className="text-blue-600 hover:underline">Kebab Case Converter</Link> — Convert text to kebab-case</li>
              <li><Link href="/case-converter-online" className="text-blue-600 hover:underline">Case Converter Online</Link> — Convert between any text case formats</li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
