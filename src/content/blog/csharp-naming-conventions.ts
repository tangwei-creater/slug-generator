import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "csharp-naming-conventions", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%PASCAL%", p(l, "/pascal-case-converter"))
    .replaceAll("%CAMEL%", p(l, "/camelcase-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "C# Naming Conventions: Microsoft's Official Guidelines",
    description: "Learn C# naming conventions from Microsoft guidelines. PascalCase for most things, camelCase for local variables and parameters.",
    body: `<p>C# has well-documented naming conventions from Microsoft, followed across the .NET ecosystem.</p>
<h2>Convention Table</h2>
<table><thead><tr><th>Item</th><th>Convention</th><th>Example</th></tr></thead><tbody>
<tr><td>Classes/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Methods</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Properties</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Events</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Local variables</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parameters</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constants</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Private fields</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Note: C# uses PascalCase for constants, not SCREAMING_SNAKE — unlike most other languages.</p>
<h2>Convert</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "C#命名規則：Microsoft公式ガイドライン",
    description: "Microsoftのガイドラインに基づくC#の命名規則を学びましょう。ほとんどにPascalCase、ローカル変数とパラメータにcamelCase。",
    body: `<p>C#にはMicrosoft由来の十分にドキュメント化された命名規則があり、.NETエコシステム全体で採用されています。</p>
<h2>規則一覧</h2>
<table><thead><tr><th>項目</th><th>規則</th><th>例</th></tr></thead><tbody>
<tr><td>クラス/構造体</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>インターフェース</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>メソッド</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>プロパティ</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>イベント</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>ローカル変数</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>パラメータ</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>定数</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>プライベートフィールド</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>注意：C#は定数にPascalCaseを使い、他のほとんどの言語のようにSCREAMING_SNAKEではありません。</p>
<h2>変換</h2><p><a href="%PASCAL%">PascalCase</a>、<a href="%CAMEL%">camelCase</a>。<a href="%HUB%">ハブ</a>。</p>`,
  }),
  de: build("de", {
    title: "C#-Namenskonventionen: Microsofts offizielle Richtlinien",
    description: "Lernen Sie C#-Namenskonventionen aus den Microsoft-Richtlinien. PascalCase für die meisten Elemente, camelCase für lokale Variablen und Parameter.",
    body: `<p>C# hat gut dokumentierte Namenskonventionen von Microsoft, die im gesamten .NET-Ökosystem befolgt werden.</p>
<h2>Konventionstabelle</h2>
<table><thead><tr><th>Element</th><th>Konvention</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Klassen/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Methoden</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Properties</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Events</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Lokale Variablen</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parameter</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Konstanten</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Private Felder</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Hinweis: C# verwendet PascalCase für Konstanten, nicht SCREAMING_SNAKE — anders als die meisten anderen Sprachen.</p>
<h2>Konvertieren</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "Convenciones de nombres en C#: Directrices oficiales de Microsoft",
    description: "Aprende las convenciones de nombres en C# según las directrices de Microsoft. PascalCase para la mayoría, camelCase para variables locales y parámetros.",
    body: `<p>C# tiene convenciones de nombres bien documentadas de Microsoft, seguidas en todo el ecosistema .NET.</p>
<h2>Tabla de convenciones</h2>
<table><thead><tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr></thead><tbody>
<tr><td>Clases/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Métodos</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Propiedades</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Eventos</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Variables locales</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parámetros</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constantes</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Campos privados</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Nota: C# usa PascalCase para las constantes, no SCREAMING_SNAKE — a diferencia de la mayoría de los demás lenguajes.</p>
<h2>Convertir</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Convenções de nomes em C#: Diretrizes oficiais da Microsoft",
    description: "Aprenda as convenções de nomes em C# segundo as diretrizes da Microsoft. PascalCase para a maioria, camelCase para variáveis locais e parâmetros.",
    body: `<p>O C# tem convenções de nomes bem documentadas da Microsoft, seguidas em todo o ecossistema .NET.</p>
<h2>Tabela de convenções</h2>
<table><thead><tr><th>Item</th><th>Convenção</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Classes/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Métodos</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Propriedades</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Eventos</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Variáveis locais</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Parâmetros</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constantes</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Campos privados</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Nota: O C# usa PascalCase para constantes, não SCREAMING_SNAKE — diferente da maioria das outras linguagens.</p>
<h2>Converter</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Conventions de nommage C# : Directives officielles de Microsoft",
    description: "Apprenez les conventions de nommage C# selon les directives de Microsoft. PascalCase pour la plupart, camelCase pour les variables locales et paramètres.",
    body: `<p>Le C# a des conventions de nommage bien documentées de Microsoft, suivies dans tout l'écosystème .NET.</p>
<h2>Tableau des conventions</h2>
<table><thead><tr><th>Élément</th><th>Convention</th><th>Exemple</th></tr></thead><tbody>
<tr><td>Classes/Structs</td><td>PascalCase</td><td><code>UserAccount</code></td></tr>
<tr><td>Interfaces</td><td>I + PascalCase</td><td><code>IDisposable</code></td></tr>
<tr><td>Méthodes</td><td>PascalCase</td><td><code>GetUserById()</code></td></tr>
<tr><td>Propriétés</td><td>PascalCase</td><td><code>FirstName</code></td></tr>
<tr><td>Événements</td><td>PascalCase</td><td><code>OnClick</code></td></tr>
<tr><td>Variables locales</td><td>camelCase</td><td><code>userName</code></td></tr>
<tr><td>Paramètres</td><td>camelCase</td><td><code>userId</code></td></tr>
<tr><td>Constantes</td><td>PascalCase</td><td><code>MaxRetryCount</code></td></tr>
<tr><td>Champs privés</td><td>_camelCase</td><td><code>_connectionString</code></td></tr>
</tbody></table>
<p>Note : le C# utilise PascalCase pour les constantes, pas SCREAMING_SNAKE — contrairement à la plupart des autres langages.</p>
<h2>Convertir</h2><p><a href="%PASCAL%">PascalCase</a>, <a href="%CAMEL%">camelCase</a>. <a href="%HUB%">Hub</a>.</p>`,
  }),
};
