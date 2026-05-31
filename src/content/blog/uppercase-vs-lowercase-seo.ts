import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "uppercase-vs-lowercase-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Uppercase vs Lowercase in URLs: Does Case Affect SEO?",
    description: "Learn whether URL case matters for SEO, how servers handle case sensitivity, and best practices for URL formatting.",
    body: `<p>Short answer: <strong>always use lowercase URLs</strong>. Here's why it matters.</p>
<h2>Are URLs Case-Sensitive?</h2>
<p>It depends on the server:</p>
<ul>
<li><strong>Linux servers (Apache, Nginx):</strong> Case-sensitive. <code>/About-Us</code> and <code>/about-us</code> are different pages.</li>
<li><strong>Windows servers (IIS):</strong> Case-insensitive. Both resolve to the same page.</li>
<li><strong>Most cloud platforms:</strong> Case-sensitive by default.</li>
</ul>
<h2>SEO Impact</h2>
<ul>
<li><strong>Duplicate content:</strong> If <code>/About</code> and <code>/about</code> both work, Google may index both as separate pages with duplicate content.</li>
<li><strong>Link equity split:</strong> Backlinks to different cases split your page authority.</li>
<li><strong>Crawl budget waste:</strong> Googlebot may crawl multiple case variants.</li>
</ul>
<h2>Best Practice</h2>
<p>Always use lowercase. Set up 301 redirects from uppercase variants to lowercase. In Nginx:</p>
<pre><code>if (\$uri ~ [A-Z]) {
  return 301 \$scheme://\$host\$uri_lowercase;
}</code></pre>
<h2>Generate Lowercase URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> always outputs lowercase, hyphen-separated slugs.</p>`,
  }),
  ja: build("ja", {
    title: "URLの大文字と小文字：ケースはSEOに影響するか？",
    description: "URLの大小文字がSEOに与える影響とベストプラクティス。",
    body: `<p>結論：<strong>常に小文字URLを使用</strong>。大小文字混在は重複コンテンツの原因になります。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Groß- vs Kleinschreibung in URLs: Beeinflusst die Schreibweise SEO?",
    description: "Ob URL-Groß-/Kleinschreibung SEO beeinflusst.",
    body: `<p>Immer Kleinbuchstaben verwenden. Gemischte Schreibung verursacht Duplicate Content.</p><h2>Tool</h2><p><a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Mayúsculas vs minúsculas en URLs: ¿Afecta al SEO?",
    description: "Si las mayúsculas en URLs afectan al SEO.",
    body: `<p>Siempre usar minúsculas. Mezclar causa contenido duplicado.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador de slugs</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Maiúsculas vs minúsculas em URLs: Afeta o SEO?",
    description: "Se maiúsculas em URLs afetam o SEO.",
    body: `<p>Sempre usar minúsculas. Misturar causa conteúdo duplicado.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador de slugs</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Majuscules vs minuscules dans les URLs : Impact sur le SEO ?",
    description: "Si la casse des URLs affecte le SEO.",
    body: `<p>Toujours utiliser des minuscules. Mélanger cause du contenu dupliqué.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur de slugs</a>.</p>`,
  }),
};
