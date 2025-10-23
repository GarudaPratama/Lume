export default function StepResult({ result, onRestart }) {
  return (
    <section className="bg-lume-beige p-10 rounded-3xl shadow-md text-center">
      <h2 className="font-display text-3xl md:text-4xl text-lume-black mb-6">
        Your AI-Recommended Look
      </h2>

      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-xl mx-auto">
        <p className="font-body text-lg text-lume-charcoal mb-4 italic">“{result?.summary}”</p>
        <p className="font-body text-lume-black">{result?.details}</p>
      </div>

      <button
        onClick={onRestart}
        className="mt-8 bg-lume-black text-lume-white px-8 py-3 rounded-full font-body hover:bg-lume-gold hover:text-lume-black transition-all"
      >
        Start Again
      </button>
    </section>
  );
}
