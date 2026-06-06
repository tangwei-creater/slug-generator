import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import WordCounterTool from "@/components/WordCounterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/word-counter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.wordCounter" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function WordCounter({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.wordCounter");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Counter",
    url: `${siteUrl}${path}`,
    description: "Count words, characters, sentences, and paragraphs in your text. Check reading time and keyword density.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Word Counter" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <WordCounterTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Free Online Word Counter</h2>
              <p>
                This word counter tool instantly analyzes your text and provides a complete breakdown: word count, character count (with and without spaces), sentence count, paragraph count, and line count. It also estimates reading time (at 200 words per minute) and speaking time (at 130 words per minute).
              </p>

              <h2>Why Word Count Matters</h2>
              <ul>
                <li><strong>SEO content:</strong> Blog posts typically perform best at 1,500-2,500 words for competitive keywords</li>
                <li><strong>Social media:</strong> Twitter/X limits posts to 280 characters, LinkedIn to 3,000</li>
                <li><strong>Academic writing:</strong> Essays, dissertations, and research papers have strict word limits</li>
                <li><strong>Email marketing:</strong> Subject lines should stay under 50 characters for best open rates</li>
                <li><strong>Meta descriptions:</strong> Keep them between 150-160 characters for full display in search results</li>
              </ul>

              <h2>Character Count vs Word Count</h2>
              <p>
                Character count includes every letter, number, symbol, and space in your text. Character count without spaces is useful for SMS messages (160 characters per segment) and database field limits. Word count is more useful for content planning and readability estimates.
              </p>

              <h2>Keyword Density Analysis</h2>
              <p>
                The top keywords section shows the most frequently used words in your text, excluding common stop words. This helps you check keyword density for SEO — aim for 1-2% density for your target keyword without overstuffing.
              </p>

              <h2>Reading Time Estimates</h2>
              <p>
                Average reading speed is approximately 200-250 words per minute for adults. Speaking speed averages 130 words per minute for presentations. These estimates help you plan content length for blog posts, scripts, and presentations.
              </p>

              <h2>Related Tools</h2>
              <p>
                For creating clean URL slugs from your text, use the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For converting text case, try the <Link href="/case-converter-online">Case Converter</Link>.
                For removing duplicate lines, see the <Link href="/duplicate-line-remover">Duplicate Line Remover</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>無料オンライン文字数カウンター</h2>
              <p>この文字数カウンターは、テキストを即座に分析し、完全な統計を提供します：単語数、文字数（スペースあり・なし）、文章数、段落数、行数。読了時間（毎分200単語）とスピーチ時間（毎分130単語）も推定します。</p>

              <h2>文字数が重要な理由</h2>
              <ul>
                <li><strong>SEOコンテンツ：</strong>ブログ記事は競合キーワードで1,500〜2,500語が最適</li>
                <li><strong>SNS：</strong>Twitter/Xは280文字、LinkedInは3,000文字が上限</li>
                <li><strong>学術論文：</strong>エッセイ、論文には厳格な文字数制限あり</li>
                <li><strong>メタディスクリプション：</strong>検索結果で完全表示するには150〜160文字</li>
              </ul>

              <h2>キーワード密度分析</h2>
              <p>トップキーワードセクションは、一般的なストップワードを除いた最頻出単語を表示します。SEOのキーワード密度チェックに役立ちます。</p>

              <h2>関連ツール</h2>
              <p>テキストからURLスラッグを作成するには<Link href="/url-slug-generator">URLスラッグジェネレーター</Link>、テキストケースの変換には<Link href="/case-converter-online">ケースコンバーター</Link>をお使いください。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Kostenloser Online-Wörterzähler</h2>
              <p>Dieses Tool analysiert Ihren Text sofort und bietet eine vollständige Aufschlüsselung: Wortanzahl, Zeichenanzahl (mit und ohne Leerzeichen), Satzanzahl, Absatzanzahl und Zeilenanzahl. Es schätzt auch die Lesezeit (bei 200 Wörtern pro Minute) und die Sprechzeit (bei 130 Wörtern pro Minute).</p>

              <h2>Warum die Wortanzahl wichtig ist</h2>
              <ul>
                <li><strong>SEO-Inhalte:</strong> Blog-Beiträge funktionieren am besten mit 1.500-2.500 Wörtern für wettbewerbsfähige Keywords</li>
                <li><strong>Social Media:</strong> Twitter/X begrenzt auf 280 Zeichen, LinkedIn auf 3.000</li>
                <li><strong>Akademisches Schreiben:</strong> Aufsätze und Dissertationen haben strenge Wortgrenzen</li>
                <li><strong>Meta-Beschreibungen:</strong> 150-160 Zeichen für vollständige Anzeige in Suchergebnissen</li>
              </ul>

              <h2>Keyword-Dichte-Analyse</h2>
              <p>Der Abschnitt Top-Keywords zeigt die am häufigsten verwendeten Wörter in Ihrem Text, ohne gängige Stoppwörter.</p>

              <h2>Verwandte Tools</h2>
              <p>Für URL-Slugs nutzen Sie den <Link href="/url-slug-generator">URL-Slug-Generator</Link>. Für Textformat-Konvertierungen den <Link href="/case-converter-online">Case Converter</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Contador de palabras gratuito en línea</h2>
              <p>Esta herramienta analiza tu texto al instante y proporciona un desglose completo: recuento de palabras, caracteres (con y sin espacios), oraciones, párrafos y líneas. También estima el tiempo de lectura (a 200 palabras por minuto) y el tiempo de habla (a 130 palabras por minuto).</p>

              <h2>Por qué importa el recuento de palabras</h2>
              <ul>
                <li><strong>Contenido SEO:</strong> Los artículos de blog funcionan mejor con 1.500-2.500 palabras</li>
                <li><strong>Redes sociales:</strong> Twitter/X limita a 280 caracteres, LinkedIn a 3.000</li>
                <li><strong>Escritura académica:</strong> Ensayos y tesis tienen límites estrictos</li>
                <li><strong>Meta descripciones:</strong> 150-160 caracteres para visualización completa</li>
              </ul>

              <h2>Herramientas relacionadas</h2>
              <p>Para crear slugs de URL, usa el <Link href="/url-slug-generator">Generador de URL Slug</Link>. Para convertir texto, prueba el <Link href="/case-converter-online">Convertidor de Casos</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Contador de palavras gratuito online</h2>
              <p>Esta ferramenta analisa seu texto instantaneamente e fornece uma análise completa: contagem de palavras, caracteres (com e sem espaços), frases, parágrafos e linhas. Também estima o tempo de leitura (a 200 palavras por minuto) e o tempo de fala (a 130 palavras por minuto).</p>

              <h2>Por que a contagem de palavras importa</h2>
              <ul>
                <li><strong>Conteúdo SEO:</strong> Artigos de blog funcionam melhor com 1.500-2.500 palavras</li>
                <li><strong>Redes sociais:</strong> Twitter/X limita a 280 caracteres, LinkedIn a 3.000</li>
                <li><strong>Escrita acadêmica:</strong> Ensaios e dissertações têm limites rígidos</li>
                <li><strong>Meta descrições:</strong> 150-160 caracteres para exibição completa</li>
              </ul>

              <h2>Ferramentas relacionadas</h2>
              <p>Para criar slugs de URL, use o <Link href="/url-slug-generator">Gerador de URL Slug</Link>. Para converter texto, experimente o <Link href="/case-converter-online">Conversor de Casos</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Compteur de mots gratuit en ligne</h2>
              <p>Cet outil analyse votre texte instantanément et fournit une analyse complète : nombre de mots, de caractères (avec et sans espaces), de phrases, de paragraphes et de lignes. Il estime également le temps de lecture (à 200 mots par minute) et le temps de parole (à 130 mots par minute).</p>

              <h2>Pourquoi le nombre de mots est important</h2>
              <ul>
                <li><strong>Contenu SEO :</strong> Les articles de blog fonctionnent mieux avec 1 500-2 500 mots</li>
                <li><strong>Réseaux sociaux :</strong> Twitter/X limite à 280 caractères, LinkedIn à 3 000</li>
                <li><strong>Écriture académique :</strong> Les essais et thèses ont des limites strictes</li>
                <li><strong>Méta-descriptions :</strong> 150-160 caractères pour un affichage complet</li>
              </ul>

              <h2>Outils connexes</h2>
              <p>Pour créer des slugs d&apos;URL, utilisez le <Link href="/url-slug-generator">Générateur de Slug URL</Link>. Pour convertir le texte, essayez le <Link href="/case-converter-online">Convertisseur de Casse</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
