// src/components/common/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/"); // redirect ke LandingPage
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-lume-white shadow-md">
      <h1
        className="font-display text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Lumé
      </h1>

      <ul className="flex gap-6 font-body items-center">
        {!user && (
          <>
            <li>
              <Link to="/login" className="hover:text-lume-gold">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-lume-gold">
                Sign Up
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <span className="text-lume-charcoal">Hi, {user.email}</span>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-lume-black text-lume-white px-4 py-2 rounded-full hover:bg-lume-gold hover:text-lume-black transition-all font-body"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
