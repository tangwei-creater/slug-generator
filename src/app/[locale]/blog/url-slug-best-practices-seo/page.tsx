import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";
const path = "/blog/url-slug-best-practices-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: "URL Slug Best Practices for SEO in 2026 | SlugGenerator.tools",
    description:
      "Master URL slug optimization with proven SEO best practices. Learn the right length, format, and keyword strategy for your slugs.",
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

export default async function UrlSlugBestPractices() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "URL Slug Best Practices for SEO in 2026",
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
                { name: "URL Slug Best Practices" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              URL Slug Best Practices for SEO in 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-05-20">May 20, 2026</time>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              URL slugs are one of the few on-page SEO elements you have full
              control over. In 2026, with Google&rsquo;s AI Overview answering
              more informational queries directly, every technical SEO advantage
              matters. This guide covers the proven best practices for URL slugs
              that still move the needle.
            </p>

            <h2>1. Keep Slugs Under 60 Characters</h2>
            <p>
              Google displays up to about 512 pixels of a URL in search results,
              which translates to roughly 60 characters. Anything longer gets
              truncated with an ellipsis, reducing readability and click-through
              rates.
            </p>
            <p>
              Short slugs are also easier to share in messages, emails, and
              social media. Compare:
            </p>
            <ul>
              <li>
                <code>/the-complete-beginners-guide-to-understanding-url-slugs-and-why-they-matter</code>{" "}
                &mdash; too long, gets cut off
              </li>
              <li>
                <code>/url-slug-guide</code> &mdash; concise, scannable, fits
                everywhere
              </li>
            </ul>
            <p>
              Use our{" "}
              <Link
                href="/url-slug-generator"
                className="text-blue-600 hover:text-blue-800"
              >
                URL Slug Generator
              </Link>{" "}
              with the max-length option to enforce a character limit
              automatically.
            </p>

            <h2>2. Use Hyphens, Never Underscores</h2>
            <p>
              Google treats hyphens as word separators but treats underscores as
              word joiners. The slug <code>url-slug-tips</code> is read as three
              words, while <code>url_slug_tips</code> is read as a single token.
            </p>
            <p>
              Google&rsquo;s own documentation explicitly recommends hyphens. If
              you have existing content with underscores, consider migrating to
              hyphens with proper 301 redirects. The{" "}
              <Link
                href="/kebab-case-converter"
                className="text-blue-600 hover:text-blue-800"
              >
                Kebab Case Converter
              </Link>{" "}
              can help you convert text to the correct hyphenated format.
            </p>

            <h2>3. Include Your Target Keyword</h2>
            <p>
              Place your primary keyword in the slug. If your page targets
              &ldquo;react hooks tutorial&rdquo;, the slug should be{" "}
              <code>react-hooks-tutorial</code>, not{" "}
              <code>my-latest-programming-post</code>.
            </p>
            <p>Rules of thumb:</p>
            <ul>
              <li>
                Put the keyword near the beginning of the slug when possible
              </li>
              <li>
                Use one primary keyword, not multiple overlapping ones
              </li>
              <li>
                Match the slug to user intent, not just keyword volume
              </li>
            </ul>

            <h2>4. Remove Stop Words</h2>
            <p>
              Stop words like &ldquo;a&rdquo;, &ldquo;an&rdquo;,
              &ldquo;the&rdquo;, &ldquo;is&rdquo;, &ldquo;in&rdquo;,
              &ldquo;of&rdquo;, &ldquo;to&rdquo;, and &ldquo;for&rdquo; add
              length without adding SEO value. Remove them unless they change
              the meaning:
            </p>
            <ul>
              <li>
                &ldquo;How to Build a REST API in Node.js&rdquo; &rarr;{" "}
                <code>build-rest-api-nodejs</code>
              </li>
              <li>
                &ldquo;The Best Tools for Web Development&rdquo; &rarr;{" "}
                <code>best-web-development-tools</code>
              </li>
            </ul>

            <h2>5. Use Lowercase Only</h2>
            <p>
              URLs are case-sensitive on most web servers. The URLs{" "}
              <code>/My-Page</code> and <code>/my-page</code> can serve
              different content, which creates duplicate content issues. Always
              use lowercase slugs and set up server-side redirects for any
              uppercase variations.
            </p>

            <h2>6. Avoid Dates in Slugs</h2>
            <p>
              Including the year or date in a slug (e.g.,{" "}
              <code>seo-tips-2026</code>) creates two problems:
            </p>
            <ol>
              <li>
                The content looks outdated the moment the year changes, even if
                you update the content
              </li>
              <li>
                Changing the slug to update the year breaks existing links and
                requires redirects
              </li>
            </ol>
            <p>
              Keep dates in the page title if needed, but leave them out of the
              slug. Use <code>seo-tips</code> instead and update the content
              regularly.
            </p>

            <h2>7. Never Change Published Slugs Without Redirects</h2>
            <p>
              Once a page is indexed, its URL is its identity. Changing the slug
              without a 301 redirect means:
            </p>
            <ul>
              <li>All existing backlinks point to a 404 page</li>
              <li>Google loses the page&rsquo;s ranking history</li>
              <li>
                Users who bookmarked the page can&rsquo;t find it
              </li>
            </ul>
            <p>
              If you must change a slug, always set up a 301 redirect from the
              old URL to the new one.
            </p>

            <h2>8. Use Flat URL Structures</h2>
            <p>
              Deep nesting adds no SEO value and makes URLs harder to read:
            </p>
            <ul>
              <li>
                <code>/blog/2026/05/category/tutorials/react-hooks</code>{" "}
                &mdash; too deep
              </li>
              <li>
                <code>/blog/react-hooks-tutorial</code> &mdash; flat and clear
              </li>
            </ul>
            <p>
              Google can crawl deep URLs, but flatter structures are easier for
              users to understand and type manually.
            </p>

            <h2>Quick Reference Checklist</h2>
            <ul>
              <li>Under 60 characters</li>
              <li>Lowercase letters, numbers, and hyphens only</li>
              <li>Contains the target keyword</li>
              <li>No stop words, dates, or special characters</li>
              <li>Hyphens as separators (not underscores)</li>
              <li>Descriptive and human-readable</li>
              <li>Won&rsquo;t need to change after publishing</li>
            </ul>
            <p>
              Use the{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Slug Generator
              </Link>{" "}
              to apply all these rules automatically. Paste any title or text
              and get an optimized slug in seconds.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
