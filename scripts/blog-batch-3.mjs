import { writeFileSync, existsSync } from "fs";
import { join } from "path";
const contentDir = join(import.meta.dirname, "../src/content/blog");
const locales = ["en","ja","de","es","pt","fr"];
function gen(post) {
  const filePath = join(contentDir, `${post.slug}.ts`);
  if (existsSync(filePath)) { console.log(`SKIP: ${post.slug}`); return; }
  const linkKeys = Object.keys(post.links || {});
  const replaceLines = linkKeys.length ? linkKeys.map(k => `    .replaceAll("${k}", p(l, "${post.links[k]}"))`).join("\n") : '    // no links';
  let entries = "";
  for (const loc of locales) {
    const a = post[loc];
    const eb = a.body.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$");
    entries += `  ${loc}: build("${loc}", {\n    title: "${a.title.replace(/"/g,'\\"')}",\n    description: "${a.description.replace(/"/g,'\\"')}",\n    body: \`${eb}\`,\n  }),\n`;
  }
  const c = `import type { Locale } from "@/i18n/routing";\n\nexport interface Article { title: string; description: string; body: string; }\n\nexport const meta = { slug: "${post.slug}", date: "${post.date}", readTime: ${post.readTime} };\n\nconst p = (l: Locale, path: string) => (l === "en" ? path : \`/\${l}\${path}\`);\nconst build = (l: Locale, t: Article): Article => ({\n  ...t,\n  body: t.body\n${replaceLines},\n});\n\nexport const article: Record<Locale, Article> = {\n${entries}};\n`;
  writeFileSync(filePath, c, "utf-8");
  console.log(`Created: ${post.slug}`);
}
const T = (title,description,body) => ({title,description,body});
const posts = [

// ─── CONVERSION HOW-TOS ───
{slug:"camelcase-to-snake-case-python",date:"2026-06-01",readTime:4,links:{"%SNAKE%":"/snake-case-converter","%CAMEL%":"/camelcase-converter","%HUB%":"/case-converter-online"},
en:T("How to Convert camelCase to snake_case in Python","Three ways to convert camelCase to snake_case in Python: regex, manual loop, and the inflection library.",
`<p>Converting camelCase to snake_case is one of the most common string transformations in Python, especially when working with JavaScript APIs.</p>
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
<p>For quick conversions, use our <a href="%SNAKE%">snake_case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`),
ja:T("PythonでcamelCaseをsnake_caseに変換する方法","Pythonでのcamelからsnake変換：正規表現、手動ループ、inflectionライブラリ。",`<p>PythonでcamelCaseをsnake_caseに変換する3つの方法を紹介します。</p><pre><code>import re\ndef camel_to_snake(name):\n    s1 = re.sub('(.)([A-Z][a-z]+)', r'\\1_\\2', name)\n    return re.sub('([a-z0-9])([A-Z])', r'\\1_\\2', s1).lower()</code></pre><h2>変換</h2><p><a href="%SNAKE%">snake_caseコンバーター</a>。</p>`),
de:T("camelCase in snake_case umwandeln in Python","Drei Methoden zur Konvertierung in Python.",`<p>camelCase zu snake_case in Python: Regex, Schleife oder inflection-Library.</p><h2>Konvertierung</h2><p><a href="%SNAKE%">snake_case-Konverter</a>.</p>`),
es:T("Cómo convertir camelCase a snake_case en Python","Tres métodos de conversión en Python.",`<p>camelCase a snake_case en Python: regex, bucle manual o librería inflection.</p><h2>Conversión</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`),
pt:T("Como converter camelCase para snake_case em Python","Três métodos de conversão em Python.",`<p>camelCase para snake_case em Python: regex, loop manual ou biblioteca inflection.</p><h2>Conversão</h2><p><a href="%SNAKE%">Conversor snake_case</a>.</p>`),
fr:T("Comment convertir camelCase en snake_case en Python","Trois méthodes de conversion en Python.",`<p>camelCase vers snake_case en Python : regex, boucle manuelle ou bibliothèque inflection.</p><h2>Conversion</h2><p><a href="%SNAKE%">Convertisseur snake_case</a>.</p>`),
},

{slug:"camelcase-to-kebab-case",date:"2026-06-01",readTime:4,links:{"%KEBAB%":"/kebab-case-converter","%CAMEL%":"/camelcase-converter","%HUB%":"/case-converter-online"},
en:T("How to Convert camelCase to kebab-case (JavaScript, Python, CLI)","Code examples for converting camelCase to kebab-case in JavaScript, Python, and command line.",
`<p>Converting camelCase to kebab-case is essential when transforming JavaScript identifiers into CSS class names, URL slugs, or CLI flags.</p>
<h2>JavaScript</h2>
<pre><code>function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
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
<p>Use the <a href="%KEBAB%">kebab-case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`),
ja:T("camelCaseをkebab-caseに変換する方法","JavaScript、Python、CLIでの変換コード例。",`<p>camelCaseをkebab-caseに変換するコード例を紹介します。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-caseコンバーター</a>。</p>`),
de:T("camelCase in kebab-case umwandeln","Codebeispiele für JavaScript, Python und CLI.",`<p>camelCase zu kebab-case Konvertierung in JavaScript, Python und CLI.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">Konverter</a>.</p>`),
es:T("Cómo convertir camelCase a kebab-case","Ejemplos de código en JavaScript, Python y CLI.",`<p>Conversión de camelCase a kebab-case en JavaScript, Python y CLI.</p><h2>Conversión</h2><p><a href="%KEBAB%">Conversor</a>.</p>`),
pt:T("Como converter camelCase para kebab-case","Exemplos de código em JavaScript, Python e CLI.",`<p>Conversão de camelCase para kebab-case em JavaScript, Python e CLI.</p><h2>Conversão</h2><p><a href="%KEBAB%">Conversor</a>.</p>`),
fr:T("Comment convertir camelCase en kebab-case","Exemples de code en JavaScript, Python et CLI.",`<p>Conversion de camelCase en kebab-case en JavaScript, Python et CLI.</p><h2>Conversion</h2><p><a href="%KEBAB%">Convertisseur</a>.</p>`),
},

{slug:"snake-case-to-camelcase-javascript",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("How to Convert snake_case to camelCase in JavaScript","Code examples for converting snake_case to camelCase in JavaScript and TypeScript, including JSON key conversion.",
`<p>Converting snake_case API responses to camelCase is one of the most common frontend tasks.</p>
<h2>Simple String Conversion</h2>
<pre><code>function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
snakeToCamel("user_first_name"); // "userFirstName"</code></pre>
<h2>Convert All JSON Keys</h2>
<pre><code>function camelizeKeys(obj) {
  if (Array.isArray(obj)) return obj.map(camelizeKeys);
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [snakeToCamel(k), camelizeKeys(v)])
    );
  }
  return obj;
}

const api = { user_name: "Alice", created_at: "2026-01-01" };
camelizeKeys(api); // { userName: "Alice", createdAt: "2026-01-01" }</code></pre>
<h2>Using Libraries</h2>
<p><code>humps</code>, <code>camelcase-keys</code>, and <code>change-case</code> are popular npm packages for this.</p>
<h2>Online Tool</h2>
<p>Use the <a href="%CAMEL%">camelCase converter</a> or <a href="%HUB%">case converter hub</a>.</p>`),
ja:T("JavaScriptでsnake_caseをcamelCaseに変換する方法","JavaScriptとTypeScriptでのsnake_caseからcamelCase変換コード例。",`<p>snake_case APIレスポンスをcamelCaseに変換するのはフロントエンドの一般的なタスクです。</p><h2>変換</h2><p><a href="%CAMEL%">camelCaseコンバーター</a>。</p>`),
de:T("snake_case in camelCase umwandeln in JavaScript","Codebeispiele für JavaScript und TypeScript.",`<p>snake_case zu camelCase Konvertierung in JavaScript.</p><h2>Konvertierung</h2><p><a href="%CAMEL%">Konverter</a>.</p>`),
es:T("Cómo convertir snake_case a camelCase en JavaScript","Ejemplos de código en JavaScript y TypeScript.",`<p>Conversión de snake_case a camelCase en JavaScript.</p><h2>Conversión</h2><p><a href="%CAMEL%">Conversor</a>.</p>`),
pt:T("Como converter snake_case para camelCase em JavaScript","Exemplos de código em JavaScript e TypeScript.",`<p>Conversão de snake_case para camelCase em JavaScript.</p><h2>Conversão</h2><p><a href="%CAMEL%">Conversor</a>.</p>`),
fr:T("Comment convertir snake_case en camelCase en JavaScript","Exemples de code en JavaScript et TypeScript.",`<p>Conversion de snake_case en camelCase en JavaScript.</p><h2>Conversion</h2><p><a href="%CAMEL%">Convertisseur</a>.</p>`),
},

// ─── URL/SEO ───
{slug:"url-encoding-explained",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator","%HUB%":"/case-converter-online"},
en:T("URL Encoding Explained: Percent-Encoding, UTF-8, and Special Characters","Learn how URL encoding works, why spaces become %20, and how to handle Unicode characters in URLs.",
`<p>URL encoding (percent-encoding) converts special characters into a format that can be transmitted over the internet. Spaces become <code>%20</code>, ampersands become <code>%26</code>, and non-ASCII characters are encoded as UTF-8 byte sequences.</p>
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
<p>Avoid encoding issues by using clean slugs. Our <a href="%SLUG%">URL slug generator</a> creates encoding-safe slugs automatically.</p>`),
ja:T("URLエンコーディング解説：パーセントエンコーディングとUTF-8","URLエンコーディングの仕組み、%20の意味、Unicode文字の扱い方。",`<p>URLエンコーディング（パーセントエンコーディング）は特殊文字をURLで使える形式に変換します。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>で安全なスラッグを生成。</p>`),
de:T("URL-Encoding erklärt: Prozent-Codierung, UTF-8 und Sonderzeichen","Wie URL-Encoding funktioniert und warum Leerzeichen zu %20 werden.",`<p>URL-Encoding wandelt Sonderzeichen in ein internetfähiges Format um.</p><h2>Tool</h2><p><a href="%SLUG%">URL-Slug-Generator</a>.</p>`),
es:T("URL Encoding explicado: Codificación porcentual, UTF-8 y caracteres especiales","Cómo funciona la codificación URL y por qué los espacios se convierten en %20.",`<p>La codificación URL convierte caracteres especiales en un formato transmisible.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador de slugs URL</a>.</p>`),
pt:T("URL Encoding explicado: Codificação percentual, UTF-8 e caracteres especiais","Como funciona a codificação URL e por que espaços viram %20.",`<p>A codificação URL converte caracteres especiais em um formato transmissível.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador de slugs URL</a>.</p>`),
fr:T("URL Encoding expliqué : Encodage pourcent, UTF-8 et caractères spéciaux","Comment fonctionne l'encodage URL et pourquoi les espaces deviennent %20.",`<p>L'encodage URL convertit les caractères spéciaux en un format transmissible.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur de slugs URL</a>.</p>`),
},

{slug:"uppercase-vs-lowercase-seo",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator","%HUB%":"/case-converter-online"},
en:T("Uppercase vs Lowercase in URLs: Does Case Affect SEO?","Learn whether URL case matters for SEO, how servers handle case sensitivity, and best practices for URL formatting.",
`<p>Short answer: <strong>always use lowercase URLs</strong>. Here's why it matters.</p>
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
<pre><code>if ($uri ~ [A-Z]) {
  return 301 $scheme://$host$uri_lowercase;
}</code></pre>
<h2>Generate Lowercase URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> always outputs lowercase, hyphen-separated slugs.</p>`),
ja:T("URLの大文字と小文字：ケースはSEOに影響するか？","URLの大小文字がSEOに与える影響とベストプラクティス。",`<p>結論：<strong>常に小文字URLを使用</strong>。大小文字混在は重複コンテンツの原因になります。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("Groß- vs Kleinschreibung in URLs: Beeinflusst die Schreibweise SEO?","Ob URL-Groß-/Kleinschreibung SEO beeinflusst.",`<p>Immer Kleinbuchstaben verwenden. Gemischte Schreibung verursacht Duplicate Content.</p><h2>Tool</h2><p><a href="%SLUG%">URL-Slug-Generator</a>.</p>`),
es:T("Mayúsculas vs minúsculas en URLs: ¿Afecta al SEO?","Si las mayúsculas en URLs afectan al SEO.",`<p>Siempre usar minúsculas. Mezclar causa contenido duplicado.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador de slugs</a>.</p>`),
pt:T("Maiúsculas vs minúsculas em URLs: Afeta o SEO?","Se maiúsculas em URLs afetam o SEO.",`<p>Sempre usar minúsculas. Misturar causa conteúdo duplicado.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador de slugs</a>.</p>`),
fr:T("Majuscules vs minuscules dans les URLs : Impact sur le SEO ?","Si la casse des URLs affecte le SEO.",`<p>Toujours utiliser des minuscules. Mélanger cause du contenu dupliqué.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur de slugs</a>.</p>`),
},

{slug:"seo-url-length-best-practices",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator","%BLOG%":"/blog-slug-generator"},
en:T("SEO URL Length: How Long Should Your URLs Be?","Learn the ideal URL length for SEO, what Google recommends, and how to keep URLs short without losing meaning.",
`<p>There's no hard limit on URL length, but shorter URLs consistently correlate with higher rankings.</p>
<h2>The Data</h2>
<ul>
<li>Google can index URLs up to ~2,000 characters, but truncates in SERPs around 60-70 characters</li>
<li>Backlinko study: URLs in position 1 average 17 characters shorter than position 10</li>
<li>Ahrefs: URLs with 1-2 path segments outperform deeper structures</li>
</ul>
<h2>Best Practices</h2>
<ul>
<li><strong>Slug length:</strong> 3-5 words, targeting your primary keyword</li>
<li><strong>Total URL:</strong> Under 75 characters including domain</li>
<li><strong>Path depth:</strong> Maximum 2-3 segments (<code>/blog/seo-tips</code> not <code>/blog/2026/05/category/seo-tips</code>)</li>
<li><strong>Remove stop words:</strong> "how-to-name-variables" not "how-to-properly-name-your-variables-in-code"</li>
</ul>
<h2>Generate Short Slugs</h2>
<p>Use our <a href="%SLUG%">URL slug generator</a> or <a href="%BLOG%">blog slug generator</a> to create concise, keyword-focused slugs.</p>`),
ja:T("SEO URL長さ：URLはどのくらいの長さがベスト？","SEOに最適なURL長さ、Googleの推奨、短いURLの作り方。",`<p>短いURLは一貫して高いランキングと相関します。スラッグは3-5語、合計75文字以内が目安。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("SEO URL-Länge: Wie lang sollten Ihre URLs sein?","Ideale URL-Länge für SEO und Best Practices.",`<p>Kürzere URLs korrelieren mit besseren Rankings. Slug: 3-5 Wörter, gesamt unter 75 Zeichen.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`),
es:T("Longitud de URL SEO: ¿Cuán largas deben ser tus URLs?","Longitud ideal de URL para SEO y mejores prácticas.",`<p>URLs más cortas correlacionan con mejores rankings. Slug: 3-5 palabras, total bajo 75 caracteres.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`),
pt:T("Comprimento de URL SEO: Qual o tamanho ideal?","Comprimento ideal de URL para SEO e melhores práticas.",`<p>URLs mais curtas correlacionam com melhores rankings. Slug: 3-5 palavras, total abaixo de 75 caracteres.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`),
fr:T("Longueur d'URL SEO : Quelle longueur pour vos URLs ?","Longueur idéale d'URL pour le SEO et bonnes pratiques.",`<p>Les URLs plus courtes corrèlent avec de meilleurs classements. Slug : 3-5 mots, total sous 75 caractères.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`),
},

{slug:"how-to-create-seo-friendly-blog-urls",date:"2026-06-01",readTime:5,links:{"%BLOG%":"/blog-slug-generator","%SLUG%":"/url-slug-generator","%WP%":"/wordpress-slug-generator"},
en:T("How to Create SEO-Friendly Blog URLs: A Step-by-Step Guide","Learn how to craft blog post URLs that rank. Covers keyword placement, slug formatting, and platform-specific tips.",
`<p>Your blog URL is one of the first things both Google and readers see. A well-crafted URL improves click-through rates and helps search engines understand your content.</p>
<h2>Step-by-Step Process</h2>
<ol>
<li><strong>Start with your target keyword:</strong> If targeting "python naming conventions," your slug should be <code>python-naming-conventions</code></li>
<li><strong>Remove stop words:</strong> "a", "the", "is", "to", "and" — unless they're part of the keyword</li>
<li><strong>Keep it under 5 words:</strong> <code>seo-url-best-practices</code> not <code>the-best-practices-for-seo-friendly-url-optimization</code></li>
<li><strong>Use hyphens:</strong> Never underscores, spaces, or camelCase in URLs</li>
<li><strong>All lowercase:</strong> Avoid <code>/Blog/My-Post</code> — use <code>/blog/my-post</code></li>
<li><strong>No dates:</strong> <code>/blog/seo-tips</code> not <code>/blog/2026/05/seo-tips</code></li>
</ol>
<h2>Before and After</h2>
<table><thead><tr><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td><code>/blog/the-complete-guide-to-naming-your-variables-in-programming</code></td><td><code>/blog/variable-naming-guide</code></td></tr>
<tr><td><code>/blog/2026/05/31/what-is-a-url-slug-and-why-does-it-matter</code></td><td><code>/blog/what-is-a-url-slug</code></td></tr>
<tr><td><code>/blog/post-id-83921</code></td><td><code>/blog/seo-friendly-urls</code></td></tr>
</tbody></table>
<h2>Generate Blog Slugs</h2>
<p>Use our <a href="%BLOG%">blog slug generator</a>, <a href="%WP%">WordPress slug generator</a>, or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("SEOに強いブログURLの作り方：ステップバイステップ","ランクインするブログ記事URLの作成方法。キーワード配置、フォーマット、プラットフォーム別のヒント。",`<p>ブログURLはGoogleと読者が最初に目にするものの一つです。</p><h2>ステップ</h2><ol><li>ターゲットキーワードから始める</li><li>ストップワードを除去</li><li>5語以内に</li><li>ハイフンを使用</li></ol><h2>ツール</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>。</p>`),
de:T("SEO-freundliche Blog-URLs erstellen: Schritt für Schritt","Wie man Blog-URLs erstellt, die ranken.",`<p>Eine gut gestaltete Blog-URL verbessert CTR und hilft Suchmaschinen.</p><h2>Tool</h2><p><a href="%BLOG%">Blog-Slug-Generator</a>.</p>`),
es:T("Cómo crear URLs de blog amigables para SEO: Guía paso a paso","Cómo crear URLs de blog que posicionen.",`<p>Una URL bien diseñada mejora el CTR y ayuda a los buscadores.</p><h2>Herramienta</h2><p><a href="%BLOG%">Generador de slugs de blog</a>.</p>`),
pt:T("Como criar URLs de blog amigáveis para SEO: Guia passo a passo","Como criar URLs de blog que ranqueiam.",`<p>Uma URL bem construída melhora o CTR e ajuda os buscadores.</p><h2>Ferramenta</h2><p><a href="%BLOG%">Gerador de slugs de blog</a>.</p>`),
fr:T("Comment créer des URLs de blog SEO-friendly : Guide étape par étape","Comment créer des URLs de blog qui se positionnent.",`<p>Une URL bien conçue améliore le CTR et aide les moteurs de recherche.</p><h2>Outil</h2><p><a href="%BLOG%">Générateur de slugs de blog</a>.</p>`),
},

{slug:"url-structure-ecommerce-seo",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator","%PRODUCT%":"/product-slug-generator"},
en:T("E-commerce URL Structure: SEO Best Practices for Online Stores","Learn how to structure product, category, and collection URLs for maximum SEO impact in e-commerce.",
`<p>URL structure in e-commerce directly impacts crawlability, indexation, and ranking. Get it right from the start.</p>
<h2>Recommended Structures</h2>
<table><thead><tr><th>Page Type</th><th>Recommended</th><th>Avoid</th></tr></thead><tbody>
<tr><td>Product</td><td><code>/product-name</code></td><td><code>/products/category/subcategory/product-name</code></td></tr>
<tr><td>Category</td><td><code>/category-name</code></td><td><code>/shop/all-categories/category-name</code></td></tr>
<tr><td>Subcategory</td><td><code>/category/subcategory</code></td><td><code>/shop/cat/subcat/subsubcat</code></td></tr>
<tr><td>Search results</td><td><code>/search?q=keyword</code></td><td>(index these with caution)</td></tr>
</tbody></table>
<h2>Key Principles</h2>
<ul>
<li><strong>Flat is better:</strong> <code>/blue-running-shoes</code> beats <code>/shoes/running/blue/nike-model-x</code></li>
<li><strong>Use descriptive slugs:</strong> <code>/wireless-bluetooth-headphones</code> not <code>/product-38291</code></li>
<li><strong>Avoid URL parameters for navigation:</strong> <code>?color=blue&size=10</code> creates crawl issues</li>
<li><strong>Canonical tags:</strong> Essential for products that appear in multiple categories</li>
</ul>
<h2>Generate Product Slugs</h2>
<p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("ECサイトURL構造：SEOベストプラクティス","商品、カテゴリ、コレクションのURL構造をSEOに最適化する方法。",`<p>ECサイトのURL構造はクロール性、インデックス、ランキングに直接影響します。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`),
de:T("E-Commerce URL-Struktur: SEO Best Practices","URL-Strukturen für Produkt-, Kategorie- und Sammlungsseiten.",`<p>URL-Struktur beeinflusst Crawling und Ranking direkt.</p><h2>Tool</h2><p><a href="%PRODUCT%">Produkt-Slug-Generator</a>.</p>`),
es:T("Estructura de URL para e-commerce: Mejores prácticas SEO","Cómo estructurar URLs de productos y categorías para SEO.",`<p>La estructura URL impacta directamente el rastreo y ranking.</p><h2>Herramienta</h2><p><a href="%PRODUCT%">Generador de slugs de producto</a>.</p>`),
pt:T("Estrutura de URL para e-commerce: Melhores práticas de SEO","Como estruturar URLs de produtos e categorias para SEO.",`<p>A estrutura de URL impacta diretamente o rastreamento e ranking.</p><h2>Ferramenta</h2><p><a href="%PRODUCT%">Gerador de slugs de produto</a>.</p>`),
fr:T("Structure d'URL e-commerce : Bonnes pratiques SEO","Comment structurer les URLs produits et catégories pour le SEO.",`<p>La structure d'URL impacte directement le crawl et le ranking.</p><h2>Outil</h2><p><a href="%PRODUCT%">Générateur de slugs produit</a>.</p>`),
},

{slug:"trailing-slash-seo",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("Trailing Slash in URLs: Does It Matter for SEO?","Learn whether a trailing slash affects SEO, how Google handles it, and how to configure your server correctly.",
`<p>The trailing slash debate: is <code>/about/</code> the same as <code>/about</code>? For SEO, consistency is what matters.</p>
<h2>How Google Treats Them</h2>
<p>Google treats <code>/page</code> and <code>/page/</code> as different URLs by default. If both return 200, Google may index both — creating duplicate content.</p>
<h2>Server Behavior</h2>
<table><thead><tr><th>Platform</th><th>Default</th></tr></thead><tbody>
<tr><td>Apache</td><td>Adds trailing slash to directories</td></tr>
<tr><td>Nginx</td><td>No trailing slash by default</td></tr>
<tr><td>Next.js</td><td>No trailing slash (configurable)</td></tr>
<tr><td>WordPress</td><td>Trailing slash on posts</td></tr>
<tr><td>Netlify</td><td>Adds trailing slash</td></tr>
</tbody></table>
<h2>Best Practice</h2>
<p>Pick one format and 301 redirect the other. Set canonical URLs. Most modern frameworks use <strong>no trailing slash</strong>.</p>
<h2>Generate Clean URLs</h2>
<p><a href="%SLUG%">URL slug generator</a> creates clean slugs without trailing slashes.</p>`),
ja:T("URLの末尾スラッシュ：SEOに影響するか？","末尾スラッシュがSEOに与える影響とサーバー設定方法。",`<p>末尾スラッシュの有無でGoogleは異なるURLとして扱います。一貫性が重要。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("Trailing Slash in URLs: Ist er SEO-relevant?","Ob ein abschließender Schrägstrich SEO beeinflusst.",`<p>Google behandelt /page und /page/ als verschiedene URLs. Konsistenz ist wichtig.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`),
es:T("Barra final en URLs: ¿Importa para SEO?","Si la barra final afecta al SEO.",`<p>Google trata /page y /page/ como URLs diferentes. La consistencia importa.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`),
pt:T("Barra final em URLs: Importa para SEO?","Se a barra final afeta o SEO.",`<p>Google trata /page e /page/ como URLs diferentes. Consistência importa.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`),
fr:T("Slash final dans les URLs : Impact sur le SEO ?","Si le slash final affecte le SEO.",`<p>Google traite /page et /page/ comme des URLs différentes. La cohérence compte.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`),
},

{slug:"www-vs-non-www-seo",date:"2026-06-01",readTime:3,links:{"%SLUG%":"/url-slug-generator"},
en:T("www vs non-www: Which Is Better for SEO?","Learn the difference between www and non-www URLs, how Google handles them, and which to choose for your site.",
`<p>There is <strong>no SEO difference</strong> between <code>www.example.com</code> and <code>example.com</code>. What matters is picking one and redirecting the other.</p>
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
<p>Most modern sites choose non-www for brevity.</p>`),
ja:T("www vs 非www：SEOにはどちらが良い？","wwwと非wwwの違い、Googleの扱い方、選び方。",`<p>SEO上の差はありません。一方を選び、もう一方を301リダイレクト。</p>`),
de:T("www vs nicht-www: Was ist besser für SEO?","Der Unterschied zwischen www und nicht-www URLs.",`<p>Kein SEO-Unterschied. Eines wählen, das andere 301-umleiten.</p>`),
es:T("www vs sin www: ¿Cuál es mejor para SEO?","La diferencia entre www y sin www.",`<p>Sin diferencia SEO. Elegir uno y redirigir 301 el otro.</p>`),
pt:T("www vs sem www: Qual é melhor para SEO?","A diferença entre www e sem www.",`<p>Sem diferença SEO. Escolher um e redirecionar 301 o outro.</p>`),
fr:T("www vs sans www : Lequel est meilleur pour le SEO ?","La différence entre www et sans www.",`<p>Pas de différence SEO. Choisir l'un et rediriger 301 l'autre.</p>`),
},

{slug:"url-parameters-seo-guide",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("URL Parameters and SEO: How to Avoid Crawl Waste","Learn how URL parameters affect SEO, cause crawl budget waste, and how to manage them correctly.",
`<p>URL parameters (<code>?sort=price&page=2&color=blue</code>) can cause serious SEO issues if not managed properly.</p>
<h2>Problems Parameters Cause</h2>
<ul>
<li><strong>Duplicate content:</strong> <code>/shoes</code> and <code>/shoes?sort=price</code> may have nearly identical content</li>
<li><strong>Crawl waste:</strong> Googlebot crawls every parameter combination</li>
<li><strong>Index bloat:</strong> Thousands of parameterized URLs clog your index</li>
<li><strong>Link equity dilution:</strong> Backlinks spread across parameter variants</li>
</ul>
<h2>Solutions</h2>
<ul>
<li>Use <strong>canonical tags</strong> pointing to the base URL</li>
<li>Set parameter handling in <strong>Google Search Console</strong></li>
<li>Use <strong>robots.txt</strong> to block parameter-heavy paths</li>
<li>Use clean URL paths instead of parameters when possible</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Our <a href="%SLUG%">URL slug generator</a> creates parameter-free slugs.</p>`),
ja:T("URLパラメータとSEO：クロール浪費を避ける方法","URLパラメータがSEOに与える影響と正しい管理方法。",`<p>URLパラメータは重複コンテンツやクロール浪費の原因になります。canonical tags、Search Console設定で対処。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("URL-Parameter und SEO: Crawl-Verschwendung vermeiden","Wie URL-Parameter SEO beeinflussen.",`<p>Parameter verursachen Duplicate Content und Crawl-Verschwendung.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`),
es:T("Parámetros URL y SEO: Cómo evitar desperdicio de rastreo","Cómo los parámetros URL afectan al SEO.",`<p>Los parámetros causan contenido duplicado y desperdicio de rastreo.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`),
pt:T("Parâmetros URL e SEO: Como evitar desperdício de rastreamento","Como parâmetros URL afetam o SEO.",`<p>Parâmetros causam conteúdo duplicado e desperdício de rastreamento.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`),
fr:T("Paramètres URL et SEO : Comment éviter le gaspillage de crawl","Comment les paramètres URL affectent le SEO.",`<p>Les paramètres causent du contenu dupliqué et du gaspillage de crawl.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`),
},

{slug:"canonical-url-explained",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("Canonical URLs Explained: What They Are and How to Use Them","Learn what canonical URLs are, why they matter for SEO, and how to implement rel=canonical correctly.",
`<p>A <strong>canonical URL</strong> tells search engines which version of a page is the "official" one when multiple URLs contain similar or identical content.</p>
<h2>When You Need Canonicals</h2>
<ul>
<li>Same product accessible via multiple category URLs</li>
<li>HTTP vs HTTPS, www vs non-www variants</li>
<li>URL parameter variations (<code>?sort=price</code>)</li>
<li>Pagination (<code>?page=2</code>)</li>
<li>Syndicated content on multiple domains</li>
</ul>
<h2>Implementation</h2>
<pre><code>&lt;link rel="canonical" href="https://example.com/preferred-url" /&gt;</code></pre>
<h2>Common Mistakes</h2>
<ul>
<li>Pointing canonical to a 404 page</li>
<li>Using relative URLs instead of absolute</li>
<li>Setting every page's canonical to the homepage</li>
<li>Conflicting canonical and hreflang tags</li>
</ul>
<h2>Generate Clean URLs</h2>
<p>Start with clean slugs using our <a href="%SLUG%">URL slug generator</a> to reduce the need for canonicals.</p>`),
ja:T("Canonical URL解説：定義と正しい使い方","canonical URLとは何か、SEOでの重要性、正しい実装方法。",`<p>canonical URLは複数のURLが似た内容を持つ時、「公式」バージョンを検索エンジンに伝えます。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("Canonical URLs erklärt: Was sie sind und wie man sie nutzt","Was Canonical URLs sind und wie man sie implementiert.",`<p>Canonical URLs teilen Suchmaschinen mit, welche Version einer Seite die offizielle ist.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`),
es:T("URLs canónicas explicadas: Qué son y cómo usarlas","Qué son las URLs canónicas y cómo implementarlas.",`<p>Las URLs canónicas indican a los buscadores cuál es la versión oficial de una página.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`),
pt:T("URLs canônicas explicadas: O que são e como usar","O que são URLs canônicas e como implementá-las.",`<p>URLs canônicas indicam aos buscadores qual é a versão oficial de uma página.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`),
fr:T("URLs canoniques expliquées : Définition et utilisation","Ce que sont les URLs canoniques et comment les implémenter.",`<p>Les URLs canoniques indiquent aux moteurs de recherche quelle version d'une page est officielle.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`),
},

{slug:"redirect-301-vs-302",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("301 vs 302 Redirect: When to Use Which (SEO Guide)","Learn the difference between 301 and 302 redirects, their SEO impact, and when to use each type.",
`<p>Choosing the wrong redirect type can silently damage your SEO. Here's the definitive guide.</p>
<h2>Quick Comparison</h2>
<table><thead><tr><th>Feature</th><th>301 (Permanent)</th><th>302 (Temporary)</th></tr></thead><tbody>
<tr><td>Meaning</td><td>Page permanently moved</td><td>Page temporarily moved</td></tr>
<tr><td>SEO equity transfer</td><td>Passes ~95-99% of link equity</td><td>May not pass link equity</td></tr>
<tr><td>Google indexing</td><td>Indexes the new URL</td><td>May keep indexing the old URL</td></tr>
<tr><td>Browser caching</td><td>Cached indefinitely</td><td>Not cached by default</td></tr>
</tbody></table>
<h2>When to Use 301</h2>
<ul>
<li>You changed a URL slug permanently</li>
<li>You moved a page to a new domain</li>
<li>You merged two pages into one</li>
<li>You switched from HTTP to HTTPS</li>
</ul>
<h2>When to Use 302</h2>
<ul>
<li>A/B testing different URLs</li>
<li>Temporary maintenance page</li>
<li>Geo-based redirects (showing different content by country)</li>
</ul>
<h2>Avoid Needing Redirects</h2>
<p>Set the right slug from the start with our <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("301 vs 302リダイレクト：使い分けガイド","301と302リダイレクトの違い、SEOへの影響、使い分け。",`<p>301は永続的移動でリンク評価を引き継ぎます。302は一時的移動。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("301 vs 302 Redirect: Wann welchen verwenden?","Unterschied zwischen 301 und 302 Redirects.",`<p>301 = permanent, überträgt Link-Equity. 302 = temporär.</p><h2>Tool</h2><p><a href="%SLUG%">Generator</a>.</p>`),
es:T("301 vs 302 Redirect: Cuándo usar cada uno","Diferencia entre redirecciones 301 y 302.",`<p>301 = permanente, transfiere link equity. 302 = temporal.</p><h2>Herramienta</h2><p><a href="%SLUG%">Generador</a>.</p>`),
pt:T("301 vs 302 Redirect: Quando usar cada um","Diferença entre redirecionamentos 301 e 302.",`<p>301 = permanente, transfere link equity. 302 = temporário.</p><h2>Ferramenta</h2><p><a href="%SLUG%">Gerador</a>.</p>`),
fr:T("301 vs 302 Redirect : Quand utiliser lequel ?","Différence entre redirections 301 et 302.",`<p>301 = permanent, transfère le link equity. 302 = temporaire.</p><h2>Outil</h2><p><a href="%SLUG%">Générateur</a>.</p>`),
},

// ─── Remaining SEO/CMS/Text/JSON/Dev articles (shorter) ───
{slug:"hreflang-tags-guide",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator"},
en:T("hreflang Tags: The Complete Guide to Multilingual SEO","Learn how to implement hreflang tags for multilingual websites. Covers syntax, common mistakes, and testing tools.",`<p>hreflang tags tell Google which language and regional version of a page to show to users. Essential for multilingual sites.</p><h2>Syntax</h2><pre><code>&lt;link rel="alternate" hreflang="en" href="https://example.com/page" /&gt;\n&lt;link rel="alternate" hreflang="ja" href="https://example.com/ja/page" /&gt;\n&lt;link rel="alternate" hreflang="x-default" href="https://example.com/page" /&gt;</code></pre><h2>Common Mistakes</h2><ul><li>Missing return links (hreflang must be bidirectional)</li><li>Wrong language codes</li><li>Missing x-default</li><li>Pointing to non-canonical URLs</li></ul><h2>Generate Multilingual URLs</h2><p><a href="%SLUG%">URL slug generator</a> for clean slugs across languages.</p>`),
ja:T("hreflangタグ：多言語SEO完全ガイド","多言語サイトのhreflangタグ実装方法。",`<p>hreflangタグはGoogleにページの言語・地域バージョンを伝えます。</p>`),
de:T("hreflang-Tags: Der vollständige Guide für mehrsprachiges SEO","hreflang-Tags für mehrsprachige Websites.",`<p>hreflang-Tags teilen Google mit, welche Sprach-/Regionalversion anzuzeigen ist.</p>`),
es:T("Etiquetas hreflang: Guía completa de SEO multilingüe","Implementación de etiquetas hreflang.",`<p>Las etiquetas hreflang indican a Google qué versión idiomática mostrar.</p>`),
pt:T("Tags hreflang: Guia completo de SEO multilíngue","Implementação de tags hreflang.",`<p>Tags hreflang indicam ao Google qual versão linguística mostrar.</p>`),
fr:T("Balises hreflang : Guide complet du SEO multilingue","Implémentation des balises hreflang.",`<p>Les balises hreflang indiquent à Google quelle version linguistique afficher.</p>`),
},

{slug:"subdomain-vs-subdirectory-seo",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("Subdomain vs Subdirectory: Which Is Better for SEO?","Compare subdomains and subdirectories for SEO. Learn when to use blog.example.com vs example.com/blog.",`<p>The subdomain vs subdirectory debate is one of the oldest in SEO. The consensus: <strong>subdirectories are better for most sites</strong>.</p><h2>Why Subdirectories Win</h2><ul><li>Inherit domain authority from the main site</li><li>Consolidate link equity under one domain</li><li>Simpler analytics and tracking</li><li>Easier to manage technically</li></ul><h2>When Subdomains Make Sense</h2><ul><li>Completely different applications (app.example.com)</li><li>Different tech stacks needing separate hosting</li><li>Enterprise organizations with separate teams</li></ul><p>Use <a href="%SLUG%">URL slug generator</a> for clean subdirectory URLs.</p>`),
ja:T("サブドメイン vs サブディレクトリ：SEOにはどちらが良い？","サブドメインとサブディレクトリのSEO比較。",`<p>ほとんどのサイトではサブディレクトリが有利。ドメインオーソリティを継承できます。</p>`),
de:T("Subdomain vs Unterverzeichnis: Was ist besser für SEO?","Subdomains und Unterverzeichnisse im SEO-Vergleich.",`<p>Unterverzeichnisse sind für die meisten Sites besser — sie erben die Domain-Authority.</p>`),
es:T("Subdominio vs subdirectorio: ¿Cuál es mejor para SEO?","Comparación de subdominios y subdirectorios para SEO.",`<p>Los subdirectorios son mejores para la mayoría — heredan la autoridad del dominio.</p>`),
pt:T("Subdomínio vs subdiretório: Qual é melhor para SEO?","Comparação de subdomínios e subdiretórios para SEO.",`<p>Subdiretórios são melhores para a maioria — herdam a autoridade do domínio.</p>`),
fr:T("Sous-domaine vs sous-répertoire : Lequel est meilleur pour le SEO ?","Comparaison sous-domaines et sous-répertoires pour le SEO.",`<p>Les sous-répertoires sont meilleurs pour la plupart — ils héritent de l'autorité du domaine.</p>`),
},

{slug:"how-search-engines-crawl-urls",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator"},
en:T("How Search Engines Crawl URLs: A Technical Overview","Learn how Googlebot discovers, crawls, and indexes URLs. Covers crawl budget, rendering, and URL discovery.",`<p>Understanding how search engines crawl your site helps you build URL structures that get indexed efficiently.</p><h2>The Crawl Process</h2><ol><li><strong>Discovery:</strong> Googlebot finds URLs through sitemaps, internal links, and external backlinks</li><li><strong>Crawling:</strong> Googlebot fetches the page content (HTML, CSS, JS)</li><li><strong>Rendering:</strong> JavaScript is executed to get the final DOM</li><li><strong>Indexing:</strong> Content is processed and added to the index</li></ol><h2>Crawl Budget</h2><p>Google allocates a crawl budget per site — the number of pages it will crawl in a given timeframe. Clean URL structures and proper sitemaps maximize your budget.</p><h2>Generate Clean URLs</h2><p>Use the <a href="%SLUG%">URL slug generator</a> for clean, crawlable URLs.</p>`),
ja:T("検索エンジンはURLをどうクロールするか：技術概要","GooglebotのURL発見、クロール、インデックスプロセスを解説。",`<p>検索エンジンのクロールプロセス：発見→クロール→レンダリング→インデックス。</p>`),
de:T("Wie Suchmaschinen URLs crawlen: Technischer Überblick","Wie Googlebot URLs entdeckt und indexiert.",`<p>Der Crawl-Prozess: Entdeckung → Crawling → Rendering → Indexierung.</p>`),
es:T("Cómo los motores de búsqueda rastrean URLs: Visión técnica","Cómo Googlebot descubre e indexa URLs.",`<p>El proceso de rastreo: descubrimiento → crawling → renderizado → indexación.</p>`),
pt:T("Como os mecanismos de busca rastreiam URLs: Visão técnica","Como o Googlebot descobre e indexa URLs.",`<p>O processo de rastreamento: descoberta → crawling → renderização → indexação.</p>`),
fr:T("Comment les moteurs de recherche crawlent les URLs : Vue technique","Comment Googlebot découvre et indexe les URLs.",`<p>Le processus de crawl : découverte → crawling → rendering → indexation.</p>`),
},

{slug:"shopify-url-handle-guide",date:"2026-06-01",readTime:4,links:{"%PRODUCT%":"/product-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("Shopify URL Handles: How to Optimize Product and Collection URLs","Learn how Shopify URL handles work, how to edit them, and SEO best practices for Shopify stores.",`<p>Shopify calls URL slugs "handles." They're auto-generated from titles but can be manually edited for better SEO.</p><h2>How to Edit</h2><ol><li>Go to Products → Select product</li><li>Scroll to "Search engine listing"</li><li>Click "Edit"</li><li>Change the URL handle</li><li>Save</li></ol><h2>Shopify URL Structure</h2><table><thead><tr><th>Page Type</th><th>URL Pattern</th></tr></thead><tbody><tr><td>Product</td><td><code>/products/handle</code></td></tr><tr><td>Collection</td><td><code>/collections/handle</code></td></tr><tr><td>Page</td><td><code>/pages/handle</code></td></tr><tr><td>Blog post</td><td><code>/blogs/blog-name/handle</code></td></tr></tbody></table><h2>Generate Handles</h2><p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("ShopifyのURLハンドル：商品URLの最適化ガイド","ShopifyのURLハンドルの仕組みと編集方法。",`<p>ShopifyではURLスラッグを「ハンドル」と呼びます。タイトルから自動生成されますが手動編集可能。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`),
de:T("Shopify URL-Handles: Produkt-URLs optimieren","Shopify URL-Handles und SEO-Optimierung.",`<p>Shopify nennt Slugs \"Handles\". Automatisch generiert, manuell bearbeitbar.</p><h2>Tool</h2><p><a href="%PRODUCT%">Generator</a>.</p>`),
es:T("Handles de URL en Shopify: Optimizar URLs de productos","Handles de URL de Shopify y optimización SEO.",`<p>Shopify llama a los slugs \"handles\". Se generan automáticamente pero son editables.</p><h2>Herramienta</h2><p><a href="%PRODUCT%">Generador</a>.</p>`),
pt:T("Handles de URL no Shopify: Otimizar URLs de produtos","Handles de URL do Shopify e otimização SEO.",`<p>Shopify chama os slugs de \"handles\". Gerados automaticamente mas editáveis.</p><h2>Ferramenta</h2><p><a href="%PRODUCT%">Gerador</a>.</p>`),
fr:T("Handles d'URL Shopify : Optimiser les URLs produits","Handles d'URL Shopify et optimisation SEO.",`<p>Shopify appelle les slugs \"handles\". Générés automatiquement mais modifiables.</p><h2>Outil</h2><p><a href="%PRODUCT%">Générateur</a>.</p>`),
},

{slug:"ghost-blog-url-structure",date:"2026-06-01",readTime:3,links:{"%BLOG%":"/blog-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("Ghost Blog URL Structure: Slugs, Routes, and SEO Settings","Learn how Ghost CMS handles URL slugs and routes, and how to optimize them for SEO.",`<p>Ghost uses clean, flat URL structures by default: <code>example.com/post-slug</code>. No dates, no categories in URLs.</p><h2>Editing Slugs</h2><p>In the Ghost editor, click the gear icon → change the "Post URL" field.</p><h2>Custom Routes</h2><p>Ghost's <code>routes.yaml</code> lets you create custom URL structures like <code>/blog/slug</code> or <code>/tutorials/slug</code>.</p><h2>Generate Slugs</h2><p>Use our <a href="%BLOG%">blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("Ghost BlogのURL構造：スラッグ、ルート、SEO設定","Ghost CMSのURLスラッグとルート設定。",`<p>GhostはデフォルトでクリーンなフラットURL構造を使用します。</p><h2>ツール</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>。</p>`),
de:T("Ghost Blog URL-Struktur: Slugs, Routes und SEO","Ghost CMS URL-Slugs und Routen.",`<p>Ghost verwendet standardmäßig saubere, flache URLs.</p><h2>Tool</h2><p><a href="%BLOG%">Generator</a>.</p>`),
es:T("Estructura de URL en Ghost: Slugs, rutas y SEO","URLs y rutas en Ghost CMS.",`<p>Ghost usa URLs limpias y planas por defecto.</p><h2>Herramienta</h2><p><a href="%BLOG%">Generador</a>.</p>`),
pt:T("Estrutura de URL no Ghost: Slugs, rotas e SEO","URLs e rotas no Ghost CMS.",`<p>Ghost usa URLs limpas e planas por padrão.</p><h2>Ferramenta</h2><p><a href="%BLOG%">Gerador</a>.</p>`),
fr:T("Structure d'URL Ghost : Slugs, routes et SEO","URLs et routes dans Ghost CMS.",`<p>Ghost utilise des URLs propres et plates par défaut.</p><h2>Outil</h2><p><a href="%BLOG%">Générateur</a>.</p>`),
},

{slug:"hugo-url-slug-configuration",date:"2026-06-01",readTime:3,links:{"%SLUG%":"/url-slug-generator"},
en:T("Hugo URL Slug Configuration: Permalinks and Front Matter","Learn how to configure URL slugs in Hugo using permalinks, front matter slug field, and URL management.",`<p>Hugo generates URLs from file names by default but offers extensive customization through config and front matter.</p><h2>Setting Slugs</h2><pre><code>---\ntitle: "My Blog Post"\nslug: "custom-slug"\n---</code></pre><h2>Permalink Templates</h2><pre><code># hugo.toml\n[permalinks]\n  posts = '/blog/:slug/'\n  pages = '/:slug/'</code></pre><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> for clean Hugo slugs.</p>`),
ja:T("HugoのURLスラッグ設定：パーマリンクとフロントマター","Hugoでのスラッグ設定方法。",`<p>Hugoはファイル名からURLを生成しますが、フロントマターとパーマリンク設定でカスタマイズ可能。</p>`),
de:T("Hugo URL-Slug-Konfiguration: Permalinks und Front Matter","Slug-Konfiguration in Hugo.",`<p>Hugo generiert URLs aus Dateinamen, anpassbar durch Config und Front Matter.</p>`),
es:T("Configuración de slugs URL en Hugo: Permalinks y Front Matter","Configuración de slugs en Hugo.",`<p>Hugo genera URLs de nombres de archivo, personalizable con config y front matter.</p>`),
pt:T("Configuração de slugs URL no Hugo: Permalinks e Front Matter","Configuração de slugs no Hugo.",`<p>Hugo gera URLs a partir de nomes de arquivo, personalizável com config e front matter.</p>`),
fr:T("Configuration des slugs URL dans Hugo : Permalinks et Front Matter","Configuration des slugs dans Hugo.",`<p>Hugo génère les URLs à partir des noms de fichiers, personnalisable via config et front matter.</p>`),
},

{slug:"nextjs-dynamic-routes-slugs",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator","%KEBAB%":"/kebab-case-converter"},
en:T("Next.js Dynamic Routes and Slugs: A Developer Guide","Learn how to use dynamic routes in Next.js for blog posts, products, and other slug-based pages.",`<p>Next.js uses file-system routing with bracket syntax for dynamic segments: <code>[slug]</code>.</p><h2>Basic Dynamic Route</h2><pre><code>// app/blog/[slug]/page.tsx\nexport default function BlogPost({ params }: { params: { slug: string } }) {\n  return &lt;h1&gt;{params.slug}&lt;/h1&gt;;\n}</code></pre><h2>Generate Static Params</h2><pre><code>export async function generateStaticParams() {\n  const posts = await getPosts();\n  return posts.map(post => ({ slug: post.slug }));\n}</code></pre><h2>Catch-All Routes</h2><p><code>[...slug]</code> matches <code>/a/b/c</code>. <code>[[...slug]]</code> also matches the root.</p><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> or <a href="%KEBAB%">kebab-case converter</a>.</p>`),
ja:T("Next.jsダイナミックルートとスラッグ：開発者ガイド","Next.jsでのダイナミックルート使用方法。",`<p>Next.jsはブラケット構文でダイナミックルートを使用：<code>[slug]</code>。</p><h2>ツール</h2><p><a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`),
de:T("Next.js Dynamische Routen und Slugs: Entwickler-Guide","Dynamische Routen in Next.js.",`<p>Next.js verwendet Bracket-Syntax für dynamische Segmente: [slug].</p>`),
es:T("Rutas dinámicas y slugs en Next.js: Guía de desarrollo","Rutas dinámicas en Next.js.",`<p>Next.js usa sintaxis de corchetes para segmentos dinámicos: [slug].</p>`),
pt:T("Rotas dinâmicas e slugs no Next.js: Guia do desenvolvedor","Rotas dinâmicas no Next.js.",`<p>Next.js usa sintaxe de colchetes para segmentos dinâmicos: [slug].</p>`),
fr:T("Routes dynamiques et slugs Next.js : Guide développeur","Routes dynamiques dans Next.js.",`<p>Next.js utilise la syntaxe entre crochets pour les segments dynamiques : [slug].</p>`),
},

{slug:"multilingual-url-structure",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator"},
en:T("Multilingual URL Structure: Subdirectory, Subdomain, or ccTLD?","Compare URL structures for multilingual websites: subdirectories, subdomains, and country-code domains.",`<p>Three approaches for multilingual URLs, each with different SEO implications.</p><h2>Comparison</h2><table><thead><tr><th>Approach</th><th>Example</th><th>SEO Impact</th></tr></thead><tbody><tr><td>Subdirectory</td><td><code>example.com/ja/</code></td><td>Best for most sites — consolidates authority</td></tr><tr><td>Subdomain</td><td><code>ja.example.com</code></td><td>Treated as separate site — dilutes authority</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Strong geo-targeting — expensive, complex</td></tr></tbody></table><h2>Recommendation</h2><p>Use <strong>subdirectories</strong> unless you have a strong reason for ccTLDs. Always implement hreflang tags regardless of structure.</p><p>Generate clean slugs with our <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("多言語URL構造：サブディレクトリ、サブドメイン、ccTLD？","多言語サイトのURL構造比較。",`<p>3つのアプローチ：サブディレクトリ（推奨）、サブドメイン、ccTLD。</p>`),
de:T("Mehrsprachige URL-Struktur: Unterverzeichnis, Subdomain oder ccTLD?","URL-Strukturen für mehrsprachige Websites.",`<p>Drei Ansätze: Unterverzeichnisse (empfohlen), Subdomains, ccTLDs.</p>`),
es:T("Estructura URL multilingüe: Subdirectorio, subdominio o ccTLD?","Estructuras URL para sitios multilingües.",`<p>Tres enfoques: subdirectorios (recomendado), subdominios, ccTLDs.</p>`),
pt:T("Estrutura URL multilíngue: Subdiretório, subdomínio ou ccTLD?","Estruturas URL para sites multilíngues.",`<p>Três abordagens: subdiretórios (recomendado), subdomínios, ccTLDs.</p>`),
fr:T("Structure URL multilingue : Sous-répertoire, sous-domaine ou ccTLD ?","Structures URL pour sites multilingues.",`<p>Trois approches : sous-répertoires (recommandé), sous-domaines, ccTLDs.</p>`),
},

// ─── Text Processing ───
{slug:"remove-html-tags-from-text",date:"2026-06-01",readTime:4,links:{"%CLEAN%":"/plain-text-converter","%HUB%":"/case-converter-online"},
en:T("How to Remove HTML Tags from Text (JavaScript, Python, Regex)","Code examples for stripping HTML tags from text in JavaScript, Python, and with regex. Plus an online tool.",`<p>Stripping HTML tags is one of the most common text processing tasks, whether you're cleaning CMS output, scraping websites, or preparing text for analysis.</p><h2>JavaScript</h2><pre><code>// DOM method (safest)\nfunction stripHtml(html) {\n  const doc = new DOMParser().parseFromString(html, 'text/html');\n  return doc.body.textContent || '';\n}\n\n// Regex method (simple)\nconst text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre><h2>Python</h2><pre><code>from html.parser import HTMLParser\nfrom io import StringIO\n\nclass MLStripper(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.fed = []\n    def handle_data(self, d):\n        self.fed.append(d)\n    def get_data(self):\n        return ''.join(self.fed)\n\ndef strip_tags(html):\n    s = MLStripper()\n    s.feed(html)\n    return s.get_data()\n\n# Or simply:\nimport re\nre.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip HTML instantly.</p>`),
ja:T("テキストからHTMLタグを除去する方法","JavaScript、Python、正規表現でHTMLタグを除去するコード例。",`<p>HTMLタグの除去は最も一般的なテキスト処理タスクの一つです。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`),
de:T("HTML-Tags aus Text entfernen (JavaScript, Python, Regex)","Codebeispiele zum Entfernen von HTML-Tags.",`<p>HTML-Tags entfernen ist eine der häufigsten Textverarbeitungsaufgaben.</p><h2>Tool</h2><p><a href="%CLEAN%">Plain-Text-Konverter</a>.</p>`),
es:T("Cómo eliminar etiquetas HTML del texto (JavaScript, Python, Regex)","Ejemplos de código para eliminar HTML.",`<p>Eliminar etiquetas HTML es una tarea de procesamiento de texto muy común.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor de texto plano</a>.</p>`),
pt:T("Como remover tags HTML do texto (JavaScript, Python, Regex)","Exemplos de código para remover HTML.",`<p>Remover tags HTML é uma das tarefas de processamento de texto mais comuns.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor de texto plano</a>.</p>`),
fr:T("Comment supprimer les balises HTML du texte (JavaScript, Python, Regex)","Exemples de code pour supprimer le HTML.",`<p>Supprimer les balises HTML est l'une des tâches de traitement de texte les plus courantes.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur texte brut</a>.</p>`),
},

{slug:"how-to-remove-duplicate-lines",date:"2026-06-01",readTime:3,links:{"%DEDUP%":"/duplicate-line-remover"},
en:T("How to Remove Duplicate Lines from Text (Online Tool + Code)","Remove duplicate lines from text files using our online tool, command line, Python, or JavaScript.",`<p>Duplicate lines waste space in logs, CSVs, and data exports. Here's how to remove them.</p><h2>Command Line</h2><pre><code># Sort and deduplicate\nsort input.txt | uniq > output.txt\n\n# Preserve original order (awk)\nawk '!seen[$0]++' input.txt > output.txt</code></pre><h2>Python</h2><pre><code>lines = open('input.txt').readlines()\nseen = set()\nresult = []\nfor line in lines:\n    if line not in seen:\n        seen.add(line)\n        result.append(line)</code></pre><h2>Online Tool</h2><p>Use our <a href="%DEDUP%">duplicate line remover</a> for instant deduplication.</p>`),
ja:T("テキストから重複行を削除する方法","オンラインツール、コマンドライン、Python、JavaScriptで重複行を削除。",`<p>重複行はログやCSVで無駄なスペースを占めます。</p><h2>ツール</h2><p><a href="%DEDUP%">重複行削除ツール</a>。</p>`),
de:T("Doppelte Zeilen aus Text entfernen","Online-Tool, Befehlszeile und Python.",`<p>Doppelte Zeilen verschwenden Platz in Logs und CSVs.</p><h2>Tool</h2><p><a href="%DEDUP%">Duplikat-Entferner</a>.</p>`),
es:T("Cómo eliminar líneas duplicadas del texto","Herramienta online, línea de comandos y Python.",`<p>Las líneas duplicadas desperdician espacio en logs y CSVs.</p><h2>Herramienta</h2><p><a href="%DEDUP%">Eliminador de duplicados</a>.</p>`),
pt:T("Como remover linhas duplicadas do texto","Ferramenta online, linha de comando e Python.",`<p>Linhas duplicadas desperdiçam espaço em logs e CSVs.</p><h2>Ferramenta</h2><p><a href="%DEDUP%">Removedor de duplicatas</a>.</p>`),
fr:T("Comment supprimer les lignes dupliquées du texte","Outil en ligne, ligne de commande et Python.",`<p>Les lignes dupliquées gaspillent de l'espace dans les logs et CSVs.</p><h2>Outil</h2><p><a href="%DEDUP%">Suppresseur de doublons</a>.</p>`),
},

{slug:"sort-text-lines-online",date:"2026-06-01",readTime:3,links:{"%SORT%":"/sort-lines-alphabetically"},
en:T("Sort Text Lines Online: Alphabetical, Reverse, and Natural Order","Sort text lines alphabetically, in reverse, or by natural order using our free online tool.",`<p>Sorting lines of text is useful for organizing lists, cleaning data, comparing files, and preparing content for analysis.</p><h2>Sort Types</h2><ul><li><strong>Alphabetical (A→Z):</strong> Standard dictionary order</li><li><strong>Reverse (Z→A):</strong> Descending order</li><li><strong>Natural sort:</strong> "item2" before "item10" (human-friendly)</li><li><strong>Case-insensitive:</strong> Ignores uppercase/lowercase differences</li></ul><h2>Command Line</h2><pre><code># Alphabetical\nsort file.txt\n\n# Reverse\nsort -r file.txt\n\n# Natural/version sort\nsort -V file.txt</code></pre><h2>Online Tool</h2><p>Use our <a href="%SORT%">sort lines tool</a> for instant sorting.</p>`),
ja:T("テキスト行をオンラインでソート：アルファベット順、逆順","オンラインツールでテキスト行を即座にソート。",`<p>テキスト行のソートはリスト整理やデータ準備に便利です。</p><h2>ツール</h2><p><a href="%SORT%">行ソートツール</a>。</p>`),
de:T("Textzeilen online sortieren: Alphabetisch, umgekehrt","Online-Tool zum Sortieren von Textzeilen.",`<p>Textzeilen sortieren für Listen und Daten.</p><h2>Tool</h2><p><a href="%SORT%">Zeilen-Sortierer</a>.</p>`),
es:T("Ordenar líneas de texto online: Alfabético, inverso","Herramienta online para ordenar líneas.",`<p>Ordenar líneas es útil para organizar listas y datos.</p><h2>Herramienta</h2><p><a href="%SORT%">Ordenador de líneas</a>.</p>`),
pt:T("Ordenar linhas de texto online: Alfabético, reverso","Ferramenta online para ordenar linhas.",`<p>Ordenar linhas é útil para organizar listas e dados.</p><h2>Ferramenta</h2><p><a href="%SORT%">Ordenador de linhas</a>.</p>`),
fr:T("Trier les lignes de texte en ligne : Alphabétique, inversé","Outil en ligne pour trier les lignes.",`<p>Trier les lignes est utile pour organiser listes et données.</p><h2>Outil</h2><p><a href="%SORT%">Trieur de lignes</a>.</p>`),
},

{slug:"remove-extra-spaces-from-text",date:"2026-06-01",readTime:3,links:{"%CLEAN%":"/plain-text-converter"},
en:T("How to Remove Extra Spaces from Text (Online Tool + Code)","Remove double spaces, leading/trailing whitespace, and extra blank lines from text.",`<p>Extra spaces creep into text from copy-paste, OCR, and word processors. Here's how to clean them.</p><h2>Regex</h2><pre><code>// Collapse multiple spaces to one\ntext.replace(/  +/g, ' ')\n\n// Trim each line\ntext.split('\\n').map(l => l.trim()).join('\\n')\n\n// Remove extra blank lines\ntext.replace(/\\n{3,}/g, '\\n\\n')</code></pre><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Collapse extra spaces" enabled.</p>`),
ja:T("テキストから余分なスペースを削除する方法","オンラインツールとコードで余分なスペースを削除。",`<p>余分なスペースはコピペやOCRで発生します。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`),
de:T("Extra-Leerzeichen aus Text entfernen","Online-Tool und Code zum Entfernen von Leerzeichen.",`<p>Überflüssige Leerzeichen entstehen durch Copy-Paste und OCR.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`),
es:T("Cómo eliminar espacios extra del texto","Herramienta online y código para eliminar espacios.",`<p>Los espacios extra aparecen por copiar-pegar y OCR.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
pt:T("Como remover espaços extras do texto","Ferramenta online e código para remover espaços.",`<p>Espaços extras surgem de copiar-colar e OCR.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
fr:T("Comment supprimer les espaces supplémentaires du texte","Outil en ligne et code pour supprimer les espaces.",`<p>Les espaces supplémentaires viennent du copier-coller et de l'OCR.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`),
},

{slug:"what-are-zero-width-characters",date:"2026-06-01",readTime:4,links:{"%CLEAN%":"/plain-text-converter"},
en:T("What Are Zero-Width Characters? How to Find and Remove Them","Learn about zero-width spaces, joiners, and other invisible Unicode characters that cause bugs in code and text.",`<p>Zero-width characters are invisible Unicode characters that take up no visible space but can cause serious issues in code, data processing, and text comparison.</p><h2>Common Zero-Width Characters</h2><table><thead><tr><th>Name</th><th>Unicode</th><th>Purpose</th></tr></thead><tbody><tr><td>Zero-Width Space (ZWSP)</td><td>U+200B</td><td>Optional line-break point</td></tr><tr><td>Zero-Width Non-Joiner</td><td>U+200C</td><td>Prevents ligatures</td></tr><tr><td>Zero-Width Joiner</td><td>U+200D</td><td>Creates ligatures/emoji combos</td></tr><tr><td>Soft Hyphen</td><td>U+00AD</td><td>Optional hyphenation point</td></tr><tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indicates encoding</td></tr></tbody></table><h2>Problems They Cause</h2><ul><li>String comparison fails: <code>"hello" !== "h\\u200Bello"</code></li><li>JSON parsing errors</li><li>Database unique constraint violations</li><li>Search/filter mismatches</li></ul><h2>Remove Them</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove zero-width characters" enabled.</p>`),
ja:T("ゼロ幅文字とは？見つけ方と削除方法","ゼロ幅スペースなど不可視Unicode文字がコードに与える問題と対処法。",`<p>ゼロ幅文字は目に見えないUnicode文字で、コードやデータ処理に問題を起こします。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`),
de:T("Was sind Zero-Width-Zeichen? Finden und Entfernen","Unsichtbare Unicode-Zeichen und ihre Probleme.",`<p>Zero-Width-Zeichen sind unsichtbare Unicode-Zeichen, die Probleme in Code und Daten verursachen.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`),
es:T("¿Qué son los caracteres de ancho cero? Cómo encontrarlos y eliminarlos","Caracteres Unicode invisibles y sus problemas.",`<p>Los caracteres de ancho cero son invisibles pero causan problemas en código y datos.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
pt:T("O que são caracteres de largura zero? Como encontrá-los e removê-los","Caracteres Unicode invisíveis e seus problemas.",`<p>Caracteres de largura zero são invisíveis mas causam problemas em código e dados.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
fr:T("Que sont les caractères de largeur nulle ? Comment les trouver et les supprimer","Caractères Unicode invisibles et leurs problèmes.",`<p>Les caractères de largeur nulle sont invisibles mais causent des problèmes dans le code et les données.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`),
},

{slug:"plain-text-vs-rich-text",date:"2026-06-01",readTime:3,links:{"%CLEAN%":"/plain-text-converter"},
en:T("Plain Text vs Rich Text: What's the Difference?","Understand the difference between plain text and rich text, when to use each, and how to convert between them.",`<p><strong>Plain text</strong> contains only characters — no formatting, fonts, or styling. <strong>Rich text</strong> includes formatting like bold, italic, colors, and links.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>Plain Text</th><th>Rich Text</th></tr></thead><tbody><tr><td>Formatting</td><td>None</td><td>Bold, italic, colors, fonts</td></tr><tr><td>File size</td><td>Smallest</td><td>Larger</td></tr><tr><td>Portability</td><td>Universal</td><td>Format-dependent</td></tr><tr><td>Examples</td><td>.txt, code files</td><td>.docx, .rtf, HTML</td></tr><tr><td>Best for</td><td>Code, data, logs</td><td>Documents, emails</td></tr></tbody></table><h2>Convert Rich to Plain</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip all formatting.</p>`),
ja:T("プレーンテキスト vs リッチテキスト：違いは？","プレーンテキストとリッチテキストの違いと使い分け。",`<p>プレーンテキストは文字のみ。リッチテキストは書式情報を含みます。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`),
de:T("Plain Text vs Rich Text: Was ist der Unterschied?","Unterschied zwischen Plain Text und Rich Text.",`<p>Plain Text: nur Zeichen. Rich Text: mit Formatierung.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`),
es:T("Texto plano vs texto enriquecido: ¿Cuál es la diferencia?","Diferencia entre texto plano y texto enriquecido.",`<p>Texto plano: solo caracteres. Texto enriquecido: con formato.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
pt:T("Texto simples vs texto rico: Qual a diferença?","Diferença entre texto simples e texto rico.",`<p>Texto simples: apenas caracteres. Texto rico: com formatação.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
fr:T("Texte brut vs texte riche : Quelle est la différence ?","Différence entre texte brut et texte riche.",`<p>Texte brut : uniquement des caractères. Texte riche : avec formatage.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`),
},

{slug:"unicode-normalization-explained",date:"2026-06-01",readTime:4,links:{"%CLEAN%":"/plain-text-converter"},
en:T("Unicode Normalization Explained: NFC, NFD, NFKC, NFKD","Learn what Unicode normalization forms are, why they matter, and how they affect text comparison and search.",`<p>The same text can have multiple Unicode representations. Normalization converts text to a standard form for reliable comparison.</p><h2>The Four Forms</h2><table><thead><tr><th>Form</th><th>Name</th><th>Use Case</th></tr></thead><tbody><tr><td>NFC</td><td>Composed</td><td>Most common — recommended for web and storage</td></tr><tr><td>NFD</td><td>Decomposed</td><td>Used by macOS file system</td></tr><tr><td>NFKC</td><td>Compatibility Composed</td><td>Search and matching</td></tr><tr><td>NFKD</td><td>Compatibility Decomposed</td><td>Stripping accents</td></tr></tbody></table><h2>Why It Matters</h2><p>"café" can be encoded as 4 characters (NFC: é as single code point) or 5 characters (NFD: e + combining accent). Without normalization, string comparison fails.</p><h2>Remove Accents</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove accents/diacritics" to normalize text.</p>`),
ja:T("Unicode正規化解説：NFC、NFD、NFKC、NFKD","Unicode正規化形式の違いとテキスト比較への影響。",`<p>同じテキストに複数のUnicode表現が存在します。正規化で統一的な比較が可能に。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`),
de:T("Unicode-Normalisierung erklärt: NFC, NFD, NFKC, NFKD","Unicode-Normalisierungsformen und ihre Bedeutung.",`<p>Gleicher Text kann verschiedene Unicode-Darstellungen haben. Normalisierung standardisiert sie.</p>`),
es:T("Normalización Unicode explicada: NFC, NFD, NFKC, NFKD","Formas de normalización Unicode y su importancia.",`<p>El mismo texto puede tener múltiples representaciones Unicode. La normalización las estandariza.</p>`),
pt:T("Normalização Unicode explicada: NFC, NFD, NFKC, NFKD","Formas de normalização Unicode e sua importância.",`<p>O mesmo texto pode ter múltiplas representações Unicode. A normalização as padroniza.</p>`),
fr:T("Normalisation Unicode expliquée : NFC, NFD, NFKC, NFKD","Formes de normalisation Unicode et leur importance.",`<p>Le même texte peut avoir plusieurs représentations Unicode. La normalisation les standardise.</p>`),
},

{slug:"ascii-vs-unicode",date:"2026-06-01",readTime:4,links:{"%CLEAN%":"/plain-text-converter"},
en:T("ASCII vs Unicode: What's the Difference?","Understand the difference between ASCII and Unicode, why Unicode replaced ASCII, and how they work together.",`<p>ASCII and Unicode are character encoding standards. ASCII came first and handles English; Unicode handles every language on Earth.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Characters</td><td>128 (7-bit)</td><td>149,000+ (21-bit)</td></tr><tr><td>Languages</td><td>English only</td><td>All languages</td></tr><tr><td>Emojis</td><td>No</td><td>Yes</td></tr><tr><td>Encoding</td><td>Single byte</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibility</td><td>Subset of Unicode</td><td>Superset of ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 is the dominant Unicode encoding. It's backwards-compatible with ASCII — the first 128 characters are identical.</p><h2>Clean Your Text</h2><p>Remove non-ASCII characters with our <a href="%CLEAN%">plain text converter</a>.</p>`),
ja:T("ASCII vs Unicode：違いは何？","ASCIIとUnicodeの違い、UnicodeがASCIIを置き換えた理由。",`<p>ASCIIは英語128文字。Unicodeは全言語14万9000文字以上をカバー。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`),
de:T("ASCII vs Unicode: Was ist der Unterschied?","Unterschied zwischen ASCII und Unicode.",`<p>ASCII: 128 Zeichen (Englisch). Unicode: 149.000+ Zeichen (alle Sprachen).</p>`),
es:T("ASCII vs Unicode: ¿Cuál es la diferencia?","Diferencia entre ASCII y Unicode.",`<p>ASCII: 128 caracteres (inglés). Unicode: 149.000+ caracteres (todos los idiomas).</p>`),
pt:T("ASCII vs Unicode: Qual a diferença?","Diferença entre ASCII e Unicode.",`<p>ASCII: 128 caracteres (inglês). Unicode: 149.000+ caracteres (todas as línguas).</p>`),
fr:T("ASCII vs Unicode : Quelle est la différence ?","Différence entre ASCII et Unicode.",`<p>ASCII : 128 caractères (anglais). Unicode : 149 000+ caractères (toutes les langues).</p>`),
},

{slug:"what-is-utf8-encoding",date:"2026-06-01",readTime:4,links:{"%CLEAN%":"/plain-text-converter"},
en:T("What Is UTF-8 Encoding? A Developer's Guide","Learn what UTF-8 is, how it works, why it's the dominant web encoding, and how to handle encoding issues.",`<p>UTF-8 is a variable-length character encoding that can represent every Unicode character. It's used by 98%+ of all websites.</p><h2>How UTF-8 Works</h2><table><thead><tr><th>Character Range</th><th>Bytes</th><th>Example</th></tr></thead><tbody><tr><td>U+0000 to U+007F (ASCII)</td><td>1 byte</td><td>A = 0x41</td></tr><tr><td>U+0080 to U+07FF</td><td>2 bytes</td><td>é = 0xC3 0xA9</td></tr><tr><td>U+0800 to U+FFFF</td><td>3 bytes</td><td>中 = 0xE4 0xB8 0xAD</td></tr><tr><td>U+10000 to U+10FFFF</td><td>4 bytes</td><td>emoji</td></tr></tbody></table><h2>Common Issues</h2><ul><li>"Mojibake" — garbled text from wrong encoding detection</li><li>Database encoding mismatch</li><li>BOM (Byte Order Mark) in files</li></ul><h2>Clean Encoding Issues</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip problematic characters.</p>`),
ja:T("UTF-8エンコーディングとは？開発者ガイド","UTF-8の仕組み、Web標準エンコーディングとしての地位、エンコーディング問題の対処法。",`<p>UTF-8はすべてのUnicode文字を表現できる可変長エンコーディングです。Webサイトの98%以上が使用。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`),
de:T("Was ist UTF-8-Encoding? Ein Entwickler-Guide","Wie UTF-8 funktioniert und warum es dominiert.",`<p>UTF-8 ist eine variable Zeichenkodierung für alle Unicode-Zeichen. 98%+ aller Websites nutzen es.</p>`),
es:T("¿Qué es la codificación UTF-8? Guía para desarrolladores","Cómo funciona UTF-8 y por qué domina.",`<p>UTF-8 es una codificación de longitud variable para todos los caracteres Unicode. 98%+ de los sitios web la usan.</p>`),
pt:T("O que é codificação UTF-8? Guia para desenvolvedores","Como funciona UTF-8 e por que domina.",`<p>UTF-8 é uma codificação de comprimento variável para todos os caracteres Unicode. 98%+ dos sites a usam.</p>`),
fr:T("Qu'est-ce que l'encodage UTF-8 ? Guide développeur","Comment fonctionne UTF-8 et pourquoi il domine.",`<p>UTF-8 est un encodage à longueur variable pour tous les caractères Unicode. 98%+ des sites web l'utilisent.</p>`),
},

{slug:"regex-for-text-cleaning",date:"2026-06-01",readTime:5,links:{"%CLEAN%":"/plain-text-converter","%HUB%":"/case-converter-online"},
en:T("Regex for Text Cleaning: 15 Essential Patterns","The most useful regular expressions for cleaning text data: whitespace, HTML, URLs, emails, special characters, and more.",`<p>Regular expressions are the Swiss Army knife of text cleaning. Here are the 15 patterns every developer should know.</p><h2>Essential Patterns</h2><table><thead><tr><th>Task</th><th>Regex</th></tr></thead><tbody><tr><td>Strip HTML tags</td><td><code>&lt;[^&gt;]*&gt;</code></td></tr><tr><td>Collapse whitespace</td><td><code>\\s+</code> → <code> </code></td></tr><tr><td>Remove URLs</td><td><code>https?://\\S+</code></td></tr><tr><td>Remove emails</td><td><code>[\\w.+-]+@[\\w-]+\\.[\\w.-]+</code></td></tr><tr><td>Remove numbers</td><td><code>\\d+</code></td></tr><tr><td>Remove non-ASCII</td><td><code>[^\\x00-\\x7F]</code></td></tr><tr><td>Remove punctuation</td><td><code>[^\\w\\s]</code></td></tr><tr><td>Trim each line</td><td><code>^\\s+|\\s+$</code> (multiline)</td></tr><tr><td>Remove blank lines</td><td><code>^\\s*$\\n</code> (multiline)</td></tr><tr><td>Remove duplicate spaces</td><td><code> {2,}</code> → <code> </code></td></tr></tbody></table><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> — it applies these patterns with toggleable options, no regex knowledge needed.</p>`),
ja:T("テキストクリーニングのための正規表現：必須15パターン","テキストデータクリーニングに最も役立つ正規表現パターン集。",`<p>正規表現はテキストクリーニングの万能ツールです。15の必須パターンを紹介。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`),
de:T("Regex für Textbereinigung: 15 essentielle Muster","Die nützlichsten regulären Ausdrücke für Textbereinigung.",`<p>Reguläre Ausdrücke sind das Schweizer Taschenmesser der Textbereinigung.</p><h2>Tool</h2><p><a href="%CLEAN%">Konverter</a>.</p>`),
es:T("Regex para limpieza de texto: 15 patrones esenciales","Las expresiones regulares más útiles para limpiar texto.",`<p>Las expresiones regulares son la navaja suiza de la limpieza de texto.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
pt:T("Regex para limpeza de texto: 15 padrões essenciais","As expressões regulares mais úteis para limpar texto.",`<p>Expressões regulares são o canivete suíço da limpeza de texto.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor</a>.</p>`),
fr:T("Regex pour nettoyage de texte : 15 modèles essentiels","Les expressions régulières les plus utiles pour nettoyer du texte.",`<p>Les expressions régulières sont le couteau suisse du nettoyage de texte.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur</a>.</p>`),
},

// ─── JSON/API ───
{slug:"json-formatting-best-practices",date:"2026-06-01",readTime:4,links:{"%JSON_CAMEL%":"/json-keys-to-camelcase","%JSON_SNAKE%":"/json-keys-to-snake-case","%HUB%":"/case-converter-online"},
en:T("JSON Formatting Best Practices: Structure, Naming, and Style","Learn JSON formatting best practices for readable, consistent, and well-structured API responses.",`<p>Well-formatted JSON is easier to read, debug, and maintain. These best practices apply to API responses, config files, and data storage.</p><h2>Naming</h2><ul><li>Use consistent case (camelCase or snake_case)</li><li>Be descriptive: <code>createdAt</code> not <code>ca</code></li><li>Use plural for arrays: <code>"items"</code> not <code>"item"</code></li></ul><h2>Structure</h2><ul><li>Avoid nesting deeper than 3 levels</li><li>Use arrays for ordered collections, objects for key-value data</li><li>Include <code>null</code> for missing optional fields (don't omit them)</li></ul><h2>Convert Keys</h2><p>Use our <a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a>.</p>`),
ja:T("JSONフォーマットのベストプラクティス","読みやすく一貫性のあるJSON構造のベストプラクティス。",`<p>整形されたJSONは読みやすく、デバッグしやすい。命名規則の統一が重要。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに</a>。</p>`),
de:T("JSON-Formatierung: Best Practices","Best Practices für lesbare JSON-Strukturen.",`<p>Gut formatiertes JSON ist leichter zu lesen und zu debuggen.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">JSON-Keys konvertieren</a>.</p>`),
es:T("Mejores prácticas de formato JSON","Best practices para JSON legible y consistente.",`<p>JSON bien formateado es más fácil de leer y depurar.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Convertir claves JSON</a>.</p>`),
pt:T("Melhores práticas de formatação JSON","Best practices para JSON legível e consistente.",`<p>JSON bem formatado é mais fácil de ler e depurar.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Converter chaves JSON</a>.</p>`),
fr:T("Bonnes pratiques de formatage JSON","Best practices pour un JSON lisible et cohérent.",`<p>Un JSON bien formaté est plus facile à lire et déboguer.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertir les clés JSON</a>.</p>`),
},

{slug:"convert-json-keys-case",date:"2026-06-01",readTime:4,links:{"%JSON_CAMEL%":"/json-keys-to-camelcase","%JSON_SNAKE%":"/json-keys-to-snake-case","%HUB%":"/case-converter-online"},
en:T("How to Convert JSON Keys Between camelCase and snake_case","Code examples and tools for converting JSON object keys between camelCase and snake_case in JavaScript and Python.",`<p>Converting JSON keys between naming conventions is essential when your frontend and backend use different styles.</p><h2>JavaScript: snake_case → camelCase</h2><pre><code>function camelizeKeys(obj) {\n  if (Array.isArray(obj)) return obj.map(camelizeKeys);\n  if (obj && typeof obj === 'object') {\n    return Object.fromEntries(\n      Object.entries(obj).map(([k, v]) => [\n        k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),\n        camelizeKeys(v)\n      ])\n    );\n  }\n  return obj;\n}</code></pre><h2>Python: camelCase → snake_case</h2><pre><code>import re\ndef snake_keys(obj):\n    if isinstance(obj, dict):\n        return {re.sub(r'(?<=[a-z])(?=[A-Z])', '_', k).lower(): snake_keys(v) for k, v in obj.items()}\n    if isinstance(obj, list):\n        return [snake_keys(i) for i in obj]\n    return obj</code></pre><h2>Online Tools</h2><p><a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a>.</p>`),
ja:T("JSONキーのcamelCase/snake_case変換方法","JavaScriptとPythonでのJSONキー変換コード例。",`<p>フロントエンドとバックエンドで異なる命名規則を使う場合、JSONキーの変換が必要です。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">camelCaseに変換</a>、<a href="%JSON_SNAKE%">snake_caseに変換</a>。</p>`),
de:T("JSON-Keys zwischen camelCase und snake_case konvertieren","Codebeispiele für die JSON-Key-Konvertierung.",`<p>JSON-Key-Konvertierung zwischen Frontend und Backend Konventionen.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">Konvertieren</a>.</p>`),
es:T("Cómo convertir claves JSON entre camelCase y snake_case","Ejemplos de código para la conversión de claves JSON.",`<p>Conversión de claves JSON entre convenciones de frontend y backend.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Convertir</a>.</p>`),
pt:T("Como converter chaves JSON entre camelCase e snake_case","Exemplos de código para conversão de chaves JSON.",`<p>Conversão de chaves JSON entre convenções de frontend e backend.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Converter</a>.</p>`),
fr:T("Comment convertir les clés JSON entre camelCase et snake_case","Exemples de code pour la conversion de clés JSON.",`<p>Conversion de clés JSON entre conventions frontend et backend.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertir</a>.</p>`),
},

{slug:"api-response-naming-conventions",date:"2026-06-01",readTime:4,links:{"%JSON_CAMEL%":"/json-keys-to-camelcase","%JSON_SNAKE%":"/json-keys-to-snake-case","%HUB%":"/case-converter-online"},
en:T("API Response Naming Conventions: A Comprehensive Guide","Learn how to name fields in API responses consistently. Covers timestamps, IDs, booleans, enums, and pagination.",`<p>Consistent field naming in API responses reduces confusion and makes your API intuitive for consumers.</p><h2>Common Patterns</h2><table><thead><tr><th>Field Type</th><th>Pattern</th><th>Examples</th></tr></thead><tbody><tr><td>ID</td><td>resource + Id/id</td><td><code>userId</code>, <code>orderId</code></td></tr><tr><td>Timestamp</td><td>verb + At/at</td><td><code>createdAt</code>, <code>updatedAt</code></td></tr><tr><td>Boolean</td><td>is/has + adjective</td><td><code>isActive</code>, <code>hasVerified</code></td></tr><tr><td>Count</td><td>noun + Count</td><td><code>itemCount</code>, <code>pageCount</code></td></tr><tr><td>URL</td><td>noun + Url</td><td><code>avatarUrl</code>, <code>websiteUrl</code></td></tr></tbody></table><h2>Pagination</h2><pre><code>{ "data": [...], "pagination": { "page": 1, "pageSize": 20, "totalCount": 100, "totalPages": 5 } }</code></pre><h2>Convert</h2><p><a href="%JSON_CAMEL%">camelCase</a> or <a href="%JSON_SNAKE%">snake_case</a> JSON key converter.</p>`),
ja:T("APIレスポンスの命名規則：包括的ガイド","APIレスポンスのフィールド命名パターン。タイムスタンプ、ID、ブール値。",`<p>APIレスポンスの一貫した命名でAPIが直感的になります。</p><h2>ツール</h2><p><a href="%JSON_CAMEL%">JSONキー変換</a>。</p>`),
de:T("API-Response-Namenskonventionen: Umfassender Leitfaden","Feldbenennungsmuster in API-Responses.",`<p>Konsistente Benennung macht APIs intuitiv.</p><h2>Tool</h2><p><a href="%JSON_CAMEL%">Konverter</a>.</p>`),
es:T("Convenciones de nombres en respuestas API: Guía completa","Patrones de nombres de campos en respuestas API.",`<p>Nombres consistentes hacen las APIs intuitivas.</p><h2>Herramienta</h2><p><a href="%JSON_CAMEL%">Conversor</a>.</p>`),
pt:T("Convenções de nomes em respostas API: Guia completo","Padrões de nomes de campos em respostas API.",`<p>Nomes consistentes tornam as APIs intuitivas.</p><h2>Ferramenta</h2><p><a href="%JSON_CAMEL%">Conversor</a>.</p>`),
fr:T("Conventions de nommage des réponses API : Guide complet","Modèles de nommage de champs dans les réponses API.",`<p>Des noms cohérents rendent les APIs intuitives.</p><h2>Outil</h2><p><a href="%JSON_CAMEL%">Convertisseur</a>.</p>`),
},

{slug:"graphql-naming-conventions",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%PASCAL%":"/pascal-case-converter","%CONSTANT%":"/constant-case-converter","%HUB%":"/case-converter-online"},
en:T("GraphQL Naming Conventions: Types, Fields, Queries & Mutations","Learn GraphQL naming conventions for types, fields, queries, mutations, enums, and input types.",`<p>GraphQL has clear naming conventions that make schemas self-documenting.</p><h2>Convention Table</h2><table><thead><tr><th>Element</th><th>Convention</th><th>Example</th></tr></thead><tbody><tr><td>Types</td><td>PascalCase</td><td><code>User</code>, <code>BlogPost</code></td></tr><tr><td>Fields</td><td>camelCase</td><td><code>firstName</code>, <code>createdAt</code></td></tr><tr><td>Queries</td><td>camelCase</td><td><code>user</code>, <code>blogPosts</code></td></tr><tr><td>Mutations</td><td>camelCase verb</td><td><code>createUser</code>, <code>updatePost</code></td></tr><tr><td>Enums</td><td>PascalCase</td><td><code>UserRole</code></td></tr><tr><td>Enum values</td><td>SCREAMING_SNAKE</td><td><code>ADMIN</code>, <code>MODERATOR</code></td></tr><tr><td>Input types</td><td>PascalCase + Input</td><td><code>CreateUserInput</code></td></tr></tbody></table><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%CONSTANT%">CONSTANT_CASE</a>. <a href="%HUB%">Hub</a>.</p>`),
ja:T("GraphQL命名規則：型、フィールド、クエリ、ミューテーション","GraphQLの型、フィールド、列挙型の命名規則。",`<p>GraphQLは明確な命名規則があります。型はPascalCase、フィールドはcamelCase、列挙値はSCREAMING_SNAKE。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("GraphQL-Namenskonventionen: Typen, Felder, Queries & Mutations","GraphQL-Benennungsregeln.",`<p>GraphQL: Typen PascalCase, Felder camelCase, Enum-Werte SCREAMING_SNAKE.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Convenciones de nombres en GraphQL: Tipos, campos, queries y mutations","Reglas de nombres en GraphQL.",`<p>GraphQL: tipos PascalCase, campos camelCase, valores enum SCREAMING_SNAKE.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Convenções de nomes em GraphQL: Tipos, campos, queries e mutations","Regras de nomes em GraphQL.",`<p>GraphQL: tipos PascalCase, campos camelCase, valores enum SCREAMING_SNAKE.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Conventions de nommage GraphQL : Types, champs, queries et mutations","Règles de nommage GraphQL.",`<p>GraphQL : types PascalCase, champs camelCase, valeurs enum SCREAMING_SNAKE.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

// ─── General Dev ───
{slug:"clean-code-naming-principles",date:"2026-06-01",readTime:5,links:{"%HUB%":"/case-converter-online"},
en:T("Clean Code Naming Principles: Lessons from Robert C. Martin","Learn naming principles from Clean Code by Uncle Bob. Meaningful names, avoiding disinformation, and intention-revealing code.",`<p>Robert C. Martin's "Clean Code" dedicates an entire chapter to naming. Here are the key principles.</p><h2>Core Rules</h2><ul><li><strong>Use intention-revealing names:</strong> The name should answer why it exists and what it does</li><li><strong>Avoid disinformation:</strong> Don't call something a "list" if it's not a list</li><li><strong>Make meaningful distinctions:</strong> <code>source</code> and <code>destination</code> not <code>a1</code> and <code>a2</code></li><li><strong>Use pronounceable names:</strong> <code>generationTimestamp</code> not <code>genymdhms</code></li><li><strong>Use searchable names:</strong> Named constants instead of magic numbers</li><li><strong>Avoid encodings:</strong> No Hungarian notation, no member prefixes</li><li><strong>Class names are nouns:</strong> <code>Customer</code>, <code>Account</code>, <code>AddressParser</code></li><li><strong>Method names are verbs:</strong> <code>save()</code>, <code>deletePage()</code>, <code>postPayment()</code></li></ul><h2>Convert Names</h2><p>Use the <a href="%HUB%">case converter hub</a> to format names for any convention.</p>`),
ja:T("クリーンコードの命名原則：Robert C. Martinの教え","Uncle Bobのクリーンコードから命名原則を学ぶ。",`<p>Robert C. Martinの「クリーンコード」の命名原則：意図を明かす名前、誤情報を避ける、意味のある区別。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Clean Code Naming Principles: Lektionen von Robert C. Martin","Namensgebungsprinzipien aus Clean Code.",`<p>Kernregeln: aussagekräftige Namen, keine Desinformation, suchbare Namen.</p>`),
es:T("Principios de nombres en Clean Code: Lecciones de Robert C. Martin","Principios de nombres de Clean Code.",`<p>Reglas clave: nombres reveladores de intención, evitar desinformación, nombres buscables.</p>`),
pt:T("Princípios de nomes em Clean Code: Lições de Robert C. Martin","Princípios de nomes do Clean Code.",`<p>Regras chave: nomes reveladores de intenção, evitar desinformação, nomes pesquisáveis.</p>`),
fr:T("Principes de nommage Clean Code : Leçons de Robert C. Martin","Principes de nommage de Clean Code.",`<p>Règles clés : noms révélateurs d'intention, éviter la désinformation, noms recherchables.</p>`),
},

{slug:"code-readability-tips",date:"2026-06-01",readTime:5,links:{"%HUB%":"/case-converter-online"},
en:T("10 Code Readability Tips Every Developer Should Know","Improve code readability with these practical tips covering naming, formatting, comments, and structure.",`<p>Readable code reduces bugs, speeds up reviews, and makes maintenance easier. Here are 10 actionable tips.</p><ol><li><strong>Name things well:</strong> The #1 readability factor. Descriptive names eliminate the need for comments.</li><li><strong>Keep functions short:</strong> 20 lines max. Each function should do one thing.</li><li><strong>Follow your language's style guide:</strong> PEP 8 for Python, Airbnb for JS, etc.</li><li><strong>Consistent formatting:</strong> Use a formatter (Prettier, Black, gofmt) — never debate tabs vs spaces manually.</li><li><strong>Avoid deep nesting:</strong> Use early returns and guard clauses to flatten code.</li><li><strong>Write comments for "why", not "what":</strong> Code shows what; comments explain why.</li><li><strong>Use meaningful variable types:</strong> <code>isEnabled</code> (boolean) not <code>enabled</code> (could be string).</li><li><strong>Prefer positive conditions:</strong> <code>if (isValid)</code> not <code>if (!isInvalid)</code>.</li><li><strong>Group related code:</strong> Keep related logic together, separate concerns with blank lines.</li><li><strong>Delete dead code:</strong> Commented-out code is noise. Use version control instead.</li></ol><h2>Format Your Code</h2><p>Use the <a href="%HUB%">case converter hub</a> to ensure consistent naming conventions.</p>`),
ja:T("開発者が知るべき10のコード可読性Tips","命名、フォーマット、コメント、構造で可読性を向上させる実践的Tips。",`<p>読みやすいコードはバグを減らし、レビューを速めます。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("10 Code-Lesbarkeits-Tipps für Entwickler","Praktische Tipps für bessere Code-Lesbarkeit.",`<p>Lesbarer Code reduziert Fehler und beschleunigt Reviews.</p>`),
es:T("10 consejos de legibilidad de código que todo desarrollador debe conocer","Consejos prácticos para mejorar la legibilidad del código.",`<p>El código legible reduce errores y acelera las revisiones.</p>`),
pt:T("10 dicas de legibilidade de código que todo desenvolvedor deve conhecer","Dicas práticas para melhorar a legibilidade do código.",`<p>Código legível reduz erros e acelera as revisões.</p>`),
fr:T("10 conseils de lisibilité du code pour les développeurs","Conseils pratiques pour améliorer la lisibilité du code.",`<p>Un code lisible réduit les bugs et accélère les revues.</p>`),
},

{slug:"boolean-naming-conventions",date:"2026-06-01",readTime:3,links:{"%CAMEL%":"/camelcase-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("Boolean Naming Conventions: is, has, can, should","Learn how to name boolean variables and functions for maximum clarity across all programming languages.",`<p>Boolean names should read like yes/no questions. The four standard prefixes are <code>is</code>, <code>has</code>, <code>can</code>, and <code>should</code>.</p><h2>Prefix Guide</h2><table><thead><tr><th>Prefix</th><th>Use For</th><th>Examples</th></tr></thead><tbody><tr><td><code>is</code></td><td>State/condition</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Possession/existence</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Capability/ability</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Recommendation/expectation</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Anti-Patterns</h2><ul><li><code>flag</code> — flag for what?</li><li><code>status</code> — could be a string, not clearly boolean</li><li><code>check</code> — sounds like a function, not a variable</li><li>Double negatives: <code>isNotDisabled</code> — use <code>isEnabled</code></li></ul><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> for JS, <a href="%SNAKE%">snake_case</a> for Python. <a href="%HUB%">Hub</a>.</p>`),
ja:T("ブール値の命名規則：is、has、can、should","ブール変数と関数の明確な命名方法。",`<p>ブール値の名前はYes/Noの質問として読めるべきです。is、has、can、shouldの4つの接頭辞。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Boolean-Namenskonventionen: is, has, can, should","Benennung von Boolean-Variablen und -Funktionen.",`<p>Boolean-Namen sollten wie Ja/Nein-Fragen lesbar sein.</p>`),
es:T("Convenciones de nombres para booleanos: is, has, can, should","Cómo nombrar variables y funciones booleanas.",`<p>Los nombres booleanos deben leerse como preguntas sí/no.</p>`),
pt:T("Convenções de nomes para booleanos: is, has, can, should","Como nomear variáveis e funções booleanas.",`<p>Nomes booleanos devem ser lidos como perguntas sim/não.</p>`),
fr:T("Conventions de nommage des booléens : is, has, can, should","Comment nommer les variables et fonctions booléennes.",`<p>Les noms booléens doivent se lire comme des questions oui/non.</p>`),
},

{slug:"function-naming-conventions",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%SNAKE%":"/snake-case-converter","%HUB%":"/case-converter-online"},
en:T("Function Naming Conventions: Verb Patterns for Clean Code","Learn how to name functions using verb patterns: get, set, create, delete, validate, handle, and more.",`<p>Functions do things, so their names should start with verbs. The right verb pattern instantly communicates what a function does.</p><h2>Common Verb Patterns</h2><table><thead><tr><th>Verb</th><th>Purpose</th><th>Examples</th></tr></thead><tbody><tr><td><code>get</code></td><td>Retrieve data</td><td><code>getUserById</code>, <code>getTotal</code></td></tr><tr><td><code>set</code></td><td>Assign a value</td><td><code>setUserName</code>, <code>setTheme</code></td></tr><tr><td><code>create</code></td><td>Make something new</td><td><code>createOrder</code>, <code>createUser</code></td></tr><tr><td><code>delete/remove</code></td><td>Remove something</td><td><code>deleteUser</code>, <code>removeItem</code></td></tr><tr><td><code>update</code></td><td>Modify existing</td><td><code>updateProfile</code></td></tr><tr><td><code>validate</code></td><td>Check correctness</td><td><code>validateEmail</code></td></tr><tr><td><code>format</code></td><td>Transform display</td><td><code>formatDate</code>, <code>formatCurrency</code></td></tr><tr><td><code>parse</code></td><td>Extract structured data</td><td><code>parseJSON</code>, <code>parseCSV</code></td></tr><tr><td><code>handle</code></td><td>React to events</td><td><code>handleClick</code>, <code>handleError</code></td></tr><tr><td><code>fetch</code></td><td>Retrieve from remote</td><td><code>fetchUsers</code>, <code>fetchData</code></td></tr></tbody></table><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> for JS, <a href="%SNAKE%">snake_case</a> for Python. <a href="%HUB%">Hub</a>.</p>`),
ja:T("関数命名規則：クリーンコードのための動詞パターン","get、set、create、delete、validateなどの動詞パターンで関数を命名する方法。",`<p>関数は何かを行うので、名前は動詞で始めるべきです。適切な動詞パターンで機能が即座に伝わります。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`),
de:T("Funktions-Namenskonventionen: Verb-Muster für sauberen Code","Funktionsbenennung mit Verb-Mustern.",`<p>Funktionen tun etwas, also sollten ihre Namen mit Verben beginnen.</p>`),
es:T("Convenciones de nombres de funciones: Patrones de verbos para código limpio","Nombres de funciones con patrones de verbos.",`<p>Las funciones hacen cosas, así que sus nombres deben comenzar con verbos.</p>`),
pt:T("Convenções de nomes de funções: Padrões de verbos para código limpo","Nomes de funções com padrões de verbos.",`<p>Funções fazem coisas, então seus nomes devem começar com verbos.</p>`),
fr:T("Conventions de nommage des fonctions : Patterns de verbes pour un code propre","Nommage de fonctions avec des patterns de verbes.",`<p>Les fonctions font des choses, donc leurs noms doivent commencer par des verbes.</p>`),
},

{slug:"naming-conventions-cheat-sheet",date:"2026-06-01",readTime:4,links:{"%CAMEL%":"/camelcase-converter","%SNAKE%":"/snake-case-converter","%PASCAL%":"/pascal-case-converter","%KEBAB%":"/kebab-case-converter","%CONSTANT%":"/constant-case-converter","%HUB%":"/case-converter-online"},
en:T("Naming Conventions Cheat Sheet: Every Language at a Glance","A one-page cheat sheet of naming conventions for JavaScript, Python, Java, C#, Go, Ruby, Rust, PHP, Swift, and Kotlin.",`<p>Bookmark this page. Every naming convention for every major language, in one table.</p><h2>The Master Table</h2><table><thead><tr><th>Language</th><th>Variables</th><th>Functions</th><th>Classes</th><th>Constants</th><th>Files</th></tr></thead><tbody><tr><td>JavaScript</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>camelCase/PascalCase</td></tr><tr><td>Python</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>Java</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>C#</td><td>camelCase</td><td>PascalCase</td><td>PascalCase</td><td>PascalCase</td><td>PascalCase</td></tr><tr><td>Go</td><td>camelCase</td><td>camelCase/PascalCase</td><td>PascalCase</td><td>camelCase/PascalCase</td><td>snake_case</td></tr><tr><td>Ruby</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>Rust</td><td>snake_case</td><td>snake_case</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>snake_case</td></tr><tr><td>PHP</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>Swift</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>camelCase</td><td>PascalCase</td></tr><tr><td>Kotlin</td><td>camelCase</td><td>camelCase</td><td>PascalCase</td><td>SCREAMING_SNAKE</td><td>PascalCase</td></tr><tr><td>CSS</td><td>kebab-case</td><td>—</td><td>—</td><td>—</td><td>kebab-case</td></tr></tbody></table><h2>Convert Any Format</h2><p><a href="%CAMEL%">camelCase</a> · <a href="%SNAKE%">snake_case</a> · <a href="%PASCAL%">PascalCase</a> · <a href="%KEBAB%">kebab-case</a> · <a href="%CONSTANT%">CONSTANT_CASE</a> · <a href="%HUB%">All Formats</a></p>`),
ja:T("命名規則チートシート：全言語一覧","JavaScript、Python、Java、C#、Go、Ruby、Rust、PHP、Swift、Kotlinの命名規則。",`<p>すべての主要言語の命名規則を1つのテーブルで。</p><h2>変換</h2><p><a href="%CAMEL%">camelCase</a> · <a href="%SNAKE%">snake_case</a> · <a href="%PASCAL%">PascalCase</a> · <a href="%KEBAB%">kebab-case</a> · <a href="%HUB%">全フォーマット</a></p>`),
de:T("Namenskonventionen Cheat Sheet: Alle Sprachen auf einen Blick","Namenskonventionen für alle wichtigen Sprachen.",`<p>Alle Konventionen in einer Tabelle.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`),
es:T("Cheat Sheet de convenciones de nombres: Todos los lenguajes","Convenciones de nombres para todos los lenguajes principales.",`<p>Todas las convenciones en una tabla.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`),
pt:T("Cheat Sheet de convenções de nomes: Todas as linguagens","Convenções de nomes para todas as linguagens principais.",`<p>Todas as convenções em uma tabela.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`),
fr:T("Cheat Sheet des conventions de nommage : Tous les langages","Conventions de nommage pour tous les langages principaux.",`<p>Toutes les conventions dans un tableau.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`),
},

// ─── Extra CMS/SEO ───
{slug:"wordpress-permalink-settings-guide",date:"2026-06-01",readTime:4,links:{"%WP%":"/wordpress-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("WordPress Permalink Settings: Complete Configuration Guide","Learn how to configure WordPress permalink settings for optimal SEO, including custom structures and category bases.",`<p>WordPress permalink settings determine the URL structure for your entire site. Getting them right from the start prevents painful migrations later.</p><h2>Available Structures</h2><table><thead><tr><th>Name</th><th>Pattern</th><th>SEO Impact</th></tr></thead><tbody><tr><td>Plain</td><td><code>?p=123</code></td><td>Worst — no keywords</td></tr><tr><td>Day and name</td><td><code>/2026/05/31/slug/</code></td><td>Bad — dates in URL</td></tr><tr><td>Month and name</td><td><code>/2026/05/slug/</code></td><td>Okay — still has dates</td></tr><tr><td>Post name</td><td><code>/slug/</code></td><td>Best — clean and short</td></tr><tr><td>Custom</td><td><code>/blog/%postname%/</code></td><td>Good — adds structure</td></tr></tbody></table><h2>Recommended: Post name</h2><p>Set to "Post name" (<code>/%postname%/</code>) for the cleanest, most SEO-friendly URLs.</p><h2>Generate Slugs</h2><p>Use our <a href="%WP%">WordPress slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("WordPressパーマリンク設定：完全ガイド","WordPressパーマリンク設定の最適な構成方法。",`<p>パーマリンク設定はサイト全体のURL構造を決定します。「投稿名」が最もSEOに有利。</p><h2>ツール</h2><p><a href="%WP%">WordPressスラッグジェネレーター</a>。</p>`),
de:T("WordPress-Permalink-Einstellungen: Vollständiger Guide","WordPress-Permalink-Konfiguration für optimales SEO.",`<p>Permalink-Einstellungen bestimmen die URL-Struktur. \"Beitragsname\" ist am besten.</p>`),
es:T("Configuración de permalinks en WordPress: Guía completa","Configuración de permalinks WordPress para SEO óptimo.",`<p>Los permalinks determinan la estructura URL. \"Nombre de la entrada\" es la mejor opción.</p>`),
pt:T("Configurações de permalinks do WordPress: Guia completo","Configuração de permalinks WordPress para SEO ótimo.",`<p>Permalinks determinam a estrutura URL. \"Nome do post\" é a melhor opção.</p>`),
fr:T("Paramètres de permaliens WordPress : Guide complet","Configuration des permaliens WordPress pour un SEO optimal.",`<p>Les permaliens déterminent la structure URL. \"Nom de l'article\" est le meilleur choix.</p>`),
},

{slug:"shopify-seo-url-tips",date:"2026-06-01",readTime:4,links:{"%PRODUCT%":"/product-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("Shopify SEO URL Tips: Optimize Your Store's URLs","Learn Shopify-specific URL optimization tips for products, collections, pages, and blog posts.",`<p>Shopify's URL structure is partially fixed (<code>/products/</code>, <code>/collections/</code>), but you can optimize the handle (slug) for each page.</p><h2>Optimization Tips</h2><ul><li>Edit handles before publishing — changing later requires redirects</li><li>Include target keywords in handles</li><li>Remove stop words and filler</li><li>Keep handles under 5 words</li><li>Use the built-in redirect manager for changed URLs</li></ul><h2>Shopify URL Limitations</h2><ul><li>Cannot remove <code>/products/</code>, <code>/collections/</code> prefixes</li><li>Cannot create custom URL structures</li><li>Product URLs include <code>/products/</code> even if accessed from a collection</li></ul><h2>Generate Handles</h2><p>Use our <a href="%PRODUCT%">product slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("Shopify SEO URLのヒント：ストアURLの最適化","Shopify固有のURL最適化のヒント。",`<p>ShopifyのURL構造は部分的に固定ですが、ハンドル（スラッグ）は最適化可能。</p><h2>ツール</h2><p><a href="%PRODUCT%">商品スラッグジェネレーター</a>。</p>`),
de:T("Shopify SEO URL-Tipps: Store-URLs optimieren","Shopify-spezifische URL-Optimierungstipps.",`<p>Shopifys URL-Struktur ist teilweise fest, aber Handles sind optimierbar.</p>`),
es:T("Consejos SEO de URLs en Shopify: Optimiza las URLs de tu tienda","Consejos de optimización URL específicos de Shopify.",`<p>La estructura URL de Shopify es parcialmente fija, pero los handles son optimizables.</p>`),
pt:T("Dicas de SEO de URLs no Shopify: Otimize as URLs da sua loja","Dicas de otimização URL específicas do Shopify.",`<p>A estrutura URL do Shopify é parcialmente fixa, mas os handles são otimizáveis.</p>`),
fr:T("Conseils SEO URL Shopify : Optimisez les URLs de votre boutique","Conseils d'optimisation URL spécifiques à Shopify.",`<p>La structure URL de Shopify est partiellement fixe, mais les handles sont optimisables.</p>`),
},

{slug:"wix-url-slug-optimization",date:"2026-06-01",readTime:3,links:{"%SLUG%":"/url-slug-generator"},
en:T("Wix URL Slug Optimization: How to Edit and Improve Your URLs","Learn how to customize URL slugs in Wix for better SEO and user experience.",`<p>Wix auto-generates URL slugs from page titles but allows manual editing for optimization.</p><h2>How to Edit</h2><ol><li>Go to the page in the Wix Editor</li><li>Click the page settings (gear icon)</li><li>Under "SEO (Google)", edit the URL slug</li><li>Use lowercase, hyphens, and target keywords</li></ol><h2>Wix URL Limitations</h2><ul><li>Dynamic pages have fixed URL patterns</li><li>Blog URLs include <code>/post/</code> prefix</li><li>Cannot fully customize URL structure like self-hosted sites</li></ul><h2>Generate Slugs</h2><p>Use our <a href="%SLUG%">URL slug generator</a> for clean, keyword-optimized slugs.</p>`),
ja:T("WixのURLスラッグ最適化","WixでURLスラッグを編集して最適化する方法。",`<p>Wixはタイトルからスラッグを自動生成しますが、手動編集で最適化可能。</p>`),
de:T("Wix URL-Slug-Optimierung","URLs in Wix anpassen und optimieren.",`<p>Wix generiert Slugs automatisch, aber manuelle Bearbeitung ist möglich.</p>`),
es:T("Optimización de slugs URL en Wix","Cómo editar y mejorar URLs en Wix.",`<p>Wix genera slugs automáticamente pero permite edición manual.</p>`),
pt:T("Otimização de slugs URL no Wix","Como editar e melhorar URLs no Wix.",`<p>Wix gera slugs automaticamente mas permite edição manual.</p>`),
fr:T("Optimisation des slugs URL dans Wix","Comment éditer et améliorer les URLs dans Wix.",`<p>Wix génère les slugs automatiquement mais permet l'édition manuelle.</p>`),
},

{slug:"squarespace-url-structure",date:"2026-06-01",readTime:3,links:{"%SLUG%":"/url-slug-generator","%BLOG%":"/blog-slug-generator"},
en:T("Squarespace URL Structure: How to Customize and Optimize","Learn how Squarespace handles URLs, how to edit slugs, and SEO best practices for your Squarespace site.",`<p>Squarespace auto-generates URL slugs from page titles and allows customization in page settings.</p><h2>How to Edit</h2><ol><li>Navigate to the page</li><li>Click the gear icon → Settings</li><li>Edit the "URL Slug" field</li><li>Save</li></ol><h2>Squarespace URL Patterns</h2><table><thead><tr><th>Page Type</th><th>Pattern</th></tr></thead><tbody><tr><td>Regular page</td><td><code>/slug</code></td></tr><tr><td>Blog post</td><td><code>/blog/slug</code></td></tr><tr><td>Product</td><td><code>/shop/slug</code></td></tr><tr><td>Portfolio</td><td><code>/portfolio/slug</code></td></tr></tbody></table><h2>Generate Slugs</h2><p><a href="%SLUG%">URL slug generator</a> or <a href="%BLOG%">blog slug generator</a>.</p>`),
ja:T("SquarespaceのURL構造：カスタマイズと最適化","SquarespaceのURL編集方法とSEOベストプラクティス。",`<p>Squarespaceはタイトルからスラッグを自動生成、ページ設定で編集可能。</p>`),
de:T("Squarespace URL-Struktur: Anpassen und Optimieren","Squarespace URLs anpassen und SEO-optimieren.",`<p>Squarespace generiert Slugs automatisch, anpassbar in den Seiteneinstellungen.</p>`),
es:T("Estructura URL de Squarespace: Personalizar y optimizar","Cómo personalizar URLs en Squarespace.",`<p>Squarespace genera slugs automáticamente, editables en la configuración de página.</p>`),
pt:T("Estrutura URL do Squarespace: Personalizar e otimizar","Como personalizar URLs no Squarespace.",`<p>Squarespace gera slugs automaticamente, editáveis nas configurações de página.</p>`),
fr:T("Structure URL Squarespace : Personnaliser et optimiser","Comment personnaliser les URLs dans Squarespace.",`<p>Squarespace génère les slugs automatiquement, modifiables dans les paramètres de page.</p>`),
},

{slug:"medium-vs-self-hosted-blog-seo",date:"2026-06-01",readTime:4,links:{"%BLOG%":"/blog-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("Medium vs Self-Hosted Blog: Which Is Better for SEO?","Compare Medium and self-hosted blogs for SEO. Understand domain authority, URL control, and content ownership.",`<p>Medium offers convenience but limits your SEO control. A self-hosted blog gives you full ownership of your content and URLs.</p><h2>Comparison</h2><table><thead><tr><th>Factor</th><th>Medium</th><th>Self-Hosted</th></tr></thead><tbody><tr><td>Domain authority</td><td>Uses medium.com (their authority)</td><td>Builds your own domain authority</td></tr><tr><td>URL control</td><td>Limited (<code>medium.com/@user/title-hash</code>)</td><td>Full control</td></tr><tr><td>Content ownership</td><td>Medium can change ToS</td><td>You own everything</td></tr><tr><td>Monetization</td><td>Medium Partner Program</td><td>Ads, affiliates, anything</td></tr><tr><td>SEO customization</td><td>Minimal</td><td>Full (meta tags, schema, sitemap)</td></tr><tr><td>Setup effort</td><td>Zero</td><td>Moderate</td></tr></tbody></table><h2>Recommendation</h2><p>Self-host for serious SEO. Use Medium for distribution only (with canonical URLs pointing to your site).</p><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("Medium vs 自前ブログ：SEOにはどちらが有利？","MediumとセルフホストブログのSEO比較。",`<p>Mediumは便利ですがSEOコントロールが制限されます。本格的なSEOにはセルフホスト。</p>`),
de:T("Medium vs Self-Hosted Blog: Was ist besser für SEO?","Medium und Self-Hosted im SEO-Vergleich.",`<p>Medium ist bequem, aber SEO-Kontrolle ist eingeschränkt. Self-Hosted für ernstes SEO.</p>`),
es:T("Medium vs blog autoalojado: ¿Cuál es mejor para SEO?","Comparación Medium vs autoalojado para SEO.",`<p>Medium es conveniente pero limita el control SEO. Autoalojado para SEO serio.</p>`),
pt:T("Medium vs blog auto-hospedado: Qual é melhor para SEO?","Comparação Medium vs auto-hospedado para SEO.",`<p>Medium é conveniente mas limita o controle SEO. Auto-hospedado para SEO sério.</p>`),
fr:T("Medium vs blog auto-hébergé : Lequel est meilleur pour le SEO ?","Comparaison Medium vs auto-hébergé pour le SEO.",`<p>Medium est pratique mais limite le contrôle SEO. Auto-hébergé pour un SEO sérieux.</p>`),
},

{slug:"blog-post-url-structure-tips",date:"2026-06-01",readTime:3,links:{"%BLOG%":"/blog-slug-generator","%SLUG%":"/url-slug-generator"},
en:T("Blog Post URL Structure: 7 Tips for Better Rankings","Quick tips for structuring blog post URLs that rank higher in search results.",`<p>Seven actionable tips for blog post URLs:</p><ol><li><strong>Use /blog/ prefix:</strong> <code>/blog/post-slug</code> — clear content hierarchy</li><li><strong>Include your keyword:</strong> Target keyword in the slug</li><li><strong>Skip dates:</strong> No <code>/2026/05/</code> in URLs</li><li><strong>Remove stop words:</strong> "a", "the", "and", "of", "in"</li><li><strong>Keep it short:</strong> 3-5 words max</li><li><strong>Lowercase + hyphens:</strong> Never underscores or mixed case</li><li><strong>Set before publishing:</strong> Changing later means redirect management</li></ol><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("ブログ記事URL構造：ランキング向上の7つのTips","検索順位を上げるブログURLの7つのヒント。",`<p>ブログURLの7つのヒント：/blog/接頭辞、キーワード、日付なし、ストップワード除去、短く、小文字+ハイフン、公開前に設定。</p>`),
de:T("Blog-URL-Struktur: 7 Tipps für bessere Rankings","Schnelle Tipps für Blog-URLs.",`<p>Sieben Tipps: /blog/-Präfix, Keyword, keine Daten, kurz, Kleinbuchstaben + Bindestriche.</p>`),
es:T("Estructura URL de blog: 7 consejos para mejores rankings","Consejos rápidos para URLs de blog.",`<p>Siete consejos: prefijo /blog/, keyword, sin fechas, corto, minúsculas + guiones.</p>`),
pt:T("Estrutura URL de blog: 7 dicas para melhores rankings","Dicas rápidas para URLs de blog.",`<p>Sete dicas: prefixo /blog/, keyword, sem datas, curto, minúsculas + hífens.</p>`),
fr:T("Structure URL de blog : 7 conseils pour de meilleurs classements","Conseils rapides pour les URLs de blog.",`<p>Sept conseils : préfixe /blog/, mot-clé, sans dates, court, minuscules + tirets.</p>`),
},

{slug:"anchor-text-best-practices",date:"2026-06-01",readTime:4,links:{"%SLUG%":"/url-slug-generator"},
en:T("Anchor Text Best Practices: Types, Examples, and SEO Impact","Learn anchor text types, best practices, and how to optimize your internal and external link text for SEO.",`<p>Anchor text is the clickable text in a hyperlink. It tells search engines what the linked page is about.</p><h2>Types of Anchor Text</h2><table><thead><tr><th>Type</th><th>Example</th><th>SEO Value</th></tr></thead><tbody><tr><td>Exact match</td><td><code><a>snake case converter</a></code></td><td>High (use sparingly)</td></tr><tr><td>Partial match</td><td><code><a>convert to snake case</a></code></td><td>High (safest)</td></tr><tr><td>Branded</td><td><code><a>SlugGenerator.app</a></code></td><td>Medium</td></tr><tr><td>Generic</td><td><code><a>click here</a></code></td><td>Low</td></tr><tr><td>Naked URL</td><td><code><a>sluggenerator.app</a></code></td><td>Low</td></tr></tbody></table><h2>Best Practices</h2><ul><li>Use descriptive, keyword-rich anchor text</li><li>Vary your anchor text — avoid exact-match overuse</li><li>Make it natural within the sentence</li><li>Avoid generic text like "click here" or "read more"</li></ul><p>Start with clean URLs using our <a href="%SLUG%">URL slug generator</a>.</p>`),
ja:T("アンカーテキストのベストプラクティス：種類と例","アンカーテキストの種類、ベストプラクティス、SEOへの影響。",`<p>アンカーテキストはリンクのクリック可能なテキスト。検索エンジンにリンク先の内容を伝えます。</p>`),
de:T("Ankertext Best Practices: Typen, Beispiele und SEO","Ankertext-Typen und SEO-Optimierung.",`<p>Ankertext sagt Suchmaschinen, worum es auf der verlinkten Seite geht.</p>`),
es:T("Mejores prácticas de texto ancla: Tipos, ejemplos y SEO","Tipos de texto ancla y optimización SEO.",`<p>El texto ancla dice a los buscadores de qué trata la página enlazada.</p>`),
pt:T("Melhores práticas de texto âncora: Tipos, exemplos e SEO","Tipos de texto âncora e otimização SEO.",`<p>O texto âncora diz aos buscadores sobre o que é a página vinculada.</p>`),
fr:T("Bonnes pratiques de texte d'ancrage : Types, exemples et SEO","Types de texte d'ancrage et optimisation SEO.",`<p>Le texte d'ancrage indique aux moteurs de recherche le sujet de la page liée.</p>`),
},

{slug:"internal-linking-strategy-seo",date:"2026-06-01",readTime:5,links:{"%SLUG%":"/url-slug-generator","%HUB%":"/case-converter-online"},
en:T("Internal Linking Strategy for SEO: A Complete Guide","Learn how to build an effective internal linking strategy that distributes link equity and improves crawlability.",`<p>Internal links are hyperlinks that point to other pages on the same website. They're one of the most underutilized SEO tools.</p><h2>Why Internal Links Matter</h2><ul><li>Distribute link equity (PageRank) across your site</li><li>Help Google discover and index new pages</li><li>Establish content hierarchy and topical relationships</li><li>Keep users engaged and reduce bounce rate</li></ul><h2>Strategy Framework</h2><ol><li><strong>Pillar and cluster:</strong> Create hub pages that link to related subtopic pages</li><li><strong>Contextual links:</strong> Link naturally within body content, not just navigation</li><li><strong>Descriptive anchor text:</strong> Use keyword-relevant text, not "click here"</li><li><strong>Reasonable quantity:</strong> 3-10 internal links per 1000 words</li><li><strong>Link to deep pages:</strong> Don't only link to your homepage and main pages</li><li><strong>Fix broken links:</strong> Audit regularly for 404s</li></ol><h2>Tools</h2><p>Generate clean URLs with our <a href="%SLUG%">URL slug generator</a>. Try our <a href="%HUB%">case converter hub</a> for formatting.</p>`),
ja:T("SEOのための内部リンク戦略：完全ガイド","リンクエクイティを分配しクロール性を向上させる内部リンク戦略。",`<p>内部リンクは最も活用されていないSEOツールの一つ。リンクエクイティの分配とページ発見を助けます。</p>`),
de:T("Interne Verlinkungsstrategie für SEO: Vollständiger Guide","Effektive interne Verlinkung für SEO.",`<p>Interne Links verteilen Link-Equity und helfen Google beim Crawlen.</p>`),
es:T("Estrategia de enlaces internos para SEO: Guía completa","Enlaces internos efectivos para SEO.",`<p>Los enlaces internos distribuyen link equity y ayudan al rastreo de Google.</p>`),
pt:T("Estratégia de links internos para SEO: Guia completo","Links internos eficazes para SEO.",`<p>Links internos distribuem link equity e ajudam o Google a rastrear.</p>`),
fr:T("Stratégie de maillage interne pour le SEO : Guide complet","Liens internes efficaces pour le SEO.",`<p>Les liens internes distribuent le link equity et aident Google à crawler.</p>`),
},

];

for (const p of posts) gen(p);
console.log(`\nBatch 3 done! ${posts.length} posts processed.`);
