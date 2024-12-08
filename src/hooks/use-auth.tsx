import { useState, useCallback, useEffect } from "react";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";

export function useUser() {
  interface User {
    email: string;
    email_verified: boolean;
    sub: string;
    family_name: string;
    given_name: string;
    username: string;
  }

  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async () => {
    const userAttr = await fetchUserAttributes();
    const { username } = await getCurrentUser();

    setUser({
      email: userAttr.email || "",
      email_verified: Boolean(userAttr.email_verified) || false,
      sub: userAttr.sub || "",
      family_name: userAttr.family_name || "",
      given_name: userAttr.given_name || "",
      username,
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user };
}
