import { useState } from "react";

export default function StepUpload({ onNext }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleContinue = () => {
    if (selectedFile) onNext();
    else alert("Please upload an image first ✨");
  };

  return (
    <section className="bg-lume-beige p-10 rounded-3xl shadow-md text-center">
      <h2 className="font-display text-3xl md:text-4xl text-lume-black mb-4">
        Upload Your Inspiration
      </h2>
      <p className="font-body text-lume-charcoal text-base md:text-lg mb-8 max-w-md mx-auto">
        Upload a photo of your outfit or inspiration. Lumé’s AI will analyze
        it and craft the perfect look just for you.
      </p>

      <div className="border-2 border-dashed border-lume-gray rounded-2xl p-10 mb-6 bg-white hover:border-lume-gold transition-colors">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-center cursor-pointer file:cursor-pointer file:rounded-full file:border-0 file:px-6 file:py-3 file:mr-4 file:bg-lume-black file:text-lume-white file:hover:bg-lume-gold file:hover:text-lume-black transition-all"
        />
        {selectedFile && (
          <p className="mt-4 font-body text-lume-gold">
            ✅ {selectedFile.name}
          </p>
        )}
      </div>

      <button
        onClick={handleContinue}
        className="mt-4 bg-lume-black text-lume-white px-8 py-3 rounded-full font-body font-medium hover:bg-lume-gold hover:text-lume-black transition-all"
      >
        Continue
      </button>
    </section>
  );
}
