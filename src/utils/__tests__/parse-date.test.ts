import { describe, it, expect } from 'vitest';
import { parseMonthYear } from '../parse-month-year';
import { parseRangeOfMonths } from '../parse-range-months';

describe('parseMonthYear', () => {
  it('parses Dec 2024 correctly and returns previous and following months', () => {
    const result = parseMonthYear('Dec 2024');
    expect(result.month).toBe(11);
    expect(result.year).toBe(2024);
    expect(result.getPreviousMonthName()).toBe('Nov');
    expect(result.geFollowingMonthName()).toBe('Jan');
  });
});

describe('parseRangeOfMonths', () => {
  it('returns all months inclusive between Nov 2024 and Jan 2025', () => {
    const { monthsList } = parseRangeOfMonths('Nov 2024 – Jan 2025');
    expect(monthsList).toEqual([
      { month: 10, year: 2024 },
      { month: 11, year: 2024 },
      { month: 0, year: 2025 },
    ]);
  });
});
