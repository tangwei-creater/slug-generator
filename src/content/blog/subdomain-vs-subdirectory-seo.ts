import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "subdomain-vs-subdirectory-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Subdomain vs Subdirectory: Which Is Better for SEO?",
    description: "Compare subdomains and subdirectories for SEO. Learn when to use blog.example.com vs example.com/blog.",
    body: `<p>The subdomain vs subdirectory debate is one of the oldest in SEO. The consensus: <strong>subdirectories are better for most sites</strong>.</p><h2>Why Subdirectories Win</h2><ul><li>Inherit domain authority from the main site</li><li>Consolidate link equity under one domain</li><li>Simpler analytics and tracking</li><li>Easier to manage technically</li></ul><h2>When Subdomains Make Sense</h2><ul><li>Completely different applications (app.example.com)</li><li>Different tech stacks needing separate hosting</li><li>Enterprise organizations with separate teams</li></ul><p>Use <a href="%SLUG%">URL slug generator</a> for clean subdirectory URLs.</p>`,
  }),
  ja: build("ja", {
    title: "サブドメイン vs サブディレクトリ：SEOにはどちらが良い？",
    description: "SEOにおけるサブドメインとサブディレクトリの比較。blog.example.comとexample.com/blogの使い分けを学びましょう。",
    body: `<p>サブドメインかサブディレクトリかの議論はSEOで最も古いテーマの一つです。結論：<strong>ほとんどのサイトにはサブディレクトリが有利</strong>です。</p><h2>サブディレクトリが勝る理由</h2><ul><li>メインサイトのドメインオーソリティを継承する</li><li>一つのドメイン下にリンクエクイティを集約する</li><li>アナリティクスとトラッキングがシンプル</li><li>技術的な管理が容易</li></ul><h2>サブドメインが妥当な場合</h2><ul><li>まったく異なるアプリケーション（app.example.com）</li><li>別のホスティングが必要な異なる技術スタック</li><li>別チームが運営する大企業</li></ul><p>サブディレクトリのクリーンなURLには<a href="%SLUG%">URLスラッグジェネレーター</a>を使いましょう。</p>`,
  }),
  de: build("de", {
    title: "Subdomain vs Unterverzeichnis: Was ist besser für SEO?",
    description: "Vergleichen Sie Subdomains und Unterverzeichnisse für SEO. Lernen Sie, wann blog.example.com vs. example.com/blog sinnvoll ist.",
    body: `<p>Die Debatte Subdomain vs. Unterverzeichnis ist eine der ältesten im SEO. Der Konsens: <strong>Unterverzeichnisse sind für die meisten Sites besser</strong>.</p><h2>Warum Unterverzeichnisse gewinnen</h2><ul><li>Erben die Domain-Authority der Hauptseite</li><li>Bündeln die Link-Equity unter einer Domain</li><li>Einfachere Analytics und Tracking</li><li>Technisch leichter zu verwalten</li></ul><h2>Wann Subdomains sinnvoll sind</h2><ul><li>Komplett verschiedene Anwendungen (app.example.com)</li><li>Unterschiedliche Tech-Stacks mit separatem Hosting</li><li>Unternehmensorganisationen mit separaten Teams</li></ul><p>Verwenden Sie den <a href="%SLUG%">URL-Slug-Generator</a> für saubere Unterverzeichnis-URLs.</p>`,
  }),
  es: build("es", {
    title: "Subdominio vs subdirectorio: ¿Cuál es mejor para SEO?",
    description: "Compara subdominios y subdirectorios para SEO. Aprende cuándo usar blog.example.com vs example.com/blog.",
    body: `<p>El debate subdominio vs subdirectorio es uno de los más antiguos en SEO. El consenso: <strong>los subdirectorios son mejores para la mayoría de sitios</strong>.</p><h2>Por qué ganan los subdirectorios</h2><ul><li>Heredan la autoridad de dominio del sitio principal</li><li>Consolidan el link equity bajo un solo dominio</li><li>Analítica y seguimiento más simples</li><li>Más fáciles de gestionar técnicamente</li></ul><h2>Cuándo tienen sentido los subdominios</h2><ul><li>Aplicaciones completamente diferentes (app.example.com)</li><li>Stacks tecnológicos diferentes que necesitan hosting separado</li><li>Organizaciones empresariales con equipos independientes</li></ul><p>Usa el <a href="%SLUG%">generador de slugs de URL</a> para URLs de subdirectorio limpias.</p>`,
  }),
  pt: build("pt", {
    title: "Subdomínio vs subdiretório: Qual é melhor para SEO?",
    description: "Compare subdomínios e subdiretórios para SEO. Aprenda quando usar blog.example.com vs example.com/blog.",
    body: `<p>O debate subdomínio vs subdiretório é um dos mais antigos em SEO. O consenso: <strong>subdiretórios são melhores para a maioria dos sites</strong>.</p><h2>Por que subdiretórios vencem</h2><ul><li>Herdam a autoridade de domínio do site principal</li><li>Consolidam o link equity sob um único domínio</li><li>Analytics e rastreamento mais simples</li><li>Mais fáceis de gerenciar tecnicamente</li></ul><h2>Quando subdomínios fazem sentido</h2><ul><li>Aplicações completamente diferentes (app.example.com)</li><li>Stacks tecnológicos diferentes que precisam de hosting separado</li><li>Organizações empresariais com equipes independentes</li></ul><p>Use o <a href="%SLUG%">gerador de slugs de URL</a> para URLs de subdiretório limpas.</p>`,
  }),
  fr: build("fr", {
    title: "Sous-domaine vs sous-répertoire : Lequel est meilleur pour le SEO ?",
    description: "Comparez sous-domaines et sous-répertoires pour le SEO. Apprenez quand utiliser blog.example.com vs example.com/blog.",
    body: `<p>Le débat sous-domaine vs sous-répertoire est l'un des plus anciens en SEO. Le consensus : <strong>les sous-répertoires sont meilleurs pour la plupart des sites</strong>.</p><h2>Pourquoi les sous-répertoires l'emportent</h2><ul><li>Héritent de l'autorité de domaine du site principal</li><li>Consolident le link equity sous un seul domaine</li><li>Analytics et suivi plus simples</li><li>Plus faciles à gérer techniquement</li></ul><h2>Quand les sous-domaines ont du sens</h2><ul><li>Applications complètement différentes (app.example.com)</li><li>Stacks technologiques différentes nécessitant un hébergement séparé</li><li>Organisations d'entreprise avec des équipes indépendantes</li></ul><p>Utilisez le <a href="%SLUG%">générateur de slugs d'URL</a> pour des URLs de sous-répertoire propres.</p>`,
  }),
};
