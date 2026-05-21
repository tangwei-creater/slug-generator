"use client";

import { useState, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { slugify, DEFAULT_OPTIONS, type SlugOptions } from "@/lib/slugify";

interface SlugToolProps {
  defaultSeparator?: string;
  defaultStripNumbers?: boolean;
  defaultMaxLength?: number;
  placeholder?: string;
}

const EXAMPLES = [
  "My Awesome Blog Post Title! (2024)",
  "Ünîcödé & Spëcîal Châräctérs",
  "The Best Guide to Learning React in 2024",
  "$100 Sale — 50% OFF Everything!",
];

export default function SlugTool({
  defaultSeparator = "-",
  defaultStripNumbers = false,
  defaultMaxLength = 0,
  placeholder,
}: SlugToolProps) {
  const t = useTranslations("tool");
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);
  const [options, setOptions] = useState<SlugOptions>({
    ...DEFAULT_OPTIONS,
    separator: defaultSeparator,
    stripNumbers: defaultStripNumbers,
    maxLength: defaultMaxLength,
  });
  const outputRef = useRef<HTMLInputElement>(null);
  const bulkOutputRef = useRef<HTMLTextAreaElement>(null);

  const slug = bulkMode ? "" : slugify(input, options);

  const bulkSlugs = bulkMode
    ? input
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => slugify(line, options))
    : [];

  const bulkOutput = bulkSlugs.join("\n");

  const handleCopy = useCallback(
    async (text?: string) => {
      const content = text ?? slug;
      if (!content) return;
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        if (!text && outputRef.current) {
          outputRef.current.select();
          document.execCommand("copy");
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    [slug]
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setBulkMode(false)}
          className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-colors ${
            !bulkMode
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {t("singleMode")}
        </button>
        <button
          onClick={() => setBulkMode(true)}
          className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-colors ${
            bulkMode
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {t("bulkMode")}
        </button>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label
          htmlFor="text-input"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {bulkMode ? t("bulkInputLabel") : t("inputLabel")}
        </label>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            bulkMode
              ? t("bulkPlaceholder")
              : (placeholder ?? t("placeholder"))
          }
          className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none bg-white"
          autoFocus
        />
      </div>

      {/* Example Buttons */}
      {!bulkMode && !input && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-gray-400 leading-7">{t("tryExample")}</span>
          {EXAMPLES.map((ex, i) => (
            <button
              key={i}
              onClick={() => setInput(ex)}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors truncate max-w-[200px]"
            >
              {ex}
            </button>
          ))}
        </div>
      )}

      {/* Options */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          {t("options")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              {t("separator")}
            </label>
            <select
              value={options.separator}
              onChange={(e) =>
                setOptions({ ...options, separator: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:border-blue-500 outline-none"
            >
              <option value="-">{t("hyphen")}</option>
              <option value="_">{t("underscore")}</option>
              <option value=".">{t("dot")}</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              {t("maxLength")}
            </label>
            <input
              type="number"
              min={0}
              max={200}
              value={options.maxLength}
              onChange={(e) =>
                setOptions({
                  ...options,
                  maxLength: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:border-blue-500 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Toggle
              label={t("lowercase")}
              checked={options.lowercase}
              onChange={(v) => setOptions({ ...options, lowercase: v })}
            />
            <Toggle
              label={t("transliterate")}
              checked={options.transliterate}
              onChange={(v) => setOptions({ ...options, transliterate: v })}
            />
            <Toggle
              label={t("stripNumbers")}
              checked={options.stripNumbers}
              onChange={(v) => setOptions({ ...options, stripNumbers: v })}
            />
            <Toggle
              label={t("removeStopWords")}
              checked={options.removeStopWords}
              onChange={(v) =>
                setOptions({ ...options, removeStopWords: v })
              }
            />
          </div>
        </div>
      </div>

      {/* Output */}
      {bulkMode ? (
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t("bulkOutputLabel")}
          </label>
          <textarea
            ref={bulkOutputRef}
            readOnly
            value={bulkOutput}
            className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-mono bg-gray-50 text-blue-700 outline-none resize-none"
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleCopy(bulkOutput)}
              disabled={!bulkOutput}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {copied ? t("copied") : t("copyAll")}
            </button>
            <button
              onClick={() => {
                setInput("");
                setCopied(false);
              }}
              className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors text-sm"
            >
              {t("clear")}
            </button>
            {bulkSlugs.length > 0 && (
              <span className="text-sm text-gray-500 leading-10">
                {bulkSlugs.length} {t("slugsGenerated")}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t("outputLabel")}
          </label>
          <div className="flex gap-2">
            <input
              ref={outputRef}
              type="text"
              readOnly
              value={slug}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-lg font-mono bg-gray-50 text-blue-700 select-all outline-none"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <button
              onClick={() => handleCopy()}
              disabled={!slug}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
            >
              {copied ? t("copied") : t("copy")}
            </button>
            <button
              onClick={() => handleCopy(`/${slug}`)}
              disabled={!slug}
              className="px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap text-sm"
              title={t("copyAsPath")}
            >
              /path
            </button>
            <button
              onClick={() => {
                setInput("");
                setCopied(false);
              }}
              className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              {t("clear")}
            </button>
          </div>
        </div>
      )}

      {!bulkMode && slug && (
        <div className="flex gap-4 text-sm text-gray-500">
          <span>
            {t("characters")}:{" "}
            <strong className="text-gray-700">{slug.length}</strong>
          </span>
          <span>
            {t("words")}:{" "}
            <strong className="text-gray-700">
              {slug.split(options.separator).filter(Boolean).length}
            </strong>
          </span>
        </div>
      )}
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}
