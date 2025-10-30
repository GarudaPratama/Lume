import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", (req, res) => {
  // Dummy AI response
  const { preferences } = req.body;
  res.json({
    result: {
      imageUrl: "https://via.placeholder.com/400x400.png?text=Outfit+Preview",
      summary: "Casual Look",
      details: `A simple ${preferences?.style || "casual"} outfit perfect for ${preferences?.occasion || "everyday"} activities.`
    },
    products: [
      {
        name: "Cool T-Shirt",
        image: "https://via.placeholder.com/200x200.png?text=T-Shirt",
        url: "#",
        price: "25"
      },
      {
        name: "Jeans",
        image: "https://via.placeholder.com/200x200.png?text=Jeans",
        url: "#",
        price: "40"
      }
    ]
  });
});

app.listen(3001, () => console.log("✅ API running on port 3001"));
