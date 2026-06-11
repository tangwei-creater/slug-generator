"use client";

import { useState, useCallback, useMemo } from "react";

type ReplaceMode = "comma" | "hyphen" | "space" | "remove" | "period";

const REPLACE_MODES: { key: ReplaceMode; label: string; example: string }[] = [
  { key: "comma", label: "Replace with comma", example: "word, word" },
  { key: "hyphen", label: "Replace with hyphen", example: "word - word" },
  { key: "space", label: "Replace with space", example: "word word" },
  { key: "period", label: "Replace with period", example: "word. Word" },
  { key: "remove", label: "Remove entirely", example: "wordword" },
];

const EXAMPLES: Record<string, string> = {
  "AI-style text":
    "The results were impressive — far beyond expectations — and the team celebrated. Action items — finalize the report — are due Friday.",
  "Mixed dashes":
    "Pages 10–25 cover the basics — the rest is advanced. See sections 3–5 — they're essential.",
};

function applyReplace(text: string, mode: ReplaceMode, alsoEnDash: boolean): string {
  // Em dash U+2014, horizontal bar U+2015, two/three-em dashes U+2E3A/U+2E3B
  const emDashes = /[—―⸺⸻]/g;
  const enDash = /–/g;

  const replacement: Record<ReplaceMode, string> = {
    comma: ", ",
    hyphen: " - ",
    space: " ",
    period: ". ",
    remove: "",
  };

  let out = text;

  if (mode === "comma" || mode === "period") {
    // Strip spaces around the dash first so "word — word" -> "word, word"
    out = out.replace(/\s*[—―⸺⸻]\s*/g, replacement[mode]);
    if (alsoEnDash) out = out.replace(/\s*–\s*/g, replacement[mode]);
  } else {
    out = out.replace(emDashes, replacement[mode]);
    if (alsoEnDash) out = out.replace(enDash, mode === "hyphen" ? "-" : replacement[mode]);
    // Collapse doubled spaces introduced by replacement
    out = out.replace(/ {2,}/g, " ");
  }

  if (mode === "period") {
    // Capitalize letter following the inserted period
    out = out.replace(/\. ([a-z])/g, (_, c: string) => `. ${c.toUpperCase()}`);
  }

  return out;
}

export default function EmDashRemoverTool({ placeholder }: { placeholder?: string }) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<ReplaceMode>("comma");
  const [alsoEnDash, setAlsoEnDash] = useState(false);
  const [copied, setCopied] = useState(false);

  const emCount = useMemo(
    () => (input.match(/[—―⸺⸻]/g) || []).length,
    [input]
  );
  const enCount = useMemo(() => (input.match(/–/g) || []).length, [input]);

  const output = useMemo(() => {
    if (!input) return "";
    return applyReplace(input, mode, alsoEnDash);
  }, [input, mode, alsoEnDash]);

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
      <div className="flex flex-wrap gap-2 mb-4">
        {REPLACE_MODES.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            title={m.example}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
              mode === m.key
                ? "bg-blue-50 border-blue-300 text-blue-700 font-semibold"
                : "bg-white border-gray-200 text-gray-600 hover:border-blue-200"
            }`}
          >
            {m.label}
          </button>
        ))}
        <button
          onClick={() => setAlsoEnDash((v) => !v)}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
            alsoEnDash
              ? "bg-amber-50 border-amber-300 text-amber-700 font-semibold"
              : "bg-white border-gray-200 text-gray-600 hover:border-amber-200"
          }`}
        >
          Also en dashes (–)
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="emdash-input" className="block text-sm font-semibold text-gray-700 mb-2">
          Paste your text
        </label>
        <textarea
          id="emdash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder ?? "Paste text containing em dashes (—) here…"}
          className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          spellCheck={false}
          autoFocus
        />
      </div>

      {!input && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-400 leading-7">Try:</span>
          {Object.entries(EXAMPLES).map(([label, text]) => (
            <button
              key={label}
              onClick={() => setInput(text)}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {input && (
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span className={emCount > 0 ? "text-blue-700 font-semibold" : "text-gray-500"}>
            Em dashes (—): {emCount}
          </span>
          <span className={enCount > 0 ? "text-amber-700 font-semibold" : "text-gray-500"}>
            En dashes (–): {enCount}
          </span>
        </div>
      )}

      {output && (
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
          <span>
            Characters: <strong className="text-gray-700">{input.length}</strong>
          </span>
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
