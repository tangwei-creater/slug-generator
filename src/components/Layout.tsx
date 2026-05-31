import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";

const toolPaths = [
  { href: "/" as const, key: "slugGenerator" },
  { href: "/url-slug-generator" as const, key: "urlSlugGenerator" },
  { href: "/text-to-slug" as const, key: "textToSlug" },
  { href: "/kebab-case-converter" as const, key: "kebabCaseConverter" },
  { href: "/slugify-online" as const, key: "slugifyOnline" },
  { href: "/permalink-generator" as const, key: "permalinkGenerator" },
  { href: "/snake-case-converter" as const, key: "snakeCaseConverter" },
  { href: "/camelcase-converter" as const, key: "camelCaseConverter" },
  { href: "/title-case-converter" as const, key: "titleCaseConverter" },
];

export async function Header() {
  const t = await getTranslations("nav");

  const navLinks = [
    { href: "/url-slug-generator", label: t("urlSlug") },
    { href: "/text-to-slug", label: t("textToSlug") },
    { href: "/kebab-case-converter", label: t("kebabCase") },
    { href: "/camelcase-converter", label: t("camelCase") },
    { href: "/title-case-converter", label: t("titleCase") },
    { href: "/blog", label: t("blog") },
  ];

  return (
    <header className="relative border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900" title="Slug Generator - Free Online Tool">
          Slug<span className="text-blue-600">Generator</span>
          <span className="text-gray-400 text-sm font-normal">.app</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} title={link.label} className="hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}

export async function Footer() {
  const t = await getTranslations("footer");
  const tTools = await getTranslations("tools");

  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {toolPaths.map((tp) => (
                <li key={tp.href}>
                  <Link href={tp.href} title={tTools(`${tp.key}.name`)} className="hover:text-gray-700 transition-colors">
                    {tTools(`${tp.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Blog</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/blog/what-is-a-url-slug" className="hover:text-gray-700 transition-colors">
                  What Is a URL Slug?
                </Link>
              </li>
              <li>
                <Link href="/blog/url-slug-best-practices-seo" className="hover:text-gray-700 transition-colors">
                  URL Slug Best Practices
                </Link>
              </li>
              <li>
                <Link href="/blog/slugify-text-javascript-python-php" className="hover:text-gray-700 transition-colors">
                  Slugify in JS, Python, PHP
                </Link>
              </li>
              <li>
                <Link href="/blog/url-slug-vs-url-path-whats-the-difference" className="hover:text-gray-700 transition-colors">
                  URL Slug vs URL Path
                </Link>
              </li>
              <li>
                <Link href="/blog/handling-special-characters-in-url-slugs" className="hover:text-gray-700 transition-colors">
                  Special Characters in Slugs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">SlugGenerator.app</h4>
            <p className="text-sm text-gray-500">{t("text")}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SlugGenerator.app</p>
        </div>
      </div>
    </footer>
  );
}

export async function RelatedTools({ current }: { current: string }) {
  const tTools = await getTranslations("tools");
  const tRelated = await getTranslations("related");

  const others = toolPaths
    .filter((tp) => tp.href !== current)
    .map((tp) => ({
      href: tp.href,
      name: tTools(`${tp.key}.name`),
      desc: tTools(`${tp.key}.desc`),
    }));

  return (
    <section className="w-full max-w-3xl mx-auto mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{tRelated("title")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            title={tool.name}
            className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">{tool.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
