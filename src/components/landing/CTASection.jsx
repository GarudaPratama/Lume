import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 text-center bg-lume-black text-lume-white">
      <h2 className="font-display text-5xl mb-6">Redefine Your Wardrobe</h2>
      <p className="font-body text-lume-silver mb-10">
        Join Lumé today and experience the future of personalized fashion.
      </p>
      <Link
        to="/app"
        className="bg-lume-gold text-lume-black font-body font-semibold px-10 py-4 rounded-full hover:opacity-80 transition-all"
      >
        Try Lumé Now
      </Link>
    </section>
  );
}
