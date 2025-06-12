import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReflectPage from "./pages/ReflectPage";
import ImportPage from "./pages/ImportPage";
import LandingPage from "./pages/LandingPage";
import { Amplify } from "aws-amplify";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore generated on build
import outputs from "../amplify_outputs.json";
import ProtectedRoute from "./components/ProtectedRoute";

Amplify.configure(outputs);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/budget"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />
      <Route
        path="/reflect/*"
        element={
          <ProtectedRoute>
            <ReflectPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/import"
        element={
          <ProtectedRoute>
            <ImportPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
