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
    description: "プロフェッショナルチームが使うGitブランチ命名規則を学びましょう。プレフィックス、フォーマット、よくあるパターンを扱います。",
    body: `<p>一貫したブランチ命名規則は、各ブランチが何をするのかをチームが一目で理解する助けになります。</p>
<h2>よく使うプレフィックス</h2>
<table><thead><tr><th>プレフィックス</th><th>用途</th><th>例</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>新機能</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> または <code>bugfix/</code></td><td>バグ修正</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>緊急の本番修正</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>リリース準備</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>メンテナンス作業</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>ドキュメント</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>コードのリファクタリング</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>フォーマット：kebab-case</h2>
<p>常に小文字とハイフンを使いましょう。Gitブランチは大文字小文字を区別するため、<code>Feature/Login</code>と<code>feature/login</code>は混乱の原因になります。</p>
<h2>チケット番号を含める</h2>
<p><code>feature/PROJ-123-user-auth</code> または <code>fix/PROJ-456-cart-total</code></p>
<h2>変換</h2><p><a href="%KEBAB%">kebab-caseコンバーター</a>または<a href="%SLUG%">スラッグジェネレーター</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Git-Branch-Namenskonventionen: Best Practices für Teams",
    description: "Lernen Sie die von professionellen Teams genutzten Git-Branch-Namenskonventionen. Behandelt Präfixe, Formate und gängige Muster.",
    body: `<p>Eine konsistente Branch-Namenskonvention hilft Teams, auf einen Blick zu verstehen, was jeder Branch macht.</p>
<h2>Gängige Präfixe</h2>
<table><thead><tr><th>Präfix</th><th>Zweck</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>Neues Feature</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> oder <code>bugfix/</code></td><td>Fehlerbehebung</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Dringende Produktionskorrektur</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Release-Vorbereitung</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Wartungsaufgaben</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Dokumentation</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Code-Refactoring</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Format: kebab-case</h2>
<p>Verwenden Sie immer Kleinbuchstaben und Bindestriche. Git-Branches sind case-sensitiv, und <code>Feature/Login</code> vs. <code>feature/login</code> sorgt für Verwirrung.</p>
<h2>Ticket-Nummern einbinden</h2>
<p><code>feature/PROJ-123-user-auth</code> oder <code>fix/PROJ-456-cart-total</code></p>
<h2>Konvertieren</h2><p><a href="%KEBAB%">kebab-case-Konverter</a> oder <a href="%SLUG%">Slug-Generator</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres de ramas Git: Mejores prácticas para equipos",
    description: "Aprende las convenciones de nombres de ramas Git que usan los equipos profesionales. Cubre prefijos, formatos y patrones comunes.",
    body: `<p>Una convención de nombres de ramas consistente ayuda a los equipos a entender de un vistazo qué hace cada rama.</p>
<h2>Prefijos comunes</h2>
<table><thead><tr><th>Prefijo</th><th>Propósito</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>Nueva funcionalidad</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> o <code>bugfix/</code></td><td>Corrección de errores</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Corrección urgente en producción</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Preparación de versión</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Tareas de mantenimiento</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Documentación</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Refactorización de código</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Formato: kebab-case</h2>
<p>Usa siempre minúsculas y guiones. Las ramas Git distinguen mayúsculas, y <code>Feature/Login</code> frente a <code>feature/login</code> causa confusión.</p>
<h2>Incluir números de ticket</h2>
<p><code>feature/PROJ-123-user-auth</code> o <code>fix/PROJ-456-cart-total</code></p>
<h2>Convertir</h2><p><a href="%KEBAB%">Conversor a kebab-case</a> o <a href="%SLUG%">generador de slugs</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes de branches Git: Melhores práticas para equipes",
    description: "Aprenda as convenções de nomes de branches Git usadas por equipes profissionais. Cobre prefixos, formatos e padrões comuns.",
    body: `<p>Uma convenção de nomes de branches consistente ajuda as equipes a entender de relance o que cada branch faz.</p>
<h2>Prefixos comuns</h2>
<table><thead><tr><th>Prefixo</th><th>Finalidade</th><th>Exemplo</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>Nova funcionalidade</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> ou <code>bugfix/</code></td><td>Correção de bug</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Correção urgente em produção</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Preparação de versão</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Tarefas de manutenção</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Documentação</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Refatoração de código</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Formato: kebab-case</h2>
<p>Use sempre minúsculas e hifens. Os branches Git diferenciam maiúsculas, e <code>Feature/Login</code> versus <code>feature/login</code> causa confusão.</p>
<h2>Incluir números de ticket</h2>
<p><code>feature/PROJ-123-user-auth</code> ou <code>fix/PROJ-456-cart-total</code></p>
<h2>Converter</h2><p><a href="%KEBAB%">Conversor para kebab-case</a> ou <a href="%SLUG%">gerador de slugs</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage des branches Git : Bonnes pratiques pour les équipes",
    description: "Apprenez les conventions de nommage des branches Git utilisées par les équipes professionnelles. Couvre les préfixes, formats et modèles courants.",
    body: `<p>Une convention de nommage de branches cohérente aide les équipes à comprendre d'un coup d'œil ce que fait chaque branche.</p>
<h2>Préfixes courants</h2>
<table><thead><tr><th>Préfixe</th><th>Objectif</th><th>Exemple</th></tr></thead><tbody>
<tr><td><code>feature/</code></td><td>Nouvelle fonctionnalité</td><td><code>feature/user-authentication</code></td></tr>
<tr><td><code>fix/</code> ou <code>bugfix/</code></td><td>Correction de bug</td><td><code>fix/login-redirect-loop</code></td></tr>
<tr><td><code>hotfix/</code></td><td>Correction urgente en production</td><td><code>hotfix/payment-crash</code></td></tr>
<tr><td><code>release/</code></td><td>Préparation de version</td><td><code>release/2.1.0</code></td></tr>
<tr><td><code>chore/</code></td><td>Tâches de maintenance</td><td><code>chore/update-dependencies</code></td></tr>
<tr><td><code>docs/</code></td><td>Documentation</td><td><code>docs/api-reference</code></td></tr>
<tr><td><code>refactor/</code></td><td>Refactorisation du code</td><td><code>refactor/auth-module</code></td></tr>
</tbody></table>
<h2>Format : kebab-case</h2>
<p>Utilisez toujours des minuscules et des tirets. Les branches Git sont sensibles à la casse, et <code>Feature/Login</code> vs <code>feature/login</code> prête à confusion.</p>
<h2>Inclure les numéros de ticket</h2>
<p><code>feature/PROJ-123-user-auth</code> ou <code>fix/PROJ-456-cart-total</code></p>
<h2>Convertir</h2><p><a href="%KEBAB%">Convertisseur kebab-case</a> ou <a href="%SLUG%">générateur de slugs</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
