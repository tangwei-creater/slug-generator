import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-constant-case", date: "2026-05-31", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CONSTANT%", p(l, "/constant-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is CONSTANT_CASE? A Guide to Uppercase Naming for Constants",
    description: "Learn what CONSTANT_CASE is, why it exists, which languages use it, and how it signals immutability in code.",
    body: `
<p><strong>CONSTANT_CASE</strong> is identical to SCREAMING_SNAKE_CASE: all uppercase letters separated by underscores. It signals that a value is a constant — set once, never changed.</p>
<h2>Why Use a Special Case for Constants?</h2>
<p>Constants stand out visually when they're all caps. When you see <code>MAX_CONNECTIONS</code> in code, you instantly know it's a fixed value — no need to trace where it's assigned or whether it changes.</p>
<h2>Examples by Language</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>Convert to CONSTANT_CASE</h2>
<p>Use our <a href="%CONSTANT%">constant case converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "CONSTANT_CASEとは？定数命名の大文字規則ガイド",
    description: "CONSTANT_CASEの定義、なぜ定数専用の書式が存在するのか、言語別の使い方を解説します。",
    body: `
<p><strong>CONSTANT_CASE</strong>はSCREAMING_SNAKE_CASEと同じく、すべて大文字でアンダースコア区切りです。値が定数であること（一度設定したら変更されない）を示します。</p>
<h2>なぜ定数に専用の書式が必要なのか？</h2>
<p>すべて大文字にすることで定数が視覚的に目立ちます。コード中で<code>MAX_CONNECTIONS</code>を見れば、代入箇所を追跡しなくても固定値だと即座にわかります。</p>
<h2>言語別の例</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>CONSTANT_CASEに変換</h2>
<p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was ist CONSTANT_CASE? Großbuchstaben-Benennung für Konstanten",
    description: "Erfahren Sie, was CONSTANT_CASE ist, warum es existiert, welche Sprachen es nutzen und wie es Unveränderlichkeit signalisiert.",
    body: `
<p><strong>CONSTANT_CASE</strong> ist identisch mit SCREAMING_SNAKE_CASE: alle Buchstaben groß, durch Unterstriche getrennt. Es signalisiert, dass ein Wert eine Konstante ist — einmal gesetzt, nie geändert.</p>
<h2>Warum eine spezielle Schreibweise für Konstanten?</h2>
<p>Konstanten fallen visuell auf, wenn sie komplett großgeschrieben sind. Wenn Sie <code>MAX_CONNECTIONS</code> im Code sehen, wissen Sie sofort, dass es sich um einen festen Wert handelt — Sie müssen nicht nachverfolgen, wo er zugewiesen wird oder ob er sich ändert.</p>
<h2>Beispiele nach Sprache</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>In CONSTANT_CASE umwandeln</h2>
<p>Verwenden Sie unseren <a href="%CONSTANT%">Constant-Case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es CONSTANT_CASE? Guía de nombres en mayúsculas para constantes",
    description: "Aprende qué es CONSTANT_CASE, por qué existe, qué lenguajes lo usan y cómo señala inmutabilidad en el código.",
    body: `
<p><strong>CONSTANT_CASE</strong> es idéntico a SCREAMING_SNAKE_CASE: todas las letras en mayúsculas separadas por guiones bajos. Señala que un valor es una constante — se establece una vez y nunca cambia.</p>
<h2>¿Por qué un formato especial para constantes?</h2>
<p>Las constantes destacan visualmente cuando están completamente en mayúsculas. Cuando ves <code>MAX_CONNECTIONS</code> en el código, sabes al instante que es un valor fijo — sin necesidad de rastrear dónde se asigna o si cambia.</p>
<h2>Ejemplos por lenguaje</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>Convertir a CONSTANT_CASE</h2>
<p>Usa nuestro <a href="%CONSTANT%">conversor constant case</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é CONSTANT_CASE? Guia de nomes em maiúsculas para constantes",
    description: "Aprenda o que é CONSTANT_CASE, por que existe, quais linguagens o usam e como ele sinaliza imutabilidade no código.",
    body: `
<p><strong>CONSTANT_CASE</strong> é idêntico ao SCREAMING_SNAKE_CASE: todas as letras em maiúsculas separadas por underscores. Sinaliza que um valor é uma constante — definido uma vez e nunca alterado.</p>
<h2>Por que um formato especial para constantes?</h2>
<p>Constantes se destacam visualmente quando estão todas em maiúsculas. Quando você vê <code>MAX_CONNECTIONS</code> no código, sabe instantaneamente que é um valor fixo — sem precisar rastrear onde é atribuído ou se muda.</p>
<h2>Exemplos por linguagem</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>Converter para CONSTANT_CASE</h2>
<p>Use o nosso <a href="%CONSTANT%">conversor constant case</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que CONSTANT_CASE ? Guide de nommage en majuscules pour les constantes",
    description: "Découvrez ce qu'est CONSTANT_CASE, pourquoi il existe, quels langages l'utilisent et comment il signale l'immuabilité dans le code.",
    body: `
<p><strong>CONSTANT_CASE</strong> est identique à SCREAMING_SNAKE_CASE : toutes les lettres en majuscules séparées par des underscores. Il signale qu'une valeur est une constante — définie une fois, jamais modifiée.</p>
<h2>Pourquoi une casse spéciale pour les constantes ?</h2>
<p>Les constantes se distinguent visuellement quand elles sont entièrement en majuscules. Quand vous voyez <code>MAX_CONNECTIONS</code> dans le code, vous savez instantanément que c'est une valeur fixe — pas besoin de chercher où elle est assignée ou si elle change.</p>
<h2>Exemples par langage</h2>
<pre><code>// JavaScript
const API_TIMEOUT = 5000;

# Python
DATABASE_URL = "postgres://..."

// Java
public static final int MAX_RETRIES = 3;

// Rust
const MAX_THREADS: u32 = 8;</code></pre>
<h2>Convertir en CONSTANT_CASE</h2>
<p>Utilisez notre <a href="%CONSTANT%">convertisseur constant case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
