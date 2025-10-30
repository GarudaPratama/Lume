import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Replicate from "replicate";
import fetch from "node-fetch";

dotenv.config();

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

const UPLOADS_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

function saveBase64Image(dataUrl) {
  const matches = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
  const ext = matches[1].split("/")[1];
  const buffer = Buffer.from(matches[2], "base64");
  const filename = `upload_${Date.now()}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);
  return filename;
}

app.post("/generate", async (req, res) => {
  try {
    const { imageBase64, preferences } = req.body;
    const filename = saveBase64Image(imageBase64);
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${filename}`;

    // Replicate call (misal pakai salesforce/blip)
    const visionResponse = await replicate.run(
      "salesforce/blip:2.0.0", // pastikan versi yang valid
      {
        input: { image: imageUrl, question: "Describe the outfit in detail" }
      }
    );

    const visionText = typeof visionResponse === "string" ? visionResponse : JSON.stringify(visionResponse);

    // RapidAPI example (optional)
    const rapidResponse = await fetch("https://example-rapidapi.p.rapidapi.com/endpoint", {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "example-rapidapi.p.rapidapi.com",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: visionText, preferences })
    });
    const products = await rapidResponse.json();

    res.json({
      result: {
        imageUrl,
        summary: "Outfit Summary",
        details: visionText
      },
      products
    });
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Failed to generate outfit" });
  }
});

// Vercel serverless export
export default app;
