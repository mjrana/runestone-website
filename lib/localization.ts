export type Locale = "en" | "no" | "ar" | "bn";

export const DEFAULT_LOCALE: Locale = "en";

export function pickLocale<T extends Record<string, any> | null | undefined>(
  value: T,
  locale: Locale = DEFAULT_LOCALE
): any {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (value[locale]) return value[locale];
  if (value["en"]) return value["en"];
  return Object.values(value)[0];
}
