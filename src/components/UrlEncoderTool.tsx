"use client";

import { useState, useCallback, useMemo } from "react";

type Mode = "encode" | "decode";

function urlEncode(s: string): string {
  try {
    return encodeURIComponent(s);
  } catch {
    return s;
  }
}

function urlDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

function fullUrlEncode(s: string): string {
  try {
    return encodeURI(s);
  } catch {
    return s;
  }
}

function fullUrlDecode(s: string): string {
  try {
    return decodeURI(s);
  } catch {
    return s;
  }
}

interface UrlEncoderToolProps {
  placeholder?: string;
}

export default function UrlEncoderTool({ placeholder }: UrlEncoderToolProps) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");
  const [fullUrl, setFullUrl] = useState(false);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    if (!input) return "";
    const fn = fullUrl
      ? mode === "encode" ? fullUrlEncode : fullUrlDecode
      : mode === "encode" ? urlEncode : urlDecode;
    return fn(input);
  }, [input, mode, fullUrl]);

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

  const handleSwap = useCallback(() => {
    setInput(output);
    setMode((m) => (m === "encode" ? "decode" : "encode"));
  }, [output]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              mode === "encode"
                ? "bg-blue-50 text-blue-700 border-r border-blue-200"
                : "bg-white text-gray-600 border-r border-gray-200 hover:bg-gray-50"
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              mode === "decode"
                ? "bg-blue-50 text-blue-700"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Decode
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={fullUrl}
            onChange={(e) => setFullUrl(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Full URL mode (encodeURI)
        </label>

        <button
          onClick={handleSwap}
          disabled={!output}
          className="ml-auto px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600 transition-colors disabled:opacity-40"
          title="Swap input/output"
        >
          &#8645; Swap
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="url-input" className="block text-sm font-semibold text-gray-700 mb-1">
          Input
        </label>
        <textarea
          id="url-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || "e.g. Hello World! or Hello%20World%21"}
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-y transition-all"
          spellCheck={false}
        />
        <div className="flex justify-end text-xs text-gray-400 mt-1">
          {input.length} characters
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="url-output" className="block text-sm font-semibold text-gray-700">
            Output
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => { setInput(""); }}
              className="px-3 py-1 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="px-3 py-1 text-xs rounded-lg border transition-colors disabled:opacity-40 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <textarea
          id="url-output"
          value={output}
          readOnly
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-100 bg-gray-50 rounded-xl text-base font-mono outline-none resize-y"
          spellCheck={false}
        />
        <div className="flex justify-end text-xs text-gray-400 mt-1">
          {output.length} characters
        </div>
      </div>

      <div className="text-xs text-gray-400 text-center">
        {fullUrl
          ? "encodeURI / decodeURI — preserves :, /, ?, #, &, ="
          : "encodeURIComponent / decodeURIComponent — encodes all special characters"}
      </div>
    </div>
  );
}
