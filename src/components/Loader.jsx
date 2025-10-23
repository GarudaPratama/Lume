import React, { useEffect } from "react";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="animate-spin border-4 border-emerald-500 border-t-transparent rounded-full w-16 h-16 mx-auto mb-4"></div>
      <p>Generating your outfit suggestion...</p>
    </div>
  );
}
