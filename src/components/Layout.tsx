import Link from "next/link";

const tools = [
  { href: "/", title: "Slug Generator", desc: "Convert text to URL slugs" },
  { href: "/url-slug-generator", title: "URL Slug Generator", desc: "Create SEO-friendly URL slugs" },
  { href: "/text-to-slug", title: "Text to Slug", desc: "Transform any text into a slug" },
  { href: "/kebab-case-converter", title: "Kebab Case Converter", desc: "Convert text to kebab-case" },
  { href: "/slugify-online", title: "Slugify Online", desc: "Slugify text instantly online" },
];

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900" title="Slug Generator - Free Online Tool">
          Slug<span className="text-blue-600">Generator</span>
          <span className="text-gray-400 text-sm font-normal">.tools</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
          <Link href="/url-slug-generator" title="URL Slug Generator" className="hover:text-gray-900 transition-colors">
            URL Slug
          </Link>
          <Link href="/text-to-slug" title="Text to Slug Converter" className="hover:text-gray-900 transition-colors">
            Text to Slug
          </Link>
          <Link href="/kebab-case-converter" title="Kebab Case Converter" className="hover:text-gray-900 transition-colors">
            Kebab Case
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} SlugGenerator.tools &mdash; Free
          online slug generator. No data is sent to any server. Everything runs
          in your browser.
        </p>
      </div>
    </footer>
  );
}

export function RelatedTools({ current }: { current: string }) {
  const others = tools.filter((t) => t.href !== current);
  return (
    <section className="w-full max-w-3xl mx-auto mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            title={tool.title}
            className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">{tool.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
