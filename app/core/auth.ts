import {
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../routes/signUp";
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

export function useSignUp(
  formData: FormData | null,
): [signUp: () => void, inFlight: boolean] {
  if (!formData || formData === null) {
    return [() => {}, false];
  }
  const navigate = useNavigate();
  const [inFlight, setInFlight] = useState(false);

  const signUp = useCallback(() => {
    const auth = getAuth(app);
    setInFlight(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigate("/");
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: formData.username,
          });
        }
      })
      .finally(() => setInFlight(false));
  }, [formData.email, formData.password, navigate]);

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
