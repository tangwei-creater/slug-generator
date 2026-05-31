"use client";

import { useState, useCallback } from "react";

type CaseFormat = "camelCase" | "snake_case" | "PascalCase" | "kebab-case";

function toCamelCase(s: string): string {
  return s
    .replace(/[-_.\s]+(.)?/g, (_, ch) => (ch ? ch.toUpperCase() : ""))
    .replace(/^[A-Z]/, (ch) => ch.toLowerCase());
}

function toSnakeCase(s: string): string {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[-.\s]+/g, "_")
    .toLowerCase();
}

function toPascalCase(s: string): string {
  return s
    .replace(/[-_.\s]+(.)?/g, (_, ch) => (ch ? ch.toUpperCase() : ""))
    .replace(/^[a-z]/, (ch) => ch.toUpperCase());
}

function toKebabCase(s: string): string {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_.\s]+/g, "-")
    .toLowerCase();
}

const converters: Record<CaseFormat, (s: string) => string> = {
  camelCase: toCamelCase,
  snake_case: toSnakeCase,
  PascalCase: toPascalCase,
  "kebab-case": toKebabCase,
};

function convertKeys(obj: unknown, convert: (s: string) => string): unknown {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, convert));
  }
  if (obj !== null && typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      result[convert(key)] = convertKeys(value, convert);
    }
    return result;
  }
  return obj;
}

const EXAMPLES: Record<string, string> = {
  "API Response": `{
  "user_id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email_address": "john@example.com",
  "is_active": true,
  "created_at": "2024-01-15"
}`,
  "React Props": `{
  "userName": "Alice",
  "profileImage": "/img/alice.png",
  "isLoggedIn": true,
  "lastLoginDate": "2024-01-15",
  "accountSettings": {
    "darkMode": true,
    "fontSize": 14
  }
}`,
  "Database Row": `{
  "order_id": 42,
  "customer_name": "Bob Smith",
  "order_items": [
    {"product_id": 1, "unit_price": 29.99},
    {"product_id": 2, "unit_price": 49.99}
  ],
  "shipping_address": "123 Main St"
}`,
};

interface JsonKeyConverterToolProps {
  defaultFormat?: CaseFormat;
  placeholder?: string;
}

export default function JsonKeyConverterTool({
  defaultFormat = "camelCase",
  placeholder,
}: JsonKeyConverterToolProps) {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState<CaseFormat>(defaultFormat);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pretty, setPretty] = useState(true);

  const handleConvert = useCallback(() => {
    if (!input.trim()) return { output: "", err: null };
    try {
      const parsed = JSON.parse(input);
      const converted = convertKeys(parsed, converters[format]);
      return {
        output: pretty
          ? JSON.stringify(converted, null, 2)
          : JSON.stringify(converted),
        err: null,
      };
    } catch {
      return { output: "", err: "Invalid JSON — please check your input." };
    }
  }, [input, format, pretty]);

  const { output, err } = input.trim()
    ? handleConvert()
    : { output: "", err: null };

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

  const keyCount = (() => {
    if (!output) return 0;
    try {
      const countKeys = (o: unknown): number => {
        if (Array.isArray(o)) return o.reduce((s, i) => s + countKeys(i), 0);
        if (o && typeof o === "object")
          return Object.keys(o).length +
            Object.values(o).reduce((s: number, v) => s + countKeys(v), 0);
        return 0;
      };
      return countKeys(JSON.parse(output));
    } catch {
      return 0;
    }
  })();

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Format selector */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-gray-700">Convert to:</span>
        {(Object.keys(converters) as CaseFormat[]).map((f) => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
              format === f
                ? "bg-blue-50 border-blue-300 text-blue-700 font-semibold"
                : "bg-white border-gray-200 text-gray-600 hover:border-blue-200"
            }`}
          >
            {f}
          </button>
        ))}
        <label className="flex items-center gap-1.5 ml-auto text-sm text-gray-500">
          <input
            type="checkbox"
            checked={pretty}
            onChange={(e) => setPretty(e.target.checked)}
            className="rounded border-gray-300"
          />
          Pretty
        </label>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label
          htmlFor="json-input"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Paste JSON
        </label>
        <textarea
          id="json-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(null);
          }}
          placeholder={
            placeholder ??
            '{"user_name": "John", "is_active": true, "created_at": "2024-01-15"}'
          }
          className="w-full h-44 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          spellCheck={false}
          autoFocus
        />
      </div>

      {/* Examples */}
      {!input && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-400 leading-7">Try:</span>
          {Object.entries(EXAMPLES).map(([label, json]) => (
            <button
              key={label}
              onClick={() => setInput(json)}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Error */}
      {err && (
        <div className="mb-4 px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
          {err}
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Converted JSON
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">
                {keyCount} keys converted
              </span>
              <button
                onClick={handleCopy}
                className="px-4 py-1.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <pre className="w-full max-h-80 overflow-auto px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono bg-gray-50 text-gray-800 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}

      {input && (
        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <span>
            Characters:{" "}
            <strong className="text-gray-700">{input.length}</strong>
          </span>
          <button
            onClick={() => {
              setInput("");
              setError(null);
            }}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
