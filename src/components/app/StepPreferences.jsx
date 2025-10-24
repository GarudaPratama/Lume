import { useState } from "react";

export default function StepPreferences({ onBack, onGenerate }) {
  const [style, setStyle] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ style, occasion });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-lume-beige p-8 rounded-3xl shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-display mb-6">Choose Your Style ✨</h2>

      <label className="block mb-4 text-lume-black font-medium">
        Style
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="mt-2 p-2 rounded-lg w-full"
        >
          <option value="">Select style</option>
          <option value="Old Money">Old Money</option>
          <option value="Skena">Skena</option>
          <option value="Casual">Casual</option>
          <option value="Streetwear">Streetwear</option>
        </select>
      </label>

      <label className="block mb-4 text-lume-black font-medium">
        Occasion
        <input
          type="text"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          placeholder="E.g., party, office"
          className="mt-2 p-2 rounded-lg w-full"
        />
      </label>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded-full bg-lume-black text-lume-white hover:bg-lume-gold"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-lume-gold text-lume-black hover:bg-lume-black hover:text-lume-gold"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
