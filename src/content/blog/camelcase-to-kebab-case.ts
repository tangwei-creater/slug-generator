import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "camelcase-to-kebab-case", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Convert camelCase to kebab-case (JavaScript, Python, CLI)",
    description: "Code examples for converting camelCase to kebab-case in JavaScript, Python, and command line.",
    body: `<p>Converting camelCase to kebab-case is essential when transforming JavaScript identifiers into CSS class names, URL slugs, or CLI flags.</p>
<h2>JavaScript</h2>
<pre><code>function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '\$1-\$2').toLowerCase();
}
camelToKebab("backgroundColor"); // "background-color"</code></pre>
<h2>Python</h2>
<pre><code>import re
def camel_to_kebab(s):
    return re.sub(r'(?<=[a-z0-9])(?=[A-Z])', '-', s).lower()
camel_to_kebab("backgroundColor")  # "background-color"</code></pre>
<h2>CLI (sed)</h2>
<pre><code>echo "backgroundColor" | sed 's/\\([a-z]\\)\\([A-Z]\\)/\\1-\\2/g' | tr '[:upper:]' '[:lower:]'</code></pre>
<h2>Online Tool</h2>
<p>Use the <a href="%KEBAB%">kebab-case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "camelCaseをkebab-caseに変換する方法",
    description: "JavaScript、Python、CLIでの変換コード例。",
    body: `<p>camelCaseをkebab-caseに変換するコード例を紹介します。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-caseコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "camelCase in kebab-case umwandeln",
    description: "Codebeispiele für JavaScript, Python und CLI.",
    body: `<p>camelCase zu kebab-case Konvertierung in JavaScript, Python und CLI.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir camelCase a kebab-case",
    description: "Ejemplos de código en JavaScript, Python y CLI.",
    body: `<p>Conversión de camelCase a kebab-case en JavaScript, Python y CLI.</p><h2>Conversión</h2><p><a href="%KEBAB%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter camelCase para kebab-case",
    description: "Exemplos de código em JavaScript, Python e CLI.",
    body: `<p>Conversão de camelCase para kebab-case em JavaScript, Python e CLI.</p><h2>Conversão</h2><p><a href="%KEBAB%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir camelCase en kebab-case",
    description: "Exemples de code en JavaScript, Python et CLI.",
    body: `<p>Conversion de camelCase en kebab-case en JavaScript, Python et CLI.</p><h2>Conversion</h2><p><a href="%KEBAB%">Convertisseur</a>.</p>`,
  }),
};
