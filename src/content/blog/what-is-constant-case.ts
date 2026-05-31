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
    description: "CONSTANT_CASEの定義、存在理由、言語別の使い方を解説。",
    body: `<p><strong>CONSTANT_CASE</strong>は全て大文字でアンダースコア区切り。定数が固定値であることを視覚的に示します。</p><h2>変換</h2><p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Was ist CONSTANT_CASE? Großbuchstaben-Benennung für Konstanten",
    description: "CONSTANT_CASE für Konstanten erklärt.",
    body: `<p><strong>CONSTANT_CASE</strong> signalisiert unveränderliche Werte durch Großbuchstaben mit Unterstrichen.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Constant-Case-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es CONSTANT_CASE? Guía de nombres en mayúsculas para constantes",
    description: "CONSTANT_CASE para constantes explicado.",
    body: `<p><strong>CONSTANT_CASE</strong> señala valores inmutables con mayúsculas y guiones bajos.</p><h2>Conversión</h2><p><a href="%CONSTANT%">Conversor constant case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é CONSTANT_CASE? Guia de nomes em maiúsculas para constantes",
    description: "CONSTANT_CASE para constantes explicado.",
    body: `<p><strong>CONSTANT_CASE</strong> sinaliza valores imutáveis com maiúsculas e underscores.</p><h2>Conversão</h2><p><a href="%CONSTANT%">Conversor constant case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que CONSTANT_CASE ? Guide de nommage en majuscules pour les constantes",
    description: "CONSTANT_CASE pour les constantes expliqué.",
    body: `<p><strong>CONSTANT_CASE</strong> signale les valeurs immuables par des majuscules avec des underscores.</p><h2>Conversion</h2><p><a href="%CONSTANT%">Convertisseur constant case</a>.</p>`,
  }),
};
