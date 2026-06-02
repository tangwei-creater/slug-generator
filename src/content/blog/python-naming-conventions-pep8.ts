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
    description: "PEP 8に基づくPythonの命名規則をマスター。変数、関数、クラス、定数、モジュール、パッケージの正しいケースを例付きで解説。",
    body: `
<p>PEP 8はPythonの公式スタイルガイドであり、その命名規則は事実上すべてのPythonプロジェクトで従われています。このガイドでは知っておくべきすべてのルールをカバーします。</p>

<h2>PEP 8が重要な理由</h2>
<p>Pythonは可読性を重視しています。PEP 8は異なる開発者が書いたコードの見た目と雰囲気を統一します。<code>flake8</code>、<code>pylint</code>、<code>ruff</code>などのリンターがこれらの規則を自動的に適用します。</p>

<h2>変数と関数名：snake_case</h2>
<p>すべての変数と関数は小文字とアンダースコアを使用します：</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>Python関数にcamelCaseを使わないでください。<code>getUserById</code>と書くと即座に非Pythonicだと分かります。</p>

<h2>クラス名：PascalCase</h2>
<p>クラスはCapWords（PascalCase）を使用します：</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>定数：SCREAMING_SNAKE_CASE</h2>
<p>モジュールレベルの定数は大文字とアンダースコアを使用します：</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>モジュールとパッケージ名</h2>
<p>モジュール（ファイル）は短く、すべて小文字、必要に応じてアンダースコア：<code>utils.py</code>、<code>data_loader.py</code>。パッケージ（ディレクトリ）は短く、すべて小文字、アンダースコアなし：<code>mypackage</code>。</p>

<h2>メソッド名とインスタンス変数</h2>
<p>関数と同じくsnake_case。非公開メソッドには先頭にアンダースコア1つ：</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>特殊なケース</h2>
<table>
<thead><tr><th>パターン</th><th>規則</th><th>例</th></tr></thead>
<tbody>
<tr><td>プライベート属性</td><td>_先頭アンダースコア1つ</td><td><code>_internal_cache</code></td></tr>
<tr><td>名前マングリング</td><td>__先頭アンダースコア2つ</td><td><code>__private_method</code></td></tr>
<tr><td>マジック/ダンダー</td><td>__両側アンダースコア2つ__</td><td><code>__init__</code>、<code>__str__</code></td></tr>
<tr><td>使い捨て変数</td><td>アンダースコア1つ</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>型変数</td><td>PascalCase、短く</td><td><code>T</code>、<code>KT</code>、<code>VT</code></td></tr>
</tbody>
</table>

<h2>よくある間違い</h2>
<ul>
<li>関数にcamelCaseを使う（<code>get_user_name</code>でなく<code>getUserName</code>）</li>
<li>クラス名に小文字を使う（<code>UserAccount</code>でなく<code>user_account</code>）</li>
<li>通常の変数にALL_CAPSを使う</li>
<li>ループや内包表記以外で1文字変数名を使う</li>
</ul>

<h2>コードを素早く変換</h2>
<p>JavaScriptやJavaから移行する場合は、<a href="%SNAKE%">snake_caseコンバーター</a>でcamelCase識別子を素早く変換できます。クラス名には<a href="%PASCAL%">PascalCaseコンバーター</a>をお試しください。<a href="%HUB%">ケース変換ハブ</a>ですべての形式を一度に比較できます。</p>

<h2>まとめ</h2>
<p>PEP 8の命名はシンプルです：ほぼすべてにsnake_case、クラスにPascalCase、定数にSCREAMING_SNAKE。これらのルールに従えば、あなたのPythonコードはすべてのPython開発者にとって自然に感じられます。</p>
`,
  }),
  de: build("de", {
    title: "Python-Namenskonventionen (PEP 8): Die definitive Referenz",
    description: "Meistern Sie Pythons Namenskonventionen nach PEP 8. Die korrekte Schreibweise für Variablen, Funktionen, Klassen, Konstanten, Module und Pakete mit Beispielen.",
    body: `
<p>PEP 8 ist Pythons offizieller Styleguide, und seine Namenskonventionen werden von praktisch jedem Python-Projekt befolgt. Dieser Guide deckt alle Regeln ab, die Sie kennen müssen.</p>

<h2>Warum PEP 8 wichtig ist</h2>
<p>Python betont Lesbarkeit. PEP 8 stellt sicher, dass Code verschiedener Entwickler gleich aussieht und sich gleich anfühlt. Linter wie <code>flake8</code>, <code>pylint</code> und <code>ruff</code> erzwingen diese Konventionen automatisch.</p>

<h2>Variablen- und Funktionsnamen: snake_case</h2>
<p>Alle Variablen und Funktionen verwenden Kleinbuchstaben mit Unterstrichen:</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>Verwenden Sie niemals camelCase für Python-Funktionen. <code>getUserById</code> zu schreiben ist sofort als nicht-pythonisch erkennbar.</p>

<h2>Klassennamen: PascalCase</h2>
<p>Klassen verwenden CapWords (PascalCase):</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>Konstanten: SCREAMING_SNAKE_CASE</h2>
<p>Konstanten auf Modulebene verwenden Großbuchstaben mit Unterstrichen:</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>Modul- und Paketnamen</h2>
<p>Module (Dateien): kurz, alles kleingeschrieben, bei Bedarf mit Unterstrichen: <code>utils.py</code>, <code>data_loader.py</code>. Pakete (Verzeichnisse): kurz, alles kleingeschrieben, ohne Unterstriche: <code>mypackage</code>.</p>

<h2>Methodennamen und Instanzvariablen</h2>
<p>Wie Funktionen — snake_case. Ein einzelner führender Unterstrich für interne (nicht-öffentliche) Methoden:</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>Spezialfälle</h2>
<table>
<thead><tr><th>Muster</th><th>Konvention</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>Privates Attribut</td><td>_einzelner_führender_Unterstrich</td><td><code>_internal_cache</code></td></tr>
<tr><td>Name Mangling</td><td>__doppelter_führender_Unterstrich</td><td><code>__private_method</code></td></tr>
<tr><td>Magic / Dunder</td><td>__beidseitig_doppelt__</td><td><code>__init__</code>, <code>__str__</code></td></tr>
<tr><td>Wegwerfvariable</td><td>Einzelner Unterstrich</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>Typvariable</td><td>PascalCase, kurz</td><td><code>T</code>, <code>KT</code>, <code>VT</code></td></tr>
</tbody>
</table>

<h2>Häufige Fehler</h2>
<ul>
<li>camelCase für Funktionen (<code>getUserName</code> statt <code>get_user_name</code>)</li>
<li>Kleinbuchstaben für Klassennamen (<code>user_account</code> statt <code>UserAccount</code>)</li>
<li>ALL_CAPS für reguläre Variablen</li>
<li>Einbuchstabige Variablennamen außerhalb von Schleifen</li>
</ul>

<h2>Code schnell konvertieren</h2>
<p>Migrieren Sie von JavaScript oder Java? Verwenden Sie unseren <a href="%SNAKE%">snake_case-Konverter</a>, um camelCase-Bezeichner schnell umzuwandeln. Für Klassennamen probieren Sie den <a href="%PASCAL%">PascalCase-Konverter</a>. Im <a href="%HUB%">Konvertierungs-Hub</a> können Sie alle Formate auf einen Blick vergleichen.</p>

<h2>Zusammenfassung</h2>
<p>PEP-8-Benennung ist einfach: snake_case für fast alles, PascalCase für Klassen, SCREAMING_SNAKE für Konstanten. Befolgen Sie diese Regeln und Ihr Python-Code fühlt sich für jeden Python-Entwickler natürlich an.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en Python (PEP 8): La referencia definitiva",
    description: "Domina las convenciones de nombres de Python según PEP 8. El formato correcto para variables, funciones, clases, constantes, módulos y paquetes con ejemplos.",
    body: `
<p>PEP 8 es la guía de estilo oficial de Python, y sus convenciones de nombres son seguidas por prácticamente todo proyecto Python. Esta guía cubre todas las reglas que necesitas conocer.</p>

<h2>Por qué PEP 8 importa</h2>
<p>Python enfatiza la legibilidad. PEP 8 asegura que el código escrito por diferentes desarrolladores se vea y se sienta igual. Linters como <code>flake8</code>, <code>pylint</code> y <code>ruff</code> aplican estas convenciones automáticamente.</p>

<h2>Nombres de variables y funciones: snake_case</h2>
<p>Todas las variables y funciones usan minúsculas con guiones bajos:</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>Nunca uses camelCase para funciones Python. Escribir <code>getUserById</code> se reconoce inmediatamente como no-Pythonic.</p>

<h2>Nombres de clases: PascalCase</h2>
<p>Las clases usan CapWords (PascalCase):</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Las constantes a nivel de módulo usan mayúsculas con guiones bajos:</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>Nombres de módulos y paquetes</h2>
<p>Módulos (archivos): cortos, todo en minúsculas, con guiones bajos si es necesario: <code>utils.py</code>, <code>data_loader.py</code>. Paquetes (directorios): cortos, todo en minúsculas, sin guiones bajos: <code>mypackage</code>.</p>

<h2>Nombres de métodos y variables de instancia</h2>
<p>Igual que las funciones — snake_case. Un guion bajo inicial para métodos internos (no públicos):</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>Casos especiales</h2>
<table>
<thead><tr><th>Patrón</th><th>Convención</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Atributo privado</td><td>_guion_bajo_inicial</td><td><code>_internal_cache</code></td></tr>
<tr><td>Name mangling</td><td>__doble_guion_bajo_inicial</td><td><code>__private_method</code></td></tr>
<tr><td>Magic / dunder</td><td>__doble_ambos_lados__</td><td><code>__init__</code>, <code>__str__</code></td></tr>
<tr><td>Variable desechable</td><td>Guion bajo solo</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>Variable de tipo</td><td>PascalCase, corto</td><td><code>T</code>, <code>KT</code>, <code>VT</code></td></tr>
</tbody>
</table>

<h2>Errores comunes</h2>
<ul>
<li>Usar camelCase para funciones (<code>getUserName</code> en vez de <code>get_user_name</code>)</li>
<li>Usar minúsculas para nombres de clases (<code>user_account</code> en vez de <code>UserAccount</code>)</li>
<li>Usar ALL_CAPS para variables normales</li>
<li>Nombres de variables de una sola letra fuera de bucles</li>
</ul>

<h2>Convierte tu código rápidamente</h2>
<p>¿Migrando desde JavaScript o Java? Usa nuestro <a href="%SNAKE%">conversor snake_case</a> para transformar identificadores camelCase rápidamente. Para nombres de clases, prueba el <a href="%PASCAL%">conversor PascalCase</a>. El <a href="%HUB%">hub de conversión</a> te permite comparar todos los formatos a la vez.</p>

<h2>Resumen</h2>
<p>La nomenclatura PEP 8 es simple: snake_case para casi todo, PascalCase para clases, SCREAMING_SNAKE para constantes. Sigue estas reglas y tu código Python se sentirá natural para todo desarrollador Python.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em Python (PEP 8): A referência definitiva",
    description: "Domine as convenções de nomes do Python segundo o PEP 8. O formato correto para variáveis, funções, classes, constantes, módulos e pacotes com exemplos.",
    body: `
<p>PEP 8 é o guia de estilo oficial do Python, e suas convenções de nomes são seguidas por virtualmente todo projeto Python. Este guia cobre todas as regras que você precisa conhecer.</p>

<h2>Por que PEP 8 importa</h2>
<p>Python enfatiza legibilidade. PEP 8 garante que código escrito por diferentes desenvolvedores pareça e funcione da mesma forma. Linters como <code>flake8</code>, <code>pylint</code> e <code>ruff</code> aplicam essas convenções automaticamente.</p>

<h2>Nomes de variáveis e funções: snake_case</h2>
<p>Todas as variáveis e funções usam minúsculas com underscores:</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>Nunca use camelCase para funções Python. Escrever <code>getUserById</code> é imediatamente reconhecível como não-Pythonic.</p>

<h2>Nomes de classes: PascalCase</h2>
<p>Classes usam CapWords (PascalCase):</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>Constantes: SCREAMING_SNAKE_CASE</h2>
<p>Constantes no nível do módulo usam maiúsculas com underscores:</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>Nomes de módulos e pacotes</h2>
<p>Módulos (arquivos): curtos, tudo em minúsculas, com underscores se necessário: <code>utils.py</code>, <code>data_loader.py</code>. Pacotes (diretórios): curtos, tudo em minúsculas, sem underscores: <code>mypackage</code>.</p>

<h2>Nomes de métodos e variáveis de instância</h2>
<p>Igual a funções — snake_case. Um underscore inicial para métodos internos (não públicos):</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>Casos especiais</h2>
<table>
<thead><tr><th>Padrão</th><th>Convenção</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Atributo privado</td><td>_underscore_inicial</td><td><code>_internal_cache</code></td></tr>
<tr><td>Name mangling</td><td>__underscore_duplo_inicial</td><td><code>__private_method</code></td></tr>
<tr><td>Magic / dunder</td><td>__duplo_ambos_lados__</td><td><code>__init__</code>, <code>__str__</code></td></tr>
<tr><td>Variável descartável</td><td>Underscore simples</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>Variável de tipo</td><td>PascalCase, curto</td><td><code>T</code>, <code>KT</code>, <code>VT</code></td></tr>
</tbody>
</table>

<h2>Erros comuns</h2>
<ul>
<li>Usar camelCase para funções (<code>getUserName</code> em vez de <code>get_user_name</code>)</li>
<li>Usar minúsculas para nomes de classes (<code>user_account</code> em vez de <code>UserAccount</code>)</li>
<li>Usar ALL_CAPS para variáveis normais</li>
<li>Nomes de variáveis de uma única letra fora de loops</li>
</ul>

<h2>Converta seu código rapidamente</h2>
<p>Migrando de JavaScript ou Java? Use nosso <a href="%SNAKE%">conversor snake_case</a> para transformar identificadores camelCase rapidamente. Para nomes de classes, experimente o <a href="%PASCAL%">conversor PascalCase</a>. O <a href="%HUB%">hub de conversão</a> permite comparar todos os formatos de uma vez.</p>

<h2>Resumo</h2>
<p>A nomenclatura PEP 8 é simples: snake_case para quase tudo, PascalCase para classes, SCREAMING_SNAKE para constantes. Siga essas regras e seu código Python se sentirá natural para todo desenvolvedor Python.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage Python (PEP 8) : La référence définitive",
    description: "Maîtrisez les conventions de nommage Python selon PEP 8. Le format correct pour les variables, fonctions, classes, constantes, modules et packages avec exemples.",
    body: `
<p>PEP 8 est le guide de style officiel de Python, et ses conventions de nommage sont suivies par pratiquement tous les projets Python. Ce guide couvre toutes les règles que vous devez connaître.</p>

<h2>Pourquoi PEP 8 est important</h2>
<p>Python met l'accent sur la lisibilité. PEP 8 garantit que le code écrit par différents développeurs a le même aspect. Des linters comme <code>flake8</code>, <code>pylint</code> et <code>ruff</code> appliquent ces conventions automatiquement.</p>

<h2>Noms de variables et fonctions : snake_case</h2>
<p>Toutes les variables et fonctions utilisent des minuscules avec des underscores :</p>
<pre><code>user_name = "Alice"
total_price = 99.95

def get_user_by_id(user_id):
    pass

def calculate_total_price(items):
    pass</code></pre>
<p>N'utilisez jamais le camelCase pour les fonctions Python. Écrire <code>getUserById</code> est immédiatement reconnaissable comme non-Pythonique.</p>

<h2>Noms de classes : PascalCase</h2>
<p>Les classes utilisent CapWords (PascalCase) :</p>
<pre><code>class UserAccount:
    pass

class HttpRequestHandler:
    pass</code></pre>

<h2>Constantes : SCREAMING_SNAKE_CASE</h2>
<p>Les constantes au niveau du module utilisent des majuscules avec des underscores :</p>
<pre><code>MAX_RETRY_COUNT = 3
API_BASE_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30</code></pre>

<h2>Noms de modules et packages</h2>
<p>Modules (fichiers) : courts, tout en minuscules, avec underscores si nécessaire : <code>utils.py</code>, <code>data_loader.py</code>. Packages (répertoires) : courts, tout en minuscules, sans underscores : <code>mypackage</code>.</p>

<h2>Noms de méthodes et variables d'instance</h2>
<p>Comme les fonctions — snake_case. Un underscore initial pour les méthodes internes (non publiques) :</p>
<pre><code>class User:
    def __init__(self, name):
        self.user_name = name
        self._internal_id = generate_id()

    def get_display_name(self):
        return self.user_name

    def _validate(self):
        pass</code></pre>

<h2>Cas spéciaux</h2>
<table>
<thead><tr><th>Modèle</th><th>Convention</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Attribut privé</td><td>_underscore_initial</td><td><code>_internal_cache</code></td></tr>
<tr><td>Name mangling</td><td>__double_underscore_initial</td><td><code>__private_method</code></td></tr>
<tr><td>Magic / dunder</td><td>__double_des_deux_côtés__</td><td><code>__init__</code>, <code>__str__</code></td></tr>
<tr><td>Variable jetable</td><td>Underscore seul</td><td><code>for _ in range(10)</code></td></tr>
<tr><td>Variable de type</td><td>PascalCase, court</td><td><code>T</code>, <code>KT</code>, <code>VT</code></td></tr>
</tbody>
</table>

<h2>Erreurs courantes</h2>
<ul>
<li>Utiliser camelCase pour les fonctions (<code>getUserName</code> au lieu de <code>get_user_name</code>)</li>
<li>Utiliser des minuscules pour les noms de classes (<code>user_account</code> au lieu de <code>UserAccount</code>)</li>
<li>Utiliser ALL_CAPS pour des variables normales</li>
<li>Noms de variables d'une seule lettre hors des boucles</li>
</ul>

<h2>Convertissez votre code rapidement</h2>
<p>Vous migrez depuis JavaScript ou Java ? Utilisez notre <a href="%SNAKE%">convertisseur snake_case</a> pour transformer rapidement les identifiants camelCase. Pour les noms de classes, essayez le <a href="%PASCAL%">convertisseur PascalCase</a>. Le <a href="%HUB%">hub de conversion</a> vous permet de comparer tous les formats d'un coup.</p>

<h2>Résumé</h2>
<p>Le nommage PEP 8 est simple : snake_case pour presque tout, PascalCase pour les classes, SCREAMING_SNAKE pour les constantes. Suivez ces règles et votre code Python semblera naturel à tout développeur Python.</p>
`,
  }),
};
