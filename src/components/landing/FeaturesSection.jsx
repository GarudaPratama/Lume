import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturesSection() {
  const { scrollY } = useScroll();
  const yFeatures = useTransform(scrollY, [500, 1000], [0, -30]); // sedikit naik saat scroll

  const features = [
    { title: "AI-Powered", desc: "Get outfit suggestions based on your preferences and mood." },
    { title: "Minimalist Design", desc: "Clean, elegant, and easy-to-use interface." },
    { title: "Personalized Style", desc: "Your wardrobe, reimagined with data-driven insights." },
  ];

  return (
    <motion.section
      style={{ y: yFeatures }}
      className="py-24 px-6 md:px-20 text-center bg-lume-white"
    >
      <motion.h2
        className="font-display text-5xl font-semibold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why Choose Lumé
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="p-8 bg-lume-beige rounded-2xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-3">{f.title}</h3>
            <p className="font-body text-lume-charcoal">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
