import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Paper,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { DualAxes } from "@ant-design/plots"; // or use DualAxes, etc.

import {
  useListBankAccountsByUserId,
  useListHistoryBankAccountsByUserId,
} from "../hooks";

// Example utility to parse a "Nov 2024 – Jan 2025" date range
// or if you prefer discrete month-year parsing, adapt as needed
import { parseRangeOfMonths } from "../utils/parse-range-months";
import { useCurrency } from "../utils/get-currency";
const RANGE_OPTIONS = [
  { value: "1M", label: "1 Month" },
  { value: "3M", label: "3 Months" },
  { value: "6M", label: "6 Months" },
  { value: "1Y", label: "Year" },
  { value: "5Y", label: "5 Years" },
];
function NetWorthView() {
  const getCurrency = useCurrency();
  const [rangeType, setRangeType] = useState("3M");

  const calculateDateRange = (type: string) => {
    const now = new Date();
    const start = new Date();

    switch (type) {
      case "1M":
        start.setMonth(now.getMonth() - 1);
        break;
      case "3M":
        start.setMonth(now.getMonth() - 3);
        break;
      case "6M":
        start.setMonth(now.getMonth() - 6);
        break;
      case "1Y":
        start.setFullYear(now.getFullYear() - 1);
        break;
      case "5Y":
        start.setFullYear(now.getFullYear() - 5);
        break;
    }

    return `${start.toLocaleString("default", { month: "short" })} ${start.getFullYear()} – ${now.toLocaleString("default", { month: "short" })} ${now.getFullYear()}`;
  };

  const getRangeSize = (type: string): number => {
    switch (type) {
      case "1M":
        return 1;
      case "3M":
        return 3;
      case "6M":
        return 6;
      case "1Y":
        return 12;
      case "5Y":
        return 60;
      default:
        return 1; // Default to 1 month
    }
  };

  // 1) Hooks for current accounts and historical snapshots
  const { bankAccounts } = useListBankAccountsByUserId();
  const { historyBankAccounts } = useListHistoryBankAccountsByUserId();

  // 2) make the default date range from jan current year to dec current year
  const [dateRange, setDateRange] = useState(calculateDateRange("3M"));
  const [selectedAccount, setSelectedAccount] = useState("All Accounts");

  const handlePrevRange = () => {
    const { monthsList } = parseRangeOfMonths(dateRange);
    const firstMonth = monthsList[0];

    // Determine the range size based on the selected range type
    const rangeSize = getRangeSize(rangeType); // e.g., 1 for '1M', 3 for '3M', etc.

    // Calculate the new start and end dates by subtracting the range size
    const newStart = new Date(firstMonth.year, firstMonth.month - rangeSize);
    const newEnd = new Date(firstMonth.year, firstMonth.month - 1);

    // Ensure proper month and year formatting
    setDateRange(
      `${newStart.toLocaleString("default", { month: "short" })} ${newStart.getFullYear()} – ${newEnd.toLocaleString(
        "default",
        { month: "short" },
      )} ${newEnd.getFullYear()}`,
    );
  };

  const handleNextRange = () => {
    const { monthsList } = parseRangeOfMonths(dateRange);
    const lastMonth = monthsList[monthsList.length - 1];

    // Determine the range size based on the selected range type
    const rangeSize = getRangeSize(rangeType); // e.g., 1 for '1M', 3 for '3M', etc.

    // Calculate the new start and end dates by adding the range size
    const newStart = new Date(lastMonth.year, lastMonth.month + 1);
    const newEnd = new Date(lastMonth.year, lastMonth.month + rangeSize);

    // Ensure proper month and year formatting
    setDateRange(
      `${newStart.toLocaleString("default", { month: "short" })} ${newStart.getFullYear()} – ${newEnd.toLocaleString(
        "default",
        { month: "short" },
      )} ${newEnd.getFullYear()}`,
    );
  };

  const handleRangeChange = (event: SelectChangeEvent) => {
    const newRange = event.target.value;
    setRangeType(newRange);
    setDateRange(calculateDateRange(newRange));
  };

  // 3) Build monthly net worth data
  // parseRangeOfMonths(dateRange) => e.g. [{ month: 10, year: 2024 }, { month: 11, year: 2024 }, { month: 0, year: 2025 }]
  const { monthsList } = useMemo(() => {
    return parseRangeOfMonths(dateRange);
  }, [dateRange]);

  /**
   * We'll create an array of
   *   { monthLabel: "Nov 2024", netWorth: number }
   * for each month in the range, based on historyBankAccounts or current accounts.
   */
  const netWorthData = useMemo(() => {
    if (!bankAccounts || !historyBankAccounts) return [];
    // Filter accounts based on selectedAccount
    const filteredAccounts =
      selectedAccount === "All Accounts"
        ? bankAccounts
        : bankAccounts.filter((acct) => acct.name === selectedAccount);
    // For each month in monthsList, find the relevant "latest" snapshot in history
    return monthsList.map(({ month, year }) => {
      const label = `${month + 1}/${year}`; // e.g. "11/2024"

      // We sum the balances for all accounts in that month.
      let sumBalances = 0;

      // if the month is in the past, use "historyBankAccounts"
      // if the month is current or future, use "bankAccounts"
      const now = new Date();
      const isPastMonth =
        year < now.getFullYear() ||
        (year === now.getFullYear() && month < now.getMonth());

      if (isPastMonth) {
        // Filter history records for that month
        // We'll pick the snapshot that is "closest to" the end of that month
        filteredAccounts.forEach((acct) => {
          // find the last snapshot of this account in that month
          const relevantSnaps = historyBankAccounts.filter(
            (h) =>
              h.bankAccountId === acct.id &&
              h.createdAt &&
              new Date(h.createdAt).getFullYear() === year &&
              new Date(h.createdAt).getMonth() === month,
          );
          if (relevantSnaps.length > 0) {
            let latestSnap = relevantSnaps[0];
            relevantSnaps.forEach((snap) => {
              {
                latestSnap = snap;
              }
            });
            // add that snapshot's balance
            sumBalances += latestSnap.balance ?? 0;
          }
        });
      } else {
        // Current or future => just use current account balances
        filteredAccounts.forEach((acct) => {
          sumBalances += acct.balance ?? 0;
        });
      }

      return {
        monthLabel: label,
        netWorth: sumBalances,
      };
    });
  }, [bankAccounts, historyBankAccounts, selectedAccount, monthsList]);

  // 4) From the netWorthData, we can figure out total assets.
  const latestNetWorth = netWorthData.length
    ? netWorthData[netWorthData.length - 1].netWorth
    : 0;
  const earliestNetWorth = netWorthData.length ? netWorthData[0].netWorth : 0;
  const changeInNetWorth = latestNetWorth - earliestNetWorth;
  const changePercent =
    earliestNetWorth === 0 ? 0 : (changeInNetWorth / earliestNetWorth) * 100;

  const chartData = netWorthData.map((row) => ({
    time: row.monthLabel,
    netWorth: row.netWorth,
  }));

  // 6) Define chart config
  const config = {
    xField: "time",
    data: chartData,
    legend: {
      display: false,
    },
    children: [
      {
        type: "interval",
        yField: "netWorth",
      },
      {
        type: "line",
        yField: "netWorth",
        shapeField: "smooth",
        scale: { color: { relations: [["netWorth", "#5B8FF9"]] } },
        axis: { y: { position: "right" } },
        style: { lineWidth: 2 },
      },
    ],
    // areaStyle: { fill: "l(270) 0:#ffffff 0.5:#dbeafe 1:#93c5fd" },
  };

  const tableRows = netWorthData
    .map((row, idx) => {
      const prevValue = idx === 0 ? 0 : netWorthData[idx - 1].netWorth;
      const diff = row.netWorth - prevValue;
      const diffPercent = prevValue === 0 ? 0 : (diff / prevValue) * 100;
      return {
        month: row.monthLabel,
        netWorth: row.netWorth,
        monthlyChange: diff,
        monthlyChangePercent: diffPercent,
      };
    })
    .reverse();
  // reversed so newest is top

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
      {/* Top Controls */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Net Worth
        </Typography>
      </Box>

      {/* Date Range & Filter Row */}
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        sx={{
          backgroundColor: "#e9edf2",
          p: 1.5,
          borderRadius: 2,
          mt: 2,
        }}
      >
        <IconButton onClick={handlePrevRange}>
          <ArrowLeftIcon />
        </IconButton>
        <Typography variant="body1">{dateRange}</Typography>
        <IconButton onClick={handleNextRange}>
          <ArrowRightIcon />
        </IconButton>

        <FormControl size="small">
          <Select
            value={rangeType}
            onChange={handleRangeChange}
            sx={{ minWidth: 100 }}
          >
            {RANGE_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            value={selectedAccount}
            onChange={(e: SelectChangeEvent) =>
              setSelectedAccount(e.target.value)
            }
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="All Accounts">All Accounts</MenuItem>
            {bankAccounts?.map((acct) => (
              <MenuItem key={acct.id} value={acct.name || ""}>
                {acct.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Net Worth Summary */}
      <Box display="flex" gap={4} sx={{ mt: 3, flexWrap: "wrap" }}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            {getCurrency}
            {latestNetWorth.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Net Worth
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: "blue" }}>
            {getCurrency}
            {latestNetWorth.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Assets
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ color: changeInNetWorth >= 0 ? "green" : "red" }}
          >
            {changeInNetWorth >= 0 ? "+" : ""}
            {getCurrency}
            {changeInNetWorth.toFixed(2)} ({changePercent.toFixed(1)}%)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Change in Net Worth
          </Typography>
        </Box>
      </Box>

      {/* Chart Section */}
      <Box sx={{ mt: 3, backgroundColor: "#fff", p: 2, borderRadius: 2 }}>
        <DualAxes {...config} />
      </Box>

      {/* Table: monthly net worth + monthly changes */}
      <Box sx={{ mt: 3, backgroundColor: "#f5f8fa", p: 2, borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Net Worth History
        </Typography>
        <Box
          component="table"
          sx={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <Box component="thead">
            <Box component="tr">
              <Box component="th" sx={styles.thCell}>
                Month
              </Box>
              <Box component="th" sx={styles.thCell}>
                Net Worth
              </Box>
              <Box component="th" sx={styles.thCell}>
                Monthly Change
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            {tableRows.map((row) => (
              <Box component="tr" key={row.month}>
                <Box component="td" sx={styles.tdCell}>
                  {row.month}
                </Box>
                <Box component="td" sx={styles.tdCell}>
                  {getCurrency}
                  {row.netWorth.toFixed(2)}
                </Box>
                <Box component="td" sx={styles.tdCell}>
                  {row.monthlyChange >= 0 ? "+" : ""}
                  {getCurrency}
                  {row.monthlyChange.toFixed(2)} (
                  {row.monthlyChangePercent.toFixed(1)}%)
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default NetWorthView;

const styles = {
  thCell: {
    textAlign: "left",
    borderBottom: "1px solid #ccc",
    p: 1,
  },
  tdCell: {
    borderBottom: "1px solid #eee",
    p: 1,
  },
};
