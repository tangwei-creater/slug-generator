import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-is-dot-case", date: "2026-05-31", readTime: 3 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%DOT%", p(l, "/dot-case-converter"))
    .replaceAll("%HUB%", p(l, "/case-converter-online")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Is dot.case? Where Dots Separate Words in Programming",
    description: "Learn what dot.case notation is, where it's used in Java packages, config files, and property keys, and how to convert to it.",
    body: `
<p><strong>dot.case</strong> separates words with periods (dots), typically in all lowercase: <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>Where Is dot.case Used?</h2>
<ul>
<li><strong>Java package names:</strong> <code>com.google.common.collect</code></li>
<li><strong>Spring Boot properties:</strong> <code>server.port=8080</code></li>
<li><strong>.properties files:</strong> <code>app.database.url</code></li>
<li><strong>YAML config keys:</strong> nested keys flattened with dots</li>
<li><strong>JavaScript object paths:</strong> <code>user.address.city</code></li>
<li><strong>Message bundles (i18n):</strong> <code>error.not.found</code></li>
</ul>
<h2>Convert to dot.case</h2>
<p>Use our <a href="%DOT%">dot case converter</a> or the <a href="%HUB%">case converter hub</a>.</p>`,
  }),
  ja: build("ja", {
    title: "dot.caseとは？ドット区切り表記の使い方",
    description: "dot.case表記の定義、Javaパッケージ名・設定ファイル・プロパティキーでの使い方と変換方法を解説します。",
    body: `
<p><strong>dot.case</strong>はピリオド（ドット）で単語を区切り、通常はすべて小文字にする表記法です：<code>com.example.app</code>、<code>server.port</code>、<code>logging.level.root</code>。</p>
<h2>dot.caseが使われる場面</h2>
<ul>
<li><strong>Javaパッケージ名：</strong> <code>com.google.common.collect</code></li>
<li><strong>Spring Bootプロパティ：</strong> <code>server.port=8080</code></li>
<li><strong>.propertiesファイル：</strong> <code>app.database.url</code></li>
<li><strong>YAML設定キー：</strong> ネストされたキーをドットでフラット化</li>
<li><strong>JavaScriptオブジェクトパス：</strong> <code>user.address.city</code></li>
<li><strong>メッセージバンドル（i18n）：</strong> <code>error.not.found</code></li>
</ul>
<h2>dot.caseに変換</h2>
<p><a href="%DOT%">dot caseコンバーター</a>または<a href="%HUB%">ケースコンバーターハブ</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was ist dot.case? Punkt-Notation in der Programmierung",
    description: "Erfahren Sie, was dot.case ist, wo es in Java-Paketen, Konfigurationsdateien und Property-Keys verwendet wird und wie man es umwandelt.",
    body: `
<p><strong>dot.case</strong> trennt Wörter mit Punkten, typischerweise komplett in Kleinbuchstaben: <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>Wo wird dot.case verwendet?</h2>
<ul>
<li><strong>Java-Paketnamen:</strong> <code>com.google.common.collect</code></li>
<li><strong>Spring-Boot-Eigenschaften:</strong> <code>server.port=8080</code></li>
<li><strong>.properties-Dateien:</strong> <code>app.database.url</code></li>
<li><strong>YAML-Konfigurationsschlüssel:</strong> Verschachtelte Schlüssel mit Punkten flachgelegt</li>
<li><strong>JavaScript-Objektpfade:</strong> <code>user.address.city</code></li>
<li><strong>Message-Bundles (i18n):</strong> <code>error.not.found</code></li>
</ul>
<h2>In dot.case umwandeln</h2>
<p>Verwenden Sie unseren <a href="%DOT%">dot-case-Konverter</a> oder den <a href="%HUB%">Case-Converter-Hub</a>.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es dot.case? Notación con puntos en programación",
    description: "Aprende qué es dot.case, dónde se usa en paquetes Java, archivos de configuración y claves de propiedades, y cómo convertir a este formato.",
    body: `
<p><strong>dot.case</strong> separa palabras con puntos, normalmente todo en minúsculas: <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>¿Dónde se usa dot.case?</h2>
<ul>
<li><strong>Nombres de paquetes Java:</strong> <code>com.google.common.collect</code></li>
<li><strong>Propiedades de Spring Boot:</strong> <code>server.port=8080</code></li>
<li><strong>Archivos .properties:</strong> <code>app.database.url</code></li>
<li><strong>Claves de configuración YAML:</strong> claves anidadas aplanadas con puntos</li>
<li><strong>Rutas de objetos JavaScript:</strong> <code>user.address.city</code></li>
<li><strong>Bundles de mensajes (i18n):</strong> <code>error.not.found</code></li>
</ul>
<h2>Convertir a dot.case</h2>
<p>Usa nuestro <a href="%DOT%">conversor dot case</a> o el <a href="%HUB%">hub de conversión de case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é dot.case? Notação com pontos na programação",
    description: "Aprenda o que é dot.case, onde é usado em pacotes Java, arquivos de configuração e chaves de propriedades, e como converter para este formato.",
    body: `
<p><strong>dot.case</strong> separa palavras com pontos, normalmente tudo em minúsculas: <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>Onde o dot.case é usado?</h2>
<ul>
<li><strong>Nomes de pacotes Java:</strong> <code>com.google.common.collect</code></li>
<li><strong>Propriedades do Spring Boot:</strong> <code>server.port=8080</code></li>
<li><strong>Arquivos .properties:</strong> <code>app.database.url</code></li>
<li><strong>Chaves de configuração YAML:</strong> chaves aninhadas achatadas com pontos</li>
<li><strong>Caminhos de objetos JavaScript:</strong> <code>user.address.city</code></li>
<li><strong>Bundles de mensagens (i18n):</strong> <code>error.not.found</code></li>
</ul>
<h2>Converter para dot.case</h2>
<p>Use o nosso <a href="%DOT%">conversor dot case</a> ou o <a href="%HUB%">hub de conversão de case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que dot.case ? Notation avec points en programmation",
    description: "Découvrez ce qu'est dot.case, où il est utilisé dans les packages Java, fichiers de configuration et clés de propriétés, et comment y convertir.",
    body: `
<p><strong>dot.case</strong> sépare les mots par des points, généralement tout en minuscules : <code>com.example.app</code>, <code>server.port</code>, <code>logging.level.root</code>.</p>
<h2>Où utilise-t-on dot.case ?</h2>
<ul>
<li><strong>Noms de packages Java :</strong> <code>com.google.common.collect</code></li>
<li><strong>Propriétés Spring Boot :</strong> <code>server.port=8080</code></li>
<li><strong>Fichiers .properties :</strong> <code>app.database.url</code></li>
<li><strong>Clés de configuration YAML :</strong> clés imbriquées aplaties avec des points</li>
<li><strong>Chemins d'objets JavaScript :</strong> <code>user.address.city</code></li>
<li><strong>Bundles de messages (i18n) :</strong> <code>error.not.found</code></li>
</ul>
<h2>Convertir en dot.case</h2>
<p>Utilisez notre <a href="%DOT%">convertisseur dot case</a> ou le <a href="%HUB%">hub de conversion de casse</a>.</p>`,
  }),
};
