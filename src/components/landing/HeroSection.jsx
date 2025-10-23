import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-img.png";
import logo from "../../assets/Lume-Logo.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 gap-10">
      <div>
        <img src={logo} alt="Lumé Logo" className="w-24 mb-4 mx-auto md:mx-0" />
        <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight">
          Elegance meets <span className="text-lume-gold">Intelligence</span>
        </h1>
        <p className="font-body text-lume-charcoal text-lg mt-6 max-w-md">
          Discover your perfect outfit through AI recommendations tailored to your style.
        </p>
        <Link
          to="/app"
          className="inline-block mt-10 bg-lume-black text-lume-white px-8 py-3 rounded-full font-body font-medium hover:bg-lume-gold hover:text-lume-black transition-all"
        >
          Try Lume Now
        </Link>
      </div>
      <img
        src={heroImg}
        alt="Fashion illustration"
        className="w-[320px] md:w-[480px] object-contain"
      />
    </section>
  );
}
