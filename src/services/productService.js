// src/services/productService.js
export async function searchProducts(query) {
  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
