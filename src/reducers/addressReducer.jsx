// src/redux/reducers/addressReducer.js
import axios from 'axios';

const initialState = {
    addresses: [],
    status: 'idle',
    error: null
};

export const fetchAddresses = () => async (dispatch, getState) => {
    const token = getState().auth.token;

    console.log("📌 Token:", token); // 🚀 Konsolda token'ı gösterelim

    if (!token) {
        console.error("❌ Token bulunamadı! Kullanıcı giriş yapmış mı?");
        return;
    }

    try {
        const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/user/address', {
            headers: { Authorization: token }  // 📌 Bearer kaldırıldı!
        });
        dispatch({ type: 'FETCH_ADDRESSES_SUCCESS', payload: response.data });
    } catch (error) {
        console.error("❌ Error fetching addresses:", error); // Hata detaylarını yazdır
        dispatch({ type: 'FETCH_ADDRESSES_FAILURE', payload: error.message });
    }
};


export const addAddress = (newAddress) => async (dispatch, getState) => {
    const token = getState().auth.token;

    try {
        const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/user/address', newAddress, {
            headers: { Authorization: token }
        });

        dispatch({ type: 'ADD_ADDRESS_SUCCESS', payload: response.data });
    } catch (error) {
        console.error("❌ Adres ekleme hatası:", error);
        dispatch({ type: 'ADD_ADDRESS_FAILURE', payload: error.message });

        // Eğer API çağrısı başarısız olursa, geçici bir ID ile ekleyelim
        const tempId = `temp-${Date.now()}`;
        dispatch({ type: 'ADD_ADDRESS_SUCCESS', payload: { ...newAddress, id: tempId } });
    }
};


export const updateAddress = (updatedAddress) => async (dispatch, getState) => {
    const token = getState().auth.token;
    const { id, ...data } = updatedAddress; 

    try {
        const response = await axios.put(
            'https://workintech-fe-ecommerce.onrender.com/user/address',  
            { id, ...data },  
            { headers: { Authorization: token } } 
        );

        console.log("✅ Güncellenen Adres API Yanıtı:", response.data); // 📌 API’den dönen cevabı yazdır

        dispatch({ type: 'UPDATE_ADDRESS_SUCCESS', payload: response.data });
    } catch (error) {
        console.error("❌ Adres güncelleme hatası:", error);
        dispatch({ type: 'UPDATE_ADDRESS_FAILURE', payload: error.message });
    }
};




export const deleteAddress = (addressId) => async (dispatch, getState) => {
    const token = getState().auth.token;

    try {
        await axios.delete(`https://workintech-fe-ecommerce.onrender.com/user/address/${addressId}`, { // 📌 API URL düzeltildi
            headers: { Authorization: token }
        });

        dispatch({ type: 'DELETE_ADDRESS_SUCCESS', payload: addressId });
    } catch (error) {
        console.error("❌ Adres silme hatası:", error); // 📌 Hata detaylarını konsola yaz
        dispatch({ type: 'DELETE_ADDRESS_FAILURE', payload: error.message });
    }
};


const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADDRESSES_SUCCESS':
            return { ...state, addresses: action.payload, status: 'succeeded' };
        case 'ADD_ADDRESS_SUCCESS':
            return { ...state, addresses: [...state.addresses, action.payload] };
        case 'UPDATE_ADDRESS_SUCCESS':
            return {
                ...state,
                addresses: state.addresses.map(addr => addr.id === action.payload.id ? action.payload : addr)
            };
        case 'DELETE_ADDRESS_SUCCESS':
            return { ...state, addresses: state.addresses.filter(addr => addr.id !== action.payload) };
        case 'FETCH_ADDRESSES_FAILURE':
        case 'ADD_ADDRESS_FAILURE':
        case 'UPDATE_ADDRESS_FAILURE':
        case 'DELETE_ADDRESS_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default addressReducer;
