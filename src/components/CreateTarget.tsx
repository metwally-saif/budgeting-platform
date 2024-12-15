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
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUpdateExpense } from "../hooks";
import { Expense, ExpenseRecurringFrequency } from "../../amplify/graphql/API";
import { usePreference } from "../hooks";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotesIcon from "@mui/icons-material/Notes";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
    dueDate: expense.dueDate ? new Date(expense.dueDate) : null, // Use Date object
  });
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const [notes, setNotes] = useState(expense.notes || "");

  useEffect(() => {
    setShowForm(false);
    setFormValues({
      targetAmount: expense.targetAmount || 0,
      recurring: expense.recurring || false,
      recurringFrequency:
        expense.recurringFrequency || ExpenseRecurringFrequency.Monthly,
      nextMonthIWantToSetAside: expense.nextMonthIWantToSetAside || 0,
      dueDate: expense.dueDate ? new Date(expense.dueDate) : null,
    });
    setNotes(expense.notes || "");
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

  const handleDueDateChange = (date: Date | null) => {
    setFormValues((prev) => ({
      ...prev,
      dueDate: date,
    }));
  };

  const handleNotesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNotes(e.target.value);
  };

  const handleNotesBlur = async () => {
    try {
      await updateExpense({
        id: expense.id,
        notes: notes,
      });
      refresh();
    } catch (error) {
      console.error("Failed to update notes:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate due date
      if (!formValues.dueDate) {
        setSnackbar({
          open: true,
          message: "Due date is required.",
          severity: "error",
        });
        return;
      }

      // Validate target amount
      if (formValues.targetAmount < 0) {
        setSnackbar({
          open: true,
          message: "Target amount cannot be negative.",
          severity: "error",
        });
        return;
      }
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
        dueDate: formValues.dueDate.toISOString().split("T")[0],
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
        dueDate: null,
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
              {/* Header */}
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  <CurrencyExchangeIcon
                    sx={{ verticalAlign: "middle", mr: 1 }}
                  />
                  Target Details for {expense.name}
                </Typography>
                <Divider />
              </Grid>

              {/* Available Balance Info */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "#f9f9f9",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    <AccountBalanceWalletIcon
                      sx={{ verticalAlign: "middle", mr: 1 }}
                    />
                    Available Funds
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Available Balance
                      </Typography>
                      <Typography variant="body1">
                        {preference?.currency === "USD" ? "$" : "€"}
                        {expense.assigned || 0}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Cash Left Over From Last Month
                      </Typography>
                      <Typography variant="body1">
                        {preference?.currency === "USD" ? "$" : "€"}
                        {expense.assigned
                          ? (
                              expense.assigned -
                              (expense.nextMonthIWantToSetAside || 0)
                            ).toFixed(2)
                          : "0.00"}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Assigned This Month
                      </Typography>
                      <Typography variant="body1">
                        +{preference?.currency === "USD" ? "$" : "€"}
                        {expense.nextMonthIWantToSetAside}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Cash Spending
                      </Typography>
                      <Typography variant="body1">
                        {preference?.currency === "USD" ? "$" : "€"}0.00
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Credit Spending
                      </Typography>
                      <Typography variant="body1">
                        {preference?.currency === "USD" ? "$" : "€"}0.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* Target Details */}
              <Grid item xs={12}>
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
              {expense.recurring && (
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" color="textSecondary">
                    Frequency
                  </Typography>
                  <Typography variant="h6">
                    {expense.recurringFrequency}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" color="textSecondary">
                  Due Date
                </Typography>
                <Typography variant="h6">
                  {expense.dueDate
                    ? new Date(expense.dueDate).toLocaleDateString()
                    : "-"}
                </Typography>
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

              {/* Actions */}
              <Grid item xs={12}>
                <Stack direction="row" spacing={2}>
                  <Tooltip title="Edit Target Details">
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={() => setShowForm(true)}
                    >
                      Edit
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete Target">
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<CancelIcon />}
                      onClick={() => setDeleteDialogOpen(true)}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </Stack>
              </Grid>
            </Grid>
          ) : showForm ? (
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" gutterBottom>
                {expense.hasTarget
                  ? "Edit Target"
                  : `Set Target for ${expense.name}`}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {/* Target Amount */}
                <Grid item xs={12}>
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
                </Grid>

                {/* Due Date */}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Due Date"
                      value={formValues.dueDate}
                      onChange={handleDueDateChange}
                      slotProps={{ textField: { fullWidth: true } }}
                    />
                  </LocalizationProvider>
                </Grid>

                {/* Recurring Switch */}
                <Grid item xs={12}>
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
                </Grid>

                {/* Recurring Frequency */}
                {formValues.recurring && (
                  <Grid item xs={12}>
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
                  </Grid>
                )}

                {/* Next Month Set Aside */}
                <Grid item xs={12}>
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
                </Grid>

                {/* Save and Cancel Buttons */}
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
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

          {/* Notes Section (Always Visible) */}
          <Box sx={{ mt: 4 }}>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                <NotesIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Notes
              </Typography>
              <TextField
                label="Add Notes"
                multiline
                rows={4}
                value={expense.notes || notes}
                onChange={handleNotesChange}
                onBlur={handleNotesBlur}
                fullWidth
                variant="outlined"
                placeholder="Enter any notes related to this expense..."
              />
            </Box>
          </Box>
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
