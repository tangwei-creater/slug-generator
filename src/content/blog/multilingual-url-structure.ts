import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "multilingual-url-structure", date: "2026-06-01", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Multilingual URL Structure: Subdirectory, Subdomain, or ccTLD?",
    description: "Compare URL structures for multilingual websites: subdirectories, subdomains, and country-code domains.",
    body: `<p>Three approaches for multilingual URLs, each with different SEO implications.</p><h2>Comparison</h2><table><thead><tr><th>Approach</th><th>Example</th><th>SEO Impact</th></tr></thead><tbody><tr><td>Subdirectory</td><td><code>example.com/ja/</code></td><td>Best for most sites — consolidates authority</td></tr><tr><td>Subdomain</td><td><code>ja.example.com</code></td><td>Treated as separate site — dilutes authority</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Strong geo-targeting — expensive, complex</td></tr></tbody></table><h2>Recommendation</h2><p>Use <strong>subdirectories</strong> unless you have a strong reason for ccTLDs. Always implement hreflang tags regardless of structure.</p><p>Generate clean slugs with our <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "多言語URL構造：サブディレクトリ、サブドメイン、ccTLD？",
    description: "多言語サイトのURL構造を比較。サブディレクトリ、サブドメイン、国別コードドメインのSEOへの影響を解説します。",
    body: `<p>多言語URLには3つのアプローチがあり、それぞれSEOへの影響が異なります。</p><h2>比較</h2><table><thead><tr><th>アプローチ</th><th>例</th><th>SEOへの影響</th></tr></thead><tbody><tr><td>サブディレクトリ</td><td><code>example.com/ja/</code></td><td>ほとんどのサイトに最適 — 権威を集約できる</td></tr><tr><td>サブドメイン</td><td><code>ja.example.com</code></td><td>別サイトとして扱われる — 権威が分散する</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>強力なジオターゲティング — 高コストで複雑</td></tr></tbody></table><h2>おすすめ</h2><p>ccTLDを選ぶ明確な理由がない限り、<strong>サブディレクトリ</strong>を使いましょう。構造に関わらず、必ずhreflangタグを実装してください。</p><p><a href="%SLUG%">URLスラッグジェネレーター</a>でクリーンなスラッグを生成しましょう。</p>`,
  }),
  de: build("de", {
    title: "Mehrsprachige URL-Struktur: Unterverzeichnis, Subdomain oder ccTLD?",
    description: "Vergleichen Sie URL-Strukturen für mehrsprachige Websites: Unterverzeichnisse, Subdomains und länderspezifische Domains.",
    body: `<p>Drei Ansätze für mehrsprachige URLs, jeder mit unterschiedlichen SEO-Auswirkungen.</p><h2>Vergleich</h2><table><thead><tr><th>Ansatz</th><th>Beispiel</th><th>SEO-Auswirkung</th></tr></thead><tbody><tr><td>Unterverzeichnis</td><td><code>example.com/ja/</code></td><td>Am besten für die meisten Sites — bündelt Authority</td></tr><tr><td>Subdomain</td><td><code>ja.example.com</code></td><td>Wird als separate Site behandelt — verwässert Authority</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Starkes Geo-Targeting — teuer, komplex</td></tr></tbody></table><h2>Empfehlung</h2><p>Verwenden Sie <strong>Unterverzeichnisse</strong>, sofern Sie keinen triftigen Grund für ccTLDs haben. Implementieren Sie unabhängig von der Struktur immer hreflang-Tags.</p><p>Erstellen Sie saubere Slugs mit unserem <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL multilingüe: ¿Subdirectorio, subdominio o ccTLD?",
    description: "Compara las estructuras URL para sitios multilingües: subdirectorios, subdominios y dominios de código de país.",
    body: `<p>Tres enfoques para las URLs multilingües, cada uno con diferentes implicaciones de SEO.</p><h2>Comparación</h2><table><thead><tr><th>Enfoque</th><th>Ejemplo</th><th>Impacto SEO</th></tr></thead><tbody><tr><td>Subdirectorio</td><td><code>example.com/ja/</code></td><td>El mejor para la mayoría de sitios — consolida la autoridad</td></tr><tr><td>Subdominio</td><td><code>ja.example.com</code></td><td>Tratado como sitio separado — diluye la autoridad</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Geolocalización fuerte — caro y complejo</td></tr></tbody></table><h2>Recomendación</h2><p>Usa <strong>subdirectorios</strong> a menos que tengas una razón de peso para los ccTLDs. Implementa siempre etiquetas hreflang sin importar la estructura.</p><p>Genera slugs limpios con nuestro <a href="%SLUG%">generador de slugs de URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL multilíngue: Subdiretório, subdomínio ou ccTLD?",
    description: "Compare as estruturas URL para sites multilíngues: subdiretórios, subdomínios e domínios de código de país.",
    body: `<p>Três abordagens para URLs multilíngues, cada uma com diferentes implicações de SEO.</p><h2>Comparação</h2><table><thead><tr><th>Abordagem</th><th>Exemplo</th><th>Impacto SEO</th></tr></thead><tbody><tr><td>Subdiretório</td><td><code>example.com/ja/</code></td><td>Melhor para a maioria dos sites — consolida a autoridade</td></tr><tr><td>Subdomínio</td><td><code>ja.example.com</code></td><td>Tratado como site separado — dilui a autoridade</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Geossegmentação forte — caro e complexo</td></tr></tbody></table><h2>Recomendação</h2><p>Use <strong>subdiretórios</strong> a menos que tenha um motivo forte para ccTLDs. Implemente sempre tags hreflang independentemente da estrutura.</p><p>Gere slugs limpas com o nosso <a href="%SLUG%">gerador de slugs de URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL multilingue : Sous-répertoire, sous-domaine ou ccTLD ?",
    description: "Comparez les structures URL pour les sites multilingues : sous-répertoires, sous-domaines et domaines de code pays.",
    body: `<p>Trois approches pour les URLs multilingues, chacune avec des implications SEO différentes.</p><h2>Comparaison</h2><table><thead><tr><th>Approche</th><th>Exemple</th><th>Impact SEO</th></tr></thead><tbody><tr><td>Sous-répertoire</td><td><code>example.com/ja/</code></td><td>Le meilleur pour la plupart des sites — consolide l'autorité</td></tr><tr><td>Sous-domaine</td><td><code>ja.example.com</code></td><td>Traité comme un site distinct — dilue l'autorité</td></tr><tr><td>ccTLD</td><td><code>example.co.jp</code></td><td>Ciblage géographique fort — coûteux et complexe</td></tr></tbody></table><h2>Recommandation</h2><p>Utilisez des <strong>sous-répertoires</strong> sauf si vous avez une raison sérieuse d'opter pour les ccTLD. Implémentez toujours les balises hreflang quelle que soit la structure.</p><p>Générez des slugs propres avec notre <a href="%SLUG%">générateur de slugs d'URL</a>.</p>`,
  }),
};
