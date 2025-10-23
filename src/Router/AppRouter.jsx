import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AppPage from "../pages/AppPage";
import Login from "../components/auth/Login";
import PrivateRoute from "../components/auth/PrivateRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<div className="text-center mt-32 text-xl">404 - Page Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
