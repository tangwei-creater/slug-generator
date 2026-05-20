"use client";

import { useState, useCallback, useRef } from "react";

/* ─── transliteration map (covers accented Latin, Cyrillic basics, CJK placeholder) ─── */
const CHAR_MAP: Record<string, string> = {
  // Latin accents
  à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", æ: "ae",
  ç: "c", è: "e", é: "e", ê: "e", ë: "e",
  ì: "i", í: "i", î: "i", ï: "i",
  ð: "d", ñ: "n",
  ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o",
  ù: "u", ú: "u", û: "u", ü: "u",
  ý: "y", ÿ: "y", þ: "th",
  ß: "ss",
  // Symbols
  "&": "and", "@": "at", "#": "number", "%": "percent",
  "+": "plus", "=": "equals",
  "€": "euro", "£": "pound", "¥": "yen", "$": "dollar",
  "©": "c", "®": "r", "™": "tm",
};

function transliterate(str: string): string {
  return str
    .split("")
    .map((ch) => CHAR_MAP[ch] || CHAR_MAP[ch.toLowerCase()] || ch)
    .join("");
}

/* ─── core slugify function ─── */
interface SlugOptions {
  separator: string;
  lowercase: boolean;
  trim: boolean;
  transliterate: boolean;
  maxLength: number;
  stripNumbers: boolean;
}

function slugify(text: string, options: SlugOptions): string {
  let result = text;

  // Step 1: transliterate if enabled
  if (options.transliterate) {
    result = transliterate(result);
  }

  // Step 2: lowercase
  if (options.lowercase) {
    result = result.toLowerCase();
  }

  // Step 3: strip numbers if enabled
  if (options.stripNumbers) {
    result = result.replace(/[0-9]/g, "");
  }

  // Step 4: replace non-alphanumeric with separator
  result = result
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // remove diacritical marks
    .replace(/[^\w\s-]/g, " ") // non-word chars → space
    .replace(/[\s_-]+/g, options.separator) // whitespace/underscores/hyphens → separator
    .replace(new RegExp(`^[${escapeRegex(options.separator)}]+|[${escapeRegex(options.separator)}]+$`, "g"), ""); // trim separators

  // Step 5: trim whitespace
  if (options.trim) {
    result = result.trim();
  }

  // Step 6: max length (cut at word boundary)
  if (options.maxLength > 0 && result.length > options.maxLength) {
    result = result.substring(0, options.maxLength);
    const lastSep = result.lastIndexOf(options.separator);
    if (lastSep > 0) {
      result = result.substring(0, lastSep);
    }
  }

  return result;
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ─── Slug Generator Component ─── */
function SlugGenerator() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<SlugOptions>({
    separator: "-",
    lowercase: true,
    trim: true,
    transliterate: true,
    maxLength: 0,
    stripNumbers: false,
  });
  const outputRef = useRef<HTMLInputElement>(null);

  const slug = slugify(input, options);

  const handleCopy = useCallback(async () => {
    if (!slug) return;
    try {
      await navigator.clipboard.writeText(slug);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      outputRef.current?.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [slug]);

  const handleClear = () => {
    setInput("");
    setCopied(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Input */}
      <div className="mb-6">
        <label
          htmlFor="text-input"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Enter your text
        </label>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. My Awesome Blog Post Title! (2024)"
          className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          autoFocus
        />
      </div>

      {/* Options */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3">Options</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Separator */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Separator
            </label>
            <select
              value={options.separator}
              onChange={(e) =>
                setOptions({ ...options, separator: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:border-blue-500 outline-none"
            >
              <option value="-">Hyphen (-)</option>
              <option value="_">Underscore (_)</option>
              <option value=".">Dot (.)</option>
            </select>
          </div>

          {/* Max Length */}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Max length (0 = no limit)
            </label>
            <input
              type="number"
              min={0}
              max={200}
              value={options.maxLength}
              onChange={(e) =>
                setOptions({
                  ...options,
                  maxLength: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-2">
            <ToggleOption
              label="Lowercase"
              checked={options.lowercase}
              onChange={(v) => setOptions({ ...options, lowercase: v })}
            />
            <ToggleOption
              label="Transliterate"
              checked={options.transliterate}
              onChange={(v) => setOptions({ ...options, transliterate: v })}
            />
            <ToggleOption
              label="Strip numbers"
              checked={options.stripNumbers}
              onChange={(v) => setOptions({ ...options, stripNumbers: v })}
            />
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your slug
        </label>
        <div className="flex gap-2">
          <input
            ref={outputRef}
            type="text"
            readOnly
            value={slug}
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg font-mono bg-gray-50 text-blue-700 select-all outline-none"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
          <button
            onClick={handleCopy}
            disabled={!slug}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Stats */}
      {slug && (
        <div className="flex gap-4 text-sm text-gray-500 mb-2">
          <span>
            Characters: <strong className="text-gray-700">{slug.length}</strong>
          </span>
          <span>
            Words:{" "}
            <strong className="text-gray-700">
              {slug.split(options.separator).filter(Boolean).length}
            </strong>
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Toggle component ─── */
function ToggleOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}

/* ─── SEO Content Section ─── */
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

/* ─── Page ─── */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-900">
            Slug<span className="text-blue-600">Generator</span>
            <span className="text-gray-400 text-sm font-normal">.tools</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Slug Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert any text into a clean, SEO-friendly URL slug. Free, fast,
              and works right in your browser &mdash; no signup required.
            </p>
          </div>

          {/* Tool */}
          <SlugGenerator />

          {/* SEO Content */}
          <SeoContent />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} SlugGenerator.tools &mdash; Free
            online slug generator. No data is sent to any server. Everything
            runs in your browser.
          </p>
        </div>
      </footer>
    </div>
  );
}
