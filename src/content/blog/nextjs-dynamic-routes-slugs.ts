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
    description: "Next.jsでブログ記事、商品ページなどスラッグベースのページにダイナミックルートを使用する方法を解説します。",
    body: `<p>Next.jsはファイルシステムルーティングとブラケット構文を使い、動的セグメントを定義します：<code>[slug]</code>。</p>
<h2>基本的なダイナミックルート</h2>
<pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre>
<h2>静的パラメータの生成</h2>
<pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre>
<h2>キャッチオールルート</h2>
<p><code>[...slug]</code>は<code>/a/b/c</code>にマッチします。<code>[[...slug]]</code>はルートパスにもマッチします。</p>
<h2>スラッグを生成</h2>
<p><a href="%SLUG%">URLスラッグジェネレーター</a>または<a href="%KEBAB%">ケバブケースコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Next.js Dynamische Routen und Slugs: Entwickler-Guide",
    description: "Erfahren Sie, wie Sie dynamische Routen in Next.js für Blogbeiträge, Produkte und andere slug-basierte Seiten nutzen.",
    body: `<p>Next.js verwendet Dateisystem-Routing mit Bracket-Syntax für dynamische Segmente: <code>[slug]</code>.</p>
<h2>Grundlegende dynamische Route</h2>
<pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre>
<h2>Statische Parameter generieren</h2>
<pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre>
<h2>Catch-All-Routen</h2>
<p><code>[...slug]</code> matcht <code>/a/b/c</code>. <code>[[...slug]]</code> matcht zusätzlich die Wurzel-Route.</p>
<h2>Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%SLUG%">URL-Slug-Generator</a> oder den <a href="%KEBAB%">Kebab-Case-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Rutas dinámicas y slugs en Next.js: Guía de desarrollo",
    description: "Aprende a usar rutas dinámicas en Next.js para posts de blog, productos y otras páginas basadas en slugs.",
    body: `<p>Next.js utiliza enrutamiento basado en el sistema de archivos con sintaxis de corchetes para segmentos dinámicos: <code>[slug]</code>.</p>
<h2>Ruta dinámica básica</h2>
<pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre>
<h2>Generar parámetros estáticos</h2>
<pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre>
<h2>Rutas catch-all</h2>
<p><code>[...slug]</code> coincide con <code>/a/b/c</code>. <code>[[...slug]]</code> también coincide con la raíz.</p>
<h2>Genera slugs</h2>
<p>Usa nuestro <a href="%SLUG%">generador de slugs URL</a> o el <a href="%KEBAB%">conversor a kebab-case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Rotas dinâmicas e slugs no Next.js: Guia do desenvolvedor",
    description: "Aprenda a usar rotas dinâmicas no Next.js para posts de blog, produtos e outras páginas baseadas em slugs.",
    body: `<p>O Next.js usa roteamento baseado no sistema de arquivos com sintaxe de colchetes para segmentos dinâmicos: <code>[slug]</code>.</p>
<h2>Rota dinâmica básica</h2>
<pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre>
<h2>Gerar parâmetros estáticos</h2>
<pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre>
<h2>Rotas catch-all</h2>
<p><code>[...slug]</code> corresponde a <code>/a/b/c</code>. <code>[[...slug]]</code> também corresponde à raiz.</p>
<h2>Gere slugs</h2>
<p>Use nosso <a href="%SLUG%">gerador de slugs URL</a> ou o <a href="%KEBAB%">conversor para kebab-case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Routes dynamiques et slugs Next.js : Guide développeur",
    description: "Apprenez à utiliser les routes dynamiques dans Next.js pour les articles de blog, produits et autres pages basées sur les slugs.",
    body: `<p>Next.js utilise le routage basé sur le système de fichiers avec la syntaxe entre crochets pour les segments dynamiques : <code>[slug]</code>.</p>
<h2>Route dynamique de base</h2>
<pre><code>// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;
}</code></pre>
<h2>Générer les paramètres statiques</h2>
<pre><code>export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}</code></pre>
<h2>Routes catch-all</h2>
<p><code>[...slug]</code> correspond à <code>/a/b/c</code>. <code>[[...slug]]</code> correspond également à la racine.</p>
<h2>Générez des slugs</h2>
<p>Utilisez notre <a href="%SLUG%">générateur de slugs URL</a> ou le <a href="%KEBAB%">convertisseur kebab-case</a>.</p>`,
  }),
};
