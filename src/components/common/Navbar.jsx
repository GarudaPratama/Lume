import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect ke halaman login
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-lume-white shadow-sm">
      <h1 className="font-display text-2xl font-bold">Lumé</h1>

      <ul className="flex gap-6 font-body items-center">
        <li>
          <Link to="/" className="hover:text-lume-gold">
            Home
          </Link>
        </li>
        <li>
          <a href="#features" className="hover:text-lume-gold">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-lume-gold">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-lume-gold">
            Contact
          </a>
        </li>

        {user ? (
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-lume-black text-lume-white rounded-full hover:bg-lume-gold hover:text-lume-black transition-all"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              className="px-4 py-2 bg-lume-gold text-lume-black rounded-full hover:opacity-80 transition-all"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
