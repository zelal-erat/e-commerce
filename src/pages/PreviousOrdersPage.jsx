import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ✅ OrderItem bileşenini ekledik
import { fetchUserOrders } from "../actions/userOrderAction";
import OrderItem from "../components/OrderItem";

const PreviousOrdersPage = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.userOrders);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Önceki Siparişlerim</h2>
      {orders.length === 0 ? (
        <p>Henüz siparişiniz bulunmamaktadır.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousOrdersPage;
