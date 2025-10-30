import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const UPLOADS_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

function saveBase64Image(dataUrl) {
  const matches = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!matches) throw new Error("Invalid image data");
  const ext = matches[1].split("/")[1];
  const buffer = Buffer.from(matches[2], "base64");
  const filename = `upload_${Date.now()}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);
  return filename;
}

// Fungsi sederhana AI styling
function generateStyling(description, preferences) {
  // Bisa ditambah rules lebih kompleks
  const summary = `${preferences.style || "Casual"} ${preferences.occasion || "Outfit"}`;
  const details = `This outfit features ${description}. It's perfect for ${preferences.occasion || "any occasion"} with a ${preferences.style || "simple"} style.`;
  return { summary, details };
}

app.post("/api/generate", async (req, res) => {
  try {
    const { imageBase64, preferences } = req.body;
    const filename = saveBase64Image(imageBase64);
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${filename}`;

    // Step 1: Describe image via free RapidAPI (contoh: Image Recognition API)
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const rapidResponse = await fetch("https://free-fashion-image-analysis.p.rapidapi.com/analyze", {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "free-fashion-image-analysis.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image_url: imageUrl }),
    });

    const visionData = await rapidResponse.json();
    const description = visionData.description || "a stylish outfit";

    // Step 2: Generate styling locally (bebas biaya)
    const result = generateStyling(description, preferences);

    // Step 3: Dummy products
    const products = [
      { name: "Classic Shirt", url: "#", image: "/uploads/dummy1.jpg", price: "49" },
      { name: "Stylish Jeans", url: "#", image: "/uploads/dummy2.jpg", price: "69" },
      { name: "Cool Sneakers", url: "#", image: "/uploads/dummy3.jpg", price: "89" },
    ];

    res.json({ result, products, imageUrl });

  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Failed to generate outfit" });
  }
});

app.listen(3001, () => console.log("✅ API Ready → http://localhost:3001"));
