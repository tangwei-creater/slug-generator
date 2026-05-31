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
    description: "WordPressの投稿、固定ページ、カテゴリー、タグのスラッグ変更手順。リダイレクト設定とSEO注意点も解説。",
    body: `
<p>WordPressはタイトルから自動的にURLスラッグを生成しますが、デフォルトは最適ではありません。</p>
<h2>投稿・固定ページのスラッグ変更</h2>
<ol>
<li>エディターで投稿を開く</li>
<li>設定パネルでURL欄を見つける</li>
<li>新しいスラッグを入力</li>
<li>更新をクリック</li>
</ol>
<h2>SEO上の注意点</h2>
<p>スラッグを変更するとURLが変わるため、必ず301リダイレクトを設定してください。</p>
<h2>ベストプラクティス</h2>
<ul>
<li>公開前にスラッグを設定</li>
<li>ストップワードを削除</li>
<li>ターゲットキーワードを含める</li>
<li>5語以内に</li>
</ul>
<h2>スラッグ生成</h2>
<p><a href="%WP%">WordPressスラッグジェネレーター</a>や<a href="%SLUG%">URLスラッグジェネレーター</a>をご利用ください。</p>
`,
  }),
  de: build("de", {
    title: "WordPress-Slug ändern: Beiträge, Seiten & Kategorien",
    description: "Schritt-für-Schritt-Anleitung zum Ändern von WordPress-Slugs. Einschließlich Redirect-Setup und SEO-Überlegungen.",
    body: `
<p>WordPress generiert automatisch einen URL-Slug aus Ihrem Beitragstitel, aber der Standard ist selten optimal.</p>
<h2>Slug ändern</h2>
<ol>
<li>Beitrag im Editor öffnen</li>
<li>URL-Bereich in den Einstellungen finden</li>
<li>Neuen Slug eingeben</li>
<li>Aktualisieren klicken</li>
</ol>
<h2>SEO-Hinweise</h2>
<p>Nach der Änderung immer einen 301-Redirect einrichten.</p>
<h2>Slug generieren</h2>
<p>Verwenden Sie unseren <a href="%WP%">WordPress-Slug-Generator</a> oder den <a href="%SLUG%">URL-Slug-Generator</a>.</p>
`,
  }),
  es: build("es", {
    title: "Cómo cambiar un slug en WordPress (entradas, páginas y categorías)",
    description: "Guía paso a paso para cambiar slugs en WordPress. Incluye configuración de redirecciones y consideraciones SEO.",
    body: `
<p>WordPress genera automáticamente un slug URL del título de tu entrada, pero el predeterminado rara vez es óptimo.</p>
<h2>Cambiar el slug</h2>
<ol>
<li>Abre la entrada en el editor</li>
<li>Encuentra la sección de URL en configuración</li>
<li>Escribe el nuevo slug</li>
<li>Haz clic en Actualizar</li>
</ol>
<h2>Consideraciones SEO</h2>
<p>Siempre configura una redirección 301 después de cambiar el slug.</p>
<h2>Generar slugs</h2>
<p>Usa nuestro <a href="%WP%">generador de slugs WordPress</a> o el <a href="%SLUG%">generador de slugs URL</a>.</p>
`,
  }),
  pt: build("pt", {
    title: "Como alterar um slug no WordPress (posts, páginas e categorias)",
    description: "Guia passo a passo para alterar slugs no WordPress. Inclui configuração de redirecionamentos e considerações de SEO.",
    body: `
<p>O WordPress gera automaticamente um slug URL a partir do título do post, mas o padrão raramente é ideal.</p>
<h2>Alterar o slug</h2>
<ol>
<li>Abra o post no editor</li>
<li>Encontre a seção de URL nas configurações</li>
<li>Digite o novo slug</li>
<li>Clique em Atualizar</li>
</ol>
<h2>Considerações SEO</h2>
<p>Sempre configure um redirecionamento 301 após alterar o slug.</p>
<h2>Gerar slugs</h2>
<p>Use nosso <a href="%WP%">gerador de slugs WordPress</a> ou o <a href="%SLUG%">gerador de slugs URL</a>.</p>
`,
  }),
  fr: build("fr", {
    title: "Comment changer un slug WordPress (articles, pages et catégories)",
    description: "Guide étape par étape pour changer les slugs WordPress. Inclut la configuration des redirections et les considérations SEO.",
    body: `
<p>WordPress génère automatiquement un slug URL à partir du titre de votre article, mais le défaut est rarement optimal.</p>
<h2>Changer le slug</h2>
<ol>
<li>Ouvrez l'article dans l'éditeur</li>
<li>Trouvez la section URL dans les paramètres</li>
<li>Tapez le nouveau slug</li>
<li>Cliquez sur Mettre à jour</li>
</ol>
<h2>Considérations SEO</h2>
<p>Toujours configurer une redirection 301 après avoir changé le slug.</p>
<h2>Générer des slugs</h2>
<p>Utilisez notre <a href="%WP%">générateur de slugs WordPress</a> ou le <a href="%SLUG%">générateur de slugs URL</a>.</p>
`,
  }),
};
