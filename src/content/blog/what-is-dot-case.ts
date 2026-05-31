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
    description: "dot.caseの定義とJavaパッケージ名、設定ファイルでの使用例を解説。",
    body: `<p><strong>dot.case</strong>はドットで単語を区切る表記法です。Javaパッケージ名や設定ファイルで使用されます。</p><h2>変換</h2><p><a href="%DOT%">dot caseコンバーター</a>で変換。</p>`,
  }),
  de: build("de", {
    title: "Was ist dot.case? Punkt-Notation in der Programmierung",
    description: "dot.case in Java-Paketen und Konfigurationsdateien erklärt.",
    body: `<p><strong>dot.case</strong> trennt Wörter mit Punkten. Verwendet in Java-Paketen und Konfigurationsdateien.</p><h2>Konvertierung</h2><p><a href="%DOT%">dot-case-Konverter</a> verwenden.</p>`,
  }),
  es: build("es", {
    title: "¿Qué es dot.case? Notación con puntos en programación",
    description: "dot.case en paquetes Java y archivos de configuración explicado.",
    body: `<p><strong>dot.case</strong> separa palabras con puntos. Usado en paquetes Java y archivos de configuración.</p><h2>Conversión</h2><p>Usa el <a href="%DOT%">conversor dot case</a>.</p>`,
  }),
  pt: build("pt", {
    title: "O que é dot.case? Notação com pontos na programação",
    description: "dot.case em pacotes Java e arquivos de configuração explicado.",
    body: `<p><strong>dot.case</strong> separa palavras com pontos. Usado em pacotes Java e arquivos de configuração.</p><h2>Conversão</h2><p>Use o <a href="%DOT%">conversor dot case</a>.</p>`,
  }),
  fr: build("fr", {
    title: "Qu'est-ce que dot.case ? Notation avec points en programmation",
    description: "dot.case dans les packages Java et fichiers de configuration expliqué.",
    body: `<p><strong>dot.case</strong> sépare les mots par des points. Utilisé dans les packages Java et fichiers de configuration.</p><h2>Conversion</h2><p>Utilisez le <a href="%DOT%">convertisseur dot case</a>.</p>`,
  }),
};
