import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-remove-duplicate-lines", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%DEDUP%", p(l, "/duplicate-line-remover")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Remove Duplicate Lines from Text (Online Tool + Code)",
    description: "Remove duplicate lines from text files using our online tool, command line, Python, or JavaScript.",
    body: `<p>Duplicate lines waste space in logs, CSVs, and data exports. Here's how to remove them.</p><h2>Command Line</h2><pre><code># Sort and deduplicate
sort input.txt | uniq > output.txt

# Preserve original order (awk)
awk '!seen[\$0]++' input.txt > output.txt</code></pre><h2>Python</h2><pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre><h2>Online Tool</h2><p>Use our <a href="%DEDUP%">duplicate line remover</a> for instant deduplication.</p>`,
  }),
  ja: build("ja", {
    title: "テキストから重複行を削除する方法",
    description: "オンラインツール、コマンドライン、Python、JavaScriptで重複行を削除。",
    body: `<p>重複行はログやCSVで無駄なスペースを占めます。</p><h2>ツール</h2><p><a href="%DEDUP%">重複行削除ツール</a>。</p>`,
  }),
  de: build("de", {
    title: "Doppelte Zeilen aus Text entfernen",
    description: "Online-Tool, Befehlszeile und Python.",
    body: `<p>Doppelte Zeilen verschwenden Platz in Logs und CSVs.</p><h2>Tool</h2><p><a href="%DEDUP%">Duplikat-Entferner</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar líneas duplicadas del texto",
    description: "Herramienta online, línea de comandos y Python.",
    body: `<p>Las líneas duplicadas desperdician espacio en logs y CSVs.</p><h2>Herramienta</h2><p><a href="%DEDUP%">Eliminador de duplicados</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover linhas duplicadas do texto",
    description: "Ferramenta online, linha de comando e Python.",
    body: `<p>Linhas duplicadas desperdiçam espaço em logs e CSVs.</p><h2>Ferramenta</h2><p><a href="%DEDUP%">Removedor de duplicatas</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les lignes dupliquées du texte",
    description: "Outil en ligne, ligne de commande et Python.",
    body: `<p>Les lignes dupliquées gaspillent de l'espace dans les logs et CSVs.</p><h2>Outil</h2><p><a href="%DEDUP%">Suppresseur de doublons</a>.</p>`,
  }),
};
