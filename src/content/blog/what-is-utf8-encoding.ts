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
    description: "UTF-8の仕組み、Web標準エンコーディングとしての地位、エンコーディング問題の対処法。",
    body: `<p>UTF-8はすべてのUnicode文字を表現できる可変長エンコーディングです。Webサイトの98%以上が使用。</p><h2>ツール</h2><p><a href="%CLEAN%">テキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Was ist UTF-8-Encoding? Ein Entwickler-Guide",
    description: "Wie UTF-8 funktioniert und warum es dominiert.",
    body: `<p>UTF-8 ist eine variable Zeichenkodierung für alle Unicode-Zeichen. 98%+ aller Websites nutzen es.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es la codificación UTF-8? Guía para desarrolladores",
    description: "Cómo funciona UTF-8 y por qué domina.",
    body: `<p>UTF-8 es una codificación de longitud variable para todos los caracteres Unicode. 98%+ de los sitios web la usan.</p>`,
  }),
  pt: build("pt", {
    title: "O que é codificação UTF-8? Guia para desenvolvedores",
    description: "Como funciona UTF-8 e por que domina.",
    body: `<p>UTF-8 é uma codificação de comprimento variável para todos os caracteres Unicode. 98%+ dos sites a usam.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que l'encodage UTF-8 ? Guide développeur",
    description: "Comment fonctionne UTF-8 et pourquoi il domine.",
    body: `<p>UTF-8 est un encodage à longueur variable pour tous les caractères Unicode. 98%+ des sites web l'utilisent.</p>`,
  }),
};
