import { Button, ButtonProps } from "@mui/joy";
import { SignInMethod, useSignIn } from "../core/auth";
import { GoogleIcon } from "../icons";

export function LoginButton(props: LoginButtonProps): JSX.Element {
  const { password, email, signInMethod, ...other } = props;
  const [signIn, inFlight] = useSignIn(signInMethod);

  const icon =
    signInMethod === "google.com" ? (
      <GoogleIcon />
    ) : signInMethod === "email" ? null : null;

  const onSubmit = async () => {
    try {
      if (signInMethod === "email") {
        signIn(password, email);
      } else {
        signIn();
      }
    } catch (err) {
      console.error("Sign in error:", err);
    }
  };

  return (
    <Button
      startDecorator={icon}
      variant="outlined"
      onClick={onSubmit}
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
      email?: string;
      password?: string;
    }
  >,
  "children"
>;
