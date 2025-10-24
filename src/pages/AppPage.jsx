import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "../components/app/AppLayout";
import StepUpload from "../components/app/StepUpload";
import StepPreferences from "../components/app/StepPreferences";
import StepResult from "../components/app/StepResult";
import Loader from "../components/app/Loader";

export default function AppPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [outfitResult, setOutfitResult] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  // Convert file to base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleGenerate = async (preferences) => {
    if (!uploadedFile) return alert("Please upload an image first ✨");
    setLoading(true);

    try {
      const base64 = await fileToBase64(uploadedFile);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, preferences }),
      });

      if (!response.ok) throw new Error("Failed to generate outfit");

      const data = await response.json();
      setOutfitResult(data.result);
      setProducts(data.products || []);
      setStep(3);
    } catch (err) {
      console.error("Error generating outfit:", err);
      alert("Failed to generate outfit 😓. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-8">
          Your Personal Stylist
        </h1>

        {loading && <Loader />}

        <AnimatePresence mode="wait">
          {!loading && step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <StepUpload
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
                onNext={handleNext}
              />
            </motion.div>
          )}

          {!loading && step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <StepPreferences
                onBack={handleBack}
                onGenerate={handleGenerate}
              />
            </motion.div>
          )}

          {!loading && step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <StepResult
                result={outfitResult}
                products={products}
                onRestart={() => {
                  setStep(1);
                  setUploadedFile(null);
                  setOutfitResult(null);
                  setProducts([]);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => navigate("/")}
          className="mt-12 bg-lume-gold text-lume-black px-6 py-3 rounded-full font-body font-medium hover:bg-lume-black hover:text-lume-gold transition-all"
        >
          Back to Landing Page
        </button>
      </div>
    </AppLayout>
  );
}
