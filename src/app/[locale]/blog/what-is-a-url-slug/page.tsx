import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";
const path = "/blog/what-is-a-url-slug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: "What Is a URL Slug? A Complete Guide | SlugGenerator.tools",
    description:
      "Learn what URL slugs are, why they matter for SEO, and how to create effective ones. Includes examples and best practices.",
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? `${siteUrl}${path}` : `${siteUrl}/${l}${path}`,
        ])
      ),
    },
  };
}

export default async function WhatIsAUrlSlug() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Is a URL Slug? A Complete Guide",
    datePublished: "2026-05-20",
    author: { "@type": "Organization", name: "SlugGenerator.tools", url: "https://sluggenerator.app" },
    publisher: { "@type": "Organization", name: "SlugGenerator.tools", url: "https://sluggenerator.app" },
    mainEntityOfPage: `${siteUrl}${path}`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={articleLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: "What Is a URL Slug?" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Is a URL Slug? A Complete Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-05-20">May 20, 2026</time>
              <span>5 min read</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              A <strong>URL slug</strong> is the part of a web address that
              identifies a specific page in a human-readable format. In the URL{" "}
              <code>https://example.com/what-is-a-url-slug</code>, the slug is{" "}
              <code>what-is-a-url-slug</code>.
            </p>
            <p>
              The term &ldquo;slug&rdquo; comes from the newspaper industry,
              where a slug was a short name given to an article during
              production. In web development, the concept works the same
              way&mdash;a slug is a short, descriptive label that identifies a
              specific page.
            </p>

            <h2>Why URL Slugs Matter for SEO</h2>
            <p>
              URL slugs are one of the simplest SEO signals you can control.
              Search engines like Google use the URL to understand what a page is
              about. A descriptive slug gives both Google and users immediate
              context about the page content.
            </p>
            <p>Consider these two URLs:</p>
            <ul>
              <li>
                <code>example.com/p?id=1234</code> &mdash; tells nothing about
                the content
              </li>
              <li>
                <code>example.com/what-is-a-url-slug</code> &mdash; clearly
                describes the page topic
              </li>
            </ul>
            <p>
              Google has confirmed that keywords in URLs are a minor ranking
              factor. While they won&rsquo;t single-handedly get you to page
              one, they contribute to the overall relevance signal and improve
              click-through rates from search results.
            </p>

            <h2>Anatomy of a Good URL Slug</h2>
            <p>A well-crafted URL slug has these characteristics:</p>
            <ol>
              <li>
                <strong>Lowercase</strong> &mdash; URLs are case-sensitive on
                most servers. Using lowercase avoids duplicate content issues.
              </li>
              <li>
                <strong>Hyphen-separated</strong> &mdash; Google treats hyphens
                as word separators but doesn&rsquo;t treat underscores the same
                way.
              </li>
              <li>
                <strong>Descriptive</strong> &mdash; Contains relevant keywords
                that describe the page content.
              </li>
              <li>
                <strong>Concise</strong> &mdash; Generally under 60 characters.
                Shorter slugs are easier to read and share.
              </li>
              <li>
                <strong>No special characters</strong> &mdash; Only uses letters
                (a-z), numbers (0-9), and hyphens (-).
              </li>
            </ol>

            <h2>How URL Slugs Are Created</h2>
            <p>
              The process of creating a URL slug (called
              &ldquo;slugification&rdquo;) typically involves:
            </p>
            <ol>
              <li>Taking the page title or a descriptive phrase</li>
              <li>Converting it to lowercase</li>
              <li>Replacing spaces with hyphens</li>
              <li>Removing special characters and punctuation</li>
              <li>
                Transliterating accented characters (&eacute; &rarr; e, &uuml;
                &rarr; u)
              </li>
              <li>Collapsing multiple consecutive hyphens into one</li>
              <li>Trimming hyphens from the start and end</li>
            </ol>
            <p>
              For example, the title &ldquo;Caf&eacute; Menu &mdash; Special
              &Eacute;dition (2024)!&rdquo; becomes the slug{" "}
              <code>cafe-menu-special-edition-2024</code>.
            </p>
            <p>
              You can automate this process using our{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Slug Generator
              </Link>
              , which handles all these steps instantly in your browser.
            </p>

            <h2>Common URL Slug Mistakes</h2>
            <ol>
              <li>
                <strong>Including stop words unnecessarily</strong> &mdash;
                Words like &ldquo;a&rdquo;, &ldquo;the&rdquo;,
                &ldquo;is&rdquo;, &ldquo;and&rdquo; add length without value.
                &ldquo;the-complete-guide-to-the-best-url-slugs&rdquo; can be
                shortened to &ldquo;url-slug-guide&rdquo;.
              </li>
              <li>
                <strong>Using IDs instead of slugs</strong> &mdash; URLs like{" "}
                <code>/post/12345</code> waste the SEO opportunity of having
                keywords in the URL.
              </li>
              <li>
                <strong>Changing slugs after publishing</strong> &mdash; Once
                Google indexes a URL, changing the slug creates a 404 error
                unless you set up a redirect. Only change slugs when absolutely
                necessary.
              </li>
              <li>
                <strong>Keyword stuffing</strong> &mdash; Cramming every
                possible keyword into a slug looks spammy and can hurt rather
                than help.
              </li>
              <li>
                <strong>Using underscores</strong> &mdash; Google explicitly
                recommends hyphens over underscores. The{" "}
                <Link
                  href="/kebab-case-converter"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kebab Case Converter
                </Link>{" "}
                ensures your text uses the correct format.
              </li>
            </ol>

            <h2>URL Slugs in Different Platforms</h2>
            <p>
              Most content management systems generate slugs automatically:
            </p>
            <ul>
              <li>
                <strong>WordPress</strong> creates slugs from the post title but
                lets you edit them
              </li>
              <li>
                <strong>Shopify</strong> generates product slugs from the
                product name
              </li>
              <li>
                <strong>Ghost</strong> and <strong>Hugo</strong> use the title as
                the default slug
              </li>
              <li>
                <strong>Next.js</strong> and <strong>Gatsby</strong> use file
                names or programmatic routing
              </li>
            </ul>
            <p>
              For custom applications, you can use our{" "}
              <Link
                href="/text-to-slug"
                className="text-blue-600 hover:text-blue-800"
              >
                Text to Slug converter
              </Link>{" "}
              to generate slugs that work with any platform.
            </p>

            <h2>Summary</h2>
            <p>
              URL slugs are a small but important part of SEO and web
              development. They help search engines understand your content,
              improve click-through rates, and make URLs more user-friendly. The
              best slugs are short, descriptive, lowercase, and use hyphens as
              separators.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
