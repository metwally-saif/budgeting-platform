import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpenseTarget from "../components/CreateTarget";
import PreferenceModal from "../components/PreferencesModal";
import { useListExpenseByUserId } from "../hooks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Expense } from "../../amplify/graphql/API";

const HomePage: React.FC = () => {
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

  return (
    <div className="flex w-screen h-screen bg-slate-100">
      <PreferenceModal />
      {/* Main Content */}
      <Box sx={{ padding: 2, width: "70%", overflowY: "auto" }}>
        <Typography variant="h4" align="center" gutterBottom color="black">
          Budget Overview
        </Typography>
        {categories.map((category, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{category.expenseType.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {category.expenses.map((expense, expenseIndex) => (
                  <ListItem
                    key={expenseIndex}
                    className="cursor-pointer hover:bg-gray-100 transition-all duration-200"
                    component="li"
                    onClick={() => handleSelectExpense(expense)}
                  >
                    <ListItemText primary={expense.name} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Side Preview */}
      <Paper
        sx={{
          width: "30%",
          padding: 2,
          backgroundColor: "white",
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: "1px solid #e0e0e0",
        }}
      >
        {selectedExpense ? (
          <ExpenseTarget expense={selectedExpense} refresh={refresh} />
        ) : (
          <Typography variant="body1" color="textSecondary">
            Select an expense to see details
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default HomePage;
