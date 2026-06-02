import type { Locale } from "@/i18n/routing";

export interface Article { title: string; description: string; body: string; }

export const meta = { slug: "what-are-zero-width-characters", date: "2026-06-01", readTime: 4 };

const p = (l: Locale, path: string) => (l === "en" ? path : `/${l}${path}`);
const build = (l: Locale, t: Article): Article => ({
  ...t,
  body: t.body
    .replaceAll("%CLEAN%", p(l, "/plain-text-converter")),
});

export const article: Record<Locale, Article> = {
  en: build("en", {
    title: "What Are Zero-Width Characters? How to Find and Remove Them",
    description: "Learn about zero-width spaces, joiners, and other invisible Unicode characters that cause bugs in code and text.",
    body: `<p>Zero-width characters are invisible Unicode characters that take up no visible space but can cause serious issues in code, data processing, and text comparison.</p><h2>Common Zero-Width Characters</h2><table><thead><tr><th>Name</th><th>Unicode</th><th>Purpose</th></tr></thead><tbody><tr><td>Zero-Width Space (ZWSP)</td><td>U+200B</td><td>Optional line-break point</td></tr><tr><td>Zero-Width Non-Joiner</td><td>U+200C</td><td>Prevents ligatures</td></tr><tr><td>Zero-Width Joiner</td><td>U+200D</td><td>Creates ligatures/emoji combos</td></tr><tr><td>Soft Hyphen</td><td>U+00AD</td><td>Optional hyphenation point</td></tr><tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indicates encoding</td></tr></tbody></table><h2>Problems They Cause</h2><ul><li>String comparison fails: <code>"hello" !== "h\\u200Bello"</code></li><li>JSON parsing errors</li><li>Database unique constraint violations</li><li>Search/filter mismatches</li></ul><h2>Remove Them</h2><p>Use our <a href="%CLEAN%">plain text converter</a> with "Remove zero-width characters" enabled.</p>`,
  }),
  ja: build("ja", {
    title: "ゼロ幅文字とは？見つけ方と削除方法",
    description: "ゼロ幅スペース、ジョイナーなど不可視のUnicode文字がコードやテキストに引き起こすバグと、その検出・除去方法を解説します。",
    body: `<p>ゼロ幅文字は目に見えないUnicode文字で、表示上のスペースを占めませんが、コード、データ処理、テキスト比較に深刻な問題を引き起こす可能性があります。</p>
<h2>一般的なゼロ幅文字</h2>
<table><thead><tr><th>名前</th><th>Unicode</th><th>用途</th></tr></thead><tbody>
<tr><td>ゼロ幅スペース（ZWSP）</td><td>U+200B</td><td>任意の改行ポイント</td></tr>
<tr><td>ゼロ幅非接合子</td><td>U+200C</td><td>合字の防止</td></tr>
<tr><td>ゼロ幅接合子</td><td>U+200D</td><td>合字/絵文字の結合</td></tr>
<tr><td>ソフトハイフン</td><td>U+00AD</td><td>任意のハイフネーションポイント</td></tr>
<tr><td>BOM（バイトオーダーマーク）</td><td>U+FEFF</td><td>エンコーディングの指示</td></tr>
</tbody></table>
<h2>引き起こす問題</h2>
<ul>
<li>文字列比較の失敗：<code>"hello" !== "h\\u200Bello"</code></li>
<li>JSONパースエラー</li>
<li>データベースのユニーク制約違反</li>
<li>検索・フィルターの不一致</li>
</ul>
<h2>削除する</h2>
<p>「ゼロ幅文字を削除」を有効にした<a href="%CLEAN%">プレーンテキストコンバーター</a>をご利用ください。</p>`,
  }),
  de: build("de", {
    title: "Was sind Zero-Width-Zeichen? Finden und Entfernen",
    description: "Erfahren Sie alles über Zero-Width-Spaces, Joiner und andere unsichtbare Unicode-Zeichen, die Bugs in Code und Text verursachen.",
    body: `<p>Zero-Width-Zeichen sind unsichtbare Unicode-Zeichen, die keinen sichtbaren Platz einnehmen, aber ernsthafte Probleme in Code, Datenverarbeitung und Textvergleichen verursachen können.</p>
<h2>Häufige Zero-Width-Zeichen</h2>
<table><thead><tr><th>Name</th><th>Unicode</th><th>Zweck</th></tr></thead><tbody>
<tr><td>Zero-Width Space (ZWSP)</td><td>U+200B</td><td>Optionaler Zeilenumbruchpunkt</td></tr>
<tr><td>Zero-Width Non-Joiner</td><td>U+200C</td><td>Verhindert Ligaturen</td></tr>
<tr><td>Zero-Width Joiner</td><td>U+200D</td><td>Erzeugt Ligaturen/Emoji-Kombinationen</td></tr>
<tr><td>Soft Hyphen</td><td>U+00AD</td><td>Optionaler Trennungspunkt</td></tr>
<tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Kennzeichnet die Kodierung</td></tr>
</tbody></table>
<h2>Verursachte Probleme</h2>
<ul>
<li>String-Vergleich schlägt fehl: <code>"hello" !== "h\\u200Bello"</code></li>
<li>JSON-Parsing-Fehler</li>
<li>Unique-Constraint-Verletzungen in Datenbanken</li>
<li>Such-/Filter-Fehlzuordnungen</li>
</ul>
<h2>Entfernen</h2>
<p>Verwenden Sie unseren <a href="%CLEAN%">Plain-Text-Konverter</a> mit aktivierter Option „Zero-Width-Zeichen entfernen".</p>`,
  }),
  es: build("es", {
    title: "¿Qué son los caracteres de ancho cero? Cómo encontrarlos y eliminarlos",
    description: "Aprende sobre los espacios de ancho cero, joiners y otros caracteres Unicode invisibles que causan bugs en código y texto.",
    body: `<p>Los caracteres de ancho cero son caracteres Unicode invisibles que no ocupan espacio visible pero pueden causar problemas graves en código, procesamiento de datos y comparación de texto.</p>
<h2>Caracteres de ancho cero comunes</h2>
<table><thead><tr><th>Nombre</th><th>Unicode</th><th>Propósito</th></tr></thead><tbody>
<tr><td>Espacio de ancho cero (ZWSP)</td><td>U+200B</td><td>Punto de salto de línea opcional</td></tr>
<tr><td>No-unión de ancho cero</td><td>U+200C</td><td>Evita ligaduras</td></tr>
<tr><td>Unión de ancho cero</td><td>U+200D</td><td>Crea ligaduras/combos de emoji</td></tr>
<tr><td>Guion suave</td><td>U+00AD</td><td>Punto de separación silábica opcional</td></tr>
<tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indica la codificación</td></tr>
</tbody></table>
<h2>Problemas que causan</h2>
<ul>
<li>La comparación de strings falla: <code>"hello" !== "h\\u200Bello"</code></li>
<li>Errores de parsing de JSON</li>
<li>Violaciones de restricciones únicas en bases de datos</li>
<li>Fallos en búsquedas y filtros</li>
</ul>
<h2>Elimínalos</h2>
<p>Usa nuestro <a href="%CLEAN%">conversor a texto plano</a> con la opción "Eliminar caracteres de ancho cero" activada.</p>`,
  }),
  pt: build("pt", {
    title: "O que são caracteres de largura zero? Como encontrá-los e removê-los",
    description: "Aprenda sobre espaços de largura zero, joiners e outros caracteres Unicode invisíveis que causam bugs em código e texto.",
    body: `<p>Caracteres de largura zero são caracteres Unicode invisíveis que não ocupam espaço visível mas podem causar problemas sérios em código, processamento de dados e comparação de texto.</p>
<h2>Caracteres de largura zero comuns</h2>
<table><thead><tr><th>Nome</th><th>Unicode</th><th>Propósito</th></tr></thead><tbody>
<tr><td>Espaço de largura zero (ZWSP)</td><td>U+200B</td><td>Ponto de quebra de linha opcional</td></tr>
<tr><td>Não-junção de largura zero</td><td>U+200C</td><td>Evita ligaduras</td></tr>
<tr><td>Junção de largura zero</td><td>U+200D</td><td>Cria ligaduras/combos de emoji</td></tr>
<tr><td>Hífen suave</td><td>U+00AD</td><td>Ponto de hifenização opcional</td></tr>
<tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indica a codificação</td></tr>
</tbody></table>
<h2>Problemas que causam</h2>
<ul>
<li>Comparação de strings falha: <code>"hello" !== "h\\u200Bello"</code></li>
<li>Erros de parsing de JSON</li>
<li>Violações de restrições únicas em bancos de dados</li>
<li>Falhas em buscas e filtros</li>
</ul>
<h2>Remova-os</h2>
<p>Use nosso <a href="%CLEAN%">conversor para texto simples</a> com a opção "Remover caracteres de largura zero" ativada.</p>`,
  }),
  fr: build("fr", {
    title: "Que sont les caractères de largeur nulle ? Comment les trouver et les supprimer",
    description: "Découvrez les espaces de largeur nulle, les joiners et autres caractères Unicode invisibles qui causent des bugs dans le code et le texte.",
    body: `<p>Les caractères de largeur nulle sont des caractères Unicode invisibles qui n'occupent aucun espace visible mais peuvent causer de sérieux problèmes dans le code, le traitement des données et la comparaison de texte.</p>
<h2>Caractères de largeur nulle courants</h2>
<table><thead><tr><th>Nom</th><th>Unicode</th><th>Fonction</th></tr></thead><tbody>
<tr><td>Espace de largeur nulle (ZWSP)</td><td>U+200B</td><td>Point de retour à la ligne optionnel</td></tr>
<tr><td>Non-jointure de largeur nulle</td><td>U+200C</td><td>Empêche les ligatures</td></tr>
<tr><td>Jointure de largeur nulle</td><td>U+200D</td><td>Crée des ligatures/combos d'emoji</td></tr>
<tr><td>Trait d'union conditionnel</td><td>U+00AD</td><td>Point de césure optionnel</td></tr>
<tr><td>BOM (Byte Order Mark)</td><td>U+FEFF</td><td>Indique l'encodage</td></tr>
</tbody></table>
<h2>Problèmes qu'ils causent</h2>
<ul>
<li>La comparaison de chaînes échoue : <code>"hello" !== "h\\u200Bello"</code></li>
<li>Erreurs de parsing JSON</li>
<li>Violations de contraintes d'unicité en base de données</li>
<li>Échecs de recherche et de filtrage</li>
</ul>
<h2>Supprimez-les</h2>
<p>Utilisez notre <a href="%CLEAN%">convertisseur en texte brut</a> avec l'option « Supprimer les caractères de largeur nulle » activée.</p>`,
  }),
};
