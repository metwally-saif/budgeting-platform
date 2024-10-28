import {
  AuthErrorCodes,
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../routes/signUp";
import { alert } from "../utils/alert";
import { app, auth } from "./firebase";
import { store } from "./store";

export const currentUser = atom<Promise<User | null> | User | null>(
  new Promise<User | null>(() => {}),
);

currentUser.debugLabel = "currentUser";

const unsubscribe = auth.onAuthStateChanged((user) => {
  store.set(currentUser, user);
});

if (import.meta.hot) {
  import.meta.hot.dispose(() => unsubscribe());
}

export function useCurrentUser() {
  return useAtomValue(currentUser);
}

export const currentUserLoadable = loadable(currentUser);

export function useCurrentUserLoadable() {
  return useAtomValue(currentUserLoadable);
}

type SignUpFunction = (formData: FormData) => Promise<void>;

export function useSignUp(): [signUp: SignUpFunction, inFlight: boolean] {
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);
  const auth = getAuth(app);

  const signUp = useCallback(
    async (formData: FormData) => {
      setInFlight(true);

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );

        await updateProfile(userCredential.user, {
          displayName: formData.username,
        });

        // Send verification email
        await sendEmailVerification(userCredential.user, {
          url: `${window.location.origin}/login`,
          handleCodeInApp: true,
        });

        // Navigate to a verification pending page instead of home
        navigate("/verify-email", {
          state: { email: formData.email },
        });
      } catch (error: unknown) {
        if (!(error instanceof Error)) {
          alert("An error occurred. Please try again.");
          return;
        }

        const errorCode = (error as { code?: string }).code;
        switch (errorCode) {
          case AuthErrorCodes.EMAIL_EXISTS:
            alert("Email already exists");
            break;
          case AuthErrorCodes.INVALID_EMAIL:
            alert("Invalid email");
            break;
          case AuthErrorCodes.WEAK_PASSWORD:
            alert("Weak password");
            break;
          case AuthErrorCodes.NETWORK_REQUEST_FAILED:
            alert("Network request failed");
            break;
          case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            alert("Too many attempts. Try again later.");
            break;
          default:
            alert("An error occurred. Please try again.");
        }

        console.error("Sign up error:", error);
      } finally {
        setInFlight(false);
      }
    },
    [auth, navigate],
  );

  return [signUp, inFlight] as const;
}

export function useSignIn(
  signInMethod: SignInMethod,
  password?: string,
  email?: string,
): [signIn: () => void, inFlight: boolean] {
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);

  const signIn = useCallback(() => {
    let p: Promise<UserCredential> | null = null;

    if (signInMethod === "email") {
      if (!email || !password) {
        throw new Error("Email and password required");
      }
      const auth = getAuth(app);
      p = signInWithEmailAndPassword(auth, email!, password!);
    }

    if (signInMethod === "google.com") {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      provider.setCustomParameters({
        // login_hint: ...
        prompt: "consent",
      });
      p = signInWithPopup(auth, provider);
    }

    if (!p) throw new Error(`Not supported: ${signInMethod}`);

    setInFlight(true);
    p.then(() => navigate("/")).finally(() => setInFlight(false));
  }, [signInMethod, navigate]);

  return [signIn, inFlight] as const;
}

export type SignInMethod = "google.com" | "email";
