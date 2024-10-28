import { Email, InfoOutlined, Lock as LockIcon } from "@mui/icons-material";
import {
  Container,
  ContainerProps,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Typography,
} from "@mui/joy";
import { useForm } from "react-hook-form";
import { LoginButton } from "../components";

export type FormData = {
  email: string;
  password: string;
};

export const Component = function Login(): JSX.Element {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onChange", // Validate on change instead of just on submit
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "80%",
        gap: 1,
      }}
      maxWidth="xs"
    >
      <Typography sx={{ mb: 1, textAlign: "center" }} level="h2">
        Sign In
      </Typography>

      <LoginButton signInMethod="google.com" />
      <Typography level="body-md" textAlign="center">
        Or
      </Typography>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography level="body-md">Sign in with email</Typography>
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
      </Container>

      <LoginButton
        email={watch().email}
        password={watch().password}
        signInMethod="email"
        type="submit"
      />
      <Typography level="body-sm" textAlign="center" sx={{ mt: 2 }}>
        Don&apos;t have an account?{" "}
        <Typography
          component="a"
          href="/signup"
          fontWeight="lg"
          color="primary"
        >
          Sign Up
        </Typography>
      </Typography>
    </Container>
  );
};

export type LoginProps = Omit<ContainerProps, "children">;
