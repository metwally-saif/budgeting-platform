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
} from "@mui/material";
import { useUpdateExpense } from "../hooks";
import { Expense, ExpenseRecurringFrequency } from "../../amplify/graphql/API";

interface ExpenseTargetProps {
  expense: Expense;
  refresh: () => void;
}

const ExpenseTarget: React.FC<ExpenseTargetProps> = ({ expense, refresh }) => {
  const { updateExpense } = useUpdateExpense();
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    targetAmount: expense.targetAmount || 0,
    recurring: expense.recurring || false,
    recurringFrequency: expense.recurringFrequency || "Monthly",
    nextMonthIWantToSetAside: expense.nextMonthIWantToSetAside || 0,
  });
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    setShowForm(false);
  }, [expense]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === "recurring" ? e.target.checked : value,
    }));
  };

  const handleSubmit = async () => {
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
  };

  const handleDelete = async () => {
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
  };

  return (
    <Box sx={{ padding: 2 }}>
      {expense.hasTarget && !showForm ? (
        <Box>
          <Typography variant="h6">Target Details</Typography>
          <Typography variant="body1">
            <strong>Target Amount:</strong> ${expense.targetAmount}
          </Typography>
          <Typography variant="body1">
            <strong>Recurring:</strong> {expense.recurring ? "Yes" : "No"}
          </Typography>
          {expense.recurring && (
            <Typography variant="body1">
              <strong>Frequency:</strong> {expense.recurringFrequency}
            </Typography>
          )}
          <Typography variant="body1">
            <strong>Next Month Set Aside:</strong> $
            {expense.nextMonthIWantToSetAside}
          </Typography>
          <Button
            variant="text"
            color="primary"
            onClick={() => setShowForm(true)}
          >
            Edit Target Details
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Delete Target
          </Button>

          {/* Delete Confirmation Dialog */}
          <Dialog
            open={isDeleteDialogOpen}
            onClose={() => setDeleteDialogOpen(false)}
          >
            <DialogTitle>Delete Target</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this target? This action cannot
                be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDeleteDialogOpen(false)}
                color="primary"
              >
                Cancel
              </Button>
              <Button onClick={handleDelete} color="secondary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      ) : showForm ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            {expense.hasTarget
              ? "Edit Target"
              : `Set Target for ${expense.name}`}
          </Typography>
          <TextField
            fullWidth
            label="Target Amount"
            type="number"
            name="targetAmount"
            value={formValues.targetAmount}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
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
              />
            }
            label="Is this recurring?"
          />
          {formValues.recurring && (
            <TextField
              fullWidth
              select
              label="Recurring Frequency"
              name="recurringFrequency"
              value={formValues.recurringFrequency}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            >
              {["Daily", "Weekly", "Monthly", "Yearly"].map((frequency) => (
                <MenuItem key={frequency} value={frequency}>
                  {frequency}
                </MenuItem>
              ))}
            </TextField>
          )}
          <TextField
            fullWidth
            label="Next Month I Want to Set Aside"
            type="number"
            name="nextMonthIWantToSetAside"
            value={formValues.nextMonthIWantToSetAside}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save Target
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setShowForm(false)}
            sx={{ mt: 1 }}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6">
            How much do you need for {expense.name}?
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
            When you create a target, we’ll let you know how much money to set
            aside to stay on track over time.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowForm(true)}
          >
            Create Target
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ExpenseTarget;
