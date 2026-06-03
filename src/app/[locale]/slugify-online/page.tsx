import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/slugify-online";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.slugifyOnline" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function SlugifyOnline({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.slugifyOnline");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Slugify Online",
    url: `${siteUrl}${path}`,
    description: "Slugify text online for WordPress, Laravel, JavaScript, Python, and CMS URLs. Remove accents and special characters instantly.",
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
          <Breadcrumbs items={[{ name: "Slugify Online" }]} />
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
              <h2>What Does Slugify Mean?</h2>
              <p>
                &ldquo;Slugify&rdquo; means to convert a string of text into a
                URL-friendly slug. The term comes from the publishing industry,
                where a &ldquo;slug&rdquo; is a short label for an article. In web
                development, slugifying text produces clean URLs that are both
                human-readable and search engine friendly.
              </p>

              <h2>How Slugify Works</h2>
              <ol>
                <li>Input text is converted to lowercase</li>
                <li>Accented characters are transliterated to ASCII</li>
                <li>Special characters and punctuation are removed</li>
                <li>Spaces are replaced with hyphens</li>
                <li>Multiple consecutive hyphens are collapsed</li>
                <li>Leading and trailing hyphens are stripped</li>
              </ol>

              <h2>WordPress Slugify</h2>
              <p>
                WordPress automatically slugifies post titles for permalinks,
                but it can leave you with long or noisy URLs. Use this tool as a
                WordPress slugify preview before publishing: remove accents,
                strip punctuation, choose hyphens, and copy a clean slug for
                the post slug or page slug field.
              </p>

              <h2>Slugify in Different Languages</h2>
              <p>
                Most programming languages have slugify libraries:
                <code>slugify</code> for JavaScript/Python,
                <code>Str::slug()</code> in Laravel PHP,
                <code>parameterize</code> in Ruby on Rails, and
                <code>Slugifier</code> in .NET. This online tool works without
                any setup and produces the same results.
              </p>
              <h2>Related Slug Tools</h2>
              <p>
                For SEO-friendly URLs, use the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For permanent blog links, try the <Link href="/permalink-generator">Permalink Generator</Link>.
                For hyphenated naming, see the <Link href="/kebab-case-converter">Kebab Case Converter</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Slugify（スラッグ化）とは？</h2>
              <p>「Slugify」とは、テキスト文字列をURL向けのスラッグに変換することを意味します。この用語は出版業界に由来し、Web開発では人間にも検索エンジンにも読みやすいクリーンなURLが生成されます。</p>
              <h2>Slugifyの仕組み</h2>
              <ol>
                <li>テキストを小文字に変換</li>
                <li>アクセント付き文字をASCIIに音訳</li>
                <li>特殊文字と句読点を除去</li>
                <li>スペースをハイフンに置換</li>
                <li>連続するハイフンを1つに圧縮</li>
                <li>先頭と末尾のハイフンを削除</li>
              </ol>
              <h2>WordPress Slugify</h2>
              <p>WordPressは投稿タイトルをパーマリンク用に自動スラッグ化しますが、長かったり不要な文字が残ったりすることがあります。このツールをWordPressスラッグ化のプレビューとして使い、公開前にクリーンなスラッグを作成できます。</p>
              <h2>各プログラミング言語でのSlugify</h2>
              <p>JavaScript/Pythonの <code>slugify</code>、Laravel PHPの <code>Str::slug()</code>、Ruby on Railsの <code>parameterize</code>、.NETの <code>Slugifier</code> などがあります。このオンラインツールはセットアップ不要で同じ結果を出せます。</p>
              <h2>関連スラッグツール</h2>
              <p>SEOフレンドリーなURLには<Link href="/url-slug-generator">URL Slug Generator</Link>を、恒久的なブログリンクには<Link href="/permalink-generator">Permalink Generator</Link>を、ハイフン区切りの命名には<Link href="/kebab-case-converter">Kebab Case Converter</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was bedeutet Slugify?</h2>
              <p>„Slugify" bedeutet, einen Text in einen URL-freundlichen Slug umzuwandeln. In der Webentwicklung erzeugt das Slugifizieren saubere URLs, die für Menschen und Suchmaschinen lesbar sind.</p>
              <h2>Wie Slugify funktioniert</h2>
              <ol>
                <li>Text wird in Kleinbuchstaben umgewandelt</li>
                <li>Akzentzeichen werden in ASCII transliteriert</li>
                <li>Sonderzeichen und Interpunktion werden entfernt</li>
                <li>Leerzeichen werden durch Bindestriche ersetzt</li>
                <li>Mehrere Bindestriche werden zusammengefasst</li>
                <li>Führende und abschließende Bindestriche werden entfernt</li>
              </ol>
              <h2>WordPress Slugify</h2>
              <p>WordPress slugifiziert Beitragstitel automatisch für Permalinks, kann aber unaufgeräumte URLs hinterlassen. Nutzen Sie dieses Tool als Vorschau vor der Veröffentlichung.</p>
              <h2>Slugify in verschiedenen Programmiersprachen</h2>
              <p><code>slugify</code> für JavaScript/Python, <code>Str::slug()</code> in Laravel PHP, <code>parameterize</code> in Ruby on Rails, <code>Slugifier</code> in .NET. Dieses Online-Tool funktioniert ohne Installation.</p>
              <h2>Verwandte Slug-Tools</h2>
              <p>Für SEO-freundliche URLs: <Link href="/url-slug-generator">URL Slug Generator</Link>. Für dauerhafte Blog-Links: <Link href="/permalink-generator">Permalink Generator</Link>. Für Bindestrich-Benennung: <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué significa Slugify?</h2>
              <p>„Slugify" significa convertir texto en un slug compatible con URLs. En desarrollo web, slugificar texto produce URLs limpias legibles para humanos y motores de búsqueda.</p>
              <h2>Cómo funciona Slugify</h2>
              <ol>
                <li>El texto se convierte a minúsculas</li>
                <li>Los caracteres acentuados se transliteran a ASCII</li>
                <li>Los caracteres especiales y la puntuación se eliminan</li>
                <li>Los espacios se reemplazan con guiones</li>
                <li>Los guiones consecutivos se colapsan en uno</li>
                <li>Los guiones iniciales y finales se eliminan</li>
              </ol>
              <h2>WordPress Slugify</h2>
              <p>WordPress slugifica automáticamente los títulos para los permalinks, pero puede dejar URLs largas o ruidosas. Usa esta herramienta como vista previa antes de publicar.</p>
              <h2>Slugify en diferentes lenguajes</h2>
              <p><code>slugify</code> para JavaScript/Python, <code>Str::slug()</code> en Laravel PHP, <code>parameterize</code> en Ruby on Rails, <code>Slugifier</code> en .NET. Esta herramienta funciona sin configuración.</p>
              <h2>Herramientas relacionadas</h2>
              <p>Para URLs SEO-friendly: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para enlaces permanentes: <Link href="/permalink-generator">Permalink Generator</Link>. Para nomenclatura con guiones: <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que significa Slugify?</h2>
              <p>„Slugify" significa converter texto em um slug compatível com URLs. No desenvolvimento web, slugificar texto produz URLs limpas legíveis para humanos e mecanismos de busca.</p>
              <h2>Como o Slugify funciona</h2>
              <ol>
                <li>O texto é convertido para minúsculas</li>
                <li>Caracteres acentuados são transliterados para ASCII</li>
                <li>Caracteres especiais e pontuação são removidos</li>
                <li>Espaços são substituídos por hífens</li>
                <li>Hífens consecutivos são colapsados em um</li>
                <li>Hífens no início e no final são removidos</li>
              </ol>
              <h2>WordPress Slugify</h2>
              <p>O WordPress slugifica automaticamente os títulos para permalinks, mas pode deixar URLs longas. Use esta ferramenta como preview antes de publicar.</p>
              <h2>Slugify em diferentes linguagens</h2>
              <p><code>slugify</code> para JavaScript/Python, <code>Str::slug()</code> no Laravel PHP, <code>parameterize</code> no Ruby on Rails, <code>Slugifier</code> no .NET. Esta ferramenta funciona sem configuração.</p>
              <h2>Ferramentas relacionadas</h2>
              <p>Para URLs SEO-friendly: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para links permanentes: <Link href="/permalink-generator">Permalink Generator</Link>. Para nomenclatura com hífens: <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Que signifie Slugify ?</h2>
              <p>« Slugify » signifie convertir du texte en un slug compatible avec les URLs. En développement web, slugifier du texte produit des URLs propres, lisibles par les humains et les moteurs de recherche.</p>
              <h2>Comment fonctionne Slugify</h2>
              <ol>
                <li>Le texte est converti en minuscules</li>
                <li>Les caractères accentués sont translittérés en ASCII</li>
                <li>Les caractères spéciaux et la ponctuation sont supprimés</li>
                <li>Les espaces sont remplacés par des tirets</li>
                <li>Les tirets consécutifs sont fusionnés</li>
                <li>Les tirets en début et fin sont supprimés</li>
              </ol>
              <h2>WordPress Slugify</h2>
              <p>WordPress slugifie automatiquement les titres pour les permaliens, mais peut laisser des URLs longues. Utilisez cet outil comme aperçu avant publication.</p>
              <h2>Slugify dans différents langages</h2>
              <p><code>slugify</code> pour JavaScript/Python, <code>Str::slug()</code> en Laravel PHP, <code>parameterize</code> en Ruby on Rails, <code>Slugifier</code> en .NET. Cet outil fonctionne sans installation.</p>
              <h2>Outils associés</h2>
              <p>Pour des URLs SEO-friendly : <Link href="/url-slug-generator">URL Slug Generator</Link>. Pour des liens permanents : <Link href="/permalink-generator">Permalink Generator</Link>. Pour la nomenclature avec tirets : <Link href="/kebab-case-converter">Kebab Case Converter</Link>.</p>
            </section>
          )}

          <RelatedTools current="/slugify-online" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
