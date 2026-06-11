"use client";

import { useState, useCallback, useMemo } from "react";

/* ── conversion functions ── */

function toSentenceCase(s: string): string {
  return s
    .replace(/(^\s*|[.!?]\s+)(\w)/g, (_, pre, ch) => pre + ch.toUpperCase())
    .replace(/^(\w)/, (_, ch) => ch.toUpperCase());
}

function toTitleCase(s: string): string {
  const minor = new Set([
    "a","an","the","and","but","or","nor","in","on","at","to","for","of","with","by","as","is",
  ]);
  return s.replace(/\w\S*/g, (word, i) => {
    if (i !== 0 && minor.has(word.toLowerCase())) return word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

function toCamelCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w, i) =>
      i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
    )
    .join("");
}

function toPascalCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function toSnakeCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .join("_");
}

function toKebabCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .join("-");
}

function toConstantCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toUpperCase())
    .join("_");
}

function toAlternatingCase(s: string): string {
  let i = 0;
  return s
    .split("")
    .map((ch) => {
      if (/[a-zA-Z]/.test(ch)) {
        return i++ % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase();
      }
      return ch;
    })
    .join("");
}

function toDotCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .join(".");
}

/* ── mode map ── */

export type CaseMode =
  | "camelCase"
  | "PascalCase"
  | "title-case"
  | "sentence-case"
  | "kebab-case"
  | "snake_case"
  | "CONSTANT_CASE"
  | "alternating"
  | "dot.case";

const converters: Record<CaseMode, (s: string) => string> = {
  camelCase: toCamelCase,
  PascalCase: toPascalCase,
  "title-case": toTitleCase,
  "sentence-case": (s) => toSentenceCase(s.toLowerCase()),
  "kebab-case": toKebabCase,
  snake_case: toSnakeCase,
  CONSTANT_CASE: toConstantCase,
  alternating: toAlternatingCase,
  "dot.case": toDotCase,
};

const modeLabels: Record<CaseMode, string> = {
  camelCase: "camelCase",
  PascalCase: "PascalCase",
  "title-case": "Title Case",
  "sentence-case": "Sentence case",
  "kebab-case": "kebab-case",
  snake_case: "snake_case",
  CONSTANT_CASE: "CONSTANT_CASE",
  alternating: "aLtErNaTiNg CaSe",
  "dot.case": "dot.case",
};

const EXAMPLES = [
  "The Quick Brown Fox Jumps Over The Lazy Dog",
  "hello world THIS IS A TEST",
  "My Awesome Blog Post Title! (2024)",
  "convert THIS text to ANY case",
];

/* ── component ── */

interface SingleCaseToolProps {
  mode: CaseMode;
  placeholder?: string;
}

export default function SingleCaseTool({ mode, placeholder }: SingleCaseToolProps) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = converters[mode];
  const label = modeLabels[mode];

  const output = useMemo(() => (input ? convert(input) : ""), [input, convert]);

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

  const handleClear = useCallback(() => setInput(""), []);

  /* other conversions for quick comparison */
  const allModes: { mode: CaseMode; href: string }[] = [
    { mode: "camelCase", href: "/camelcase-converter" },
    { mode: "PascalCase", href: "/pascal-case-converter" },
    { mode: "title-case", href: "/title-case-converter" },
    { mode: "sentence-case", href: "/sentence-case-converter" },
    { mode: "kebab-case", href: "/kebab-case-converter" },
    { mode: "snake_case", href: "/snake-case-converter" },
    { mode: "CONSTANT_CASE", href: "/constant-case-converter" },
    { mode: "alternating", href: "/alternating-case-converter" },
    { mode: "dot.case", href: "/dot-case-converter" },
  ];
  const otherModes = allModes.filter((o) => o.mode !== mode);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Input */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="case-input" className="text-sm font-semibold text-gray-700">
            Input
          </label>
          <button
            onClick={handleClear}
            disabled={!input}
            className="px-3 py-1 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors disabled:opacity-40"
          >
            Clear
          </button>
        </div>
        <textarea
          id="case-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder ?? "Type or paste your text here..."}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-y transition-all"
          spellCheck={false}
          autoFocus
        />
      </div>

      {/* Example chips */}
      {!input && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-400 leading-7">Try:</span>
          {EXAMPLES.map((ex, i) => (
            <button
              key={i}
              onClick={() => setInput(ex)}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors truncate max-w-[240px]"
            >
              {ex}
            </button>
          ))}
        </div>
      )}

      {/* Primary output */}
      {output && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">
              {label} Output
            </label>
            <button
              onClick={handleCopy}
              className="px-4 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-mono text-base text-gray-900 select-all break-all min-h-[3.5rem]">
            {output}
          </div>
        </div>
      )}

      {/* Other conversions preview */}
      {input && (
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500">Other Formats</span>
          </div>
          <div className="divide-y divide-gray-50">
            {otherModes.map((o) => {
              const val = converters[o.mode](input);
              return (
                <div key={o.mode} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                  <a
                    href={o.href}
                    className="text-xs font-semibold text-gray-400 w-32 shrink-0 truncate hover:text-blue-600 transition-colors"
                    title={`${modeLabels[o.mode]} converter`}
                  >
                    {modeLabels[o.mode]} →
                  </a>
                  <span className="flex-1 min-w-0 font-mono text-sm text-gray-600 truncate" title={val}>
                    {val}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Stats */}
      {input && (
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>
            Characters: <strong className="text-gray-700">{input.length}</strong>
          </span>
          <span>
            Words:{" "}
            <strong className="text-gray-700">
              {input.trim().split(/\s+/).filter(Boolean).length}
            </strong>
          </span>
        </div>
      )}
    </div>
  );
}
