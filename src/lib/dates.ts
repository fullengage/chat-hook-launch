export const DEFAULT_MARKET_EDITION = "2026-10";

const DAY_MS = 86_400_000;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const EDITION_YM_RE = /^(\d{4})-(\d{2})/;

/**
 * Parses an ISO date or timestamp into a valid Date, returning null if missing or malformed.
 */
export function parseIsoDate(
  iso: string | null | undefined,
  timeSuffix = "T00:00:00Z",
): Date | null {
  if (typeof iso !== "string") return null;
  const trimmed = iso.trim();
  if (!trimmed) return null;
  const normalized = ISO_DATE_RE.test(trimmed) && timeSuffix ? `${trimmed}${timeSuffix}` : trimmed;
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Normalizes a YYYY-MM edition string, validating the month range and falling back safely.
 */
export function normalizeEditionMonth(
  raw: string | null | undefined,
  fallback = DEFAULT_MARKET_EDITION,
): string {
  if (typeof raw !== "string") return fallback;
  const match = EDITION_YM_RE.exec(raw.trim());
  if (!match) return fallback;
  const month = Number(match[2]);
  if (!Number.isInteger(month) || month < 1 || month > 12) return fallback;
  const ym = `${match[1]}-${match[2]}`;
  const probe = new Date(`${ym}-15T00:00:00Z`);
  return Number.isNaN(probe.getTime()) ? fallback : ym;
}

/**
 * Formats a YYYY-MM edition string for display without risking RangeError.
 */
export function formatEditionLabel(
  edition: string | null | undefined,
  intlLocale: string,
  monthStyle: "short" | "long" = "short",
): string {
  const ym = normalizeEditionMonth(edition);
  const date = new Date(`${ym}-15T00:00:00Z`);
  try {
    return new Intl.DateTimeFormat(intlLocale, {
      month: monthStyle,
      year: "numeric",
      timeZone: "UTC",
    }).format(date);
  } catch {
    return ym;
  }
}

/**
 * Safely formats a Date or ISO string with Intl.DateTimeFormat, returning fallback on invalid input.
 */
export function safeFormatDate(
  value: Date | string | null | undefined,
  intlLocale: string,
  options: Intl.DateTimeFormatOptions,
  fallback = "",
): string {
  let date: Date | null = null;
  if (value instanceof Date) {
    date = Number.isNaN(value.getTime()) ? null : value;
  } else if (typeof value === "string") {
    const suffix = options.timeZone === "UTC" ? "T00:00:00Z" : "";
    date = parseIsoDate(value, suffix);
  }
  if (!date) return fallback;
  try {
    return new Intl.DateTimeFormat(intlLocale, options).format(date);
  } catch {
    return fallback;
  }
}

/**
 * Safely formats an inclusive ISO date range, guarding invalid dates and locale formatRange errors.
 */
export function safeFormatRange(
  start: string | null | undefined,
  end: string | null | undefined,
  intlLocale: string,
  options: Intl.DateTimeFormatOptions,
  opts?: { join?: string; fallback?: string },
): string {
  const a = parseIsoDate(start, "T00:00:00Z");
  const b = parseIsoDate(end, "T00:00:00Z");
  if (!a || !b) return opts?.fallback ?? "";
  try {
    const formatter = new Intl.DateTimeFormat(intlLocale, {
      ...options,
      timeZone: options.timeZone ?? "UTC",
    }) as Intl.DateTimeFormat & { formatRange?: (d1: Date, d2: Date) => string };
    const formatted =
      typeof formatter.formatRange === "function"
        ? formatter.formatRange(a, b)
        : `${formatter.format(a)} – ${formatter.format(b)}`;
    return opts?.join ? formatted.replace(/\s*–\s*/, opts.join) : formatted;
  } catch {
    return opts?.fallback ?? "";
  }
}

/**
 * Checks whether an ISO date falls on or after nowMs (using end-of-day UTC for YYYY-MM-DD strings).
 */
export function isIsoDateOnOrAfter(iso: string | null | undefined, nowMs: number): boolean {
  const date = parseIsoDate(iso, "T23:59:59Z");
  return Boolean(date && date.getTime() >= nowMs);
}

/**
 * Computes whole days remaining until an ISO date, or null if the date is invalid.
 */
export function daysUntilIsoDate(iso: string | null | undefined, nowMs: number): number | null {
  const date = parseIsoDate(iso, "T00:00:00Z");
  return date ? Math.ceil((date.getTime() - nowMs) / DAY_MS) : null;
}
