import axios from "axios";
import { clearCart } from "../reducers/cartReducer";
 // ✅ Sepeti temizlemek için import et

export const createOrder = (orderData) => async (dispatch, getState) => {
    try {
        dispatch({ type: "ORDER_CREATE_REQUEST" });

        const { userLogin } = getState();
        const token = userLogin?.userInfo?.token || localStorage.getItem("token");

        if (!token) {
            throw new Error("Kullanıcı girişi yapılmamış! Lütfen tekrar giriş yapın.");
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
        };

        const { data } = await axios.post(
            "https://workintech-fe-ecommerce.onrender.com/order",
            orderData,
            config
        );

        dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });
        console.log("🛒 Sepet temizleniyor...");

        // ✅ Sipariş başarılıysa sepeti temizle
        dispatch(clearCart());

    } catch (error) {
        console.error("Sipariş oluşturma hatası:", error);
        dispatch({
            type: "ORDER_CREATE_FAIL",
            payload: error.response?.data?.message || error.message,
        });
    }
};
