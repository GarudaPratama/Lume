// src/services/aiService.js
export async function generateOutfit(imageBase64, preferences) {
  const res = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageBase64, preferences }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed");
  return data;
}
