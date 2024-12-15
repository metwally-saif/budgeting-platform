/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useUser, useAddPreference } from "../hooks";
import {
  PreferenceCurrency,
  PreferenceDeptType,
  PreferenceFinancialStatus,
  PreferenceHomeOwnership,
  PreferenceMostSpend,
  PreferenceTransportation,
} from "../../amplify/graphql/API";
import { usePreference } from "../hooks";

// Define the style for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

// Define the steps
const steps = [
  "Basic Information",
  "Financial Details",
  "Emergency Fund",
  "Retirement Fund",
  "Debt Information",
];

// PreferenceModal Component
const PreferenceModal = ({ refresh }: { refresh(): void }) => {
  const { error } = usePreference();
  const [open, setOpen] = useState(true);

  const { user } = useUser();

  const [activeStep, setActiveStep] = useState(0);
  const { createPreference } = useAddPreference();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      financialStatus: "",
      homeOwnership: "",
      transportation: "",
      mostSpend: "",
      subscriptions: [""],
      currency: "",
      monthlyIncome: "",
      monthlyExpense: "",
      savingsGoal: "",
      savingsBalance: "",
      hasEmergencyFund: false,
      emergencyFund: "",
      emergencyFundGoal: "",
      hasRetirementFund: false,
      retirementFund: "",
      retirementFundGoal: "",
      hasDebt: false,
      deptType: "",
      debt: "",
      debtGoal: "",
      lastUpdated: new Date(),
    },
  });

  // Watchers for conditional fields
  const hasDebt = watch("hasDebt");
  const hasEmergencyFund = watch("hasEmergencyFund");
  const hasRetirementFund = watch("hasRetirementFund");

  const handleNext = async () => {
    // Validate current step before proceeding
    const valid = await trigger(
      getStepFields(activeStep) as (keyof PreferenceFormData)[],
    );
    if (valid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  if (!user) {
    return null;
  }

  interface PreferenceFormData {
    financialStatus: string;
    homeOwnership: string;
    transportation: string;
    mostSpend: string;
    subscriptions: string[];
    currency: string;
    monthlyIncome: string;
    monthlyExpense: string;
    savingsGoal: string;
    savingsBalance: string;
    hasEmergencyFund: boolean;
    emergencyFund: string;
    emergencyFundGoal: string;
    hasRetirementFund: boolean;
    retirementFund: string;
    retirementFundGoal: string;
    hasDebt: boolean;
    deptType: string;
    debt: string;
    debtGoal: string;
    lastUpdated: Date;
  }

  const handleFormSubmit = (data: PreferenceFormData) => {
    createPreference({
      userId: user.sub,
      hasDebt: data.hasDebt,
      debt: data.debt ? parseFloat(data.debt) : 0,
      debtGoal: data.debtGoal ? parseFloat(data.debtGoal) : 0,
      deptType:
        PreferenceDeptType[data.deptType as keyof typeof PreferenceDeptType],
      savingsBalance: data.savingsBalance ? parseFloat(data.savingsBalance) : 0,
      savingsGoal: data.savingsGoal ? parseFloat(data.savingsGoal) : 0,
      currency:
        PreferenceCurrency[data.currency as keyof typeof PreferenceCurrency],
      retirementFund: data.retirementFund ? parseFloat(data.retirementFund) : 0,
      retirementFundGoal: data.retirementFundGoal
        ? parseFloat(data.retirementFundGoal)
        : 0,
      hasRetirementFund: data.hasRetirementFund,
      emergencyFund: data.emergencyFund ? parseFloat(data.emergencyFund) : 0,
      emergencyFundGoal: data.emergencyFundGoal
        ? parseFloat(data.emergencyFundGoal)
        : 0,
      hasEmergencyFund: data.hasEmergencyFund,
      financialStatus:
        PreferenceFinancialStatus[
          data.financialStatus as keyof typeof PreferenceFinancialStatus
        ],
      homeOwnership:
        PreferenceHomeOwnership[
          data.homeOwnership as keyof typeof PreferenceHomeOwnership
        ],
      transportation:
        PreferenceTransportation[
          data.transportation as keyof typeof PreferenceTransportation
        ],
      mostSpend:
        PreferenceMostSpend[data.mostSpend as keyof typeof PreferenceMostSpend],
      subscriptions: data.subscriptions,
    });
    reset();
    setActiveStep(0);
    refresh();
    setOpen(false);
  };

  // Function to get fields per step for validation
  const getStepFields = (step: number) => {
    switch (step) {
      case 0:
        return [
          "financialStatus",
          "homeOwnership",
          "transportation",
          "mostSpend",
          "subscriptions",
        ];
      case 1:
        return [
          "currency",
          "monthlyIncome",
          "monthlyExpense",
          "savingsGoal",
          "savingsBalance",
        ];
      case 2:
        if (hasEmergencyFund) {
          return ["hasEmergencyFund", "emergencyFund", "emergencyFundGoal"];
        }
        return ["hasEmergencyFund"];
      case 3:
        if (hasRetirementFund) {
          return ["hasRetirementFund", "retirementFund", "retirementFundGoal"];
        }
        return ["hasRetirementFund"];
      case 4:
        if (hasDebt) {
          return ["hasDebt", "deptType", "debt", "debtGoal"];
        }
        return ["hasDebt"];
      default:
        return [];
    }
  };
  if (!error) {
    return null;
  }

  // Function to render step content
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            {/* User ID */}
            {/* Financial Status */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.financialStatus}>
                <InputLabel id="financial-status-label">
                  Financial Status
                </InputLabel>
                <Controller
                  name="financialStatus"
                  control={control}
                  rules={{ required: "Financial Status is required" }}
                  render={({ field }: { field: any }) => (
                    <Select
                      {...field}
                      labelId="financial-status-label"
                      label="Financial Status"
                    >
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Average">Average</MenuItem>
                      <MenuItem value="Poor">Poor</MenuItem>
                    </Select>
                  )}
                />
                {errors.financialStatus && (
                  <Typography variant="caption" color="error">
                    {errors.financialStatus.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Home Ownership */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.homeOwnership}>
                <InputLabel id="home-ownership-label">
                  Home Ownership
                </InputLabel>
                <Controller
                  name="homeOwnership"
                  control={control}
                  rules={{ required: "Home Ownership is required" }}
                  render={({ field }: { field: any }) => (
                    <Select
                      {...field}
                      labelId="home-ownership-label"
                      label="Home Ownership"
                    >
                      <MenuItem value="Rent">Rent</MenuItem>
                      <MenuItem value="Own">Own</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.homeOwnership && (
                  <Typography variant="caption" color="error">
                    {errors.homeOwnership.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Transportation */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.transportation}>
                <InputLabel id="transportation-label">
                  Transportation
                </InputLabel>
                <Controller
                  name="transportation"
                  control={control}
                  rules={{ required: "Transportation is required" }}
                  render={({ field }: { field: any }) => (
                    <Select
                      {...field}
                      labelId="transportation-label"
                      label="Transportation"
                    >
                      <MenuItem value="Public">Public</MenuItem>
                      <MenuItem value="Private">Private</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.transportation && (
                  <Typography variant="caption" color="error">
                    {errors.transportation.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Most Spend */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.mostSpend}>
                <InputLabel id="most-spend-label">Most Spend</InputLabel>
                <Controller
                  name="mostSpend"
                  control={control}
                  rules={{ required: "Most Spend is required" }}
                  render={({ field }: { field: any }) => (
                    <Select
                      {...field}
                      labelId="most-spend-label"
                      label="Most Spend"
                    >
                      <MenuItem value="Housing">Housing</MenuItem>
                      <MenuItem value="Transportation">Transportation</MenuItem>
                      <MenuItem value="Food">Food</MenuItem>
                      <MenuItem value="Insurance">Insurance</MenuItem>
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      <MenuItem value="Entertainment">Entertainment</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.mostSpend && (
                  <Typography variant="caption" color="error">
                    {errors.mostSpend.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Subscriptions */}
            <Grid item xs={12}>
              <Controller
                name="subscriptions"
                control={control}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Subscriptions (comma separated)"
                    fullWidth
                    helperText="Enter subscriptions separated by commas"
                    onChange={(e) => field.onChange(e.target.value.split(","))}
                  />
                )}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={2}>
            {/* Currency */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.currency}>
                <InputLabel id="currency-label">Currency</InputLabel>
                <Controller
                  name="currency"
                  control={control}
                  rules={{ required: "Currency is required" }}
                  render={({ field }: { field: any }) => (
                    <Select
                      {...field}
                      labelId="currency-label"
                      label="Currency"
                    >
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                    </Select>
                  )}
                />
                {errors.currency && (
                  <Typography variant="caption" color="error">
                    {errors.currency.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            {/* Monthly Income */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="monthlyIncome"
                control={control}
                rules={{
                  required: "Monthly Income is required",
                  min: { value: 0, message: "Must be a positive number" },
                }}
                render={({
                  field,
                  fieldState: { error },
                }: {
                  field: any;
                  fieldState: { error?: any };
                }) => (
                  <TextField
                    {...field}
                    label="Monthly Income"
                    type="number"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>

            {/* Monthly Expense */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="monthlyExpense"
                control={control}
                rules={{
                  required: "Monthly Expense is required",
                  min: { value: 0, message: "Must be a positive number" },
                }}
                render={({
                  field,
                  fieldState: { error },
                }: {
                  field: any;
                  fieldState: { error?: any };
                }) => (
                  <TextField
                    {...field}
                    label="Monthly Expense"
                    type="number"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>

            {/* Savings Goal */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="savingsGoal"
                control={control}
                rules={{
                  required: "Savings Goal is required",
                  min: { value: 0, message: "Must be a positive number" },
                }}
                render={({
                  field,
                  fieldState: { error },
                }: {
                  field: any;
                  fieldState: { error?: any };
                }) => (
                  <TextField
                    {...field}
                    label="Savings Goal"
                    type="number"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>

            {/* Savings Balance */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="savingsBalance"
                control={control}
                rules={{
                  required: "Savings Balance is required",
                  min: { value: 0, message: "Must be a positive number" },
                }}
                render={({
                  field,
                  fieldState: { error },
                }: {
                  field: any;
                  fieldState: { error?: any };
                }) => (
                  <TextField
                    {...field}
                    label="Savings Balance"
                    type="number"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={2}>
            {/* Has Emergency Fund */}
            <Grid item xs={12}>
              <FormControlLabel
                className="text-black"
                control={
                  <Controller
                    name="hasEmergencyFund"
                    control={control}
                    render={({ field }: { field: any }) => (
                      <Checkbox
                        {...field}
                        checked={field.value}
                        color="primary"
                      />
                    )}
                  />
                }
                label="Do you have an Emergency Fund?"
              />
            </Grid>

            {/* Conditional Fields */}
            {hasEmergencyFund && (
              <>
                {/* Emergency Fund Amount */}
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="emergencyFund"
                    control={control}
                    rules={{
                      required: "Emergency Fund is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Emergency Fund Amount"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>

                {/* Emergency Fund Goal */}
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="emergencyFundGoal"
                    control={control}
                    rules={{
                      required: "Emergency Fund Goal is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Emergency Fund Goal"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
              </>
            )}
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={2}>
            {/* Has Retirement Fund */}
            <Grid item xs={12}>
              <FormControlLabel
                className="text-black"
                control={
                  <Controller
                    name="hasRetirementFund"
                    control={control}
                    render={({ field }: { field: any }) => (
                      <Checkbox
                        {...field}
                        checked={field.value}
                        color="primary"
                      />
                    )}
                  />
                }
                label="Do you have a Retirement Fund?"
              />
            </Grid>

            {/* Conditional Fields */}
            {hasRetirementFund && (
              <>
                {/* Retirement Fund Amount */}
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="retirementFund"
                    control={control}
                    rules={{
                      required: "Retirement Fund is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Retirement Fund Amount"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>

                {/* Retirement Fund Goal */}
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="retirementFundGoal"
                    control={control}
                    rules={{
                      required: "Retirement Fund Goal is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Retirement Fund Goal"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
              </>
            )}
          </Grid>
        );

      case 4:
        return (
          <Grid container spacing={2}>
            {/* Has Debt */}
            <Grid item xs={12}>
              <FormControlLabel
                className="text-black"
                control={
                  <Controller
                    name="hasDebt"
                    control={control}
                    render={({ field }: { field: any }) => (
                      <Checkbox
                        {...field}
                        checked={field.value}
                        color="primary"
                      />
                    )}
                  />
                }
                label="Do you have any Debt?"
              />
            </Grid>

            {/* Conditional Fields */}
            {hasDebt && (
              <>
                {/* Debt Type */}
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth error={!!errors.deptType}>
                    <InputLabel id="dept-type-label">Debt Type</InputLabel>
                    <Controller
                      name="deptType"
                      control={control}
                      rules={{ required: "Debt Type is required" }}
                      render={({ field }: { field: any }) => (
                        <Select
                          {...field}
                          labelId="dept-type-label"
                          label="Debt Type"
                        >
                          <MenuItem value="CreditCard">Credit Card</MenuItem>
                          <MenuItem value="StudentLoan">Student Loan</MenuItem>
                          <MenuItem value="AutoLoans">Auto Loans</MenuItem>
                          <MenuItem value="PersonalLoans">
                            Personal Loans
                          </MenuItem>
                          <MenuItem value="MedicalDept">Medical Debt</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      )}
                    />
                    {errors.deptType && (
                      <Typography variant="caption" color="error">
                        {errors.deptType.message}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>

                {/* Debt Amount */}
                <Grid item xs={12} sm={4}>
                  <Controller
                    name="debt"
                    control={control}
                    rules={{
                      required: "Debt amount is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Debt Amount"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>

                {/* Debt Goal */}
                <Grid item xs={12} sm={4}>
                  <Controller
                    name="debtGoal"
                    control={control}
                    rules={{
                      required: "Debt Goal is required",
                      min: { value: 0, message: "Must be a positive number" },
                    }}
                    render={({
                      field,
                      fieldState: { error },
                    }: {
                      field: any;
                      fieldState: { error?: any };
                    }) => (
                      <TextField
                        {...field}
                        label="Debt Goal"
                        type="number"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
              </>
            )}
          </Grid>
        );
      default:
        return "Unknown Step";
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        reset();
        setActiveStep(0);
      }}
      aria-labelledby="preference-modal-title"
      aria-describedby="preference-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="preference-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          User Preferences
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>

            {activeStep < steps.length - 1 && (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}

            {activeStep === steps.length - 1 && (
              <Button variant="contained" type="submit">
                Submit
              </Button>
            )}
          </Box>

          {/* Linear Progress Indicator */}
          <Box sx={{ mt: 4 }}>
            <LinearProgress
              variant="determinate"
              value={((activeStep + 1) / steps.length) * 100}
            />
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default PreferenceModal;
