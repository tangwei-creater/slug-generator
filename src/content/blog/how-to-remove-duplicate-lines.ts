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
    title: "テキストから重複行を削除する方法（オンラインツール＋コード）",
    description: "オンラインツール、コマンドライン、Python、JavaScriptでテキストファイルから重複行を削除する方法を紹介します。",
    body: `<p>重複行はログ、CSV、データエクスポートで無駄なスペースを占めます。削除する方法を紹介します。</p>
<h2>コマンドライン</h2>
<pre><code># ソートして重複除去
sort input.txt | uniq > output.txt

# 元の順序を保持（awk）
awk '!seen[$0]++' input.txt > output.txt</code></pre>
<h2>Python</h2>
<pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre>
<h2>オンラインツール</h2>
<p><a href="%DEDUP%">重複行削除ツール</a>で即座に重複を除去できます。</p>`,
  }),
  de: build("de", {
    title: "Doppelte Zeilen aus Text entfernen (Online-Tool + Code)",
    description: "Entfernen Sie doppelte Zeilen aus Textdateien mit unserem Online-Tool, der Befehlszeile, Python oder JavaScript.",
    body: `<p>Doppelte Zeilen verschwenden Platz in Logs, CSVs und Datenexporten. So entfernen Sie sie.</p>
<h2>Befehlszeile</h2>
<pre><code># Sortieren und Duplikate entfernen
sort input.txt | uniq > output.txt

# Ursprüngliche Reihenfolge beibehalten (awk)
awk '!seen[$0]++' input.txt > output.txt</code></pre>
<h2>Python</h2>
<pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre>
<h2>Online-Tool</h2>
<p>Verwenden Sie unseren <a href="%DEDUP%">Duplikat-Zeilen-Entferner</a> für sofortige Deduplizierung.</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar líneas duplicadas del texto (Herramienta online + Código)",
    description: "Elimina líneas duplicadas de archivos de texto usando nuestra herramienta online, línea de comandos, Python o JavaScript.",
    body: `<p>Las líneas duplicadas desperdician espacio en logs, CSVs y exportaciones de datos. Así puedes eliminarlas.</p>
<h2>Línea de comandos</h2>
<pre><code># Ordenar y deduplicar
sort input.txt | uniq > output.txt

# Preservar orden original (awk)
awk '!seen[$0]++' input.txt > output.txt</code></pre>
<h2>Python</h2>
<pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre>
<h2>Herramienta online</h2>
<p>Usa nuestro <a href="%DEDUP%">eliminador de líneas duplicadas</a> para deduplicación instantánea.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover linhas duplicadas do texto (Ferramenta online + Código)",
    description: "Remova linhas duplicadas de arquivos de texto usando nossa ferramenta online, linha de comando, Python ou JavaScript.",
    body: `<p>Linhas duplicadas desperdiçam espaço em logs, CSVs e exportações de dados. Veja como removê-las.</p>
<h2>Linha de comando</h2>
<pre><code># Ordenar e deduplicar
sort input.txt | uniq > output.txt

# Preservar ordem original (awk)
awk '!seen[$0]++' input.txt > output.txt</code></pre>
<h2>Python</h2>
<pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre>
<h2>Ferramenta online</h2>
<p>Use o nosso <a href="%DEDUP%">removedor de linhas duplicadas</a> para deduplicação instantânea.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les lignes dupliquées du texte (Outil en ligne + Code)",
    description: "Supprimez les lignes dupliquées de fichiers texte avec notre outil en ligne, la ligne de commande, Python ou JavaScript.",
    body: `<p>Les lignes dupliquées gaspillent de l'espace dans les logs, CSVs et exports de données. Voici comment les supprimer.</p>
<h2>Ligne de commande</h2>
<pre><code># Trier et dédupliquer
sort input.txt | uniq > output.txt

# Préserver l'ordre original (awk)
awk '!seen[$0]++' input.txt > output.txt</code></pre>
<h2>Python</h2>
<pre><code>lines = open('input.txt').readlines()
seen = set()
result = []
for line in lines:
    if line not in seen:
        seen.add(line)
        result.append(line)</code></pre>
<h2>Outil en ligne</h2>
<p>Utilisez notre <a href="%DEDUP%">suppresseur de lignes dupliquées</a> pour une déduplication instantanée.</p>`,
  }),
};
