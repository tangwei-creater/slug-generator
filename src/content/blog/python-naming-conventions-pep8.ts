import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "python-naming-conventions-pep8", date: "2026-05-31", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Python Naming Conventions (PEP 8): The Definitive Reference",
    description: "Master Python naming conventions from PEP 8. Learn the correct case for variables, functions, classes, constants, modules, and packages with examples.",
    body: `
<p>PEP 8 is Python's official style guide, and its naming conventions are followed by virtually every Python project. This guide covers every rule you need to know.</p>

<h2>Why PEP 8 Matters</h2>
<p>Python emphasizes readability. PEP 8 ensures that code written by different developers looks and feels the same. Linters like <code>flake8</code>, <code>pylint</code>, and <code>ruff</code> enforce these conventions automatically.</p>

<h2>Variable and Function Names: snake_case</h2>
<p>All variables and functions use lowercase with underscores:</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>Never use camelCase for Python functions. Writing <code>getUserById</code> is immediately recognizable as non-Pythonic.</p>

<h2>Class Names: PascalCase</h2>
<p>Classes use CapWords (PascalCase):</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>Constants: SCREAMING_SNAKE_CASE</h2>
<p>Module-level constants use all uppercase with underscores:</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>Module and Package Names</h2>
<p>Modules (files) should be short, all lowercase, with underscores if needed: <code>utils.py</code>, <code>data_loader.py</code>. Packages (directories) should be short, all lowercase, without underscores: <code>mypackage</code>.</p>

<h2>Method Names and Instance Variables</h2>
<p>Same as functions — snake_case. Use a single leading underscore for internal (non-public) methods:</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>Special Cases</h2>
<table>
<thead><tr><th>Pattern</th><th>Convention</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Private attribute</td><td>_single_leading_underscore</td><td><code>_internal_cache</code></td></tr>
<tr><td>Name mangling</td><td>__double_leading_underscore</td><td><code>__private_method</code></td></tr>
<tr><td>Magic / dunder</td><td>__double_both__</td><td><code>__init__</code>, <code>__str__</code></td></tr>
<tr><td>Throwaway variable</td><td>Single underscore</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>Type variable</td><td>PascalCase, short</td><td><code>T</code>, <code>KT</code>, <code>VT</code></td></tr>
</tbody>
</table>

<h2>Common Mistakes</h2>
<ul>
<li>Using camelCase for functions (<code>getUserName</code> instead of <code>get_user_name</code>)</li>
<li>Using lowercase for class names (<code>user_account</code> instead of <code>UserAccount</code>)</li>
<li>Using ALL_CAPS for regular variables</li>
<li>Single-letter variable names outside of loops or comprehensions</li>
</ul>

<h2>Quick-Convert Your Code</h2>
<p>If you're migrating from JavaScript or Java, use our <a href="%SNAKE%">snake_case converter</a> to quickly transform camelCase identifiers. For class names, try the <a href="%PASCAL%">PascalCase converter</a>. The <a href="%HUB%">case converter hub</a> lets you compare all formats at once.</p>

<h2>Summary</h2>
<p>PEP 8 naming is simple: snake_case for almost everything, PascalCase for classes, SCREAMING_SNAKE for constants. Follow these rules and your Python code will feel natural to every Python developer.</p>
`,
  }),
  ja: build("ja", {
    title: "Python命名規則（PEP 8）：決定版リファレンス",
    description: "PEP 8に基づくPythonの命名規則をマスター。変数、関数、クラス、定数の正しい書き方を例付きで解説。",
    body: `
<p>PEP 8はPythonの公式スタイルガイドで、ほぼすべてのPythonプロジェクトで従われています。</p>
<h2>変数と関数：snake_case</h2>
<p>すべての変数と関数は小文字とアンダースコアを使用：<code>user_name</code>、<code>get_user_by_id()</code></p>
<h2>クラス名：PascalCase</h2>
<p>クラスはCapWords形式：<code>UserAccount</code>、<code>HttpRequestHandler</code></p>
<h2>定数：SCREAMING_SNAKE_CASE</h2>
<p>モジュールレベルの定数は大文字とアンダースコア：<code>MAX_RETRY_COUNT</code></p>
<h2>変換ツール</h2>
<p><a href="%SNAKE%">snake_caseコンバーター</a>や<a href="%HUB%">ケース変換ハブ</a>で即座に変換できます。</p>
`,
  }),
  de: build("de", {
    title: "Python-Namenskonventionen (PEP 8): Die definitive Referenz",
    description: "Meistern Sie Pythons Namenskonventionen nach PEP 8. Lernen Sie die korrekte Schreibweise für Variablen, Funktionen, Klassen und Konstanten.",
    body: `
<p>PEP 8 ist Pythons offizieller Styleguide. Diese Anleitung deckt alle Namensregeln ab.</p>
<h2>Variablen und Funktionen: snake_case</h2>
<p>Kleinbuchstaben mit Unterstrichen: <code>user_name</code>, <code>get_user_by_id()</code></p>
<h2>Klassen: PascalCase</h2>
<p>CapWords-Format: <code>UserAccount</code></p>
<h2>Konstanten: SCREAMING_SNAKE_CASE</h2>
<p>Großbuchstaben mit Unterstrichen: <code>MAX_RETRY_COUNT</code></p>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%SNAKE%">snake_case-Konverter</a> oder den <a href="%HUB%">Konvertierungs-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Python (PEP 8): La referencia definitiva",
    description: "Domina las convenciones de nombres de Python según PEP 8. Aprende el formato correcto para variables, funciones, clases y constantes.",
    body: `
<p>PEP 8 es la guía de estilo oficial de Python. Esta guía cubre todas las reglas de nombres.</p>
<h2>Variables y funciones: snake_case</h2>
<p>Minúsculas con guiones bajos: <code>user_name</code>, <code>get_user_by_id()</code></p>
<h2>Clases: PascalCase</h2>
<p>Formato CapWords: <code>UserAccount</code></p>
<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Mayúsculas con guiones bajos: <code>MAX_RETRY_COUNT</code></p>
<h2>Conversión</h2>
<p>Usa nuestro <a href="%SNAKE%">conversor snake_case</a> o el <a href="%HUB%">hub de conversión</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Python (PEP 8): A referência definitiva",
    description: "Domine as convenções de nomes do Python segundo o PEP 8. Aprenda o formato correto para variáveis, funções, classes e constantes.",
    body: `
<p>PEP 8 é o guia de estilo oficial do Python. Este guia cobre todas as regras de nomes.</p>
<h2>Variáveis e funções: snake_case</h2>
<p>Minúsculas com underscores: <code>user_name</code>, <code>get_user_by_id()</code></p>
<h2>Classes: PascalCase</h2>
<p>Formato CapWords: <code>UserAccount</code></p>
<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Maiúsculas com underscores: <code>MAX_RETRY_COUNT</code></p>
<h2>Conversão</h2>
<p>Use nosso <a href="%SNAKE%">conversor snake_case</a> ou o <a href="%HUB%">hub de conversão</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Python (PEP 8) : La référence définitive",
    description: "Maîtrisez les conventions de nommage Python selon PEP 8. Apprenez le format correct pour les variables, fonctions, classes et constantes.",
    body: `
<p>PEP 8 est le guide de style officiel de Python. Ce guide couvre toutes les règles de nommage.</p>
<h2>Variables et fonctions : snake_case</h2>
<p>Minuscules avec underscores : <code>user_name</code>, <code>get_user_by_id()</code></p>
<h2>Classes : PascalCase</h2>
<p>Format CapWords : <code>UserAccount</code></p>
<h2>Constantes : SCREAMING_SNAKE_CASE</h2>
<p>Majuscules avec underscores : <code>MAX_RETRY_COUNT</code></p>
<h2>Conversion</h2>
<p>Utilisez notre <a href="%SNAKE%">convertisseur snake_case</a> ou le <a href="%HUB%">hub de conversion</a>.</p>
`,
  }),
};
