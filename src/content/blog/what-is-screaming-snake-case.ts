import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-screaming-snake-case", date: "2026-05-31", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is SCREAMING_SNAKE_CASE? When to Use ALL CAPS with Underscores",
    description: "Learn what SCREAMING_SNAKE_CASE is, when to use it for constants and environment variables, and how to convert to it.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (also called CONSTANT_CASE or UPPER_SNAKE_CASE) uses all uppercase letters with underscores as separators: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>When to Use SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constants:</strong> Values that never change at runtime — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Environment variables:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Enum values:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (in C, Python)</li>
<li><strong>Preprocessor macros:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Global config:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Language Support</h2>
<table><thead><tr><th>Language</th><th>Used For</th><th>Example</th></tr></thead><tbody>
<tr><td>Python</td><td>Module constants</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>True constants</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>static final fields</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constants</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Convert to SCREAMING_SNAKE_CASE</h2>
<p>Use our <a href="%CONSTANT%">constant case converter</a> or <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "SCREAMING_SNAKE_CASEとは？大文字アンダースコアの使い方",
    description: "SCREAMING_SNAKE_CASEの定義、定数や環境変数での使い方、変換方法を解説します。",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong>（CONSTANT_CASEやUPPER_SNAKE_CASEとも呼ばれる）は、すべて大文字でアンダースコアを区切り文字に使います：<code>MAX_RETRY_COUNT</code>、<code>API_BASE_URL</code>。</p>
<h2>SCREAMING_SNAKE_CASEを使う場面</h2>
<ul>
<li><strong>定数：</strong> 実行時に変更されない値 — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>環境変数：</strong> <code>DATABASE_URL</code>、<code>NODE_ENV</code>、<code>API_KEY</code></li>
<li><strong>Enum値：</strong> <code>COLOR_RED</code>、<code>STATUS_ACTIVE</code>（C、Python）</li>
<li><strong>プリプロセッサマクロ：</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>グローバル設定：</strong> <code>DEFAULT_TIMEOUT</code>、<code>MAX_FILE_SIZE</code></li>
</ul>
<h2>言語別サポート</h2>
<table><thead><tr><th>言語</th><th>用途</th><th>例</th></tr></thead><tbody>
<tr><td>Python</td><td>モジュール定数</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>真の定数</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>static finalフィールド</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>マクロ、定数</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>SCREAMING_SNAKE_CASEに変換</h2>
<p><a href="%CONSTANT%">定数ケースコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was ist SCREAMING_SNAKE_CASE? Großbuchstaben mit Unterstrichen",
    description: "Erfahren Sie, was SCREAMING_SNAKE_CASE ist, wann man es für Konstanten und Umgebungsvariablen verwendet und wie man es umwandelt.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (auch CONSTANT_CASE oder UPPER_SNAKE_CASE genannt) verwendet ausschließlich Großbuchstaben mit Unterstrichen als Trennzeichen: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>Wann SCREAMING_SNAKE_CASE verwenden</h2>
<ul>
<li><strong>Konstanten:</strong> Werte, die sich zur Laufzeit nie ändern — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Umgebungsvariablen:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Enum-Werte:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (in C, Python)</li>
<li><strong>Präprozessor-Makros:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Globale Konfiguration:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Sprachunterstützung</h2>
<table><thead><tr><th>Sprache</th><th>Verwendung</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Python</td><td>Modulkonstanten</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>Echte Konstanten</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>static final Felder</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Makros, Konstanten</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>In SCREAMING_SNAKE_CASE umwandeln</h2>
<p>Verwenden Sie unseren <a href="%CONSTANT%">Constant-Case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es SCREAMING_SNAKE_CASE? Cuándo usar mayúsculas con guiones bajos",
    description: "Aprende qué es SCREAMING_SNAKE_CASE, cuándo usarlo para constantes y variables de entorno, y cómo convertir a este formato.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (también llamado CONSTANT_CASE o UPPER_SNAKE_CASE) usa todas las letras en mayúsculas con guiones bajos como separadores: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>Cuándo usar SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constantes:</strong> Valores que nunca cambian en tiempo de ejecución — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Variables de entorno:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Valores de enum:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (en C, Python)</li>
<li><strong>Macros de preprocesador:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Configuración global:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Soporte por lenguaje</h2>
<table><thead><tr><th>Lenguaje</th><th>Uso</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Python</td><td>Constantes de módulo</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>Constantes reales</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>Campos static final</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constantes</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Convertir a SCREAMING_SNAKE_CASE</h2>
<p>Usa nuestro <a href="%CONSTANT%">conversor constant case</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é SCREAMING_SNAKE_CASE? Quando usar maiúsculas com underscores",
    description: "Aprenda o que é SCREAMING_SNAKE_CASE, quando usá-lo para constantes e variáveis de ambiente, e como converter para este formato.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (também chamado CONSTANT_CASE ou UPPER_SNAKE_CASE) usa todas as letras em maiúsculas com underscores como separadores: <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>Quando usar SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constantes:</strong> Valores que nunca mudam em tempo de execução — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Variáveis de ambiente:</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Valores de enum:</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (em C, Python)</li>
<li><strong>Macros de pré-processador:</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Configuração global:</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Suporte por linguagem</h2>
<table><thead><tr><th>Linguagem</th><th>Uso</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Python</td><td>Constantes de módulo</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>Constantes reais</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>Campos static final</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constantes</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Converter para SCREAMING_SNAKE_CASE</h2>
<p>Use o nosso <a href="%CONSTANT%">conversor constant case</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que SCREAMING_SNAKE_CASE ? Quand utiliser les majuscules avec underscores",
    description: "Découvrez ce qu'est SCREAMING_SNAKE_CASE, quand l'utiliser pour les constantes et variables d'environnement, et comment y convertir.",
    body: `
<p><strong>SCREAMING_SNAKE_CASE</strong> (aussi appelé CONSTANT_CASE ou UPPER_SNAKE_CASE) utilise toutes les lettres en majuscules avec des underscores comme séparateurs : <code>MAX_RETRY_COUNT</code>, <code>API_BASE_URL</code>.</p>
<h2>Quand utiliser SCREAMING_SNAKE_CASE</h2>
<ul>
<li><strong>Constantes :</strong> Valeurs qui ne changent jamais à l'exécution — <code>MAX_CONNECTIONS = 100</code></li>
<li><strong>Variables d'environnement :</strong> <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_KEY</code></li>
<li><strong>Valeurs d'enum :</strong> <code>COLOR_RED</code>, <code>STATUS_ACTIVE</code> (en C, Python)</li>
<li><strong>Macros préprocesseur :</strong> <code>#define MAX_BUFFER_SIZE 1024</code></li>
<li><strong>Configuration globale :</strong> <code>DEFAULT_TIMEOUT</code>, <code>MAX_FILE_SIZE</code></li>
</ul>
<h2>Support par langage</h2>
<table><thead><tr><th>Langage</th><th>Utilisation</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Python</td><td>Constantes de module</td><td><code>MAX_RETRY = 3</code></td></tr>
<tr><td>JavaScript</td><td>Vraies constantes</td><td><code>const API_URL = "..."</code></td></tr>
<tr><td>Java</td><td>Champs static final</td><td><code>MAX_SIZE</code></td></tr>
<tr><td>Rust</td><td>const / static</td><td><code>MAX_THREADS</code></td></tr>
<tr><td>C / C++</td><td>Macros, constantes</td><td><code>BUFFER_SIZE</code></td></tr>
</tbody></table>
<h2>Convertir en SCREAMING_SNAKE_CASE</h2>
<p>Utilisez notre <a href="%CONSTANT%">convertisseur constant case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
