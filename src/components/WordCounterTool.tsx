"use client";

import { useState, useMemo, useCallback } from "react";

function countWords(s: string): number {
  const trimmed = s.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function countSentences(s: string): number {
  const trimmed = s.trim();
  if (!trimmed) return 0;
  return (trimmed.match(/[.!?]+(?:\s|$)/g) || []).length || (trimmed.length > 0 ? 1 : 0);
}

function countParagraphs(s: string): number {
  if (!s.trim()) return 0;
  return s.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 1;
}

function readingTime(words: number): string {
  const mins = Math.ceil(words / 200);
  return mins < 1 ? "< 1 min" : `${mins} min`;
}

function speakingTime(words: number): string {
  const mins = Math.ceil(words / 130);
  return mins < 1 ? "< 1 min" : `${mins} min`;
}

function topKeywords(s: string, n: number): { word: string; count: number }[] {
  if (!s.trim()) return [];
  const stop = new Set(["the","a","an","and","or","but","in","on","at","to","for","of","with","by","is","it","this","that","was","are","be","has","have","had","do","does","did","will","would","could","should","can","may","not","from","as","its"]);
  const words: Record<string, number> = {};
  s.toLowerCase()
    .replace(/[^a-zA-Z0-9\sÀ-ɏ　-鿿가-힯]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !stop.has(w))
    .forEach((w) => { words[w] = (words[w] || 0) + 1; });
  return Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([word, count]) => ({ word, count }));
}

interface WordCounterToolProps {
  placeholder?: string;
}

export default function WordCounterTool({ placeholder }: WordCounterToolProps) {
  const [input, setInput] = useState("");
  const [pasted, setPasted] = useState(false);
  const [goalInput, setGoalInput] = useState("");
  const goal = goalInput ? parseInt(goalInput, 10) || 0 : 0;

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
      setPasted(true);
      setTimeout(() => setPasted(false), 1500);
    } catch {
      /* clipboard permission denied — ignore */
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (!input) return;
    const blob = new Blob([input], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [input]);

  const handleClear = useCallback(() => setInput(""), []);

  const stats = useMemo(() => {
    const chars = input.length;
    const charsNoSpace = input.replace(/\s/g, "").length;
    const words = countWords(input);
    const sentences = countSentences(input);
    const paragraphs = countParagraphs(input);
    const lines = input ? input.split("\n").length : 0;
    const keywords = topKeywords(input, 5);
    return {
      chars,
      charsNoSpace,
      words,
      sentences,
      paragraphs,
      lines,
      readingTime: readingTime(words),
      speakingTime: speakingTime(words),
      keywords,
    };
  }, [input]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <StatCard label="Words" value={stats.words} />
        <StatCard label="Characters" value={stats.chars} />
        <StatCard label="Sentences" value={stats.sentences} />
        <StatCard label="Paragraphs" value={stats.paragraphs} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Characters (no spaces)" value={stats.charsNoSpace} />
        <StatCard label="Lines" value={stats.lines} />
        <StatCard label="Reading time" value={stats.readingTime} />
        <StatCard label="Speaking time" value={stats.speakingTime} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Word Goal</label>
        <input
          type="number"
          min="0"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          placeholder="e.g. 500"
          className="w-24 px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400 transition-colors"
        />
        {goal > 0 && (
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  stats.words >= goal ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: `${Math.min((stats.words / goal) * 100, 100)}%` }}
              />
            </div>
            <span className={`text-sm font-medium whitespace-nowrap ${
              stats.words >= goal ? "text-green-600" : "text-gray-500"
            }`}>
              {stats.words}/{goal} {stats.words >= goal ? "✓" : ""}
            </span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-end gap-2 mb-2">
          <button
            onClick={handlePaste}
            className="px-3 py-1 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
          >
            {pasted ? "Pasted!" : "📋 Paste"}
          </button>
          <button
            onClick={handleDownload}
            disabled={!input}
            className="px-3 py-1 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors disabled:opacity-40"
          >
            ↓ Download TXT
          </button>
          <button
            onClick={handleClear}
            disabled={!input}
            className="px-3 py-1 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors disabled:opacity-40"
          >
            Clear
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || "Paste or type your text here..."}
          rows={10}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-y transition-all"
          spellCheck={false}
        />
      </div>

      {stats.keywords.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Top Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {stats.keywords.map((kw) => (
              <span
                key={kw.word}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm"
              >
                <span className="text-gray-700">{kw.word}</span>
                <span className="text-xs text-gray-400">{kw.count}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 text-center">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}
