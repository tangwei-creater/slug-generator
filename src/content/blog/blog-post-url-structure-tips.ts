import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "blog-post-url-structure-tips", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Blog Post URL Structure: 7 Tips for Better Rankings",
    description: "Quick tips for structuring blog post URLs that rank higher in search results.",
    body: `<p>Seven actionable tips for blog post URLs:</p><ol><li><strong>Use /blog/ prefix:</strong> <code>/blog/post-slug</code> — clear content hierarchy</li><li><strong>Include your keyword:</strong> Target keyword in the slug</li><li><strong>Skip dates:</strong> No <code>/2026/05/</code> in URLs</li><li><strong>Remove stop words:</strong> "a", "the", "and", "of", "in"</li><li><strong>Keep it short:</strong> 3-5 words max</li><li><strong>Lowercase + hyphens:</strong> Never underscores or mixed case</li><li><strong>Set before publishing:</strong> Changing later means redirect management</li></ol><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ブログ記事URL構造：ランキング向上の7つのTips",
    description: "検索順位を上げるブログURLの7つのヒント。",
    body: `<p>ブログURLの7つのヒント：/blog/接頭辞、キーワード、日付なし、ストップワード除去、短く、小文字+ハイフン、公開前に設定。</p>`,
  }),
  de: build("de", {
    title: "Blog-URL-Struktur: 7 Tipps für bessere Rankings",
    description: "Schnelle Tipps für Blog-URLs.",
    body: `<p>Sieben Tipps: /blog/-Präfix, Keyword, keine Daten, kurz, Kleinbuchstaben + Bindestriche.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL de blog: 7 consejos para mejores rankings",
    description: "Consejos rápidos para URLs de blog.",
    body: `<p>Siete consejos: prefijo /blog/, keyword, sin fechas, corto, minúsculas + guiones.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL de blog: 7 dicas para melhores rankings",
    description: "Dicas rápidas para URLs de blog.",
    body: `<p>Sete dicas: prefixo /blog/, keyword, sem datas, curto, minúsculas + hífens.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL de blog : 7 conseils pour de meilleurs classements",
    description: "Conseils rapides pour les URLs de blog.",
    body: `<p>Sept conseils : préfixe /blog/, mot-clé, sans dates, court, minuscules + tirets.</p>`,
  }),
};
