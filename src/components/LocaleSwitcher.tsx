"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  en: "EN",
  ja: "JA",
  de: "DE",
  es: "ES",
  pt: "PT",
  fr: "FR",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value as Locale });
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      aria-label="Language"
      className="text-xs border border-gray-200 rounded px-1.5 py-1 text-gray-600 bg-white hover:border-gray-400 transition-colors cursor-pointer"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {labels[l]}
        </option>
      ))}
    </select>
  );
}
