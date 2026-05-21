import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routing } from "@/i18n/routing";

const siteUrl = "https://sluggenerator.app";
const path = "/blog/handling-special-characters-in-url-slugs";

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
      "Handling Special Characters in URL Slugs | SlugGenerator.tools",
    description:
      "How to handle accents, Unicode, CJK characters, emojis, and symbols when generating URL slugs. Covers transliteration, percent-encoding, and best practices.",
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

export default async function SpecialCharactersGuide() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Handling Special Characters in URL Slugs: A Developer Guide",
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
                { name: "Special Characters in Slugs" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Handling Special Characters in URL Slugs
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime="2026-05-21">May 21, 2026</time>
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              Most slug generators work fine for plain English text. But the
              real world has accented characters, non-Latin scripts, emojis,
              and symbols. This guide covers how to handle all of them when
              generating URL slugs.
            </p>

            <h2>The Problem: URLs Have a Limited Character Set</h2>
            <p>
              URLs can only safely contain ASCII characters: letters (a-z),
              digits (0-9), and a few symbols like hyphens and underscores.
              Everything else must be either converted or percent-encoded (like{" "}
              <code>%C3%A9</code> for &eacute;). Percent-encoded URLs are ugly,
              hard to read, and bad for SEO. The solution is transliteration.
            </p>

            <h2>Transliteration: The Core Technique</h2>
            <p>
              Transliteration converts characters from one script to their
              closest ASCII equivalent. Some common examples:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Input</th>
                  <th>Transliterated</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&eacute;, &egrave;, &ecirc;, &euml;</td>
                  <td>e</td>
                  <td>French, Portuguese</td>
                </tr>
                <tr>
                  <td>&uuml;, &ouml;, &auml;</td>
                  <td>ue, oe, ae</td>
                  <td>German</td>
                </tr>
                <tr>
                  <td>&ntilde;</td>
                  <td>n</td>
                  <td>Spanish</td>
                </tr>
                <tr>
                  <td>&szlig;</td>
                  <td>ss</td>
                  <td>German</td>
                </tr>
                <tr>
                  <td>&ccedil;</td>
                  <td>c</td>
                  <td>French, Portuguese</td>
                </tr>
              </tbody>
            </table>
            <p>
              Our{" "}
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Slug Generator
              </Link>{" "}
              performs transliteration automatically when the
              &ldquo;Transliterate&rdquo; option is enabled.
            </p>

            <h2>Unicode Normalization</h2>
            <p>
              Before transliteration, you need to normalize Unicode text. The
              character &eacute; can be stored two ways in Unicode:
            </p>
            <ul>
              <li>
                <strong>Composed (NFC)</strong>: a single code point (U+00E9)
              </li>
              <li>
                <strong>Decomposed (NFD)</strong>: the letter &ldquo;e&rdquo;
                followed by a combining accent mark (U+0065 + U+0301)
              </li>
            </ul>
            <p>
              Both look identical on screen but are different bytes. Normalizing
              to NFKD (compatibility decomposition) separates the base letter
              from its accent mark, making it easy to strip the accents:
            </p>
            <pre>
              <code>{`// JavaScript
function removeAccents(text) {
  return text
    .normalize('NFKD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

removeAccents('Café Résumé');
// Output: Cafe Resume`}</code>
            </pre>

            <h2>CJK Characters (Chinese, Japanese, Korean)</h2>
            <p>
              CJK characters don&rsquo;t transliterate to Latin in a meaningful
              way. There are two common approaches:
            </p>
            <ol>
              <li>
                <strong>Use romanization</strong> (pinyin for Chinese, romaji for
                Japanese). Libraries like <code>pinyin</code> (npm) or{" "}
                <code>kuroshiro</code> can do this, but the results may not match
                user expectations.
              </li>
              <li>
                <strong>Keep the characters as-is</strong>. Modern browsers and
                search engines handle Unicode URLs well. Google can index URLs
                with CJK characters. The URL will be percent-encoded in the
                address bar but will display correctly in search results.
              </li>
            </ol>
            <p>
              For most use cases, option 2 is safer&mdash;romanized CJK text
              can be unreadable to native speakers.
            </p>

            <h2>Emojis in URLs</h2>
            <p>
              While technically possible (emojis get percent-encoded), emojis in
              slugs are a bad idea:
            </p>
            <ul>
              <li>They become extremely long percent-encoded strings</li>
              <li>They break in many systems and APIs</li>
              <li>Search engines may not index them properly</li>
              <li>They can&rsquo;t be typed manually</li>
            </ul>
            <p>
              Always strip emojis during slug generation. A simple regex
              pattern can remove them:
            </p>
            <pre>
              <code>{`text.replace(/[\\u{1F600}-\\u{1F6FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/gu, '')`}</code>
            </pre>

            <h2>Common Special Characters</h2>
            <p>
              Here&rsquo;s how a good slug generator handles common special
              characters:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Character</th>
                  <th>Action</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&amp;</td>
                  <td>Replace with &ldquo;and&rdquo; or remove</td>
                  <td>Has special meaning in URLs</td>
                </tr>
                <tr>
                  <td>@, #, ?, =</td>
                  <td>Remove</td>
                  <td>Reserved URL characters</td>
                </tr>
                <tr>
                  <td>&ldquo; &rdquo; &lsquo; &rsquo;</td>
                  <td>Remove</td>
                  <td>Punctuation, no semantic value in slug</td>
                </tr>
                <tr>
                  <td>&mdash; &ndash;</td>
                  <td>Replace with hyphen</td>
                  <td>Similar purpose, normalize to separator</td>
                </tr>
                <tr>
                  <td>/ \\</td>
                  <td>Replace with hyphen</td>
                  <td>Slashes create path segments</td>
                </tr>
              </tbody>
            </table>

            <h2>Testing Your Slug Generator</h2>
            <p>
              Test with these tricky inputs to make sure your slug generator
              handles edge cases:
            </p>
            <ul>
              <li>
                <code>&ldquo;Caf&eacute; Menu &mdash; Special &Eacute;dition!&rdquo;</code>{" "}
                &rarr; <code>cafe-menu-special-edition</code>
              </li>
              <li>
                <code>&ldquo;100% Free &amp; Open Source&rdquo;</code> &rarr;{" "}
                <code>100-free-and-open-source</code> or{" "}
                <code>100-free-open-source</code>
              </li>
              <li>
                <code>&ldquo;   Lots   of   spaces   &rdquo;</code> &rarr;{" "}
                <code>lots-of-spaces</code>
              </li>
              <li>
                <code>&ldquo;---triple---hyphens---&rdquo;</code> &rarr;{" "}
                <code>triple-hyphens</code>
              </li>
              <li>
                Empty string &rarr; should return empty or a fallback
              </li>
            </ul>
            <p>
              Try these examples directly in our{" "}
              <Link
                href="/slugify-online"
                className="text-blue-600 hover:text-blue-800"
              >
                Slugify Online
              </Link>{" "}
              tool and see how it handles each case.
            </p>

            <h2>Library Support</h2>
            <p>
              For a deeper comparison of slug libraries across languages, check
              our guide on{" "}
              <Link
                href="/blog/slugify-text-javascript-python-php"
                className="text-blue-600 hover:text-blue-800"
              >
                how to slugify text in JavaScript, Python, and PHP
              </Link>
              . Each library handles special characters differently, so choose
              one that fits your use case.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
