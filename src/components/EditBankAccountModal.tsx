import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { useUpdateBankAccount } from "../hooks";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  BankAccount,
  BankAccountType,
  UpdateBankAccountInput,
} from "../../amplify/graphql/API";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

// Define the component props interface
interface UpdateBankAccountModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  refresh: () => void;
  bankAccount: BankAccount | null;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

// Snackbar Alert Component
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

function UpdateBankAccountModal({
  bankAccount,
  open,
  setOpen,
  refresh,
}: UpdateBankAccountModalProps) {
  const { updateBankAccount } = useUpdateBankAccount();

  // State for Snackbar notifications
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

  // State for loading
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form with existing bank account data
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateBankAccountInput>({
    defaultValues: {
      name: bankAccount?.name || "",
      balance: bankAccount?.balance || 0,
      type: (bankAccount?.type as BankAccountType) || BankAccountType.Checking,
    },
  });

  // Update form values when bankAccount prop changes
  useEffect(() => {
    reset({
      name: bankAccount?.name || "",
      balance: bankAccount?.balance || 0,
      type: (bankAccount?.type as BankAccountType) || BankAccountType.Checking,
    });
  }, [bankAccount, reset]);

  // Handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<UpdateBankAccountInput> = async (data) => {
    setLoading(true);
    if (!bankAccount) {
      console.error("Bank account is not defined");
      setSnackbarMessage("Failed to update bank account.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }
    const updateInput: UpdateBankAccountInput = {
      id: bankAccount.id, // Ensure the id is included
      name: data.name,
      balance: data.balance,
      type: data.type,
    };
    try {
      await updateBankAccount(updateInput);
      setSnackbarMessage("Bank account updated successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      reset();
      refresh();
      setOpen(false);
    } catch (error) {
      console.error("Failed to update bank account:", error);
      setSnackbarMessage("Failed to update bank account.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="update-bank-account-title"
        aria-describedby="update-bank-account-description"
      >
        <Box sx={style}>
          <Typography
            id="update-bank-account-title"
            variant="h6"
            component="h2"
            gutterBottom
            color="black"
          >
            Update Account: {bankAccount?.name}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <Controller
              name="name"
              control={control}
              rules={{ required: "Account name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Account Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ""}
                />
              )}
            />

            {/* Balance Field */}
            <Controller
              name="balance"
              control={control}
              rules={{
                required: "Balance is required",
                min: { value: 0, message: "Balance cannot be negative" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Balance"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{ step: "0.01" }}
                  error={!!errors.balance}
                  helperText={errors.balance ? errors.balance.message : ""}
                />
              )}
            />

            {/* Type Field */}
            <Controller
              name="type"
              control={control}
              rules={{ required: "Account type is required" }}
              render={({ field }) => (
                <FormControl
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.type}
                >
                  <InputLabel id="account-type-label">Account Type</InputLabel>
                  <Select
                    {...field}
                    labelId="account-type-label"
                    label="Account Type"
                  >
                    {Object.values(BankAccountType).map((type) => (
                      <MenuItem key={type} value={type}>
                        {type.replace(/_/g, " ")}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.type && (
                    <Typography variant="caption" color="error">
                      {errors.type.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />

            {/* Submit Button */}
            <Box
              mt={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                onClick={() => setOpen(false)}
                color="secondary"
                style={{ marginRight: "8px" }}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Update Account"}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default UpdateBankAccountModal;
