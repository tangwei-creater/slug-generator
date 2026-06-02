import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "typescript-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "TypeScript Naming Conventions: Interfaces, Types, Enums & More",
    description: "Learn TypeScript-specific naming conventions for interfaces, type aliases, enums, generics, and utility types.",
    body: `<p>TypeScript inherits JavaScript conventions and adds rules for its type system features.</p>
<h2>TypeScript-Specific Rules</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (no I prefix)</td><td><code>UserProps</code></td></tr>
<tr><td>Type aliases</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Enum members</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Generics</td><td>Single uppercase</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Utility types</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>No "I" Prefix for Interfaces</h2>
<p>The TypeScript team explicitly discourages the Hungarian-style <code>IUser</code> pattern. Use <code>User</code> for the interface and <code>UserImpl</code> or a descriptive name for implementations.</p>
<h2>File Naming</h2>
<p>React components: <code>UserProfile.tsx</code> (PascalCase). Everything else: <code>userUtils.ts</code> (camelCase) or <code>user-utils.ts</code> (kebab-case).</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "TypeScript命名規則：インターフェース、型、Enum",
    description: "インターフェース、型エイリアス、Enum、ジェネリクス、ユーティリティ型のTypeScript固有の命名規則を学びましょう。",
    body: `<p>TypeScriptはJavaScriptの規則を継承し、型システム機能のための独自ルールを追加します。</p>
<h2>TypeScript固有のルール</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>インターフェース</td><td>PascalCase（I接頭辞なし）</td><td><code>UserProps</code></td></tr>
<tr><td>型エイリアス</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enum</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Enumメンバー</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>ジェネリクス</td><td>大文字1文字</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>ユーティリティ型</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>インターフェースに「I」接頭辞は不要</h2>
<p>TypeScriptチームはハンガリアン記法の<code>IUser</code>パターンを明確に非推奨としています。インターフェースには<code>User</code>、実装には<code>UserImpl</code>や説明的な名前を使いましょう。</p>
<h2>ファイル命名</h2>
<p>Reactコンポーネント：<code>UserProfile.tsx</code>（PascalCase）。それ以外：<code>userUtils.ts</code>（camelCase）または<code>user-utils.ts</code>（kebab-case）。</p>
<h2>変換</h2><p><a href="%PASCAL%">PascalCase</a>、<a href="%CAMEL%">camelCase</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "TypeScript-Namenskonventionen: Interfaces, Types, Enums und mehr",
    description: "Lernen Sie TypeScript-spezifische Namenskonventionen für Interfaces, Typalias, Enums, Generics und Utility-Types.",
    body: `<p>TypeScript erbt JavaScript-Konventionen und fügt Regeln für seine Typsystem-Features hinzu.</p>
<h2>TypeScript-spezifische Regeln</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (kein I-Präfix)</td><td><code>UserProps</code></td></tr>
<tr><td>Typalias</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Enum-Mitglieder</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Generics</td><td>Einzelner Großbuchstabe</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Utility-Types</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>Kein „I"-Präfix für Interfaces</h2>
<p>Das TypeScript-Team rät ausdrücklich vom ungarischen <code>IUser</code>-Muster ab. Verwenden Sie <code>User</code> für das Interface und <code>UserImpl</code> oder einen beschreibenden Namen für Implementierungen.</p>
<h2>Dateinamen</h2>
<p>React-Komponenten: <code>UserProfile.tsx</code> (PascalCase). Alles andere: <code>userUtils.ts</code> (camelCase) oder <code>user-utils.ts</code> (kebab-case).</p>
<h2>Konvertieren</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en TypeScript: Interfaces, tipos, enums y más",
    description: "Aprende las convenciones de nombres específicas de TypeScript para interfaces, alias de tipo, enums, genéricos y tipos utilitarios.",
    body: `<p>TypeScript hereda las convenciones de JavaScript y añade reglas para las características de su sistema de tipos.</p>
<h2>Reglas específicas de TypeScript</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (sin prefijo I)</td><td><code>UserProps</code></td></tr>
<tr><td>Alias de tipo</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Miembros de enum</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Genéricos</td><td>Una mayúscula</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Tipos utilitarios</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>Sin prefijo «I» para interfaces</h2>
<p>El equipo de TypeScript desaconseja explícitamente el patrón húngaro <code>IUser</code>. Usa <code>User</code> para la interfaz y <code>UserImpl</code> o un nombre descriptivo para las implementaciones.</p>
<h2>Nombres de archivo</h2>
<p>Componentes React: <code>UserProfile.tsx</code> (PascalCase). Todo lo demás: <code>userUtils.ts</code> (camelCase) o <code>user-utils.ts</code> (kebab-case).</p>
<h2>Convertir</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em TypeScript: Interfaces, tipos, enums e mais",
    description: "Aprenda as convenções de nomes específicas do TypeScript para interfaces, alias de tipo, enums, generics e tipos utilitários.",
    body: `<p>O TypeScript herda as convenções do JavaScript e adiciona regras para os recursos do seu sistema de tipos.</p>
<h2>Regras específicas do TypeScript</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (sem prefixo I)</td><td><code>UserProps</code></td></tr>
<tr><td>Alias de tipo</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Membros de enum</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Generics</td><td>Uma maiúscula</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Tipos utilitários</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>Sem prefixo «I» para interfaces</h2>
<p>A equipe do TypeScript desencoraja explicitamente o padrão húngaro <code>IUser</code>. Use <code>User</code> para a interface e <code>UserImpl</code> ou um nome descritivo para as implementações.</p>
<h2>Nomes de arquivo</h2>
<p>Componentes React: <code>UserProfile.tsx</code> (PascalCase). Todo o resto: <code>userUtils.ts</code> (camelCase) ou <code>user-utils.ts</code> (kebab-case).</p>
<h2>Converter</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage TypeScript : Interfaces, types, enums et plus",
    description: "Apprenez les conventions de nommage spécifiques à TypeScript pour les interfaces, alias de type, enums, génériques et types utilitaires.",
    body: `<p>TypeScript hérite des conventions JavaScript et ajoute des règles pour les fonctionnalités de son système de types.</p>
<h2>Règles spécifiques à TypeScript</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Interfaces</td><td>PascalCase (pas de préfixe I)</td><td><code>UserProps</code></td></tr>
<tr><td>Alias de type</td><td>PascalCase</td><td><code>ApiResponse</code></td></tr>
<tr><td>Enums</td><td>PascalCase</td><td><code>enum Direction</code></td></tr>
<tr><td>Membres d'enum</td><td>PascalCase</td><td><code>Direction.North</code></td></tr>
<tr><td>Génériques</td><td>Une majuscule</td><td><code>T</code>, <code>K</code>, <code>V</code></td></tr>
<tr><td>Types utilitaires</td><td>PascalCase</td><td><code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code></td></tr>
</tbody></table>
<h2>Pas de préfixe « I » pour les interfaces</h2>
<p>L'équipe TypeScript déconseille explicitement le pattern hongrois <code>IUser</code>. Utilisez <code>User</code> pour l'interface et <code>UserImpl</code> ou un nom descriptif pour les implémentations.</p>
<h2>Noms de fichiers</h2>
<p>Composants React : <code>UserProfile.tsx</code> (PascalCase). Tout le reste : <code>userUtils.ts</code> (camelCase) ou <code>user-utils.ts</code> (kebab-case).</p>
<h2>Convertir</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
