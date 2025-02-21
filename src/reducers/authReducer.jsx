const initialState = {
    user: null,  // Başlangıçta user null olmalı
    token: localStorage.getItem('token') || null,  // Token'ı localStorage'dan al
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        // Giriş başarılı olduğunda token ve user bilgilerini state'e kaydet
        localStorage.setItem('token', action.payload.token);  // Token'ı localStorage'da sakla
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGOUT':
        // Çıkış yapıldığında state'i sıfırla ve token'ı localStorage'dan sil
        localStorage.removeItem('token');
        return {
          ...state,
          user: null,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  