import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "internal-linking-strategy-seo", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Internal Linking Strategy for SEO: A Complete Guide",
    description: "Learn how to build an effective internal linking strategy that distributes link equity and improves crawlability.",
    body: `<p>Internal links are hyperlinks that point to other pages on the same website. They're one of the most underutilized SEO tools.</p><h2>Why Internal Links Matter</h2><ul><li>Distribute link equity (PageRank) across your site</li><li>Help Google discover and index new pages</li><li>Establish content hierarchy and topical relationships</li><li>Keep users engaged and reduce bounce rate</li></ul><h2>Strategy Framework</h2><ol><li><strong>Pillar and cluster:</strong> Create hub pages that link to related subtopic pages</li><li><strong>Contextual links:</strong> Link naturally within body content, not just navigation</li><li><strong>Descriptive anchor text:</strong> Use keyword-relevant text, not "click here"</li><li><strong>Reasonable quantity:</strong> 3-10 internal links per 1000 words</li><li><strong>Link to deep pages:</strong> Don't only link to your homepage and main pages</li><li><strong>Fix broken links:</strong> Audit regularly for 404s</li></ol><h2>Tools</h2><p>Generate clean URLs with our <a href="%SLUG%">URL slug generator</a>. Try our <a href="%HUB%">case converter hub</a> for formatting.</p>`,
  }),
  ja: build("ja", {
    title: "SEOのための内部リンク戦略：完全ガイド",
    description: "リンクエクイティを分配しクロール性を向上させる内部リンク戦略。",
    body: `<p>内部リンクは最も活用されていないSEOツールの一つ。リンクエクイティの分配とページ発見を助けます。</p>`,
  }),
  de: build("de", {
    title: "Interne Verlinkungsstrategie für SEO: Vollständiger Guide",
    description: "Effektive interne Verlinkung für SEO.",
    body: `<p>Interne Links verteilen Link-Equity und helfen Google beim Crawlen.</p>`,
  }),
  es: build("es", {
    title: "Estrategia de enlaces internos para SEO: Guía completa",
    description: "Enlaces internos efectivos para SEO.",
    body: `<p>Los enlaces internos distribuyen link equity y ayudan al rastreo de Google.</p>`,
  }),
  pt: build("pt", {
    title: "Estratégia de links internos para SEO: Guia completo",
    description: "Links internos eficazes para SEO.",
    body: `<p>Links internos distribuem link equity e ajudam o Google a rastrear.</p>`,
  }),
  fr: build("fr", {
    title: "Stratégie de maillage interne pour le SEO : Guide complet",
    description: "Liens internes efficaces pour le SEO.",
    body: `<p>Les liens internes distribuent le link equity et aident Google à crawler.</p>`,
  }),
};
