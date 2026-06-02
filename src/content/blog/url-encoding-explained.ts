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
    description: "URLエンコーディングの仕組み、スペースが%20になる理由、URLでのUnicode文字の扱い方を学びましょう。",
    body: `<p>URLエンコーディング（パーセントエンコーディング）は、特殊文字をインターネットで送信できる形式に変換します。スペースは<code>%20</code>に、アンパサンドは<code>%26</code>に、非ASCII文字はUTF-8バイト列としてエンコードされます。</p>
<h2>URLにエンコーディングが必要な理由</h2>
<p>URLには限られた文字セット（RFC 3986）しか使えません：英字、数字、いくつかの特殊文字（<code>-._~</code>）。それ以外はパーセントエンコードが必要です。</p>
<h2>よくあるエンコーディング</h2>
<table><thead><tr><th>文字</th><th>エンコード後</th></tr></thead><tbody>
<tr><td>スペース</td><td><code>%20</code>（クエリ文字列では<code>+</code>）</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>URLにおけるUnicode</h2>
<p>非ASCII文字（<code>café</code>など）はまずUTF-8でエンコードされ、各バイトがパーセントエンコードされます：<code>caf%C3%A9</code>。</p>
<h2>JavaScriptでの使い方</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>クリーンなURLを生成</h2>
<p>エンコーディングの問題を避けるにはクリーンなスラッグを使いましょう。<a href="%SLUG%">URLスラッグジェネレーター</a>がエンコーディング安全なスラッグを自動生成します。</p>`,
  }),
  de: build("de", {
    title: "URL-Encoding erklärt: Prozent-Codierung, UTF-8 und Sonderzeichen",
    description: "Lernen Sie, wie URL-Encoding funktioniert, warum Leerzeichen zu %20 werden und wie man Unicode-Zeichen in URLs handhabt.",
    body: `<p>URL-Encoding (Prozent-Codierung) wandelt Sonderzeichen in ein Format um, das über das Internet übertragen werden kann. Leerzeichen werden zu <code>%20</code>, Ampersands zu <code>%26</code>, und Nicht-ASCII-Zeichen werden als UTF-8-Bytefolgen codiert.</p>
<h2>Warum URLs Encoding brauchen</h2>
<p>URLs können nur einen begrenzten Zeichensatz enthalten (RFC 3986): Buchstaben, Ziffern und einige Sonderzeichen (<code>-._~</code>). Alles andere muss prozent-codiert werden.</p>
<h2>Häufige Codierungen</h2>
<table><thead><tr><th>Zeichen</th><th>Codiert</th></tr></thead><tbody>
<tr><td>Leerzeichen</td><td><code>%20</code> (oder <code>+</code> in Query-Strings)</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>Unicode in URLs</h2>
<p>Nicht-ASCII-Zeichen (wie <code>café</code>) werden zuerst als UTF-8 codiert, dann wird jedes Byte prozent-codiert: <code>caf%C3%A9</code>.</p>
<h2>In JavaScript</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>Saubere URLs generieren</h2>
<p>Vermeiden Sie Encoding-Probleme mit sauberen Slugs. Unser <a href="%SLUG%">URL-Slug-Generator</a> erstellt automatisch encoding-sichere Slugs.</p>`,
  }),
  es: build("es", {
    title: "URL Encoding explicado: Codificación porcentual, UTF-8 y caracteres especiales",
    description: "Aprende cómo funciona la codificación URL, por qué los espacios se convierten en %20 y cómo manejar caracteres Unicode en URLs.",
    body: `<p>La codificación URL (codificación porcentual) convierte caracteres especiales en un formato que puede transmitirse por internet. Los espacios se convierten en <code>%20</code>, los ampersands en <code>%26</code> y los caracteres no ASCII se codifican como secuencias de bytes UTF-8.</p>
<h2>Por qué las URLs necesitan codificación</h2>
<p>Las URLs solo pueden contener un conjunto limitado de caracteres (RFC 3986): letras, dígitos y algunos caracteres especiales (<code>-._~</code>). Todo lo demás debe codificarse con porcentaje.</p>
<h2>Codificaciones comunes</h2>
<table><thead><tr><th>Carácter</th><th>Codificado</th></tr></thead><tbody>
<tr><td>Espacio</td><td><code>%20</code> (o <code>+</code> en query strings)</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>Unicode en URLs</h2>
<p>Los caracteres no ASCII (como <code>café</code>) primero se codifican como UTF-8, luego cada byte se codifica con porcentaje: <code>caf%C3%A9</code>.</p>
<h2>En JavaScript</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>Genera URLs limpias</h2>
<p>Evita problemas de codificación usando slugs limpios. Nuestro <a href="%SLUG%">generador de slugs de URL</a> crea slugs seguros automáticamente.</p>`,
  }),
  pt: build("pt", {
    title: "URL Encoding explicado: Codificação percentual, UTF-8 e caracteres especiais",
    description: "Aprenda como funciona a codificação URL, por que espaços viram %20 e como lidar com caracteres Unicode nas URLs.",
    body: `<p>A codificação URL (codificação percentual) converte caracteres especiais num formato que pode ser transmitido pela internet. Espaços viram <code>%20</code>, ampersands viram <code>%26</code> e caracteres não ASCII são codificados como sequências de bytes UTF-8.</p>
<h2>Por que as URLs precisam de codificação</h2>
<p>As URLs só podem conter um conjunto limitado de caracteres (RFC 3986): letras, dígitos e alguns caracteres especiais (<code>-._~</code>). Todo o resto precisa de codificação percentual.</p>
<h2>Codificações comuns</h2>
<table><thead><tr><th>Caractere</th><th>Codificado</th></tr></thead><tbody>
<tr><td>Espaço</td><td><code>%20</code> (ou <code>+</code> em query strings)</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>Unicode em URLs</h2>
<p>Caracteres não ASCII (como <code>café</code>) são primeiro codificados como UTF-8, depois cada byte é codificado com percentual: <code>caf%C3%A9</code>.</p>
<h2>Em JavaScript</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>Gere URLs limpas</h2>
<p>Evite problemas de codificação usando slugs limpas. O nosso <a href="%SLUG%">gerador de slugs de URL</a> cria slugs seguros automaticamente.</p>`,
  }),
  fr: build("fr", {
    title: "URL Encoding expliqué : Encodage pourcent, UTF-8 et caractères spéciaux",
    description: "Apprenez comment fonctionne l'encodage URL, pourquoi les espaces deviennent %20 et comment gérer les caractères Unicode dans les URLs.",
    body: `<p>L'encodage URL (encodage pourcent) convertit les caractères spéciaux dans un format transmissible sur internet. Les espaces deviennent <code>%20</code>, les esperluettes <code>%26</code>, et les caractères non ASCII sont encodés en séquences d'octets UTF-8.</p>
<h2>Pourquoi les URLs ont besoin d'encodage</h2>
<p>Les URLs ne peuvent contenir qu'un ensemble limité de caractères (RFC 3986) : lettres, chiffres et quelques caractères spéciaux (<code>-._~</code>). Tout le reste doit être encodé en pourcent.</p>
<h2>Encodages courants</h2>
<table><thead><tr><th>Caractère</th><th>Encodé</th></tr></thead><tbody>
<tr><td>Espace</td><td><code>%20</code> (ou <code>+</code> dans les query strings)</td></tr>
<tr><td>&amp;</td><td><code>%26</code></td></tr>
<tr><td>=</td><td><code>%3D</code></td></tr>
<tr><td>?</td><td><code>%3F</code></td></tr>
<tr><td>#</td><td><code>%23</code></td></tr>
<tr><td>/</td><td><code>%2F</code></td></tr>
<tr><td>@</td><td><code>%40</code></td></tr>
</tbody></table>
<h2>Unicode dans les URLs</h2>
<p>Les caractères non ASCII (comme <code>café</code>) sont d'abord encodés en UTF-8, puis chaque octet est encodé en pourcent : <code>caf%C3%A9</code>.</p>
<h2>En JavaScript</h2>
<pre><code>encodeURIComponent("hello world & café")
// "hello%20world%20%26%20caf%C3%A9"

decodeURIComponent("hello%20world")
// "hello world"</code></pre>
<h2>Générez des URLs propres</h2>
<p>Évitez les problèmes d'encodage en utilisant des slugs propres. Notre <a href="%SLUG%">générateur de slugs d'URL</a> crée des slugs sûrs automatiquement.</p>`,
  }),
};
