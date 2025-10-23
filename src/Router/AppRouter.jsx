// src/Router/AppRouter.jsx
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "../pages/LandingPage";
import AppPage from "../pages/AppPage";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

// PrivateRoute: hanya bisa diakses jika user login
function PrivateRoute({ children }) {
  const [user] = useAuthState(auth);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

// Animasi halaman
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route
          path="/app"
          element={
            <PageTransition>
              <PrivateRoute>
                <AppPage />
              </PrivateRoute>
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={<PageTransition><div className="text-center mt-32 text-xl">404 - Page Not Found</div></PageTransition>}
        />
      </Routes>
    </AnimatePresence>
  );
}
