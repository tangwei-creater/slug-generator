import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "json-key-naming-conventions", date: "2026-05-31", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%JSON_CAMEL%", p(l, "/json-keys-to-camelcase"))
    .replaceAll("%JSON_SNAKE%", p(l, "/json-keys-to-snake-case"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "JSON Key Naming Conventions: camelCase vs snake_case in APIs",
    description: "Should JSON keys use camelCase or snake_case? Learn the conventions used by major APIs, the arguments for each, and how to convert between them.",
    body: `
<p>There is no official standard for JSON key naming. The JSON specification says keys are strings — it doesn't mandate a case convention. In practice, two conventions dominate: <strong>camelCase</strong> and <strong>snake_case</strong>.</p>

<h2>What Major APIs Use</h2>
<table>
<thead><tr><th>API / Platform</th><th>Convention</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>The Case for camelCase</h2>
<ul>
<li>Native to JavaScript — no conversion needed in frontend code</li>
<li>Used by Google's JSON Style Guide</li>
<li>Shorter than snake_case (no underscores)</li>
<li>Natural fit for APIs consumed primarily by web/mobile clients</li>
</ul>

<h2>The Case for snake_case</h2>
<ul>
<li>More readable — underscores create visual word boundaries</li>
<li>Native to Python, Ruby, and SQL — no conversion needed in backend code</li>
<li>Used by most of the largest APIs (GitHub, Twitter, Stripe)</li>
<li>Consistent with database column names (which are almost always snake_case)</li>
</ul>

<h2>The Real Answer: Match Your Stack</h2>
<p>The best convention depends on where the JSON is produced and consumed:</p>
<table>
<thead><tr><th>Scenario</th><th>Recommended</th><th>Why</th></tr></thead>
<tbody>
<tr><td>JavaScript backend + JavaScript frontend</td><td>camelCase</td><td>No conversion needed anywhere</td></tr>
<tr><td>Python/Ruby backend + any frontend</td><td>snake_case</td><td>Matches backend idioms; frontends can convert</td></tr>
<tr><td>Public API consumed by many languages</td><td>snake_case</td><td>More universally readable</td></tr>
<tr><td>Internal microservices</td><td>Either (just be consistent)</td><td>Internal consistency matters most</td></tr>
</tbody>
</table>

<h2>Converting at the Boundary</h2>
<p>In practice, many teams convert JSON keys at the API boundary. A Python backend returns snake_case, and a middleware or client-side utility converts to camelCase for the React frontend. Libraries like <code>humps</code> (JavaScript) and <code>djangorestframework-camel-case</code> (Python) automate this.</p>

<h2>Rules for Good JSON Keys</h2>
<ul>
<li><strong>Be consistent.</strong> Don't mix <code>userId</code> and <code>user_name</code> in the same response.</li>
<li><strong>Use descriptive names.</strong> <code>createdAt</code> beats <code>ca</code>.</li>
<li><strong>Avoid abbreviations.</strong> <code>organizationId</code> not <code>orgId</code>.</li>
<li><strong>Use plural for arrays.</strong> <code>items</code> not <code>item</code> for a list.</li>
<li><strong>Avoid nesting deeper than 3 levels.</strong> Flatten when possible.</li>
</ul>

<h2>Convert JSON Keys Instantly</h2>
<p>Use our <a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a> converter to transform API responses. For plain text, try the <a href="%CAMEL%">camelCase converter</a> or the <a href="%HUB%">case converter hub</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "JSONキーの命名規則：APIにおけるcamelCase vs snake_case",
    description: "JSONキーはcamelCaseとsnake_caseのどちらを使うべきか？主要APIの慣例、各方式の利点、変換方法を解説。",
    body: `
<p>JSON仕様にはキーの命名規則の規定はありません。実際には<strong>camelCase</strong>と<strong>snake_case</strong>が主流です。</p>
<h2>主要APIの採用状況</h2>
<table><thead><tr><th>API</th><th>規則</th></tr></thead>
<tbody>
<tr><td>Google</td><td>camelCase</td></tr>
<tr><td>GitHub</td><td>snake_case</td></tr>
<tr><td>Stripe</td><td>snake_case</td></tr>
<tr><td>Firebase</td><td>camelCase</td></tr>
</tbody></table>
<h2>選択基準</h2>
<p>JavaScript中心のスタックならcamelCase、Python/Ruby中心ならsnake_caseが最適です。</p>
<h2>変換ツール</h2>
<p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに変換</a>または<a href="%JSON_SNAKE%">snake_caseに変換</a>できます。</p>
`,
  }),
  de: build("de", {
    title: "JSON-Key-Namenskonventionen: camelCase vs snake_case in APIs",
    description: "Sollten JSON-Keys camelCase oder snake_case verwenden? Die Konventionen großer APIs und wie man zwischen ihnen konvertiert.",
    body: `
<p>Die JSON-Spezifikation gibt keine Namenskonvention für Keys vor. In der Praxis dominieren <strong>camelCase</strong> und <strong>snake_case</strong>.</p>
<h2>Was große APIs verwenden</h2>
<p>Google und Firebase: camelCase. GitHub, Twitter und Stripe: snake_case.</p>
<h2>Empfehlung</h2>
<p>JavaScript-Stack: camelCase. Python/Ruby-Stack: snake_case. Wichtigster Grundsatz: Konsistenz.</p>
<h2>Konvertierung</h2>
<p>Verwenden Sie unseren <a href="%JSON_CAMEL%">JSON-Keys-zu-camelCase</a> oder <a href="%JSON_SNAKE%">JSON-Keys-zu-snake_case</a> Konverter.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para claves JSON: camelCase vs snake_case en APIs",
    description: "¿Las claves JSON deben usar camelCase o snake_case? Convenciones de las principales APIs y cómo convertir entre ellas.",
    body: `
<p>La especificación JSON no impone una convención de nombres para las claves. En la práctica, dominan <strong>camelCase</strong> y <strong>snake_case</strong>.</p>
<h2>Qué usan las grandes APIs</h2>
<p>Google y Firebase: camelCase. GitHub, Twitter y Stripe: snake_case.</p>
<h2>Recomendación</h2>
<p>Stack JavaScript: camelCase. Stack Python/Ruby: snake_case. Lo más importante: consistencia.</p>
<h2>Conversión</h2>
<p>Usa nuestro conversor de <a href="%JSON_CAMEL%">claves JSON a camelCase</a> o <a href="%JSON_SNAKE%">claves JSON a snake_case</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para chaves JSON: camelCase vs snake_case em APIs",
    description: "As chaves JSON devem usar camelCase ou snake_case? Convenções das principais APIs e como converter entre elas.",
    body: `
<p>A especificação JSON não impõe uma convenção de nomes para as chaves. Na prática, dominam <strong>camelCase</strong> e <strong>snake_case</strong>.</p>
<h2>O que as grandes APIs usam</h2>
<p>Google e Firebase: camelCase. GitHub, Twitter e Stripe: snake_case.</p>
<h2>Recomendação</h2>
<p>Stack JavaScript: camelCase. Stack Python/Ruby: snake_case. O mais importante: consistência.</p>
<h2>Conversão</h2>
<p>Use nosso conversor de <a href="%JSON_CAMEL%">chaves JSON para camelCase</a> ou <a href="%JSON_SNAKE%">chaves JSON para snake_case</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des clés JSON : camelCase vs snake_case dans les APIs",
    description: "Les clés JSON doivent-elles utiliser camelCase ou snake_case ? Conventions des grandes APIs et comment convertir entre elles.",
    body: `
<p>La spécification JSON n'impose pas de convention de nommage pour les clés. En pratique, <strong>camelCase</strong> et <strong>snake_case</strong> dominent.</p>
<h2>Ce qu'utilisent les grandes APIs</h2>
<p>Google et Firebase : camelCase. GitHub, Twitter et Stripe : snake_case.</p>
<h2>Recommandation</h2>
<p>Stack JavaScript : camelCase. Stack Python/Ruby : snake_case. Le plus important : la cohérence.</p>
<h2>Conversion</h2>
<p>Utilisez notre convertisseur de <a href="%JSON_CAMEL%">clés JSON en camelCase</a> ou <a href="%JSON_SNAKE%">clés JSON en snake_case</a>.</p>
`,
  }),
};
