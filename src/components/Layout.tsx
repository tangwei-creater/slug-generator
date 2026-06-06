import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";
import { blogPosts } from "@/lib/blog";

const toolCategories: {
  categoryKey: string;
  tools: { href: string; key: string }[];
}[] = [
  {
    categoryKey: "slugTools",
    tools: [
      { href: "/", key: "slugGenerator" },
      { href: "/url-slug-generator", key: "urlSlugGenerator" },
      { href: "/text-to-slug", key: "textToSlug" },
      { href: "/slugify-online", key: "slugifyOnline" },
      { href: "/permalink-generator", key: "permalinkGenerator" },
      { href: "/wordpress-slug-generator", key: "wordpressSlugGenerator" },
      { href: "/blog-slug-generator", key: "blogSlugGenerator" },
      { href: "/product-slug-generator", key: "productSlugGenerator" },
    ],
  },
  {
    categoryKey: "caseConverters",
    tools: [
      { href: "/case-converter-online", key: "caseConverterOnline" },
      { href: "/camelcase-converter", key: "camelCaseConverter" },
      { href: "/title-case-converter", key: "titleCaseConverter" },
      { href: "/sentence-case-converter", key: "sentenceCaseConverter" },
      { href: "/kebab-case-converter", key: "kebabCaseConverter" },
      { href: "/snake-case-converter", key: "snakeCaseConverter" },
      { href: "/pascal-case-converter", key: "pascalCaseConverter" },
      { href: "/alternating-case-converter", key: "alternatingCaseConverter" },
      { href: "/dot-case-converter", key: "dotCaseConverter" },
      { href: "/constant-case-converter", key: "constantCaseConverter" },
    ],
  },
  {
    categoryKey: "textTools",
    tools: [
      { href: "/word-counter", key: "wordCounter" },
      { href: "/lorem-ipsum-generator", key: "loremIpsumGenerator" },
      { href: "/plain-text-converter", key: "plainTextConverter" },
      { href: "/duplicate-line-remover", key: "duplicateLineRemover" },
      { href: "/remove-empty-lines", key: "removeEmptyLines" },
      { href: "/sort-lines-alphabetically", key: "sortLinesAlphabetically" },
      { href: "/remove-line-breaks", key: "removeLineBreaks" },
    ],
  },
  {
    categoryKey: "devTools",
    tools: [
      { href: "/url-encoder-decoder", key: "urlEncoderDecoder" },
      { href: "/utm-builder", key: "utmBuilder" },
      { href: "/json-keys-to-camelcase", key: "jsonKeysToCamelcase" },
      { href: "/json-keys-to-snake-case", key: "jsonKeysToSnakeCase" },
    ],
  },
];

const toolPaths = toolCategories.flatMap((cat) => cat.tools);

export async function Header() {
  const t = await getTranslations("nav");
  const tTools = await getTranslations("tools");

  const categories = toolCategories.map((cat) => ({
    label: t(cat.categoryKey),
    tools: cat.tools.map((tool) => ({
      href: tool.href,
      name: tTools(`${tool.key}.name`),
    })),
  }));

  return (
    <header className="relative border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900" title="Slug Generator - Free Online Tool">
          Slug<span className="text-blue-600">Generator</span>
          <span className="text-gray-400 text-sm font-normal">.app</span>
        </Link>
        <div className="flex items-center gap-2">
          <DesktopNav categories={categories} blogLabel={t("blog")} />
          <LocaleSwitcher />
          <MobileNav categories={categories} blogLabel={t("blog")} />
        </div>
      </div>
    </header>
  );
}

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tTools = await getTranslations("tools");

  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {toolCategories.map((cat) => (
            <div key={cat.categoryKey}>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                {tNav(cat.categoryKey)}
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                {cat.tools.map((tp) => (
                  <li key={tp.href}>
                    <Link href={tp.href} title={tTools(`${tp.key}.name`)} className="hover:text-gray-700 transition-colors">
                      {tTools(`${tp.key}.name`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Blog</h4>
            <ul className="columns-2 lg:columns-3 gap-x-6 space-y-2 text-sm text-gray-500">
              {blogPosts.map((post) => (
                <li key={post.slug} className="break-inside-avoid">
                  <Link href={`/blog/${post.slug}` as never} className="hover:text-gray-700 transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
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
