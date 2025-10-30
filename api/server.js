import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

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
  const ext = matches[1].split("/")[1];
  const buffer = Buffer.from(matches[2], "base64");
  const filename = `upload_${Date.now()}.${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);
  return filename;
}

app.post("/api/generate", async (req, res) => {
  try {
    const { imageBase64, preferences } = req.body;

    const filename = saveBase64Image(imageBase64);
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${filename}`;

    // Dummy AI Response
    const dummyResult = {
      summary: "Casual Chic",
      details: `A stylish ${preferences.style} outfit perfect for ${preferences.occasion}.`,
      products: [
        {
          name: "Stylish Shirt",
          image: "https://via.placeholder.com/300x400?text=Shirt",
          url: "https://example.com/product/shirt",
          price: "49.99"
        },
        {
          name: "Elegant Pants",
          image: "https://via.placeholder.com/300x400?text=Pants",
          url: "https://example.com/product/pants",
          price: "69.99"
        },
        {
          name: "Trendy Shoes",
          image: "https://via.placeholder.com/300x400?text=Shoes",
          url: "https://example.com/product/shoes",
          price: "89.99"
        }
      ]
    };

    res.json({
      result: {
        imageUrl,
        summary: dummyResult.summary,
        details: dummyResult.details
      },
      products: dummyResult.products
    });

  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Failed to generate outfit" });
  }
});

app.listen(3001, () => console.log("✅ API Ready → http://localhost:3001"));
