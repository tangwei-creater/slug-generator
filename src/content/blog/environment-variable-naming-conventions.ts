import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "environment-variable-naming-conventions", date: "2026-06-01", readTime: 4 };

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
    title: "Environment Variable Naming Conventions: Best Practices",
    description: "Learn how to name environment variables correctly. Covers SCREAMING_SNAKE_CASE, prefixes, and security considerations.",
    body: `<p>Environment variables use <strong>SCREAMING_SNAKE_CASE</strong> universally: <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Naming Rules</h2>
<ul>
<li>ALL_CAPS with underscores — no exceptions</li>
<li>Use meaningful prefixes: <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>App-specific prefix to avoid conflicts: <code>MYAPP_API_KEY</code></li>
<li>Boolean vars: <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Common Patterns</h2>
<table><thead><tr><th>Category</th><th>Examples</th></tr></thead><tbody>
<tr><td>Database</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Server</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Convert</h2><p><a href="%CONSTANT%">CONSTANT_CASE converter</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "環境変数の命名規則：ベストプラクティス",
    description: "環境変数の正しい命名方法を学びましょう。SCREAMING_SNAKE_CASE、プレフィックス、セキュリティ上の注意点を解説します。",
    body: `<p>環境変数は普遍的に<strong>SCREAMING_SNAKE_CASE</strong>を使用します：<code>DATABASE_URL</code>、<code>NODE_ENV</code>、<code>API_SECRET_KEY</code>。</p>
<h2>命名ルール</h2>
<ul>
<li>すべて大文字＋アンダースコア区切り — 例外なし</li>
<li>意味のあるプレフィックスを使う：<code>DB_HOST</code>、<code>DB_PORT</code>、<code>DB_NAME</code></li>
<li>競合回避にアプリ固有プレフィックス：<code>MYAPP_API_KEY</code></li>
<li>ブール値変数：<code>ENABLE_CACHE=true</code>、<code>DEBUG=false</code></li>
</ul>
<h2>よくあるパターン</h2>
<table><thead><tr><th>カテゴリ</th><th>例</th></tr></thead><tbody>
<tr><td>データベース</td><td><code>DATABASE_URL</code>、<code>DB_HOST</code>、<code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>、<code>API_BASE_URL</code>、<code>API_TIMEOUT</code></td></tr>
<tr><td>サーバー</td><td><code>PORT</code>、<code>HOST</code>、<code>NODE_ENV</code></td></tr>
<tr><td>認証</td><td><code>JWT_SECRET</code>、<code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>フィーチャーフラグ</td><td><code>ENABLE_DARK_MODE</code>、<code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>変換</h2>
<p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Umgebungsvariablen-Namenskonventionen: Best Practices",
    description: "Lernen Sie, wie man Umgebungsvariablen korrekt benennt. SCREAMING_SNAKE_CASE, Präfixe und Sicherheitsaspekte.",
    body: `<p>Umgebungsvariablen verwenden universell <strong>SCREAMING_SNAKE_CASE</strong>: <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Benennungsregeln</h2>
<ul>
<li>GROSSBUCHSTABEN mit Unterstrichen — keine Ausnahmen</li>
<li>Aussagekräftige Präfixe verwenden: <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>App-spezifisches Präfix zur Konfliktvermeidung: <code>MYAPP_API_KEY</code></li>
<li>Boolean-Variablen: <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Häufige Muster</h2>
<table><thead><tr><th>Kategorie</th><th>Beispiele</th></tr></thead><tbody>
<tr><td>Datenbank</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Server</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature-Flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Umwandeln</h2>
<p>Verwenden Sie den <a href="%CONSTANT%">CONSTANT_CASE-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para variables de entorno: Mejores prácticas",
    description: "Aprende a nombrar variables de entorno correctamente. Cubre SCREAMING_SNAKE_CASE, prefijos y consideraciones de seguridad.",
    body: `<p>Las variables de entorno usan <strong>SCREAMING_SNAKE_CASE</strong> universalmente: <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Reglas de nomenclatura</h2>
<ul>
<li>TODO_EN_MAYÚSCULAS con guiones bajos — sin excepciones</li>
<li>Usar prefijos significativos: <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>Prefijo específico de la app para evitar conflictos: <code>MYAPP_API_KEY</code></li>
<li>Variables booleanas: <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Patrones comunes</h2>
<table><thead><tr><th>Categoría</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td>Base de datos</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Servidor</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Convertir</h2>
<p>Usa el <a href="%CONSTANT%">conversor CONSTANT_CASE</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para variáveis de ambiente: Melhores práticas",
    description: "Aprenda a nomear variáveis de ambiente corretamente. Cobre SCREAMING_SNAKE_CASE, prefixos e considerações de segurança.",
    body: `<p>Variáveis de ambiente usam <strong>SCREAMING_SNAKE_CASE</strong> universalmente: <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Regras de nomenclatura</h2>
<ul>
<li>TUDO_EM_MAIÚSCULAS com underscores — sem exceções</li>
<li>Usar prefixos significativos: <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>Prefixo específico do app para evitar conflitos: <code>MYAPP_API_KEY</code></li>
<li>Variáveis booleanas: <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Padrões comuns</h2>
<table><thead><tr><th>Categoria</th><th>Exemplos</th></tr></thead><tbody>
<tr><td>Banco de dados</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Servidor</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Converter</h2>
<p>Use o <a href="%CONSTANT%">conversor CONSTANT_CASE</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des variables d'environnement : Bonnes pratiques",
    description: "Apprenez à nommer correctement les variables d'environnement. SCREAMING_SNAKE_CASE, préfixes et considérations de sécurité.",
    body: `<p>Les variables d'environnement utilisent universellement le <strong>SCREAMING_SNAKE_CASE</strong> : <code>DATABASE_URL</code>, <code>NODE_ENV</code>, <code>API_SECRET_KEY</code>.</p>
<h2>Règles de nommage</h2>
<ul>
<li>TOUT_EN_MAJUSCULES avec des underscores — sans exception</li>
<li>Utiliser des préfixes significatifs : <code>DB_HOST</code>, <code>DB_PORT</code>, <code>DB_NAME</code></li>
<li>Préfixe spécifique à l'app pour éviter les conflits : <code>MYAPP_API_KEY</code></li>
<li>Variables booléennes : <code>ENABLE_CACHE=true</code>, <code>DEBUG=false</code></li>
</ul>
<h2>Patterns courants</h2>
<table><thead><tr><th>Catégorie</th><th>Exemples</th></tr></thead><tbody>
<tr><td>Base de données</td><td><code>DATABASE_URL</code>, <code>DB_HOST</code>, <code>DB_PASSWORD</code></td></tr>
<tr><td>API</td><td><code>API_KEY</code>, <code>API_BASE_URL</code>, <code>API_TIMEOUT</code></td></tr>
<tr><td>Serveur</td><td><code>PORT</code>, <code>HOST</code>, <code>NODE_ENV</code></td></tr>
<tr><td>Auth</td><td><code>JWT_SECRET</code>, <code>OAUTH_CLIENT_ID</code></td></tr>
<tr><td>Feature flags</td><td><code>ENABLE_DARK_MODE</code>, <code>BETA_FEATURES</code></td></tr>
</tbody></table>
<h2>Convertir</h2>
<p>Utilisez le <a href="%CONSTANT%">convertisseur CONSTANT_CASE</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
