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
    description: "あらゆるプログラミング言語で最大限に明確になるよう、ブール変数と関数を命名する方法を学びましょう。",
    body: `<p>ブール値の名前はYes/Noの質問として読めるべきです。標準的な4つの接頭辞は<code>is</code>、<code>has</code>、<code>can</code>、<code>should</code>です。</p><h2>接頭辞ガイド</h2><table><thead><tr><th>接頭辞</th><th>用途</th><th>例</th></tr></thead><tbody><tr><td><code>is</code></td><td>状態・条件</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>所有・存在</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>能力・可否</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>推奨・期待</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>アンチパターン</h2><ul><li><code>flag</code> — 何のフラグ?</li><li><code>status</code> — 文字列かもしれず、ブール値か不明確</li><li><code>check</code> — 変数ではなく関数に聞こえる</li><li>二重否定: <code>isNotDisabled</code> — <code>isEnabled</code>を使う</li></ul><h2>変換</h2><p>JSには<a href="%CAMEL%">camelCase</a>、Pythonには<a href="%SNAKE%">snake_case</a>。<a href="%HUB%">ハブはこちら</a>。</p>`,
  }),
  de: build("de", {
    title: "Boolean-Namenskonventionen: is, has, can, should",
    description: "Lernen Sie, Boolean-Variablen und -Funktionen für maximale Klarheit in allen Programmiersprachen zu benennen.",
    body: `<p>Boolean-Namen sollten wie Ja/Nein-Fragen lesbar sein. Die vier Standard-Präfixe sind <code>is</code>, <code>has</code>, <code>can</code> und <code>should</code>.</p><h2>Präfix-Leitfaden</h2><table><thead><tr><th>Präfix</th><th>Verwendung für</th><th>Beispiele</th></tr></thead><tbody><tr><td><code>is</code></td><td>Zustand/Bedingung</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Besitz/Existenz</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Fähigkeit/Möglichkeit</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Empfehlung/Erwartung</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Anti-Muster</h2><ul><li><code>flag</code> — Flag wofür?</li><li><code>status</code> — könnte ein String sein, nicht eindeutig boolean</li><li><code>check</code> — klingt wie eine Funktion, nicht wie eine Variable</li><li>Doppelte Verneinung: <code>isNotDisabled</code> — verwenden Sie <code>isEnabled</code></li></ul><h2>Konvertieren</h2><p><a href="%CAMEL%">camelCase</a> für JS, <a href="%SNAKE%">snake_case</a> für Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para booleanos: is, has, can, should",
    description: "Aprende a nombrar variables y funciones booleanas con la máxima claridad en todos los lenguajes de programación.",
    body: `<p>Los nombres booleanos deben leerse como preguntas sí/no. Los cuatro prefijos estándar son <code>is</code>, <code>has</code>, <code>can</code> y <code>should</code>.</p><h2>Guía de prefijos</h2><table><thead><tr><th>Prefijo</th><th>Usar para</th><th>Ejemplos</th></tr></thead><tbody><tr><td><code>is</code></td><td>Estado/condición</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Posesión/existencia</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Capacidad/habilidad</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Recomendación/expectativa</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Antipatrones</h2><ul><li><code>flag</code> — ¿bandera de qué?</li><li><code>status</code> — podría ser un string, no claramente booleano</li><li><code>check</code> — suena a función, no a variable</li><li>Dobles negaciones: <code>isNotDisabled</code> — usa <code>isEnabled</code></li></ul><h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a> para JS, <a href="%SNAKE%">snake_case</a> para Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para booleanos: is, has, can, should",
    description: "Aprenda a nomear variáveis e funções booleanas com a máxima clareza em todas as linguagens de programação.",
    body: `<p>Nomes booleanos devem ser lidos como perguntas sim/não. Os quatro prefixos padrão são <code>is</code>, <code>has</code>, <code>can</code> e <code>should</code>.</p><h2>Guia de prefixos</h2><table><thead><tr><th>Prefixo</th><th>Usar para</th><th>Exemplos</th></tr></thead><tbody><tr><td><code>is</code></td><td>Estado/condição</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Posse/existência</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Capacidade/habilidade</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Recomendação/expectativa</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Antipadrões</h2><ul><li><code>flag</code> — flag de quê?</li><li><code>status</code> — pode ser uma string, não claramente booleano</li><li><code>check</code> — soa como uma função, não uma variável</li><li>Dupla negação: <code>isNotDisabled</code> — use <code>isEnabled</code></li></ul><h2>Converter</h2><p><a href="%CAMEL%">camelCase</a> para JS, <a href="%SNAKE%">snake_case</a> para Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des booléens : is, has, can, should",
    description: "Apprenez à nommer les variables et fonctions booléennes avec un maximum de clarté dans tous les langages de programmation.",
    body: `<p>Les noms booléens doivent se lire comme des questions oui/non. Les quatre préfixes standard sont <code>is</code>, <code>has</code>, <code>can</code> et <code>should</code>.</p><h2>Guide des préfixes</h2><table><thead><tr><th>Préfixe</th><th>À utiliser pour</th><th>Exemples</th></tr></thead><tbody><tr><td><code>is</code></td><td>État/condition</td><td><code>isActive</code>, <code>isLoading</code>, <code>isValid</code></td></tr><tr><td><code>has</code></td><td>Possession/existence</td><td><code>hasPermission</code>, <code>hasChildren</code></td></tr><tr><td><code>can</code></td><td>Capacité/possibilité</td><td><code>canEdit</code>, <code>canDelete</code></td></tr><tr><td><code>should</code></td><td>Recommandation/attente</td><td><code>shouldRedirect</code>, <code>shouldRetry</code></td></tr></tbody></table><h2>Anti-patterns</h2><ul><li><code>flag</code> — flag pour quoi ?</li><li><code>status</code> — pourrait être une chaîne, pas clairement booléen</li><li><code>check</code> — ressemble à une fonction, pas à une variable</li><li>Doubles négations : <code>isNotDisabled</code> — utilisez <code>isEnabled</code></li></ul><h2>Convertir</h2><p><a href="%CAMEL%">camelCase</a> pour JS, <a href="%SNAKE%">snake_case</a> pour Python. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
