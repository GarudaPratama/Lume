import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", (req, res) => {
  const { preferences } = req.body || {};
  
  // dummy AI response
  res.json({
    result: {
      imageUrl: "https://via.placeholder.com/300",
      summary: preferences?.style || "Casual Outfit",
      details: `This is a dummy outfit for ${preferences?.occasion || "everyday wear"}.`
    },
    products: [
      { name: "T-Shirt", url: "#", image: "https://via.placeholder.com/100", price: "25" },
      { name: "Jeans", url: "#", image: "https://via.placeholder.com/100", price: "50" },
      { name: "Sneakers", url: "#", image: "https://via.placeholder.com/100", price: "75" }
    ]
  });
});

export default app;
