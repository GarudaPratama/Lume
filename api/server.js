import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", (req, res) => {
  const { preferences } = req.body;

  // Dummy response
  const result = {
    summary: "Casual Party Outfit",
    details: `A fun and comfortable outfit perfect for ${preferences?.occasion || "any occasion"}, 
              in a ${preferences?.style || "casual"} style.`,
  };

  const products = [
    {
      name: "Red T-Shirt",
      image: "https://via.placeholder.com/150",
      price: "25",
      url: "#",
    },
    {
      name: "Blue Jeans",
      image: "https://via.placeholder.com/150",
      price: "40",
      url: "#",
    },
    {
      name: "Sneakers",
      image: "https://via.placeholder.com/150",
      price: "60",
      url: "#",
    },
  ];

  res.json({ result, products });
});

app.listen(3001, () => console.log("✅ Dummy API running on http://localhost:3001"));
