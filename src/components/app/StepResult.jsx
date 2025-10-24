import { motion } from "framer-motion";

export default function StepResult({ result, products, onRestart }) {
  if (!result) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-lume-beige p-10 rounded-3xl shadow-md text-center"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h2 className="font-display text-3xl mb-6 text-lume-black">
        Your AI-Recommended Look ✨
      </h2>

      {result.imageUrl && (
        <motion.img
          src={result.imageUrl}
          alt="Generated Outfit"
          className="w-full max-w-md mx-auto rounded-2xl shadow-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-xl mx-auto mb-12">
        <p className="font-body text-lg text-lume-charcoal mb-4 italic">
          “{result.summary || "Your custom AI look is ready!"}”
        </p>
      </div>

      {products && products.length > 0 && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-display text-2xl text-lume-black mb-6">
            Recommended Items for Your Look 💅
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h4 className="font-body text-sm text-lume-black line-clamp-2 mb-2">
                  {p.name}
                </h4>
                <p className="font-body text-lume-gold font-semibold mb-3">
                  {p.price}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-lume-black text-lume-white text-sm py-2 rounded-full hover:bg-lume-gold hover:text-lume-black transition-all"
                >
                  Buy Now →
                </a>
                {p.store && (
                  <p className="text-xs text-lume-charcoal mt-2">from {p.store}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <button
        onClick={onRestart}
        className="mt-12 bg-lume-black text-lume-white px-8 py-3 rounded-full font-body hover:bg-lume-gold hover:text-lume-black transition-all"
      >
        Start Again
      </button>
    </motion.section>
  );
}
  