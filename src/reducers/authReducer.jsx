const initialState = {
    user: null,
    token: localStorage.getItem("token") || sessionStorage.getItem("token") || null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload.user, // Başarılı girişte kullanıcı bilgilerini store'a kaydediyoruz
          token: action.payload.token,
          error: null, // Hata sıfırlanır
        };
      case "LOGIN_FAIL":
        return {
          ...state,
          error: action.payload, // Hata mesajı store'a kaydedilir
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          token: null,
        };
      case "CLEAR_ERRORS":
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  