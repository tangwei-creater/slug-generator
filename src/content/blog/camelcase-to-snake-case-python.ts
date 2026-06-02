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
    description: "Pythonでcamelcaseをsnake_caseに変換する3つの方法：正規表現、手動ループ、inflectionライブラリを紹介します。",
    body: `<p>camelCaseからsnake_caseへの変換は、特にJavaScript APIを扱う際にPythonで最も一般的な文字列変換の一つです。</p>
<h2>方法1：正規表現</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>方法2：手動ループ</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>方法3：inflectionライブラリ</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>JSONキーの変換</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>オンラインツール</h2>
<p>手軽に変換するには<a href="%SNAKE%">snake_caseコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "camelCase in snake_case umwandeln in Python",
    description: "Drei Methoden zur Konvertierung von camelCase zu snake_case in Python: Regex, manuelle Schleife und die inflection-Bibliothek.",
    body: `<p>Die Konvertierung von camelCase zu snake_case ist eine der häufigsten String-Transformationen in Python, besonders bei der Arbeit mit JavaScript-APIs.</p>
<h2>Methode 1: Regex</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>Methode 2: Manuelle Schleife</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>Methode 3: inflection-Bibliothek</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>JSON-Schlüssel konvertieren</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>Online-Tool</h2>
<p>Für schnelle Konvertierungen verwenden Sie unseren <a href="%SNAKE%">snake_case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo convertir camelCase a snake_case en Python",
    description: "Tres formas de convertir camelCase a snake_case en Python: regex, bucle manual y la biblioteca inflection.",
    body: `<p>Convertir camelCase a snake_case es una de las transformaciones de cadenas más comunes en Python, especialmente al trabajar con APIs JavaScript.</p>
<h2>Método 1: Regex</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>Método 2: Bucle manual</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>Método 3: Biblioteca inflection</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>Convertir claves JSON</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>Herramienta online</h2>
<p>Para conversiones rápidas, usa nuestro <a href="%SNAKE%">conversor snake_case</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como converter camelCase para snake_case em Python",
    description: "Três formas de converter camelCase para snake_case em Python: regex, loop manual e a biblioteca inflection.",
    body: `<p>Converter camelCase para snake_case é uma das transformações de strings mais comuns em Python, especialmente ao trabalhar com APIs JavaScript.</p>
<h2>Método 1: Regex</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>Método 2: Loop manual</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>Método 3: Biblioteca inflection</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>Converter chaves JSON</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>Ferramenta online</h2>
<p>Para conversões rápidas, use o nosso <a href="%SNAKE%">conversor snake_case</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment convertir camelCase en snake_case en Python",
    description: "Trois façons de convertir camelCase en snake_case en Python : regex, boucle manuelle et la bibliothèque inflection.",
    body: `<p>Convertir camelCase en snake_case est l'une des transformations de chaînes les plus courantes en Python, surtout quand on travaille avec des APIs JavaScript.</p>
<h2>Méthode 1 : Regex</h2>
<pre><code>import re
def camel_to_snake(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()

print(camel_to_snake("getUserById"))  # get_user_by_id</code></pre>
<h2>Méthode 2 : Boucle manuelle</h2>
<pre><code>def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.append('_')
        result.append(char.lower())
    return ''.join(result)</code></pre>
<h2>Méthode 3 : Bibliothèque inflection</h2>
<pre><code>import inflection
inflection.underscore("getUserById")  # "get_user_by_id"</code></pre>
<h2>Convertir les clés JSON</h2>
<pre><code>def convert_keys(obj):
    if isinstance(obj, dict):
        return {camel_to_snake(k): convert_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_keys(i) for i in obj]
    return obj</code></pre>
<h2>Outil en ligne</h2>
<p>Pour des conversions rapides, utilisez notre <a href="%SNAKE%">convertisseur snake_case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
