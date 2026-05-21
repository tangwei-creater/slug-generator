import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";
const path = "/blog/slugify-text-javascript-python-php";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = locale === "en" ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title:
      "How to Slugify Text in JavaScript, Python, and PHP | SlugGenerator.tools",
    description:
      "Code examples and libraries for converting text to URL slugs in JavaScript, Python, and PHP. Copy-paste ready solutions.",
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

export default async function SlugifyTextGuide() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Slugify Text in JavaScript, Python, and PHP",
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
                { name: "Slugify in JS, Python, PHP" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Slugify Text in JavaScript, Python, and PHP
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-05-20">May 20, 2026</time>
              <span>7 min read</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              Slugifying text&mdash;converting a human-readable string into a
              URL-safe slug&mdash;is a common task in web development. Whether
              you&rsquo;re building a blog, e-commerce site, or API, you&rsquo;ll
              need to generate clean URL slugs from titles and other text. This
              guide shows you how to do it in the three most popular server-side
              languages.
            </p>
            <p>
              Don&rsquo;t want to write code? Use our{" "}
              <Link
                href="/slugify-online"
                className="text-blue-600 hover:text-blue-800"
              >
                Slugify Online
              </Link>{" "}
              tool to convert text to slugs instantly in your browser.
            </p>

            <h2>JavaScript / Node.js</h2>

            <h3>Using the slugify Library</h3>
            <p>
              The most popular approach in JavaScript is the <code>slugify</code>{" "}
              npm package:
            </p>
            <pre>
              <code>{`npm install slugify`}</code>
            </pre>
            <pre>
              <code>{`const slugify = require('slugify');

const title = "Café Menu — Special Édition!";
const slug = slugify(title, {
  lower: true,
  strict: true,
  trim: true
});

console.log(slug);
// Output: cafe-menu-special-edition`}</code>
            </pre>
            <p>Options explained:</p>
            <ul>
              <li>
                <code>lower: true</code> &mdash; converts to lowercase
              </li>
              <li>
                <code>strict: true</code> &mdash; strips all characters that
                aren&rsquo;t letters, numbers, or the separator
              </li>
              <li>
                <code>trim: true</code> &mdash; removes leading/trailing
                separators
              </li>
            </ul>

            <h3>Manual Implementation</h3>
            <p>
              If you prefer not to add a dependency, here&rsquo;s a minimal
              slugify function:
            </p>
            <pre>
              <code>{`function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/[\\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}`}</code>
            </pre>
            <p>
              This handles accented characters via Unicode normalization,
              converts to lowercase, removes special characters, and collapses
              whitespace into single hyphens.
            </p>

            <h2>Python</h2>

            <h3>Using python-slugify</h3>
            <p>
              The standard library for Python slugification is{" "}
              <code>python-slugify</code>:
            </p>
            <pre>
              <code>{`pip install python-slugify`}</code>
            </pre>
            <pre>
              <code>{`from slugify import slugify

title = "Café Menu — Special Édition!"
slug = slugify(title)

print(slug)
# Output: cafe-menu-special-edition`}</code>
            </pre>
            <p>
              <code>python-slugify</code> uses the{" "}
              <code>text-unidecode</code> library under the hood for
              transliteration, which handles a wide range of Unicode characters
              including CJK.
            </p>

            <h3>Django&rsquo;s Built-in slugify</h3>
            <p>
              If you&rsquo;re using Django, it has a built-in slugify utility:
            </p>
            <pre>
              <code>{`from django.utils.text import slugify

slug = slugify("My Blog Post Title")
# Output: my-blog-post-title`}</code>
            </pre>
            <p>
              Note: Django&rsquo;s <code>slugify</code> doesn&rsquo;t handle
              transliteration by default. For accented characters, combine it
              with <code>unidecode</code>.
            </p>

            <h2>PHP</h2>

            <h3>Laravel&rsquo;s Str::slug()</h3>
            <p>
              Laravel provides a clean slug helper:
            </p>
            <pre>
              <code>{`use Illuminate\\Support\\Str;

$slug = Str::slug("Café Menu — Special Édition!");
// Output: cafe-menu-special-edition`}</code>
            </pre>
            <p>
              <code>Str::slug()</code> handles transliteration, lowercasing, and
              special character removal in one call.
            </p>

            <h3>Manual Implementation</h3>
            <p>Without a framework, here&rsquo;s a PHP slugify function:</p>
            <pre>
              <code>{`function slugify(string $text): string {
    $text = transliterator_transliterate(
        'Any-Latin; Latin-ASCII; Lower()',
        $text
    );
    $text = preg_replace('/[^a-z0-9\\s-]/', '', $text);
    $text = preg_replace('/[\\s_]+/', '-', $text);
    $text = preg_replace('/-+/', '-', $text);
    return trim($text, '-');
}`}</code>
            </pre>
            <p>
              This uses PHP&rsquo;s <code>intl</code> extension for
              transliteration. Make sure the <code>intl</code> extension is
              enabled in your <code>php.ini</code>.
            </p>

            <h2>Comparison Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>JS (slugify)</th>
                  <th>Python (python-slugify)</th>
                  <th>PHP (Laravel)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transliteration</td>
                  <td>Basic Latin</td>
                  <td>Full Unicode</td>
                  <td>Full Unicode</td>
                </tr>
                <tr>
                  <td>Custom separator</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Max length</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>No (manual)</td>
                </tr>
                <tr>
                  <td>CJK support</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Partial</td>
                </tr>
              </tbody>
            </table>

            <h2>When to Use a Library vs. Online Tool</h2>
            <p>
              Use a <strong>library</strong> when you need to generate slugs
              programmatically at runtime&mdash;for example, auto-generating a
              URL when a user creates a blog post.
            </p>
            <p>
              Use an <strong>online tool</strong> when you need a one-off slug
              or want to quickly check what a title looks like as a URL. Our{" "}
              <Link
                href="/text-to-slug"
                className="text-blue-600 hover:text-blue-800"
              >
                Text to Slug
              </Link>{" "}
              converter supports custom separators, max length, and
              transliteration&mdash;all the options you&rsquo;d configure in a
              library, without writing any code.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
