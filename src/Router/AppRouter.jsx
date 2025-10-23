import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "../pages/LandingPage";
import AppPage from "../pages/AppPage";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/app" element={<PageTransition><AppPage /></PageTransition>} />
        <Route
          path="*"
          element={<PageTransition><div className="text-center mt-32 text-xl">404 - Page Not Found</div></PageTransition>}
        />
      </Routes>
    </AnimatePresence>
  );
}

// Component animasi halaman
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
