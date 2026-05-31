// Batch-create blog page.tsx files for all planned posts
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const blogDir = join(import.meta.dirname, "../src/app/[locale]/blog");

const slugs = [
  // Case/Naming — language specific
  "what-is-kebab-case",
  "what-is-pascalcase",
  "what-is-screaming-snake-case",
  "what-is-dot-case",
  "what-is-constant-case",
  "how-to-name-variables",
  "database-naming-conventions",
  "rest-api-naming-conventions",
  "react-component-naming-conventions",
  "golang-naming-conventions",
  "ruby-naming-conventions",
  "rust-naming-conventions",
  "swift-naming-conventions",
  "kotlin-naming-conventions",
  "php-naming-conventions",
  "csharp-naming-conventions",
  "java-naming-conventions",
  "typescript-naming-conventions",
  "file-naming-conventions",
  "git-branch-naming-conventions",
  "environment-variable-naming-conventions",
  // Case conversion how-tos
  "camelcase-to-snake-case-python",
  "camelcase-to-kebab-case",
  "snake-case-to-camelcase-javascript",
  // URL/Slug/SEO
  "url-encoding-explained",
  "uppercase-vs-lowercase-seo",
  "seo-url-length-best-practices",
  "how-to-create-seo-friendly-blog-urls",
  "url-structure-ecommerce-seo",
  "trailing-slash-seo",
  "www-vs-non-www-seo",
  "url-parameters-seo-guide",
  "canonical-url-explained",
  "redirect-301-vs-302",
  "hreflang-tags-guide",
  "subdomain-vs-subdirectory-seo",
  "how-search-engines-crawl-urls",
  "shopify-url-handle-guide",
  "ghost-blog-url-structure",
  "hugo-url-slug-configuration",
  "nextjs-dynamic-routes-slugs",
  "multilingual-url-structure",
  // Text processing
  "remove-html-tags-from-text",
  "how-to-remove-duplicate-lines",
  "sort-text-lines-online",
  "remove-extra-spaces-from-text",
  "what-are-zero-width-characters",
  "plain-text-vs-rich-text",
  "unicode-normalization-explained",
  "ascii-vs-unicode",
  "what-is-utf8-encoding",
  "regex-for-text-cleaning",
  // JSON/API
  "json-formatting-best-practices",
  "convert-json-keys-case",
  "api-response-naming-conventions",
  "graphql-naming-conventions",
  // General dev
  "clean-code-naming-principles",
  "code-readability-tips",
  "boolean-naming-conventions",
  "function-naming-conventions",
  "naming-conventions-cheat-sheet",
  // Extra SEO/CMS
  "wordpress-permalink-settings-guide",
  "shopify-seo-url-tips",
  "wix-url-slug-optimization",
  "squarespace-url-structure",
  "medium-vs-self-hosted-blog-seo",
  "blog-post-url-structure-tips",
  "anchor-text-best-practices",
  "internal-linking-strategy-seo",
];

function toFuncName(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

let created = 0;
for (const slug of slugs) {
  const dir = join(blogDir, slug);
  const filePath = join(dir, "page.tsx");
  if (existsSync(filePath)) {
    console.log(`SKIP: ${slug} (exists)`);
    continue;
  }
  mkdirSync(dir, { recursive: true });

  const funcName = toFuncName(slug);
  const content = `import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { getArticle } from "@/lib/blog";
import type { Locale } from "@/i18n/routing";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const siteUrl = "https://sluggenerator.app";
const slug = "${slug}";
const path = \`/blog/\${slug}\`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const a = getArticle(slug, locale as Locale)!;
  return buildMetadata({
    title: \`\${a.title} | SlugGenerator.app\`,
    description: a.description,
    path,
    locale,
  });
}

export default async function ${funcName}({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
    mainEntityOfPage: \`\${siteUrl}\${path}\`,
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
`;

  writeFileSync(filePath, content, "utf-8");
  created++;
}

console.log(`\nDone! Created ${created} page.tsx files. ${slugs.length} total slugs.`);
