import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "medium-vs-self-hosted-blog-seo", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator"))
    .replaceAll("%SLUG%", p(l, "/url-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Medium vs Self-Hosted Blog: Which Is Better for SEO?",
    description: "Compare Medium and self-hosted blogs for SEO. Understand domain authority, URL control, and content ownership.",
    body: `<p>Medium offers convenience but limits your SEO control. A self-hosted blog gives you full ownership of your content and URLs.</p><h2>Comparison</h2><table><thead><tr><th>Factor</th><th>Medium</th><th>Self-Hosted</th></tr></thead><tbody><tr><td>Domain authority</td><td>Uses medium.com (their authority)</td><td>Builds your own domain authority</td></tr><tr><td>URL control</td><td>Limited (<code>medium.com/@user/title-hash</code>)</td><td>Full control</td></tr><tr><td>Content ownership</td><td>Medium can change ToS</td><td>You own everything</td></tr><tr><td>Monetization</td><td>Medium Partner Program</td><td>Ads, affiliates, anything</td></tr><tr><td>SEO customization</td><td>Minimal</td><td>Full (meta tags, schema, sitemap)</td></tr><tr><td>Setup effort</td><td>Zero</td><td>Moderate</td></tr></tbody></table><h2>Recommendation</h2><p>Self-host for serious SEO. Use Medium for distribution only (with canonical URLs pointing to your site).</p><h2>Generate Blog Slugs</h2><p><a href="%BLOG%">Blog slug generator</a> or <a href="%SLUG%">URL slug generator</a>.</p>`,
  }),
  ja: build("ja", {
    title: "Medium vs 自前ブログ：SEOにはどちらが有利？",
    description: "MediumとセルフホストブログをSEOの観点で比較。ドメイン権威、URLの制御、コンテンツの所有権を理解しましょう。",
    body: `<p>Mediumは便利ですが、SEOのコントロールが制限されます。セルフホストブログなら、コンテンツとURLを完全に自分のものにできます。</p><h2>比較</h2><table><thead><tr><th>要素</th><th>Medium</th><th>セルフホスト</th></tr></thead><tbody><tr><td>ドメイン権威</td><td>medium.com(彼らの権威)を使う</td><td>自分のドメイン権威を築く</td></tr><tr><td>URLの制御</td><td>限定的(<code>medium.com/@user/title-hash</code>)</td><td>完全に制御できる</td></tr><tr><td>コンテンツの所有権</td><td>Mediumが利用規約を変更できる</td><td>すべて自分が所有する</td></tr><tr><td>収益化</td><td>Medium Partner Program</td><td>広告、アフィリエイトなど何でも</td></tr><tr><td>SEOのカスタマイズ</td><td>最小限</td><td>完全(メタタグ、スキーマ、サイトマップ)</td></tr><tr><td>セットアップの手間</td><td>ゼロ</td><td>中程度</td></tr></tbody></table><h2>おすすめ</h2><p>本格的なSEOにはセルフホストを。Mediumは配信用途のみに使い、canonical URLを自分のサイトに向けましょう。</p><h2>ブログスラッグを生成</h2><p><a href="%BLOG%">ブログスラッグジェネレーター</a>または<a href="%SLUG%">URLスラッグジェネレーター</a>。</p>`,
  }),
  de: build("de", {
    title: "Medium vs Self-Hosted Blog: Was ist besser für SEO?",
    description: "Vergleichen Sie Medium und Self-Hosted-Blogs für SEO. Verstehen Sie Domain Authority, URL-Kontrolle und Content-Eigentum.",
    body: `<p>Medium bietet Bequemlichkeit, schränkt aber Ihre SEO-Kontrolle ein. Ein Self-Hosted-Blog gibt Ihnen das volle Eigentum an Ihren Inhalten und URLs.</p><h2>Vergleich</h2><table><thead><tr><th>Faktor</th><th>Medium</th><th>Self-Hosted</th></tr></thead><tbody><tr><td>Domain Authority</td><td>Nutzt medium.com (deren Authority)</td><td>Baut Ihre eigene Domain Authority auf</td></tr><tr><td>URL-Kontrolle</td><td>Eingeschränkt (<code>medium.com/@user/title-hash</code>)</td><td>Volle Kontrolle</td></tr><tr><td>Content-Eigentum</td><td>Medium kann die AGB ändern</td><td>Ihnen gehört alles</td></tr><tr><td>Monetarisierung</td><td>Medium Partner Program</td><td>Werbung, Affiliates, alles</td></tr><tr><td>SEO-Anpassung</td><td>Minimal</td><td>Vollständig (Meta-Tags, Schema, Sitemap)</td></tr><tr><td>Einrichtungsaufwand</td><td>Null</td><td>Moderat</td></tr></tbody></table><h2>Empfehlung</h2><p>Self-Hosting für ernsthaftes SEO. Nutzen Sie Medium nur zur Distribution (mit Canonical-URLs, die auf Ihre Website verweisen).</p><h2>Blog-Slugs generieren</h2><p><a href="%BLOG%">Blog-Slug-Generator</a> oder <a href="%SLUG%">URL-Slug-Generator</a>.</p>`,
  }),
  es: build("es", {
    title: "Medium vs blog autoalojado: ¿Cuál es mejor para SEO?",
    description: "Compara Medium y los blogs autoalojados para SEO. Entiende la autoridad de dominio, el control de URLs y la propiedad del contenido.",
    body: `<p>Medium ofrece comodidad pero limita tu control SEO. Un blog autoalojado te da la propiedad total de tu contenido y tus URLs.</p><h2>Comparación</h2><table><thead><tr><th>Factor</th><th>Medium</th><th>Autoalojado</th></tr></thead><tbody><tr><td>Autoridad de dominio</td><td>Usa medium.com (su autoridad)</td><td>Construye tu propia autoridad de dominio</td></tr><tr><td>Control de URL</td><td>Limitado (<code>medium.com/@user/title-hash</code>)</td><td>Control total</td></tr><tr><td>Propiedad del contenido</td><td>Medium puede cambiar sus términos</td><td>Tú eres dueño de todo</td></tr><tr><td>Monetización</td><td>Medium Partner Program</td><td>Anuncios, afiliados, lo que sea</td></tr><tr><td>Personalización SEO</td><td>Mínima</td><td>Total (meta tags, schema, sitemap)</td></tr><tr><td>Esfuerzo de configuración</td><td>Cero</td><td>Moderado</td></tr></tbody></table><h2>Recomendación</h2><p>Autoaloja para un SEO serio. Usa Medium solo para distribución (con URLs canónicas que apunten a tu sitio).</p><h2>Genera slugs de blog</h2><p><a href="%BLOG%">Generador de slugs de blog</a> o <a href="%SLUG%">generador de slugs de URL</a>.</p>`,
  }),
  pt: build("pt", {
    title: "Medium vs blog auto-hospedado: Qual é melhor para SEO?",
    description: "Compare o Medium e os blogs auto-hospedados para SEO. Entenda a autoridade de domínio, o controle de URLs e a propriedade do conteúdo.",
    body: `<p>O Medium oferece comodidade mas limita o seu controle de SEO. Um blog auto-hospedado dá a você a propriedade total do seu conteúdo e das suas URLs.</p><h2>Comparação</h2><table><thead><tr><th>Fator</th><th>Medium</th><th>Auto-hospedado</th></tr></thead><tbody><tr><td>Autoridade de domínio</td><td>Usa medium.com (a autoridade deles)</td><td>Constrói a sua própria autoridade de domínio</td></tr><tr><td>Controle de URL</td><td>Limitado (<code>medium.com/@user/title-hash</code>)</td><td>Controle total</td></tr><tr><td>Propriedade do conteúdo</td><td>O Medium pode mudar os termos</td><td>Você é dono de tudo</td></tr><tr><td>Monetização</td><td>Medium Partner Program</td><td>Anúncios, afiliados, qualquer coisa</td></tr><tr><td>Personalização de SEO</td><td>Mínima</td><td>Total (meta tags, schema, sitemap)</td></tr><tr><td>Esforço de configuração</td><td>Zero</td><td>Moderado</td></tr></tbody></table><h2>Recomendação</h2><p>Auto-hospede para um SEO sério. Use o Medium apenas para distribuição (com URLs canônicas apontando para o seu site).</p><h2>Gere slugs de blog</h2><p><a href="%BLOG%">Gerador de slugs de blog</a> ou <a href="%SLUG%">gerador de slugs de URL</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Medium vs blog auto-hébergé : Lequel est meilleur pour le SEO ?",
    description: "Comparez Medium et les blogs auto-hébergés pour le SEO. Comprenez l'autorité de domaine, le contrôle des URLs et la propriété du contenu.",
    body: `<p>Medium offre de la commodité mais limite votre contrôle SEO. Un blog auto-hébergé vous donne la pleine propriété de votre contenu et de vos URLs.</p><h2>Comparaison</h2><table><thead><tr><th>Facteur</th><th>Medium</th><th>Auto-hébergé</th></tr></thead><tbody><tr><td>Autorité de domaine</td><td>Utilise medium.com (leur autorité)</td><td>Construit votre propre autorité de domaine</td></tr><tr><td>Contrôle des URL</td><td>Limité (<code>medium.com/@user/title-hash</code>)</td><td>Contrôle total</td></tr><tr><td>Propriété du contenu</td><td>Medium peut modifier ses CGU</td><td>Vous possédez tout</td></tr><tr><td>Monétisation</td><td>Medium Partner Program</td><td>Publicités, affiliations, tout</td></tr><tr><td>Personnalisation SEO</td><td>Minimale</td><td>Totale (balises meta, schema, sitemap)</td></tr><tr><td>Effort de configuration</td><td>Nul</td><td>Modéré</td></tr></tbody></table><h2>Recommandation</h2><p>Auto-hébergez pour un SEO sérieux. Utilisez Medium uniquement pour la distribution (avec des URLs canoniques pointant vers votre site).</p><h2>Générer des slugs de blog</h2><p><a href="%BLOG%">Générateur de slugs de blog</a> ou <a href="%SLUG%">générateur de slugs d'URL</a>.</p>`,
  }),
};
