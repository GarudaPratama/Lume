import { motion } from "framer-motion";

export default function StepUpload({ uploadedFile, setUploadedFile, onNext }) {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold mb-4">Upload Your Outfit Photo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />

      {uploadedFile && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Preview"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!uploadedFile}
        className={`mt-6 px-6 py-3 rounded-full font-medium transition-all ${
          uploadedFile
            ? "bg-lume-gold text-lume-black hover:bg-lume-black hover:text-lume-gold"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </motion.div>
  );
}
