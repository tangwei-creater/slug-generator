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

export interface SlugOptions {
  separator: string;
  lowercase: boolean;
  trim: boolean;
  transliterate: boolean;
  maxLength: number;
  stripNumbers: boolean;
}

export const DEFAULT_OPTIONS: SlugOptions = {
  separator: "-",
  lowercase: true,
  trim: true,
  transliterate: true,
  maxLength: 0,
  stripNumbers: false,
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
    .replace(/[^\w\s-]/g, " ")
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
