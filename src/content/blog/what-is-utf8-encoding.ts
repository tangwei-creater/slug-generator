import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-utf8-encoding", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is UTF-8 Encoding? A Developer's Guide",
    description: "Learn what UTF-8 is, how it works, why it's the dominant web encoding, and how to handle encoding issues.",
    body: `<p>UTF-8 is a variable-length character encoding that can represent every Unicode character. It's used by 98%+ of all websites.</p><h2>How UTF-8 Works</h2><table><thead><tr><th>Character Range</th><th>Bytes</th><th>Example</th></tr></thead><tbody><tr><td>U+0000 to U+007F (ASCII)</td><td>1 byte</td><td>A = 0x41</td></tr><tr><td>U+0080 to U+07FF</td><td>2 bytes</td><td>é = 0xC3 0xA9</td></tr><tr><td>U+0800 to U+FFFF</td><td>3 bytes</td><td>中 = 0xE4 0xB8 0xAD</td></tr><tr><td>U+10000 to U+10FFFF</td><td>4 bytes</td><td>emoji</td></tr></tbody></table><h2>Common Issues</h2><ul><li>"Mojibake" — garbled text from wrong encoding detection</li><li>Database encoding mismatch</li><li>BOM (Byte Order Mark) in files</li></ul><h2>Clean Encoding Issues</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip problematic characters.</p>`,
  }),
  ja: build("ja", {
    title: "UTF-8エンコーディングとは？開発者ガイド",
    description: "UTF-8の仕組み、Webで圧倒的に支配的なエンコーディングである理由、エンコーディング問題の対処法を解説します。",
    body: `<p>UTF-8はすべてのUnicode文字を表現できる可変長文字エンコーディングです。全Webサイトの98%以上で使用されています。</p>
<h2>UTF-8の仕組み</h2>
<table><thead><tr><th>文字範囲</th><th>バイト数</th><th>例</th></tr></thead><tbody>
<tr><td>U+0000〜U+007F（ASCII）</td><td>1バイト</td><td>A = 0x41</td></tr>
<tr><td>U+0080〜U+07FF</td><td>2バイト</td><td>é = 0xC3 0xA9</td></tr>
<tr><td>U+0800〜U+FFFF</td><td>3バイト</td><td>中 = 0xE4 0xB8 0xAD</td></tr>
<tr><td>U+10000〜U+10FFFF</td><td>4バイト</td><td>絵文字</td></tr>
</tbody></table>
<h2>よくある問題</h2>
<ul>
<li>「文字化け」 — エンコーディングの誤検出による文字の乱れ</li>
<li>データベースのエンコーディング不一致</li>
<li>ファイル内のBOM（バイトオーダーマーク）</li>
</ul>
<h2>エンコーディング問題をクリーンに</h2>
<p>問題のある文字を除去するには<a href="%CLEAN%">プレーンテキストコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was ist UTF-8-Encoding? Ein Entwickler-Guide",
    description: "Erfahren Sie, was UTF-8 ist, wie es funktioniert, warum es die dominierende Web-Kodierung ist und wie man Encoding-Probleme behandelt.",
    body: `<p>UTF-8 ist eine variable Zeichenkodierung, die jedes Unicode-Zeichen darstellen kann. Über 98% aller Websites verwenden sie.</p>
<h2>Wie UTF-8 funktioniert</h2>
<table><thead><tr><th>Zeichenbereich</th><th>Bytes</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>U+0000 bis U+007F (ASCII)</td><td>1 Byte</td><td>A = 0x41</td></tr>
<tr><td>U+0080 bis U+07FF</td><td>2 Bytes</td><td>é = 0xC3 0xA9</td></tr>
<tr><td>U+0800 bis U+FFFF</td><td>3 Bytes</td><td>中 = 0xE4 0xB8 0xAD</td></tr>
<tr><td>U+10000 bis U+10FFFF</td><td>4 Bytes</td><td>Emoji</td></tr>
</tbody></table>
<h2>Häufige Probleme</h2>
<ul>
<li>„Mojibake" — verstümmelter Text durch falsche Encoding-Erkennung</li>
<li>Datenbank-Encoding-Mismatch</li>
<li>BOM (Byte Order Mark) in Dateien</li>
</ul>
<h2>Encoding-Probleme bereinigen</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a>, um problematische Zeichen zu entfernen.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es la codificación UTF-8? Guía para desarrolladores",
    description: "Aprende qué es UTF-8, cómo funciona, por qué es la codificación web dominante y cómo manejar problemas de codificación.",
    body: `<p>UTF-8 es una codificación de caracteres de longitud variable que puede representar todos los caracteres Unicode. La usan más del 98% de los sitios web.</p>
<h2>Cómo funciona UTF-8</h2>
<table><thead><tr><th>Rango de caracteres</th><th>Bytes</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>U+0000 a U+007F (ASCII)</td><td>1 byte</td><td>A = 0x41</td></tr>
<tr><td>U+0080 a U+07FF</td><td>2 bytes</td><td>é = 0xC3 0xA9</td></tr>
<tr><td>U+0800 a U+FFFF</td><td>3 bytes</td><td>中 = 0xE4 0xB8 0xAD</td></tr>
<tr><td>U+10000 a U+10FFFF</td><td>4 bytes</td><td>emoji</td></tr>
</tbody></table>
<h2>Problemas comunes</h2>
<ul>
<li>"Mojibake" — texto ilegible por detección incorrecta de codificación</li>
<li>Desajuste de codificación en bases de datos</li>
<li>BOM (Byte Order Mark) en archivos</li>
</ul>
<h2>Limpia problemas de codificación</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> para eliminar caracteres problemáticos.</p>`,
  }),
  pt: build("pt", {
    title: "O que é codificação UTF-8? Guia para desenvolvedores",
    description: "Aprenda o que é UTF-8, como funciona, por que é a codificação web dominante e como lidar com problemas de codificação.",
    body: `<p>UTF-8 é uma codificação de caracteres de comprimento variável que pode representar todos os caracteres Unicode. É usada por mais de 98% de todos os sites.</p>
<h2>Como UTF-8 funciona</h2>
<table><thead><tr><th>Faixa de caracteres</th><th>Bytes</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>U+0000 a U+007F (ASCII)</td><td>1 byte</td><td>A = 0x41</td></tr>
<tr><td>U+0080 a U+07FF</td><td>2 bytes</td><td>é = 0xC3 0xA9</td></tr>
<tr><td>U+0800 a U+FFFF</td><td>3 bytes</td><td>中 = 0xE4 0xB8 0xAD</td></tr>
<tr><td>U+10000 a U+10FFFF</td><td>4 bytes</td><td>emoji</td></tr>
</tbody></table>
<h2>Problemas comuns</h2>
<ul>
<li>"Mojibake" — texto ilegível por detecção incorreta de codificação</li>
<li>Incompatibilidade de codificação no banco de dados</li>
<li>BOM (Byte Order Mark) em arquivos</li>
</ul>
<h2>Limpe problemas de codificação</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> para remover caracteres problemáticos.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que l'encodage UTF-8 ? Guide développeur",
    description: "Apprenez ce qu'est UTF-8, comment il fonctionne, pourquoi c'est l'encodage web dominant et comment gérer les problèmes d'encodage.",
    body: `<p>UTF-8 est un encodage de caractères à longueur variable capable de représenter tous les caractères Unicode. Il est utilisé par plus de 98% des sites web.</p>
<h2>Comment fonctionne UTF-8</h2>
<table><thead><tr><th>Plage de caractères</th><th>Octets</th><th>Exemple</th></tr></thead><tbody>
<tr><td>U+0000 à U+007F (ASCII)</td><td>1 octet</td><td>A = 0x41</td></tr>
<tr><td>U+0080 à U+07FF</td><td>2 octets</td><td>é = 0xC3 0xA9</td></tr>
<tr><td>U+0800 à U+FFFF</td><td>3 octets</td><td>中 = 0xE4 0xB8 0xAD</td></tr>
<tr><td>U+10000 à U+10FFFF</td><td>4 octets</td><td>emoji</td></tr>
</tbody></table>
<h2>Problèmes courants</h2>
<ul>
<li>« Mojibake » — texte illisible dû à une mauvaise détection d'encodage</li>
<li>Incompatibilité d'encodage de base de données</li>
<li>BOM (Byte Order Mark) dans les fichiers</li>
</ul>
<h2>Nettoyez les problèmes d'encodage</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> pour supprimer les caractères problématiques.</p>`,
  }),
};
