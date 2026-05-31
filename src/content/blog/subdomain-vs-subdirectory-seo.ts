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
    description: "サブドメインとサブディレクトリのSEO比較。",
    body: `<p>ほとんどのサイトではサブディレクトリが有利。ドメインオーソリティを継承できます。</p>`,
  }),
  de: build("de", {
    title: "Subdomain vs Unterverzeichnis: Was ist besser für SEO?",
    description: "Subdomains und Unterverzeichnisse im SEO-Vergleich.",
    body: `<p>Unterverzeichnisse sind für die meisten Sites besser — sie erben die Domain-Authority.</p>`,
  }),
  es: build("es", {
    title: "Subdominio vs subdirectorio: ¿Cuál es mejor para SEO?",
    description: "Comparación de subdominios y subdirectorios para SEO.",
    body: `<p>Los subdirectorios son mejores para la mayoría — heredan la autoridad del dominio.</p>`,
  }),
  pt: build("pt", {
    title: "Subdomínio vs subdiretório: Qual é melhor para SEO?",
    description: "Comparação de subdomínios e subdiretórios para SEO.",
    body: `<p>Subdiretórios são melhores para a maioria — herdam a autoridade do domínio.</p>`,
  }),
  fr: build("fr", {
    title: "Sous-domaine vs sous-répertoire : Lequel est meilleur pour le SEO ?",
    description: "Comparaison sous-domaines et sous-répertoires pour le SEO.",
    body: `<p>Les sous-répertoires sont meilleurs pour la plupart — ils héritent de l'autorité du domaine.</p>`,
  }),
};
