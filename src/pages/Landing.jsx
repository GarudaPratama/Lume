import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Lumé</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your AI-powered outfit stylist — simple, smart, and stylish.
      </p>
      <Link
        to="/app"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Try Lumé
      </Link>
    </div>
  );
}
