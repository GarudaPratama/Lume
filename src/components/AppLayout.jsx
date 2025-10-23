// src/components/app/AppLayout.jsx
import Navbar from "../common/Navbar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lume-white to-lume-beige text-lume-black">
      <Navbar />
      <main className="px-6 md:px-16 py-12">{children}</main>
    </div>
  );
}
