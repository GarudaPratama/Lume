// src/components/auth/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center mt-32">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
