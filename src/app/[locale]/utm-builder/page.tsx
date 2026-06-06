import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import UtmBuilderTool from "@/components/UtmBuilderTool";

const siteUrl = "https://sluggenerator.app";
const path = "/utm-builder";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.utmBuilder" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function UtmBuilder({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.utmBuilder");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UTM Campaign URL Builder",
    url: `${siteUrl}${path}`,
    description: "Build UTM tracking URLs for Google Analytics campaigns with utm_source, utm_medium, and utm_campaign parameters.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "UTM Builder" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <UtmBuilderTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Are UTM Parameters?</h2>
              <p>
                UTM (Urchin Tracking Module) parameters are tags added to the end of a URL that tell Google Analytics where your traffic comes from. When someone clicks a link with UTM parameters, those tags are sent to Google Analytics so you can track which campaigns, sources, and mediums drive the most traffic and conversions.
              </p>

              <h2>The 5 UTM Parameters</h2>
              <ul>
                <li><strong>utm_source</strong> (required): Identifies which site or platform sent the traffic — e.g., <code>google</code>, <code>facebook</code>, <code>newsletter</code></li>
                <li><strong>utm_medium</strong> (required): The marketing medium — e.g., <code>cpc</code>, <code>email</code>, <code>social</code>, <code>organic</code></li>
                <li><strong>utm_campaign</strong> (required): The specific campaign name — e.g., <code>spring_sale</code>, <code>product_launch</code></li>
                <li><strong>utm_term</strong> (optional): Paid search keywords you&apos;re targeting</li>
                <li><strong>utm_content</strong> (optional): Differentiates similar content or links within the same ad — e.g., <code>header_cta</code> vs <code>footer_cta</code></li>
              </ul>

              <h2>UTM Best Practices</h2>
              <ul>
                <li>Use lowercase for all parameter values to avoid duplicate entries in analytics</li>
                <li>Use underscores or hyphens instead of spaces</li>
                <li>Be consistent with naming conventions across campaigns</li>
                <li>Don&apos;t use UTM parameters for internal links — they overwrite the original traffic source</li>
                <li>Keep campaign names descriptive but concise</li>
              </ul>

              <h2>UTM Parameters and SEO</h2>
              <p>
                UTM parameters do not affect SEO rankings directly. However, if search engines index URLs with UTM parameters, it can create duplicate content. Always ensure your site uses canonical tags pointing to the clean URL (without UTM parameters) to prevent this issue.
              </p>

              <h2>Related Tools</h2>
              <p>
                For encoding special characters in URLs, use the <Link href="/url-encoder-decoder">URL Encoder / Decoder</Link>.
                For creating clean URL slugs, try the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For creating permanent URLs, see the <Link href="/permalink-generator">Permalink Generator</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>UTMパラメータとは？</h2>
              <p>UTM（Urchin Tracking Module）パラメータは、URLの末尾に追加されるタグで、Google Analyticsにトラフィックの出所を伝えます。UTMパラメータ付きのリンクがクリックされると、そのタグがGoogle Analyticsに送信され、どのキャンペーン、ソース、メディアが最もトラフィックとコンバージョンを生み出しているかを追跡できます。</p>

              <h2>5つのUTMパラメータ</h2>
              <ul>
                <li><strong>utm_source</strong>（必須）：トラフィックの送信元 — 例：<code>google</code>、<code>facebook</code>、<code>newsletter</code></li>
                <li><strong>utm_medium</strong>（必須）：マーケティングメディア — 例：<code>cpc</code>、<code>email</code>、<code>social</code></li>
                <li><strong>utm_campaign</strong>（必須）：特定のキャンペーン名 — 例：<code>spring_sale</code></li>
                <li><strong>utm_term</strong>（任意）：有料検索のキーワード</li>
                <li><strong>utm_content</strong>（任意）：同じ広告内の類似コンテンツを区別</li>
              </ul>

              <h2>UTMのベストプラクティス</h2>
              <ul>
                <li>すべてのパラメータ値は小文字で統一</li>
                <li>スペースの代わりにアンダースコアやハイフンを使用</li>
                <li>内部リンクにはUTMパラメータを使用しない</li>
              </ul>

              <h2>関連ツール</h2>
              <p>URLの特殊文字エンコードには<Link href="/url-encoder-decoder">URLエンコーダー</Link>、URLスラッグの作成には<Link href="/url-slug-generator">URLスラッグジェネレーター</Link>をお使いください。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was sind UTM-Parameter?</h2>
              <p>UTM-Parameter (Urchin Tracking Module) sind Tags, die am Ende einer URL hinzugefügt werden und Google Analytics mitteilen, woher Ihr Traffic kommt. So können Sie verfolgen, welche Kampagnen, Quellen und Medien den meisten Traffic und die meisten Conversions bringen.</p>

              <h2>Die 5 UTM-Parameter</h2>
              <ul>
                <li><strong>utm_source</strong> (erforderlich): Identifiziert die Traffic-Quelle — z.B. <code>google</code>, <code>facebook</code></li>
                <li><strong>utm_medium</strong> (erforderlich): Das Marketing-Medium — z.B. <code>cpc</code>, <code>email</code></li>
                <li><strong>utm_campaign</strong> (erforderlich): Der Kampagnenname — z.B. <code>spring_sale</code></li>
                <li><strong>utm_term</strong> (optional): Bezahlte Suchbegriffe</li>
                <li><strong>utm_content</strong> (optional): Unterscheidet ähnliche Inhalte</li>
              </ul>

              <h2>Verwandte Tools</h2>
              <p>Für URL-Kodierung nutzen Sie den <Link href="/url-encoder-decoder">URL-Encoder</Link>. Für URL-Slugs den <Link href="/url-slug-generator">URL-Slug-Generator</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>&iquest;Qu&eacute; son los par&aacute;metros UTM?</h2>
              <p>Los par&aacute;metros UTM son etiquetas que se a&ntilde;aden al final de una URL para que Google Analytics identifique de d&oacute;nde proviene el tr&aacute;fico. Permiten rastrear qu&eacute; campa&ntilde;as, fuentes y medios generan m&aacute;s tr&aacute;fico y conversiones.</p>

              <h2>Los 5 par&aacute;metros UTM</h2>
              <ul>
                <li><strong>utm_source</strong> (obligatorio): Identifica la fuente del tr&aacute;fico</li>
                <li><strong>utm_medium</strong> (obligatorio): El medio de marketing</li>
                <li><strong>utm_campaign</strong> (obligatorio): El nombre de la campa&ntilde;a</li>
                <li><strong>utm_term</strong> (opcional): Palabras clave de b&uacute;squeda paga</li>
                <li><strong>utm_content</strong> (opcional): Diferencia contenido similar</li>
              </ul>

              <h2>Herramientas relacionadas</h2>
              <p>Para codificaci&oacute;n de URL, usa el <Link href="/url-encoder-decoder">Codificador de URL</Link>. Para slugs de URL, el <Link href="/url-slug-generator">Generador de URL Slug</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que s&atilde;o par&acirc;metros UTM?</h2>
              <p>Par&acirc;metros UTM s&atilde;o tags adicionadas ao final de uma URL para que o Google Analytics identifique de onde vem o tr&aacute;fego. Permitem rastrear quais campanhas, fontes e meios geram mais tr&aacute;fego e convers&otilde;es.</p>

              <h2>Os 5 par&acirc;metros UTM</h2>
              <ul>
                <li><strong>utm_source</strong> (obrigat&oacute;rio): Identifica a fonte do tr&aacute;fego</li>
                <li><strong>utm_medium</strong> (obrigat&oacute;rio): O meio de marketing</li>
                <li><strong>utm_campaign</strong> (obrigat&oacute;rio): O nome da campanha</li>
                <li><strong>utm_term</strong> (opcional): Palavras-chave de pesquisa paga</li>
                <li><strong>utm_content</strong> (opcional): Diferencia conte&uacute;do similar</li>
              </ul>

              <h2>Ferramentas relacionadas</h2>
              <p>Para codifica&ccedil;&atilde;o de URL, use o <Link href="/url-encoder-decoder">Codificador de URL</Link>. Para slugs de URL, o <Link href="/url-slug-generator">Gerador de URL Slug</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Que sont les param&egrave;tres UTM ?</h2>
              <p>Les param&egrave;tres UTM (Urchin Tracking Module) sont des balises ajout&eacute;es &agrave; la fin d&apos;une URL pour indiquer &agrave; Google Analytics d&apos;o&ugrave; vient votre trafic. Ils permettent de suivre quelles campagnes, sources et m&eacute;dias g&eacute;n&egrave;rent le plus de trafic et de conversions.</p>

              <h2>Les 5 param&egrave;tres UTM</h2>
              <ul>
                <li><strong>utm_source</strong> (requis) : Identifie la source du trafic</li>
                <li><strong>utm_medium</strong> (requis) : Le m&eacute;dia marketing</li>
                <li><strong>utm_campaign</strong> (requis) : Le nom de la campagne</li>
                <li><strong>utm_term</strong> (optionnel) : Mots-cl&eacute;s de recherche payante</li>
                <li><strong>utm_content</strong> (optionnel) : Diff&eacute;rencie le contenu similaire</li>
              </ul>

              <h2>Outils connexes</h2>
              <p>Pour l&apos;encodage d&apos;URL, utilisez l&apos;<Link href="/url-encoder-decoder">Encodeur d&apos;URL</Link>. Pour les slugs d&apos;URL, le <Link href="/url-slug-generator">G&eacute;n&eacute;rateur de Slug URL</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
