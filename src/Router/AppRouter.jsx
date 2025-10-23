import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AppPage from "../pages/AppPage"; // rename dari App.jsx lama

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="*" element={<div className="text-center mt-32 text-xl">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
