import { useState } from "react";

export default function StepPreferences({ onBack, onGenerate }) {
  const [preferences, setPreferences] = useState({
    style: "",
    occasion: "",
    colorTone: "",
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preferences.style || !preferences.occasion || !preferences.colorTone) {
      alert("Please fill all fields ✨");
      return;
    }
    onGenerate(preferences);
  };

  return (
    <section className="bg-lume-beige p-10 rounded-3xl shadow-md text-center">
      <h2 className="font-display text-3xl md:text-4xl text-lume-black mb-6">
        Tell Us Your Style
      </h2>

      <form
        onSubmit={handleSubmit}
        className="font-body text-lume-charcoal space-y-6 max-w-lg mx-auto"
      >
        <div>
          <label className="block text-left font-medium mb-2">
            Your fashion style
          </label>
          <select
            name="style"
            value={preferences.style}
            onChange={handleChange}
            className="w-full border border-lume-gray rounded-xl p-3 bg-white focus:border-lume-gold outline-none"
          >
            <option value="">Select style</option>
            <option value="minimalist">Minimalist</option>
            <option value="streetwear">Streetwear</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="elegant">Elegant</option>
          </select>
        </div>

        <div>
          <label className="block text-left font-medium mb-2">
            Occasion or event
          </label>
          <input
            type="text"
            name="occasion"
            placeholder="e.g. dinner, meeting, photoshoot"
            value={preferences.occasion}
            onChange={handleChange}
            className="w-full border border-lume-gray rounded-xl p-3 bg-white focus:border-lume-gold outline-none"
          />
        </div>

        <div>
          <label className="block text-left font-medium mb-2">
            Preferred color tone
          </label>
          <select
            name="colorTone"
            value={preferences.colorTone}
            onChange={handleChange}
            className="w-full border border-lume-gray rounded-xl p-3 bg-white focus:border-lume-gold outline-none"
          >
            <option value="">Select color tone</option>
            <option value="neutral">Neutral (beige, white, gray)</option>
            <option value="warm">Warm (brown, gold, rust)</option>
            <option value="cool">Cool (blue, silver, black)</option>
          </select>
        </div>

        <div className="flex justify-center gap-4 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white border border-lume-gray text-lume-black hover:border-lume-gold transition-all"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-lume-black text-lume-white hover:bg-lume-gold hover:text-lume-black transition-all"
          >
            Generate Outfit
          </button>
        </div>
      </form>
    </section>
  );
}
