"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

interface NavCategory {
  label: string;
  tools: { href: string; name: string }[];
}

interface MobileNavProps {
  categories: NavCategory[];
  blogLabel: string;
}

export default function MobileNav({ categories, blogLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-50">
          <nav className="px-4 py-3 space-y-1">
            {categories.map((cat, i) => (
              <div key={cat.label}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {cat.label}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${expanded === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expanded === i && (
                  <div className="pl-3 pb-2 space-y-1 border-l-2 border-blue-100 ml-1">
                    {cat.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block py-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/blog"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {blogLabel}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
