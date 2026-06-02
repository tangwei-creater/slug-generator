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
    title: "テキストからHTMLタグを除去する方法（JavaScript、Python、正規表現）",
    description: "JavaScript、Python、正規表現でHTMLタグをテキストから除去するコード例とオンラインツールを紹介します。",
    body: `<p>HTMLタグの除去は最も一般的なテキスト処理タスクの一つです。CMS出力のクリーニング、Webスクレイピング、テキスト分析の前処理などで必要になります。</p>
<h2>JavaScript</h2>
<pre><code>// DOMメソッド（最も安全）
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// 正規表現メソッド（シンプル）
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre>
<h2>Python</h2>
<pre><code>from html.parser import HTMLParser
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

# またはシンプルに：
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre>
<h2>オンラインツール</h2>
<p><a href="%CLEAN%">プレーンテキストコンバーター</a>を使えば、HTMLを即座に除去できます。</p>`,
  }),
  de: build("de", {
    title: "HTML-Tags aus Text entfernen (JavaScript, Python, Regex)",
    description: "Codebeispiele zum Entfernen von HTML-Tags aus Text in JavaScript, Python und mit Regex. Plus Online-Tool.",
    body: `<p>Das Entfernen von HTML-Tags ist eine der häufigsten Textverarbeitungsaufgaben — ob beim Bereinigen von CMS-Ausgaben, Web-Scraping oder der Vorbereitung von Text für Analysen.</p>
<h2>JavaScript</h2>
<pre><code>// DOM-Methode (am sichersten)
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Regex-Methode (einfach)
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre>
<h2>Python</h2>
<pre><code>from html.parser import HTMLParser
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

# Oder einfach:
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre>
<h2>Online-Tool</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a>, um HTML sofort zu entfernen.</p>`,
  }),
  es: build("es", {
    title: "Cómo eliminar etiquetas HTML del texto (JavaScript, Python, Regex)",
    description: "Ejemplos de código para eliminar etiquetas HTML del texto en JavaScript, Python y con regex. Más una herramienta online.",
    body: `<p>Eliminar etiquetas HTML es una de las tareas de procesamiento de texto más comunes, ya sea limpiando salidas de CMS, haciendo scraping web o preparando texto para análisis.</p>
<h2>JavaScript</h2>
<pre><code>// Método DOM (el más seguro)
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Método regex (simple)
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre>
<h2>Python</h2>
<pre><code>from html.parser import HTMLParser
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

# O simplemente:
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre>
<h2>Herramienta online</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> para eliminar HTML al instante.</p>`,
  }),
  pt: build("pt", {
    title: "Como remover tags HTML do texto (JavaScript, Python, Regex)",
    description: "Exemplos de código para remover tags HTML do texto em JavaScript, Python e com regex. Mais uma ferramenta online.",
    body: `<p>Remover tags HTML é uma das tarefas de processamento de texto mais comuns, seja limpando saídas de CMS, fazendo scraping web ou preparando texto para análise.</p>
<h2>JavaScript</h2>
<pre><code>// Método DOM (mais seguro)
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Método regex (simples)
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre>
<h2>Python</h2>
<pre><code>from html.parser import HTMLParser
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

# Ou simplesmente:
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre>
<h2>Ferramenta online</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> para remover HTML instantaneamente.</p>`,
  }),
  fr: build("fr", {
    title: "Comment supprimer les balises HTML du texte (JavaScript, Python, Regex)",
    description: "Exemples de code pour supprimer les balises HTML du texte en JavaScript, Python et avec regex. Plus un outil en ligne.",
    body: `<p>Supprimer les balises HTML est l'une des tâches de traitement de texte les plus courantes, que ce soit pour nettoyer les sorties CMS, faire du scraping web ou préparer du texte pour l'analyse.</p>
<h2>JavaScript</h2>
<pre><code>// Méthode DOM (la plus sûre)
function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Méthode regex (simple)
const text = html.replace(/&lt;[^&gt;]*&gt;/g, '');</code></pre>
<h2>Python</h2>
<pre><code>from html.parser import HTMLParser
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

# Ou simplement :
import re
re.sub(r'&lt;[^&gt;]*&gt;', '', html)</code></pre>
<h2>Outil en ligne</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> pour supprimer le HTML instantanément.</p>`,
  }),
};
