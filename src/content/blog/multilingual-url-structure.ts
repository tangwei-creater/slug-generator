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
    description: "多言語サイトのURL構造比較。",
    body: `<p>3つのアプローチ：サブディレクトリ（推奨）、サブドメイン、ccTLD。</p>`,
  }),
  de: build("de", {
    title: "Mehrsprachige URL-Struktur: Unterverzeichnis, Subdomain oder ccTLD?",
    description: "URL-Strukturen für mehrsprachige Websites.",
    body: `<p>Drei Ansätze: Unterverzeichnisse (empfohlen), Subdomains, ccTLDs.</p>`,
  }),
  es: build("es", {
    title: "Estructura URL multilingüe: Subdirectorio, subdominio o ccTLD?",
    description: "Estructuras URL para sitios multilingües.",
    body: `<p>Tres enfoques: subdirectorios (recomendado), subdominios, ccTLDs.</p>`,
  }),
  pt: build("pt", {
    title: "Estrutura URL multilíngue: Subdiretório, subdomínio ou ccTLD?",
    description: "Estruturas URL para sites multilíngues.",
    body: `<p>Três abordagens: subdiretórios (recomendado), subdomínios, ccTLDs.</p>`,
  }),
  fr: build("fr", {
    title: "Structure URL multilingue : Sous-répertoire, sous-domaine ou ccTLD ?",
    description: "Structures URL pour sites multilingues.",
    body: `<p>Trois approches : sous-répertoires (recommandé), sous-domaines, ccTLDs.</p>`,
  }),
};
