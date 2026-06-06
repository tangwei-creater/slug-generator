import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LoremIpsumTool from "@/components/LoremIpsumTool";

const siteUrl = "https://sluggenerator.app";
const path = "/lorem-ipsum-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.loremIpsumGenerator" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function LoremIpsumGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.loremIpsumGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lorem Ipsum Generator",
    url: `${siteUrl}${path}`,
    description: "Generate lorem ipsum placeholder text for web design, mockups, and prototypes.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Lorem Ipsum Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <LoremIpsumTool />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is Lorem Ipsum?</h2>
              <p>
                Lorem ipsum is placeholder text used in the design and typesetting industry. It has been the standard dummy text since the 1500s, when an unknown printer scrambled a passage from Cicero&apos;s &quot;De Finibus Bonorum et Malorum&quot; to create a type specimen book.
              </p>

              <h2>Why Use Lorem Ipsum?</h2>
              <ul>
                <li><strong>Focus on design:</strong> Placeholder text lets designers evaluate layouts without readers getting distracted by actual content</li>
                <li><strong>Realistic text flow:</strong> Unlike repeating &quot;text here text here,&quot; lorem ipsum has natural word length variation that mimics real content</li>
                <li><strong>Industry standard:</strong> Clients and stakeholders recognize it as placeholder text immediately</li>
                <li><strong>No accidental meaning:</strong> Random latin-like text won&apos;t be mistaken for real content in production</li>
              </ul>

              <h2>When to Use Placeholder Text</h2>
              <p>
                Use lorem ipsum for website wireframes, app mockups, print layout proofs, font previews, and any design where the actual copy isn&apos;t ready yet. Avoid using it in production — search engines may flag pages with dummy text as low quality.
              </p>

              <h2>Paragraphs vs Sentences vs Words</h2>
              <p>
                Choose <strong>paragraphs</strong> for full-page layouts and blog post templates. Use <strong>sentences</strong> for UI elements like cards, tooltips, and notifications. Pick <strong>words</strong> when you need a specific amount of text for testing character limits or responsive breakpoints.
              </p>

              <h2>Related Tools</h2>
              <p>
                For counting words in your final content, use the <Link href="/word-counter">Word Counter</Link>.
                For creating URL slugs, try the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For cleaning text, see the <Link href="/plain-text-converter">Plain Text Converter</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Lorem Ipsumとは？</h2>
              <p>Lorem Ipsumは、デザインおよび組版業界で使用されるプレースホルダーテキストです。1500年代から標準的なダミーテキストとして使用されてきました。キケロの「De Finibus Bonorum et Malorum」の一節を元にしています。</p>

              <h2>なぜLorem Ipsumを使うのか？</h2>
              <ul>
                <li><strong>デザインに集中：</strong>プレースホルダーテキストにより、読者が実際のコンテンツに気を取られることなくレイアウトを評価できます</li>
                <li><strong>リアルなテキストフロー：</strong>「ここにテキスト」の繰り返しとは異なり、自然な単語長の変化があります</li>
                <li><strong>業界標準：</strong>クライアントやステークホルダーがすぐにプレースホルダーだと認識できます</li>
              </ul>

              <h2>プレースホルダーテキストの使い方</h2>
              <p>ウェブサイトのワイヤーフレーム、アプリのモックアップ、印刷レイアウトの校正、フォントのプレビューなどに使用します。本番環境では使用しないでください。</p>

              <h2>関連ツール</h2>
              <p>最終コンテンツの単語数カウントには<Link href="/word-counter">文字数カウンター</Link>、URLスラッグの作成には<Link href="/url-slug-generator">URLスラッグジェネレーター</Link>をお使いください。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist Lorem Ipsum?</h2>
              <p>Lorem Ipsum ist ein Platzhaltertext, der in der Design- und Satzindustrie verwendet wird. Er ist seit dem 16. Jahrhundert der Standard-Blindtext, als ein unbekannter Drucker eine Passage aus Ciceros &quot;De Finibus Bonorum et Malorum&quot; veränderte.</p>

              <h2>Warum Lorem Ipsum verwenden?</h2>
              <ul>
                <li><strong>Fokus auf Design:</strong> Platzhaltertext ermöglicht es Designern, Layouts zu bewerten, ohne dass Leser vom tatsächlichen Inhalt abgelenkt werden</li>
                <li><strong>Realistischer Textfluss:</strong> Im Gegensatz zu wiederholtem &quot;Text hier&quot; hat Lorem Ipsum eine natürliche Wortlängenvariation</li>
                <li><strong>Branchenstandard:</strong> Kunden erkennen es sofort als Platzhaltertext</li>
              </ul>

              <h2>Verwandte Tools</h2>
              <p>Zum Zählen von Wörtern nutzen Sie den <Link href="/word-counter">Wörter Zähler</Link>. Für URL-Slugs den <Link href="/url-slug-generator">URL-Slug-Generator</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>&iquest;Qu&eacute; es Lorem Ipsum?</h2>
              <p>Lorem Ipsum es un texto de marcador de posici&oacute;n utilizado en la industria del dise&ntilde;o y la tipograf&iacute;a. Ha sido el texto est&aacute;ndar desde el siglo XVI, cuando un impresor desconocido alter&oacute; un pasaje de &quot;De Finibus Bonorum et Malorum&quot; de Cicer&oacute;n.</p>

              <h2>&iquest;Por qu&eacute; usar Lorem Ipsum?</h2>
              <ul>
                <li><strong>Enfoque en el dise&ntilde;o:</strong> El texto de marcador permite evaluar layouts sin distracciones</li>
                <li><strong>Flujo de texto realista:</strong> Tiene variaci&oacute;n natural en la longitud de palabras</li>
                <li><strong>Est&aacute;ndar de la industria:</strong> Los clientes lo reconocen inmediatamente</li>
              </ul>

              <h2>Herramientas relacionadas</h2>
              <p>Para contar palabras, usa el <Link href="/word-counter">Contador de Palabras</Link>. Para slugs de URL, el <Link href="/url-slug-generator">Generador de URL Slug</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que &eacute; Lorem Ipsum?</h2>
              <p>Lorem Ipsum &eacute; um texto de espa&ccedil;o reservado usado na ind&uacute;stria de design e tipografia. &Eacute; o texto padr&atilde;o desde o s&eacute;culo XVI, quando um impressor desconhecido alterou uma passagem de &quot;De Finibus Bonorum et Malorum&quot; de C&iacute;cero.</p>

              <h2>Por que usar Lorem Ipsum?</h2>
              <ul>
                <li><strong>Foco no design:</strong> O texto de espa&ccedil;o reservado permite avaliar layouts sem distra&ccedil;&otilde;es</li>
                <li><strong>Fluxo de texto realista:</strong> Tem varia&ccedil;&atilde;o natural no comprimento das palavras</li>
                <li><strong>Padr&atilde;o da ind&uacute;stria:</strong> Clientes o reconhecem imediatamente</li>
              </ul>

              <h2>Ferramentas relacionadas</h2>
              <p>Para contar palavras, use o <Link href="/word-counter">Contador de Palavras</Link>. Para slugs de URL, o <Link href="/url-slug-generator">Gerador de URL Slug</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce que Lorem Ipsum ?</h2>
              <p>Lorem Ipsum est un texte de substitution utilis&eacute; dans l&apos;industrie du design et de la typographie. C&apos;est le texte standard depuis le XVIe si&egrave;cle, lorsqu&apos;un imprimeur inconnu a modifi&eacute; un passage du &quot;De Finibus Bonorum et Malorum&quot; de Cic&eacute;ron.</p>

              <h2>Pourquoi utiliser Lorem Ipsum ?</h2>
              <ul>
                <li><strong>Focus sur le design :</strong> Le texte de substitution permet d&apos;&eacute;valuer les mises en page sans distraction</li>
                <li><strong>Flux de texte r&eacute;aliste :</strong> Il a une variation naturelle de la longueur des mots</li>
                <li><strong>Standard de l&apos;industrie :</strong> Les clients le reconnaissent imm&eacute;diatement</li>
              </ul>

              <h2>Outils connexes</h2>
              <p>Pour compter les mots, utilisez le <Link href="/word-counter">Compteur de Mots</Link>. Pour les slugs d&apos;URL, le <Link href="/url-slug-generator">G&eacute;n&eacute;rateur de Slug URL</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
