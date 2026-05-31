import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "url-encoding-explained", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "URL Encoding Explained: Percent-Encoding, UTF-8, and Special Characters",
    description: "Learn how URL encoding works, why spaces become %20, and how to handle Unicode characters in URLs.",
    body: `<p>URL encoding (percent-encoding) converts special characters into a format that can be transmitted over the internet. Spaces become <code>%20</code>, ampersands become <code>%26</code>, and non-ASCII characters are encoded as UTF-8 byte sequences.</p>
<h2>Why URLs Need Encoding</h2>
<p>URLs can only contain a limited set of characters (RFC 3986): letters, digits, and a few special characters (<code>-._~</code>). Everything else must be percent-encoded.</p>
<h2>Common Encodings</h2>
<table><thead><tr><th>Character</th><th>Encoded</th></tr></thead><tbody>
<tr><td>Space</td><td><code>%20</code> (or <code>+</code> in query strings)</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>Unicode in URLs</h2>
<p>Non-ASCII characters (like <code>café</code>) are first encoded as UTF-8, then each byte is percent-encoded: <code>caf%C3%A9</code>.</p>
<h2>In JavaScript</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>Generate Clean URLs</h2>
<p>Avoid encoding issues by using clean slugs. Our <a href="%SLUG%">URL slug generator</a> creates encoding-safe slugs automatically.</p>`,
  }),
  ja: build("ja", {
    title: "URLエンコーディング解説：パーセントエンコーディングとUTF-8",
    description: "URLエンコーディングの仕組み、%20の意味、Unicode文字の扱い方。",
    body: `<p>URLエンコーディング（パーセントエンコーディング）は特殊文字をURLで使える形式に変換します。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>で安全なスラッグを生成。</p>`,
  }),
  de: build("de", {
    title: "URL-Encoding erklärt: Prozent-Codierung, UTF-8 und Sonderzeichen",
    description: "Wie URL-Encoding funktioniert und warum Leerzeichen zu %20 werden.",
    body: `<p>URL-Encoding wandelt Sonderzeichen in ein internetfähiges Format um.</p><h2>Tool</h2><p><a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "URL Encoding explicado: Codificación porcentual, UTF-8 y caracteres especiales",
    description: "Cómo funciona la codificación URL y por qué los espacios se convierten en %20.",
    body: `<p>La codificación URL convierte caracteres especiales en un formato transmisible.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador de slugs URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "URL Encoding explicado: Codificação percentual, UTF-8 e caracteres especiais",
    description: "Como funciona a codificação URL e por que espaços viram %20.",
    body: `<p>A codificação URL converte caracteres especiais em um formato transmissível.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador de slugs URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "URL Encoding expliqué : Encodage pourcent, UTF-8 et caractères spéciaux",
    description: "Comment fonctionne l'encodage URL et pourquoi les espaces deviennent %20.",
    body: `<p>L'encodage URL convertit les caractères spéciaux en un format transmissible.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur de slugs URL</a>.</p>`,
  }),
};
