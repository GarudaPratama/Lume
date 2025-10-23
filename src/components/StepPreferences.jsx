import React, { useState } from "react";

export default function StepPreferences({ onNext }) {
  const [style, setStyle] = useState("casual");
  const [weather, setWeather] = useState("warm");

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl mb-6">Select your preferences</h2>

      <div className="mb-4">
        <label className="block mb-1">Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="p-2 rounded-lg w-full bg-gray-700 text-white"
        >
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="street">Street</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-1">Weather</label>
        <select
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          className="p-2 rounded-lg w-full bg-gray-700 text-white"
        >
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
        </select>
      </div>

      <button
        onClick={() => onNext({ style, weather })}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Next
      </button>
    </div>
  );
}
