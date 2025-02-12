import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ExpenseTarget from "../components/CreateTarget";
import PreferenceModal from "../components/PreferencesModal";
import {
  useListExpenseByUserId,
  useUpdateExpense,
  useListBankAccountsByUserId,
} from "../hooks";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Expense, UpdateExpenseInput } from "../../amplify/graphql/API";
import SideBar from "../components/SideBar";
import BudgetRows from "../components/BudgetRows";
import BankAccountFragment from "../components/BankAccountFragment";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { updateExpense } = useUpdateExpense();
  const { bankAccounts, fetchBankAccounts } = useListBankAccountsByUserId();
  const { expenseTypesWithExpenses, error, listExpenses } =
    useListExpenseByUserId();
  const [categories, setCategories] = useState(expenseTypesWithExpenses);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const handleSelectExpense = (expense: Expense) => {
    refresh();
    setSelectedExpense(expense);
  };
  const refresh = useCallback(async () => {
    try {
      await Promise.all([listExpenses(), fetchBankAccounts()]);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listExpenses, fetchBankAccounts, user]);

  useEffect(() => {
    setCategories(expenseTypesWithExpenses);
  }, [bankAccounts, expenseTypesWithExpenses, refresh]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleUpdateExpense = async (expense: UpdateExpenseInput) => {
    await updateExpense(expense);
    await refresh();
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
        <SideBar refresh={refresh} />
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
        <BankAccountFragment bankAccounts={bankAccounts || []} />

        <BudgetRows
          categories={categories}
          setCategories={setCategories}
          refresh={refresh}
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
