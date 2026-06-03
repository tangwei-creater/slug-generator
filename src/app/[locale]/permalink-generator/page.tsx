import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/permalink-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.permalinkGenerator" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function PermalinkGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.permalinkGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Permalink Generator",
    url: `${siteUrl}${path}`,
    description: "Create SEO-friendly permalinks and permanent URL slugs for WordPress, blog posts, product pages, and web pages.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Permalink Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <SlugTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is a Permalink?</h2>
              <p>
                A permalink (permanent link) is a URL that is intended to remain
                unchanged for many years, providing a lasting reference to a
                particular web page or blog post. Unlike dynamic URLs with query
                parameters, permalinks are clean, readable, and
                search-engine-friendly.
              </p>
              <h2>Permalink Generator Online</h2>
              <p>
                Use this permalink generator online when you need a permanent
                URL slug for a blog post, product page, documentation page, or
                CMS entry. Paste a working title, choose your slug settings, and
                copy a short SEO-friendly permalink that can stay unchanged for
                years.
              </p>

              <h2>SEO-Friendly Permalink Examples</h2>
              <ul>
                <li><code>How to Choose a Product Name</code> becomes <code>how-to-choose-product-name</code></li>
                <li><code>WordPress Permalink Slug Guide</code> becomes <code>wordpress-permalink-slug-guide</code></li>
                <li><code>2026 SEO URL Length Tips</code> becomes <code>seo-url-length-tips</code></li>
              </ul>

              <h2>Permalink Structure Best Practices</h2>
              <ul>
                <li>Use descriptive words that reflect the page content</li>
                <li>Keep URLs short and readable (under 60 characters)</li>
                <li>Use hyphens to separate words, not underscores</li>
                <li>Avoid dates in permalinks unless content is time-sensitive</li>
                <li>Remove stop words (a, the, is, and) to keep it concise</li>
                <li>Use lowercase letters only</li>
              </ul>

              <h2>Permalink Formats by Platform</h2>
              <ul>
                <li>
                  <strong>WordPress</strong>: Settings &rarr; Permalinks &rarr;
                  Post name (<code>/%postname%/</code>)
                </li>
                <li>
                  <strong>Ghost</strong>: Automatically generates from title
                </li>
                <li>
                  <strong>Hugo</strong>: Configurable via <code>permalinks</code>{" "}
                  in config
                </li>
                <li>
                  <strong>Next.js</strong>: File-based routing with custom slugs
                </li>
              </ul>
              <h2>Related Slug Tools</h2>
              <p>
                If you need a broader SEO URL workflow, use the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For direct title conversion, try <Link href="/text-to-slug">Text to Slug</Link>.
                To remove accents and special characters, use <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>パーマリンクとは？</h2>
              <p>
                パーマリンク（Permanent Link）は、長期間にわたって変更されないことを前提としたURLです。ブログ記事やWebページへの恒久的な参照として使われます。クエリパラメータを含む動的URLとは異なり、パーマリンクは人間にも検索エンジンにも読みやすいクリーンな構造を持っています。
              </p>
              <h2>オンライン パーマリンク ジェネレーター</h2>
              <p>
                ブログ記事、商品ページ、ドキュメント、CMSエントリーのURLスラッグが必要なときに、このパーマリンクジェネレーターをお使いください。タイトルを貼り付けてスラッグ設定を選択するだけで、何年も変更不要のSEOフレンドリーなパーマリンクをコピーできます。
              </p>

              <h2>SEOに最適なパーマリンクの例</h2>
              <ul>
                <li><code>商品名の選び方ガイド</code> → <code>shouhinmei-no-erabikata-guide</code></li>
                <li><code>WordPress パーマリンク設定</code> → <code>wordpress-permalink-settei</code></li>
                <li><code>2026年 SEO URL設計のコツ</code> → <code>seo-url-sekkei-no-kotsu</code></li>
              </ul>

              <h2>パーマリンク設計のベストプラクティス</h2>
              <ul>
                <li>ページ内容を反映するキーワードを含める</li>
                <li>60文字以下の短く読みやすいURLにする</li>
                <li>単語の区切りにはアンダースコアではなくハイフンを使う</li>
                <li>時事性のあるコンテンツ以外は日付を入れない</li>
                <li>不要語（の、は、を等）を除き簡潔にする</li>
                <li>小文字のみで統一する</li>
              </ul>

              <h2>プラットフォーム別パーマリンク形式</h2>
              <ul>
                <li><strong>WordPress</strong>：設定 → パーマリンク → 投稿名（<code>/%postname%/</code>）</li>
                <li><strong>Ghost</strong>：タイトルから自動生成</li>
                <li><strong>Hugo</strong>：設定ファイルの <code>permalinks</code> で指定</li>
                <li><strong>Next.js</strong>：ファイルベースルーティング＋カスタムスラッグ</li>
              </ul>
              <h2>関連スラッグツール</h2>
              <p>
                SEO URL全般の作成には<Link href="/url-slug-generator">URL Slug Generator</Link>をお使いください。タイトルをそのまま変換するなら<Link href="/text-to-slug">Text to Slug</Link>、アクセント記号や特殊文字の除去には<Link href="/slugify-online">Slugify Online</Link>が便利です。
              </p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist ein Permalink?</h2>
              <p>
                Ein Permalink (Permanent Link) ist eine URL, die dauerhaft unverändert bleiben soll und als beständige Referenz auf eine Webseite oder einen Blogbeitrag dient. Im Gegensatz zu dynamischen URLs mit Abfrageparametern sind Permalinks sauber, lesbar und suchmaschinenfreundlich.
              </p>
              <h2>Permalink Generator Online</h2>
              <p>
                Verwenden Sie diesen Permalink-Generator, wenn Sie einen permanenten URL-Slug für einen Blogbeitrag, eine Produktseite, eine Dokumentation oder einen CMS-Eintrag benötigen. Fügen Sie einen Arbeitstitel ein, wählen Sie Ihre Slug-Einstellungen und kopieren Sie einen kurzen, SEO-freundlichen Permalink, der jahrelang unverändert bleiben kann.
              </p>

              <h2>Beispiele für SEO-freundliche Permalinks</h2>
              <ul>
                <li><code>Produktnamen richtig wählen</code> wird zu <code>produktnamen-richtig-waehlen</code></li>
                <li><code>WordPress Permalink Einstellungen</code> wird zu <code>wordpress-permalink-einstellungen</code></li>
                <li><code>SEO URL-Länge Tipps 2026</code> wird zu <code>seo-url-laenge-tipps</code></li>
              </ul>

              <h2>Best Practices für die Permalink-Struktur</h2>
              <ul>
                <li>Beschreibende Wörter verwenden, die den Seiteninhalt widerspiegeln</li>
                <li>URLs kurz und lesbar halten (unter 60 Zeichen)</li>
                <li>Bindestriche statt Unterstriche als Trennzeichen verwenden</li>
                <li>Datumsangaben vermeiden, es sei denn der Inhalt ist zeitgebunden</li>
                <li>Stoppwörter (der, die, das, und, ein) entfernen</li>
                <li>Ausschließlich Kleinbuchstaben verwenden</li>
              </ul>

              <h2>Permalink-Formate nach Plattform</h2>
              <ul>
                <li><strong>WordPress</strong>: Einstellungen &rarr; Permalinks &rarr; Beitragsname (<code>/%postname%/</code>)</li>
                <li><strong>Ghost</strong>: Automatische Generierung aus dem Titel</li>
                <li><strong>Hugo</strong>: Konfigurierbar über <code>permalinks</code> in der Config</li>
                <li><strong>Next.js</strong>: Dateibasiertes Routing mit benutzerdefinierten Slugs</li>
              </ul>
              <h2>Verwandte Slug-Tools</h2>
              <p>
                Für einen umfassenden SEO-URL-Workflow nutzen Sie den <Link href="/url-slug-generator">URL Slug Generator</Link>.
                Für direkte Titelumwandlung probieren Sie <Link href="/text-to-slug">Text to Slug</Link>.
                Zum Entfernen von Akzenten und Sonderzeichen verwenden Sie <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué es un enlace permanente?</h2>
              <p>
                Un enlace permanente (permalink) es una URL diseñada para permanecer sin cambios durante años, proporcionando una referencia duradera a una página web o entrada de blog. A diferencia de las URLs dinámicas con parámetros de consulta, los permalinks son limpios, legibles y optimizados para motores de búsqueda.
              </p>
              <h2>Generador de enlaces permanentes en línea</h2>
              <p>
                Utiliza este generador de permalinks cuando necesites un slug de URL permanente para una entrada de blog, página de producto, documentación o entrada de CMS. Pega un título de trabajo, elige la configuración del slug y copia un permalink corto y SEO-friendly que puede mantenerse sin cambios durante años.
              </p>

              <h2>Ejemplos de permalinks SEO-friendly</h2>
              <ul>
                <li><code>Cómo elegir un nombre de producto</code> se convierte en <code>como-elegir-nombre-producto</code></li>
                <li><code>Guía de permalinks en WordPress</code> se convierte en <code>guia-permalinks-wordpress</code></li>
                <li><code>Consejos SEO para URLs 2026</code> se convierte en <code>consejos-seo-urls</code></li>
              </ul>

              <h2>Buenas prácticas para la estructura de permalinks</h2>
              <ul>
                <li>Usar palabras descriptivas que reflejen el contenido de la página</li>
                <li>Mantener las URLs cortas y legibles (menos de 60 caracteres)</li>
                <li>Usar guiones en lugar de guiones bajos para separar palabras</li>
                <li>Evitar fechas en los permalinks a menos que el contenido sea temporal</li>
                <li>Eliminar palabras vacías (de, el, la, y, un) para mayor concisión</li>
                <li>Usar solo letras minúsculas</li>
              </ul>

              <h2>Formatos de permalink por plataforma</h2>
              <ul>
                <li><strong>WordPress</strong>: Ajustes &rarr; Enlaces permanentes &rarr; Nombre de la entrada (<code>/%postname%/</code>)</li>
                <li><strong>Ghost</strong>: Generación automática desde el título</li>
                <li><strong>Hugo</strong>: Configurable en <code>permalinks</code> del archivo de configuración</li>
                <li><strong>Next.js</strong>: Enrutamiento basado en archivos con slugs personalizados</li>
              </ul>
              <h2>Herramientas de slug relacionadas</h2>
              <p>
                Para un flujo de trabajo completo de URLs SEO, usa el <Link href="/url-slug-generator">URL Slug Generator</Link>.
                Para convertir títulos directamente, prueba <Link href="/text-to-slug">Text to Slug</Link>.
                Para eliminar acentos y caracteres especiales, usa <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que é um permalink?</h2>
              <p>
                Um permalink (link permanente) é uma URL projetada para permanecer inalterada por muitos anos, fornecendo uma referência duradoura a uma página web ou postagem de blog. Diferente de URLs dinâmicas com parâmetros de consulta, os permalinks são limpos, legíveis e otimizados para mecanismos de busca.
              </p>
              <h2>Gerador de permalink online</h2>
              <p>
                Use este gerador de permalinks quando precisar de um slug de URL permanente para uma postagem de blog, página de produto, documentação ou entrada de CMS. Cole um título de trabalho, escolha as configurações do slug e copie um permalink curto e SEO-friendly que pode permanecer inalterado por anos.
              </p>

              <h2>Exemplos de permalinks SEO-friendly</h2>
              <ul>
                <li><code>Como escolher um nome de produto</code> vira <code>como-escolher-nome-produto</code></li>
                <li><code>Guia de permalinks do WordPress</code> vira <code>guia-permalinks-wordpress</code></li>
                <li><code>Dicas de SEO para URLs 2026</code> vira <code>dicas-seo-urls</code></li>
              </ul>

              <h2>Boas práticas para estrutura de permalinks</h2>
              <ul>
                <li>Usar palavras descritivas que reflitam o conteúdo da página</li>
                <li>Manter as URLs curtas e legíveis (menos de 60 caracteres)</li>
                <li>Usar hífens em vez de underlines para separar palavras</li>
                <li>Evitar datas nos permalinks, a menos que o conteúdo seja temporal</li>
                <li>Remover palavras vazias (de, o, a, e, um) para manter a concisão</li>
                <li>Usar apenas letras minúsculas</li>
              </ul>

              <h2>Formatos de permalink por plataforma</h2>
              <ul>
                <li><strong>WordPress</strong>: Configurações &rarr; Links permanentes &rarr; Nome do post (<code>/%postname%/</code>)</li>
                <li><strong>Ghost</strong>: Geração automática a partir do título</li>
                <li><strong>Hugo</strong>: Configurável em <code>permalinks</code> no arquivo de configuração</li>
                <li><strong>Next.js</strong>: Roteamento baseado em arquivos com slugs personalizados</li>
              </ul>
              <h2>Ferramentas de slug relacionadas</h2>
              <p>
                Para um fluxo completo de URLs SEO, use o <Link href="/url-slug-generator">URL Slug Generator</Link>.
                Para converter títulos diretamente, experimente o <Link href="/text-to-slug">Text to Slug</Link>.
                Para remover acentos e caracteres especiais, use o <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce qu&apos;un permalien ?</h2>
              <p>
                Un permalien (lien permanent) est une URL conçue pour rester inchangée pendant de nombreuses années, fournissant une référence durable vers une page web ou un article de blog. Contrairement aux URLs dynamiques avec des paramètres de requête, les permaliens sont propres, lisibles et optimisés pour les moteurs de recherche.
              </p>
              <h2>Générateur de permaliens en ligne</h2>
              <p>
                Utilisez ce générateur de permaliens lorsque vous avez besoin d&apos;un slug d&apos;URL permanent pour un article de blog, une page produit, une documentation ou une entrée CMS. Collez un titre de travail, choisissez vos réglages de slug et copiez un permalien court et SEO-friendly qui peut rester inchangé pendant des années.
              </p>

              <h2>Exemples de permaliens SEO-friendly</h2>
              <ul>
                <li><code>Comment choisir un nom de produit</code> devient <code>comment-choisir-nom-produit</code></li>
                <li><code>Guide des permaliens WordPress</code> devient <code>guide-permaliens-wordpress</code></li>
                <li><code>Conseils SEO pour les URLs 2026</code> devient <code>conseils-seo-urls</code></li>
              </ul>

              <h2>Bonnes pratiques pour la structure des permaliens</h2>
              <ul>
                <li>Utiliser des mots descriptifs qui reflètent le contenu de la page</li>
                <li>Garder les URLs courtes et lisibles (moins de 60 caractères)</li>
                <li>Utiliser des tirets et non des underscores pour séparer les mots</li>
                <li>Éviter les dates dans les permaliens sauf si le contenu est lié à l&apos;actualité</li>
                <li>Supprimer les mots vides (le, la, de, et, un) pour rester concis</li>
                <li>Utiliser uniquement des lettres minuscules</li>
              </ul>

              <h2>Formats de permalien par plateforme</h2>
              <ul>
                <li><strong>WordPress</strong> : Réglages &rarr; Permaliens &rarr; Nom de l&apos;article (<code>/%postname%/</code>)</li>
                <li><strong>Ghost</strong> : Génération automatique à partir du titre</li>
                <li><strong>Hugo</strong> : Configurable via <code>permalinks</code> dans la configuration</li>
                <li><strong>Next.js</strong> : Routage basé sur les fichiers avec slugs personnalisés</li>
              </ul>
              <h2>Outils de slug associés</h2>
              <p>
                Pour un workflow complet d&apos;URLs SEO, utilisez le <Link href="/url-slug-generator">URL Slug Generator</Link>.
                Pour convertir directement des titres, essayez <Link href="/text-to-slug">Text to Slug</Link>.
                Pour supprimer les accents et caractères spéciaux, utilisez <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          <RelatedTools current="/permalink-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
