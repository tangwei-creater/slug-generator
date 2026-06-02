import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "unicode-normalization-explained", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "Unicode Normalization Explained: NFC, NFD, NFKC, NFKD",
    description: "Learn what Unicode normalization forms are, why they matter, and how they affect text comparison and search.",
    body: `<p>The same text can have multiple Unicode representations. Normalization converts text to a standard form for reliable comparison.</p><h2>The Four Forms</h2><table><thead><tr><th>Form</th><th>Name</th><th>Use Case</th></tr></thead><tbody><tr><td>NFC</td><td>Composed</td><td>Most common — recommended for web and storage</td></tr><tr><td>NFD</td><td>Decomposed</td><td>Used by macOS file system</td></tr><tr><td>NFKC</td><td>Compatibility Composed</td><td>Search and matching</td></tr><tr><td>NFKD</td><td>Compatibility Decomposed</td><td>Stripping accents</td></tr></tbody></table><h2>Why It Matters</h2><p>"café" can be encoded as 4 characters (NFC: é as single code point) or 5 characters (NFD: e + combining accent). Without normalization, string comparison fails.</p><h2>Remove Accents</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove accents/diacritics" to normalize text.</p>`,
  }),
  ja: build("ja", {
    title: "Unicode正規化解説：NFC、NFD、NFKC、NFKD",
    description: "Unicode正規化形式とは何か、なぜ重要か、テキスト比較や検索にどう影響するかを解説します。",
    body: `<p>同じテキストに複数のUnicode表現が存在します。正規化はテキストを標準形式に変換し、信頼性のある比較を可能にします。</p>
<h2>4つの形式</h2>
<table><thead><tr><th>形式</th><th>名称</th><th>用途</th></tr></thead><tbody>
<tr><td>NFC</td><td>合成済み</td><td>最も一般的 — Web・保存に推奨</td></tr>
<tr><td>NFD</td><td>分解済み</td><td>macOSファイルシステムで使用</td></tr>
<tr><td>NFKC</td><td>互換合成</td><td>検索とマッチング</td></tr>
<tr><td>NFKD</td><td>互換分解</td><td>アクセント除去</td></tr>
</tbody></table>
<h2>なぜ重要か</h2>
<p>「café」はNFCでは4文字（éが1つのコードポイント）、NFDでは5文字（e + 結合アクセント）にエンコードされます。正規化なしでは文字列比較が失敗します。</p>
<h2>アクセントを除去</h2>
<p>「アクセント/ダイアクリティカルマークを除去」オプションを使って<a href="%CLEAN%">プレーンテキストコンバーター</a>でテキストを正規化できます。</p>`,
  }),
  de: build("de", {
    title: "Unicode-Normalisierung erklärt: NFC, NFD, NFKC, NFKD",
    description: "Erfahren Sie, was Unicode-Normalisierungsformen sind, warum sie wichtig sind und wie sie Textvergleich und Suche beeinflussen.",
    body: `<p>Derselbe Text kann mehrere Unicode-Darstellungen haben. Normalisierung konvertiert Text in eine Standardform für zuverlässigen Vergleich.</p>
<h2>Die vier Formen</h2>
<table><thead><tr><th>Form</th><th>Name</th><th>Anwendungsfall</th></tr></thead><tbody>
<tr><td>NFC</td><td>Composed</td><td>Am häufigsten — empfohlen für Web und Speicherung</td></tr>
<tr><td>NFD</td><td>Decomposed</td><td>Vom macOS-Dateisystem verwendet</td></tr>
<tr><td>NFKC</td><td>Compatibility Composed</td><td>Suche und Matching</td></tr>
<tr><td>NFKD</td><td>Compatibility Decomposed</td><td>Akzente entfernen</td></tr>
</tbody></table>
<h2>Warum es wichtig ist</h2>
<p>„café" kann als 4 Zeichen (NFC: é als einzelner Codepunkt) oder 5 Zeichen (NFD: e + kombinierender Akzent) kodiert werden. Ohne Normalisierung schlägt der String-Vergleich fehl.</p>
<h2>Akzente entfernen</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a> mit „Akzente/Diakritika entfernen", um Text zu normalisieren.</p>`,
  }),
  es: build("es", {
    title: "Normalización Unicode explicada: NFC, NFD, NFKC, NFKD",
    description: "Aprende qué son las formas de normalización Unicode, por qué importan y cómo afectan la comparación y búsqueda de texto.",
    body: `<p>El mismo texto puede tener múltiples representaciones Unicode. La normalización convierte el texto a una forma estándar para una comparación confiable.</p>
<h2>Las cuatro formas</h2>
<table><thead><tr><th>Forma</th><th>Nombre</th><th>Caso de uso</th></tr></thead><tbody>
<tr><td>NFC</td><td>Compuesta</td><td>La más común — recomendada para web y almacenamiento</td></tr>
<tr><td>NFD</td><td>Descompuesta</td><td>Usada por el sistema de archivos de macOS</td></tr>
<tr><td>NFKC</td><td>Compatibilidad Compuesta</td><td>Búsqueda y matching</td></tr>
<tr><td>NFKD</td><td>Compatibilidad Descompuesta</td><td>Eliminar acentos</td></tr>
</tbody></table>
<h2>Por qué importa</h2>
<p>"café" puede codificarse como 4 caracteres (NFC: é como un solo punto de código) o 5 caracteres (NFD: e + acento combinante). Sin normalización, la comparación de strings falla.</p>
<h2>Elimina acentos</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> con "Eliminar acentos/diacríticos" para normalizar texto.</p>`,
  }),
  pt: build("pt", {
    title: "Normalização Unicode explicada: NFC, NFD, NFKC, NFKD",
    description: "Aprenda o que são as formas de normalização Unicode, por que importam e como afetam a comparação e busca de texto.",
    body: `<p>O mesmo texto pode ter múltiplas representações Unicode. A normalização converte o texto para uma forma padrão para comparação confiável.</p>
<h2>As quatro formas</h2>
<table><thead><tr><th>Forma</th><th>Nome</th><th>Caso de uso</th></tr></thead><tbody>
<tr><td>NFC</td><td>Composta</td><td>Mais comum — recomendada para web e armazenamento</td></tr>
<tr><td>NFD</td><td>Decomposta</td><td>Usada pelo sistema de arquivos do macOS</td></tr>
<tr><td>NFKC</td><td>Compatibilidade Composta</td><td>Busca e matching</td></tr>
<tr><td>NFKD</td><td>Compatibilidade Decomposta</td><td>Remoção de acentos</td></tr>
</tbody></table>
<h2>Por que importa</h2>
<p>"café" pode ser codificado como 4 caracteres (NFC: é como um único code point) ou 5 caracteres (NFD: e + acento combinante). Sem normalização, a comparação de strings falha.</p>
<h2>Remova acentos</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> com "Remover acentos/diacríticos" para normalizar texto.</p>`,
  }),
  fr: build("fr", {
    title: "Normalisation Unicode expliquée : NFC, NFD, NFKC, NFKD",
    description: "Découvrez les formes de normalisation Unicode, pourquoi elles sont importantes et comment elles affectent la comparaison et la recherche de texte.",
    body: `<p>Le même texte peut avoir plusieurs représentations Unicode. La normalisation convertit le texte en une forme standard pour une comparaison fiable.</p>
<h2>Les quatre formes</h2>
<table><thead><tr><th>Forme</th><th>Nom</th><th>Cas d'usage</th></tr></thead><tbody>
<tr><td>NFC</td><td>Composée</td><td>La plus courante — recommandée pour le web et le stockage</td></tr>
<tr><td>NFD</td><td>Décomposée</td><td>Utilisée par le système de fichiers macOS</td></tr>
<tr><td>NFKC</td><td>Compatibilité Composée</td><td>Recherche et correspondance</td></tr>
<tr><td>NFKD</td><td>Compatibilité Décomposée</td><td>Suppression des accents</td></tr>
</tbody></table>
<h2>Pourquoi c'est important</h2>
<p>« café » peut être encodé en 4 caractères (NFC : é comme un seul point de code) ou 5 caractères (NFD : e + accent combinant). Sans normalisation, la comparaison de chaînes échoue.</p>
<h2>Supprimez les accents</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> avec « Supprimer les accents/diacritiques » pour normaliser le texte.</p>`,
  }),
};
