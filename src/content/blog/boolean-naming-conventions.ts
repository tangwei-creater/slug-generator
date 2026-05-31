import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "boolean-naming-conventions", date: "2026-06-01", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Boolean Naming Conventions: is, has, can, should",
    description: "Learn how to name boolean variables and functions for maximum clarity across all programming languages.",
    body: `<p>Boolean names should read like yes/no questions. The four standard prefixes are <code>is</code>, <code>has</code>, <code>can</code>, and <code>should</code>.</p><h2>Prefix Guide</h2><table><thead><tr><th>Prefix</th><th>Use For</th><th>Examples</th></tr></thead><tbody><tr><td><code>is</code></td><td>State/condition</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Possession/existence</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Capability/ability</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Recommendation/expectation</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Anti-Patterns</h2><ul><li><code>flag</code> — flag for what?</li><li><code>status</code> — could be a string, not clearly boolean</li><li><code>check</code> — sounds like a function, not a variable</li><li>Double negatives: <code>isNotDisabled</code> — use <code>isEnabled</code></li></ul><h2>Convert</h2><p><a href="%CAMEL%">camelCase</a> for JS, <a href="%SNAKE%">snake_case</a> for Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ブール値の命名規則：is、has、can、should",
    description: "ブール変数と関数の明確な命名方法。",
    body: `<p>ブール値の名前はYes/Noの質問として読めるべきです。is、has、can、shouldの4つの接頭辞。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Boolean-Namenskonventionen: is, has, can, should",
    description: "Benennung von Boolean-Variablen und -Funktionen.",
    body: `<p>Boolean-Namen sollten wie Ja/Nein-Fragen lesbar sein.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para booleanos: is, has, can, should",
    description: "Cómo nombrar variables y funciones booleanas.",
    body: `<p>Los nombres booleanos deben leerse como preguntas sí/no.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para booleanos: is, has, can, should",
    description: "Como nomear variáveis e funções booleanas.",
    body: `<p>Nomes booleanos devem ser lidos como perguntas sim/não.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des booléens : is, has, can, should",
    description: "Comment nommer les variables et fonctions booléennes.",
    body: `<p>Les noms booléens doivent se lire comme des questions oui/non.</p>`,
  }),
};
