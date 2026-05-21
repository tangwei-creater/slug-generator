import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog";
import { Header, Footer } from "@/components/Layout";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const url = locale === "en" ? `${siteUrl}/blog` : `${siteUrl}/${locale}/blog`;

  return {
    title: `${t("title")} | SlugGenerator.tools`,
    description: t("subtitle"),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? `${siteUrl}/blog` : `${siteUrl}/${l}/blog`,
        ])
      ),
    },
  };
}

export default async function BlogIndex() {
  const t = await getTranslations("blog");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-gray-600">{t("subtitle")}</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>
                      {post.readTime} {t("minRead")}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
