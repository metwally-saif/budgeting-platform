// src/components/BudgetRows.tsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  IconButton,
  Tooltip,
  LinearProgress,
  Snackbar,
  Alert,
  Stack,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EditIcon from "@mui/icons-material/Edit";
import { ExpenseTypeWithExpenses } from "../hooks";
import { usePreference } from "../hooks";
import { Expense, UpdateExpenseInput } from "../../amplify/graphql/API";

interface BudgetRowsProps {
  categories: ExpenseTypeWithExpenses[];
  handleSelectExpense: (expense: Expense) => void;
  handleUpdateExpense: (expense: UpdateExpenseInput) => Promise<void>;
}

const BudgetRows: React.FC<BudgetRowsProps> = ({
  categories,
  handleSelectExpense,
  handleUpdateExpense,
}) => {
  const { preference } = usePreference();
  // State to manage which expenses are being edited
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
  const [editedAssignedAmount, setEditedAssignedAmount] = useState<number>(0);

  // State for Snackbar notifications
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  // Handle initiating edit mode
  const handleEditInitiate = (expense: Expense) => {
    setEditingExpenseId(expense.id);
    setEditedAssignedAmount(expense.assigned || 0);
  };

  const getCurrencySymbol = () => {
    if (preference) {
      return preference.currency === "USD" ? "$" : "€";
    }
    return "$";
  };

  // Handle saving the edited expense
  const handleSave = async (expense: Expense) => {
    try {
      await handleUpdateExpense({
        id: expense.id,
        assigned: editedAssignedAmount,
      });

      setSnackbar({
        open: true,
        message: `${expense.name} updated successfully!`,
        severity: "success",
      });

      // Exit edit mode
      setEditingExpenseId(null);
    } catch (error) {
      console.error("Failed to update expense:", error);
      setSnackbar({
        open: true,
        message: `Failed to update ${expense.name}.`,
        severity: "error",
      });
    }
  };

  // Handle closing the Snackbar
  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{ padding: 4, width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      {categories.map((category, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" color="secondary">
              {category.expenseType.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={2}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Expense
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle1" fontWeight="bold">
                        Assigned
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle1" fontWeight="bold">
                        Available
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.expenses.map((expense) => {
                    const isEditing = editingExpenseId === expense.id;
                    const availableAmount = expense.assigned;
                    const progress =
                      expense.targetAmount && expense.assigned
                        ? Math.min(
                            (expense.assigned / expense.targetAmount) * 100,
                            100,
                          )
                        : 0;

                    return (
                      <TableRow
                        key={expense.id}
                        hover
                        onClick={() => handleSelectExpense(expense)}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                        }}
                      >
                        {/* Expense Name with Progress Bar */}
                        <TableCell component="th" scope="row">
                          <Box>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <CurrencyExchangeIcon color="action" />
                              <Typography variant="body1">
                                {expense.name || "Unnamed Expense"}
                              </Typography>
                            </Stack>
                            {expense.targetAmount && (
                              <Box sx={{ mt: 1 }}>
                                <LinearProgress
                                  variant="determinate"
                                  value={progress}
                                  sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: "#e0e0e0",
                                    "& .MuiLinearProgress-bar": {
                                      borderRadius: 4,
                                      backgroundColor:
                                        progress < 50
                                          ? "error.main"
                                          : progress < 80
                                            ? "warning.main"
                                            : "success.main",
                                    },
                                  }}
                                />
                                <Typography
                                  variant="caption"
                                  color="textSecondary"
                                >
                                  {expense.targetAmount &&
                                  expense.assigned !== undefined
                                    ? `${expense.targetAmount - (expense.assigned ?? 0) > 0 ? `${getCurrencySymbol()}${expense.targetAmount - (expense.assigned ?? 0)} remaining by ${expense.dueDate ? expense.dueDate : ""}` : "Fully Allocated"} `
                                    : ""}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </TableCell>

                        {/* Assigned Amount with Inline Editing */}
                        <TableCell align="right">
                          {isEditing ? (
                            <TextField
                              type="number"
                              value={editedAssignedAmount}
                              onChange={(e) =>
                                setEditedAssignedAmount(
                                  parseFloat(e.target.value),
                                )
                              }
                              onBlur={() => handleSave(expense)}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  handleSave(expense);
                                }
                              }}
                              InputProps={{
                                startAdornment: (
                                  <CurrencyExchangeIcon
                                    sx={{ mr: 1, color: "action.active" }}
                                  />
                                ),
                              }}
                              size="small"
                              autoFocus
                            />
                          ) : (
                            <Box
                              sx={{
                                position: "relative",
                                display: "inline-block",
                                "&:hover .edit-icon": {
                                  visibility: "visible",
                                },
                              }}
                            >
                              <Typography variant="body1">
                                {expense.assigned
                                  ? `${getCurrencySymbol()}${expense.assigned.toFixed(2)}`
                                  : "-"}
                              </Typography>
                              <Tooltip title="Edit Assigned Amount">
                                <IconButton
                                  size="small"
                                  sx={{
                                    position: "absolute",
                                    top: "50%",
                                    right: -30,
                                    transform: "translateY(-50%)",
                                    visibility: "hidden",
                                  }}
                                  className="edit-icon"
                                  onClick={() => handleEditInitiate(expense)}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          )}
                        </TableCell>

                        {/* Available Amount */}
                        <TableCell align="right">
                          <Typography variant="body1">
                            {availableAmount
                              ? `${getCurrencySymbol()}${availableAmount.toFixed(2)}`
                              : "-"}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BudgetRows;
