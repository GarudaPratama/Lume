import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTASection() {
  const { scrollY } = useScroll();
  const yCta = useTransform(scrollY, [1500, 2000], [0, 20]);

  return (
    <motion.section
      style={{ y: yCta }}
      className="py-24 text-center bg-lume-black text-lume-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-5xl mb-6">Redefine Your Wardrobe</h2>
      <p className="font-body text-lume-silver mb-10">
        Join Lumé today and experience the future of personalized fashion.
      </p>
      <Link
        to="/signup"
        className="bg-lume-gold text-lume-black font-body font-semibold px-10 py-4 rounded-full hover:opacity-80 transition-all"
      >
        Try Lumé Now
      </Link>
    </motion.section>
  );
}
