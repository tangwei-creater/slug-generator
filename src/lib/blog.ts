export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
}

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
