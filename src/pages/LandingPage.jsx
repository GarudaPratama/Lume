import Navbar from "../components/common/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import Testimonials from "../components/landing/Testimonials";

export default function LandingPage() {
  return (
    <div className="bg-lume-beige text-lume-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
