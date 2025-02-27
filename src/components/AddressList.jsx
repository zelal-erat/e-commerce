import React from 'react';

const AddressList = ({ addresses, onSelect, onDelete, onUpdate }) => {
  return (
    <div>
      {addresses.length === 0 ? (
        <p className="text-gray-500">Kayıtlı adres bulunamadı.</p>
      ) : (
        addresses.map(address => (
          <div key={address.id} className="border-b py-2 flex justify-between items-center">
            <div onClick={() => onSelect(address.id)} className="cursor-pointer text-blue-600 font-bold">
              <p>{address.title} - {address.name} {address.surname}</p>
              <p>{address.phone}, {address.city}, {address.district}, {address.neighborhood}</p>
            </div>
            <div className="flex">
              <button onClick={() => onUpdate(address)} className="text-yellow-600 mx-2">Güncelle</button>
              <button onClick={() => onDelete(address.id)} className="text-red-600">Sil</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AddressList;
