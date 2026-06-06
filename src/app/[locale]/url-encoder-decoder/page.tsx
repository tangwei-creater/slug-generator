import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import UrlEncoderTool from "@/components/UrlEncoderTool";

const siteUrl = "https://sluggenerator.app";
const path = "/url-encoder-decoder";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.urlEncoderDecoder" });

  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });
}

export default async function UrlEncoderDecoder({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.urlEncoderDecoder");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Encoder / Decoder",
    url: `${siteUrl}${path}`,
    description: "Encode or decode URLs and query strings online. Supports encodeURIComponent and encodeURI modes.",
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
          <Breadcrumbs items={[{ name: "URL Encoder / Decoder" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <UrlEncoderTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Is URL Encoding?</h2>
              <p>
                URL encoding (percent-encoding) converts characters into a format that can be safely transmitted in a URL. Characters like spaces, ampersands, and non-ASCII letters are replaced with a percent sign followed by two hex digits — for example, a space becomes <code>%20</code>.
              </p>

              <h2>When Do You Need URL Encoding?</h2>
              <ul>
                <li>Passing user input as query parameters (<code>?q=hello%20world</code>)</li>
                <li>Including special characters in URL paths</li>
                <li>Encoding non-ASCII characters (Chinese, Japanese, Arabic) in URLs</li>
                <li>Building API requests with dynamic values</li>
                <li>Fixing broken links caused by unescaped characters</li>
              </ul>

              <h2>encodeURIComponent vs encodeURI</h2>
              <p>
                JavaScript provides two built-in functions for URL encoding. <code>encodeURIComponent()</code> encodes all special characters including <code>:</code>, <code>/</code>, <code>?</code>, <code>#</code>, and <code>&amp;</code>. Use it for encoding individual query parameter values. <code>encodeURI()</code> preserves URL structure characters and only encodes characters that are invalid in any part of a URL. Use it when encoding a complete URL.
              </p>

              <h2>Common URL Encoding Examples</h2>
              <ul>
                <li>Space → <code>%20</code> (or <code>+</code> in form data)</li>
                <li><code>&amp;</code> → <code>%26</code></li>
                <li><code>=</code> → <code>%3D</code></li>
                <li><code>?</code> → <code>%3F</code></li>
                <li><code>#</code> → <code>%23</code></li>
                <li><code>/</code> → <code>%2F</code></li>
              </ul>

              <h2>URL Decoding</h2>
              <p>
                URL decoding reverses percent-encoding back to the original characters. This is useful when reading log files, debugging API requests, or extracting readable text from encoded URLs. Switch to decode mode above to convert any percent-encoded string back to plain text.
              </p>

              <h2>URL Encoding for Different Languages</h2>
              <p>
                Non-ASCII characters like <code>日本語</code>, <code>Ü</code>, or <code>café</code> are first converted to their UTF-8 byte sequences, then each byte is percent-encoded. Modern browsers handle this automatically in the address bar, but API calls and backend code often require explicit encoding.
              </p>

              <h2>Related Tools</h2>
              <p>
                For creating clean URL slugs, use the <Link href="/url-slug-generator">URL Slug Generator</Link>.
                For converting text formats, try the <Link href="/case-converter-online">Case Converter</Link>.
                For cleaning text before encoding, see the <Link href="/plain-text-converter">Plain Text Converter</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>URLエンコードとは？</h2>
              <p>URLエンコード（パーセントエンコーディング）は、URLで安全に送信できる形式に文字を変換します。スペース、アンパサンド、非ASCII文字はパーセント記号と2桁の16進数に置き換えられます（例：スペースは<code>%20</code>になります）。</p>

              <h2>URLエンコードが必要な場面</h2>
              <ul>
                <li>クエリパラメータとしてユーザー入力を渡す場合（<code>?q=hello%20world</code>）</li>
                <li>URLパスに特殊文字を含める場合</li>
                <li>URLに日本語などの非ASCII文字をエンコードする場合</li>
                <li>動的な値でAPIリクエストを構築する場合</li>
                <li>エスケープされていない文字によるリンク切れを修正する場合</li>
              </ul>

              <h2>encodeURIComponent と encodeURI の違い</h2>
              <p>
                JavaScriptにはURLエンコード用の2つの組み込み関数があります。<code>encodeURIComponent()</code>は<code>:</code>、<code>/</code>、<code>?</code>、<code>#</code>、<code>&amp;</code>を含むすべての特殊文字をエンコードします。個々のクエリパラメータ値のエンコードに使用します。<code>encodeURI()</code>はURL構造文字を保持し、URLのどの部分でも無効な文字のみをエンコードします。
              </p>

              <h2>一般的なURLエンコード例</h2>
              <ul>
                <li>スペース → <code>%20</code></li>
                <li><code>&amp;</code> → <code>%26</code></li>
                <li><code>=</code> → <code>%3D</code></li>
                <li><code>?</code> → <code>%3F</code></li>
              </ul>

              <h2>URLデコード</h2>
              <p>URLデコードはパーセントエンコーディングを元の文字に戻します。ログファイルの読み取り、APIリクエストのデバッグ、エンコードされたURLから読みやすいテキストを抽出する際に便利です。</p>

              <h2>関連ツール</h2>
              <p>クリーンなURLスラッグの作成には<Link href="/url-slug-generator">URLスラッグジェネレーター</Link>をお使いください。テキスト形式の変換には<Link href="/case-converter-online">ケースコンバーター</Link>をお試しください。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was ist URL-Kodierung?</h2>
              <p>URL-Kodierung (Percent-Encoding) wandelt Zeichen in ein Format um, das sicher in einer URL übertragen werden kann. Zeichen wie Leerzeichen, Kaufmanns-Und und Nicht-ASCII-Buchstaben werden durch ein Prozentzeichen gefolgt von zwei Hexadezimalziffern ersetzt — zum Beispiel wird ein Leerzeichen zu <code>%20</code>.</p>

              <h2>Wann brauchen Sie URL-Kodierung?</h2>
              <ul>
                <li>Benutzereingaben als Query-Parameter übergeben (<code>?q=hello%20world</code>)</li>
                <li>Sonderzeichen in URL-Pfaden einfügen</li>
                <li>Nicht-ASCII-Zeichen (Umlaute, Sonderzeichen) in URLs kodieren</li>
                <li>API-Anfragen mit dynamischen Werten erstellen</li>
                <li>Defekte Links durch nicht-escapte Zeichen reparieren</li>
              </ul>

              <h2>encodeURIComponent vs encodeURI</h2>
              <p>
                JavaScript bietet zwei integrierte Funktionen zur URL-Kodierung. <code>encodeURIComponent()</code> kodiert alle Sonderzeichen einschließlich <code>:</code>, <code>/</code>, <code>?</code>, <code>#</code> und <code>&amp;</code>. Verwenden Sie es für einzelne Query-Parameter-Werte. <code>encodeURI()</code> bewahrt URL-Strukturzeichen und kodiert nur Zeichen, die in keinem Teil einer URL gültig sind.
              </p>

              <h2>Häufige URL-Kodierungsbeispiele</h2>
              <ul>
                <li>Leerzeichen → <code>%20</code></li>
                <li><code>&amp;</code> → <code>%26</code></li>
                <li><code>=</code> → <code>%3D</code></li>
                <li><code>?</code> → <code>%3F</code></li>
              </ul>

              <h2>URL-Dekodierung</h2>
              <p>URL-Dekodierung wandelt Percent-Encoding zurück in die ursprünglichen Zeichen um. Dies ist nützlich beim Lesen von Protokolldateien, beim Debuggen von API-Anfragen oder beim Extrahieren von lesbarem Text aus kodierten URLs.</p>

              <h2>Verwandte Tools</h2>
              <p>Für saubere URL-Slugs nutzen Sie den <Link href="/url-slug-generator">URL-Slug-Generator</Link>. Für Textformat-Konvertierungen probieren Sie den <Link href="/case-converter-online">Case Converter</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>&iquest;Qu&eacute; es la codificaci&oacute;n de URL?</h2>
              <p>La codificaci&oacute;n de URL (codificaci&oacute;n porcentual) convierte caracteres en un formato que puede transmitirse de forma segura en una URL. Los caracteres como espacios, ampersands y letras no ASCII se reemplazan con un signo de porcentaje seguido de dos d&iacute;gitos hexadecimales — por ejemplo, un espacio se convierte en <code>%20</code>.</p>

              <h2>&iquest;Cu&aacute;ndo necesitas codificaci&oacute;n de URL?</h2>
              <ul>
                <li>Pasar entrada del usuario como par&aacute;metros de consulta (<code>?q=hello%20world</code>)</li>
                <li>Incluir caracteres especiales en rutas de URL</li>
                <li>Codificar caracteres no ASCII (espa&ntilde;ol, chino, &aacute;rabe) en URLs</li>
                <li>Construir solicitudes de API con valores din&aacute;micos</li>
                <li>Corregir enlaces rotos causados por caracteres sin escapar</li>
              </ul>

              <h2>encodeURIComponent vs encodeURI</h2>
              <p>
                JavaScript proporciona dos funciones integradas para la codificaci&oacute;n de URL. <code>encodeURIComponent()</code> codifica todos los caracteres especiales. &Uacute;selo para codificar valores individuales de par&aacute;metros. <code>encodeURI()</code> preserva los caracteres de estructura de URL y solo codifica caracteres inv&aacute;lidos.
              </p>

              <h2>Decodificaci&oacute;n de URL</h2>
              <p>La decodificaci&oacute;n de URL revierte la codificaci&oacute;n porcentual a los caracteres originales. Es &uacute;til para leer archivos de registro, depurar solicitudes de API o extraer texto legible de URLs codificadas.</p>

              <h2>Herramientas relacionadas</h2>
              <p>Para crear slugs de URL limpios, use el <Link href="/url-slug-generator">Generador de URL Slug</Link>. Para convertir formatos de texto, pruebe el <Link href="/case-converter-online">Convertidor de Casos</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que &eacute; codifica&ccedil;&atilde;o de URL?</h2>
              <p>A codifica&ccedil;&atilde;o de URL (codifica&ccedil;&atilde;o percentual) converte caracteres em um formato que pode ser transmitido com seguran&ccedil;a em uma URL. Caracteres como espa&ccedil;os, &quot;e&quot; comercial e letras n&atilde;o ASCII s&atilde;o substitu&iacute;dos por um sinal de porcentagem seguido de dois d&iacute;gitos hexadecimais — por exemplo, um espa&ccedil;o se torna <code>%20</code>.</p>

              <h2>Quando voc&ecirc; precisa de codifica&ccedil;&atilde;o de URL?</h2>
              <ul>
                <li>Passar entrada do usu&aacute;rio como par&acirc;metros de consulta (<code>?q=hello%20world</code>)</li>
                <li>Incluir caracteres especiais em caminhos de URL</li>
                <li>Codificar caracteres n&atilde;o ASCII (portugu&ecirc;s, chin&ecirc;s, &aacute;rabe) em URLs</li>
                <li>Construir solicita&ccedil;&otilde;es de API com valores din&acirc;micos</li>
              </ul>

              <h2>encodeURIComponent vs encodeURI</h2>
              <p>
                JavaScript fornece duas fun&ccedil;&otilde;es integradas para codifica&ccedil;&atilde;o de URL. <code>encodeURIComponent()</code> codifica todos os caracteres especiais. Use-o para codificar valores individuais de par&acirc;metros. <code>encodeURI()</code> preserva os caracteres de estrutura de URL.
              </p>

              <h2>Decodifica&ccedil;&atilde;o de URL</h2>
              <p>A decodifica&ccedil;&atilde;o de URL reverte a codifica&ccedil;&atilde;o percentual aos caracteres originais. &Eacute; &uacute;til para ler arquivos de log, depurar solicita&ccedil;&otilde;es de API ou extrair texto leg&iacute;vel de URLs codificadas.</p>

              <h2>Ferramentas relacionadas</h2>
              <p>Para criar slugs de URL limpos, use o <Link href="/url-slug-generator">Gerador de URL Slug</Link>. Para converter formatos de texto, experimente o <Link href="/case-converter-online">Conversor de Casos</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Qu&apos;est-ce que l&apos;encodage d&apos;URL ?</h2>
              <p>L&apos;encodage d&apos;URL (encodage en pourcentage) convertit les caract&egrave;res dans un format pouvant &ecirc;tre transmis en toute s&eacute;curit&eacute; dans une URL. Les caract&egrave;res comme les espaces, les esperluettes et les lettres non ASCII sont remplac&eacute;s par un signe de pourcentage suivi de deux chiffres hexad&eacute;cimaux — par exemple, un espace devient <code>%20</code>.</p>

              <h2>Quand avez-vous besoin de l&apos;encodage d&apos;URL ?</h2>
              <ul>
                <li>Passer des entr&eacute;es utilisateur en param&egrave;tres de requ&ecirc;te (<code>?q=hello%20world</code>)</li>
                <li>Inclure des caract&egrave;res sp&eacute;ciaux dans les chemins d&apos;URL</li>
                <li>Encoder des caract&egrave;res non ASCII (fran&ccedil;ais, chinois, arabe) dans les URLs</li>
                <li>Construire des requ&ecirc;tes API avec des valeurs dynamiques</li>
              </ul>

              <h2>encodeURIComponent vs encodeURI</h2>
              <p>
                JavaScript fournit deux fonctions int&eacute;gr&eacute;es pour l&apos;encodage d&apos;URL. <code>encodeURIComponent()</code> encode tous les caract&egrave;res sp&eacute;ciaux. Utilisez-le pour encoder des valeurs individuelles de param&egrave;tres. <code>encodeURI()</code> pr&eacute;serve les caract&egrave;res de structure d&apos;URL.
              </p>

              <h2>D&eacute;codage d&apos;URL</h2>
              <p>Le d&eacute;codage d&apos;URL inverse l&apos;encodage en pourcentage pour retrouver les caract&egrave;res originaux. C&apos;est utile pour lire des fichiers journaux, d&eacute;boguer des requ&ecirc;tes API ou extraire du texte lisible d&apos;URLs encod&eacute;es.</p>

              <h2>Outils connexes</h2>
              <p>Pour cr&eacute;er des slugs d&apos;URL propres, utilisez le <Link href="/url-slug-generator">G&eacute;n&eacute;rateur de Slug URL</Link>. Pour convertir des formats de texte, essayez le <Link href="/case-converter-online">Convertisseur de Casse</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
