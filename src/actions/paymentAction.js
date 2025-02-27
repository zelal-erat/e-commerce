import axios from "axios";

export const FETCH_PAYMENTS = "FETCH_PAYMENTS";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";

const API_URL = "https://workintech-fe-ecommerce.onrender.com/user/card";
const token = localStorage.getItem("token");

// ✅ Kayıtlı ödeme yöntemlerini getir
export const fetchPayments = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: token },
    });
    dispatch({ type: FETCH_PAYMENTS, payload: response.data });
  } catch (error) {
    console.error("Ödeme yöntemlerini getirirken hata oluştu:", error);
  }
};

// ✅ Yeni ödeme yöntemi ekle
export const addPayment = (paymentData) => async (dispatch) => {
  try {
    await axios.post(API_URL, paymentData, {
      headers: { Authorization: token },
    });
    dispatch(fetchPayments());
  } catch (error) {
    console.error("Ödeme yöntemi eklerken hata oluştu:", error);
  }
};

// ✅ Ödeme yöntemini güncelle
export const updatePayment = (paymentData) => async (dispatch) => {
  try {
    await axios.put(API_URL, paymentData, {
      headers: { Authorization: token },
    });
    dispatch(fetchPayments());
  } catch (error) {
    console.error("Ödeme yöntemi güncellenirken hata oluştu:", error);
  }
};

// ✅ Ödeme yöntemini sil
export const deletePayment = (paymentId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${paymentId}`, {
      headers: { Authorization: token },
    });
    dispatch(fetchPayments());
  } catch (error) {
    console.error("Ödeme yöntemi silinirken hata oluştu:", error);
  }
};
