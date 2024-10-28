import { Button, ButtonProps } from "@mui/joy";
import { SignInMethod, useSignIn } from "../core/auth";
import { GoogleIcon } from "../icons";

export function LoginButton(props: LoginButtonProps): JSX.Element {
  const { signInMethod, ...other } = props;
  const [signIn, inFlight] = useSignIn(signInMethod);

  const icon =
    signInMethod === "google.com" ? (
      <GoogleIcon />
    ) : signInMethod === "email" ? null : null;

  return (
    <Button
      startDecorator={icon}
      variant="outlined"
      onClick={signIn}
      loading={inFlight}
      children={
        signInMethod === "google.com"
          ? "Continue via Google"
          : signInMethod === "email"
            ? "Sign in"
            : "unknown"
      }
      {...other}
    />
  );
}

export type LoginButtonProps = Omit<
  ButtonProps<
    "button",
    {
      signInMethod: SignInMethod;
    }
  >,
  "children"
>;
