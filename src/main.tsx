import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./context/auth-context";
import { Authenticator } from "@aws-amplify/ui-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Authenticator.Provider>
      <UserProvider>
        <App />
      </UserProvider>
    </Authenticator.Provider>
  </StrictMode>,
);
