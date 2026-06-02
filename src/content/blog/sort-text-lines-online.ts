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
    title: "テキスト行をオンラインでソート：アルファベット順、逆順、自然順",
    description: "無料オンラインツールでテキスト行をアルファベット順、逆順、自然順でソートする方法を解説します。",
    body: `<p>テキスト行のソートは、リストの整理、データのクリーニング、ファイルの比較、分析用コンテンツの準備に役立ちます。</p>
<h2>ソートの種類</h2>
<ul>
<li><strong>アルファベット順（A→Z）：</strong>標準的な辞書順</li>
<li><strong>逆順（Z→A）：</strong>降順</li>
<li><strong>自然ソート：</strong>「item2」が「item10」より前（人間に優しい順序）</li>
<li><strong>大文字小文字無視：</strong>大文字・小文字の違いを無視</li>
</ul>
<h2>コマンドライン</h2>
<pre><code># アルファベット順
sort file.txt

# 逆順
sort -r file.txt

# 自然順/バージョンソート
sort -V file.txt</code></pre>
<h2>オンラインツール</h2>
<p>即座にソートするには<a href="%SORT%">行ソートツール</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Textzeilen online sortieren: Alphabetisch, umgekehrt und natürliche Reihenfolge",
    description: "Sortieren Sie Textzeilen alphabetisch, umgekehrt oder in natürlicher Reihenfolge mit unserem kostenlosen Online-Tool.",
    body: `<p>Das Sortieren von Textzeilen ist nützlich zum Organisieren von Listen, Bereinigen von Daten, Vergleichen von Dateien und Vorbereiten von Inhalten für Analysen.</p>
<h2>Sortierarten</h2>
<ul>
<li><strong>Alphabetisch (A→Z):</strong> Standard-Wörterbuchreihenfolge</li>
<li><strong>Umgekehrt (Z→A):</strong> Absteigende Reihenfolge</li>
<li><strong>Natürliche Sortierung:</strong> „item2" vor „item10" (menschenfreundlich)</li>
<li><strong>Groß-/Kleinschreibung ignorieren:</strong> Ignoriert Unterschiede in Groß-/Kleinschreibung</li>
</ul>
<h2>Kommandozeile</h2>
<pre><code># Alphabetisch
sort file.txt

# Umgekehrt
sort -r file.txt

# Natürliche/Versions-Sortierung
sort -V file.txt</code></pre>
<h2>Online-Tool</h2>
<p>Verwenden Sie unser <a href="%SORT%">Zeilen-Sortier-Tool</a> für sofortige Sortierung.</p>`,
  }),
  es: build("es", {
    title: "Ordenar líneas de texto online: Alfabético, inverso y orden natural",
    description: "Ordena líneas de texto alfabéticamente, en orden inverso o natural usando nuestra herramienta online gratuita.",
    body: `<p>Ordenar líneas de texto es útil para organizar listas, limpiar datos, comparar archivos y preparar contenido para análisis.</p>
<h2>Tipos de orden</h2>
<ul>
<li><strong>Alfabético (A→Z):</strong> Orden estándar de diccionario</li>
<li><strong>Inverso (Z→A):</strong> Orden descendente</li>
<li><strong>Orden natural:</strong> "item2" antes de "item10" (amigable para humanos)</li>
<li><strong>Sin distinguir mayúsculas:</strong> Ignora diferencias entre mayúsculas y minúsculas</li>
</ul>
<h2>Línea de comandos</h2>
<pre><code># Alfabético
sort file.txt

# Inverso
sort -r file.txt

# Orden natural/por versión
sort -V file.txt</code></pre>
<h2>Herramienta online</h2>
<p>Usa nuestro <a href="%SORT%">ordenador de líneas</a> para ordenar al instante.</p>`,
  }),
  pt: build("pt", {
    title: "Ordenar linhas de texto online: Alfabético, reverso e ordem natural",
    description: "Ordene linhas de texto alfabeticamente, em ordem reversa ou natural usando nossa ferramenta online gratuita.",
    body: `<p>Ordenar linhas de texto é útil para organizar listas, limpar dados, comparar arquivos e preparar conteúdo para análise.</p>
<h2>Tipos de ordenação</h2>
<ul>
<li><strong>Alfabética (A→Z):</strong> Ordem padrão de dicionário</li>
<li><strong>Reversa (Z→A):</strong> Ordem descendente</li>
<li><strong>Ordenação natural:</strong> "item2" antes de "item10" (amigável para humanos)</li>
<li><strong>Sem distinção de maiúsculas:</strong> Ignora diferenças entre maiúsculas e minúsculas</li>
</ul>
<h2>Linha de comando</h2>
<pre><code># Alfabética
sort file.txt

# Reversa
sort -r file.txt

# Ordenação natural/por versão
sort -V file.txt</code></pre>
<h2>Ferramenta online</h2>
<p>Use nosso <a href="%SORT%">ordenador de linhas</a> para ordenar instantaneamente.</p>`,
  }),
  fr: build("fr", {
    title: "Trier les lignes de texte en ligne : Alphabétique, inversé et ordre naturel",
    description: "Triez les lignes de texte par ordre alphabétique, inversé ou naturel avec notre outil en ligne gratuit.",
    body: `<p>Trier les lignes de texte est utile pour organiser des listes, nettoyer des données, comparer des fichiers et préparer du contenu pour l'analyse.</p>
<h2>Types de tri</h2>
<ul>
<li><strong>Alphabétique (A→Z) :</strong> Ordre standard du dictionnaire</li>
<li><strong>Inversé (Z→A) :</strong> Ordre décroissant</li>
<li><strong>Tri naturel :</strong> « item2 » avant « item10 » (convivial)</li>
<li><strong>Insensible à la casse :</strong> Ignore les différences majuscules/minuscules</li>
</ul>
<h2>Ligne de commande</h2>
<pre><code># Alphabétique
sort file.txt

# Inversé
sort -r file.txt

# Tri naturel/par version
sort -V file.txt</code></pre>
<h2>Outil en ligne</h2>
<p>Utilisez notre <a href="%SORT%">outil de tri de lignes</a> pour un tri instantané.</p>`,
  }),
};
