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
    description: "環境変数のSCREAMING_SNAKE_CASE命名とセキュリティ上の注意点。",
    body: `<p>環境変数は普遍的にSCREAMING_SNAKE_CASEを使用：<code>DATABASE_URL</code>、<code>NODE_ENV</code>。</p><h2>変換</h2><p><a href="%CONSTANT%">CONSTANT CASEコンバーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Umgebungsvariablen-Namenskonventionen: Best Practices",
    description: "SCREAMING_SNAKE_CASE für Umgebungsvariablen.",
    body: `<p>Umgebungsvariablen: immer SCREAMING_SNAKE_CASE.</p><h2>Konvertierung</h2><p><a href="%CONSTANT%">Converter</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres para variables de entorno",
    description: "SCREAMING_SNAKE_CASE para variables de entorno.",
    body: `<p>Variables de entorno: siempre SCREAMING_SNAKE_CASE.</p><h2>Conversión</h2><p><a href="%CONSTANT%">Conversor</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes para variáveis de ambiente",
    description: "SCREAMING_SNAKE_CASE para variáveis de ambiente.",
    body: `<p>Variáveis de ambiente: sempre SCREAMING_SNAKE_CASE.</p><h2>Conversão</h2><p><a href="%CONSTANT%">Conversor</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des variables d'environnement",
    description: "SCREAMING_SNAKE_CASE pour les variables d'environnement.",
    body: `<p>Variables d'environnement : toujours SCREAMING_SNAKE_CASE.</p><h2>Conversion</h2><p><a href="%CONSTANT%">Convertisseur</a>.</p>`,
  }),
};
