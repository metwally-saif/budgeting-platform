/**
 * Helper to parse a month-year string into a month number and year number,
 * and provides utility to get the previous month's name.
 */
function parseMonthYear(monthYear: string): {
  month: number;
  year: number;
  geFollowingMonthName: () => string;
  getPreviousMonthName: () => string;
} {
  // Parse the input string, e.g., "Dec 2024" -> monthName = "Dec", year = "2024"
  const [monthName, yearStr] = monthYear.split(" ");
  const year = parseInt(yearStr, 10);

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

  const reverseMonthMap = Object.entries(monthMap).reduce(
    (acc, [key, value]) => {
      acc[value] = key;
      return acc;
    },
    {} as Record<number, string>,
  );

  const month = monthMap[monthName] ?? 0; // Fallback to Jan if unknown

  const getPreviousMonthName = (): string => {
    const prevMonthNum = month === 0 ? 11 : month - 1;
    return reverseMonthMap[prevMonthNum] || "Jan"; // Fallback to Jan if unknown
  };

  const geFollowingMonthName = (): string => {
    const nextMonthNum = month === 11 ? 0 : month + 1;
    return reverseMonthMap[nextMonthNum] || "Jan"; // Fallback to Jan if unknown
  };

  return { month, year, getPreviousMonthName, geFollowingMonthName };
}

export { parseMonthYear };
