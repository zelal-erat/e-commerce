import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import clientReducer from "./reducers/clientReducer";

import shoppingCartReducer from "./reducers/shoppingCartReducer";
import productReducer from "./reducers/productReducer ";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";

// Tüm reducer'ları birleştiriyoruz
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  auth: authReducer,
  categories: categoryReducer,
});

// Middleware ekleyerek store'u oluşturuyoruz
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
