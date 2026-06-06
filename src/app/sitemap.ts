import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const baseUrl = "https://sluggenerator.app";
const locales = ["en", "ja", "de", "es", "pt", "fr"];

const toolPages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/url-slug-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/text-to-slug", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kebab-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/slugify-online", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/permalink-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/snake-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/camelcase-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/title-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sentence-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-converter-online", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/alternating-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pascal-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/dot-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/constant-case-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/json-keys-to-camelcase", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/json-keys-to-snake-case", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wordpress-slug-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog-slug-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product-slug-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/plain-text-converter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/duplicate-line-remover", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/remove-empty-lines", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sort-lines-alphabetically", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/remove-line-breaks", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/url-encoder-decoder", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/word-counter", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/lorem-ipsum-generator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/utm-builder", priority: 0.8, changeFrequency: "monthly" as const },
];

// Generate blog entries dynamically from the blog registry.
const blogPages = [
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  })),
];

const pages = [...toolPages, ...blogPages];

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
