import { Alert, Button } from "@mui/joy";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { useSignUp } from "../core/auth";
import { FormData, FormErrors } from "../routes/signUp";

export function SignUpButton({
  formData,
  errors,
}: {
  formData: FormData | null;
  errors: FormErrors;
}): JSX.Element {
  const [signUp, inFlight] = useSignUp();
  const [showError, setShowError] = useState(false);
  const auth = getAuth();

  const hasErrors = Object.values(errors).some((error) => error !== null);

  const trySignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowError(false);
    console.log("formData", formData);

    if (hasErrors || !formData) {
      setShowError(true);
      return;
    }

    try {
      await signUp(formData);

      // Send email verification
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser, {
          url: `${window.location.origin}/login`, // Redirect URL after verification
          handleCodeInApp: true,
        });

        // Show success message to check email
        window.alert(
          "Please check your email to verify your account before logging in!",
        );
      }
    } catch (err) {
      console.error("Signup error:", err);
      setShowError(true);
    }
  };

  return (
    <>
      {showError && hasErrors && (
        <Alert color="warning" variant="soft" sx={{ mb: 2 }}>
          Please fix the form errors before submitting
        </Alert>
      )}

      <Button
        onClick={trySignUp}
        disabled={inFlight}
        loading={inFlight}
        color="primary"
        type="submit"
        fullWidth
      >
        Sign Up
      </Button>
    </>
  );
}
