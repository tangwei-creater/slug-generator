import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "nextjs-dynamic-routes-slugs", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Next.js Dynamic Routes and Slugs: A Developer Guide",
    description: "Learn how to use dynamic routes in Next.js for blog posts, products, and other slug-based pages.",
    body: `<p>Next.js uses file-system routing with bracket syntax for dynamic segments: <code>[slug]</code>.</p><h2>Basic Dynamic Route</h2><pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre><h2>Generate Static Params</h2><pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre><h2>Catch-All Routes</h2><p><code>[...slug]</code> matches <code>/a/b/c</code>. <code>[[...slug]]</code> also matches the root.</p><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> or <a href="%KEBAB%">kebab-case converter</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Next.jsダイナミックルートとスラッグ：開発者ガイド",
    description: "Next.jsでのダイナミックルート使用方法。",
    body: `<p>Next.jsはブラケット構文でダイナミックルートを使用：<code>[slug]</code>。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Next.js Dynamische Routen und Slugs: Entwickler-Guide",
    description: "Dynamische Routen in Next.js.",
    body: `<p>Next.js verwendet Bracket-Syntax für dynamische Segmente: [slug].</p>`,
  }),
  es: build("es", {
    title: "Rutas dinámicas y slugs en Next.js: Guía de desarrollo",
    description: "Rutas dinámicas en Next.js.",
    body: `<p>Next.js usa sintaxis de corchetes para segmentos dinámicos: [slug].</p>`,
  }),
  pt: build("pt", {
    title: "Rotas dinâmicas e slugs no Next.js: Guia do desenvolvedor",
    description: "Rotas dinâmicas no Next.js.",
    body: `<p>Next.js usa sintaxe de colchetes para segmentos dinâmicos: [slug].</p>`,
  }),
  fr: build("fr", {
    title: "Routes dynamiques et slugs Next.js : Guide développeur",
    description: "Routes dynamiques dans Next.js.",
    body: `<p>Next.js utilise la syntaxe entre crochets pour les segments dynamiques : [slug].</p>`,
  }),
};
