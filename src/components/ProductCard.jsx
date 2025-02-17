import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link bileşenini ekleyin

const products = [
  { id: 1, name: "Product 1", price: "$49.99", colors: ["#3498db", "#e74c3c", "#2ecc71"] },
  { id: 2, name: "Product 2", price: "$39.99", colors: ["#f1c40f", "#8e44ad", "#2c3e50"] },
  { id: 3, name: "Product 3", price: "$29.99", colors: ["#16a085", "#d35400", "#7f8c8d"] },
  { id: 4, name: "Product 4", price: "$19.99", colors: ["#2980b9", "#c0392b", "#27ae60"] },
  { id: 5, name: "Product 5", price: "$59.99", colors: ["#9b59b6", "#f39c12", "#34495e"] },
  { id: 6, name: "Product 4", price: "$19.99", colors: ["#2980b9", "#c0392b", "#27ae60"] },
  { id: 7, name: "Product 5", price: "$59.99", colors: ["#9b59b6", "#f39c12", "#34495e"] },
  { id: 8, name: "Product 5", price: "$59.99", colors: ["#9b59b6", "#f39c12", "#34495e"] },
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
      <div className="grid grid-cols-1 lg:grid-cols-4 grid-row-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <Link to={`/product/${product.id}`}>
              <div className="bg-gray-300 h-40 w-full flex items-center justify-center rounded-md lg:w-60 lg:h-60 hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            </Link>
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColors[product.id] === color ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(product.id, color)}
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
