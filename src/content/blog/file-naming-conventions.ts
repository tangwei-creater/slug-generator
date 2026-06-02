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
    description: "Webプロジェクト、Pythonパッケージ、ドキュメント、デザインアセットのファイル命名ベストプラクティスを学びましょう。",
    body: `<p>ファイル命名規則は、プロジェクトタイプ、フレームワーク、チームの好みによって異なります。このガイドでは最も一般的なパターンを扱います。</p>
<h2>プロジェクトタイプ別</h2>
<table><thead><tr><th>プロジェクト</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>React/Next.jsコンポーネント</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Vueコンポーネント</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Angularコンポーネント</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Pythonモジュール</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>設定ファイル</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>ドキュメント</td><td>kebab-caseまたは大文字</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>普遍的なルール</h2>
<ul>
<li>ファイル名にスペースを使わない — 絶対に</li>
<li>小文字はOS間で安全（Linuxは大文字小文字を区別するが、macOSはしない）</li>
<li>ハイフンとアンダースコア以外の特殊文字を避ける</li>
<li>プロジェクト内で一貫させる</li>
</ul>
<h2>変換</h2><p><a href="%KEBAB%">kebab-case</a>、<a href="%PASCAL%">PascalCase</a>、<a href="%SNAKE%">snake_case</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "Dateibenennungskonventionen: Leitfaden für jeden Projekttyp",
    description: "Lernen Sie Best Practices für Dateinamen in Webprojekten, Python-Paketen, Dokumentation und Design-Assets.",
    body: `<p>Dateibenennungskonventionen variieren je nach Projekttyp, Framework und Teampräferenz. Dieser Leitfaden behandelt die häufigsten Muster.</p>
<h2>Nach Projekttyp</h2>
<table><thead><tr><th>Projekt</th><th>Konvention</th><th>Beispiele</th></tr></thead><tbody>
<tr><td>React/Next.js-Komponenten</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Vue-Komponenten</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Angular-Komponenten</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Python-Module</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Konfigurationsdateien</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Dokumentation</td><td>kebab-case oder GROSSBUCHSTABEN</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Allgemeine Regeln</h2>
<ul>
<li>Niemals Leerzeichen in Dateinamen</li>
<li>Kleinbuchstaben sind über Betriebssysteme hinweg sicherer (Linux ist case-sensitiv, macOS nicht)</li>
<li>Vermeiden Sie Sonderzeichen außer Bindestrichen und Unterstrichen</li>
<li>Bleiben Sie innerhalb eines Projekts konsistent</li>
</ul>
<h2>Konvertieren</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres de archivos: Guía para cada tipo de proyecto",
    description: "Aprende las mejores prácticas para nombrar archivos en proyectos web, paquetes Python, documentación y recursos de diseño.",
    body: `<p>Las convenciones de nombres de archivos varían según el tipo de proyecto, el framework y la preferencia del equipo. Esta guía cubre los patrones más comunes.</p>
<h2>Por tipo de proyecto</h2>
<table><thead><tr><th>Proyecto</th><th>Convención</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td>Componentes React/Next.js</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Componentes Vue</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Componentes Angular</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Módulos Python</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Archivos de configuración</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Documentación</td><td>kebab-case o MAYÚSCULAS</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Reglas universales</h2>
<ul>
<li>Nunca uses espacios en los nombres de archivo</li>
<li>Las minúsculas son más seguras entre sistemas operativos (Linux distingue mayúsculas, macOS no)</li>
<li>Evita los caracteres especiales salvo guiones y guiones bajos</li>
<li>Sé consistente dentro de un proyecto</li>
</ul>
<h2>Convertir</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes de arquivos: Guia para cada tipo de projeto",
    description: "Aprenda as melhores práticas para nomear arquivos em projetos web, pacotes Python, documentação e recursos de design.",
    body: `<p>As convenções de nomes de arquivos variam conforme o tipo de projeto, o framework e a preferência da equipe. Este guia cobre os padrões mais comuns.</p>
<h2>Por tipo de projeto</h2>
<table><thead><tr><th>Projeto</th><th>Convenção</th><th>Exemplos</th></tr></thead><tbody>
<tr><td>Componentes React/Next.js</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Componentes Vue</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Componentes Angular</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Módulos Python</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Arquivos de configuração</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Documentação</td><td>kebab-case ou MAIÚSCULAS</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Regras universais</h2>
<ul>
<li>Nunca use espaços nos nomes de arquivo</li>
<li>Minúsculas são mais seguras entre sistemas operacionais (o Linux diferencia maiúsculas, o macOS não)</li>
<li>Evite caracteres especiais exceto hifens e underscores</li>
<li>Seja consistente dentro de um projeto</li>
</ul>
<h2>Converter</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage de fichiers : Guide pour chaque type de projet",
    description: "Apprenez les bonnes pratiques de nommage de fichiers pour les projets web, paquets Python, documentation et ressources de design.",
    body: `<p>Les conventions de nommage de fichiers varient selon le type de projet, le framework et les préférences de l'équipe. Ce guide couvre les modèles les plus courants.</p>
<h2>Par type de projet</h2>
<table><thead><tr><th>Projet</th><th>Convention</th><th>Exemples</th></tr></thead><tbody>
<tr><td>Composants React/Next.js</td><td>PascalCase</td><td><code>UserProfile.tsx</code></td></tr>
<tr><td>Composants Vue</td><td>PascalCase</td><td><code>UserProfile.vue</code></td></tr>
<tr><td>Composants Angular</td><td>kebab-case</td><td><code>user-profile.component.ts</code></td></tr>
<tr><td>Modules Python</td><td>snake_case</td><td><code>data_loader.py</code></td></tr>
<tr><td>CSS/SCSS</td><td>kebab-case</td><td><code>main-layout.scss</code></td></tr>
<tr><td>Fichiers de configuration</td><td>kebab-case</td><td><code>eslint-config.js</code></td></tr>
<tr><td>Documentation</td><td>kebab-case ou MAJUSCULES</td><td><code>getting-started.md</code>, <code>README.md</code></td></tr>
</tbody></table>
<h2>Règles universelles</h2>
<ul>
<li>Jamais d'espaces dans les noms de fichiers</li>
<li>Les minuscules sont plus sûres entre OS (Linux est sensible à la casse, pas macOS)</li>
<li>Évitez les caractères spéciaux sauf les tirets et underscores</li>
<li>Restez cohérent au sein d'un projet</li>
</ul>
<h2>Convertir</h2><p><a href="%KEBAB%">kebab-case</a>, <a href="%PASCAL%">PascalCase</a>, <a href="%SNAKE%">snake_case</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
