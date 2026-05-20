import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sluggenerator.tools";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/url-slug-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/text-to-slug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kebab-case-converter`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/slugify-online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
