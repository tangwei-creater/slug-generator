import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/text-to-slug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.textToSlug" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function TextToSlug({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.textToSlug");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text to Slug Converter",
    url: `${siteUrl}${path}`,
    description: "Convert any text to a URL-safe slug. Handles accented characters, special symbols, and Unicode.",
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
          <Breadcrumbs items={[{ name: "Text to Slug" }]} />
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
              <h2>How Text to Slug Conversion Works</h2>
              <p>
                Converting text to a slug involves several steps: lowercasing,
                transliterating accented characters (like &eacute; to e),
                replacing spaces with hyphens, and removing special characters.
                This tool handles all of these steps automatically in real time.
              </p>

              <h2>Handling International Characters</h2>
              <p>
                This text to slug converter supports transliteration for Latin
                accented characters, Germanic umlauts, and common symbols. For
                example, &ldquo;&uuml;ber&rdquo; becomes &ldquo;uber&rdquo; and
                &ldquo;caf&eacute;&rdquo; becomes &ldquo;cafe&rdquo;.
              </p>

              <h2>When to Use Text to Slug</h2>
              <ul>
                <li>Creating blog post URLs from article titles</li>
                <li>Generating product page slugs for e-commerce</li>
                <li>Building file names from user-provided text</li>
                <li>Creating database-friendly identifiers</li>
                <li>Naming Git branches from issue titles</li>
              </ul>

              <h2>Text to Slug vs URL Slug Generator</h2>
              <p>
                This text to slug tool focuses on raw text conversion — removing
                special characters and generating a clean slug. If you need
                SEO-specific features like keyword optimization and URL length
                checks, try the{" "}
                <Link href="/url-slug-generator">URL Slug Generator</Link>. For
                WordPress-specific slugs, see the{" "}
                <Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>.
              </p>

              <h2>Related Slug Tools</h2>
              <p>
                Generate permanent URLs with the{" "}
                <Link href="/permalink-generator">Permalink Generator</Link>.
                Convert text for code with the{" "}
                <Link href="/kebab-case-converter">Kebab Case Converter</Link> or{" "}
                <Link href="/slugify-online">Slugify Online</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>テキストからスラッグへの変換の仕組み</h2>
              <p>テキストをスラッグに変換するには、小文字化、アクセント文字の音訳（例：é → e）、スペースのハイフン化、特殊文字の除去といった複数のステップを踏みます。このツールはこれらすべてをリアルタイムで自動処理します。</p>
              <h2>国際文字の処理</h2>
              <p>このテキスト→スラッグ変換ツールは、ラテン系アクセント文字、ゲルマン系ウムラウト、一般的な記号の音訳に対応しています。例えば「über」は「uber」に、「café」は「cafe」に変換されます。</p>
              <h2>テキスト→スラッグの用途</h2>
              <ul>
                <li>記事タイトルからブログ記事のURLを作成</li>
                <li>ECサイトの商品ページスラッグを生成</li>
                <li>ユーザー入力テキストからファイル名を作成</li>
                <li>データベース用の識別子を作成</li>
                <li>Issueタイトルからgitブランチ名を命名</li>
              </ul>
              <h2>関連ツール</h2>
              <p>SEO向けURLには<Link href="/url-slug-generator">URL Slug Generator</Link>を、WordPress専用には<Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>を、永続URLには<Link href="/permalink-generator">Permalink Generator</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Wie die Text-zu-Slug-Konvertierung funktioniert</h2>
              <p>Die Umwandlung von Text in einen Slug umfasst mehrere Schritte: Kleinschreibung, Transliteration von Akzentzeichen (z.B. é → e), Ersetzen von Leerzeichen durch Bindestriche und Entfernen von Sonderzeichen. Dieses Tool erledigt all diese Schritte automatisch in Echtzeit.</p>
              <h2>Verarbeitung internationaler Zeichen</h2>
              <p>Dieser Text-zu-Slug-Konverter unterstützt die Transliteration von lateinischen Akzentzeichen, germanischen Umlauten (ä → ae, ü → ue, ö → oe) und gängigen Symbolen. Zum Beispiel wird „über" zu „uber" und „café" zu „cafe".</p>
              <h2>Anwendungsfälle</h2>
              <ul>
                <li>Blog-URLs aus Artikeltiteln erstellen</li>
                <li>Produkt-Slugs für E-Commerce-Seiten generieren</li>
                <li>Dateinamen aus Benutzereingaben ableiten</li>
                <li>Datenbankfreundliche Bezeichner erstellen</li>
                <li>Git-Branch-Namen aus Issue-Titeln generieren</li>
              </ul>
              <h2>Verwandte Tools</h2>
              <p>Für SEO-optimierte URLs: <Link href="/url-slug-generator">URL Slug Generator</Link>. Für WordPress: <Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>. Für permanente URLs: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Cómo funciona la conversión de texto a slug</h2>
              <p>Convertir texto a slug implica varios pasos: pasar a minúsculas, transliterar caracteres acentuados (como é a e), reemplazar espacios con guiones y eliminar caracteres especiales. Esta herramienta realiza todos estos pasos automáticamente en tiempo real.</p>
              <h2>Manejo de caracteres internacionales</h2>
              <p>Este convertidor soporta la transliteración de caracteres acentuados latinos, diéresis germánicas y símbolos comunes. Por ejemplo, „über" se convierte en „uber" y „café" en „cafe". Los caracteres en español como ñ se manejan correctamente (ñ → n).</p>
              <h2>Cuándo usar texto a slug</h2>
              <ul>
                <li>Crear URLs de blog a partir de títulos de artículos</li>
                <li>Generar slugs de productos para comercio electrónico</li>
                <li>Crear nombres de archivos a partir de texto proporcionado</li>
                <li>Crear identificadores para bases de datos</li>
                <li>Nombrar ramas de Git a partir de títulos de issues</li>
              </ul>
              <h2>Herramientas relacionadas</h2>
              <p>Para URLs SEO-friendly: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para WordPress: <Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>. Para enlaces permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Como funciona a conversão de texto para slug</h2>
              <p>Converter texto em slug envolve vários passos: conversão para minúsculas, transliteração de caracteres acentuados (como é para e), substituição de espaços por hífens e remoção de caracteres especiais. Esta ferramenta executa todos esses passos automaticamente em tempo real.</p>
              <h2>Tratamento de caracteres internacionais</h2>
              <p>Este conversor suporta a transliteração de caracteres acentuados latinos, tremas germânicos e símbolos comuns. Por exemplo, „über" torna-se „uber" e „café" torna-se „cafe". Caracteres portugueses como ã e ç são tratados corretamente (ã → a, ç → c).</p>
              <h2>Quando usar texto para slug</h2>
              <ul>
                <li>Criar URLs de blog a partir de títulos de artigos</li>
                <li>Gerar slugs de produtos para e-commerce</li>
                <li>Criar nomes de arquivos a partir de texto fornecido</li>
                <li>Criar identificadores para bancos de dados</li>
                <li>Nomear branches do Git a partir de títulos de issues</li>
              </ul>
              <h2>Ferramentas relacionadas</h2>
              <p>Para URLs SEO-friendly: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para WordPress: <Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>. Para links permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Comment fonctionne la conversion de texte en slug</h2>
              <p>La conversion de texte en slug comporte plusieurs étapes : passage en minuscules, translittération des caractères accentués (comme é en e), remplacement des espaces par des tirets et suppression des caractères spéciaux. Cet outil effectue toutes ces étapes automatiquement en temps réel.</p>
              <h2>Gestion des caractères internationaux</h2>
              <p>Ce convertisseur prend en charge la translittération des caractères latins accentués, des trémas germaniques et des symboles courants. Par exemple, « über » devient « uber » et « café » devient « cafe ». Les caractères français comme é, è, ê, ë, ç sont correctement traités.</p>
              <h2>Quand utiliser texte vers slug</h2>
              <ul>
                <li>Créer des URLs de blog à partir de titres d&apos;articles</li>
                <li>Générer des slugs de produits pour le commerce en ligne</li>
                <li>Créer des noms de fichiers à partir de texte saisi</li>
                <li>Créer des identifiants pour les bases de données</li>
                <li>Nommer des branches Git à partir de titres d&apos;issues</li>
              </ul>
              <h2>Outils associés</h2>
              <p>Pour des URLs SEO-friendly : <Link href="/url-slug-generator">URL Slug Generator</Link>. Pour WordPress : <Link href="/wordpress-slug-generator">WordPress Slug Generator</Link>. Pour des liens permanents : <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          <RelatedTools current="/text-to-slug" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
