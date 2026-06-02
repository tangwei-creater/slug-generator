import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "how-to-change-wordpress-slug", date: "2026-05-31", readTime: 5 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%SLUG%", p(l, "/url-slug-generator"))
    .replaceAll("%WP%", p(l, "/wordpress-slug-generator"))
    .replaceAll("%BLOG%", p(l, "/blog-slug-generator")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "How to Change a WordPress Slug (Posts, Pages & Categories)",
    description: "Step-by-step guide to changing WordPress slugs for posts, pages, categories, and tags. Includes redirect setup and SEO considerations.",
    body: `
<p>WordPress automatically generates a URL slug from your post title, but the default is rarely optimal. Here's how to change it for any content type — and how to avoid breaking your SEO when you do.</p>

<h2>Changing a Post or Page Slug</h2>
<h3>Block Editor (Gutenberg)</h3>
<ol>
<li>Open the post or page in the editor</li>
<li>Click the <strong>Settings</strong> panel (gear icon) on the right</li>
<li>Under <strong>Summary</strong>, find the <strong>URL</strong> section</li>
<li>Click the URL to edit the slug</li>
<li>Type your new slug (use lowercase, hyphens, no spaces)</li>
<li>Click <strong>Update</strong> to save</li>
</ol>

<h3>Classic Editor</h3>
<ol>
<li>Open the post in the editor</li>
<li>Below the title, you'll see the permalink with an <strong>Edit</strong> button</li>
<li>Click <strong>Edit</strong>, type the new slug, click <strong>OK</strong></li>
<li>Click <strong>Update</strong></li>
</ol>

<h3>Quick Edit</h3>
<ol>
<li>Go to <strong>Posts > All Posts</strong></li>
<li>Hover over a post and click <strong>Quick Edit</strong></li>
<li>Edit the <strong>Slug</strong> field directly</li>
<li>Click <strong>Update</strong></li>
</ol>

<h2>Changing a Category or Tag Slug</h2>
<ol>
<li>Go to <strong>Posts > Categories</strong> (or <strong>Tags</strong>)</li>
<li>Hover over the category and click <strong>Edit</strong></li>
<li>Change the <strong>Slug</strong> field</li>
<li>Click <strong>Update</strong></li>
</ol>

<h2>Changing the Author Slug</h2>
<p>WordPress uses the username as the author archive slug (<code>/author/username/</code>). Since you can't change the username directly, use the <strong>Edit Author Slug</strong> plugin to customize it.</p>

<h2>Bulk Editing Slugs</h2>
<p>For large sites, manually editing each slug is impractical. Options include:</p>
<ul>
<li><strong>Quick Edit:</strong> Fastest for small batches (5-20 posts)</li>
<li><strong>Database query:</strong> Direct SQL for mass updates (back up first!)</li>
<li><strong>Plugin:</strong> Plugins like "Permalink Manager" allow bulk slug editing with a UI</li>
</ul>

<h2>SEO Considerations When Changing Slugs</h2>
<p>Changing a slug changes the URL, which means:</p>
<ul>
<li><strong>All existing backlinks break.</strong> Any links from other sites, social media, or bookmarks will 404.</li>
<li><strong>Search engine rankings reset.</strong> Google treats the new URL as a new page until the redirect is discovered.</li>
<li><strong>Internal links break.</strong> Any links within your own site pointing to the old URL will 404.</li>
</ul>

<h3>Always Set Up a 301 Redirect</h3>
<p>After changing a slug, redirect the old URL to the new one:</p>
<ul>
<li><strong>Plugin method:</strong> Use "Redirection" or "Yoast SEO Premium" (auto-redirects on slug change)</li>
<li><strong>.htaccess method:</strong> <code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx method:</strong> <code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>WordPress Slug Best Practices</h2>
<ul>
<li>Set the right slug <strong>before publishing</strong> — changing later is costly</li>
<li>Remove stop words: "how-to-change-slug" not "how-to-change-a-wordpress-slug"</li>
<li>Include your target keyword</li>
<li>Keep it under 5 words</li>
<li>Use only lowercase letters and hyphens</li>
</ul>

<h2>Generate Optimized WordPress Slugs</h2>
<p>Use our <a href="%WP%">WordPress slug generator</a> to create SEO-optimized slugs from your post titles. For general use, try the <a href="%SLUG%">URL slug generator</a> or the <a href="%BLOG%">blog slug generator</a>.</p>
`,
  }),
  ja: build("ja", {
    title: "WordPressのスラッグを変更する方法（投稿・固定ページ・カテゴリー）",
    description: "WordPressの投稿、固定ページ、カテゴリー、タグのスラッグ変更を詳しく解説。リダイレクト設定とSEO上の注意点も網羅します。",
    body: `
<p>WordPressは投稿タイトルから自動的にURLスラッグを生成しますが、デフォルトは最適ではないことがほとんどです。あらゆるコンテンツタイプのスラッグの変更方法と、SEOを壊さないための注意点を解説します。</p>

<h2>投稿・固定ページのスラッグ変更</h2>
<h3>ブロックエディター（Gutenberg）</h3>
<ol>
<li>エディターで投稿または固定ページを開く</li>
<li>右側の<strong>設定</strong>パネル（歯車アイコン）をクリック</li>
<li><strong>概要</strong>の下にある<strong>URL</strong>セクションを見つける</li>
<li>URLをクリックしてスラッグを編集</li>
<li>新しいスラッグを入力（小文字、ハイフン、スペースなし）</li>
<li><strong>更新</strong>をクリックして保存</li>
</ol>

<h3>クイック編集</h3>
<ol>
<li><strong>投稿 > 投稿一覧</strong>に移動</li>
<li>投稿にカーソルを合わせて<strong>クイック編集</strong>をクリック</li>
<li><strong>スラッグ</strong>フィールドを直接編集</li>
<li><strong>更新</strong>をクリック</li>
</ol>

<h2>カテゴリー・タグのスラッグ変更</h2>
<ol>
<li><strong>投稿 > カテゴリー</strong>（または<strong>タグ</strong>）に移動</li>
<li>カテゴリーにカーソルを合わせて<strong>編集</strong>をクリック</li>
<li><strong>スラッグ</strong>フィールドを変更</li>
<li><strong>更新</strong>をクリック</li>
</ol>

<h2>スラッグ変更時のSEO上の注意点</h2>
<p>スラッグを変更するとURLが変わります。これは以下を意味します：</p>
<ul>
<li><strong>既存の被リンクが壊れる。</strong>他サイト、SNS、ブックマークからのリンクがすべて404になります。</li>
<li><strong>検索順位がリセットされる。</strong>Googleはリダイレクトが発見されるまで新URLを新ページとして扱います。</li>
<li><strong>内部リンクが壊れる。</strong>自サイト内の旧URLへのリンクも404になります。</li>
</ul>

<h3>必ず301リダイレクトを設定</h3>
<ul>
<li><strong>プラグイン：</strong>「Redirection」または「Yoast SEO Premium」（スラッグ変更時に自動リダイレクト）</li>
<li><strong>.htaccess：</strong><code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx：</strong><code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>WordPressスラッグのベストプラクティス</h2>
<ul>
<li><strong>公開前</strong>に正しいスラッグを設定 — 後から変更するとコストが高い</li>
<li>ストップワードを削除</li>
<li>ターゲットキーワードを含める</li>
<li>5語以内に抑える</li>
<li>小文字とハイフンのみ使用</li>
</ul>

<h2>最適化されたWordPressスラッグを生成</h2>
<p><a href="%WP%">WordPressスラッグジェネレーター</a>で投稿タイトルからSEO最適化されたスラッグを作成できます。汎用には<a href="%SLUG%">URLスラッグジェネレーター</a>や<a href="%BLOG%">ブログスラッグジェネレーター</a>もご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "WordPress-Slug ändern: Beiträge, Seiten & Kategorien",
    description: "Schritt-für-Schritt-Anleitung zum Ändern von WordPress-Slugs für Beiträge, Seiten, Kategorien und Tags. Einschließlich Redirect-Setup und SEO-Überlegungen.",
    body: `
<p>WordPress generiert automatisch einen URL-Slug aus Ihrem Beitragstitel, aber der Standard ist selten optimal. Hier erfahren Sie, wie Sie ihn für jeden Inhaltstyp ändern — und wie Sie dabei Ihr SEO nicht beschädigen.</p>

<h2>Slug eines Beitrags oder einer Seite ändern</h2>
<h3>Block-Editor (Gutenberg)</h3>
<ol>
<li>Öffnen Sie den Beitrag oder die Seite im Editor</li>
<li>Klicken Sie auf das <strong>Einstellungen</strong>-Panel (Zahnrad-Symbol) rechts</li>
<li>Unter <strong>Zusammenfassung</strong> finden Sie den <strong>URL</strong>-Bereich</li>
<li>Klicken Sie auf die URL, um den Slug zu bearbeiten</li>
<li>Geben Sie Ihren neuen Slug ein (Kleinbuchstaben, Bindestriche, keine Leerzeichen)</li>
<li>Klicken Sie auf <strong>Aktualisieren</strong></li>
</ol>

<h3>Schnellbearbeitung</h3>
<ol>
<li>Gehen Sie zu <strong>Beiträge > Alle Beiträge</strong></li>
<li>Fahren Sie über einen Beitrag und klicken Sie auf <strong>Schnellbearbeitung</strong></li>
<li>Bearbeiten Sie das <strong>Slug</strong>-Feld direkt</li>
<li>Klicken Sie auf <strong>Aktualisieren</strong></li>
</ol>

<h2>Kategorie- oder Tag-Slug ändern</h2>
<ol>
<li>Gehen Sie zu <strong>Beiträge > Kategorien</strong> (oder <strong>Schlagwörter</strong>)</li>
<li>Fahren Sie über die Kategorie und klicken Sie auf <strong>Bearbeiten</strong></li>
<li>Ändern Sie das <strong>Slug</strong>-Feld</li>
<li>Klicken Sie auf <strong>Aktualisieren</strong></li>
</ol>

<h2>SEO-Überlegungen beim Ändern von Slugs</h2>
<p>Das Ändern eines Slugs ändert die URL, was bedeutet:</p>
<ul>
<li><strong>Alle bestehenden Backlinks brechen.</strong> Links von anderen Seiten, Social Media oder Lesezeichen werden zu 404.</li>
<li><strong>Suchmaschinen-Rankings setzen zurück.</strong> Google behandelt die neue URL als neue Seite, bis die Weiterleitung entdeckt wird.</li>
<li><strong>Interne Links brechen.</strong> Links innerhalb Ihrer eigenen Seite zur alten URL werden zu 404.</li>
</ul>

<h3>Immer eine 301-Weiterleitung einrichten</h3>
<ul>
<li><strong>Plugin:</strong> „Redirection" oder „Yoast SEO Premium" (automatische Weiterleitung bei Slug-Änderung)</li>
<li><strong>.htaccess:</strong> <code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx:</strong> <code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>WordPress-Slug Best Practices</h2>
<ul>
<li>Den richtigen Slug <strong>vor der Veröffentlichung</strong> setzen — spätere Änderungen sind kostspielig</li>
<li>Stoppwörter entfernen</li>
<li>Ziel-Keyword einbauen</li>
<li>Unter 5 Wörtern halten</li>
<li>Nur Kleinbuchstaben und Bindestriche verwenden</li>
</ul>

<h2>Optimierte WordPress-Slugs generieren</h2>
<p>Verwenden Sie unseren <a href="%WP%">WordPress-Slug-Generator</a>, um SEO-optimierte Slugs aus Ihren Beitragstiteln zu erstellen. Für allgemeine Nutzung probieren Sie den <a href="%SLUG%">URL-Slug-Generator</a> oder den <a href="%BLOG%">Blog-Slug-Generator</a>.</p>
`,
  }),
  es: build("es", {
    title: "Cómo cambiar un slug en WordPress (entradas, páginas y categorías)",
    description: "Guía paso a paso para cambiar slugs en WordPress para entradas, páginas, categorías y etiquetas. Incluye configuración de redirecciones y consideraciones SEO.",
    body: `
<p>WordPress genera automáticamente un slug URL del título de tu entrada, pero el predeterminado rara vez es óptimo. Aquí te explicamos cómo cambiarlo para cualquier tipo de contenido — y cómo evitar romper tu SEO al hacerlo.</p>

<h2>Cambiar el slug de una entrada o página</h2>
<h3>Editor de bloques (Gutenberg)</h3>
<ol>
<li>Abre la entrada o página en el editor</li>
<li>Haz clic en el panel <strong>Configuración</strong> (icono de engranaje) a la derecha</li>
<li>En <strong>Resumen</strong>, encuentra la sección <strong>URL</strong></li>
<li>Haz clic en la URL para editar el slug</li>
<li>Escribe tu nuevo slug (minúsculas, guiones, sin espacios)</li>
<li>Haz clic en <strong>Actualizar</strong></li>
</ol>

<h3>Edición rápida</h3>
<ol>
<li>Ve a <strong>Entradas > Todas las entradas</strong></li>
<li>Pasa el cursor sobre una entrada y haz clic en <strong>Edición rápida</strong></li>
<li>Edita el campo <strong>Slug</strong> directamente</li>
<li>Haz clic en <strong>Actualizar</strong></li>
</ol>

<h2>Cambiar el slug de categoría o etiqueta</h2>
<ol>
<li>Ve a <strong>Entradas > Categorías</strong> (o <strong>Etiquetas</strong>)</li>
<li>Pasa el cursor sobre la categoría y haz clic en <strong>Editar</strong></li>
<li>Cambia el campo <strong>Slug</strong></li>
<li>Haz clic en <strong>Actualizar</strong></li>
</ol>

<h2>Consideraciones SEO al cambiar slugs</h2>
<p>Cambiar un slug cambia la URL, lo que significa:</p>
<ul>
<li><strong>Todos los backlinks existentes se rompen.</strong> Los enlaces de otros sitios, redes sociales o favoritos darán 404.</li>
<li><strong>Los rankings se reinician.</strong> Google trata la nueva URL como una página nueva hasta que descubre la redirección.</li>
<li><strong>Los enlaces internos se rompen.</strong> Los enlaces dentro de tu propio sitio a la URL antigua darán 404.</li>
</ul>

<h3>Siempre configura una redirección 301</h3>
<ul>
<li><strong>Plugin:</strong> "Redirection" o "Yoast SEO Premium" (redirige automáticamente al cambiar slug)</li>
<li><strong>.htaccess:</strong> <code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx:</strong> <code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>Mejores prácticas de slugs WordPress</h2>
<ul>
<li>Establece el slug correcto <strong>antes de publicar</strong> — cambiarlo después es costoso</li>
<li>Elimina las stop words</li>
<li>Incluye tu palabra clave objetivo</li>
<li>Mantenlo en menos de 5 palabras</li>
<li>Usa solo letras minúsculas y guiones</li>
</ul>

<h2>Genera slugs WordPress optimizados</h2>
<p>Usa nuestro <a href="%WP%">generador de slugs WordPress</a> para crear slugs optimizados para SEO a partir de tus títulos. Para uso general, prueba el <a href="%SLUG%">generador de slugs URL</a> o el <a href="%BLOG%">generador de slugs de blog</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Como alterar um slug no WordPress (posts, páginas e categorias)",
    description: "Guia passo a passo para alterar slugs no WordPress para posts, páginas, categorias e tags. Inclui configuração de redirecionamentos e considerações de SEO.",
    body: `
<p>O WordPress gera automaticamente um slug URL a partir do título do post, mas o padrão raramente é ideal. Veja como alterá-lo para qualquer tipo de conteúdo — e como evitar prejudicar seu SEO ao fazer isso.</p>

<h2>Alterar o slug de um post ou página</h2>
<h3>Editor de blocos (Gutenberg)</h3>
<ol>
<li>Abra o post ou página no editor</li>
<li>Clique no painel <strong>Configurações</strong> (ícone de engrenagem) à direita</li>
<li>Em <strong>Resumo</strong>, encontre a seção <strong>URL</strong></li>
<li>Clique na URL para editar o slug</li>
<li>Digite seu novo slug (minúsculas, hífens, sem espaços)</li>
<li>Clique em <strong>Atualizar</strong></li>
</ol>

<h3>Edição rápida</h3>
<ol>
<li>Vá em <strong>Posts > Todos os Posts</strong></li>
<li>Passe o cursor sobre um post e clique em <strong>Edição Rápida</strong></li>
<li>Edite o campo <strong>Slug</strong> diretamente</li>
<li>Clique em <strong>Atualizar</strong></li>
</ol>

<h2>Alterar slug de categoria ou tag</h2>
<ol>
<li>Vá em <strong>Posts > Categorias</strong> (ou <strong>Tags</strong>)</li>
<li>Passe o cursor sobre a categoria e clique em <strong>Editar</strong></li>
<li>Altere o campo <strong>Slug</strong></li>
<li>Clique em <strong>Atualizar</strong></li>
</ol>

<h2>Considerações SEO ao alterar slugs</h2>
<p>Alterar um slug muda a URL, o que significa:</p>
<ul>
<li><strong>Todos os backlinks existentes quebram.</strong> Links de outros sites, redes sociais ou favoritos resultarão em 404.</li>
<li><strong>Rankings de busca são resetados.</strong> O Google trata a nova URL como uma nova página até que o redirecionamento seja descoberto.</li>
<li><strong>Links internos quebram.</strong> Links dentro do seu próprio site para a URL antiga resultarão em 404.</li>
</ul>

<h3>Sempre configure um redirecionamento 301</h3>
<ul>
<li><strong>Plugin:</strong> "Redirection" ou "Yoast SEO Premium" (redireciona automaticamente na mudança de slug)</li>
<li><strong>.htaccess:</strong> <code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx:</strong> <code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>Melhores práticas de slugs WordPress</h2>
<ul>
<li>Defina o slug correto <strong>antes de publicar</strong> — mudar depois é custoso</li>
<li>Remova as stop words</li>
<li>Inclua sua palavra-chave alvo</li>
<li>Mantenha em menos de 5 palavras</li>
<li>Use apenas letras minúsculas e hífens</li>
</ul>

<h2>Gere slugs WordPress otimizados</h2>
<p>Use nosso <a href="%WP%">gerador de slugs WordPress</a> para criar slugs otimizados para SEO a partir dos seus títulos. Para uso geral, experimente o <a href="%SLUG%">gerador de slugs URL</a> ou o <a href="%BLOG%">gerador de slugs de blog</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Comment changer un slug WordPress (articles, pages et catégories)",
    description: "Guide étape par étape pour changer les slugs WordPress pour les articles, pages, catégories et tags. Inclut la configuration des redirections et les considérations SEO.",
    body: `
<p>WordPress génère automatiquement un slug URL à partir du titre de votre article, mais le défaut est rarement optimal. Voici comment le changer pour tout type de contenu — et comment éviter de casser votre SEO en le faisant.</p>

<h2>Changer le slug d'un article ou d'une page</h2>
<h3>Éditeur de blocs (Gutenberg)</h3>
<ol>
<li>Ouvrez l'article ou la page dans l'éditeur</li>
<li>Cliquez sur le panneau <strong>Réglages</strong> (icône d'engrenage) à droite</li>
<li>Sous <strong>Résumé</strong>, trouvez la section <strong>URL</strong></li>
<li>Cliquez sur l'URL pour modifier le slug</li>
<li>Tapez votre nouveau slug (minuscules, tirets, pas d'espaces)</li>
<li>Cliquez sur <strong>Mettre à jour</strong></li>
</ol>

<h3>Modification rapide</h3>
<ol>
<li>Allez dans <strong>Articles > Tous les articles</strong></li>
<li>Survolez un article et cliquez sur <strong>Modification rapide</strong></li>
<li>Modifiez le champ <strong>Slug</strong> directement</li>
<li>Cliquez sur <strong>Mettre à jour</strong></li>
</ol>

<h2>Changer le slug d'une catégorie ou d'un tag</h2>
<ol>
<li>Allez dans <strong>Articles > Catégories</strong> (ou <strong>Étiquettes</strong>)</li>
<li>Survolez la catégorie et cliquez sur <strong>Modifier</strong></li>
<li>Changez le champ <strong>Slug</strong></li>
<li>Cliquez sur <strong>Mettre à jour</strong></li>
</ol>

<h2>Considérations SEO lors du changement de slugs</h2>
<p>Changer un slug change l'URL, ce qui signifie :</p>
<ul>
<li><strong>Tous les backlinks existants cassent.</strong> Les liens d'autres sites, réseaux sociaux ou favoris donneront un 404.</li>
<li><strong>Les classements de recherche se réinitialisent.</strong> Google traite la nouvelle URL comme une nouvelle page jusqu'à ce que la redirection soit découverte.</li>
<li><strong>Les liens internes cassent.</strong> Les liens au sein de votre propre site vers l'ancienne URL donneront un 404.</li>
</ul>

<h3>Toujours mettre en place une redirection 301</h3>
<ul>
<li><strong>Plugin :</strong> « Redirection » ou « Yoast SEO Premium » (redirige automatiquement lors du changement de slug)</li>
<li><strong>.htaccess :</strong> <code>Redirect 301 /old-slug /new-slug</code></li>
<li><strong>Nginx :</strong> <code>rewrite ^/old-slug$ /new-slug permanent;</code></li>
</ul>

<h2>Bonnes pratiques des slugs WordPress</h2>
<ul>
<li>Définissez le bon slug <strong>avant de publier</strong> — le changer après coûte cher</li>
<li>Supprimez les mots vides</li>
<li>Incluez votre mot-clé cible</li>
<li>Gardez moins de 5 mots</li>
<li>Utilisez uniquement des lettres minuscules et des tirets</li>
</ul>

<h2>Générez des slugs WordPress optimisés</h2>
<p>Utilisez notre <a href="%WP%">générateur de slugs WordPress</a> pour créer des slugs optimisés pour le SEO à partir de vos titres. Pour un usage général, essayez le <a href="%SLUG%">générateur de slugs URL</a> ou le <a href="%BLOG%">générateur de slugs de blog</a>.</p>
`,
  }),
};
