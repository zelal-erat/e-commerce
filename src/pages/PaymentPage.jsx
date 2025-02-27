import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPayment, deletePayment, fetchPayments, updatePayment } from "../actions/paymentAction";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payment);

  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [cardData, setCardData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  // ✅ Form verisini güncelle
  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  // ✅ Yeni kart ekleme veya güncelleme
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCard) {
      dispatch(updatePayment({ id: editingCard.id, ...cardData }));
    } else {
      dispatch(addPayment(cardData));
    }
    setShowForm(false);
    setEditingCard(null);
    setCardData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
  };

  // ✅ Kart silme işlemi
  const handleDelete = (cardId) => {
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      dispatch(deletePayment(cardId));
    }
  };

  // ✅ Kart güncelleme butonuna basıldığında formu doldur
  const handleEdit = (card) => {
    setEditingCard(card);
    setCardData(card);
    setShowForm(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Ödeme Yöntemleri</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Kayıtlı Kartlar</h2>

        {payments.length > 0 ? (
          <ul>
            {payments.map((card) => (
              <li key={card.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p>{card.name_on_card}</p>
                  <p>**** **** **** {card.card_no.slice(-4)}</p>
                  <p>Son Kullanma: {card.expire_month}/{card.expire_year}</p>
                </div>
                <div className="space-x-2">
                  <button onClick={() => handleEdit(card)} className="bg-yellow-500 text-white px-4 py-2 rounded">Düzenle</button>
                  <button onClick={() => handleDelete(card.id)} className="bg-red-600 text-white px-4 py-2 rounded">Sil</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Kayıtlı bir kartınız bulunmamaktadır.</p>
        )}

        <button onClick={() => setShowForm(true)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Kart Ekle
        </button>

        {showForm && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-lg font-semibold">{editingCard ? "Kartı Güncelle" : "Yeni Kart Ekle"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="name_on_card" placeholder="Kart Üzerindeki İsim" value={cardData.name_on_card} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="card_no" placeholder="Kart Numarası" value={cardData.card_no} onChange={handleChange} className="w-full p-2 border rounded" maxLength="16" required />
              <div className="flex space-x-2">
                <input type="number" name="expire_month" placeholder="Ay" value={cardData.expire_month} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
                <input type="number" name="expire_year" placeholder="Yıl" value={cardData.expire_year} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
              </div>
              <div className="flex space-x-2">
                <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  {editingCard ? "Güncelle" : "Ekle"}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditingCard(null); }} className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  İptal
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
