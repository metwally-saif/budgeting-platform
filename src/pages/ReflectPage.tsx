import SideBar from "../components/SideBar";
import { Box, Tabs, Tab, useTheme } from "@mui/material";
import SpendingBreakdownView from "../components/SpendingBreakdownView";
import NetWorthView from "../components/NetWorthView";
import IncomeVsExpenseView from "../components/IncomeVsExpenseView";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TAB_ROUTES = ["breakdown", "networth", "income"];

function ReflectPage(): JSX.Element {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  // Sync tab changes with URL changes
  useEffect(() => {
    const pathPart = location.pathname.split("/")[2];
    const index = TAB_ROUTES.indexOf(pathPart);
    if (index !== -1 && index !== activeTab) {
      setActiveTab(index);
    }
  }, [location, activeTab]);

  // Update URL when user changes tabs
  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    navigate(`/reflect/${TAB_ROUTES[newValue]}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box>
        <SideBar refresh={() => {}} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          paddingRight: 3,
          paddingBottom: 3,
          overflowY: "auto",
          height: "100vh",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#bfbfbf transparent", // For Firefox
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#bfbfbf",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#a6a6a6",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Spending Breakdown" />
            <Tab label="Net Worth" />
            <Tab label="Income v Expense" />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {activeTab === 0 && <SpendingBreakdownView />}
        {activeTab === 1 && <NetWorthView />}
        {activeTab === 2 && <IncomeVsExpenseView />}
      </Box>
    </Box>
  );
}

export default ReflectPage;
