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
    title: "camelCaseをkebab-caseに変換する方法（JavaScript、Python、CLI）",
    description: "JavaScript、Python、コマンドラインでcamelCaseをkebab-caseに変換するコード例を紹介します。",
    body: `<p>camelCaseからkebab-caseへの変換は、JavaScriptの識別子をCSSクラス名、URLスラッグ、CLIフラグに変換する際に不可欠です。</p>
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
<h2>CLI（sed）</h2>
<pre><code>echo "backgroundColor" | sed 's/\\([a-z]\\)\\([A-Z]\\)/\\1-\\2/g' | tr '[:upper:]' '[:lower:]'</code></pre>
<h2>オンラインツール</h2>
<p><a href="%KEBAB%">kebab-caseコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "camelCase in kebab-case umwandeln (JavaScript, Python, CLI)",
    description: "Codebeispiele für die Konvertierung von camelCase zu kebab-case in JavaScript, Python und Befehlszeile.",
    body: `<p>Die Konvertierung von camelCase zu kebab-case ist unerlässlich, wenn JavaScript-Bezeichner in CSS-Klassennamen, URL-Slugs oder CLI-Flags umgewandelt werden.</p>
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
<h2>Online-Tool</h2>
<p>Verwenden Sie den <a href="%KEBAB%">kebab-case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir camelCase a kebab-case (JavaScript, Python, CLI)",
    description: "Ejemplos de código para convertir camelCase a kebab-case en JavaScript, Python y línea de comandos.",
    body: `<p>Convertir camelCase a kebab-case es esencial al transformar identificadores JavaScript en nombres de clases CSS, slugs de URL o flags de CLI.</p>
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
<h2>Herramienta online</h2>
<p>Usa el <a href="%KEBAB%">conversor kebab-case</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter camelCase para kebab-case (JavaScript, Python, CLI)",
    description: "Exemplos de código para converter camelCase para kebab-case em JavaScript, Python e linha de comando.",
    body: `<p>Converter camelCase para kebab-case é essencial ao transformar identificadores JavaScript em nomes de classes CSS, slugs de URL ou flags de CLI.</p>
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
<h2>Ferramenta online</h2>
<p>Use o <a href="%KEBAB%">conversor kebab-case</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir camelCase en kebab-case (JavaScript, Python, CLI)",
    description: "Exemples de code pour convertir camelCase en kebab-case en JavaScript, Python et ligne de commande.",
    body: `<p>Convertir camelCase en kebab-case est essentiel pour transformer des identifiants JavaScript en noms de classes CSS, slugs d'URL ou flags CLI.</p>
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
<h2>Outil en ligne</h2>
<p>Utilisez le <a href="%KEBAB%">convertisseur kebab-case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
