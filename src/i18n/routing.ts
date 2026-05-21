import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ja", "de", "es", "pt", "fr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
