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
    description: "JSONキーはcamelCaseとsnake_caseのどちらを使うべきか？主要APIの慣例、各方式の利点、変換方法を解説します。",
    body: `
<p>JSON仕様にはキーの命名規則に関する規定がありません。仕様上、キーは「文字列」とだけ定義されており、ケースの指定はありません。実務では<strong>camelCase</strong>と<strong>snake_case</strong>の2つが主流となっています。</p>

<h2>主要APIの採用状況</h2>
<table>
<thead><tr><th>API / プラットフォーム</th><th>規則</th><th>例</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>camelCaseを推す理由</h2>
<ul>
<li>JavaScriptのネイティブスタイルであり、フロントエンドで変換不要</li>
<li>GoogleのJSON Style Guideで推奨されている</li>
<li>アンダースコアがない分、snake_caseより短い</li>
<li>Web/モバイルクライアントが主な消費者のAPIに自然にフィットする</li>
</ul>

<h2>snake_caseを推す理由</h2>
<ul>
<li>アンダースコアが単語境界を視覚的に示し、可読性が高い</li>
<li>Python、Ruby、SQLのネイティブスタイルであり、バックエンドで変換不要</li>
<li>最大級のAPI（GitHub、Twitter、Stripe）の大半が採用している</li>
<li>データベースのカラム名（ほぼ常にsnake_case）と一貫性が保てる</li>
</ul>

<h2>本当の答え：スタックに合わせる</h2>
<p>最適な規則は、JSONの生成側と消費側によって決まります。</p>
<table>
<thead><tr><th>シナリオ</th><th>推奨</th><th>理由</th></tr></thead>
<tbody>
<tr><td>JSバックエンド + JSフロントエンド</td><td>camelCase</td><td>どこでも変換不要</td></tr>
<tr><td>Python/Rubyバックエンド + 任意のフロントエンド</td><td>snake_case</td><td>バックエンドの慣例に合致、フロントエンド側で変換可能</td></tr>
<tr><td>多言語対応の公開API</td><td>snake_case</td><td>より広い開発者に読みやすい</td></tr>
<tr><td>内部マイクロサービス</td><td>どちらでも（統一が重要）</td><td>内部の一貫性が最優先</td></tr>
</tbody>
</table>

<h2>境界での変換</h2>
<p>実際の開発では、多くのチームがAPIの境界でJSONキーを変換しています。Pythonバックエンドがsnake_caseで返し、ミドルウェアやクライアント側のユーティリティがReactフロントエンド用にcamelCaseへ変換する、というパターンです。<code>humps</code>（JavaScript）や<code>djangorestframework-camel-case</code>（Python）などのライブラリがこれを自動化します。</p>

<h2>良いJSONキーのルール</h2>
<ul>
<li><strong>一貫性を保つ。</strong>同じレスポンス内で<code>userId</code>と<code>user_name</code>を混在させない。</li>
<li><strong>説明的な名前を使う。</strong><code>createdAt</code>であって<code>ca</code>ではない。</li>
<li><strong>略語を避ける。</strong><code>organizationId</code>であって<code>orgId</code>ではない。</li>
<li><strong>配列には複数形を使う。</strong>リストには<code>items</code>であって<code>item</code>ではない。</li>
<li><strong>3階層以上のネストを避ける。</strong>可能な限りフラットにする。</li>
</ul>

<h2>JSONキーを即座に変換</h2>
<p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに変換</a>または<a href="%JSON_SNAKE%">JSONキーをsnake_caseに変換</a>できます。プレーンテキストの変換には<a href="%CAMEL%">camelCaseコンバーター</a>や<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "JSON-Key-Namenskonventionen: camelCase vs snake_case in APIs",
    description: "Sollten JSON-Keys camelCase oder snake_case verwenden? Erfahren Sie die Konventionen großer APIs, die Argumente für jede Variante und wie man zwischen ihnen konvertiert.",
    body: `
<p>Es gibt keinen offiziellen Standard für die Benennung von JSON-Keys. Die JSON-Spezifikation definiert Keys als Strings — eine bestimmte Schreibkonvention wird nicht vorgeschrieben. In der Praxis dominieren zwei Konventionen: <strong>camelCase</strong> und <strong>snake_case</strong>.</p>

<h2>Was große APIs verwenden</h2>
<table>
<thead><tr><th>API / Plattform</th><th>Konvention</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>Argumente für camelCase</h2>
<ul>
<li>Native in JavaScript — keine Konvertierung im Frontend-Code nötig</li>
<li>Empfohlen von Googles JSON Style Guide</li>
<li>Kürzer als snake_case (keine Unterstriche)</li>
<li>Natürliche Wahl für APIs, die hauptsächlich von Web-/Mobil-Clients konsumiert werden</li>
</ul>

<h2>Argumente für snake_case</h2>
<ul>
<li>Besser lesbar — Unterstriche schaffen visuelle Wortgrenzen</li>
<li>Native in Python, Ruby und SQL — keine Konvertierung im Backend-Code nötig</li>
<li>Wird von den meisten der größten APIs verwendet (GitHub, Twitter, Stripe)</li>
<li>Konsistent mit Datenbank-Spaltennamen (die fast immer snake_case sind)</li>
</ul>

<h2>Die echte Antwort: Passen Sie sich Ihrem Stack an</h2>
<p>Die beste Konvention hängt davon ab, wo das JSON erzeugt und konsumiert wird:</p>
<table>
<thead><tr><th>Szenario</th><th>Empfehlung</th><th>Warum</th></tr></thead>
<tbody>
<tr><td>JavaScript-Backend + JavaScript-Frontend</td><td>camelCase</td><td>Nirgendwo Konvertierung nötig</td></tr>
<tr><td>Python/Ruby-Backend + beliebiges Frontend</td><td>snake_case</td><td>Passt zu Backend-Idiomen; Frontends können konvertieren</td></tr>
<tr><td>Öffentliche API für viele Sprachen</td><td>snake_case</td><td>Universeller lesbar</td></tr>
<tr><td>Interne Microservices</td><td>Beides (Hauptsache konsistent)</td><td>Interne Konsistenz ist am wichtigsten</td></tr>
</tbody>
</table>

<h2>Konvertierung an der Grenze</h2>
<p>In der Praxis konvertieren viele Teams JSON-Keys an der API-Grenze. Ein Python-Backend gibt snake_case zurück, und eine Middleware oder ein clientseitiges Utility konvertiert für das React-Frontend zu camelCase. Bibliotheken wie <code>humps</code> (JavaScript) und <code>djangorestframework-camel-case</code> (Python) automatisieren dies.</p>

<h2>Regeln für gute JSON-Keys</h2>
<ul>
<li><strong>Seien Sie konsistent.</strong> Mischen Sie nicht <code>userId</code> und <code>user_name</code> in derselben Antwort.</li>
<li><strong>Verwenden Sie beschreibende Namen.</strong> <code>createdAt</code> statt <code>ca</code>.</li>
<li><strong>Vermeiden Sie Abkürzungen.</strong> <code>organizationId</code> statt <code>orgId</code>.</li>
<li><strong>Verwenden Sie Pluralformen für Arrays.</strong> <code>items</code> statt <code>item</code> für eine Liste.</li>
<li><strong>Vermeiden Sie Verschachtelungen tiefer als 3 Ebenen.</strong> Flachen Sie ab, wo möglich.</li>
</ul>

<h2>JSON-Keys sofort konvertieren</h2>
<p>Verwenden Sie unseren <a href="%JSON_CAMEL%">JSON-Keys-zu-camelCase</a> oder <a href="%JSON_SNAKE%">JSON-Keys-zu-snake_case</a> Konverter. Für einfachen Text nutzen Sie den <a href="%CAMEL%">camelCase-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>
`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para claves JSON: camelCase vs snake_case en APIs",
    description: "¿Las claves JSON deben usar camelCase o snake_case? Conoce las convenciones de las principales APIs, los argumentos a favor de cada una y cómo convertir entre ellas.",
    body: `
<p>No existe un estándar oficial para nombrar claves JSON. La especificación JSON solo dice que las claves son cadenas de texto — no establece una convención de estilo. En la práctica, dominan dos convenciones: <strong>camelCase</strong> y <strong>snake_case</strong>.</p>

<h2>Qué usan las grandes APIs</h2>
<table>
<thead><tr><th>API / Plataforma</th><th>Convención</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>Argumentos a favor de camelCase</h2>
<ul>
<li>Nativo en JavaScript — no requiere conversión en el código frontend</li>
<li>Recomendado por la Google JSON Style Guide</li>
<li>Más corto que snake_case (sin guiones bajos)</li>
<li>Encaja naturalmente en APIs consumidas principalmente por clientes web/móvil</li>
</ul>

<h2>Argumentos a favor de snake_case</h2>
<ul>
<li>Más legible — los guiones bajos crean límites visuales entre palabras</li>
<li>Nativo en Python, Ruby y SQL — no requiere conversión en el backend</li>
<li>Usado por la mayoría de las APIs más grandes (GitHub, Twitter, Stripe)</li>
<li>Consistente con los nombres de columnas de bases de datos (que casi siempre son snake_case)</li>
</ul>

<h2>La verdadera respuesta: adáptate a tu stack</h2>
<p>La mejor convención depende de dónde se produce y consume el JSON:</p>
<table>
<thead><tr><th>Escenario</th><th>Recomendado</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>Backend JavaScript + frontend JavaScript</td><td>camelCase</td><td>No se necesita conversión en ningún punto</td></tr>
<tr><td>Backend Python/Ruby + cualquier frontend</td><td>snake_case</td><td>Coincide con los modismos del backend; los frontends pueden convertir</td></tr>
<tr><td>API pública para muchos lenguajes</td><td>snake_case</td><td>Más universalmente legible</td></tr>
<tr><td>Microservicios internos</td><td>Cualquiera (lo importante es la consistencia)</td><td>La consistencia interna es lo más importante</td></tr>
</tbody>
</table>

<h2>Conversión en la frontera</h2>
<p>En la práctica, muchos equipos convierten las claves JSON en la frontera de la API. Un backend Python devuelve snake_case, y un middleware o utilidad del lado del cliente convierte a camelCase para el frontend React. Bibliotecas como <code>humps</code> (JavaScript) y <code>djangorestframework-camel-case</code> (Python) automatizan este proceso.</p>

<h2>Reglas para buenas claves JSON</h2>
<ul>
<li><strong>Sé consistente.</strong> No mezcles <code>userId</code> y <code>user_name</code> en la misma respuesta.</li>
<li><strong>Usa nombres descriptivos.</strong> <code>createdAt</code> en lugar de <code>ca</code>.</li>
<li><strong>Evita abreviaturas.</strong> <code>organizationId</code> en lugar de <code>orgId</code>.</li>
<li><strong>Usa plural para arrays.</strong> <code>items</code> en lugar de <code>item</code> para una lista.</li>
<li><strong>Evita anidar más de 3 niveles.</strong> Aplana cuando sea posible.</li>
</ul>

<h2>Convierte claves JSON al instante</h2>
<p>Usa nuestro conversor de <a href="%JSON_CAMEL%">claves JSON a camelCase</a> o <a href="%JSON_SNAKE%">claves JSON a snake_case</a>. Para texto plano, prueba el <a href="%CAMEL%">conversor camelCase</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para chaves JSON: camelCase vs snake_case em APIs",
    description: "As chaves JSON devem usar camelCase ou snake_case? Conheça as convenções das principais APIs, os argumentos a favor de cada uma e como converter entre elas.",
    body: `
<p>Não existe um padrão oficial para nomenclatura de chaves JSON. A especificação JSON apenas diz que as chaves são strings — não determina uma convenção de estilo. Na prática, duas convenções dominam: <strong>camelCase</strong> e <strong>snake_case</strong>.</p>

<h2>O que as grandes APIs usam</h2>
<table>
<thead><tr><th>API / Plataforma</th><th>Convenção</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>Argumentos a favor do camelCase</h2>
<ul>
<li>Nativo em JavaScript — nenhuma conversão necessária no código frontend</li>
<li>Recomendado pelo Google JSON Style Guide</li>
<li>Mais curto que snake_case (sem underscores)</li>
<li>Encaixa naturalmente em APIs consumidas principalmente por clientes web/mobile</li>
</ul>

<h2>Argumentos a favor do snake_case</h2>
<ul>
<li>Mais legível — underscores criam fronteiras visuais entre palavras</li>
<li>Nativo em Python, Ruby e SQL — nenhuma conversão necessária no backend</li>
<li>Usado pela maioria das maiores APIs (GitHub, Twitter, Stripe)</li>
<li>Consistente com nomes de colunas de banco de dados (que quase sempre são snake_case)</li>
</ul>

<h2>A verdadeira resposta: adapte-se ao seu stack</h2>
<p>A melhor convenção depende de onde o JSON é produzido e consumido:</p>
<table>
<thead><tr><th>Cenário</th><th>Recomendado</th><th>Por quê</th></tr></thead>
<tbody>
<tr><td>Backend JavaScript + frontend JavaScript</td><td>camelCase</td><td>Nenhuma conversão necessária em lugar nenhum</td></tr>
<tr><td>Backend Python/Ruby + qualquer frontend</td><td>snake_case</td><td>Coincide com idiomas do backend; frontends podem converter</td></tr>
<tr><td>API pública para muitas linguagens</td><td>snake_case</td><td>Mais universalmente legível</td></tr>
<tr><td>Microsserviços internos</td><td>Qualquer um (o importante é a consistência)</td><td>Consistência interna é o mais importante</td></tr>
</tbody>
</table>

<h2>Conversão na fronteira</h2>
<p>Na prática, muitas equipes convertem chaves JSON na fronteira da API. Um backend Python retorna snake_case, e um middleware ou utilitário do lado do cliente converte para camelCase para o frontend React. Bibliotecas como <code>humps</code> (JavaScript) e <code>djangorestframework-camel-case</code> (Python) automatizam esse processo.</p>

<h2>Regras para boas chaves JSON</h2>
<ul>
<li><strong>Seja consistente.</strong> Não misture <code>userId</code> e <code>user_name</code> na mesma resposta.</li>
<li><strong>Use nomes descritivos.</strong> <code>createdAt</code> em vez de <code>ca</code>.</li>
<li><strong>Evite abreviações.</strong> <code>organizationId</code> em vez de <code>orgId</code>.</li>
<li><strong>Use plural para arrays.</strong> <code>items</code> em vez de <code>item</code> para uma lista.</li>
<li><strong>Evite aninhamento maior que 3 níveis.</strong> Aplaine quando possível.</li>
</ul>

<h2>Converta chaves JSON instantaneamente</h2>
<p>Use nosso conversor de <a href="%JSON_CAMEL%">chaves JSON para camelCase</a> ou <a href="%JSON_SNAKE%">chaves JSON para snake_case</a>. Para texto simples, experimente o <a href="%CAMEL%">conversor camelCase</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des clés JSON : camelCase vs snake_case dans les APIs",
    description: "Les clés JSON doivent-elles utiliser camelCase ou snake_case ? Découvrez les conventions des grandes APIs, les arguments pour chaque option et comment convertir entre elles.",
    body: `
<p>Il n'existe pas de standard officiel pour nommer les clés JSON. La spécification JSON indique que les clés sont des chaînes de caractères — elle n'impose pas de convention de casse. En pratique, deux conventions dominent : <strong>camelCase</strong> et <strong>snake_case</strong>.</p>

<h2>Ce qu'utilisent les grandes APIs</h2>
<table>
<thead><tr><th>API / Plateforme</th><th>Convention</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Google APIs</td><td>camelCase</td><td><code>{"userId": 1, "displayName": "Alice"}</code></td></tr>
<tr><td>Twitter/X API</td><td>snake_case</td><td><code>{"user_id": 1, "screen_name": "alice"}</code></td></tr>
<tr><td>GitHub API</td><td>snake_case</td><td><code>{"login": "alice", "avatar_url": "..."}</code></td></tr>
<tr><td>Stripe API</td><td>snake_case</td><td><code>{"customer_id": "cus_123", "created_at": 1234}</code></td></tr>
<tr><td>Firebase</td><td>camelCase</td><td><code>{"createdAt": "...", "userId": "abc"}</code></td></tr>
<tr><td>AWS APIs</td><td>PascalCase</td><td><code>{"InstanceId": "i-123", "State": "running"}</code></td></tr>
</tbody>
</table>

<h2>Arguments en faveur de camelCase</h2>
<ul>
<li>Natif en JavaScript — aucune conversion nécessaire dans le code frontend</li>
<li>Recommandé par le Google JSON Style Guide</li>
<li>Plus court que snake_case (pas de tirets bas)</li>
<li>Choix naturel pour les APIs consommées principalement par des clients web/mobile</li>
</ul>

<h2>Arguments en faveur de snake_case</h2>
<ul>
<li>Plus lisible — les tirets bas créent des limites visuelles entre les mots</li>
<li>Natif en Python, Ruby et SQL — aucune conversion nécessaire côté backend</li>
<li>Utilisé par la plupart des plus grandes APIs (GitHub, Twitter, Stripe)</li>
<li>Cohérent avec les noms de colonnes de bases de données (presque toujours en snake_case)</li>
</ul>

<h2>La vraie réponse : adaptez-vous à votre stack</h2>
<p>La meilleure convention dépend de l'endroit où le JSON est produit et consommé :</p>
<table>
<thead><tr><th>Scénario</th><th>Recommandé</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>Backend JavaScript + frontend JavaScript</td><td>camelCase</td><td>Aucune conversion nécessaire nulle part</td></tr>
<tr><td>Backend Python/Ruby + tout frontend</td><td>snake_case</td><td>Correspond aux idiomes du backend ; les frontends peuvent convertir</td></tr>
<tr><td>API publique pour de nombreux langages</td><td>snake_case</td><td>Plus universellement lisible</td></tr>
<tr><td>Microservices internes</td><td>L'un ou l'autre (la cohérence prime)</td><td>La cohérence interne est la plus importante</td></tr>
</tbody>
</table>

<h2>Conversion à la frontière</h2>
<p>En pratique, de nombreuses équipes convertissent les clés JSON à la frontière de l'API. Un backend Python renvoie du snake_case, et un middleware ou un utilitaire côté client convertit en camelCase pour le frontend React. Des bibliothèques comme <code>humps</code> (JavaScript) et <code>djangorestframework-camel-case</code> (Python) automatisent ce processus.</p>

<h2>Règles pour de bonnes clés JSON</h2>
<ul>
<li><strong>Soyez cohérent.</strong> Ne mélangez pas <code>userId</code> et <code>user_name</code> dans la même réponse.</li>
<li><strong>Utilisez des noms descriptifs.</strong> <code>createdAt</code> plutôt que <code>ca</code>.</li>
<li><strong>Évitez les abréviations.</strong> <code>organizationId</code> plutôt que <code>orgId</code>.</li>
<li><strong>Utilisez le pluriel pour les tableaux.</strong> <code>items</code> plutôt que <code>item</code> pour une liste.</li>
<li><strong>Évitez l'imbrication au-delà de 3 niveaux.</strong> Aplatissez quand c'est possible.</li>
</ul>

<h2>Convertissez vos clés JSON instantanément</h2>
<p>Utilisez notre convertisseur de <a href="%JSON_CAMEL%">clés JSON en camelCase</a> ou <a href="%JSON_SNAKE%">clés JSON en snake_case</a>. Pour du texte brut, essayez le <a href="%CAMEL%">convertisseur camelCase</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>
`,
  }),
};
