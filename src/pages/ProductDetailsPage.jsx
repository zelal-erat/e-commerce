import React from "react";
import { useParams } from "react-router-dom";

const product = {
  id: 1,
  name: "Stylish Modern Chair",
  price: "$129.99",
  rating: 4.5,
  reviews: 25,
  colors: ["#f1c40f", "#e74c3c", "#2ecc71", "#3498db"],
  images: [
    "https://images.placeholders.dev/600x400",
    "https://images.placeholders.dev/100",
    "https://images.placeholders.dev/100",
  ],
  description:
    "A modern stylish chair that fits perfectly in any space. Crafted with premium materials and designed for comfort.",
  relatedProducts: [
    { id: 2, name: "Elegant Dinner Set", price: "$89.99", image: "https://images.placeholders.dev/200" },
    { id: 3, name: "Luxury Wine Glasses", price: "$49.99", image: "https://images.placeholders.dev/200" },
    { id: 4, name: "Minimalist Plate Set", price: "$69.99", image: "https://images.placeholders.dev/200" },
    { id: 5, name: "Classic Ceramic Mug", price: "$19.99", image: "https://images.placeholders.dev/200"},
  ],
};

const ProductDetailPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Images */}
        <div className="w-full md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="flex gap-2 mt-2">
            {product.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className="w-16 h-16 object-cover rounded-md cursor-pointer border hover:border-black"
              />
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-700">{product.price}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Product Details</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {product.relatedProducts.map((item) => (
            <div key={item.id} className="border rounded-lg p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium mt-2">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
