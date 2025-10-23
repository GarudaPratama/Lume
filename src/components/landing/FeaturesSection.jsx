export default function FeaturesSection() {
  const features = [
    { title: "AI-Powered", desc: "Get outfit suggestions based on your preferences and mood." },
    { title: "Minimalist Design", desc: "Clean, elegant, and easy-to-use interface." },
    { title: "Personalized Style", desc: "Your wardrobe, reimagined with data-driven insights." },
  ];

  return (
    <section className="py-24 px-6 md:px-20 text-center bg-lume-white">
      <h2 className="font-display text-5xl font-semibold mb-12">Why Choose Lumé</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-lume-beige rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-display text-2xl mb-3">{f.title}</h3>
            <p className="font-body text-lume-charcoal">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
