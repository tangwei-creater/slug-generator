"use client";

import { useState, useMemo } from "react";

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

      <div className="mb-4">
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
