import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "rest-api-naming-conventions", date: "2026-06-01", readTime: 6 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "REST API Naming Conventions: URLs, Methods, and JSON Keys",
    description: "Learn REST API naming best practices for endpoints, HTTP methods, query parameters, and response body keys.",
    body: `<p>A well-named REST API is intuitive, consistent, and self-documenting. These conventions are followed by most production APIs.</p>
<h2>URL Path Conventions</h2>
<ul>
<li>Use <strong>kebab-case</strong> or <strong>lowercase</strong> for URL paths: <code>/user-profiles</code></li>
<li>Use <strong>plural nouns</strong> for collections: <code>/users</code>, <code>/orders</code></li>
<li>Use <strong>resource IDs</strong> for individual items: <code>/users/123</code></li>
<li>Nest sub-resources: <code>/users/123/orders</code></li>
<li>Avoid verbs in URLs: <code>POST /users</code> not <code>POST /create-user</code></li>
</ul>
<h2>HTTP Methods</h2>
<table><thead><tr><th>Method</th><th>Purpose</th><th>Example</th></tr></thead><tbody>
<tr><td>GET</td><td>Read</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Create</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Full update</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Partial update</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Delete</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>JSON Response Keys</h2>
<p>Use <strong>camelCase</strong> (Google style) or <strong>snake_case</strong> (GitHub/Stripe style). Pick one and be consistent across all endpoints.</p>
<h2>Query Parameters</h2>
<p>Use snake_case or camelCase consistently: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Convert Formats</h2>
<p><a href="%KEBAB%">kebab-case converter</a> for URLs, <a href="%CAMEL%">camelCase</a> or <a href="%SNAKE%">snake_case</a> for JSON keys. Try the <a href="%HUB%">hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "REST API命名規則：URL、メソッド、JSONキー",
    description: "REST APIのエンドポイント、HTTPメソッド、クエリパラメータ、レスポンスボディキーの命名ベストプラクティスを学びましょう。",
    body: `<p>適切に命名されたREST APIは直感的で一貫性があり、自己説明的です。これらの規則はほとんどの本番APIで採用されています。</p>
<h2>URLパスの規則</h2>
<ul>
<li>URLパスには<strong>kebab-case</strong>または<strong>小文字</strong>を使う：<code>/user-profiles</code></li>
<li>コレクションには<strong>複数形の名詞</strong>を使う：<code>/users</code>、<code>/orders</code></li>
<li>個別のアイテムには<strong>リソースID</strong>を使う：<code>/users/123</code></li>
<li>サブリソースをネストする：<code>/users/123/orders</code></li>
<li>URLに動詞を入れない：<code>POST /create-user</code>ではなく<code>POST /users</code></li>
</ul>
<h2>HTTPメソッド</h2>
<table><thead><tr><th>メソッド</th><th>用途</th><th>例</th></tr></thead><tbody>
<tr><td>GET</td><td>読み取り</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>作成</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>全体更新</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>部分更新</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>削除</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>JSONレスポンスのキー</h2>
<p><strong>camelCase</strong>（Googleスタイル）または<strong>snake_case</strong>（GitHub/Stripeスタイル）を使います。どちらか一つを選び、すべてのエンドポイントで一貫させましょう。</p>
<h2>クエリパラメータ</h2>
<p>snake_caseまたはcamelCaseを一貫して使います：<code>?page_size=20&sort_by=created_at</code></p>
<h2>フォーマットを変換</h2>
<p>URLには<a href="%KEBAB%">kebab-caseコンバーター</a>、JSONキーには<a href="%CAMEL%">camelCase</a>または<a href="%SNAKE%">snake_case</a>。<a href="%HUB%">ハブ</a>もお試しください。</p>`,
  }),
  de: build("de", {
    title: "REST-API-Namenskonventionen: URLs, Methoden und JSON-Keys",
    description: "Lernen Sie Best Practices für die REST-API-Benennung von Endpunkten, HTTP-Methoden, Query-Parametern und Response-Keys.",
    body: `<p>Eine gut benannte REST-API ist intuitiv, konsistent und selbstdokumentierend. Diese Konventionen werden von den meisten Produktions-APIs befolgt.</p>
<h2>URL-Pfad-Konventionen</h2>
<ul>
<li>Verwenden Sie <strong>kebab-case</strong> oder <strong>Kleinbuchstaben</strong> für URL-Pfade: <code>/user-profiles</code></li>
<li>Verwenden Sie <strong>Substantive im Plural</strong> für Sammlungen: <code>/users</code>, <code>/orders</code></li>
<li>Verwenden Sie <strong>Ressourcen-IDs</strong> für einzelne Elemente: <code>/users/123</code></li>
<li>Verschachteln Sie Unterressourcen: <code>/users/123/orders</code></li>
<li>Vermeiden Sie Verben in URLs: <code>POST /users</code> statt <code>POST /create-user</code></li>
</ul>
<h2>HTTP-Methoden</h2>
<table><thead><tr><th>Methode</th><th>Zweck</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>GET</td><td>Lesen</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Erstellen</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Vollständiges Update</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Teilweises Update</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Löschen</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>JSON-Response-Keys</h2>
<p>Verwenden Sie <strong>camelCase</strong> (Google-Stil) oder <strong>snake_case</strong> (GitHub/Stripe-Stil). Wählen Sie eines und bleiben Sie über alle Endpunkte hinweg konsistent.</p>
<h2>Query-Parameter</h2>
<p>Verwenden Sie konsistent snake_case oder camelCase: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Formate konvertieren</h2>
<p><a href="%KEBAB%">kebab-case-Konverter</a> für URLs, <a href="%CAMEL%">camelCase</a> oder <a href="%SNAKE%">snake_case</a> für JSON-Keys. Probieren Sie den <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en REST API: URLs, métodos y claves JSON",
    description: "Aprende las mejores prácticas de nombres en REST API para endpoints, métodos HTTP, parámetros de consulta y claves de respuesta.",
    body: `<p>Una REST API bien nombrada es intuitiva, consistente y autodocumentada. La mayoría de las APIs de producción siguen estas convenciones.</p>
<h2>Convenciones de rutas URL</h2>
<ul>
<li>Usa <strong>kebab-case</strong> o <strong>minúsculas</strong> para las rutas URL: <code>/user-profiles</code></li>
<li>Usa <strong>sustantivos en plural</strong> para colecciones: <code>/users</code>, <code>/orders</code></li>
<li>Usa <strong>IDs de recurso</strong> para elementos individuales: <code>/users/123</code></li>
<li>Anida subrecursos: <code>/users/123/orders</code></li>
<li>Evita verbos en las URLs: <code>POST /users</code> no <code>POST /create-user</code></li>
</ul>
<h2>Métodos HTTP</h2>
<table><thead><tr><th>Método</th><th>Propósito</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>GET</td><td>Leer</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Crear</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Actualización completa</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Actualización parcial</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Eliminar</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>Claves de respuesta JSON</h2>
<p>Usa <strong>camelCase</strong> (estilo Google) o <strong>snake_case</strong> (estilo GitHub/Stripe). Elige uno y sé consistente en todos los endpoints.</p>
<h2>Parámetros de consulta</h2>
<p>Usa snake_case o camelCase de forma consistente: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Convertir formatos</h2>
<p><a href="%KEBAB%">Conversor a kebab-case</a> para URLs, <a href="%CAMEL%">camelCase</a> o <a href="%SNAKE%">snake_case</a> para claves JSON. Prueba el <a href="%HUB%">hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em REST API: URLs, métodos e chaves JSON",
    description: "Aprenda as melhores práticas de nomes em REST API para endpoints, métodos HTTP, parâmetros de consulta e chaves de resposta.",
    body: `<p>Uma REST API bem nomeada é intuitiva, consistente e autodocumentada. A maioria das APIs de produção segue estas convenções.</p>
<h2>Convenções de caminho URL</h2>
<ul>
<li>Use <strong>kebab-case</strong> ou <strong>minúsculas</strong> para os caminhos URL: <code>/user-profiles</code></li>
<li>Use <strong>substantivos no plural</strong> para coleções: <code>/users</code>, <code>/orders</code></li>
<li>Use <strong>IDs de recurso</strong> para itens individuais: <code>/users/123</code></li>
<li>Aninhe sub-recursos: <code>/users/123/orders</code></li>
<li>Evite verbos nas URLs: <code>POST /users</code> e não <code>POST /create-user</code></li>
</ul>
<h2>Métodos HTTP</h2>
<table><thead><tr><th>Método</th><th>Finalidade</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>GET</td><td>Ler</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Criar</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Atualização completa</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Atualização parcial</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Excluir</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>Chaves de resposta JSON</h2>
<p>Use <strong>camelCase</strong> (estilo Google) ou <strong>snake_case</strong> (estilo GitHub/Stripe). Escolha um e seja consistente em todos os endpoints.</p>
<h2>Parâmetros de consulta</h2>
<p>Use snake_case ou camelCase de forma consistente: <code>?page_size=20&sort_by=created_at</code></p>
<h2>Converter formatos</h2>
<p><a href="%KEBAB%">Conversor para kebab-case</a> para URLs, <a href="%CAMEL%">camelCase</a> ou <a href="%SNAKE%">snake_case</a> para chaves JSON. Experimente o <a href="%HUB%">hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage REST API : URLs, méthodes et clés JSON",
    description: "Apprenez les bonnes pratiques de nommage REST API pour les endpoints, méthodes HTTP, paramètres de requête et clés de réponse.",
    body: `<p>Une REST API bien nommée est intuitive, cohérente et auto-documentée. La plupart des APIs de production suivent ces conventions.</p>
<h2>Conventions de chemin URL</h2>
<ul>
<li>Utilisez <strong>kebab-case</strong> ou des <strong>minuscules</strong> pour les chemins URL : <code>/user-profiles</code></li>
<li>Utilisez des <strong>noms au pluriel</strong> pour les collections : <code>/users</code>, <code>/orders</code></li>
<li>Utilisez des <strong>IDs de ressource</strong> pour les éléments individuels : <code>/users/123</code></li>
<li>Imbriquez les sous-ressources : <code>/users/123/orders</code></li>
<li>Évitez les verbes dans les URLs : <code>POST /users</code> et non <code>POST /create-user</code></li>
</ul>
<h2>Méthodes HTTP</h2>
<table><thead><tr><th>Méthode</th><th>Objectif</th><th>Exemple</th></tr></thead><tbody>
<tr><td>GET</td><td>Lire</td><td><code>GET /users/123</code></td></tr>
<tr><td>POST</td><td>Créer</td><td><code>POST /users</code></td></tr>
<tr><td>PUT</td><td>Mise à jour complète</td><td><code>PUT /users/123</code></td></tr>
<tr><td>PATCH</td><td>Mise à jour partielle</td><td><code>PATCH /users/123</code></td></tr>
<tr><td>DELETE</td><td>Supprimer</td><td><code>DELETE /users/123</code></td></tr>
</tbody></table>
<h2>Clés de réponse JSON</h2>
<p>Utilisez <strong>camelCase</strong> (style Google) ou <strong>snake_case</strong> (style GitHub/Stripe). Choisissez-en un et restez cohérent sur tous les endpoints.</p>
<h2>Paramètres de requête</h2>
<p>Utilisez snake_case ou camelCase de manière cohérente : <code>?page_size=20&sort_by=created_at</code></p>
<h2>Convertir les formats</h2>
<p><a href="%KEBAB%">Convertisseur kebab-case</a> pour les URLs, <a href="%CAMEL%">camelCase</a> ou <a href="%SNAKE%">snake_case</a> pour les clés JSON. Essayez le <a href="%HUB%">hub</a>.</p>`,
  }),
};
