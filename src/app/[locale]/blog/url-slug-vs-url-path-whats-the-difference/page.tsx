import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";
const path = "/blog/url-slug-vs-url-path-whats-the-difference";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url =
    locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title:
      "URL Slug vs URL Path: What's the Difference? | SlugGenerator.tools",
    description:
      "Understand the difference between a URL slug, path, and permalink. Clear definitions with visual examples for web developers and content creators.",
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

export default async function UrlSlugVsPath() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "URL Slug vs URL Path: What's the Difference?",
    datePublished: "2026-05-21",
    author: {
      "@type": "Organization",
      name: "SlugGenerator.tools",
      url: "https://sluggenerator.app",
    },
    publisher: {
      "@type": "Organization",
      name: "SlugGenerator.tools",
      url: "https://sluggenerator.app",
    },
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
                { name: "URL Slug vs URL Path" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              URL Slug vs URL Path: What&rsquo;s the Difference?
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>5 min read</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              When discussing URLs, terms like &ldquo;slug,&rdquo;
              &ldquo;path,&rdquo; and &ldquo;permalink&rdquo; are often used
              interchangeably. But they mean different things. Understanding the
              distinction helps you structure better URLs for SEO and
              maintainability.
            </p>

            <h2>Anatomy of a URL</h2>
            <p>
              Let&rsquo;s break down a complete URL into its parts using an
              example:
            </p>
            <pre>
              <code>{`https://example.com/blog/url-slug-guide?ref=twitter#introduction
|______|  |__________|  |_________________| |_________| |____________|
scheme     domain         path               query       fragment`}</code>
            </pre>
            <p>
              Each component serves a different purpose. The part we care about
              for SEO is the <strong>path</strong>&mdash;and within the path, the{" "}
              <strong>slug</strong>.
            </p>

            <h2>What Is a URL Path?</h2>
            <p>
              The <strong>URL path</strong> is everything after the domain name
              and before the query string. In our example, the path is{" "}
              <code>/blog/url-slug-guide</code>. The path can include multiple
              segments separated by forward slashes:
            </p>
            <ul>
              <li>
                <code>/blog</code> &mdash; a single-segment path
              </li>
              <li>
                <code>/blog/url-slug-guide</code> &mdash; a two-segment path
              </li>
              <li>
                <code>/products/electronics/headphones</code> &mdash; a
                three-segment path
              </li>
            </ul>

            <h2>What Is a URL Slug?</h2>
            <p>
              The <strong>URL slug</strong> is typically the{" "}
              <em>last segment</em> of the path&mdash;the part that uniquely
              identifies a specific page within its section. In{" "}
              <code>/blog/url-slug-guide</code>, the slug is{" "}
              <code>url-slug-guide</code>.
            </p>
            <p>
              Slugs are derived from human-readable text (usually a title) and
              follow specific formatting rules: lowercase, no spaces, no special
              characters, hyphens as separators. Our{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Slug Generator
              </Link>{" "}
              handles all these rules automatically.
            </p>

            <h2>What Is a Permalink?</h2>
            <p>
              A <strong>permalink</strong> (permanent link) is the full,
              canonical URL of a page&mdash;domain, path, and all. The term
              originated in blogging platforms like WordPress to emphasize that a
              post&rsquo;s URL shouldn&rsquo;t change after publishing.
            </p>
            <p>
              A permalink is <code>https://example.com/blog/url-slug-guide</code>
              . It includes both the path (<code>/blog/url-slug-guide</code>) and
              the slug (<code>url-slug-guide</code>).
            </p>

            <h2>Key Differences at a Glance</h2>
            <table>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Scope</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>URL Path</td>
                  <td>All segments after the domain</td>
                  <td>
                    <code>/blog/url-slug-guide</code>
                  </td>
                </tr>
                <tr>
                  <td>URL Slug</td>
                  <td>Last segment that identifies the page</td>
                  <td>
                    <code>url-slug-guide</code>
                  </td>
                </tr>
                <tr>
                  <td>Permalink</td>
                  <td>The full permanent URL</td>
                  <td>
                    <code>https://example.com/blog/url-slug-guide</code>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Why It Matters for SEO</h2>
            <p>
              The slug is the part you have the most control over and the part
              that carries the most SEO weight within the URL. Google uses the
              words in the slug to understand page relevance. When optimizing:
            </p>
            <ul>
              <li>
                Focus on the <strong>slug</strong> for keyword placement
              </li>
              <li>
                Keep the <strong>path</strong> shallow (fewer segments = easier to
                crawl)
              </li>
              <li>
                Treat the <strong>permalink</strong> as permanent&mdash;never
                change it without a redirect
              </li>
            </ul>
            <p>
              For best practices on writing SEO-optimized slugs, see our guide on{" "}
              <Link
                href="/blog/url-slug-best-practices-seo"
                className="text-blue-600 hover:text-blue-800"
              >
                URL Slug Best Practices for SEO
              </Link>
              .
            </p>

            <h2>Common Platform Patterns</h2>
            <p>Different platforms structure paths and slugs differently:</p>
            <ul>
              <li>
                <strong>WordPress</strong>:{" "}
                <code>/2026/05/my-post-title</code> (date-based path, slug at
                end)
              </li>
              <li>
                <strong>Next.js</strong>: <code>/blog/my-post-title</code>{" "}
                (file-system routing)
              </li>
              <li>
                <strong>Shopify</strong>:{" "}
                <code>/products/my-product-name</code> (category prefix + slug)
              </li>
              <li>
                <strong>Medium</strong>:{" "}
                <code>/username/my-post-title-a1b2c3</code> (slug + hash)
              </li>
            </ul>
            <p>
              Regardless of platform, the slug is always the part you should
              optimize. Use the{" "}
              <Link
                href="/text-to-slug"
                className="text-blue-600 hover:text-blue-800"
              >
                Text to Slug
              </Link>{" "}
              converter to create clean slugs that work with any platform.
            </p>

            <h2>Summary</h2>
            <p>
              Think of a URL like a mailing address: the path is the full route
              to the mailbox, and the slug is the name on the mailbox. Both
              matter, but when people talk about &ldquo;optimizing your
              URLs,&rdquo; they usually mean writing better slugs.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
