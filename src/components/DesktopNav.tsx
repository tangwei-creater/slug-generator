"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface NavCategory {
  label: string;
  tools: { href: string; name: string }[];
}

interface DesktopNavProps {
  categories: NavCategory[];
  blogLabel: string;
}

export default function DesktopNav({ categories, blogLabel }: DesktopNavProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-1 text-sm text-gray-600">
      {categories.map((cat, i) => (
        <div
          key={cat.label}
          className="relative"
          onMouseEnter={() => setOpen(i)}
          onMouseLeave={() => setOpen(null)}
        >
          <button
            className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${
              open === i ? "text-gray-900 bg-gray-50" : "hover:text-gray-900"
            }`}
          >
            {cat.label}
            <svg
              className={`w-3 h-3 transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="absolute top-full left-0 pt-1 z-50">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[230px]">
                {cat.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    onClick={() => setOpen(null)}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <Link
        href="/blog"
        className="px-3 py-2 hover:text-gray-900 transition-colors"
      >
        {blogLabel}
      </Link>
    </nav>
  );
}
