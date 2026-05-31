import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "www-vs-non-www-seo", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "www vs non-www: Which Is Better for SEO?",
    description: "Learn the difference between www and non-www URLs, how Google handles them, and which to choose for your site.",
    body: `<p>There is <strong>no SEO difference</strong> between <code>www.example.com</code> and <code>example.com</code>. What matters is picking one and redirecting the other.</p>
<h2>Why Choose One?</h2>
<p>If both versions are accessible, Google may index both — splitting your link equity and creating duplicate content.</p>
<h2>How to Fix</h2>
<ol>
<li>Pick your preferred version</li>
<li>301 redirect the other version</li>
<li>Set the preferred version in Google Search Console</li>
<li>Use consistent internal links</li>
</ol>
<h2>Technical Differences</h2>
<ul>
<li><strong>www:</strong> Can use CNAME records, easier for CDN/load balancer configuration</li>
<li><strong>non-www (naked domain):</strong> Shorter, cleaner look, must use A records</li>
</ul>
<p>Most modern sites choose non-www for brevity.</p>`,
  }),
  ja: build("ja", {
    title: "www vs 非www：SEOにはどちらが良い？",
    description: "wwwと非wwwの違い、Googleの扱い方、選び方。",
    body: `<p>SEO上の差はありません。一方を選び、もう一方を301リダイレクト。</p>`,
  }),
  de: build("de", {
    title: "www vs nicht-www: Was ist besser für SEO?",
    description: "Der Unterschied zwischen www und nicht-www URLs.",
    body: `<p>Kein SEO-Unterschied. Eines wählen, das andere 301-umleiten.</p>`,
  }),
  es: build("es", {
    title: "www vs sin www: ¿Cuál es mejor para SEO?",
    description: "La diferencia entre www y sin www.",
    body: `<p>Sin diferencia SEO. Elegir uno y redirigir 301 el otro.</p>`,
  }),
  pt: build("pt", {
    title: "www vs sem www: Qual é melhor para SEO?",
    description: "A diferença entre www e sem www.",
    body: `<p>Sem diferença SEO. Escolher um e redirecionar 301 o outro.</p>`,
  }),
  fr: build("fr", {
    title: "www vs sans www : Lequel est meilleur pour le SEO ?",
    description: "La différence entre www et sans www.",
    body: `<p>Pas de différence SEO. Choisir l'un et rediriger 301 l'autre.</p>`,
  }),
};
