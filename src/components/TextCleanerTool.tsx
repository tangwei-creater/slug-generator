"use client";

import { useState, useCallback, useMemo } from "react";

interface CleanOption {
  key: string;
  label: string;
  fn: (s: string) => string;
}

const CLEAN_OPTIONS: CleanOption[] = [
  {
    key: "html",
    label: "Strip HTML tags",
    fn: (s: string) => s.replace(/<[^>]*>/g, ""),
  },
  {
    key: "zeroWidth",
    label: "Remove zero-width characters",
    fn: (s: string) =>
      s.replace(/[​‌‍‎‏﻿­⁠⁡⁢⁣⁤]/g, ""),
  },
  {
    key: "extraSpaces",
    label: "Collapse extra spaces",
    fn: (s: string) => s.replace(/[^\S\n]+/g, " "),
  },
  {
    key: "smartQuotes",
    label: "Normalize smart quotes",
    fn: (s: string) =>
      s
        .replace(/[‘’‚‛]/g, "'")
        .replace(/[“”„‟]/g, '"')
        .replace(/[–—]/g, "-")
        .replace(/…/g, "..."),
  },
  {
    key: "accents",
    label: "Remove accents/diacritics",
    fn: (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, ""),
  },
  {
    key: "emojis",
    label: "Remove emojis",
    fn: (s: string) =>
      s.replace(
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu,
        ""
      ),
  },
  {
    key: "urls",
    label: "Remove URLs",
    fn: (s: string) => s.replace(/https?:\/\/\S+/gi, ""),
  },
  {
    key: "emails",
    label: "Remove email addresses",
    fn: (s: string) => s.replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, ""),
  },
  {
    key: "nonAscii",
    label: "Remove non-ASCII characters",
    fn: (s: string) => s.replace(/[^\x00-\x7F]/g, ""),
  },
  {
    key: "numbers",
    label: "Remove numbers",
    fn: (s: string) => s.replace(/\d+/g, ""),
  },
  {
    key: "specialChars",
    label: "Remove special characters",
    fn: (s: string) => s.replace(/[^a-zA-Z0-9\s.,!?'\-]/g, ""),
  },
  {
    key: "trimLines",
    label: "Trim each line",
    fn: (s: string) =>
      s
        .split("\n")
        .map((l) => l.trim())
        .join("\n"),
  },
];

const EXAMPLES: Record<string, string> = {
  "HTML snippet":
    '<p>Hello <strong>World</strong>!</p>\n<a href="https://example.com">Click here</a>\n<br/><em>Formatted</em> text.',
  "Dirty paste":
    "Hello World — here’s some “smart” text…\n\nContact:  john@example.com   or visit https://example.com  ",
  "Accented text":
    "Café résumé naïve jalapeño piñata über straße exposé à la crème brûlée",
};

interface TextCleanerToolProps {
  defaultOptions?: string[];
  placeholder?: string;
}

export default function TextCleanerTool({
  defaultOptions = ["html", "zeroWidth", "extraSpaces"],
  placeholder,
}: TextCleanerToolProps) {
  const [input, setInput] = useState("");
  const [enabledOpts, setEnabledOpts] = useState<Set<string>>(
    new Set(defaultOptions)
  );
  const [copied, setCopied] = useState(false);

  const toggleOpt = (key: string) => {
    setEnabledOpts((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const output = useMemo(() => {
    if (!input) return "";
    let result = input;
    for (const opt of CLEAN_OPTIONS) {
      if (enabledOpts.has(opt.key)) {
        result = opt.fn(result);
      }
    }
    return result;
  }, [input, enabledOpts]);

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

  const charDiff = input.length - output.length;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        {CLEAN_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => toggleOpt(opt.key)}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
              enabledOpts.has(opt.key)
                ? "bg-blue-50 border-blue-300 text-blue-700 font-semibold"
                : "bg-white border-gray-200 text-gray-600 hover:border-blue-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label
          htmlFor="cleaner-input"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Paste your text
        </label>
        <textarea
          id="cleaner-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            placeholder ??
            '<p>Hello <strong>World</strong>!</p>\nPaste any "messy" text here...'
          }
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

      {output && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Cleaned text
            </label>
            <div className="flex items-center gap-3">
              {charDiff > 0 && (
                <span className="text-xs text-gray-400">
                  {charDiff} character{charDiff !== 1 ? "s" : ""} removed
                </span>
              )}
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
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
            Characters:{" "}
            <strong className="text-gray-700">{input.length}</strong>
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
