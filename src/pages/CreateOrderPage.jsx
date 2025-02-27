import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AddressForm from "../components/AddressForm";
import AddressList from "../components/AddressList";
import { addAddress, deleteAddress, fetchAddresses, updateAddress } from "../reducers/addressReducer";

const CreateOrderPage = () => {
  const { addresses } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  // ✅ Adres seçme
  const handleSelectAddress = (addressId) => {
    setSelectedAddress(addressId);
  };

  // ✅ Adres ekleme
  const handleAddAddress = (newAddress) => {
    dispatch(addAddress(newAddress)).then(() => dispatch(fetchAddresses()));
    setShowForm(false);
  };

  // ✅ Adres güncelleme (butona basınca form açılıyor)
  const handleEditAddress = (address) => {
    setSelectedAddress(address); // 📌 Güncellenen adres state'e atanıyor
    setShowForm(true);
  };

  // ✅ Formdan gelen güncellenmiş adresi kaydet
  const handleUpdateAddress = (updatedAddress) => {
    dispatch(updateAddress(updatedAddress)).then(() => dispatch(fetchAddresses()));
    setShowForm(false);
    setSelectedAddress(null); // 📌 Form kapatılınca seçim sıfırlansın
  };

  // ✅ Adres silme
  const handleDeleteAddress = (addressId) => {
    dispatch(deleteAddress(addressId));
    if (selectedAddress?.id === addressId) setSelectedAddress(null);
  };

  // ✅ Ödeme sayfasına geçiş
  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      alert("Lütfen bir adres seçin!");
      return;
    }
    history.push("/payment");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sipariş Oluştur</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Adres Seçimi</h2>

        <AddressList 
          addresses={addresses} 
          onSelect={handleSelectAddress} 
          onDelete={handleDeleteAddress} 
          onUpdate={handleEditAddress} // 📌 Güncellenen adresi açan fonksiyon
        />

        <button onClick={() => setShowForm(true)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Adres Ekle
        </button>
        
        {showForm && (
          <AddressForm 
            onSubmit={selectedAddress ? handleUpdateAddress : handleAddAddress} // 📌 Güncelleme veya ekleme modu
            onClose={() => { setShowForm(false); setSelectedAddress(null); }} 
            initialData={selectedAddress} // 📌 Güncelleme için adres verisini yolla
          />
        )}
      </div>

      <button onClick={handleProceedToPayment} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
        Ödemeye Geç
      </button>
    </div>
  );
};

export default CreateOrderPage;
