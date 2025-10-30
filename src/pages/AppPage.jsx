import { useState } from "react";
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
  const [imageUrl, setImageUrl] = useState(null);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleGenerate = (preferences) => {
    if (!uploadedFile) return alert("Upload an image first ✨");

    setLoading(true);
    setTimeout(() => {
      // dummy AI response
      setImageUrl(URL.createObjectURL(uploadedFile));
      setOutfitResult({
        summary: `Dummy Outfit (${preferences.style})`,
        details: `Occasion: ${preferences.occasion}. This is a dummy outfit generated for demonstration.`
      });
      setProducts([
        { name: "Dummy Shirt", image: "/dummy-shirt.jpg", url: "#", price: "29" },
        { name: "Dummy Pants", image: "/dummy-pants.jpg", url: "#", price: "49" },
        { name: "Dummy Shoes", image: "/dummy-shoes.jpg", url: "#", price: "79" },
      ]);
      setStep(3);
      setLoading(false);
    }, 1000);
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
            <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <StepUpload uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} onNext={handleNext} />
            </motion.div>
          )}

          {!loading && step === 2 && (
            <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <StepPreferences onBack={handleBack} onGenerate={handleGenerate} />
            </motion.div>
          )}

          {!loading && step === 3 && (
            <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <StepResult result={outfitResult} products={products} imageUrl={imageUrl} onRestart={() => {
                setStep(1);
                setUploadedFile(null);
                setOutfitResult(null);
                setProducts([]);
                setImageUrl(null);
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}
