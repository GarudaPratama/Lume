import { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-lume-beige">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-md w-full max-w-md">
        <h2 className="font-display text-2xl mb-6 text-center text-lume-charcoal">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl border border-lume-gray mb-4 text-lume-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl border border-lume-gray mb-6 text-lume-black"
        />
        <button className="w-full bg-lume-black text-lume-white py-3  rounded-full hover:bg-lume-gold transition-all">Login</button>

        <p className="mt-4 text-sm font-body text-lume-charcoal">
          Don't have an account?{" "}
          <span className="text-lume-gold cursor-pointer" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
