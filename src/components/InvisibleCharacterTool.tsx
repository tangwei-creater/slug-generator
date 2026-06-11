"use client";

import { useState, useCallback, useMemo } from "react";

interface InvisibleChar {
  code: number;
  name: string;
  abbr: string;
}

// Invisible / zero-width / formatting characters worth flagging.
const INVISIBLE_CHARS: InvisibleChar[] = [
  { code: 0x200b, name: "Zero Width Space", abbr: "ZWSP" },
  { code: 0x200c, name: "Zero Width Non-Joiner", abbr: "ZWNJ" },
  { code: 0x200d, name: "Zero Width Joiner", abbr: "ZWJ" },
  { code: 0xfeff, name: "Zero Width No-Break Space / BOM", abbr: "BOM" },
  { code: 0x00a0, name: "No-Break Space", abbr: "NBSP" },
  { code: 0x00ad, name: "Soft Hyphen", abbr: "SHY" },
  { code: 0x2060, name: "Word Joiner", abbr: "WJ" },
  { code: 0x180e, name: "Mongolian Vowel Separator", abbr: "MVS" },
  { code: 0x2028, name: "Line Separator", abbr: "LS" },
  { code: 0x2029, name: "Paragraph Separator", abbr: "PS" },
  { code: 0x202a, name: "Left-to-Right Embedding", abbr: "LRE" },
  { code: 0x202b, name: "Right-to-Left Embedding", abbr: "RLE" },
  { code: 0x202c, name: "Pop Directional Formatting", abbr: "PDF" },
  { code: 0x202d, name: "Left-to-Right Override", abbr: "LRO" },
  { code: 0x202e, name: "Right-to-Left Override", abbr: "RLO" },
  { code: 0x2061, name: "Function Application", abbr: "FA" },
  { code: 0x2062, name: "Invisible Times", abbr: "IT" },
  { code: 0x2063, name: "Invisible Separator", abbr: "IS" },
  { code: 0x2064, name: "Invisible Plus", abbr: "IP" },
  { code: 0x034f, name: "Combining Grapheme Joiner", abbr: "CGJ" },
  { code: 0x061c, name: "Arabic Letter Mark", abbr: "ALM" },
  { code: 0x115f, name: "Hangul Choseong Filler", abbr: "HCF" },
  { code: 0x1160, name: "Hangul Jungseong Filler", abbr: "HJF" },
  { code: 0x3164, name: "Hangul Filler", abbr: "HF" },
  { code: 0xffa0, name: "Halfwidth Hangul Filler", abbr: "HHF" },
  { code: 0x2000, name: "En Quad", abbr: "NQSP" },
  { code: 0x2001, name: "Em Quad", abbr: "MQSP" },
  { code: 0x2002, name: "En Space", abbr: "ENSP" },
  { code: 0x2003, name: "Em Space", abbr: "EMSP" },
  { code: 0x2004, name: "Three-Per-Em Space", abbr: "3/MSP" },
  { code: 0x2005, name: "Four-Per-Em Space", abbr: "4/MSP" },
  { code: 0x2006, name: "Six-Per-Em Space", abbr: "6/MSP" },
  { code: 0x2007, name: "Figure Space", abbr: "FSP" },
  { code: 0x2008, name: "Punctuation Space", abbr: "PSP" },
  { code: 0x2009, name: "Thin Space", abbr: "THSP" },
  { code: 0x200a, name: "Hair Space", abbr: "HSP" },
  { code: 0x202f, name: "Narrow No-Break Space", abbr: "NNBSP" },
  { code: 0x205f, name: "Medium Mathematical Space", abbr: "MMSP" },
  { code: 0x3000, name: "Ideographic Space", abbr: "IDSP" },
];

// Variation selectors U+FE00–FE0F handled as a range.
const VS_RANGE = { start: 0xfe00, end: 0xfe0f, name: "Variation Selector", abbr: "VS" };

const charMap = new Map(INVISIBLE_CHARS.map((c) => [c.code, c]));

interface Detection {
  code: number;
  name: string;
  abbr: string;
  count: number;
  positions: number[];
}

function detect(text: string): Detection[] {
  const found = new Map<number, Detection>();
  for (let i = 0; i < text.length; i++) {
    const cp = text.codePointAt(i)!;
    let meta: { name: string; abbr: string } | undefined = charMap.get(cp);
    if (!meta && cp >= VS_RANGE.start && cp <= VS_RANGE.end) {
      meta = { name: `${VS_RANGE.name}-${cp - VS_RANGE.start + 1}`, abbr: VS_RANGE.abbr };
    }
    if (meta) {
      const d = found.get(cp) || { code: cp, name: meta.name, abbr: meta.abbr, count: 0, positions: [] };
      d.count++;
      if (d.positions.length < 20) d.positions.push(i);
      found.set(cp, d);
    }
  }
  return [...found.values()].sort((a, b) => b.count - a.count);
}

function clean(text: string, keepNbsp: boolean): string {
  // Spaces that should become a normal space rather than vanish
  const spaceLike = new Set([
    0x00a0, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006,
    0x2007, 0x2008, 0x2009, 0x200a, 0x202f, 0x205f, 0x3000,
  ]);
  let out = "";
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    const isVS = cp >= VS_RANGE.start && cp <= VS_RANGE.end;
    const isListed = charMap.has(cp);
    if (isVS || isListed) {
      if (cp === 0x00a0 && keepNbsp) {
        out += ch;
      } else if (spaceLike.has(cp)) {
        out += " ";
      } else if (cp === 0x2028 || cp === 0x2029) {
        out += "\n";
      }
      // else: drop entirely (zero-width and control-like)
    } else {
      out += ch;
    }
  }
  return out;
}

const EXAMPLE = [
  "This",
  String.fromCodePoint(0x200b), // ZWSP
  " text",
  String.fromCodePoint(0x200c), // ZWNJ
  " contains hidden",
  String.fromCodePoint(0x200d), // ZWJ
  " characters",
  String.fromCodePoint(0xfeff), // BOM
  " that",
  String.fromCodePoint(0x00ad), // soft hyphen
  " break",
  String.fromCodePoint(0x2060), // word joiner
  " things.",
].join("");

export default function InvisibleCharacterTool({ placeholder }: { placeholder?: string }) {
  const [input, setInput] = useState("");
  const [keepNbsp, setKeepNbsp] = useState(false);
  const [copied, setCopied] = useState(false);

  const detections = useMemo(() => detect(input), [input]);
  const totalCount = useMemo(
    () => detections.reduce((sum, d) => sum + d.count, 0),
    [detections]
  );
  const output = useMemo(
    () => (input ? clean(input, keepNbsp) : ""),
    [input, keepNbsp]
  );

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = output;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <label htmlFor="invis-input" className="block text-sm font-semibold text-gray-700 mb-2">
          Paste your text
        </label>
        <textarea
          id="invis-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder ?? "Paste text to scan for invisible Unicode characters…"}
          className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          spellCheck={false}
          autoFocus
        />
      </div>

      {!input && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-400 leading-7">Try:</span>
          <button
            onClick={() => setInput(EXAMPLE)}
            className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Text with hidden characters
          </button>
        </div>
      )}

      {input && (
        <div className="mb-6">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 mb-4 ${
              totalCount > 0
                ? "bg-amber-50 border-amber-200"
                : "bg-green-50 border-green-200"
            }`}
          >
            <span className="text-2xl">{totalCount > 0 ? "⚠️" : "✓"}</span>
            <div>
              <p className={`font-semibold ${totalCount > 0 ? "text-amber-800" : "text-green-800"}`}>
                {totalCount > 0
                  ? `${totalCount} invisible character${totalCount !== 1 ? "s" : ""} found (${detections.length} type${detections.length !== 1 ? "s" : ""})`
                  : "No invisible characters detected"}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Scanned {input.length} characters locally in your browser
              </p>
            </div>
          </div>

          {detections.length > 0 && (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left text-gray-600">
                    <th className="py-2 pr-4">Code point</th>
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Count</th>
                    <th className="py-2">First positions</th>
                  </tr>
                </thead>
                <tbody>
                  {detections.map((d) => (
                    <tr key={d.code} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-blue-700">
                        U+{d.code.toString(16).toUpperCase().padStart(4, "0")}
                      </td>
                      <td className="py-2 pr-4">
                        {d.name} <span className="text-gray-400">({d.abbr})</span>
                      </td>
                      <td className="py-2 pr-4 font-semibold">{d.count}</td>
                      <td className="py-2 font-mono text-xs text-gray-500">
                        {d.positions.slice(0, 8).join(", ")}
                        {d.count > 8 ? "…" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <label className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <input
              type="checkbox"
              checked={keepNbsp}
              onChange={(e) => setKeepNbsp(e.target.checked)}
              className="rounded border-gray-300"
            />
            Keep non-breaking spaces (NBSP)
          </label>
        </div>
      )}

      {output && totalCount > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-700">Cleaned text</label>
            <button
              onClick={handleCopy}
              className="px-4 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono bg-gray-50 text-gray-800 outline-none resize-none"
          />
        </div>
      )}

      {input && (
        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <button
            onClick={() => setInput("")}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
