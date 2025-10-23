import Navbar from "../components/common/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import { useScroll, useTransform, motion } from "framer-motion";


export default function LandingPage() {
  return (
    <div className="bg-lume-beige text-lume-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
