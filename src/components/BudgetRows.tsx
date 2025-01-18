// src/components/BudgetRows.tsx

import React, { useState, useEffect } from "react";
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
  Button,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EditIcon from "@mui/icons-material/Edit";
import {
  ExpenseTypeWithExpenses,
  useAddExpense,
  useAddExpenseType,
  useUser,
  useDeleteExpenseType,
  useUpdateExpenseType,
} from "../hooks";
import AddIcon from "@mui/icons-material/Add";
import { useCurrency } from "../utils/get-currency";
import { Expense, UpdateExpenseInput } from "../../amplify/graphql/API";

interface BudgetRowsProps {
  categories: ExpenseTypeWithExpenses[];
  setCategories: React.Dispatch<
    React.SetStateAction<ExpenseTypeWithExpenses[]>
  >;
  handleSelectExpense: (expense: Expense) => void;
  handleUpdateExpense: (expense: UpdateExpenseInput) => Promise<void>;
  refresh: () => void;
}

const BudgetRows: React.FC<BudgetRowsProps> = ({
  categories,
  setCategories,
  handleSelectExpense,
  handleUpdateExpense,
  refresh,
}) => {
  const currency = useCurrency();
  const { createExpense } = useAddExpense();
  const { deleteExpenseType } = useDeleteExpenseType();
  const { updateExpenseType } = useUpdateExpenseType();
  const { createExpenseType } = useAddExpenseType();
  const { user } = useUser();
  // State to manage which expenses are being edited
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
  const [editedAssignedAmount, setEditedAssignedAmount] = useState<number>(0);
  const [newExpenseTypeName, setNewExpenseTypeName] = useState("");
  const [isAddingType, setIsAddingType] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExpenseType, setSelectedExpenseType] =
    useState<ExpenseTypeWithExpenses | null>(null);
  const [editedTypeName, setEditedTypeName] = useState("");
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [newExpenseName, setNewExpenseName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

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

  const handleAddExpenseType = async () => {
    try {
      if (!newExpenseTypeName.trim() || !user) return;
      await createExpenseType({
        name: newExpenseTypeName.trim(),
        userId: user?.sub,
      }).then(() => {
        refresh();
      });
      setIsAddingType(false);
      setNewExpenseTypeName("");
      setSnackbar({
        open: true,
        message: `Expense Type "${newExpenseTypeName}" created successfully!`,
        severity: "success",
      });
    } catch (error) {
      console.error("Failed to add expense type:", error);
      setSnackbar({
        open: true,
        message: `Failed to add expense type.`,
        severity: "error",
      });
    }
  };

  useEffect(() => {}, [categories]);

  // Open modal when clicking on the expense type name
  const handleOpenModal = (category: ExpenseTypeWithExpenses) => {
    setSelectedExpenseType(category);
    setEditedTypeName(category.expenseType.name);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExpenseType(null);
    setEditedTypeName("");
  };

  // Placeholder for update and delete functions
  const handleUpdateExpenseType = async () => {
    if (!selectedExpenseType) return;
    await updateExpenseType({
      id: selectedExpenseType.expenseType.id,
      name: editedTypeName,
    }).then(() => {
      setCategories((prev) =>
        prev.map((category) =>
          category.expenseType.id === selectedExpenseType?.expenseType.id
            ? {
                ...category,
                expenseType: { ...category.expenseType, name: editedTypeName },
              }
            : category,
        ),
      );
    });
    handleCloseModal();
  };

  const handleDeleteExpenseType = async () => {
    if (!selectedExpenseType) return;
    // check if there are any expenses in the category
    if (selectedExpenseType.expenses.length > 0) {
      setSnackbar({
        open: true,
        message: `Cannot delete ${selectedExpenseType.expenseType.name} as it contains expenses.`,
        severity: "error",
      });
      return;
    }
    await deleteExpenseType({
      id: selectedExpenseType.expenseType.id,
    }).then(() => {
      setCategories((prev) =>
        prev.filter(
          (category) =>
            category.expenseType.id !== selectedExpenseType?.expenseType.id,
        ),
      );
    });
    handleCloseModal();
  };

  const handleAddExpense = async () => {
    if (!selectedCategoryId || !newExpenseName.trim() || !user) return;
    try {
      await createExpense({
        name: newExpenseName.trim(),
        expenseTypeId: selectedCategoryId,
        userId: user?.sub,
      }).then(() => {
        refresh(); // or update local state as needed
      });
      setSnackbar({
        open: true,
        message: `Expense "${newExpenseName}" created successfully!`,
        severity: "success",
      });
      // Reset the expense addition UI state
      setNewExpenseName("");
      setIsAddingExpense(false);
      setSelectedCategoryId(null);
    } catch (error) {
      console.error("Failed to add expense:", error);
      setSnackbar({
        open: true,
        message: `Failed to add expense.`,
        severity: "error",
      });
    }
  };
  return (
    <Box
      sx={{ padding: 4, width: "100%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <Box mb={2} display="flex" alignItems="center">
        {isAddingType ? (
          <>
            <TextField
              placeholder="New Expense Type Name"
              value={newExpenseTypeName}
              onChange={(e) => setNewExpenseTypeName(e.target.value)}
              onBlur={handleAddExpenseType} // Optionally trigger add on blur
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddExpenseType();
                }
              }}
              size="small"
              autoFocus
              sx={{ width: 500 }} // adjust width as needed
            />
            <Button
              size="large"
              onClick={() => setIsAddingType(false)}
              aria-label="Cancel Adding Expense Type"
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            size="small"
            onClick={() => setIsAddingType(true)}
            aria-label="Add Expense Type"
          >
            <AddIcon />
            <Typography variant="button">Add Expense Group</Typography>
          </Button>
        )}
      </Box>
      {categories.map((category, index) => (
        <Accordion key={index} defaultExpanded={false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="h6"
              color="secondary"
              sx={{ cursor: "pointer" }}
              onClick={(event) => {
                event.stopPropagation();
                handleOpenModal(category);
              }}
            >
              {category.expenseType.name}
            </Typography>

            {/* Controls for Adding a New Expense */}
            {selectedCategoryId === category.expenseType.id &&
            isAddingExpense ? (
              <>
                <TextField
                  placeholder="New Expense Name"
                  value={newExpenseName}
                  onChange={(e) => setNewExpenseName(e.target.value)}
                  onBlur={handleAddExpense} // Optionally trigger add on blur
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddExpense();
                    }
                  }}
                  size="small"
                  autoFocus
                  sx={{ width: 300, marginLeft: 1 }} // adjust width as needed
                />
                <Button
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsAddingExpense(false);
                    setNewExpenseName("");
                    setSelectedCategoryId(null);
                  }}
                  aria-label="Cancel Adding Expense"
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                size="small"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsAddingExpense(true);
                  setSelectedCategoryId(category.expenseType.id);
                }}
                sx={{ display: "flex", alignItems: "center", marginX: 1 }}
                aria-label="Add Expense"
              >
                <AddIcon fontSize="small" />
                <Typography sx={{ fontSize: "0.8rem" }} variant="button">
                  Add Expense
                </Typography>
              </Button>
            )}
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
                                    ? `${expense.targetAmount - (expense.assigned ?? 0) > 0 ? `${currency}${expense.targetAmount - (expense.assigned ?? 0)} remaining by ${expense.dueDate ? expense.dueDate : ""}` : "Fully Allocated"} `
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
                                  ? `${currency}${expense.assigned.toFixed(2)}`
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
                              ? `${currency}${availableAmount.toFixed(2)}`
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
      <Dialog open={modalOpen} onClose={handleCloseModal} aria-hidden="true">
        <DialogTitle>Edit Expense Type</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Expense Type Name"
            type="text"
            fullWidth
            variant="standard"
            value={editedTypeName}
            onChange={(e) => setEditedTypeName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteExpenseType} color="error">
            Delete
          </Button>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleUpdateExpenseType} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BudgetRows;
