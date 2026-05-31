"use client";

import { useState, useCallback } from "react";
import { slugify, DEFAULT_OPTIONS } from "@/lib/slugify";

interface CaseResult {
  label: string;
  value: string;
  link?: string;
}

function toSentenceCase(s: string): string {
  return s.replace(/(^\s*|[.!?]\s+)(\w)/g, (_, pre, ch) => pre + ch.toUpperCase())
    .replace(/^(\w)/, (_, ch) => ch.toUpperCase());
}

function toTitleCase(s: string): string {
  const minor = new Set(["a","an","the","and","but","or","nor","in","on","at","to","for","of","with","by","as","is"]);
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
    .map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
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

function toScreamingSnakeCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toUpperCase())
    .join("_");
}

function toAlternatingCase(s: string): string {
  let i = 0;
  return s.split("").map((ch) => {
    if (/[a-zA-Z]/.test(ch)) {
      return i++ % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase();
    }
    return ch;
  }).join("");
}

function toInverseCase(s: string): string {
  return s.split("").map((ch) => {
    if (ch === ch.toUpperCase()) return ch.toLowerCase();
    return ch.toUpperCase();
  }).join("");
}

function toDotCase(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .join(".");
}

const EXAMPLES = [
  "The Quick Brown Fox Jumps Over The Lazy Dog",
  "hello world THIS IS A TEST",
  "My Awesome Blog Post Title! (2024)",
  "convert THIS text to ANY case",
];

export default function CaseConverterTool({ placeholder }: { placeholder?: string }) {
  const [input, setInput] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = useCallback(async (text: string, idx: number) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  }, []);

  const raw = input || "";

  const results: CaseResult[] = raw
    ? [
        { label: "lowercase", value: raw.toLowerCase() },
        { label: "UPPERCASE", value: raw.toUpperCase() },
        { label: "Sentence case", value: toSentenceCase(raw.toLowerCase()), link: "/sentence-case-converter" },
        { label: "Title Case", value: toTitleCase(raw), link: "/title-case-converter" },
        { label: "camelCase", value: toCamelCase(raw), link: "/camelcase-converter" },
        { label: "PascalCase", value: toPascalCase(raw) },
        { label: "snake_case", value: toSnakeCase(raw), link: "/snake-case-converter" },
        { label: "SCREAMING_SNAKE", value: toScreamingSnakeCase(raw) },
        { label: "kebab-case", value: toKebabCase(raw), link: "/kebab-case-converter" },
        { label: "dot.case", value: toDotCase(raw) },
        { label: "aLtErNaTiNg", value: toAlternatingCase(raw) },
        { label: "iNVERSE cASE", value: toInverseCase(raw) },
        { label: "url-slug", value: slugify(raw, DEFAULT_OPTIONS), link: "/" },
      ]
    : [];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <label htmlFor="case-input" className="block text-sm font-semibold text-gray-700 mb-2">
          Enter your text
        </label>
        <textarea
          id="case-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder ?? "e.g. The Quick Brown Fox Jumps Over The Lazy Dog"}
          className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          autoFocus
        />
      </div>

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

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((r, idx) => (
            <div
              key={r.label}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors group"
            >
              <span className="text-xs font-semibold text-gray-400 w-36 shrink-0 truncate">
                {r.link ? (
                  <a href={r.link} className="hover:text-blue-600 transition-colors" title={`${r.label} converter`}>
                    {r.label} →
                  </a>
                ) : (
                  r.label
                )}
              </span>
              <span
                className="flex-1 min-w-0 font-mono text-sm text-gray-800 truncate select-all cursor-text"
                title={r.value}
              >
                {r.value}
              </span>
              <button
                onClick={() => handleCopy(r.value, idx)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors shrink-0"
              >
                {copiedIdx === idx ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      )}

      {input && (
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>Characters: <strong className="text-gray-700">{input.length}</strong></span>
          <span>Words: <strong className="text-gray-700">{input.trim().split(/\s+/).filter(Boolean).length}</strong></span>
        </div>
      )}
    </div>
  );
}
