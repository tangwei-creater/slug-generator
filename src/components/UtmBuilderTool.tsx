"use client";

import { useState, useCallback, useMemo } from "react";

interface UtmParams {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

function buildUtmUrl(p: UtmParams): string {
  if (!p.url) return "";
  let base = p.url.trim();
  if (!/^https?:\/\//i.test(base)) base = "https://" + base;

  try {
    const url = new URL(base);
    if (p.source) url.searchParams.set("utm_source", p.source.trim());
    if (p.medium) url.searchParams.set("utm_medium", p.medium.trim());
    if (p.campaign) url.searchParams.set("utm_campaign", p.campaign.trim());
    if (p.term) url.searchParams.set("utm_term", p.term.trim());
    if (p.content) url.searchParams.set("utm_content", p.content.trim());
    return url.toString();
  } catch {
    return "";
  }
}

const MEDIUM_PRESETS = ["cpc", "email", "social", "organic", "referral", "display", "affiliate"];

interface UtmBuilderToolProps {
  placeholder?: string;
}

export default function UtmBuilderTool({ placeholder }: UtmBuilderToolProps) {
  const [params, setParams] = useState<UtmParams>({
    url: "",
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
  });
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => buildUtmUrl(params), [params]);

  const update = useCallback((key: keyof UtmParams, value: string) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  }, []);

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

  const handleClear = useCallback(() => {
    setParams({ url: "", source: "", medium: "", campaign: "", term: "", content: "" });
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4 mb-6">
        <Field
          label="Website URL *"
          hint="The full URL of the page you want to track"
          value={params.url}
          onChange={(v) => update("url", v)}
          placeholder={placeholder || "https://example.com/landing-page"}
        />
        <Field
          label="Campaign Source (utm_source) *"
          hint="Where the traffic comes from: google, newsletter, twitter"
          value={params.source}
          onChange={(v) => update("source", v)}
          placeholder="e.g. google, facebook, newsletter"
        />
        <div>
          <Field
            label="Campaign Medium (utm_medium) *"
            hint="Marketing medium: cpc, email, social, organic"
            value={params.medium}
            onChange={(v) => update("medium", v)}
            placeholder="e.g. cpc, email, social"
          />
          <div className="flex flex-wrap gap-1.5 mt-2">
            {MEDIUM_PRESETS.map((m) => (
              <button
                key={m}
                onClick={() => update("medium", m)}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                  params.medium === m
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "border-gray-200 text-gray-500 hover:border-blue-200"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <Field
          label="Campaign Name (utm_campaign) *"
          hint="Product, promo code, or slogan: spring_sale, product_launch"
          value={params.campaign}
          onChange={(v) => update("campaign", v)}
          placeholder="e.g. spring_sale, product_launch"
        />
        <Field
          label="Campaign Term (utm_term)"
          hint="Optional: paid search keywords"
          value={params.term}
          onChange={(v) => update("term", v)}
          placeholder="e.g. running+shoes"
        />
        <Field
          label="Campaign Content (utm_content)"
          hint="Optional: differentiate ads or links pointing to the same URL"
          value={params.content}
          onChange={(v) => update("content", v)}
          placeholder="e.g. banner_ad, text_link"
        />
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-gray-700">Generated URL</label>
          <div className="flex gap-2">
            <button
              onClick={handleClear}
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
          value={output}
          readOnly
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-100 bg-gray-50 rounded-xl text-sm font-mono outline-none resize-y break-all"
          spellCheck={false}
        />
        {output && (
          <div className="text-xs text-gray-400 text-right mt-1">
            {output.length} characters
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-0.5">{label}</label>
      <p className="text-xs text-gray-400 mb-1">{hint}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
        spellCheck={false}
      />
    </div>
  );
}
