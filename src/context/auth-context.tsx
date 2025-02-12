import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useAuthenticator } from "@aws-amplify/ui-react";

// Define the shape of your user (you may want to define this in a separate TypeScript file)
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<User | null>(null);
interface User {
  email: string;
  email_verified: boolean;
  sub: string;
  family_name: string;
  given_name: string;
  username: string;
}
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const { user: userObj } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userAttr = await fetchUserAttributes();

        setUser({
          email: userObj.signInDetails?.loginId || "",
          email_verified: Boolean(userAttr.email_verified) || false,
          sub: userObj.userId || "",
          family_name: userAttr.family_name || "",
          given_name: userAttr.given_name || "",
          username: userObj?.username || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, [userObj]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
