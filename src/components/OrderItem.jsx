import React, { useState } from "react";

const OrderItem = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow">
      {/* Sipariş Başlığı */}
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-bold">
          Sipariş ID: {order.id} - {new Date(order.order_date).toLocaleDateString()}
        </h3>
        <span className="text-sm text-gray-600">{isOpen ? "Kapat ▲" : "Detayları Göster ▼"}</span>
      </div>

      <p className="text-gray-700">Toplam Tutar: {order.price} TL</p>

      {/* Sipariş Ürünleri (Açılır Kapanır Panel) */}
      {isOpen && (
        <div className="mt-2 border-t pt-2">
          <h4 className="font-semibold">Ürünler:</h4>
          <ul className="list-disc ml-5">
            {order.products.map((product) => (
              <li key={product.id} className="flex items-center gap-2">
                <img src={product.images[0]?.url} alt={product.name} className="w-10 h-10 object-cover" />
                <span>{product.name} - {product.count} Adet</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
