import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-name-variables", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%HUB%", p(l, "/case-converter-online"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Name Variables: A Developer's Guide to Clean, Readable Code",
    description: "Learn variable naming best practices that make code self-documenting. Covers naming rules, patterns, anti-patterns, and language-specific conventions.",
    body: `
<p>Variable naming is the most frequent design decision a programmer makes. Good names make code self-documenting; bad names force readers to decode your logic.</p>
<h2>Core Principles</h2>
<ul>
<li><strong>Reveal intent:</strong> <code>elapsedTimeInDays</code> not <code>d</code></li>
<li><strong>Avoid disinformation:</strong> Don't call a list <code>accountList</code> if it's actually a set</li>
<li><strong>Use pronounceable names:</strong> <code>generationTimestamp</code> not <code>genymdhms</code></li>
<li><strong>Use searchable names:</strong> <code>MAX_STUDENTS_PER_CLASS</code> not <code>7</code></li>
</ul>
<h2>Naming Patterns by Type</h2>
<table><thead><tr><th>Type</th><th>Pattern</th><th>Examples</th></tr></thead><tbody>
<tr><td>Boolean</td><td>is/has/can/should + adjective</td><td><code>isActive</code>, <code>hasPermission</code></td></tr>
<tr><td>Counter</td><td>noun + Count/Total</td><td><code>retryCount</code>, <code>totalItems</code></td></tr>
<tr><td>Collection</td><td>Plural noun</td><td><code>users</code>, <code>selectedItems</code></td></tr>
<tr><td>Function</td><td>verb + noun</td><td><code>calculateTotal</code>, <code>fetchUser</code></td></tr>
<tr><td>Event handler</td><td>handle/on + event</td><td><code>handleClick</code>, <code>onSubmit</code></td></tr>
</tbody></table>
<h2>Anti-Patterns</h2>
<ul>
<li><code>data</code>, <code>info</code>, <code>temp</code>, <code>stuff</code> — too vague</li>
<li><code>a</code>, <code>b</code>, <code>x</code> — acceptable only in lambdas and math formulas</li>
<li><code>flag</code> — flag for what? Use <code>isEnabled</code> instead</li>
<li>Hungarian notation (<code>strName</code>, <code>intAge</code>) — outdated with modern IDEs</li>
</ul>
<h2>Format Your Names</h2>
<p>Use the <a href="%CAMEL%">camelCase converter</a> for JavaScript variables, <a href="%SNAKE%">snake_case converter</a> for Python, or the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "変数の命名方法：読みやすいコードのための開発者ガイド",
    description: "コードを自己文書化する変数命名のベストプラクティス。命名ルール、パターン、アンチパターンを解説。",
    body: `<p>変数命名はプログラマーが最も頻繁に行う設計判断です。良い名前はコードを自己文書化します。</p><h2>核心原則</h2><ul><li>意図を明かす：<code>elapsedTimeInDays</code></li><li>検索可能な名前を使う</li><li>発音可能な名前を使う</li></ul><h2>変換</h2><p><a href="%HUB%">ケース変換ハブ</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Variablen benennen: Ein Entwickler-Leitfaden für sauberen Code",
    description: "Best Practices für Variablenbenennung, die Code selbstdokumentierend macht.",
    body: `<p>Variablenbenennung ist die häufigste Designentscheidung. Gute Namen machen Code selbstdokumentierend.</p><h2>Konvertierung</h2><p><a href="%HUB%">Konvertierungs-Hub</a> verwenden.</p>`,
  }),
  es: build("es", {
    title: "Cómo nombrar variables: Guía para código limpio y legible",
    description: "Mejores prácticas para nombrar variables que hacen el código autodocumentado.",
    body: `<p>Nombrar variables es la decisión de diseño más frecuente. Buenos nombres hacen el código autodocumentado.</p><h2>Conversión</h2><p>Usa el <a href="%HUB%">hub de conversión</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como nomear variáveis: Guia para código limpo e legível",
    description: "Melhores práticas de nomeação de variáveis para código autodocumentado.",
    body: `<p>Nomear variáveis é a decisão de design mais frequente. Bons nomes tornam o código autodocumentado.</p><h2>Conversão</h2><p>Use o <a href="%HUB%">hub de conversão</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment nommer les variables : Guide pour un code propre et lisible",
    description: "Bonnes pratiques de nommage des variables pour un code autodocumenté.",
    body: `<p>Nommer les variables est la décision de conception la plus fréquente. De bons noms rendent le code autodocumenté.</p><h2>Conversion</h2><p>Utilisez le <a href="%HUB%">hub de conversion</a>.</p>`,
  }),
};
