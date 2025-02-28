import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import clientReducer from "./reducers/clientReducer";

import shoppingCartReducer from "./reducers/shoppingCartReducer";
import productReducer from "./reducers/productReducer ";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartReducer from "./reducers/cartReducer";
import addressReducer from "./reducers/addressReducer";
import paymentReducer from "./reducers/paymentReducer";
import { orderReducer } from "./reducers/orderReducer";
import userOrdersReducer from "./reducers/userOrderReducer";


// Tüm reducer'ları birleştiriyoruz
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
  categories: categoryReducer,
  cart: cartReducer,
  address: addressReducer,
  payment:paymentReducer,
  order:orderReducer,
  userOrders:userOrdersReducer,
  
});

// Middleware ekleyerek store'u oluşturuyoruz
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
