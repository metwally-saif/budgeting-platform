import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ExpenseTarget from "../components/CreateTarget";
import PreferenceModal from "../components/PreferencesModal";
import { useListExpenseByUserId, useUpdateExpense } from "../hooks";
import { Expense, UpdateExpenseInput } from "../../amplify/graphql/API";
import SideBar from "../components/SideBar";
import BudgetRows from "../components/BudgetRows";
import BankAccountFragment from "../components/BankAccountFragment";

const HomePage: React.FC = () => {
  const { updateExpense } = useUpdateExpense();
  const { expenseTypesWithExpenses, error, listExpenses } =
    useListExpenseByUserId();
  const [categories, setCategories] = useState(expenseTypesWithExpenses);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  useEffect(() => {
    setCategories(expenseTypesWithExpenses);
  }, [expenseTypesWithExpenses, listExpenses]);

  const handleSelectExpense = (expense: Expense) => {
    setSelectedExpense(expense);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const refresh = () => {
    listExpenses();
  };

  const handleUpdateExpense = async (expense: UpdateExpenseInput) => {
    await updateExpense(expense);
    refresh();
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
      {/* Sidebar */}
      <Box>
        <SideBar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
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
        <PreferenceModal refresh={refresh} />

        {/* Bank Account Fragment */}
        <BankAccountFragment
          expenses={expenseTypesWithExpenses
            .map((category) => category.expenses)
            .flat()}
        />

        <BudgetRows
          categories={categories}
          handleSelectExpense={handleSelectExpense}
          handleUpdateExpense={handleUpdateExpense}
        />
      </Box>

      {/* Side Preview */}
      <Paper
        sx={{
          width: { xs: "100%", sm: "30%" },
          padding: 2,
          backgroundColor: "#ffffff",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderLeft: { sm: "1px solid #e0e0e0" },
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
        {selectedExpense ? (
          <ExpenseTarget expense={selectedExpense} refresh={refresh} />
        ) : (
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            sx={{ mt: 2 }}
          >
            Select an expense to see details
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default HomePage;
