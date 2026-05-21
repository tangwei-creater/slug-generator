import type { MetadataRoute } from "next";

const baseUrl = "https://sluggenerator.app";
const locales = ["en", "ja", "de", "es", "pt", "fr"];
const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/url-slug-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/text-to-slug", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kebab-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/slugify-online", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/blog/what-is-a-url-slug", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog/url-slug-best-practices-seo", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog/slugify-text-javascript-python-php", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog/url-slug-vs-url-path-whats-the-difference", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog/handling-special-characters-in-url-slugs", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url =
        locale === "en"
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${locale}${page.path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === "en"
                ? `${baseUrl}${page.path}`
                : `${baseUrl}/${l}${page.path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
