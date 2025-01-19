import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate, useLocation } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-slate-100 flex-col gap-5">
      <h1 className="text-black">Budget AI</h1>
      <Authenticator
        initialState={location.pathname === "/login" ? "signIn" : "signUp"}
      >
        {({ user }) => {
          if (user) {
            navigate("/budget");
            return <div>Redirecting...</div>;
          }
          return <div>Please sign in</div>;
        }}
      </Authenticator>
    </div>
  );
}

export default LoginPage;
