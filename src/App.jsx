import React, { useState } from "react";
import StepUpload from "./components/StepUpload";
import StepPreferences from "./components/StepPreferences";
import StepResult from "./components/StepResult";
import Loader from "./components/Loader";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl font-bold mb-8 text-emerald-400">Lumé</h1>
      {step === 1 && <StepUpload onNext={(info) => { setData(info); setStep(2); }} />}
      {step === 2 && <StepPreferences data={data} onNext={(prefs) => { setData({ ...data, ...prefs }); setStep(3); }} />}
      {step === 3 && <Loader onFinish={() => setStep(4)} />}
      {step === 4 && <StepResult data={data} onRestart={() => setStep(1)} />}
    </div>
  );
}

export default App;
