import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import InvisibleCharacterTool from "@/components/InvisibleCharacterTool";

const siteUrl = "https://sluggenerator.app";
const path = "/invisible-character-detector";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.invisibleCharacterDetector" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function InvisibleCharacterDetector({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.invisibleCharacterDetector");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Invisible Character Detector",
    url: `${siteUrl}${path}`,
    description:
      "Detect and remove invisible Unicode characters: zero-width spaces, BOM, soft hyphens, and more. Shows exact code points and counts. Free online tool.",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={toolLd} />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ name: "Invisible Character Detector" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>

          <InvisibleCharacterTool placeholder={t("placeholder")} />

          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>What Are Invisible Characters?</h2>
              <p>
                Invisible characters are Unicode code points that render with zero
                width or look identical to a normal space. The most common ones are
                the zero-width space (U+200B), zero-width non-joiner (U+200C),
                zero-width joiner (U+200D), byte order mark (U+FEFF), no-break space
                (U+00A0), and soft hyphen (U+00AD). You can&apos;t see them, but software
                can — and that mismatch causes real bugs.
              </p>

              <h2>Where Do They Come From?</h2>
              <ul>
                <li>Copy-pasting from websites, Word documents, PDFs, or chat apps</li>
                <li>Text exported from CMS editors and rich-text fields</li>
                <li>AI writing tools and translation services</li>
                <li>Files saved with a UTF-8 BOM by Windows editors</li>
                <li>Emoji sequences (which legitimately use zero-width joiners)</li>
              </ul>

              <h2>Problems They Cause</h2>
              <ul>
                <li>
                  <strong>Broken code</strong> — a zero-width space inside a variable
                  name or JSON key produces errors that look impossible to debug,
                  because the code <em>looks</em> correct.
                </li>
                <li>
                  <strong>Failed comparisons</strong> — <code>&quot;admin&quot;</code> with a
                  hidden character is not equal to <code>&quot;admin&quot;</code>, breaking
                  logins, lookups, and deduplication.
                </li>
                <li>
                  <strong>Broken URL slugs</strong> — invisible characters inside a
                  slug create URLs that look right but 404.
                </li>
                <li>
                  <strong>SEO and search mismatches</strong> — search indexes treat
                  visually identical strings as different.
                </li>
                <li>
                  <strong>CSV/database corruption</strong> — a BOM at the start of a
                  file silently shifts the first column name.
                </li>
              </ul>

              <h2>How This Tool Works</h2>
              <p>
                Paste your text and the detector scans every character against a list
                of 40+ invisible and zero-width Unicode code points. For each type
                found you get the exact code point (e.g. <code>U+200B</code>), the
                official Unicode name, the count, and the first positions in the
                string. One click produces a cleaned copy — zero-width characters are
                removed, exotic spaces are normalized to regular spaces, and line/paragraph
                separators become normal newlines. Scanning runs entirely in your
                browser; nothing is uploaded.
              </p>

              <h2>FAQ</h2>
              <h3>Are zero-width characters always bad?</h3>
              <p>
                No. Zero-width joiners are essential in emoji sequences (👨‍👩‍👧 is
                three emoji joined by ZWJ) and some scripts (Arabic, Indic) use
                ZWNJ/ZWJ legitimately. This tool shows you what is present so you can
                decide — it doesn&apos;t assume every invisible character is a mistake.
              </p>
              <h3>Can this tool detect AI watermarks?</h3>
              <p>
                This tool detects Unicode characters, full stop. It reports exactly
                which code points appear in your text and how many. It makes no claims
                about where they came from or whether they constitute a watermark.
              </p>
              <h3>Is my text sent to a server?</h3>
              <p>No. All scanning happens locally in your browser.</p>

              <h2>Related Tools</h2>
              <p>
                Read the full background in our guide{" "}
                <Link href="/blog/what-are-zero-width-characters">
                  What Are Zero-Width Characters?
                </Link>
                . For broader cleanup, the{" "}
                <Link href="/plain-text-converter">Plain Text Converter</Link> strips
                HTML and formatting too. Clean up typographic dashes with the{" "}
                <Link href="/em-dash-remover">Em Dash Remover</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>不可視文字とは？</h2>
              <p>不可視文字とは、幅ゼロで表示されるか、通常のスペースと見分けがつかないUnicodeコードポイントのことです。代表的なものはゼロ幅スペース（U+200B）、ゼロ幅非接合子（U+200C）、ゼロ幅接合子（U+200D）、バイト順マーク（U+FEFF）、ノーブレークスペース（U+00A0）、ソフトハイフン（U+00AD）です。目には見えませんが、ソフトウェアには見えています——この不一致が実際のバグを引き起こします。</p>
              <h2>どこから混入するのか</h2>
              <ul>
                <li>Webサイト、Word文書、PDF、チャットアプリからのコピペ</li>
                <li>CMSエディタやリッチテキストフィールドからの書き出し</li>
                <li>AIライティングツールや翻訳サービス</li>
                <li>WindowsエディタがUTF-8 BOM付きで保存したファイル</li>
                <li>絵文字シーケンス（ゼロ幅接合子を正当に使用）</li>
              </ul>
              <h2>引き起こされる問題</h2>
              <ul>
                <li><strong>コードの破損</strong> — 変数名やJSONキーに混入したゼロ幅スペースは、見た目は正しいのにエラーになる「デバッグ不可能」なバグを生みます。</li>
                <li><strong>比較の失敗</strong> — 隠れ文字入りの「admin」は「admin」と等しくならず、ログインや重複排除が壊れます。</li>
                <li><strong>URLスラッグの破損</strong> — スラッグ内の不可視文字は、見た目は正しいのに404になるURLを作ります。</li>
                <li><strong>CSV/データベースの破損</strong> — ファイル先頭のBOMは最初のカラム名を静かにずらします。</li>
              </ul>
              <h2>使い方</h2>
              <p>テキストを貼り付けると、40種類以上の不可視・ゼロ幅Unicodeコードポイントと照合してスキャンします。検出された各タイプについて、正確なコードポイント（例：<code>U+200B</code>）、Unicode公式名、個数、最初の出現位置を表示します。ワンクリックでクリーン版を生成——ゼロ幅文字は削除、特殊スペースは通常スペースに正規化されます。スキャンはすべてブラウザ内で実行され、テキストは送信されません。</p>
              <h2>関連ツール</h2>
              <p>背景知識は<Link href="/blog/what-are-zero-width-characters">ゼロ幅文字とは？</Link>のガイドをご覧ください。より広い整形には<Link href="/plain-text-converter">Plain Text Converter</Link>を、ダッシュの整理には<Link href="/em-dash-remover">Em Dash Remover</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Was sind unsichtbare Zeichen?</h2>
              <p>Unsichtbare Zeichen sind Unicode-Codepunkte, die mit Nullbreite dargestellt werden oder wie ein normales Leerzeichen aussehen. Die häufigsten sind das Zero-Width Space (U+200B), der Zero-Width Non-Joiner (U+200C), der Zero-Width Joiner (U+200D), die Byte Order Mark (U+FEFF), das geschützte Leerzeichen (U+00A0) und der weiche Trennstrich (U+00AD). Man sieht sie nicht — Software schon. Diese Diskrepanz verursacht echte Fehler.</p>
              <h2>Woher kommen sie?</h2>
              <ul>
                <li>Copy-Paste von Websites, Word-Dokumenten, PDFs oder Chat-Apps</li>
                <li>Export aus CMS-Editoren und Rich-Text-Feldern</li>
                <li>KI-Schreibtools und Übersetzungsdienste</li>
                <li>Dateien mit UTF-8-BOM aus Windows-Editoren</li>
                <li>Emoji-Sequenzen (die Zero-Width Joiner legitim nutzen)</li>
              </ul>
              <h2>Verursachte Probleme</h2>
              <ul>
                <li><strong>Kaputter Code</strong> — ein Zero-Width Space in einem Variablennamen oder JSON-Schlüssel erzeugt scheinbar unmögliche Fehler, weil der Code korrekt <em>aussieht</em>.</li>
                <li><strong>Fehlgeschlagene Vergleiche</strong> — &bdquo;admin&ldquo; mit verstecktem Zeichen ist nicht gleich &bdquo;admin&ldquo;.</li>
                <li><strong>Kaputte URL-Slugs</strong> — unsichtbare Zeichen erzeugen URLs, die richtig aussehen, aber 404 liefern.</li>
                <li><strong>CSV-/Datenbankfehler</strong> — eine BOM am Dateianfang verschiebt still den ersten Spaltennamen.</li>
              </ul>
              <h2>So funktioniert das Tool</h2>
              <p>Text einfügen — der Detektor prüft jedes Zeichen gegen eine Liste von über 40 unsichtbaren und Zero-Width-Codepunkten. Für jeden gefundenen Typ sehen Sie den exakten Codepunkt (z.&nbsp;B. <code>U+200B</code>), den offiziellen Unicode-Namen, die Anzahl und die ersten Positionen. Ein Klick erzeugt eine bereinigte Kopie. Alles läuft lokal im Browser.</p>
              <h2>Verwandte Tools</h2>
              <p>Hintergrundwissen im Guide <Link href="/blog/what-are-zero-width-characters">What Are Zero-Width Characters?</Link>. Für umfassendere Bereinigung: <Link href="/plain-text-converter">Plain Text Converter</Link>. Typografische Striche bereinigt der <Link href="/em-dash-remover">Em Dash Remover</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>¿Qué son los caracteres invisibles?</h2>
              <p>Los caracteres invisibles son puntos de código Unicode que se muestran con ancho cero o que parecen un espacio normal. Los más comunes son el espacio de ancho cero (U+200B), el antiligador de ancho cero (U+200C), el ligador de ancho cero (U+200D), la marca de orden de bytes (U+FEFF), el espacio de no separación (U+00A0) y el guion suave (U+00AD). No puedes verlos, pero el software sí — y esa discrepancia causa errores reales.</p>
              <h2>¿De dónde vienen?</h2>
              <ul>
                <li>Copiar y pegar desde sitios web, documentos Word, PDFs o apps de chat</li>
                <li>Texto exportado de editores CMS y campos de texto enriquecido</li>
                <li>Herramientas de escritura con IA y servicios de traducción</li>
                <li>Archivos guardados con BOM UTF-8 por editores de Windows</li>
                <li>Secuencias de emojis (que usan ligadores de ancho cero legítimamente)</li>
              </ul>
              <h2>Problemas que causan</h2>
              <ul>
                <li><strong>Código roto</strong> — un espacio de ancho cero dentro de un nombre de variable o clave JSON produce errores imposibles de depurar visualmente.</li>
                <li><strong>Comparaciones fallidas</strong> — &ldquo;admin&rdquo; con un carácter oculto no es igual a &ldquo;admin&rdquo;.</li>
                <li><strong>Slugs rotos</strong> — caracteres invisibles dentro de un slug crean URLs que parecen correctas pero dan 404.</li>
                <li><strong>Corrupción de CSV/bases de datos</strong> — un BOM al inicio del archivo desplaza silenciosamente el primer nombre de columna.</li>
              </ul>
              <h2>Cómo funciona</h2>
              <p>Pega tu texto y el detector escanea cada carácter contra una lista de más de 40 puntos de código invisibles. Para cada tipo encontrado verás el punto de código exacto (ej. <code>U+200B</code>), el nombre oficial Unicode, el recuento y las primeras posiciones. Un clic genera una copia limpia. Todo se ejecuta localmente en tu navegador.</p>
              <h2>Herramientas relacionadas</h2>
              <p>Lee la guía completa <Link href="/blog/what-are-zero-width-characters">What Are Zero-Width Characters?</Link>. Para limpieza más amplia: <Link href="/plain-text-converter">Plain Text Converter</Link>. Limpia guiones tipográficos con el <Link href="/em-dash-remover">Em Dash Remover</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>O que são caracteres invisíveis?</h2>
              <p>Caracteres invisíveis são pontos de código Unicode renderizados com largura zero ou que parecem um espaço normal. Os mais comuns são o espaço de largura zero (U+200B), o separador de largura zero (U+200C), o conector de largura zero (U+200D), a marca de ordem de bytes (U+FEFF), o espaço inseparável (U+00A0) e o hífen suave (U+00AD). Você não os vê, mas o software vê — e essa diferença causa bugs reais.</p>
              <h2>De onde eles vêm?</h2>
              <ul>
                <li>Copiar e colar de sites, documentos Word, PDFs ou apps de chat</li>
                <li>Texto exportado de editores CMS e campos rich-text</li>
                <li>Ferramentas de escrita com IA e serviços de tradução</li>
                <li>Arquivos salvos com BOM UTF-8 por editores do Windows</li>
                <li>Sequências de emojis (que usam conectores de largura zero legitimamente)</li>
              </ul>
              <h2>Problemas que causam</h2>
              <ul>
                <li><strong>Código quebrado</strong> — um espaço de largura zero dentro de um nome de variável ou chave JSON produz erros impossíveis de depurar visualmente.</li>
                <li><strong>Comparações que falham</strong> — &ldquo;admin&rdquo; com um caractere oculto não é igual a &ldquo;admin&rdquo;.</li>
                <li><strong>Slugs quebrados</strong> — caracteres invisíveis dentro de um slug criam URLs que parecem corretas mas retornam 404.</li>
                <li><strong>Corrupção de CSV/banco de dados</strong> — um BOM no início do arquivo desloca silenciosamente o primeiro nome de coluna.</li>
              </ul>
              <h2>Como funciona</h2>
              <p>Cole seu texto e o detector verifica cada caractere contra uma lista de mais de 40 pontos de código invisíveis. Para cada tipo encontrado você vê o ponto de código exato (ex. <code>U+200B</code>), o nome oficial Unicode, a contagem e as primeiras posições. Um clique gera uma cópia limpa. Tudo roda localmente no navegador.</p>
              <h2>Ferramentas relacionadas</h2>
              <p>Leia o guia completo <Link href="/blog/what-are-zero-width-characters">What Are Zero-Width Characters?</Link>. Para limpeza mais ampla: <Link href="/plain-text-converter">Plain Text Converter</Link>. Limpe travessões tipográficos com o <Link href="/em-dash-remover">Em Dash Remover</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Que sont les caractères invisibles ?</h2>
              <p>Les caractères invisibles sont des points de code Unicode affichés avec une largeur nulle ou ressemblant à une espace normale. Les plus courants sont l&apos;espace sans chasse (U+200B), l&apos;antiliant sans chasse (U+200C), le liant sans chasse (U+200D), l&apos;indicateur d&apos;ordre des octets (U+FEFF), l&apos;espace insécable (U+00A0) et le trait d&apos;union conditionnel (U+00AD). Vous ne les voyez pas, mais les logiciels si — et ce décalage cause de vrais bugs.</p>
              <h2>D&apos;où viennent-ils ?</h2>
              <ul>
                <li>Copier-coller depuis des sites web, documents Word, PDF ou applications de chat</li>
                <li>Texte exporté d&apos;éditeurs CMS et de champs rich-text</li>
                <li>Outils d&apos;écriture IA et services de traduction</li>
                <li>Fichiers enregistrés avec BOM UTF-8 par des éditeurs Windows</li>
                <li>Séquences d&apos;emojis (qui utilisent légitimement les liants sans chasse)</li>
              </ul>
              <h2>Problèmes causés</h2>
              <ul>
                <li><strong>Code cassé</strong> — une espace sans chasse dans un nom de variable ou une clé JSON produit des erreurs impossibles à déboguer visuellement.</li>
                <li><strong>Comparaisons échouées</strong> — « admin » avec un caractère caché n&apos;est pas égal à « admin ».</li>
                <li><strong>Slugs cassés</strong> — des caractères invisibles dans un slug créent des URLs qui semblent correctes mais renvoient 404.</li>
                <li><strong>Corruption CSV/base de données</strong> — un BOM en début de fichier décale silencieusement le premier nom de colonne.</li>
              </ul>
              <h2>Fonctionnement</h2>
              <p>Collez votre texte : le détecteur compare chaque caractère à une liste de plus de 40 points de code invisibles. Pour chaque type trouvé, vous voyez le point de code exact (ex. <code>U+200B</code>), le nom officiel Unicode, le nombre et les premières positions. Un clic génère une copie nettoyée. Tout s&apos;exécute localement dans votre navigateur.</p>
              <h2>Outils associés</h2>
              <p>Consultez le guide <Link href="/blog/what-are-zero-width-characters">What Are Zero-Width Characters?</Link>. Pour un nettoyage plus large : <Link href="/plain-text-converter">Plain Text Converter</Link>. Nettoyez les tirets typographiques avec l&apos;<Link href="/em-dash-remover">Em Dash Remover</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
