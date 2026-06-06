"use client";

import { useState, useCallback, useMemo } from "react";

const LOREM_WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

const FIRST_SENTENCE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSentence(startWithLorem: boolean): string {
  if (startWithLorem) return FIRST_SENTENCE;
  const len = randomInt(6, 18);
  const words: string[] = [];
  for (let i = 0; i < len; i++) {
    words.push(LOREM_WORDS[randomInt(0, LOREM_WORDS.length - 1)]);
  }
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(sentenceCount: number, startWithLorem: boolean): string {
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(generateSentence(startWithLorem && i === 0));
  }
  return sentences.join(" ");
}

type OutputUnit = "paragraphs" | "sentences" | "words";

function generateText(count: number, unit: OutputUnit, startWithLorem: boolean): string {
  switch (unit) {
    case "paragraphs": {
      const paras: string[] = [];
      for (let i = 0; i < count; i++) {
        paras.push(generateParagraph(randomInt(4, 8), startWithLorem && i === 0));
      }
      return paras.join("\n\n");
    }
    case "sentences": {
      const sentences: string[] = [];
      for (let i = 0; i < count; i++) {
        sentences.push(generateSentence(startWithLorem && i === 0));
      }
      return sentences.join(" ");
    }
    case "words": {
      const words: string[] = [];
      const start = startWithLorem ? "Lorem ipsum dolor sit amet".split(" ") : [];
      for (const w of start) {
        if (words.length >= count) break;
        words.push(w);
      }
      while (words.length < count) {
        words.push(LOREM_WORDS[randomInt(0, LOREM_WORDS.length - 1)]);
      }
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      return words.join(" ") + ".";
    }
  }
}

export default function LoremIpsumTool() {
  const [count, setCount] = useState(5);
  const [unit, setUnit] = useState<OutputUnit>("paragraphs");
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => generateText(count, unit, startWithLorem),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, unit, startWithLorem, seed]
  );

  const wordCount = output ? output.split(/\s+/).length : 0;

  const handleCopy = useCallback(async () => {
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
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label htmlFor="lorem-count" className="text-sm font-medium text-gray-700">Generate</label>
          <input
            id="lorem-count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
            className="w-20 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          {(["paragraphs", "sentences", "words"] as OutputUnit[]).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                unit === u
                  ? "bg-blue-50 text-blue-700"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              } ${u !== "words" ? "border-r border-gray-200" : ""}`}
            >
              {u.charAt(0).toUpperCase() + u.slice(1)}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Start with &quot;Lorem ipsum...&quot;
        </label>

        <button
          onClick={() => setSeed((s) => s + 1)}
          className="px-3 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-600 transition-colors"
        >
          Regenerate
        </button>
      </div>

      <div className="relative mb-2">
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={handleCopy}
            className="px-3 py-1 text-xs rounded-lg border transition-colors bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <textarea
          value={output}
          readOnly
          rows={12}
          className="w-full px-4 py-3 border-2 border-gray-100 bg-gray-50 rounded-xl text-base outline-none resize-y"
          spellCheck={false}
        />
      </div>
      <div className="text-xs text-gray-400 text-right">
        {wordCount} words &middot; {output.length} characters
      </div>
    </div>
  );
}
