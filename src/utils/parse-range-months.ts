/**
 * Utility to parse a range like "Nov 2024 – Jan 2025"
 * into an array of { month, year } from start to end (inclusive).
 */
export function parseRangeOfMonths(rangeStr: string): {
  monthsList: { month: number; year: number }[];
} {
  // 1) Split the range by " – " => ["Nov 2024", "Jan 2025"]
  const [startStr, endStr] = rangeStr.split(" – ").map((s) => s.trim());
  if (!startStr || !endStr) {
    return { monthsList: [] };
  }

  // 2) Parse each side (e.g. "Nov 2024") => { month: 10, year: 2024 }
  const start = parseSingleMonthYear(startStr);
  const end = parseSingleMonthYear(endStr);

  // 3) Build the array by iterating month-by-month from start to end
  const monthsList: { month: number; year: number }[] = [];

  let currentYear = start.year;
  let currentMonth = start.month;

  while (
    currentYear < end.year ||
    (currentYear === end.year && currentMonth <= end.month)
  ) {
    monthsList.push({ month: currentMonth, year: currentYear });

    // increment
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return { monthsList };
}

/**
 * Helper to parse a single "MMM YYYY" string (e.g. "Nov 2024")
 * into { month, year }, where month is 0-based (0=Jan, 11=Dec).
 */
function parseSingleMonthYear(segment: string): {
  month: number;
  year: number;
} {
  // e.g. segment = "Nov 2024"
  const [monStr, yearStr] = segment.split(/\s+/); // split by whitespace
  const year = parseInt(yearStr, 10);

  // Convert month abbreviation to 0-based index
  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const month = monthMap[monStr] ?? 0; // default to 0 if not found
  return { month, year };
}
