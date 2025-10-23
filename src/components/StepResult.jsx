import React from "react";

export default function StepResult({ data, onRestart }) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl mb-4 text-emerald-400">Your AI Outfit Suggestion</h2>
      <p className="text-gray-300 mb-6">
        Based on your style: <span className="font-semibold">{data.style}</span> <br />
        and weather: <span className="font-semibold">{data.weather}</span>
      </p>
      <div className="border border-gray-700 rounded-xl p-4 mb-6">
        <p>👕 Light jacket, jeans, and sneakers</p>
      </div>
      <button
        onClick={onRestart}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Try Again
      </button>
    </div>
  );
}
