import type { Locale } from "@/i18n/routing";

// ─── Content module imports ───
import * as whatIsAUrlSlug from "@/content/blog/what-is-a-url-slug";
import * as urlSlugBestPractices from "@/content/blog/url-slug-best-practices-seo";
import * as slugifyText from "@/content/blog/slugify-text-javascript-python-php";
import * as urlSlugVsPath from "@/content/blog/url-slug-vs-url-path-whats-the-difference";
import * as specialCharacters from "@/content/blog/handling-special-characters-in-url-slugs";
import * as camelVsSnake from "@/content/blog/camelcase-vs-snake-case";
import * as namingConventions from "@/content/blog/naming-conventions-programming";
import * as pythonPep8 from "@/content/blog/python-naming-conventions-pep8";
import * as jsNaming from "@/content/blog/javascript-naming-conventions";
import * as seoUrl from "@/content/blog/seo-friendly-url-structure";
import * as cssBem from "@/content/blog/css-naming-conventions-bem";
import * as titleCaseRules from "@/content/blog/title-case-rules-ap-apa-chicago";
import * as whatIsPermalink from "@/content/blog/what-is-a-permalink";
import * as changeWpSlug from "@/content/blog/how-to-change-wordpress-slug";
import * as jsonKeyNaming from "@/content/blog/json-key-naming-conventions";
// Batch 2 — language-specific naming conventions
import * as whatIsKebabCase from "@/content/blog/what-is-kebab-case";
import * as whatIsPascalCase from "@/content/blog/what-is-pascalcase";
import * as whatIsScreamingSnake from "@/content/blog/what-is-screaming-snake-case";
import * as whatIsDotCase from "@/content/blog/what-is-dot-case";
import * as whatIsConstantCase from "@/content/blog/what-is-constant-case";
import * as howToNameVars from "@/content/blog/how-to-name-variables";
import * as databaseNaming from "@/content/blog/database-naming-conventions";
import * as restApiNaming from "@/content/blog/rest-api-naming-conventions";
import * as reactNaming from "@/content/blog/react-component-naming-conventions";
import * as golangNaming from "@/content/blog/golang-naming-conventions";
import * as rubyNaming from "@/content/blog/ruby-naming-conventions";
import * as rustNaming from "@/content/blog/rust-naming-conventions";
import * as swiftNaming from "@/content/blog/swift-naming-conventions";
import * as kotlinNaming from "@/content/blog/kotlin-naming-conventions";
import * as phpNaming from "@/content/blog/php-naming-conventions";
import * as csharpNaming from "@/content/blog/csharp-naming-conventions";
import * as javaNaming from "@/content/blog/java-naming-conventions";
import * as tsNaming from "@/content/blog/typescript-naming-conventions";
import * as fileNaming from "@/content/blog/file-naming-conventions";
import * as gitBranchNaming from "@/content/blog/git-branch-naming-conventions";
import * as envVarNaming from "@/content/blog/environment-variable-naming-conventions";
// Batch 3 — conversion how-tos
import * as camelToSnakePy from "@/content/blog/camelcase-to-snake-case-python";
import * as camelToKebab from "@/content/blog/camelcase-to-kebab-case";
import * as snakeToCamelJs from "@/content/blog/snake-case-to-camelcase-javascript";
// Batch 3 — URL/SEO
import * as urlEncoding from "@/content/blog/url-encoding-explained";
import * as uppercaseVsLowercase from "@/content/blog/uppercase-vs-lowercase-seo";
import * as seoUrlLength from "@/content/blog/seo-url-length-best-practices";
import * as seoBlogUrls from "@/content/blog/how-to-create-seo-friendly-blog-urls";
import * as ecommerceUrl from "@/content/blog/url-structure-ecommerce-seo";
import * as trailingSlash from "@/content/blog/trailing-slash-seo";
import * as wwwVsNonWww from "@/content/blog/www-vs-non-www-seo";
import * as urlParams from "@/content/blog/url-parameters-seo-guide";
import * as canonicalUrl from "@/content/blog/canonical-url-explained";
import * as redirect301Vs302 from "@/content/blog/redirect-301-vs-302";
import * as hreflangTags from "@/content/blog/hreflang-tags-guide";
import * as subdomainVsSubdir from "@/content/blog/subdomain-vs-subdirectory-seo";
import * as searchEnginesCrawl from "@/content/blog/how-search-engines-crawl-urls";
import * as shopifyHandle from "@/content/blog/shopify-url-handle-guide";
import * as ghostBlogUrl from "@/content/blog/ghost-blog-url-structure";
import * as hugoSlugConfig from "@/content/blog/hugo-url-slug-configuration";
import * as nextjsDynamic from "@/content/blog/nextjs-dynamic-routes-slugs";
import * as multilingualUrl from "@/content/blog/multilingual-url-structure";
// Batch 3 — text processing
import * as removeHtmlTags from "@/content/blog/remove-html-tags-from-text";
import * as removeDupLines from "@/content/blog/how-to-remove-duplicate-lines";
import * as sortTextLines from "@/content/blog/sort-text-lines-online";
import * as removeExtraSpaces from "@/content/blog/remove-extra-spaces-from-text";
import * as zeroWidthChars from "@/content/blog/what-are-zero-width-characters";
import * as plainVsRichText from "@/content/blog/plain-text-vs-rich-text";
import * as unicodeNorm from "@/content/blog/unicode-normalization-explained";
import * as asciiVsUnicode from "@/content/blog/ascii-vs-unicode";
import * as utf8Encoding from "@/content/blog/what-is-utf8-encoding";
import * as regexCleaning from "@/content/blog/regex-for-text-cleaning";
// Batch 3 — JSON/API
import * as jsonFormatting from "@/content/blog/json-formatting-best-practices";
import * as convertJsonKeys from "@/content/blog/convert-json-keys-case";
import * as apiResponseNaming from "@/content/blog/api-response-naming-conventions";
import * as graphqlNaming from "@/content/blog/graphql-naming-conventions";
// Batch 3 — general dev
import * as cleanCodeNaming from "@/content/blog/clean-code-naming-principles";
import * as codeReadability from "@/content/blog/code-readability-tips";
import * as booleanNaming from "@/content/blog/boolean-naming-conventions";
import * as functionNaming from "@/content/blog/function-naming-conventions";
import * as namingCheatSheet from "@/content/blog/naming-conventions-cheat-sheet";
// Batch 3 — extra SEO/CMS
import * as wpPermalinks from "@/content/blog/wordpress-permalink-settings-guide";
import * as shopifySeo from "@/content/blog/shopify-seo-url-tips";
import * as wixSlug from "@/content/blog/wix-url-slug-optimization";
import * as squarespaceUrl from "@/content/blog/squarespace-url-structure";
import * as mediumVsSelfHosted from "@/content/blog/medium-vs-self-hosted-blog-seo";
import * as blogPostUrlTips from "@/content/blog/blog-post-url-structure-tips";
import * as anchorText from "@/content/blog/anchor-text-best-practices";
import * as internalLinking from "@/content/blog/internal-linking-strategy-seo";

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

// All post modules keyed by slug.
const localizedModules: Record<string, PostModule> = {
  [whatIsAUrlSlug.meta.slug]: whatIsAUrlSlug,
  [urlSlugBestPractices.meta.slug]: urlSlugBestPractices,
  [slugifyText.meta.slug]: slugifyText,
  [urlSlugVsPath.meta.slug]: urlSlugVsPath,
  [specialCharacters.meta.slug]: specialCharacters,
  [camelVsSnake.meta.slug]: camelVsSnake,
  [namingConventions.meta.slug]: namingConventions,
  [pythonPep8.meta.slug]: pythonPep8,
  [jsNaming.meta.slug]: jsNaming,
  [seoUrl.meta.slug]: seoUrl,
  [cssBem.meta.slug]: cssBem,
  [titleCaseRules.meta.slug]: titleCaseRules,
  [whatIsPermalink.meta.slug]: whatIsPermalink,
  [changeWpSlug.meta.slug]: changeWpSlug,
  [jsonKeyNaming.meta.slug]: jsonKeyNaming,
  // Batch 2
  [whatIsKebabCase.meta.slug]: whatIsKebabCase,
  [whatIsPascalCase.meta.slug]: whatIsPascalCase,
  [whatIsScreamingSnake.meta.slug]: whatIsScreamingSnake,
  [whatIsDotCase.meta.slug]: whatIsDotCase,
  [whatIsConstantCase.meta.slug]: whatIsConstantCase,
  [howToNameVars.meta.slug]: howToNameVars,
  [databaseNaming.meta.slug]: databaseNaming,
  [restApiNaming.meta.slug]: restApiNaming,
  [reactNaming.meta.slug]: reactNaming,
  [golangNaming.meta.slug]: golangNaming,
  [rubyNaming.meta.slug]: rubyNaming,
  [rustNaming.meta.slug]: rustNaming,
  [swiftNaming.meta.slug]: swiftNaming,
  [kotlinNaming.meta.slug]: kotlinNaming,
  [phpNaming.meta.slug]: phpNaming,
  [csharpNaming.meta.slug]: csharpNaming,
  [javaNaming.meta.slug]: javaNaming,
  [tsNaming.meta.slug]: tsNaming,
  [fileNaming.meta.slug]: fileNaming,
  [gitBranchNaming.meta.slug]: gitBranchNaming,
  [envVarNaming.meta.slug]: envVarNaming,
  // Batch 3 — conversion
  [camelToSnakePy.meta.slug]: camelToSnakePy,
  [camelToKebab.meta.slug]: camelToKebab,
  [snakeToCamelJs.meta.slug]: snakeToCamelJs,
  // Batch 3 — URL/SEO
  [urlEncoding.meta.slug]: urlEncoding,
  [uppercaseVsLowercase.meta.slug]: uppercaseVsLowercase,
  [seoUrlLength.meta.slug]: seoUrlLength,
  [seoBlogUrls.meta.slug]: seoBlogUrls,
  [ecommerceUrl.meta.slug]: ecommerceUrl,
  [trailingSlash.meta.slug]: trailingSlash,
  [wwwVsNonWww.meta.slug]: wwwVsNonWww,
  [urlParams.meta.slug]: urlParams,
  [canonicalUrl.meta.slug]: canonicalUrl,
  [redirect301Vs302.meta.slug]: redirect301Vs302,
  [hreflangTags.meta.slug]: hreflangTags,
  [subdomainVsSubdir.meta.slug]: subdomainVsSubdir,
  [searchEnginesCrawl.meta.slug]: searchEnginesCrawl,
  [shopifyHandle.meta.slug]: shopifyHandle,
  [ghostBlogUrl.meta.slug]: ghostBlogUrl,
  [hugoSlugConfig.meta.slug]: hugoSlugConfig,
  [nextjsDynamic.meta.slug]: nextjsDynamic,
  [multilingualUrl.meta.slug]: multilingualUrl,
  // Batch 3 — text processing
  [removeHtmlTags.meta.slug]: removeHtmlTags,
  [removeDupLines.meta.slug]: removeDupLines,
  [sortTextLines.meta.slug]: sortTextLines,
  [removeExtraSpaces.meta.slug]: removeExtraSpaces,
  [zeroWidthChars.meta.slug]: zeroWidthChars,
  [plainVsRichText.meta.slug]: plainVsRichText,
  [unicodeNorm.meta.slug]: unicodeNorm,
  [asciiVsUnicode.meta.slug]: asciiVsUnicode,
  [utf8Encoding.meta.slug]: utf8Encoding,
  [regexCleaning.meta.slug]: regexCleaning,
  // Batch 3 — JSON/API
  [jsonFormatting.meta.slug]: jsonFormatting,
  [convertJsonKeys.meta.slug]: convertJsonKeys,
  [apiResponseNaming.meta.slug]: apiResponseNaming,
  [graphqlNaming.meta.slug]: graphqlNaming,
  // Batch 3 — general dev
  [cleanCodeNaming.meta.slug]: cleanCodeNaming,
  [codeReadability.meta.slug]: codeReadability,
  [booleanNaming.meta.slug]: booleanNaming,
  [functionNaming.meta.slug]: functionNaming,
  [namingCheatSheet.meta.slug]: namingCheatSheet,
  // Batch 3 — extra SEO/CMS
  [wpPermalinks.meta.slug]: wpPermalinks,
  [shopifySeo.meta.slug]: shopifySeo,
  [wixSlug.meta.slug]: wixSlug,
  [squarespaceUrl.meta.slug]: squarespaceUrl,
  [mediumVsSelfHosted.meta.slug]: mediumVsSelfHosted,
  [blogPostUrlTips.meta.slug]: blogPostUrlTips,
  [anchorText.meta.slug]: anchorText,
  [internalLinking.meta.slug]: internalLinking,
};

// Build the canonical ordered list from all registered modules.
export const blogPosts: BlogPostMeta[] = Object.values(localizedModules)
  .map((m) => {
    const a = m.article.en;
    return {
      slug: m.meta.slug,
      title: a.title,
      description: a.description,
      date: m.meta.date,
      readTime: m.meta.readTime,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

// Localized listing metadata (title + description) with English fallback.
export function getBlogList(locale: Locale): BlogPostMeta[] {
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
