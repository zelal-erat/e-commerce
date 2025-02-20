import axios from "axios";

const API_URL = "https://workintech-fe-ecommerce.onrender.com";

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      const userData = response.data;

      const user = { ...userData.user, email: credentials.email }; // Email Redux'a ekleniyor

      if (credentials.remember) {
        localStorage.setItem("token", userData.token);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token: userData.token },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response?.data.message || "Giriş başarısız",
      });
    }
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
