import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "git-branch-naming-conventions", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Git Branch Naming Conventions: Best Practices for Teams",
    description: "Learn git branch naming conventions used by professional teams. Covers prefixes, formats, and common patterns.",
    body: `<p>A consistent branch naming convention helps teams understand what each branch does at a glance.</p>
<h2>Common Prefixes</h2>
<table><thead><tr><th>Prefix</th><th>Purpose</th><th>Example</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>New feature</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> or <code>bugfix/</code></td><td>Bug fix</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Urgent production fix</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Release preparation</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Maintenance tasks</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Documentation</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Code refactoring</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Format: kebab-case</h2>
<p>Always use lowercase and hyphens. Git branches are case-sensitive, and <code>Feature/Login</code> vs <code>feature/login</code> causes confusion.</p>
<h2>Including Ticket Numbers</h2>
<p><code>feature/PROJ-123-user-auth</code> or <code>fix/PROJ-456-cart-total</code></p>
<h2>Convert</h2><p><a href="%KEBAB%">kebab-case converter</a> or <a href="%SLUG%">slug generator</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Gitブランチ命名規則：チーム開発のベストプラクティス",
    description: "プロフェッショナルチームのGitブランチ命名規則。",
    body: `<p>一貫したブランチ名でチームの理解を助けます。feature/、fix/、hotfix/などのプレフィックスを使用。</p><h2>変換</h2><p><a href="%KEBAB%">kebab-case</a>コンバーター。</p>`,
  }),
  de: build("de", {
    title: "Git-Branch-Namenskonventionen: Best Practices für Teams",
    description: "Git-Branch-Naming für professionelle Teams.",
    body: `<p>Konsistente Branch-Namen: feature/, fix/, hotfix/ Präfixe + kebab-case.</p><h2>Konvertierung</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres de ramas Git: Mejores prácticas",
    description: "Convenciones de nombres de ramas Git para equipos.",
    body: `<p>Nombres consistentes: prefijos feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversión</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes de branches Git: Melhores práticas",
    description: "Convenções de nomes de branches Git para equipes.",
    body: `<p>Nomes consistentes: prefixos feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversão</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des branches Git : Bonnes pratiques",
    description: "Conventions de nommage des branches Git pour équipes.",
    body: `<p>Noms consistants : préfixes feature/, fix/, hotfix/ + kebab-case.</p><h2>Conversion</h2><p><a href="%KEBAB%">kebab-case</a>.</p>`,
  }),
};
