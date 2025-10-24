import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/generate", upload.single("imageBase64"), async (req, res) => {
  try {
    const { imageBase64, preferences } = req.body;

    const prompt = `
      Generate a fashion outfit based on this image.
      Style: ${preferences.style || "any"}, Occasion: ${preferences.occasion || "any"}
    `;

    // OpenAI Image generation
    const aiResult = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "512x512",
    });

    const imageUrl = aiResult.data[0].url;
    const summary = `This look fits ${preferences.style || "a stylish"} style perfectly.`;

    res.json({ result: { imageUrl, summary }, products: [] });
  } catch (err) {
    console.error("Error generating outfit:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
