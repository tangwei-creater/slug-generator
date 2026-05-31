import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "camelcase-to-snake-case-python", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Convert camelCase to snake_case in Python",
    description: "Three ways to convert camelCase to snake_case in Python: regex, manual loop, and the inflection library.",
    body: `<p>Converting camelCase to snake_case is one of the most common string transformations in Python, especially when working with JavaScript APIs.</p>
<h2>Method 1: Regex</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>Method 2: Manual Loop</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>Method 3: inflection Library</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>Converting JSON Keys</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>Online Tool</h2>
<p>For quick conversions, use our <a href="%SNAKE%">snake_case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "PythonでcamelCaseをsnake_caseに変換する方法",
    description: "Pythonでのcamelからsnake変換：正規表現、手動ループ、inflectionライブラリ。",
    body: `<p>PythonでcamelCaseをsnake_caseに変換する3つの方法を紹介します。</p><pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()</code></pre><h2>変換</h2><p><a href="%SNAKE%">snake_caseコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "camelCase in snake_case umwandeln in Python",
    description: "Drei Methoden zur Konvertierung in Python.",
    body: `<p>camelCase zu snake_case in Python: Regex, Schleife oder inflection-Library.</p><h2>Konvertierung</h2><p><a href="%SNAKE%">snake_case-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir camelCase a snake_case en Python",
    description: "Tres métodos de conversión en Python.",
    body: `<p>camelCase a snake_case en Python: regex, bucle manual o librería inflection.</p><h2>Conversión</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter camelCase para snake_case em Python",
    description: "Três métodos de conversão em Python.",
    body: `<p>camelCase para snake_case em Python: regex, loop manual ou biblioteca inflection.</p><h2>Conversão</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir camelCase en snake_case en Python",
    description: "Trois méthodes de conversion en Python.",
    body: `<p>camelCase vers snake_case en Python : regex, boucle manuelle ou bibliothèque inflection.</p><h2>Conversion</h2><p><a href="%SNAKE%">Convertisseur snake_case</a>.</p>`,
  }),
};
