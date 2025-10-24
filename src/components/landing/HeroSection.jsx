import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import modelImage from "../../assets/LUME.png";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, -50]);
  const yContent = useTransform(scrollY, [0, 500], [0, 30]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">


      <motion.img
        style={{ y: yBg }}
        src={modelImage}
        alt="Model wearing outfit"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#FAEEDC]/60" />


      <motion.div
        style={{ y: yContent }}
        className="relative z-10 px-6 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-800 leading-tight drop-shadow-md">
          Find Your <br />
          <span className="text-gray-900">Perfect Outfit</span>
        </h1>
        <p className="font-body text-gray-700 text-lg mt-4 drop-shadow-sm">
          Discover the latest trends and styles to elevate your wardrobe.
        </p>
        <Link
          to="/signup"
          className="inline-block mt-8 bg-[#C36B3D] text-white px-8 py-3 rounded-md font-body font-medium hover:bg-[#a95c34] transition-all shadow-md"
        >
          Try Lume Now
        </Link>
      </motion.div>
    </section>
  );
}
