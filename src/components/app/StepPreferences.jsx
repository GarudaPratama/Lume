import { useState } from "react";
import { motion } from "framer-motion";

export default function StepPreferences({ onBack, onGenerate }) {
  const [style, setStyle] = useState("");
  const [occasion, setOccasion] = useState("");

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!style || !occasion) return alert("Isi semua field dulu ✨");
    onGenerate({ style, occasion });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold mb-4">Set Your Preferences</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Style</label>
          <input
            type="text"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            placeholder="e.g., Casual, Formal"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lume-gold"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Occasion</label>
          <input
            type="text"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            placeholder="e.g., Party, Work"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lume-gold"
            required
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-all"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-lume-gold text-lume-black px-6 py-2 rounded-full hover:bg-lume-black hover:text-lume-gold transition-all"
          >
            Generate
          </button>
        </div>
      </form>
    </motion.div>
  );
}
