import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "plain-text-vs-rich-text", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Plain Text vs Rich Text: What's the Difference?",
    description: "Understand the difference between plain text and rich text, when to use each, and how to convert between them.",
    body: `<p><strong>Plain text</strong> contains only characters — no formatting, fonts, or styling. <strong>Rich text</strong> includes formatting like bold, italic, colors, and links.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>Plain Text</th><th>Rich Text</th></tr></thead><tbody><tr><td>Formatting</td><td>None</td><td>Bold, italic, colors, fonts</td></tr><tr><td>File size</td><td>Smallest</td><td>Larger</td></tr><tr><td>Portability</td><td>Universal</td><td>Format-dependent</td></tr><tr><td>Examples</td><td>.txt, code files</td><td>.docx, .rtf, HTML</td></tr><tr><td>Best for</td><td>Code, data, logs</td><td>Documents, emails</td></tr></tbody></table><h2>Convert Rich to Plain</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip all formatting.</p>`,
  }),
  ja: build("ja", {
    title: "プレーンテキスト vs リッチテキスト：違いは？",
    description: "プレーンテキストとリッチテキストの違い、それぞれの使いどころ、変換方法を解説します。",
    body: `<p><strong>プレーンテキスト</strong>は文字のみで構成され、書式やフォント、スタイルは含まれません。<strong>リッチテキスト</strong>は太字、斜体、色、リンクなどの書式情報を含みます。</p>
<h2>比較</h2>
<table><thead><tr><th>特徴</th><th>プレーンテキスト</th><th>リッチテキスト</th></tr></thead><tbody>
<tr><td>書式</td><td>なし</td><td>太字、斜体、色、フォント</td></tr>
<tr><td>ファイルサイズ</td><td>最小</td><td>大きい</td></tr>
<tr><td>互換性</td><td>ユニバーサル</td><td>形式に依存</td></tr>
<tr><td>例</td><td>.txt、コードファイル</td><td>.docx、.rtf、HTML</td></tr>
<tr><td>最適な用途</td><td>コード、データ、ログ</td><td>文書、メール</td></tr>
</tbody></table>
<h2>リッチテキストからプレーンテキストへ変換</h2>
<p>すべての書式を除去するには<a href="%CLEAN%">プレーンテキストコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Plain Text vs Rich Text: Was ist der Unterschied?",
    description: "Verstehen Sie den Unterschied zwischen Plain Text und Rich Text, wann man was verwendet und wie man zwischen beiden konvertiert.",
    body: `<p><strong>Plain Text</strong> enthält nur Zeichen — keine Formatierung, Schriftarten oder Stile. <strong>Rich Text</strong> umfasst Formatierung wie Fettdruck, Kursiv, Farben und Links.</p>
<h2>Vergleich</h2>
<table><thead><tr><th>Eigenschaft</th><th>Plain Text</th><th>Rich Text</th></tr></thead><tbody>
<tr><td>Formatierung</td><td>Keine</td><td>Fett, kursiv, Farben, Schriften</td></tr>
<tr><td>Dateigröße</td><td>Am kleinsten</td><td>Größer</td></tr>
<tr><td>Portabilität</td><td>Universell</td><td>Formatabhängig</td></tr>
<tr><td>Beispiele</td><td>.txt, Code-Dateien</td><td>.docx, .rtf, HTML</td></tr>
<tr><td>Ideal für</td><td>Code, Daten, Logs</td><td>Dokumente, E-Mails</td></tr>
</tbody></table>
<h2>Rich Text in Plain Text konvertieren</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a>, um alle Formatierungen zu entfernen.</p>`,
  }),
  es: build("es", {
    title: "Texto plano vs texto enriquecido: ¿Cuál es la diferencia?",
    description: "Comprende la diferencia entre texto plano y texto enriquecido, cuándo usar cada uno y cómo convertir entre ambos.",
    body: `<p>El <strong>texto plano</strong> contiene solo caracteres — sin formato, fuentes ni estilos. El <strong>texto enriquecido</strong> incluye formato como negrita, cursiva, colores y enlaces.</p>
<h2>Comparación</h2>
<table><thead><tr><th>Característica</th><th>Texto plano</th><th>Texto enriquecido</th></tr></thead><tbody>
<tr><td>Formato</td><td>Ninguno</td><td>Negrita, cursiva, colores, fuentes</td></tr>
<tr><td>Tamaño de archivo</td><td>El más pequeño</td><td>Mayor</td></tr>
<tr><td>Portabilidad</td><td>Universal</td><td>Depende del formato</td></tr>
<tr><td>Ejemplos</td><td>.txt, archivos de código</td><td>.docx, .rtf, HTML</td></tr>
<tr><td>Ideal para</td><td>Código, datos, logs</td><td>Documentos, correos</td></tr>
</tbody></table>
<h2>Convertir texto enriquecido a texto plano</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> para eliminar todo el formato.</p>`,
  }),
  pt: build("pt", {
    title: "Texto simples vs texto rico: Qual a diferença?",
    description: "Entenda a diferença entre texto simples e texto rico, quando usar cada um e como converter entre eles.",
    body: `<p>O <strong>texto simples</strong> contém apenas caracteres — sem formatação, fontes ou estilos. O <strong>texto rico</strong> inclui formatação como negrito, itálico, cores e links.</p>
<h2>Comparação</h2>
<table><thead><tr><th>Característica</th><th>Texto simples</th><th>Texto rico</th></tr></thead><tbody>
<tr><td>Formatação</td><td>Nenhuma</td><td>Negrito, itálico, cores, fontes</td></tr>
<tr><td>Tamanho do arquivo</td><td>O menor</td><td>Maior</td></tr>
<tr><td>Portabilidade</td><td>Universal</td><td>Depende do formato</td></tr>
<tr><td>Exemplos</td><td>.txt, arquivos de código</td><td>.docx, .rtf, HTML</td></tr>
<tr><td>Ideal para</td><td>Código, dados, logs</td><td>Documentos, e-mails</td></tr>
</tbody></table>
<h2>Converter texto rico em texto simples</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> para remover toda a formatação.</p>`,
  }),
  fr: build("fr", {
    title: "Texte brut vs texte riche : Quelle est la différence ?",
    description: "Comprenez la différence entre texte brut et texte riche, quand utiliser chacun et comment convertir entre les deux.",
    body: `<p>Le <strong>texte brut</strong> ne contient que des caractères — aucune mise en forme, police ou style. Le <strong>texte riche</strong> inclut la mise en forme comme le gras, l'italique, les couleurs et les liens.</p>
<h2>Comparaison</h2>
<table><thead><tr><th>Caractéristique</th><th>Texte brut</th><th>Texte riche</th></tr></thead><tbody>
<tr><td>Mise en forme</td><td>Aucune</td><td>Gras, italique, couleurs, polices</td></tr>
<tr><td>Taille du fichier</td><td>La plus petite</td><td>Plus grande</td></tr>
<tr><td>Portabilité</td><td>Universelle</td><td>Dépend du format</td></tr>
<tr><td>Exemples</td><td>.txt, fichiers de code</td><td>.docx, .rtf, HTML</td></tr>
<tr><td>Idéal pour</td><td>Code, données, logs</td><td>Documents, e-mails</td></tr>
</tbody></table>
<h2>Convertir le texte riche en texte brut</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> pour supprimer toute la mise en forme.</p>`,
  }),
};
