import axios from "axios";

export const fetchUserOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "FETCH_USER_ORDERS_REQUEST" });

    const token = getState().auth.token; // Kullanıcının token'ını al
    const { data } = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/order",
      {
        headers: { Authorization: token }, // Token ekle
      }
    );

    dispatch({ type: "FETCH_USER_ORDERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_USER_ORDERS_FAILURE", payload: error.message });
  }
};
