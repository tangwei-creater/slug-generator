"use client";

import { useState, useCallback, useMemo } from "react";

type LineOperation =
  | "dedupe"
  | "remove-empty"
  | "remove-breaks"
  | "sort-asc"
  | "sort-desc"
  | "reverse"
  | "trim"
  | "prefix"
  | "suffix"
  | "wrap-quotes"
  | "number-lines";

const OPERATION_LABELS: Record<LineOperation, string> = {
  dedupe: "Remove Duplicates",
  "remove-empty": "Remove Empty Lines",
  "remove-breaks": "Remove Line Breaks",
  "sort-asc": "Sort A→Z",
  "sort-desc": "Sort Z→A",
  reverse: "Reverse Order",
  trim: "Trim Whitespace",
  prefix: "Add Prefix",
  suffix: "Add Suffix",
  "wrap-quotes": "Wrap in Quotes",
  "number-lines": "Number Lines",
};

function processLines(text: string, op: LineOperation, extra: string): string {
  if (!text) return "";
  const lines = text.split("\n");

  switch (op) {
    case "dedupe": {
      const seen = new Set<string>();
      return lines
        .filter((l) => {
          const k = l.trim();
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        })
        .join("\n");
    }
    case "remove-empty":
      return lines.filter((l) => l.trim().length > 0).join("\n");
    case "remove-breaks":
      return lines
        .filter((l) => l.trim().length > 0)
        .map((l) => l.trim())
        .join(" ");
    case "sort-asc":
      return [...lines].sort((a, b) => a.localeCompare(b)).join("\n");
    case "sort-desc":
      return [...lines].sort((a, b) => b.localeCompare(a)).join("\n");
    case "reverse":
      return [...lines].reverse().join("\n");
    case "trim":
      return lines.map((l) => l.trim()).join("\n");
    case "prefix":
      return lines.map((l) => `${extra}${l}`).join("\n");
    case "suffix":
      return lines.map((l) => `${l}${extra}`).join("\n");
    case "wrap-quotes":
      return lines.map((l) => `"${l}"`).join("\n");
    case "number-lines":
      return lines.map((l, i) => `${i + 1}. ${l}`).join("\n");
  }
}

const EXAMPLES: Record<string, string> = {
  "Fruit list": "Apple\nBanana\nCherry\nApple\nDate\nBanana\nElderberry",
  "Code imports":
    'import React from "react"\nimport { useState } from "react"\nimport axios from "axios"\nimport React from "react"\nimport dayjs from "dayjs"',
  "Mixed lines":
    "  Hello World  \n\n  Foo Bar  \n\n  Baz Qux  \n\n  Hello World  ",
};

interface LineToolProps {
  defaultOp?: LineOperation;
  placeholder?: string;
}

export default function LineTool({
  defaultOp = "dedupe",
  placeholder,
}: LineToolProps) {
  const [input, setInput] = useState("");
  const [op, setOp] = useState<LineOperation>(defaultOp);
  const [extra, setExtra] = useState("");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => processLines(input, op, extra),
    [input, op, extra]
  );

  const inputLineCount = input ? input.split("\n").length : 0;
  const outputLineCount = output ? output.split("\n").length : 0;

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

  const showExtra = op === "prefix" || op === "suffix";

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Operation selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(OPERATION_LABELS) as LineOperation[]).map((o) => (
          <button
            key={o}
            onClick={() => setOp(o)}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
              op === o
                ? "bg-blue-50 border-blue-300 text-blue-700 font-semibold"
                : "bg-white border-gray-200 text-gray-600 hover:border-blue-200"
            }`}
          >
            {OPERATION_LABELS[o]}
          </button>
        ))}
      </div>

      {showExtra && (
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            {op === "prefix" ? "Prefix text:" : "Suffix text:"}
          </label>
          <input
            type="text"
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder={op === "prefix" ? "e.g. - " : 'e.g. ",\"'}
            className="w-48 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-blue-500 outline-none"
          />
        </div>
      )}

      {/* Input */}
      <div className="mb-4">
        <label
          htmlFor="line-input"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Paste your text (one item per line)
        </label>
        <textarea
          id="line-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            placeholder ??
            "Apple\nBanana\nCherry\nApple\nDate\nBanana"
          }
          className="w-full h-40 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          spellCheck={false}
          autoFocus
        />
        <div className="text-xs text-gray-400 mt-1">
          {inputLineCount} line{inputLineCount !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Examples */}
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

      {/* Output */}
      {output && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Result
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">
                {outputLineCount} line{outputLineCount !== 1 ? "s" : ""}
                {op === "dedupe" &&
                  inputLineCount > outputLineCount &&
                  ` (${inputLineCount - outputLineCount} removed)`}
              </span>
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
        <button
          onClick={() => setInput("")}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
