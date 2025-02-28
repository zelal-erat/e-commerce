const initialState = {
    orders: [], // ✅ Boş dizi olarak başlat
    loading: false,
    error: null,
  };
  
  const userOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USER_ORDERS_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_USER_ORDERS_SUCCESS":
        return { ...state, loading: false, orders: action.payload };
      case "FETCH_USER_ORDERS_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userOrdersReducer;
  