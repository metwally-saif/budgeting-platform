import {
  Email,
  Lock as LockIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpButton } from "../components";

export type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Component = function signUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const password = watch("password");

  const onSubmit = async (data: FormData) => {
    setFormData(data);
    console.log(data);
    setSubmitSuccess(true);
    reset();
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box textAlign="center" mb={2}>
          <Typography component="h1" gutterBottom>
            Create an Account
          </Typography>
          <Typography>Enter your details to sign up</Typography>
        </Box>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            fullWidth
            variant="outlined"
            startDecorator={<PersonIcon />}
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>

          <Input
            fullWidth
            type="email"
            variant="outlined"
            error={!!errors.email}
            placeholder="Email"
            startDecorator={<Email />}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            fullWidth
            type="password"
            variant="outlined"
            error={!!errors.password}
            startDecorator={<LockIcon />}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            fullWidth
            type="password"
            variant="outlined"
            placeholder="Confirm Password"
            error={!!errors.confirmPassword}
            startDecorator={<LockIcon />}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
        </FormControl>

        <SignUpButton formData={formData} />

        {submitSuccess && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Sign up successful! Welcome aboard.
          </Alert>
        )}
      </Box>
    </Container>
  );
};
