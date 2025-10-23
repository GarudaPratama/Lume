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
  const [outfitResult, setOutfitResult] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleGenerate = async (preferences) => {
    setLoading(true);
    setTimeout(() => {
      setOutfitResult({
        summary: `Elegant modern look for your ${preferences.occasion}`,
        details: "White silk blouse, beige trousers, and gold accessories.",
      });
      setLoading(false);
      setStep(3);
    }, 1500);
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

        <AnimatePresence exitBeforeEnter>
          {!loading && step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <StepUpload onNext={handleNext} />
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
              <StepPreferences onBack={handleBack} onGenerate={handleGenerate} />
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
                onRestart={() => {
                  setStep(1);
                  setOutfitResult(null);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tombol Back to LandingPage */}
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
