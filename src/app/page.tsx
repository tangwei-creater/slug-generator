import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";

function SeoContent() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
      <h2>What Is a URL Slug?</h2>
      <p>
        A <strong>URL slug</strong> is the part of a web address that comes after
        the domain name and identifies a specific page in a human-readable way.
        For example, in <code>example.com/my-awesome-post</code>, the slug is{" "}
        <code>my-awesome-post</code>.
      </p>
      <p>
        Good slugs are short, descriptive, and use hyphens to separate words.
        They help both search engines and users understand what a page is about
        before clicking.
      </p>

      <h2>Why Use a Slug Generator?</h2>
      <ul>
        <li>
          <strong>SEO-friendly URLs</strong> &mdash; Clean slugs improve your
          search engine rankings by including relevant keywords in the URL.
        </li>
        <li>
          <strong>Consistency</strong> &mdash; Automatically handle special
          characters, accents, and formatting so every URL follows the same
          pattern.
        </li>
        <li>
          <strong>Save time</strong> &mdash; No more manually converting titles
          to URL-safe strings. Paste your text and get a slug instantly.
        </li>
        <li>
          <strong>Avoid broken links</strong> &mdash; Special characters in URLs
          can cause 404 errors. A slug generator strips them automatically.
        </li>
      </ul>

      <h2>How to Create a Good URL Slug</h2>
      <ol>
        <li>Start with your page title or a descriptive phrase</li>
        <li>Convert everything to lowercase</li>
        <li>Replace spaces and special characters with hyphens</li>
        <li>Remove stop words if the slug is too long (a, the, is, etc.)</li>
        <li>Keep it under 60 characters for best SEO results</li>
        <li>
          Use only letters, numbers, and hyphens &mdash; no underscores or
          special characters
        </li>
      </ol>

      <h2>Slug Generator Features</h2>
      <p>This free online slug generator offers:</p>
      <ul>
        <li>
          <strong>Real-time conversion</strong> &mdash; See your slug update as
          you type
        </li>
        <li>
          <strong>Custom separators</strong> &mdash; Choose between hyphens,
          underscores, or dots
        </li>
        <li>
          <strong>Transliteration</strong> &mdash; Automatically converts
          accented characters (like &eacute;, &uuml;, &ntilde;) to their ASCII
          equivalents
        </li>
        <li>
          <strong>Max length control</strong> &mdash; Set a character limit and
          the tool cuts at the nearest word boundary
        </li>
        <li>
          <strong>One-click copy</strong> &mdash; Copy your slug to clipboard
          instantly
        </li>
      </ul>

      <h2>Common Use Cases</h2>
      <ul>
        <li>Blog post URLs for WordPress, Ghost, or Hugo</li>
        <li>Product page URLs for e-commerce platforms</li>
        <li>API endpoint naming conventions</li>
        <li>File naming for web assets</li>
        <li>Database-friendly identifiers</li>
        <li>GitHub repository and branch names</li>
      </ul>

      <h2>FAQ</h2>
      <h3>What characters are allowed in a URL slug?</h3>
      <p>
        URL slugs should only contain lowercase letters (a-z), numbers (0-9),
        and hyphens (-). All other characters, including spaces, should be
        converted or removed.
      </p>

      <h3>Should I use hyphens or underscores in slugs?</h3>
      <p>
        Google recommends hyphens (-) over underscores (_) for URL slugs.
        Hyphens are treated as word separators by search engines, while
        underscores are not.
      </p>

      <h3>How long should a URL slug be?</h3>
      <p>
        Keep your slugs under 60 characters. Shorter slugs are easier to read,
        share, and remember. Remove unnecessary stop words to keep them concise.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Slug Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert any text into a clean, SEO-friendly URL slug. Free, fast,
              and works right in your browser &mdash; no signup required.
            </p>
          </div>

          <SlugTool />
          <SeoContent />
          <RelatedTools current="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
