import { useEffect, useMemo, useState } from "react";
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
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Sankey } from "@ant-design/plots"; // The Sankey chart
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

/**
 * Main component that shows a Spending Breakdown but uses a Sankey diagram
 * to visualize how total spending flows into categories or groups.
 */
function IncomeVsExpenseView(): JSX.Element {
  const getCurrency = useCurrency();

  // 1) Hooks to get all relevant data
  const { historyExpenses } = useListHistoryExpenseByUserId();
  const { expenseTypesWithExpenses } = useListExpenseByUserId();

  // 2) Local states for filters, toggles, etc.
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    new Date().toLocaleString("default", { month: "short", year: "numeric" }),
  );
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"categories" | "groups">(
    "categories",
  );

  // 3) Navigation for month
  const handlePrevMonth = () => {
    const { month, year, getPreviousMonthName } =
      parseMonthYear(selectedMonthYear);
    const prevMonth = getPreviousMonthName();
    const prevYear = month === 0 ? year - 1 : year;
    setSelectedMonthYear(`${prevMonth} ${prevYear}`);
  };
  const handleNextMonth = () => {
    const { month, year, geFollowingMonthName } =
      parseMonthYear(selectedMonthYear);
    const nextMonth = geFollowingMonthName();
    const nextYear = month === 11 ? year + 1 : year;
    setSelectedMonthYear(`${nextMonth} ${nextYear}`);
  };

  // 4) The main logic to figure out:
  //    - filteredExpenses
  //    - totalSpending
  //    - averageDailySpending
  //    - largestOutflow
  //    - mostFrequentGroup
  const {
    filteredExpenses,
    totalSpending,
    averageDailySpending,
    largestOutflow,
    mostFrequentGroup,
  } = useMemo(() => {
    if (!expenseTypesWithExpenses || !historyExpenses) {
      return {
        filteredExpenses: [] as (Expense | HistoryExpense)[],
        totalSpending: 0,
        averageDailySpending: 0,
        largestOutflow: 0,
        mostFrequentGroup: "n/a",
      };
    }

    const { month, year } = parseMonthYear(selectedMonthYear);

    // Check if selected month is current
    const now = new Date();
    const isCurrentMonth =
      now.getFullYear() === year && now.getMonth() === month;

    let filtered: (Expense | HistoryExpense)[] = [];
    let spending = 0;

    if (isCurrentMonth) {
      // Flatten all current-month expenses from expenseTypes
      const allCurrentMonthExpenses = expenseTypesWithExpenses.flatMap(
        (etw: ExpenseTypeWithExpenses) => etw.expenses,
      );
      // Filter by selected category
      filtered = allCurrentMonthExpenses.filter((exp) => {
        // If user chooses "All Categories," skip category filter
        const categoryMatch =
          selectedCategory === "All Categories" ||
          exp.category === selectedCategory;
        return categoryMatch;
      });
      // Summation from assigned (or amount) for current month
      spending = filtered.reduce((sum, e) => sum + (e.assigned || 0), 0);
    } else {
      // Past month => from historyExpenses
      filtered = historyExpenses.filter((he) => {
        const d = new Date(he.date);
        return d.getFullYear() === year && d.getMonth() === month;
      });
      // Summation from assigned for that month
      spending = filtered.reduce((sum, he) => sum + (he.assigned ?? 0), 0);
    }

    // # of days in that month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const avgDaily = daysInMonth > 0 ? spending / daysInMonth : 0;

    // Largest single outflow
    const largest = filtered.reduce(
      (max, e) => Math.max(max, e.assigned || 0),
      0,
    );

    // Most frequent group (only relevant for current month)
    let freqGroup = "n/a";
    if (isCurrentMonth && filtered.length > 0) {
      const freqMap: Record<string, number> = {};
      filtered.forEach((e) => {
        const typeId = (e as Expense).expenseTypeId || "none";
        freqMap[typeId] = (freqMap[typeId] || 0) + 1;
      });

      let maxCount = 0;
      let maxId: string | null = null;
      Object.entries(freqMap).forEach(([typeId, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxId = typeId;
        }
      });

      if (maxId && maxId !== "none") {
        const foundType = expenseTypesWithExpenses.find(
          (etw) => etw.expenseType.id === maxId,
        );
        if (foundType) freqGroup = foundType.expenseType.name;
      }
    }

    return {
      filteredExpenses: filtered,
      totalSpending: spending,
      averageDailySpending: avgDaily,
      largestOutflow: largest,
      mostFrequentGroup: freqGroup,
    };
  }, [
    expenseTypesWithExpenses,
    historyExpenses,
    selectedMonthYear,
    selectedCategory,
  ]);

  const colors = [
    "#5B8FF9",
    "#61DDAA",
    "#65789B",
    "#F6BD16",
    "#7262fd",
    "#78D3F8",
    "#9661BC",
    "#F6903D",
    "#008685",
    "#F08BB4",
  ];

  // 5) Build category-level and group-level spending objects
  const [categorySpending, setCategorySpending] = useState<
    Record<string, number>
  >({});
  const [groupSpending, setGroupSpending] = useState<Record<string, number>>(
    {},
  );

  useEffect(() => {
    // For categories
    const catSpend: Record<string, number> = {};
    // For groups
    const grpSpend: Record<string, number> = {};

    filteredExpenses.forEach((item) => {
      // Category spending
      if ("category" in item && item.category) {
        const cat = item.category;
        catSpend[cat] = (catSpend[cat] || 0) + (item.assigned || 0);
      }
      // Group spending (expenseTypeId)
      if ("expenseTypeId" in item) {
        const gId = item.expenseTypeId || "unknown";
        grpSpend[gId] = (grpSpend[gId] || 0) + (item.assigned || 0);
      }
    });

    setCategorySpending(catSpend);
    setGroupSpending(grpSpend);
  }, [filteredExpenses]);

  // 6) Which Sankey data to show? If user toggles "categories," we flow from a single
  //    "TotalSpending" node to each category. If "groups," we flow from that single node
  //    to each expense type group.
  const sankeyData = useMemo(() => {
    const nodes: { id: string }[] = [];
    const edges: { source: string; target: string; value: number }[] = [];

    // Our main source node for all spending
    const mainSourceId = "AllSpending";
    nodes.push({ id: mainSourceId });

    if (viewMode === "categories") {
      // Each category is a target. The value is categorySpending[cat].
      Object.entries(categorySpending).forEach(([cat, val]) => {
        nodes.push({ id: cat }); // add node
        edges.push({
          source: mainSourceId,
          target: cat,
          value: val,
        });
      });
    } else {
      // Each group is a target. The value is groupSpending[gId].
      // We can map gId to the actual expense type name if we want a friendlier label.
      expenseTypesWithExpenses.forEach((etw) => {
        const groupId = etw.expenseType.id;
        const groupName = etw.expenseType.name;
        // if there's spending for this group
        const value = groupSpending[groupId] || 0;
        // only add an edge if > 0, for clarity
        if (value > 0) {
          nodes.push({ id: groupName });
          edges.push({
            source: mainSourceId,
            target: groupName,
            value,
          });
        }
      });
    }

    return edges;
  }, [viewMode, categorySpending, groupSpending, expenseTypesWithExpenses]);

  // 7) Sankey chart configuration
  const sankeyConfig = {
    data: sankeyData,
    sourceField: "source",
    targetField: "target",
    weightField: "value",
    scale: { color: { range: colors } },
    nodeWidthRatio: 0.01,
    nodePadding: 8,
    nodeDraggable: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    linkColorField: (d: any) => d.source.key,
    style: {
      labelFontSize: 13,
      linkFillOpacity: 0.4,
      nodeStrokeWidth: 0,
    },
    tooltip: {
      showTitle: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (datum: any) => {
        return {
          name: `${datum.source} -> ${datum.target}`,
          value: `${getCurrency}${datum.value?.toFixed(2)}`,
        };
      },
    },
  };

  // 8) Render
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
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight="bold">
          Income VS. Expense
        </Typography>
      </Box>

      {/* Filter Row */}
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
        <IconButton onClick={handlePrevMonth}>
          <ArrowLeftIcon />
        </IconButton>
        <Typography variant="body1">{selectedMonthYear}</Typography>
        <IconButton onClick={handleNextMonth}>
          <ArrowRightIcon />
        </IconButton>

        <FormControl size="small">
          <InputLabel id="category-dropdown-label">Category</InputLabel>
          <Select
            labelId="category-dropdown-label"
            label="Category"
            value={selectedCategory}
            onChange={(e: SelectChangeEvent) =>
              setSelectedCategory(e.target.value)
            }
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            {Object.values(ExpenseCategory).map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Toggle: categories vs. groups */}
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(_e, newVal) => {
            if (newVal) setViewMode(newVal);
          }}
          size="small"
        >
          <ToggleButton value="categories">Categories</ToggleButton>
          <ToggleButton value="groups">Groups</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Sankey Chart */}
      <Box sx={{ mt: 2, minHeight: 400 }}>
        <Sankey {...sankeyConfig} style={{ width: "100%", height: 500 }} />
      </Box>

      {/* Bottom Row: Quick Stats */}
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        <StatBox
          label="Total Spending"
          value={`${getCurrency}${totalSpending.toFixed(2)}`}
        />
        <StatBox
          label="Average Daily Spending"
          value={
            averageDailySpending
              ? `${getCurrency}${averageDailySpending.toFixed(2)}`
              : "n/a"
          }
        />
        <StatBox
          label="Largest Outflow"
          value={
            largestOutflow
              ? `${getCurrency}${largestOutflow.toFixed(2)}`
              : "n/a"
          }
        />
        <StatBox label="Most Frequent Group" value={mostFrequentGroup} />
      </Box>
    </Paper>
  );
}

/**
 * Small box for label-value pair
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

export default IncomeVsExpenseView;
