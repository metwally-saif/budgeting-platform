import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DonutChart from "./TotalSpendingDonutChart";
import {
  useListHistoryExpenseByUserId,
  useListExpenseByUserId,
  ExpenseTypeWithExpenses,
} from "../hooks";
import { parseMonthYear } from "../utils/parse-month-year";
import { useCurrency } from "../utils/get-currency";
import {
  Expense,
  ExpenseCategory,
  HistoryExpense,
} from "../../amplify/graphql/API";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

/**
 * Main component that shows a Spending Breakdown
 */
function SpendingBreakdownView(): JSX.Element {
  const getCurrency = useCurrency();
  const { historyExpenses } = useListHistoryExpenseByUserId();
  const { expenseTypesWithExpenses } = useListExpenseByUserId();
  const [categorySpending, setCategorySpending] = useState<
    Record<string, number>
  >({});
  const [groupSpending, setGroupSpending] = useState<Record<string, number>>(
    {},
  );

  // States for month/year, category, account, and view mode
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    new Date().toLocaleString("default", { month: "short", year: "numeric" }),
  );
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"categories" | "groups">(
    "categories",
  );

  const handlePrevMonth = () => {
    const { month, year, getPreviousMonthName } =
      parseMonthYear(selectedMonthYear);
    const prevMonth = getPreviousMonthName();
    const prevYear = month === 0 ? year - 1 : year;
    setSelectedMonthYear(`${prevMonth} ${prevYear}`);
  };
  const handleNextMonth = () => {
    const { month, year, getFollowingMonthName } =
      parseMonthYear(selectedMonthYear);
    const nextMonth = getFollowingMonthName();
    const nextYear = month === 11 ? year + 1 : year;
    setSelectedMonthYear(`${nextMonth} ${nextYear}`);
  };

  // Dropdown changes
  const handleCategoryChange = (e: SelectChangeEvent) => {
    setSelectedCategory(e.target.value);
  };

  // Toggle between categories / groups
  const handleViewModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: "categories" | "groups" | null,
  ) => {
    if (newMode) {
      setViewMode(newMode);
    }
  };

  /**
   * Memoized calculations for the selected month
   *    - filteredExpenses
   *   - totalSpending
   *   - averageDailySpending
   *   - largestOutflow
   *   - mostFrequentGroup
   */
  const {
    filteredExpenses,
    totalSpending,
    averageDailySpending,
    largestOutflow,
    mostFrequentGroup,
  } = useMemo(() => {
    if (!expenseTypesWithExpenses || !historyExpenses) {
      return {
        filteredExpenses: [],
        totalSpending: 0,
        averageDailySpending: 0,
        largestOutflow: 0,
        mostFrequentGroup: "n/a",
      };
    }

    // 1. Parse the selectedMonthYear => {month, year}
    const { month, year } = parseMonthYear(selectedMonthYear);

    // 2. Determine if the selected month is the current month
    const now = new Date();
    const isCurrentMonth =
      now.getFullYear() === year && now.getMonth() === month;

    // 3. Handle current month logic
    let filteredExpenses: Expense[] | HistoryExpense[] = [];
    let totalSpending = 0;

    if (isCurrentMonth) {
      // If the selected month is the current month, calculate expenses from `expenseTypesWithExpenses`
      const allCurrentMonthExpenses = expenseTypesWithExpenses.flatMap(
        (etw: ExpenseTypeWithExpenses) => etw.expenses,
      );

      // Filter by selected category
      filteredExpenses = allCurrentMonthExpenses.filter((exp) => {
        const categoryMatch =
          selectedCategory === "All Categories" ||
          exp.category === selectedCategory;
        return categoryMatch;
      });

      // Calculate total current month spending
      totalSpending = filteredExpenses.reduce(
        (sum, exp) => sum + (exp.assigned || 0),
        0,
      );
    } else {
      // 4. Handle past month logic
      filteredExpenses = historyExpenses.filter((he) => {
        const historyDate = new Date(he.date);
        const isSameYear = historyDate.getFullYear() === year;
        const isSameMonth = historyDate.getMonth() === month;

        return isSameYear && isSameMonth;
      });

      // Calculate total historical spending for the selected past month
      totalSpending = filteredExpenses.reduce(
        (sum, he) => sum + he.assigned,
        0,
      );
    }

    // 5. Calculate average daily spending for the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const averageDailySpending =
      daysInMonth > 0 ? totalSpending / daysInMonth : 0;

    // 6. Determine the largest outflow
    const largestOutflow = filteredExpenses.reduce(
      (max, exp) => Math.max(max, exp.assigned || 0),
      0,
    );

    // 7. Determine the most frequent group for the current month
    let mostFrequentGroup = "n/a";

    const freqMap: Record<string, number> = {};
    filteredExpenses.forEach((exp) => {
      const typeId =
        "expenseTypeId" in exp && exp.expenseTypeId
          ? exp.expenseTypeId
          : "none";
      freqMap[typeId] = (freqMap[typeId] || 0) + 1;
    });

    let mostFrequentTypeId: string | null = null;
    let maxCount = 0;
    Object.entries(freqMap).forEach(([typeId, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequentTypeId = typeId;
      }
    });

    if (mostFrequentTypeId && mostFrequentTypeId !== "none") {
      const foundExpType = expenseTypesWithExpenses.find(
        (etw) => etw.expenseType.id === mostFrequentTypeId,
      );
      if (foundExpType) {
        mostFrequentGroup = foundExpType.expenseType.name;
      }
    }

    return {
      filteredExpenses,
      totalSpending,
      averageDailySpending,
      largestOutflow,
      mostFrequentGroup,
    };
  }, [
    expenseTypesWithExpenses,
    historyExpenses,
    selectedMonthYear,
    selectedCategory,
  ]);

  useEffect(() => {
    // Calculate category spending
    const newCategorySpending: Record<string, number> = {};
    if (filteredExpenses) {
      Object.values(ExpenseCategory).forEach((category) => {
        const spending = filteredExpenses
          .filter(
            (exp): exp is Expense =>
              "category" in exp && exp.category === category,
          )
          .reduce((sum, exp) => sum + (exp.assigned || 0), 0);
        if (spending > 0) {
          newCategorySpending[category] = spending;
        }
      });
    }
    setCategorySpending(newCategorySpending);

    // Calculate group spending
    const newGroupSpending: Record<string, number> = {};
    filteredExpenses.forEach((expense) => {
      const spending = expense.assigned || 0;
      const groupId = expense.expenseTypeId || "unknown";
      newGroupSpending[groupId] = (newGroupSpending[groupId] || 0) + spending;
    });
    setGroupSpending(newGroupSpending);
  }, [filteredExpenses, expenseTypesWithExpenses]);

  return (
    <Paper
      sx={{
        mt: 2,
        p: 2,
        backgroundColor: "#f5f8fa",
        minHeight: "70vh",
      }}
      elevation={0}
    >
      {/* Header / Toolbar */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        {/* Left Section (Title) */}
        <Typography variant="h5" fontWeight="bold">
          Spending Breakdown
        </Typography>
      </Box>

      {/* Filter Row (Month, Categories, Accounts) */}
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        sx={{
          backgroundColor: "#e9edf2",
          p: 1.5,
          borderRadius: 2,
        }}
      >
        {/* Month Navigation */}
        <IconButton onClick={handlePrevMonth}>
          <ArrowLeftIcon />
        </IconButton>
        <Typography variant="body1">{selectedMonthYear}</Typography>
        <IconButton onClick={handleNextMonth}>
          <ArrowRightIcon />
        </IconButton>

        {/* Category Dropdown */}
        <FormControl size="small">
          <InputLabel id="category-dropdown-label">Category</InputLabel>
          <Select
            labelId="category-dropdown-label"
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            {Object.values(ExpenseCategory).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Main Content Area */}
      <Box display="flex" gap={2} mt={2} sx={{ flexWrap: "wrap" }}>
        {/* Left: Donut chart + total spending */}
        <Box
          flex={2}
          minWidth="300px"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            mb={1}
            color="text.secondary"
            fontWeight="bold"
          >
            Total Spending
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            {getCurrency}
            {totalSpending}
          </Typography>

          <DonutChart
            data={
              viewMode === "categories"
                ? Object.entries(categorySpending).map(([label, value]) => ({
                    label,
                    value,
                  }))
                : expenseTypesWithExpenses.map((etw) => ({
                    label: etw.expenseType.name,
                    value: groupSpending[etw.expenseType.id] || 0,
                  }))
            }
            totalSpending={totalSpending}
          />
        </Box>

        {/* Right: Toggle (Categories/Groups) */}
        <Box
          flex={1}
          minWidth="280px"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: 2,
          }}
        >
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            size="small"
            sx={{ mb: 2 }}
          >
            <ToggleButton value="categories">Categories</ToggleButton>
            <ToggleButton value="groups">Groups</ToggleButton>
          </ToggleButtonGroup>

          {viewMode === "categories" && (
            <Box>
              {Object.keys(categorySpending).length > 0 ? (
                Object.entries(categorySpending).map(([category, spending]) => (
                  <Box
                    key={category}
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${spending.toFixed(2)}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No category spending to show
                </Typography>
              )}
            </Box>
          )}

          {viewMode === "groups" && (
            <Box>
              {Object.keys(groupSpending).length > 0 ? (
                expenseTypesWithExpenses.map((expenseType) => (
                  <Box
                    key={expenseType.expenseType.id}
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      {expenseType.expenseType.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      $
                      {groupSpending[expenseType.expenseType.id]
                        ? groupSpending[expenseType.expenseType.id].toFixed(2)
                        : "0.00"}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No category spending to show
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>

      {/* Bottom Row: Quick Stats */}
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <StatBox
          label="Average Daily Spending"
          value={
            averageDailySpending
              ? getCurrency + averageDailySpending.toFixed(2)
              : "n/a"
          }
        />
        <StatBox
          label="Largest Outflow"
          value={
            largestOutflow ? getCurrency + largestOutflow.toFixed(2) : "n/a"
          }
        />
        <StatBox label="Most Frequent Group" value={mostFrequentGroup} />
      </Box>
    </Paper>
  );
}

/**
 * Small box to display a label-value pair
 */
function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <Box
      flex={1}
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        p: 2,
        minWidth: 180,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
}

export default SpendingBreakdownView;
