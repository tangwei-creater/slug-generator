import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "json-formatting-best-practices", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%JSON_CAMEL%", p(l, "/json-keys-to-camelcase"))
    .replaceAll("%JSON_SNAKE%", p(l, "/json-keys-to-snake-case"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "JSON Formatting Best Practices: Structure, Naming, and Style",
    description: "Learn JSON formatting best practices for readable, consistent, and well-structured API responses.",
    body: `<p>Well-formatted JSON is easier to read, debug, and maintain. These best practices apply to API responses, config files, and data storage.</p><h2>Naming</h2><ul><li>Use consistent case (camelCase or snake_case)</li><li>Be descriptive: <code>createdAt</code> not <code>ca</code></li><li>Use plural for arrays: <code>"items"</code> not <code>"item"</code></li></ul><h2>Structure</h2><ul><li>Avoid nesting deeper than 3 levels</li><li>Use arrays for ordered collections, objects for key-value data</li><li>Include <code>null</code> for missing optional fields (don't omit them)</li></ul><h2>Convert Keys</h2><p>Use our <a href="%JSON_CAMEL%">JSON keys to camelCase</a> or <a href="%JSON_SNAKE%">JSON keys to snake_case</a>.</p>`,
  }),
  ja: build("ja", {
    title: "JSONフォーマットのベストプラクティス：構造・命名・スタイル",
    description: "読みやすく一貫性のある、適切に構造化されたAPIレスポンスのためのJSONフォーマットのベストプラクティスを解説します。",
    body: `<p>適切にフォーマットされたJSONは読みやすく、デバッグしやすく、保守しやすくなります。以下のベストプラクティスはAPIレスポンス、設定ファイル、データストレージに適用されます。</p>
<h2>命名</h2>
<ul>
<li>一貫したケースを使う（camelCaseまたはsnake_case）</li>
<li>説明的な名前にする：<code>createdAt</code>であって<code>ca</code>ではない</li>
<li>配列には複数形を使う：<code>"items"</code>であって<code>"item"</code>ではない</li>
<li>略語を避ける：<code>organizationId</code>であって<code>orgId</code>ではない</li>
<li>ブール値には<code>is</code>/<code>has</code>プレフィックスを使う：<code>"isActive"</code>、<code>"hasPermission"</code></li>
</ul>
<h2>構造</h2>
<ul>
<li>3階層以上のネストを避ける</li>
<li>順序付きコレクションには配列を、キーバリューデータにはオブジェクトを使う</li>
<li>オプションのフィールドが欠落している場合は<code>null</code>を含める（省略しない）</li>
<li>日付にはISO 8601形式を使う：<code>"2026-06-01T00:00:00Z"</code></li>
<li>列挙型には文字列を使う：<code>"status": "active"</code>は<code>"status": 1</code>より明確</li>
</ul>
<h2>スタイル</h2>
<ul>
<li>開発環境ではプリティプリント（2スペースインデント）でデバッグしやすくする</li>
<li>本番APIでは帯域を節約するためミニファイする</li>
<li>末尾のカンマを避ける（JSONでは無効）</li>
<li>コメントはサポートされない — メタデータフィールドを使う</li>
</ul>
<h2>良い例 vs 悪い例</h2>
<table>
<thead><tr><th>悪い例</th><th>良い例</th><th>理由</th></tr></thead>
<tbody>
<tr><td><code>{"ca": "2026-01-01"}</code></td><td><code>{"createdAt": "2026-01-01T00:00:00Z"}</code></td><td>説明的な名前 + ISO 8601</td></tr>
<tr><td><code>{"item": [...]}</code></td><td><code>{"items": [...]}</code></td><td>配列には複数形</td></tr>
<tr><td><code>{"status": 1}</code></td><td><code>{"status": "active"}</code></td><td>文字列列挙型の方が明確</td></tr>
<tr><td><code>{"userId": 1, "user_name": "A"}</code></td><td><code>{"userId": 1, "userName": "A"}</code></td><td>ケースの一貫性</td></tr>
</tbody>
</table>
<h2>キーを変換する</h2>
<p><a href="%JSON_CAMEL%">JSONキーをcamelCaseに変換</a>または<a href="%JSON_SNAKE%">JSONキーをsnake_caseに変換</a>できます。</p>`,
  }),
  de: build("de", {
    title: "JSON-Formatierung: Best Practices für Struktur, Benennung und Stil",
    description: "Lernen Sie JSON-Formatierungs-Best-Practices für lesbare, konsistente und gut strukturierte API-Antworten.",
    body: `<p>Gut formatiertes JSON ist leichter zu lesen, zu debuggen und zu warten. Diese Best Practices gelten für API-Antworten, Konfigurationsdateien und Datenspeicherung.</p>
<h2>Benennung</h2>
<ul>
<li>Verwenden Sie konsistente Schreibweise (camelCase oder snake_case)</li>
<li>Seien Sie beschreibend: <code>createdAt</code> statt <code>ca</code></li>
<li>Verwenden Sie Pluralformen für Arrays: <code>"items"</code> statt <code>"item"</code></li>
<li>Vermeiden Sie Abkürzungen: <code>organizationId</code> statt <code>orgId</code></li>
<li>Verwenden Sie <code>is</code>/<code>has</code>-Präfixe für Booleans: <code>"isActive"</code>, <code>"hasPermission"</code></li>
</ul>
<h2>Struktur</h2>
<ul>
<li>Vermeiden Sie Verschachtelungen tiefer als 3 Ebenen</li>
<li>Verwenden Sie Arrays für geordnete Sammlungen, Objekte für Key-Value-Daten</li>
<li>Fügen Sie <code>null</code> für fehlende optionale Felder ein (lassen Sie sie nicht weg)</li>
<li>Verwenden Sie ISO 8601 für Datumsangaben: <code>"2026-06-01T00:00:00Z"</code></li>
<li>Verwenden Sie Strings für Enums: <code>"status": "active"</code> ist klarer als <code>"status": 1</code></li>
</ul>
<h2>Stil</h2>
<ul>
<li>Pretty-Print (2 Leerzeichen Einrückung) in der Entwicklung für leichteres Debugging</li>
<li>Minifizieren in Produktions-APIs, um Bandbreite zu sparen</li>
<li>Vermeiden Sie nachgestellte Kommas (in JSON ungültig)</li>
<li>Kommentare werden nicht unterstützt — verwenden Sie Metadaten-Felder</li>
</ul>
<h2>Gutes vs. schlechtes Beispiel</h2>
<table>
<thead><tr><th>Schlecht</th><th>Gut</th><th>Warum</th></tr></thead>
<tbody>
<tr><td><code>{"ca": "2026-01-01"}</code></td><td><code>{"createdAt": "2026-01-01T00:00:00Z"}</code></td><td>Beschreibender Name + ISO 8601</td></tr>
<tr><td><code>{"item": [...]}</code></td><td><code>{"items": [...]}</code></td><td>Plural für Arrays</td></tr>
<tr><td><code>{"status": 1}</code></td><td><code>{"status": "active"}</code></td><td>String-Enums sind klarer</td></tr>
<tr><td><code>{"userId": 1, "user_name": "A"}</code></td><td><code>{"userId": 1, "userName": "A"}</code></td><td>Konsistente Schreibweise</td></tr>
</tbody>
</table>
<h2>Keys konvertieren</h2>
<p>Verwenden Sie unseren <a href="%JSON_CAMEL%">JSON-Keys-zu-camelCase</a> oder <a href="%JSON_SNAKE%">JSON-Keys-zu-snake_case</a> Konverter.</p>`,
  }),
  es: build("es", {
    title: "Mejores prácticas de formato JSON: estructura, nombres y estilo",
    description: "Aprende las mejores prácticas de formateo JSON para respuestas de API legibles, consistentes y bien estructuradas.",
    body: `<p>Un JSON bien formateado es más fácil de leer, depurar y mantener. Estas mejores prácticas se aplican a respuestas de API, archivos de configuración y almacenamiento de datos.</p>
<h2>Nomenclatura</h2>
<ul>
<li>Usa un estilo de mayúsculas consistente (camelCase o snake_case)</li>
<li>Sé descriptivo: <code>createdAt</code> en lugar de <code>ca</code></li>
<li>Usa plural para arrays: <code>"items"</code> en lugar de <code>"item"</code></li>
<li>Evita abreviaturas: <code>organizationId</code> en lugar de <code>orgId</code></li>
<li>Usa prefijos <code>is</code>/<code>has</code> para booleanos: <code>"isActive"</code>, <code>"hasPermission"</code></li>
</ul>
<h2>Estructura</h2>
<ul>
<li>Evita anidar más de 3 niveles</li>
<li>Usa arrays para colecciones ordenadas, objetos para datos clave-valor</li>
<li>Incluye <code>null</code> para campos opcionales faltantes (no los omitas)</li>
<li>Usa ISO 8601 para fechas: <code>"2026-06-01T00:00:00Z"</code></li>
<li>Usa strings para enums: <code>"status": "active"</code> es más claro que <code>"status": 1</code></li>
</ul>
<h2>Estilo</h2>
<ul>
<li>Pretty-print (2 espacios de indentación) en desarrollo para facilitar la depuración</li>
<li>Minifica en APIs de producción para ahorrar ancho de banda</li>
<li>Evita comas finales (no son válidas en JSON)</li>
<li>Los comentarios no son compatibles — usa campos de metadatos</li>
</ul>
<h2>Ejemplo bueno vs. malo</h2>
<table>
<thead><tr><th>Malo</th><th>Bueno</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td><code>{"ca": "2026-01-01"}</code></td><td><code>{"createdAt": "2026-01-01T00:00:00Z"}</code></td><td>Nombre descriptivo + ISO 8601</td></tr>
<tr><td><code>{"item": [...]}</code></td><td><code>{"items": [...]}</code></td><td>Plural para arrays</td></tr>
<tr><td><code>{"status": 1}</code></td><td><code>{"status": "active"}</code></td><td>Enums de string son más claros</td></tr>
<tr><td><code>{"userId": 1, "user_name": "A"}</code></td><td><code>{"userId": 1, "userName": "A"}</code></td><td>Consistencia en el estilo</td></tr>
</tbody>
</table>
<h2>Convierte las claves</h2>
<p>Usa nuestro conversor de <a href="%JSON_CAMEL%">claves JSON a camelCase</a> o <a href="%JSON_SNAKE%">claves JSON a snake_case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Melhores práticas de formatação JSON: estrutura, nomes e estilo",
    description: "Aprenda as melhores práticas de formatação JSON para respostas de API legíveis, consistentes e bem estruturadas.",
    body: `<p>JSON bem formatado é mais fácil de ler, depurar e manter. Estas boas práticas se aplicam a respostas de API, arquivos de configuração e armazenamento de dados.</p>
<h2>Nomenclatura</h2>
<ul>
<li>Use um estilo consistente (camelCase ou snake_case)</li>
<li>Seja descritivo: <code>createdAt</code> em vez de <code>ca</code></li>
<li>Use plural para arrays: <code>"items"</code> em vez de <code>"item"</code></li>
<li>Evite abreviações: <code>organizationId</code> em vez de <code>orgId</code></li>
<li>Use prefixos <code>is</code>/<code>has</code> para booleanos: <code>"isActive"</code>, <code>"hasPermission"</code></li>
</ul>
<h2>Estrutura</h2>
<ul>
<li>Evite aninhamento maior que 3 níveis</li>
<li>Use arrays para coleções ordenadas, objetos para dados chave-valor</li>
<li>Inclua <code>null</code> para campos opcionais ausentes (não os omita)</li>
<li>Use ISO 8601 para datas: <code>"2026-06-01T00:00:00Z"</code></li>
<li>Use strings para enums: <code>"status": "active"</code> é mais claro que <code>"status": 1</code></li>
</ul>
<h2>Estilo</h2>
<ul>
<li>Pretty-print (2 espaços de indentação) em desenvolvimento para facilitar a depuração</li>
<li>Minifique em APIs de produção para economizar largura de banda</li>
<li>Evite vírgulas finais (inválidas em JSON)</li>
<li>Comentários não são suportados — use campos de metadados</li>
</ul>
<h2>Exemplo bom vs. ruim</h2>
<table>
<thead><tr><th>Ruim</th><th>Bom</th><th>Por quê</th></tr></thead>
<tbody>
<tr><td><code>{"ca": "2026-01-01"}</code></td><td><code>{"createdAt": "2026-01-01T00:00:00Z"}</code></td><td>Nome descritivo + ISO 8601</td></tr>
<tr><td><code>{"item": [...]}</code></td><td><code>{"items": [...]}</code></td><td>Plural para arrays</td></tr>
<tr><td><code>{"status": 1}</code></td><td><code>{"status": "active"}</code></td><td>Enums de string são mais claros</td></tr>
<tr><td><code>{"userId": 1, "user_name": "A"}</code></td><td><code>{"userId": 1, "userName": "A"}</code></td><td>Consistência no estilo</td></tr>
</tbody>
</table>
<h2>Converta as chaves</h2>
<p>Use nosso conversor de <a href="%JSON_CAMEL%">chaves JSON para camelCase</a> ou <a href="%JSON_SNAKE%">chaves JSON para snake_case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Bonnes pratiques de formatage JSON : structure, nommage et style",
    description: "Apprenez les bonnes pratiques de formatage JSON pour des réponses API lisibles, cohérentes et bien structurées.",
    body: `<p>Un JSON bien formaté est plus facile à lire, à déboguer et à maintenir. Ces bonnes pratiques s'appliquent aux réponses d'API, aux fichiers de configuration et au stockage de données.</p>
<h2>Nommage</h2>
<ul>
<li>Utilisez un style cohérent (camelCase ou snake_case)</li>
<li>Soyez descriptif : <code>createdAt</code> plutôt que <code>ca</code></li>
<li>Utilisez le pluriel pour les tableaux : <code>"items"</code> plutôt que <code>"item"</code></li>
<li>Évitez les abréviations : <code>organizationId</code> plutôt que <code>orgId</code></li>
<li>Utilisez les préfixes <code>is</code>/<code>has</code> pour les booléens : <code>"isActive"</code>, <code>"hasPermission"</code></li>
</ul>
<h2>Structure</h2>
<ul>
<li>Évitez l'imbrication au-delà de 3 niveaux</li>
<li>Utilisez des tableaux pour les collections ordonnées, des objets pour les données clé-valeur</li>
<li>Incluez <code>null</code> pour les champs optionnels manquants (ne les omettez pas)</li>
<li>Utilisez ISO 8601 pour les dates : <code>"2026-06-01T00:00:00Z"</code></li>
<li>Utilisez des chaînes pour les énumérations : <code>"status": "active"</code> est plus clair que <code>"status": 1</code></li>
</ul>
<h2>Style</h2>
<ul>
<li>Pretty-print (2 espaces d'indentation) en développement pour faciliter le débogage</li>
<li>Minifiez en production pour économiser la bande passante</li>
<li>Évitez les virgules finales (invalides en JSON)</li>
<li>Les commentaires ne sont pas supportés — utilisez des champs de métadonnées</li>
</ul>
<h2>Bon exemple vs. mauvais exemple</h2>
<table>
<thead><tr><th>Mauvais</th><th>Bon</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td><code>{"ca": "2026-01-01"}</code></td><td><code>{"createdAt": "2026-01-01T00:00:00Z"}</code></td><td>Nom descriptif + ISO 8601</td></tr>
<tr><td><code>{"item": [...]}</code></td><td><code>{"items": [...]}</code></td><td>Pluriel pour les tableaux</td></tr>
<tr><td><code>{"status": 1}</code></td><td><code>{"status": "active"}</code></td><td>Les énumérations de chaînes sont plus claires</td></tr>
<tr><td><code>{"userId": 1, "user_name": "A"}</code></td><td><code>{"userId": 1, "userName": "A"}</code></td><td>Cohérence du style</td></tr>
</tbody>
</table>
<h2>Convertissez vos clés</h2>
<p>Utilisez notre convertisseur de <a href="%JSON_CAMEL%">clés JSON en camelCase</a> ou <a href="%JSON_SNAKE%">clés JSON en snake_case</a>.</p>`,
  }),
};
