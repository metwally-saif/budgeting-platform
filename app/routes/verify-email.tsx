import { Box, Button, Typography } from "@mui/joy";
import { sendEmailVerification } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../core/auth";

export const Component = function VerifyEmailPage(): JSX.Element {
  const location = useLocation();
  const email = location.state?.email;
  const user = useCurrentUser();

  if (!email) {
    return <Navigate to="/signup" replace />;
  }

  const handleResendVerification = async () => {
    if (user) {
      try {
        await sendEmailVerification(user, {
          url: `${window.location.origin}/login`,
          handleCodeInApp: true,
        });
        window.alert("Verification email resent!");
      } catch (error) {
        console.error("Error resending verification:", error);
        window.alert("Error resending verification email. Please try again.");
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      gap={2}
      p={3}
    >
      <Typography level="h4" component="h1">
        Verify Your Email
      </Typography>

      <Typography textAlign="center" mb={2}>
        We&apos;ve sent a verification email to:
        <br />
        <strong>{email}</strong>
      </Typography>

      <Typography textAlign="center" mb={3}>
        Please check your email and click the verification link to complete your
        registration.
      </Typography>

      <Button
        onClick={handleResendVerification}
        variant="outlined"
        color="primary"
      >
        Resend Verification Email
      </Button>

      <Button
        component="a"
        href="/login"
        variant="plain"
        color="neutral"
        sx={{ mt: 2 }}
      >
        Return to Login
      </Button>
    </Box>
  );
};
