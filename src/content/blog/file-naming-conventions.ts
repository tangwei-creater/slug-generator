import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "file-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%KEBAB%", p(l, "/kebab-case-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%SNAKE%", p(l, "/snake-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "File Naming Conventions: A Guide for Every Project Type",
    description: "Learn file naming best practices for web projects, Python packages, documentation, and design assets.",
    body: `<p>File naming conventions vary by project type, framework, and team preference. This guide covers the most common patterns.</p>
<h2>By Project Type</h2>
<table><thead><tr><th>Project</th><th>Convention</th><th>Examples</th></tr></thead><tbody>
<tr><td>React/Next.js components</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Vue components</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Angular components</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Python modules</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Config files</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Documentation</td><td>kebab-case or UPPERCASE</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Universal Rules</h2>
<ul>
<li>No spaces in file names — ever</li>
<li>Lowercase is safer across OS (Linux is case-sensitive, macOS isn't)</li>
<li>Avoid special characters except hyphens and underscores</li>
<li>Be consistent within a project</li>
</ul>
<h2>Convert</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ファイル命名規則：プロジェクト別ガイド",
    description: "Web、Python、ドキュメントのファイル命名ベストプラクティス。",
    body: `<p>ファイル名の規則はプロジェクトタイプによって異なります。Reactはパスカル、Pythonはスネーク、CSSはケバブ。</p><h2>変換</h2><p><a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Dateibenennungskonventionen: Leitfaden für jedes Projekt",
    description: "Best Practices für Dateinamen in Web-, Python- und Dokumentationsprojekten.",
    body: `<p>Dateinamen-Konventionen variieren je nach Projekttyp.</p><h2>Konvertierung</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres de archivos: Guía para cada proyecto",
    description: "Mejores prácticas para nombres de archivos en web, Python y documentación.",
    body: `<p>Las convenciones de nombres de archivos varían según el tipo de proyecto.</p><h2>Conversión</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes de arquivos: Guia para cada projeto",
    description: "Melhores práticas para nomes de arquivos em web, Python e documentação.",
    body: `<p>As convenções de nomes de arquivos variam por tipo de projeto.</p><h2>Conversão</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage de fichiers : Guide pour chaque projet",
    description: "Bonnes pratiques pour nommer les fichiers web, Python et documentation.",
    body: `<p>Les conventions de nommage des fichiers varient selon le type de projet.</p><h2>Conversion</h2><p><a href="%HUB%">Hub</a>.</p>`,
  }),
};
