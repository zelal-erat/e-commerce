import React from "react";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product, category, gender }) => {
  const history = useHistory();

  const handleClick = () => {
    // Ürün adından URL-friendly slug oluştur
    const nameSlug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // URL parametrelerini kontrol et ve varsayılan değerler kullan
    const productGender = gender || "all";
    const categoryName = category?.name || "all-products";
    const categoryId = product.category_id || "";

    history.push(`/shop/${productGender}/${categoryName}/${categoryId}/${nameSlug}/${product.id}`);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer transform hover:-translate-y-1 p-4 border rounded-lg shadow-sm"
    >
      <div className="relative aspect-w-1 aspect-h-1 w-full h-48 overflow-hidden rounded-md mb-4 flex justify-center items-center bg-gray-200">
        <img 
          src={product?.images?.[0]?.url || 'https://via.placeholder.com/400x400?text=No+Image'}
          alt={product?.name}
          onError={handleImageError}
          className="object-cover w-full h-full rounded-t-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="text-center p-4">
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