import { Button } from "@mui/joy";
import { useSignUp } from "../core/auth";
import { FormData } from "../routes/signUp";

export function SignUpButton({
  formData,
}: {
  formData: FormData | null;
}): JSX.Element {
  const [signUp, inFlight] = useSignUp(formData);

  return (
    <Button
      onClick={signUp}
      disabled={inFlight}
      loading={inFlight}
      color="primary"
      type="submit"
    >
      Sign Up
    </Button>
  );
}
