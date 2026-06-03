import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {  getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SlugTool from "@/components/SlugTool";

const siteUrl = "https://sluggenerator.app";
const path = "/wordpress-slug-generator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pages.wordpressSlugGenerator" });
  return buildMetadata({ title: t("title"), description: t("description"), path, locale });
}

export default async function WordpressSlugGenerator({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.wordpressSlugGenerator");

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "WordPress Slug Generator",
    url: `${siteUrl}${path}`,
    description: "Generate SEO-friendly URL slugs for WordPress posts and pages. Preview your permalink before publishing.",
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
          <Breadcrumbs items={[{ name: "WordPress Slug Generator" }]} />
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("h1")}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
          <SlugTool placeholder={t("placeholder")} />
          {locale === "en" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>How WordPress Handles Slugs</h2>
              <p>
                WordPress automatically generates a slug from your post title when you create
                a new post or page. However, the auto-generated slug often includes stop words
                and can be unnecessarily long. Using this tool, you can preview and optimize
                your slug before pasting it into the WordPress editor.
              </p>
              <h2>WordPress Permalink Settings</h2>
              <p>For best SEO results, use the &quot;Post name&quot; permalink structure
                (<code>/%postname%/</code>) in WordPress Settings → Permalinks. This puts
                your slug directly after the domain, creating clean URLs like{" "}
                <code>example.com/your-optimized-slug</code>.</p>
              <h2>WordPress Slug Best Practices</h2>
              <ul>
                <li>Keep slugs under 5-6 words for better readability</li>
                <li>Remove stop words (a, the, is, and, or, but)</li>
                <li>Include your target keyword in the slug</li>
                <li>Use hyphens only — WordPress converts underscores to hyphens</li>
                <li>Never change a slug after the post is indexed without setting up a redirect</li>
                <li>Avoid dates in slugs unless the content is time-sensitive</li>
              </ul>
              <h2>Bulk Slug Generation for WordPress</h2>
              <p>
                Migrating content to WordPress? Switch to bulk mode above to generate slugs
                for an entire list of post titles at once. This is ideal for CSV imports using
                plugins like WP All Import.
              </p>
              <h2>FAQ</h2>
              <h3>How do I change a slug in WordPress?</h3>
              <p>
                In the WordPress block editor, click the post title, then click the URL/Permalink
                section in the right sidebar. You can edit the slug directly there.
              </p>
              <h3>What happens if two posts have the same slug?</h3>
              <p>
                WordPress automatically appends a number (e.g., <code>my-post-2</code>) to
                avoid duplicate slugs. It is better to create unique, descriptive slugs from
                the start.
              </p>
              <h2>Related Slug Tools</h2>
              <p>
                For general text conversion, try the{" "}
                <Link href="/text-to-slug">Text to Slug</Link> converter. For
                SEO-optimized URLs, use the{" "}
                <Link href="/url-slug-generator">URL Slug Generator</Link>. For
                permanent blog links, see the{" "}
                <Link href="/permalink-generator">Permalink Generator</Link>.
              </p>
            </section>
          )}

          {locale === "ja" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>WordPressのスラッグ処理の仕組み</h2>
              <p>WordPressは新しい投稿やページを作成する際、投稿タイトルからスラッグを自動生成します。しかし、自動生成されたスラッグにはストップワードが含まれたり、不必要に長くなることがあります。このツールを使えば、WordPressエディタに貼り付ける前にスラッグをプレビューして最適化できます。</p>
              <h2>WordPressのパーマリンク設定</h2>
              <p>SEO効果を最大化するには、WordPress設定 → パーマリンクで「投稿名」構造（<code>/%postname%/</code>）を使用してください。これにより、<code>example.com/最適化されたスラッグ</code> のようなクリーンなURLが生成されます。</p>
              <h2>WordPressスラッグのベストプラクティス</h2>
              <ul>
                <li>スラッグは5〜6語以内に抑えて読みやすくする</li>
                <li>ストップワード（a, the, is, and, or, but）を除去する</li>
                <li>ターゲットキーワードをスラッグに含める</li>
                <li>ハイフンのみを使用する — WordPressはアンダースコアをハイフンに変換する</li>
                <li>インデックスされた後のスラッグ変更はリダイレクトを設定してから行う</li>
                <li>時事的なコンテンツ以外ではスラッグに日付を入れない</li>
              </ul>
              <h2>WordPressの一括スラッグ生成</h2>
              <p>WordPressへのコンテンツ移行時には、上のバルクモードに切り替えて投稿タイトルリスト全体のスラッグを一括生成できます。WP All Importなどのプラグインでの CSVインポートに最適です。</p>
              <h2>FAQ</h2>
              <h3>WordPressでスラッグを変更する方法は？</h3>
              <p>WordPressブロックエディタで投稿タイトルをクリックし、右サイドバーのURL/パーマリンクセクションをクリックします。そこでスラッグを直接編集できます。</p>
              <h3>2つの投稿が同じスラッグの場合は？</h3>
              <p>WordPressは重複を避けるため自動的に番号（例：<code>my-post-2</code>）を付加します。最初からユニークで説明的なスラッグを作成することをお勧めします。</p>
              <h2>関連ツール</h2>
              <p>テキスト変換には<Link href="/text-to-slug">Text to Slug</Link>を、SEO最適化URLには<Link href="/url-slug-generator">URL Slug Generator</Link>を、永続リンクには<Link href="/permalink-generator">Permalink Generator</Link>をどうぞ。</p>
            </section>
          )}

          {locale === "de" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Wie WordPress Slugs verarbeitet</h2>
              <p>WordPress generiert automatisch einen Slug aus Ihrem Beitragstitel, wenn Sie einen neuen Beitrag oder eine Seite erstellen. Der automatisch generierte Slug enthält jedoch oft Stoppwörter und kann unnötig lang sein. Mit diesem Tool können Sie Ihren Slug vor dem Einfügen in den WordPress-Editor optimieren.</p>
              <h2>WordPress-Permalink-Einstellungen</h2>
              <p>Für optimale SEO-Ergebnisse verwenden Sie die Permalink-Struktur „Beitragsname" (<code>/%postname%/</code>) unter WordPress Einstellungen → Permalinks. Dies erzeugt saubere URLs wie <code>example.com/ihr-optimierter-slug</code>.</p>
              <h2>Best Practices für WordPress-Slugs</h2>
              <ul>
                <li>Slugs auf 5-6 Wörter beschränken für bessere Lesbarkeit</li>
                <li>Stoppwörter entfernen (ein, der, die, das, und, oder, aber)</li>
                <li>Das Ziel-Keyword im Slug einschließen</li>
                <li>Nur Bindestriche verwenden — WordPress wandelt Unterstriche in Bindestriche um</li>
                <li>Slug nach der Indexierung nie ohne Weiterleitung ändern</li>
                <li>Datumsangaben im Slug vermeiden, es sei denn der Inhalt ist zeitgebunden</li>
              </ul>
              <h2>Massen-Slug-Generierung für WordPress</h2>
              <p>Bei der Migration von Inhalten zu WordPress wechseln Sie oben in den Bulk-Modus, um Slugs für eine ganze Liste von Beitragstiteln gleichzeitig zu generieren. Ideal für CSV-Importe mit Plugins wie WP All Import.</p>
              <h2>FAQ</h2>
              <h3>Wie ändere ich einen Slug in WordPress?</h3>
              <p>Klicken Sie im WordPress-Block-Editor auf den Beitragstitel und dann auf den URL/Permalink-Bereich in der rechten Seitenleiste. Dort können Sie den Slug direkt bearbeiten.</p>
              <h3>Was passiert bei doppelten Slugs?</h3>
              <p>WordPress hängt automatisch eine Nummer an (z.B. <code>mein-beitrag-2</code>), um doppelte Slugs zu vermeiden. Es ist besser, von Anfang an einzigartige, beschreibende Slugs zu erstellen.</p>
              <h2>Verwandte Tools</h2>
              <p>Für allgemeine Textkonvertierung: <Link href="/text-to-slug">Text to Slug</Link>. Für SEO-URLs: <Link href="/url-slug-generator">URL Slug Generator</Link>. Für permanente Links: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "es" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Cómo WordPress maneja los slugs</h2>
              <p>WordPress genera automáticamente un slug a partir del título cuando creas una nueva entrada o página. Sin embargo, el slug generado automáticamente suele incluir palabras vacías y puede ser innecesariamente largo. Con esta herramienta puedes previsualizar y optimizar tu slug antes de pegarlo en el editor de WordPress.</p>
              <h2>Configuración de enlaces permanentes en WordPress</h2>
              <p>Para mejores resultados SEO, usa la estructura de enlace permanente „Nombre de la entrada" (<code>/%postname%/</code>) en WordPress Ajustes → Enlaces permanentes. Esto crea URLs limpias como <code>ejemplo.com/tu-slug-optimizado</code>.</p>
              <h2>Buenas prácticas para slugs en WordPress</h2>
              <ul>
                <li>Mantener los slugs en 5-6 palabras para mejor legibilidad</li>
                <li>Eliminar palabras vacías (un, el, la, es, y, o, pero)</li>
                <li>Incluir la palabra clave objetivo en el slug</li>
                <li>Usar solo guiones — WordPress convierte guiones bajos en guiones</li>
                <li>Nunca cambiar un slug después de ser indexado sin configurar una redirección</li>
                <li>Evitar fechas en los slugs salvo que el contenido sea temporal</li>
              </ul>
              <h2>Generación masiva de slugs para WordPress</h2>
              <p>¿Migrando contenido a WordPress? Cambia al modo masivo arriba para generar slugs para toda una lista de títulos a la vez. Ideal para importaciones CSV con plugins como WP All Import.</p>
              <h2>FAQ</h2>
              <h3>¿Cómo cambio un slug en WordPress?</h3>
              <p>En el editor de bloques de WordPress, haz clic en el título y luego en la sección URL/Enlace permanente en la barra lateral derecha. Puedes editar el slug directamente allí.</p>
              <h3>¿Qué pasa si dos entradas tienen el mismo slug?</h3>
              <p>WordPress agrega automáticamente un número (ej. <code>mi-entrada-2</code>) para evitar duplicados. Es mejor crear slugs únicos y descriptivos desde el inicio.</p>
              <h2>Herramientas relacionadas</h2>
              <p>Para conversión de texto: <Link href="/text-to-slug">Text to Slug</Link>. Para URLs SEO: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para enlaces permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "pt" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Como o WordPress lida com slugs</h2>
              <p>O WordPress gera automaticamente um slug a partir do título quando você cria um novo post ou página. Porém, o slug gerado automaticamente frequentemente inclui palavras de parada e pode ser desnecessariamente longo. Com esta ferramenta você pode pré-visualizar e otimizar seu slug antes de colá-lo no editor do WordPress.</p>
              <h2>Configurações de permalink no WordPress</h2>
              <p>Para melhores resultados de SEO, use a estrutura de permalink „Nome do post" (<code>/%postname%/</code>) em WordPress Configurações → Links permanentes. Isso cria URLs limpas como <code>exemplo.com/seu-slug-otimizado</code>.</p>
              <h2>Boas práticas para slugs no WordPress</h2>
              <ul>
                <li>Manter slugs com 5-6 palavras para melhor legibilidade</li>
                <li>Remover palavras de parada (um, o, a, é, e, ou, mas)</li>
                <li>Incluir a palavra-chave alvo no slug</li>
                <li>Usar apenas hífens — WordPress converte underscores em hífens</li>
                <li>Nunca alterar um slug após ser indexado sem configurar redirecionamento</li>
                <li>Evitar datas nos slugs, a menos que o conteúdo seja temporal</li>
              </ul>
              <h2>Geração em massa de slugs para WordPress</h2>
              <p>Migrando conteúdo para WordPress? Alterne para o modo em massa acima para gerar slugs de uma lista inteira de títulos de uma vez. Ideal para importações CSV com plugins como WP All Import.</p>
              <h2>FAQ</h2>
              <h3>Como altero um slug no WordPress?</h3>
              <p>No editor de blocos do WordPress, clique no título e depois na seção URL/Permalink na barra lateral direita. Você pode editar o slug diretamente ali.</p>
              <h3>O que acontece se dois posts tiverem o mesmo slug?</h3>
              <p>O WordPress adiciona automaticamente um número (ex. <code>meu-post-2</code>) para evitar duplicatas. É melhor criar slugs únicos e descritivos desde o início.</p>
              <h2>Ferramentas relacionadas</h2>
              <p>Para conversão de texto: <Link href="/text-to-slug">Text to Slug</Link>. Para URLs SEO: <Link href="/url-slug-generator">URL Slug Generator</Link>. Para links permanentes: <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          {locale === "fr" && (
            <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
              <h2>Comment WordPress gère les slugs</h2>
              <p>WordPress génère automatiquement un slug à partir du titre lorsque vous créez un nouvel article ou une page. Cependant, le slug généré automatiquement inclut souvent des mots vides et peut être inutilement long. Avec cet outil, vous pouvez prévisualiser et optimiser votre slug avant de le coller dans l&apos;éditeur WordPress.</p>
              <h2>Paramètres de permalien WordPress</h2>
              <p>Pour de meilleurs résultats SEO, utilisez la structure de permalien « Nom de l&apos;article » (<code>/%postname%/</code>) dans WordPress Réglages → Permaliens. Cela crée des URLs propres comme <code>exemple.com/votre-slug-optimise</code>.</p>
              <h2>Bonnes pratiques pour les slugs WordPress</h2>
              <ul>
                <li>Limiter les slugs à 5-6 mots pour une meilleure lisibilité</li>
                <li>Supprimer les mots vides (un, le, la, est, et, ou, mais)</li>
                <li>Inclure le mot-clé cible dans le slug</li>
                <li>Utiliser uniquement des tirets — WordPress convertit les underscores en tirets</li>
                <li>Ne jamais changer un slug après indexation sans configurer une redirection</li>
                <li>Éviter les dates dans les slugs sauf si le contenu est temporel</li>
              </ul>
              <h2>Génération de slugs en masse pour WordPress</h2>
              <p>Vous migrez du contenu vers WordPress ? Passez en mode masse ci-dessus pour générer des slugs pour toute une liste de titres d&apos;articles. Idéal pour les importations CSV avec des plugins comme WP All Import.</p>
              <h2>FAQ</h2>
              <h3>Comment modifier un slug dans WordPress ?</h3>
              <p>Dans l&apos;éditeur de blocs WordPress, cliquez sur le titre puis sur la section URL/Permalien dans la barre latérale droite. Vous pouvez modifier le slug directement.</p>
              <h3>Que se passe-t-il si deux articles ont le même slug ?</h3>
              <p>WordPress ajoute automatiquement un numéro (ex. <code>mon-article-2</code>) pour éviter les doublons. Il est préférable de créer des slugs uniques et descriptifs dès le départ.</p>
              <h2>Outils associés</h2>
              <p>Pour la conversion de texte : <Link href="/text-to-slug">Text to Slug</Link>. Pour des URLs SEO : <Link href="/url-slug-generator">URL Slug Generator</Link>. Pour des liens permanents : <Link href="/permalink-generator">Permalink Generator</Link>.</p>
            </section>
          )}

          <RelatedTools current={path} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
