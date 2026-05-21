const CHAR_MAP: Record<string, string> = {
  à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", æ: "ae",
  ç: "c", è: "e", é: "e", ê: "e", ë: "e",
  ì: "i", í: "i", î: "i", ï: "i",
  ð: "d", ñ: "n",
  ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o",
  ù: "u", ú: "u", û: "u", ü: "u",
  ý: "y", ÿ: "y", þ: "th",
  ß: "ss",
  "&": "and", "@": "at", "#": "number", "%": "percent",
  "+": "plus", "=": "equals",
  "€": "euro", "£": "pound", "¥": "yen", "$": "dollar",
  "©": "c", "®": "r", "™": "tm",
};

export function transliterate(str: string): string {
  return str
    .split("")
    .map((ch) => CHAR_MAP[ch] || CHAR_MAP[ch.toLowerCase()] || ch)
    .join("");
}

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "as", "be", "was", "are",
  "been", "being", "have", "has", "had", "do", "does", "did", "will",
  "would", "could", "should", "may", "might", "shall", "can", "need",
  "not", "no", "nor", "so", "if", "then", "than", "too", "very",
  "just", "about", "above", "after", "again", "all", "also", "am",
  "any", "because", "before", "between", "both", "each", "few",
  "further", "here", "how", "into", "more", "most", "much", "must",
  "my", "myself", "now", "only", "other", "our", "out", "over",
  "own", "same", "she", "he", "her", "him", "his", "its", "me",
  "that", "their", "them", "these", "they", "this", "those",
  "through", "under", "until", "up", "we", "what", "when", "where",
  "which", "while", "who", "whom", "why", "you", "your",
]);

export interface SlugOptions {
  separator: string;
  lowercase: boolean;
  trim: boolean;
  transliterate: boolean;
  maxLength: number;
  stripNumbers: boolean;
  removeStopWords: boolean;
}

export const DEFAULT_OPTIONS: SlugOptions = {
  separator: "-",
  lowercase: true,
  trim: true,
  transliterate: true,
  maxLength: 0,
  stripNumbers: false,
  removeStopWords: false,
};

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function slugify(text: string, options: SlugOptions = DEFAULT_OPTIONS): string {
  let result = text;

  if (options.transliterate) {
    result = transliterate(result);
  }

  if (options.lowercase) {
    result = result.toLowerCase();
  }

  if (options.stripNumbers) {
    result = result.replace(/[0-9]/g, "");
  }

  result = result
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s-]/g, " ");

  if (options.removeStopWords) {
    result = result
      .split(/\s+/)
      .filter((word) => !STOP_WORDS.has(word.toLowerCase()))
      .join(" ");
  }

  result = result
    .replace(/[\s_-]+/g, options.separator)
    .replace(
      new RegExp(
        `^[${escapeRegex(options.separator)}]+|[${escapeRegex(options.separator)}]+$`,
        "g"
      ),
      ""
    );

  if (options.trim) {
    result = result.trim();
  }

  if (options.maxLength > 0 && result.length > options.maxLength) {
    result = result.substring(0, options.maxLength);
    const lastSep = result.lastIndexOf(options.separator);
    if (lastSep > 0) {
      result = result.substring(0, lastSep);
    }
  }

  return result;
}
