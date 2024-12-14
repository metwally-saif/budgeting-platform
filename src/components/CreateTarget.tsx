// src/components/ExpenseTarget.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Alert,
  Tooltip,
  Divider,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUpdateExpense } from "../hooks";
import { Expense, ExpenseRecurringFrequency } from "../../amplify/graphql/API";
import { usePreference } from "../hooks";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

interface ExpenseTargetProps {
  expense: Expense;
  refresh: () => void;
}

const ExpenseTarget: React.FC<ExpenseTargetProps> = ({ expense, refresh }) => {
  const { preference } = usePreference();
  const { updateExpense } = useUpdateExpense();

  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    targetAmount: expense.targetAmount || 0,
    recurring: expense.recurring || false,
    recurringFrequency:
      expense.recurringFrequency || ExpenseRecurringFrequency.Monthly,
    nextMonthIWantToSetAside: expense.nextMonthIWantToSetAside || 0,
  });
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  useEffect(() => {
    setShowForm(false);
    setFormValues({
      targetAmount: expense.targetAmount || 0,
      recurring: expense.recurring || false,
      recurringFrequency:
        expense.recurringFrequency || ExpenseRecurringFrequency.Monthly,
      nextMonthIWantToSetAside: expense.nextMonthIWantToSetAside || 0,
    });
  }, [expense]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name as string]:
        name === "recurring" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateExpense({
        id: expense.id,
        targetAmount: formValues.targetAmount,
        recurring: formValues.recurring,
        recurringFrequency:
          ExpenseRecurringFrequency[
            formValues.recurringFrequency as keyof typeof ExpenseRecurringFrequency
          ],
        hasTarget: true,
        nextMonthIWantToSetAside: formValues.nextMonthIWantToSetAside,
      });
      refresh();
      setShowForm(false);
      setSnackbar({
        open: true,
        message: "Target details updated successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Failed to update expense:", error);
      setSnackbar({
        open: true,
        message: "Failed to update target details.",
        severity: "error",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await updateExpense({
        id: expense.id,
        hasTarget: false,
        targetAmount: 0,
        recurring: false,
        recurringFrequency: null,
        nextMonthIWantToSetAside: 0,
      });
      refresh();
      setDeleteDialogOpen(false);
      setSnackbar({
        open: true,
        message: "Target deleted successfully.",
        severity: "success",
      });
    } catch (error) {
      console.error("Failed to delete expense target:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete target.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ mb: 4, width: "100%" }}>
      <Card elevation={3} sx={{ width: "100%" }}>
        <CardContent>
          {expense.hasTarget && !showForm ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  <CurrencyExchangeIcon
                    sx={{ verticalAlign: "middle", mr: 1 }}
                  />
                  Target Details for {expense.name}
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="textSecondary">
                  Target Amount
                </Typography>
                <Typography variant="h6">
                  {preference?.currency === "USD" ? "$" : "€"}
                  {expense.targetAmount}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="textSecondary">
                  Recurring
                </Typography>
                <Typography variant="h6">
                  {expense.recurring ? "Yes" : "No"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                {expense.recurring && (
                  <>
                    <Typography variant="subtitle1" color="textSecondary">
                      Frequency
                    </Typography>
                    <Typography variant="h6">
                      {expense.recurringFrequency}
                    </Typography>
                  </>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="textSecondary">
                  Next Month Set Aside
                </Typography>
                <Typography variant="h6">
                  {preference?.currency === "USD" ? "$" : "€"}
                  {expense.nextMonthIWantToSetAside}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Tooltip title="Edit Target Details">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => setShowForm(true)}
                    >
                      Edit
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete Target">
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => setDeleteDialogOpen(true)}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </Stack>
              </Grid>
            </Grid>
          ) : showForm ? (
            <Box sx={{ width: "full" }}>
              <Typography variant="h5" gutterBottom>
                {expense.hasTarget
                  ? "Edit Target"
                  : `Set Target for ${expense.name}`}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={2}>
                <TextField
                  label="Target Amount"
                  type="number"
                  name="targetAmount"
                  value={formValues.targetAmount}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <CurrencyExchangeIcon sx={{ mr: 1 }} />,
                  }}
                  fullWidth
                  variant="outlined"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formValues.recurring}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          recurring: e.target.checked,
                        }))
                      }
                      name="recurring"
                      color="primary"
                    />
                  }
                  label="Is this recurring?"
                />
                {formValues.recurring && (
                  <TextField
                    select
                    label="Recurring Frequency"
                    name="recurringFrequency"
                    value={formValues.recurringFrequency}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  >
                    {Object.values(ExpenseRecurringFrequency).map(
                      (frequency) => (
                        <MenuItem key={frequency} value={frequency}>
                          {frequency}
                        </MenuItem>
                      ),
                    )}
                  </TextField>
                )}
                <TextField
                  label="Next Month I Want to Set Aside"
                  type="number"
                  name="nextMonthIWantToSetAside"
                  value={formValues.nextMonthIWantToSetAside}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <CurrencyExchangeIcon sx={{ mr: 1 }} />,
                  }}
                  fullWidth
                  variant="outlined"
                />
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<CancelIcon />}
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            </Box>
          ) : (
            <Box textAlign="center">
              <Typography variant="h5" gutterBottom>
                Set a Target for {expense.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Setting a target helps you stay on track with your financial
                goals by letting you know how much money to set aside each
                month.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CurrencyExchangeIcon />}
                onClick={() => setShowForm(true)}
              >
                Create Target
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete Target</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete the target for "{expense.name}"?
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Feedback */}
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

export default ExpenseTarget;
