import { Link } from "react-router-dom";
import modelImage from "../../assets/LUME.png"; // ganti sesuai path gambarmu

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-[#FAEEDC] overflow-hidden">

      <img
        src={modelImage}
        alt="Model wearing outfit"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-[#FAEEDC]/60" />


      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-800 leading-tight drop-shadow-md">
          Find Your <br />
          <span className="text-gray-900">Perfect Outfit</span>
        </h1>
        <p className="font-body text-gray-700 text-lg mt-4 drop-shadow-sm">
          Discover the latest trends and styles to elevate your wardrobe.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-[#C36B3D] text-white px-8 py-3 rounded-md font-body font-medium hover:bg-[#a95c34] transition-all shadow-md"
        >
          Try Lume Now
        </Link>
      </div>
    </section>
  );
}
