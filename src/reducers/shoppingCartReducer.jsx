const initialState = {
    cart: [],
    payment: {},
    address: {},
  };
  
  // Action Types
  const SET_CART = "SET_CART";
  const SET_PAYMENT = "SET_PAYMENT";
  const SET_ADDRESS = "SET_ADDRESS";
  
  // Reducer
  const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return { ...state, cart: action.payload };
      case SET_PAYMENT:
        return { ...state, payment: action.payload };
      case SET_ADDRESS:
        return { ...state, address: action.payload };
      default:
        return state;
    }
  };
  
  // Action Creators
  export const setCart = (cart) => ({ type: SET_CART, payload: cart });
  export const setPayment = (payment) => ({ type: SET_PAYMENT, payload: payment });
  export const setAddress = (address) => ({ type: SET_ADDRESS, payload: address });
  
  export default shoppingCartReducer;
  