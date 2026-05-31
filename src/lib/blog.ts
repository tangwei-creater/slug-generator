import type { Locale } from "@/i18n/routing";
import * as whatIsAUrlSlug from "@/content/blog/what-is-a-url-slug";
import * as urlSlugBestPractices from "@/content/blog/url-slug-best-practices-seo";
import * as slugifyText from "@/content/blog/slugify-text-javascript-python-php";
import * as urlSlugVsPath from "@/content/blog/url-slug-vs-url-path-whats-the-difference";
import * as specialCharacters from "@/content/blog/handling-special-characters-in-url-slugs";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
}

export interface Article {
  title: string;
  description: string;
  body: string;
}

interface PostModule {
  meta: { slug: string; date: string; readTime: number };
  article: Record<Locale, Article>;
}

// Migrated posts with full per-locale translations.
const localizedModules: Record<string, PostModule> = {
  [whatIsAUrlSlug.meta.slug]: whatIsAUrlSlug,
  [urlSlugBestPractices.meta.slug]: urlSlugBestPractices,
  [slugifyText.meta.slug]: slugifyText,
  [urlSlugVsPath.meta.slug]: urlSlugVsPath,
  [specialCharacters.meta.slug]: specialCharacters,
};

// Canonical ordered list (English fallback metadata for every post).
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "what-is-a-url-slug",
    title: "What Is a URL Slug? A Complete Guide",
    description:
      "Learn what URL slugs are, why they matter for SEO, and how to create effective ones. Includes examples and best practices.",
    date: "2026-05-20",
    readTime: 5,
  },
  {
    slug: "url-slug-best-practices-seo",
    title: "URL Slug Best Practices for SEO in 2026",
    description:
      "Master URL slug optimization with proven SEO best practices. Learn the right length, format, and keyword strategy for your slugs.",
    date: "2026-05-20",
    readTime: 6,
  },
  {
    slug: "slugify-text-javascript-python-php",
    title: "How to Slugify Text in JavaScript, Python, and PHP",
    description:
      "Code examples and libraries for converting text to URL slugs in JavaScript, Python, and PHP. Copy-paste ready solutions.",
    date: "2026-05-20",
    readTime: 7,
  },
  {
    slug: "url-slug-vs-url-path-whats-the-difference",
    title: "URL Slug vs URL Path: What's the Difference?",
    description:
      "Understand the difference between a URL slug, path, and permalink. Clear definitions with visual examples for web developers and content creators.",
    date: "2026-05-21",
    readTime: 5,
  },
  {
    slug: "handling-special-characters-in-url-slugs",
    title: "Handling Special Characters in URL Slugs: A Developer Guide",
    description:
      "How to handle accents, Unicode, CJK characters, emojis, and symbols when generating URL slugs. Covers transliteration, percent-encoding, and best practices.",
    date: "2026-05-21",
    readTime: 6,
  },
];

// Localized listing metadata (title + description) with English fallback.
export function getBlogList(
  locale: Locale
): BlogPostMeta[] {
  return blogPosts.map((post) => {
    const m = localizedModules[post.slug];
    if (!m) return post;
    const a = m.article[locale] ?? m.article.en;
    return { ...post, title: a.title, description: a.description };
  });
}

// Full localized article for a post page. Returns null if the post isn't migrated.
export function getArticle(
  slug: string,
  locale: Locale
): (Article & { date: string; readTime: number }) | null {
  const m = localizedModules[slug];
  if (!m) return null;
  const a = m.article[locale] ?? m.article.en;
  return { ...a, date: m.meta.date, readTime: m.meta.readTime };
}
