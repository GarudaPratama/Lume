// src/services/aiService.js
export async function generateOutfit(file, preferences) {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("preferences", JSON.stringify(preferences));

  const res = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to generate outfit");
  return res.json();
}
