import React, { useState } from "react";

const products = [
  { name: "Product 1", price: "$49.99", rating: 4.5, colors: ["#3498db", "#e74c3c", "#2ecc71"] },
  { name: "Product 2", price: "$39.99", rating: 4.0, colors: ["#f1c40f", "#8e44ad", "#2c3e50"] },
  { name: "Product 3", price: "$29.99", rating: 4.8, colors: ["#16a085", "#d35400", "#7f8c8d"] },
  { name: "Product 4", price: "$19.99", rating: 4.2, colors: ["#2980b9", "#c0392b", "#27ae60"] },
  { name: "Product 5", price: "$59.99", rating: 5.0, colors: ["#9b59b6", "#f39c12", "#34495e"] },
  { name: "Product 6", price: "$34.99", rating: 4.6, colors: ["#1abc9c", "#e67e22", "#95a5a6"] },
  { name: "Product 7", price: "$44.99", rating: 4.1, colors: ["#d35400", "#c0392b", "#bdc3c7"] },
  { name: "Product 8", price: "$54.99", rating: 4.7, colors: ["#27ae60", "#8e44ad", "#f1c40f"] },
];

const ProductCard = () => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productIndex, color) => {
    setSelectedColors((prev) => ({ ...prev, [productIndex]: color }));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-medium text-[#737373]">Featured Product</h2>
        <h2 className="font-bold text-3xl mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-[#737373] font-medium">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4  grid-row-2 gap-6 ">
        {products.map((product, index) => (
          <div key={index} className="p-4 ">
            <div className="bg-gray-300 h-40 w-full flex items-center justify-center rounded-md lg:w-60 lg:h-60 ">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <p className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
              </p>
              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, colorIndex) => (
                  <button
                    key={colorIndex}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColors[index] === color ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(index, color)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
