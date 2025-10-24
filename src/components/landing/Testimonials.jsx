import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Garuda Pratama",
    text: "Lumé helped me completely redefine my wardrobe — it's like having a personal stylist in my pocket!",
    role: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Daniel Carter",
    text: "The AI recommendations are spot on! I’ve never felt more confident with my outfits.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Sofia Nguyen",
    text: "Beautiful design, intuitive flow, and stunning results. Lumé makes fashion fun again!",
    role: "Model & Influencer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Mikael Hart",
    text: "From the first click, Lumé feels premium and effortless. Every suggestion feels made just for me.",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + length) % length);

  const current = testimonials[index];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative py-24 bg-lume-beige overflow-hidden text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-display text-4xl md:text-5xl font-bold text-lume-charcoal mb-12"
        variants={fadeIn}
      >
        What People Say About <span className="text-lume-gold">Lumé</span>
      </motion.h2>

      <motion.div
        className="relative max-w-3xl mx-auto"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-lume-white rounded-2xl shadow-lg px-10 py-12 flex flex-col items-center"
          >
            
            <img
              src={current.image}
              alt={current.name}
              className="w-24 h-24 rounded-full object-cover mb-6 shadow-md"
            />
            <p className="text-lg italic text-lume-charcoal mb-8">
              “{current.text}”
            </p>
            <h4 className="font-display text-xl font-semibold text-lume-black">
              {current.name}
            </h4>
            <p className="text-lume-gold text-sm">{current.role}</p>
          </motion.div>
        </AnimatePresence>


        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-lume-black/20 hover:bg-lume-gold text-white hover:text-lume-black p-3 rounded-full transition-all"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-lume-black/20 hover:bg-lume-gold text-white hover:text-lume-black p-3 rounded-full transition-all"
        >
          ›
        </button>


        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-lume-gold" : "bg-lume-gray"
              } transition-all`}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
