import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/url-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.urlSlugGenerator" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function UrlSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.urlSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate clean SEO-friendly URL slugs with bulk mode, stop-word removal, max length control, and instant copy.",
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
          <Breadcrumbs items={[{ name: "URL Slug Generator" }]} />
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
              <h2>What Is a URL Slug Generator?</h2>
              <p>
                A URL slug generator converts human-readable text into a
                URL-friendly format. It takes titles, headings, or any text and
                produces a clean string that works as part of a web address.
              </p>

              <h2>Why Do URLs Need Slugs?</h2>
              <p>
                Search engines use URLs to understand page content. A URL like
                <code>/how-to-build-rest-api-nodejs</code> tells Google exactly
                what the page is about, while <code>/page?id=12345</code> provides
                no context. Clean URL slugs improve click-through rates from search
                results and make links more shareable.
              </p>

              <h2>Best Practices for URL Slugs</h2>
              <ul>
                <li>Use hyphens as word separators, not underscores</li>
                <li>Keep slugs under 60 characters</li>
                <li>Include your target keyword in the slug</li>
                <li>Use lowercase letters only</li>
                <li>Remove stop words (a, the, is, and) when possible</li>
                <li>Avoid changing slugs after a page is indexed</li>
              </ul>
              <h2>SEO-Friendly URL Generator</h2>
              <p>
                This page also works as an SEO-friendly URL generator. Use it
                to format a URL for SEO by lowercasing text, replacing spaces
                with hyphens, removing special characters, stripping optional
                stop words, and setting a maximum slug length before you copy.
              </p>

              <h2>Bulk URL Slug Generator</h2>
              <p>
                Need to generate slugs for multiple URLs at once? Switch to
                bulk mode above to convert an entire list of titles into clean
                URL slugs — one per line. This is ideal for batch-importing
                blog posts, product listings, or migrating pages between CMS
                platforms.
              </p>

              <h2>What Makes a Clean, SEO-Friendly Slug?</h2>
              <p>
                A clean URL slug contains only lowercase letters, numbers, and
                hyphens. It removes special characters, accents, and
                unnecessary words to create a concise, human-readable string
                that describes the page content. SEO-friendly slugs directly
                improve your search rankings by:
              </p>
              <ul>
                <li>Including target keywords that match search queries</li>
                <li>Being short enough to display fully in search results</li>
                <li>Making URLs shareable and easy to remember</li>
                <li>Avoiding encoded characters that break on social media</li>
              </ul>
              <p>
                For example, the title &quot;How to Build a REST API with
                Node.js (2024 Guide)&quot; becomes the clean slug{" "}
                <code>how-to-build-rest-api-nodejs-2024-guide</code> — or even
                shorter with stop words removed:{" "}
                <code>build-rest-api-nodejs-2024-guide</code>.
              </p>
              <h2>URL Length and Clean Slug Checks</h2>
              <p>
                Short URLs are easier to scan in search results. For most pages,
                aim for a slug under 60 characters, keep the target keyword near
                the front, and remove filler words when they do not change the
                meaning. The max length option helps turn long titles into short
                slugs without manually counting characters.
              </p>

              <h2>Shopify SEO-Friendly URLs</h2>
              <p>
                Shopify product, collection, and blog URLs use handles that work
                like slugs. Paste a product title here to create a clean Shopify
                SEO-friendly URL handle before adding it to your store.
              </p>

              <h2>URL Slug Creator for WordPress, Ghost &amp; Hugo</h2>
              <p>
                This tool works as a universal URL slug creator compatible with
                all major CMS platforms. WordPress uses slugs in its permalink
                structure, Ghost auto-generates them from post titles, and Hugo
                derives them from filenames. Use this generator to preview and
                customize your slug before pasting it into your CMS.
              </p>
              <h2>Related Slug Tools</h2>
              <p>
                For permanent blog URLs, use the <Link href="/permalink-generator">Permalink Generator</Link>.
                For direct title conversion, try <Link href="/text-to-slug">Text to Slug</Link>.
                For kebab-case URL naming, see the <Link href="/kebab-case-converter">Kebab Case Converter</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>URLスラッグジェネレーターとは？</h2>
              <p>URLスラッグジェネレーターは、人間が読めるテキストをURL向けのフォーマットに変換するツールです。タイトルや見出し、任意のテキストを受け取り、Webアドレスの一部として使えるクリーンな文字列を生成します。</p>
              <h2>なぜURLにスラッグが必要なのか？</h2>
              <p>検索エンジンはURLを手がかりにページの内容を理解します。<code>/how-to-build-rest-api-nodejs</code> のようなURLはページの主題を明確に伝えますが、<code>/page?id=12345</code> では文脈がわかりません。クリーンなURLスラッグは検索結果でのクリック率を高め、リンクの共有もしやすくなります。</p>
              <h2>URLスラッグのベストプラクティス</h2>
              <ul>
                <li>単語の区切りにはアンダースコアではなくハイフンを使う</li>
                <li>スラッグは60文字以下に保つ</li>
                <li>ターゲットキーワードをスラッグに含める</li>
                <li>小文字のみで統一する</li>
                <li>不要語を可能な限り除去する</li>
                <li>インデックス済みのページのスラッグは変更しない</li>
              </ul>
              <h2>SEOフレンドリーなURL生成ツール</h2>
              <p>このページはSEOフレンドリーなURL生成ツールとしても機能します。テキストを小文字に変換し、スペースをハイフンに置き換え、特殊文字を除去し、任意で不要語を削除して最大スラッグ長を設定してからコピーできます。</p>
              <h2>一括URLスラッグ生成</h2>
              <p>複数のURLスラッグを一度に生成したい場合は、上部のバルクモードに切り替えてください。タイトルのリスト全体を1行ずつクリーンなURLスラッグに変換できます。</p>
              <h2>URL長とクリーンスラッグのチェック</h2>
              <p>短いURLは検索結果で見やすくなります。ほとんどのページでは60文字以下を目安に、ターゲットキーワードを先頭近くに配置し、意味が変わらない範囲で不要語を削除しましょう。</p>
              <h2>ShopifyのSEOフレンドリーURL</h2>
              <p>Shopifyの商品・コレクション・ブログのURLは、スラッグのように機能する「ハンドル」を使っています。商品タイトルをここに貼り付ければ、ストアに追加する前にクリーンなURLハンドルを作成できます。</p>
              <h2>WordPress・Ghost・Hugo用 URLスラッグ作成</h2>
              <p>このツールは主要なCMSすべてに対応した汎用URLスラッグ作成ツールです。WordPressはパーマリンク構造にスラッグを使い、Ghostは投稿タイトルから自動生成し、Hugoはファイル名から導出します。</p>
              <h2>関連スラッグツール</h2>
              <p>恒久的なブログURLには<Link href="/permalink-generator">Permalink Generator</Link>をお使いください。タイトルを直接変換するなら<Link href="/text-to-slug">Text to Slug</Link>、ケバブケースのURL命名には<Link href="/kebab-case-converter">Kebab Case Converter</Link>が便利です。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist ein URL-Slug-Generator?</h2>
              <p>Ein URL-Slug-Generator wandelt lesbaren Text in ein URL-freundliches Format um. Er nimmt Titel, Überschriften oder beliebigen Text und erzeugt eine saubere Zeichenkette, die als Teil einer Webadresse funktioniert.</p>
              <h2>Warum brauchen URLs Slugs?</h2>
              <p>Suchmaschinen nutzen URLs, um den Seiteninhalt zu verstehen. Eine URL wie <code>/how-to-build-rest-api-nodejs</code> sagt Google genau, worum es geht, während <code>/page?id=12345</code> keinen Kontext bietet. Saubere URL-Slugs verbessern die Klickrate und machen Links leichter teilbar.</p>
              <h2>Best Practices für URL-Slugs</h2>
              <ul>
                <li>Bindestriche als Worttrenner verwenden, keine Unterstriche</li>
                <li>Slugs unter 60 Zeichen halten</li>
                <li>Zielkeyword im Slug aufnehmen</li>
                <li>Nur Kleinbuchstaben verwenden</li>
                <li>Stoppwörter möglichst entfernen</li>
                <li>Slugs nach der Indexierung nicht mehr ändern</li>
              </ul>
              <h2>SEO-freundlicher URL-Generator</h2>
              <p>Diese Seite funktioniert auch als SEO-freundlicher URL-Generator. Nutzen Sie sie, um Text in Kleinbuchstaben umzuwandeln, Leerzeichen durch Bindestriche zu ersetzen, Sonderzeichen zu entfernen und eine maximale Slug-Länge festzulegen.</p>
              <h2>Massen-URL-Slug-Generator</h2>
              <p>Müssen Sie Slugs für mehrere URLs gleichzeitig erstellen? Wechseln Sie oben in den Bulk-Modus, um eine ganze Liste von Titeln in saubere URL-Slugs umzuwandeln — einen pro Zeile.</p>
              <h2>URL-Länge und saubere Slug-Prüfungen</h2>
              <p>Kurze URLs sind in Suchergebnissen leichter zu erfassen. Für die meisten Seiten sollte der Slug unter 60 Zeichen liegen, das Zielkeyword möglichst vorn stehen und Füllwörter entfernt werden.</p>
              <h2>Shopify SEO-freundliche URLs</h2>
              <p>Shopify-Produkt-, Sammlungs- und Blog-URLs verwenden Handles, die wie Slugs funktionieren. Fügen Sie hier einen Produkttitel ein, um einen sauberen URL-Handle zu erstellen.</p>
              <h2>URL-Slug-Ersteller für WordPress, Ghost &amp; Hugo</h2>
              <p>Dieses Tool funktioniert als universeller URL-Slug-Ersteller für alle großen CMS-Plattformen. WordPress nutzt Slugs in seiner Permalink-Struktur, Ghost generiert sie automatisch und Hugo leitet sie aus Dateinamen ab.</p>
              <h2>Verwandte Slug-Tools</h2>
              <p>Für dauerhafte Blog-URLs nutzen Sie den <Link href="/permalink-generator">Permalink Generator</Link>. Für direkte Titelumwandlung probieren Sie <Link href="/text-to-slug">Text to Slug</Link>. Für kebab-case sehen Sie den <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué es un generador de URL slug?</h2>
              <p>Un generador de URL slug convierte texto legible en un formato compatible con URLs. Toma títulos, encabezados o cualquier texto y produce una cadena limpia que funciona como parte de una dirección web.</p>
              <h2>¿Por qué las URLs necesitan slugs?</h2>
              <p>Los motores de búsqueda usan las URLs para entender el contenido. Una URL como <code>/how-to-build-rest-api-nodejs</code> le dice a Google de qué trata la página, mientras que <code>/page?id=12345</code> no proporciona contexto. Los slugs limpios mejoran la tasa de clics y hacen los enlaces más compartibles.</p>
              <h2>Buenas prácticas para slugs de URL</h2>
              <ul>
                <li>Usar guiones como separadores, no guiones bajos</li>
                <li>Mantener los slugs por debajo de 60 caracteres</li>
                <li>Incluir la palabra clave objetivo en el slug</li>
                <li>Usar solo letras minúsculas</li>
                <li>Eliminar palabras vacías cuando sea posible</li>
                <li>Evitar cambiar slugs después de la indexación</li>
              </ul>
              <h2>Generador de URLs SEO-friendly</h2>
              <p>Esta página también funciona como un generador de URLs SEO-friendly. Úsala para convertir texto a minúsculas, reemplazar espacios con guiones, eliminar caracteres especiales y establecer una longitud máxima de slug.</p>
              <h2>Generador masivo de URL slugs</h2>
              <p>¿Necesitas generar slugs para varias URLs a la vez? Cambia al modo masivo arriba para convertir una lista completa de títulos en slugs limpios, uno por línea.</p>
              <h2>Longitud de URL y verificación de slugs</h2>
              <p>Las URLs cortas son más fáciles de leer en resultados de búsqueda. Apunta a un slug de menos de 60 caracteres, coloca la palabra clave al principio y elimina palabras de relleno.</p>
              <h2>URLs SEO-friendly de Shopify</h2>
              <p>Las URLs de productos, colecciones y blogs de Shopify usan handles que funcionan como slugs. Pega aquí un título de producto para crear un handle limpio antes de agregarlo a tu tienda.</p>
              <h2>Creador de URL slugs para WordPress, Ghost &amp; Hugo</h2>
              <p>Esta herramienta funciona como un creador universal de URL slugs compatible con todas las plataformas CMS principales.</p>
              <h2>Herramientas de slug relacionadas</h2>
              <p>Para URLs permanentes, usa el <Link href="/permalink-generator">Permalink Generator</Link>. Para convertir títulos, prueba <Link href="/text-to-slug">Text to Slug</Link>. Para kebab-case, consulta el <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que é um gerador de URL slug?</h2>
              <p>Um gerador de URL slug converte texto legível em um formato compatível com URLs. Ele pega títulos, cabeçalhos ou qualquer texto e produz uma string limpa que funciona como parte de um endereço web.</p>
              <h2>Por que as URLs precisam de slugs?</h2>
              <p>Os mecanismos de busca usam URLs para entender o conteúdo. Uma URL como <code>/how-to-build-rest-api-nodejs</code> diz ao Google sobre o que a página trata, enquanto <code>/page?id=12345</code> não fornece contexto. Slugs limpos melhoram a taxa de cliques e tornam os links mais compartilháveis.</p>
              <h2>Boas práticas para slugs de URL</h2>
              <ul>
                <li>Usar hífens como separadores, não underlines</li>
                <li>Manter slugs com menos de 60 caracteres</li>
                <li>Incluir a palavra-chave alvo no slug</li>
                <li>Usar apenas letras minúsculas</li>
                <li>Remover palavras vazias quando possível</li>
                <li>Evitar alterar slugs após a indexação</li>
              </ul>
              <h2>Gerador de URLs SEO-friendly</h2>
              <p>Esta página também funciona como um gerador de URLs SEO-friendly. Use-a para converter texto em minúsculas, substituir espaços por hífens, remover caracteres especiais e definir um comprimento máximo de slug.</p>
              <h2>Gerador de URL slugs em massa</h2>
              <p>Precisa gerar slugs para várias URLs de uma vez? Mude para o modo de massa acima para converter uma lista inteira de títulos em slugs limpos — um por linha.</p>
              <h2>Comprimento de URL e verificação de slugs</h2>
              <p>URLs curtas são mais fáceis de escanear nos resultados de busca. Mire em um slug com menos de 60 caracteres, coloque a palavra-chave perto do início e remova palavras de preenchimento.</p>
              <h2>URLs SEO-friendly do Shopify</h2>
              <p>As URLs de produtos, coleções e blogs do Shopify usam handles que funcionam como slugs. Cole aqui um título de produto para criar um handle limpo.</p>
              <h2>Criador de URL slugs para WordPress, Ghost &amp; Hugo</h2>
              <p>Esta ferramenta funciona como um criador universal de URL slugs para todas as principais plataformas CMS.</p>
              <h2>Ferramentas de slug relacionadas</h2>
              <p>Para URLs permanentes, use o <Link href="/permalink-generator">Permalink Generator</Link>. Para converter títulos, experimente o <Link href="/text-to-slug">Text to Slug</Link>. Para kebab-case, veja o <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce qu&apos;un générateur de slug URL ?</h2>
              <p>Un générateur de slug URL convertit du texte lisible en un format compatible avec les URLs. Il prend des titres, des en-têtes ou n&apos;importe quel texte et produit une chaîne propre utilisable dans une adresse web.</p>
              <h2>Pourquoi les URLs ont-elles besoin de slugs ?</h2>
              <p>Les moteurs de recherche utilisent les URLs pour comprendre le contenu. Une URL comme <code>/how-to-build-rest-api-nodejs</code> dit à Google de quoi parle la page, tandis que <code>/page?id=12345</code> ne fournit aucun contexte. Des slugs propres améliorent le taux de clics et rendent les liens plus partageables.</p>
              <h2>Bonnes pratiques pour les slugs URL</h2>
              <ul>
                <li>Utiliser des tirets comme séparateurs, pas des underscores</li>
                <li>Garder les slugs en dessous de 60 caractères</li>
                <li>Inclure le mot-clé cible dans le slug</li>
                <li>Utiliser uniquement des lettres minuscules</li>
                <li>Supprimer les mots vides quand c&apos;est possible</li>
                <li>Éviter de modifier les slugs après l&apos;indexation</li>
              </ul>
              <h2>Générateur d&apos;URLs SEO-friendly</h2>
              <p>Cette page fonctionne aussi comme un générateur d&apos;URLs SEO-friendly. Utilisez-la pour passer en minuscules, remplacer les espaces par des tirets, supprimer les caractères spéciaux et définir une longueur maximale de slug.</p>
              <h2>Générateur de slugs URL en masse</h2>
              <p>Besoin de générer des slugs pour plusieurs URLs à la fois ? Passez en mode masse ci-dessus pour convertir une liste entière de titres en slugs propres — un par ligne.</p>
              <h2>Longueur d&apos;URL et vérification de slugs</h2>
              <p>Les URLs courtes sont plus faciles à lire dans les résultats de recherche. Visez un slug de moins de 60 caractères, placez le mot-clé cible près du début et supprimez les mots de remplissage.</p>
              <h2>URLs SEO-friendly Shopify</h2>
              <p>Les URLs Shopify utilisent des handles qui fonctionnent comme des slugs. Collez ici un titre de produit pour créer un handle propre avant de l&apos;ajouter à votre boutique.</p>
              <h2>Créateur de slugs URL pour WordPress, Ghost &amp; Hugo</h2>
              <p>Cet outil fonctionne comme un créateur universel de slugs URL compatible avec toutes les grandes plateformes CMS.</p>
              <h2>Outils de slug associés</h2>
              <p>Pour des URLs permanentes, utilisez le <Link href="/permalink-generator">Permalink Generator</Link>. Pour convertir des titres, essayez <Link href="/text-to-slug">Text to Slug</Link>. Pour le kebab-case, consultez le <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          <RelatedTools current="/url-slug-generator" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
