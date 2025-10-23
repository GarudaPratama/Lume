import React, { useState } from "react";

export default function StepUpload({ onNext }) {
  const [file, setFile] = useState(null);

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl mb-4">Upload your outfit photo</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 text-sm text-gray-300"
      />
      <button
        disabled={!file}
        onClick={() => onNext({ file })}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Next
      </button>
    </div>
  );
}
