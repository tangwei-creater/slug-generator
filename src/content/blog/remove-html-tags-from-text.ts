import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "remove-html-tags-from-text", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Remove HTML Tags from Text (JavaScript, Python, Regex)",
    description: "Code examples for stripping HTML tags from text in JavaScript, Python, and with regex. Plus an online tool.",
    body: `<p>Stripping HTML tags is one of the most common text processing tasks, whether you're cleaning CMS output, scraping websites, or preparing text for analysis.</p><h2>JavaScript</h2><pre><code>// DOM method (safest)
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Regex method (simple)
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre><h2>Python</h2><pre><code>from html.parser import HTMLParser
from io import StringIO

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

# Or simply:
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre><h2>Online Tool</h2><p>Use our <a href="%CLEAN%">plain text converter</a> to strip HTML instantly.</p>`,
  }),
  ja: build("ja", {
    title: "テキストからHTMLタグを除去する方法",
    description: "JavaScript、Python、正規表現でHTMLタグを除去するコード例。",
    body: `<p>HTMLタグの除去は最も一般的なテキスト処理タスクの一つです。</p><h2>ツール</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "HTML-Tags aus Text entfernen (JavaScript, Python, Regex)",
    description: "Codebeispiele zum Entfernen von HTML-Tags.",
    body: `<p>HTML-Tags entfernen ist eine der häufigsten Textverarbeitungsaufgaben.</p><h2>Tool</h2><p><a href="%CLEAN%">Plain-Text-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar etiquetas HTML del texto (JavaScript, Python, Regex)",
    description: "Ejemplos de código para eliminar HTML.",
    body: `<p>Eliminar etiquetas HTML es una tarea de procesamiento de texto muy común.</p><h2>Herramienta</h2><p><a href="%CLEAN%">Conversor de texto plano</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover tags HTML do texto (JavaScript, Python, Regex)",
    description: "Exemplos de código para remover HTML.",
    body: `<p>Remover tags HTML é uma das tarefas de processamento de texto mais comuns.</p><h2>Ferramenta</h2><p><a href="%CLEAN%">Conversor de texto plano</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les balises HTML du texte (JavaScript, Python, Regex)",
    description: "Exemples de code pour supprimer le HTML.",
    body: `<p>Supprimer les balises HTML est l'une des tâches de traitement de texte les plus courantes.</p><h2>Outil</h2><p><a href="%CLEAN%">Convertisseur texte brut</a>.</p>`,
  }),
};
