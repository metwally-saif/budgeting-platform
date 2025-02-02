import { useContext } from "react";
import { UserContext } from "../context/auth-context";

export function useUser() {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return { user };
}
