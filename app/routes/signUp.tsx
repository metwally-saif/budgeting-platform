import {
  Email,
  InfoOutlined,
  Lock as LockIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginButton, SignUpButton } from "../components";

export type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormErrors = {
  username?: FieldError;
  email?: FieldError;
  password?: FieldError;
  confirmPassword?: FieldError;
};

export const Component = function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange", // Validate on change instead of just on submit
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [formError, setFormError] = useState<string | null>(null);
  const password = watch("password");

  const onSubmit = async () => {
    try {
      // Reset the form
      reset();

      // Redirect to the login page
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setFormError("An error occurred. Please try again.");
    }
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
          py: 4, // Add some padding
        }}
      >
        <Box textAlign="center" mb={2}>
          <Typography level="h4" component="h1" gutterBottom>
            Create an Account
          </Typography>
          <Typography level="body-md" color="neutral">
            Enter your details to sign up
          </Typography>
        </Box>

        {formError && (
          <Alert
            color="danger"
            variant="soft"
            endDecorator={
              <button onClick={() => setFormError(null)}>Dismiss</button>
            }
          >
            {formError}
          </Alert>
        )}

        <LoginButton signInMethod="google.com" />

        <Typography level="body-md" textAlign="center">
          Or
        </Typography>

        <FormControl error={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input
            fullWidth
            variant="outlined"
            startDecorator={<PersonIcon />}
            placeholder="Enter your username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/,
                message:
                  "Username can only contain letters, numbers, underscores and hyphens",
              },
            })}
          />
          {errors.username && (
            <FormHelperText>
              <InfoOutlined sx={{ mr: 1, fontSize: "sm" }} />
              {errors.username.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl error={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            fullWidth
            type="email"
            variant="outlined"
            placeholder="Enter your email"
            startDecorator={<Email />}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <FormHelperText>
              <InfoOutlined sx={{ mr: 1, fontSize: "sm" }} />
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl error={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            fullWidth
            type="password"
            variant="outlined"
            startDecorator={<LockIcon />}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least one letter, one number, and one special character",
              },
            })}
          />
          {errors.password && (
            <FormHelperText>
              <InfoOutlined sx={{ mr: 1, fontSize: "sm" }} />
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl error={!!errors.confirmPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            fullWidth
            type="password"
            variant="outlined"
            placeholder="Confirm your password"
            startDecorator={<LockIcon />}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <FormHelperText>
              <InfoOutlined sx={{ mr: 1, fontSize: "sm" }} />
              {errors.confirmPassword.message}
            </FormHelperText>
          )}
        </FormControl>

        <SignUpButton formData={watch()} errors={errors} />

        <Typography level="body-sm" textAlign="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Typography
            component="a"
            href="/login"
            fontWeight="lg"
            color="primary"
          >
            Sign in
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

// Add prop types for better type checking
Component.displayName = "SignUpPage";
