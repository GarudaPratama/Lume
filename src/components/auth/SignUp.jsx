import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/app"); // redirect ke app setelah signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lume-beige px-6">
      <form
        onSubmit={handleSignUp}
        className="bg-lume-white p-10 rounded-3xl shadow-md w-full max-w-md text-center"
      >
        <h2 className="font-display text-3xl mb-6 text-lume-charcoal">Create Your Account</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 font-body">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl border border-lume-gray mb-4 bg-lume-white text-lume-black placeholder-lume-charcoal focus:border-lume-gold outline-none font-body"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl border border-lume-gray mb-4 bg-lume-white text-lume-black placeholder-lume-charcoal focus:border-lume-gold outline-none font-body"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 rounded-xl border border-lume-gray mb-6 bg-lume-white text-lume-black placeholder-lume-charcoal focus:border-lume-gold outline-none font-body"
          required
        />

        <button
          type="submit"
          className="w-full bg-lume-black text-lume-white py-3 rounded-full hover:bg-lume-gold hover:text-lume-black transition-all font-body font-medium"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm font-body text-lume-charcoal">
          Already have an account?{" "}
          <span className="text-lume-gold cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
