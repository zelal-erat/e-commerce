import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <Link to={`/product/${product?.id}`}>
       <div className="w-full h-48 overflow-hidden rounded-md mb-4 flex justify-center items-center bg-gray-200">
       <img 
  src={product?.images?.[0]?.url} 
  alt={product?.name}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>

</div>

      </Link>
      <div className="text-center">
        <h3 className="font-semibold text-lg text-[#252B42] mb-2">{product?.name}</h3>
        <p className="text-[#737373] text-sm mb-2 line-clamp-2">{product?.description}</p>
        <div className="flex justify-center items-center gap-2">
          <span className="text-sky-500 font-bold">${product?.price}</span>
          {product?.oldPrice && (
            <span className="text-[#737373] line-through text-sm">${product?.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;