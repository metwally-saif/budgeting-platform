import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReflectPage from "./pages/ReflectPage";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ProtectedRoute from "./components/ProtectedRoute";

Amplify.configure(outputs);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reflect/*" element={<ReflectPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
