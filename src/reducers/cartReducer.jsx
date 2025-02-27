const initialState = {
  cart: [],
  isOpen: false
};

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
const TOGGLE_CART = "TOGGLE_CART";
const TOGGLE_ITEM_CHECK = "TOGGLE_ITEM_CHECK";
const CLEAR_CART = "CLEAR_CART"; // ✅ Sepeti temizleme action type

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          const existingItem = state.cart.find(item => item.product.id === action.payload.id);
          if (existingItem) {
              return {
                  ...state,
                  cart: state.cart.map(item =>
                      item.product.id === action.payload.id
                          ? { ...item, count: item.count + 1 }
                          : item
                  )
              };
          }
          return {
              ...state,
              cart: [...state.cart, { count: 1, checked: true, product: action.payload }]
          };

      case REMOVE_FROM_CART:
          return {
              ...state,
              cart: state.cart.filter(item => item.product.id !== action.payload)
          };

      case UPDATE_CART_ITEM:
          return {
              ...state,
              cart: state.cart.map(item =>
                  item.product.id === action.payload.id
                      ? { ...item, count: action.payload.count }
                      : item
              )
          };

      case TOGGLE_CART:
          return {
              ...state,
              isOpen: !state.isOpen
          };

      case TOGGLE_ITEM_CHECK:
          return {
              ...state,
              cart: state.cart.map(item =>
                  item.product.id === action.payload
                      ? { ...item, checked: !item.checked }
                      : item
              )
          };

      case CLEAR_CART: // ✅ Sepeti temizleme işlemi
          localStorage.removeItem("cartItems"); // LocalStorage'ı da temizle
          return {
              ...state,
              cart: []
          };

      default:
          return state;
  }
};

// Action Creators
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (productId) => ({ type: REMOVE_FROM_CART, payload: productId });
export const updateCartItem = (productId, count) => ({
  type: UPDATE_CART_ITEM,
  payload: { id: productId, count }
});
export const toggleCart = () => ({ type: TOGGLE_CART });
export const toggleItemCheck = (productId) => ({ type: TOGGLE_ITEM_CHECK, payload: productId });
export const clearCart = () => ({ type: CLEAR_CART }); // ✅ Sepeti temizleme action'ı

export default cartReducer;
