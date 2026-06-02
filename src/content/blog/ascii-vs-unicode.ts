import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "ascii-vs-unicode", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "ASCII vs Unicode: What's the Difference?",
    description: "Understand the difference between ASCII and Unicode, why Unicode replaced ASCII, and how they work together.",
    body: `<p>ASCII and Unicode are character encoding standards. ASCII came first and handles English; Unicode handles every language on Earth.</p><h2>Comparison</h2><table><thead><tr><th>Feature</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Characters</td><td>128 (7-bit)</td><td>149,000+ (21-bit)</td></tr><tr><td>Languages</td><td>English only</td><td>All languages</td></tr><tr><td>Emojis</td><td>No</td><td>Yes</td></tr><tr><td>Encoding</td><td>Single byte</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibility</td><td>Subset of Unicode</td><td>Superset of ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 is the dominant Unicode encoding. It's backwards-compatible with ASCII — the first 128 characters are identical.</p><h2>Clean Your Text</h2><p>Remove non-ASCII characters with our <a href="%CLEAN%">plain text converter</a>.</p>`,
  }),
  ja: build("ja", {
    title: "ASCII vs Unicode：違いは何？",
    description: "ASCIIとUnicodeの違い、UnicodeがASCIIを置き換えた理由、そして両者がどう連携するのかを解説します。",
    body: `<p>ASCIIとUnicodeはどちらも文字エンコーディングの規格です。先に登場したASCIIは英語だけを扱い、後発のUnicodeは地球上のあらゆる言語を扱えます。</p><h2>比較</h2><table><thead><tr><th>項目</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>文字数</td><td>128（7ビット）</td><td>14万9000以上（21ビット）</td></tr><tr><td>対応言語</td><td>英語のみ</td><td>すべての言語</td></tr><tr><td>絵文字</td><td>非対応</td><td>対応</td></tr><tr><td>エンコード方式</td><td>1バイト</td><td>UTF-8 / UTF-16 / UTF-32</td></tr><tr><td>互換性</td><td>Unicodeのサブセット</td><td>ASCIIのスーパーセット</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8は最も普及しているUnicodeのエンコード方式です。ASCIIと後方互換性があり、最初の128文字はASCIIと完全に同一です。</p><h2>テキストをきれいにする</h2><p><a href="%CLEAN%">プレーンテキストコンバーター</a>で非ASCII文字を削除できます。</p>`,
  }),
  de: build("de", {
    title: "ASCII vs Unicode: Was ist der Unterschied?",
    description: "Der Unterschied zwischen ASCII und Unicode, warum Unicode ASCII abgelöst hat und wie beide zusammenarbeiten.",
    body: `<p>ASCII und Unicode sind Standards zur Zeichenkodierung. ASCII kam zuerst und deckt nur Englisch ab; Unicode deckt jede Sprache der Welt ab.</p><h2>Vergleich</h2><table><thead><tr><th>Merkmal</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Zeichen</td><td>128 (7-Bit)</td><td>149.000+ (21-Bit)</td></tr><tr><td>Sprachen</td><td>Nur Englisch</td><td>Alle Sprachen</td></tr><tr><td>Emojis</td><td>Nein</td><td>Ja</td></tr><tr><td>Kodierung</td><td>Einzelnes Byte</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Kompatibilität</td><td>Teilmenge von Unicode</td><td>Obermenge von ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 ist die dominierende Unicode-Kodierung. Sie ist abwärtskompatibel mit ASCII – die ersten 128 Zeichen sind identisch.</p><h2>Text bereinigen</h2><p>Entfernen Sie Nicht-ASCII-Zeichen mit unserem <a href="%CLEAN%">Klartext-Konverter</a>.</p>`,
  }),
  es: build("es", {
    title: "ASCII vs Unicode: ¿Cuál es la diferencia?",
    description: "La diferencia entre ASCII y Unicode, por qué Unicode reemplazó a ASCII y cómo funcionan juntos.",
    body: `<p>ASCII y Unicode son estándares de codificación de caracteres. ASCII apareció primero y solo cubre el inglés; Unicode cubre todos los idiomas del mundo.</p><h2>Comparación</h2><table><thead><tr><th>Característica</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Caracteres</td><td>128 (7 bits)</td><td>149.000+ (21 bits)</td></tr><tr><td>Idiomas</td><td>Solo inglés</td><td>Todos los idiomas</td></tr><tr><td>Emojis</td><td>No</td><td>Sí</td></tr><tr><td>Codificación</td><td>Un solo byte</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibilidad</td><td>Subconjunto de Unicode</td><td>Superconjunto de ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 es la codificación Unicode dominante. Es retrocompatible con ASCII: los primeros 128 caracteres son idénticos.</p><h2>Limpia tu texto</h2><p>Elimina los caracteres no ASCII con nuestro <a href="%CLEAN%">conversor de texto plano</a>.</p>`,
  }),
  pt: build("pt", {
    title: "ASCII vs Unicode: Qual a diferença?",
    description: "A diferença entre ASCII e Unicode, por que o Unicode substituiu o ASCII e como eles funcionam juntos.",
    body: `<p>ASCII e Unicode são padrões de codificação de caracteres. O ASCII surgiu primeiro e cobre apenas o inglês; o Unicode cobre todos os idiomas do mundo.</p><h2>Comparação</h2><table><thead><tr><th>Recurso</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Caracteres</td><td>128 (7 bits)</td><td>149.000+ (21 bits)</td></tr><tr><td>Idiomas</td><td>Apenas inglês</td><td>Todos os idiomas</td></tr><tr><td>Emojis</td><td>Não</td><td>Sim</td></tr><tr><td>Codificação</td><td>Byte único</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibilidade</td><td>Subconjunto do Unicode</td><td>Superconjunto do ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>O UTF-8 é a codificação Unicode dominante. É retrocompatível com ASCII — os primeiros 128 caracteres são idênticos.</p><h2>Limpe seu texto</h2><p>Remova caracteres não ASCII com o nosso <a href="%CLEAN%">conversor de texto simples</a>.</p>`,
  }),
  fr: build("fr", {
    title: "ASCII vs Unicode : Quelle est la différence ?",
    description: "La différence entre ASCII et Unicode, pourquoi Unicode a remplacé ASCII et comment ils fonctionnent ensemble.",
    body: `<p>ASCII et Unicode sont des normes de codage de caractères. ASCII est apparu en premier et ne couvre que l'anglais ; Unicode couvre toutes les langues du monde.</p><h2>Comparaison</h2><table><thead><tr><th>Caractéristique</th><th>ASCII</th><th>Unicode</th></tr></thead><tbody><tr><td>Caractères</td><td>128 (7 bits)</td><td>149 000+ (21 bits)</td></tr><tr><td>Langues</td><td>Anglais uniquement</td><td>Toutes les langues</td></tr><tr><td>Emojis</td><td>Non</td><td>Oui</td></tr><tr><td>Codage</td><td>Octet unique</td><td>UTF-8, UTF-16, UTF-32</td></tr><tr><td>Compatibilité</td><td>Sous-ensemble d'Unicode</td><td>Sur-ensemble d'ASCII</td></tr></tbody></table><h2>UTF-8</h2><p>UTF-8 est le codage Unicode dominant. Il est rétrocompatible avec ASCII : les 128 premiers caractères sont identiques.</p><h2>Nettoyez votre texte</h2><p>Supprimez les caractères non ASCII avec notre <a href="%CLEAN%">convertisseur de texte brut</a>.</p>`,
  }),
};
