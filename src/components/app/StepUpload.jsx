import { useState } from "react";
import { motion } from "framer-motion";

export default function StepUpload({ uploadedFile, setUploadedFile, onNext }) {
  const [preview, setPreview] = useState(uploadedFile ? URL.createObjectURL(uploadedFile) : null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <motion.div
      className="bg-lume-beige p-10 rounded-3xl shadow-md text-center max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <h2 className="font-display text-3xl mb-6 text-lume-black">
        Upload Your Outfit Image ✨
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-6"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full max-w-xs mx-auto rounded-2xl shadow-md mb-6"
        />
      )}

      <button
        onClick={onNext}
        disabled={!uploadedFile}
        className={`px-6 py-3 rounded-full font-body font-medium transition-all ${
          uploadedFile
            ? "bg-lume-black text-lume-white hover:bg-lume-gold hover:text-lume-black"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </motion.div>
  );
}
