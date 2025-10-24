import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { imageBase64, preferences } = req.body;

    if (!imageBase64) return res.status(400).json({ error: "No image provided" });

    // Generate Outfit Image (contoh AI image)
    const imageResponse = await openai.images.generate({
      model: "gpt-image-1",
      prompt: `Create a stylish outfit based on this image with style: ${preferences.style || "any"}, occasion: ${preferences.occasion || "casual"}`,
      size: "1024x1024",
    });

    // Simulasi produk terkait
    const products = [
      { name: "Fancy Hat", price: "$35", image: "https://via.placeholder.com/150", link: "#", store: "Lume Store" },
      { name: "Stylish Jacket", price: "$120", image: "https://via.placeholder.com/150", link: "#", store: "Lume Store" },
    ];

    res.status(200).json({
      result: { imageUrl: imageResponse.data[0].url, summary: "Your AI-generated outfit!" },
      products,
    });
  } catch (err) {
    console.error("AI generate error:", err);
    res.status(500).json({ error: err.message });
  }
}
