import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "remove-extra-spaces-from-text", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Remove Extra Spaces from Text (Online Tool + Code)",
    description: "Remove double spaces, leading/trailing whitespace, and extra blank lines from text.",
    body: `<p>Extra spaces creep into text from copy-paste, OCR, and word processors. Here's how to clean them.</p><h2>Regex</h2><pre><code>// Collapse multiple spaces to one
text.replace(/  +/g, ' ')

// Trim each line
text.split('\\n').map(l => l.trim()).join('\\n')

// Remove extra blank lines
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Collapse extra spaces" enabled.</p>`,
  }),
  ja: build("ja", {
    title: "テキストから余分なスペースを削除する方法（オンラインツール＋コード）",
    description: "二重スペース、行頭・行末の空白、余分な空行をテキストから削除する方法をコード例とオンラインツールで解説します。",
    body: `<p>余分なスペースはコピペ、OCR、ワープロソフトからテキストに紛れ込みます。以下がクリーンにする方法です。</p>
<h2>正規表現</h2>
<pre><code>// 連続スペースを1つにまとめる
text.replace(/  +/g, ' ')

// 各行をトリム
text.split('\\n').map(l => l.trim()).join('\\n')

// 余分な空行を削除
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre>
<h2>オンラインツール</h2>
<p>「余分なスペースを削除」を有効にした<a href="%CLEAN%">プレーンテキストコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Extra-Leerzeichen aus Text entfernen (Online-Tool + Code)",
    description: "Entfernen Sie doppelte Leerzeichen, Leerzeichen am Zeilenanfang/-ende und überflüssige Leerzeilen aus Text.",
    body: `<p>Überflüssige Leerzeichen schleichen sich durch Copy-Paste, OCR und Textverarbeitung in Texte ein. So bereinigen Sie sie.</p>
<h2>Regex</h2>
<pre><code>// Mehrfache Leerzeichen zu einem zusammenfassen
text.replace(/  +/g, ' ')

// Jede Zeile trimmen
text.split('\\n').map(l => l.trim()).join('\\n')

// Überflüssige Leerzeilen entfernen
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre>
<h2>Online-Tool</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a> mit aktivierter Option „Extra-Leerzeichen zusammenfassen".</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar espacios extra del texto (herramienta online + código)",
    description: "Elimina espacios dobles, espacios al inicio/final de línea y líneas en blanco extras del texto.",
    body: `<p>Los espacios extra se cuelan en el texto al copiar-pegar, con OCR y desde procesadores de texto. Así se limpian.</p>
<h2>Regex</h2>
<pre><code>// Colapsar múltiples espacios en uno
text.replace(/  +/g, ' ')

// Recortar cada línea
text.split('\\n').map(l => l.trim()).join('\\n')

// Eliminar líneas en blanco extras
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre>
<h2>Herramienta online</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> con la opción "Colapsar espacios extra" activada.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover espaços extras do texto (ferramenta online + código)",
    description: "Remova espaços duplos, espaços no início/fim de linha e linhas em branco extras do texto.",
    body: `<p>Espaços extras se infiltram no texto ao copiar-colar, com OCR e a partir de processadores de texto. Veja como limpá-los.</p>
<h2>Regex</h2>
<pre><code>// Colapsar múltiplos espaços em um
text.replace(/  +/g, ' ')

// Aparar cada linha
text.split('\\n').map(l => l.trim()).join('\\n')

// Remover linhas em branco extras
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre>
<h2>Ferramenta online</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> com a opção "Colapsar espaços extras" ativada.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les espaces supplémentaires du texte (outil en ligne + code)",
    description: "Supprimez les doubles espaces, les espaces en début/fin de ligne et les lignes vides supplémentaires du texte.",
    body: `<p>Les espaces supplémentaires s'infiltrent dans le texte lors du copier-coller, de l'OCR et depuis les traitements de texte. Voici comment les nettoyer.</p>
<h2>Regex</h2>
<pre><code>// Réduire les espaces multiples en un seul
text.replace(/  +/g, ' ')

// Trim chaque ligne
text.split('\\n').map(l => l.trim()).join('\\n')

// Supprimer les lignes vides supplémentaires
text.replace(/\\n{3,}/g, '\\n\\n')</code></pre>
<h2>Outil en ligne</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> avec l'option « Réduire les espaces supplémentaires » activée.</p>`,
  }),
};
