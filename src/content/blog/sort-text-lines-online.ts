import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "sort-text-lines-online", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SORT%", p(l, "/sort-lines-alphabetically")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Sort Text Lines Online: Alphabetical, Reverse, and Natural Order",
    description: "Sort text lines alphabetically, in reverse, or by natural order using our free online tool.",
    body: `<p>Sorting lines of text is useful for organizing lists, cleaning data, comparing files, and preparing content for analysis.</p><h2>Sort Types</h2><ul><li><strong>Alphabetical (A→Z):</strong> Standard dictionary order</li><li><strong>Reverse (Z→A):</strong> Descending order</li><li><strong>Natural sort:</strong> "item2" before "item10" (human-friendly)</li><li><strong>Case-insensitive:</strong> Ignores uppercase/lowercase differences</li></ul><h2>Command Line</h2><pre><code># Alphabetical
sort file.txt

# Reverse
sort -r file.txt

# Natural/version sort
sort -V file.txt</code></pre><h2>Online Tool</h2><p>Use our <a href="%SORT%">sort lines tool</a> for instant sorting.</p>`,
  }),
  ja: build("ja", {
    title: "テキスト行をオンラインでソート：アルファベット順、逆順",
    description: "オンラインツールでテキスト行を即座にソート。",
    body: `<p>テキスト行のソートはリスト整理やデータ準備に便利です。</p><h2>ツール</h2><p><a href="%SORT%">行ソートツール</a>。</p>`,
  }),
  de: build("de", {
    title: "Textzeilen online sortieren: Alphabetisch, umgekehrt",
    description: "Online-Tool zum Sortieren von Textzeilen.",
    body: `<p>Textzeilen sortieren für Listen und Daten.</p><h2>Tool</h2><p><a href="%SORT%">Zeilen-Sortierer</a>.</p>`,
  }),
  es: build("es", {
    title: "Ordenar líneas de texto online: Alfabético, inverso",
    description: "Herramienta online para ordenar líneas.",
    body: `<p>Ordenar líneas es útil para organizar listas y datos.</p><h2>Herramienta</h2><p><a href="%SORT%">Ordenador de líneas</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Ordenar linhas de texto online: Alfabético, reverso",
    description: "Ferramenta online para ordenar linhas.",
    body: `<p>Ordenar linhas é útil para organizar listas e dados.</p><h2>Ferramenta</h2><p><a href="%SORT%">Ordenador de linhas</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Trier les lignes de texte en ligne : Alphabétique, inversé",
    description: "Outil en ligne pour trier les lignes.",
    body: `<p>Trier les lignes est utile pour organiser listes et données.</p><h2>Outil</h2><p><a href="%SORT%">Trieur de lignes</a>.</p>`,
  }),
};
