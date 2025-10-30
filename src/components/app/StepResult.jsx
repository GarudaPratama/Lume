import { motion } from "framer-motion";

export default function StepResult({ result, products, imageUrl, onRestart }) {
  if (!result) return null;

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Preview Image */}
      {imageUrl && (
        <motion.div variants={itemVariants} className="w-full max-w-md mx-auto">
          <img
            src={imageUrl}
            alt="Uploaded Outfit"
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>
      )}

      {/* Ringkasan Outfit */}
      <motion.div
        variants={itemVariants}
        className="bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-2">{result.summary}</h2>
        <p className="text-gray-700">{result.details}</p>
      </motion.div>

      {/* Produk */}
      {products.length > 0 && (
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4">Recommended Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, idx) => (
              <motion.a
                key={idx}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h4 className="font-medium text-center">{product.name}</h4>
                {product.price && (
                  <p className="text-lume-gold font-semibold mt-1">
                    ${product.price}
                  </p>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Restart Button */}
      <motion.div variants={itemVariants} className="mt-6">
        <button
          onClick={onRestart}
          className="bg-lume-black text-lume-gold px-6 py-3 rounded-full font-medium hover:bg-lume-gold hover:text-lume-black transition-all"
        >
          Restart
        </button>
      </motion.div>
    </motion.div>
  );
}
