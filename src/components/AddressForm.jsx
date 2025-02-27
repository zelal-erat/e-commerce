import React, { useState, useEffect } from "react";

const AddressForm = ({ onSubmit, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: ""
  });

  // ✅ Güncellenen adresi form içine doldur
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // ✅ Güncellenmiş veya yeni adresi gönder
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Adres Başlığı" className="border p-2 w-full mb-2" />
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Ad" className="border p-2 w-full mb-2" />
      <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyad" className="border p-2 w-full mb-2" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="border p-2 w-full mb-2" />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="Şehir" className="border p-2 w-full mb-2" />
      <input name="district" value={formData.district} onChange={handleChange} placeholder="İlçe" className="border p-2 w-full mb-2" />
      <input name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Mahalle" className="border p-2 w-full mb-2" />
      <textarea name="address"  value={formData.address || ""}   onChange={handleChange} placeholder="Adres Detayları" className="border p-2 w-full mb-2"></textarea>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Kaydet</button>
      <button type="button" onClick={onClose} className="ml-2 bg-red-600 text-white px-4 py-2 rounded">İptal</button>
    </form>
  );
};

export default AddressForm;
