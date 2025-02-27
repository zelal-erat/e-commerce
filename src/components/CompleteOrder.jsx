import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { createOrder } from "../actions/orderAction";

const CompleteOrder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (history.location.state?.selectedCard) {
      setSelectedCard(history.location.state.selectedCard);
    } else {
      alert("Lütfen bir ödeme yöntemi seçin!");
      history.push("/payment");
    }
  }, [history]);

  const handleCreateOrder = async () => {
    if (!selectedCard) return;

    const orderData = {
      address_id: 1,
      order_date: new Date().toISOString(),
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: 321, // Kullanıcıdan ayrıca alınabilir
      price: 1919,
      products: [
        { product_id: 12, count: 1, detail: "açık mavi - xl" },
        { product_id: 13, count: 2, detail: "siyah - lg" },
      ],
    };

    await dispatch(createOrder(orderData));
    history.push("/order-success");
  };

  return (
    <button onClick={handleCreateOrder} className="bg-blue-600 text-white px-4 py-2 rounded">
      Siparişi Onayla
    </button>
  );
};

export default CompleteOrder;
