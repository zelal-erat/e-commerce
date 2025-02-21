import axios from "axios";

const API_URL = "https://workintech-fe-ecommerce.onrender.com";

// Kullanıcı giriş yapma işlemi
export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      const userData = response.data;

      const user = { ...userData.user, email: credentials.email };

      // "Beni Hatırla" seçeneğine göre token'ı sakla
      if (credentials.remember) {
        localStorage.setItem("token", userData.token);
      } else {
        sessionStorage.setItem("token", userData.token);
      }

      axios.defaults.headers.common["Authorization"] = userData.token;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token: userData.token },
      });
    } catch (error) {
      let errorMessage = "Giriş başarısız";
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Sunucuya ulaşılamıyor, internet bağlantınızı kontrol edin.";
      }
      dispatch({
        type: "LOGIN_FAIL",
        payload: errorMessage,
      });
    }
  };
};

// Kullanıcı doğrulama (Oturum açık mı?)
export const checkAuth = () => async (dispatch) => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.log("❌ Token bulunamadı. Kullanıcı çıkış yapılıyor...");
      dispatch(logoutUser());
      return;
    }
  
    axios.defaults.headers.common["Authorization"] = token;
    console.log("✅ Token bulundu:", token);
  
    try {
      console.log("🚀 API'ye /verify isteği atılıyor...");
      const response = await axios.get(`${API_URL}/verify`);
  
      console.log("✅ API Yanıtı:", response.data);
  
      // API yanıtından user nesnesini düzgün oluştur
      const user = {
        name: response.data.name,
        email: response.data.email,
        role_id: response.data.role_id
      };
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token },
      });
  
      localStorage.setItem("token", token);
      console.log("🚀 LOGIN_SUCCESS dispatch edildi. Kullanıcı:", user);
    } catch (error) {
      console.error("❌ Token geçersiz, kullanıcı çıkış yapılıyor.", error.response?.data);
      dispatch(logoutUser());
    }
  };
  

// Kullanıcı çıkış yapma işlemi
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: "LOGOUT" });
};

// Hata temizleme
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};

