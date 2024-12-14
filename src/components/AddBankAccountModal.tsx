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
} from "@mui/material";
import { useAddBankAccount } from "../hooks";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  BankAccountType,
  CreateBankAccountInput,
} from "../../amplify/graphql/API";

// Define the component props interface
interface AddBankAccountModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  refresh: () => void;
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

function AddBankAccountModal({
  open,
  setOpen,
  refresh,
}: AddBankAccountModalProps) {
  const { createBankAccount } = useAddBankAccount();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBankAccountInput>({
    defaultValues: {
      balance: 0,
      name: "",
      type: BankAccountType.Checking,
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<CreateBankAccountInput> = async (data) => {
    try {
      await createBankAccount(data);
      reset();
      refresh();
      setOpen(false);
    } catch (error) {
      // Handle error (you might want to show a notification)
      console.error("Failed to create bank account:", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="add-bank-account-title"
      aria-describedby="add-bank-account-description"
    >
      <Box sx={style}>
        <Typography
          id="add-bank-account-title"
          variant="h6"
          component="h2"
          gutterBottom
          color="black"
        >
          Add Bank Account
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
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              onClick={() => setOpen(false)}
              color="secondary"
              style={{ marginRight: "8px" }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Account
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

export default AddBankAccountModal;
