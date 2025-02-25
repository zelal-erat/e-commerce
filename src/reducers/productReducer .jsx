const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
  currentPage: 1,
  currentProduct: null,
  productFetchState: "NOT_FETCHED"
};

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
const SET_TOTAL = "SET_TOTAL";
const SET_FETCH_STATE = "SET_FETCH_STATE";
const SET_LIMIT = "SET_LIMIT";
const SET_OFFSET = "SET_OFFSET";
const SET_FILTER = "SET_FILTER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
const SET_PRODUCT_FETCH_STATE = "SET_PRODUCT_FETCH_STATE";

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_CURRENT_PAGE:
      return { 
        ...state, 
        currentPage: action.payload,
        offset: (action.payload - 1) * state.limit
      };
    case SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };
    case SET_PRODUCT_FETCH_STATE:
      return { ...state, productFetchState: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setCurrentProduct = (product) => ({ type: SET_CURRENT_PRODUCT, payload: product });
export const setProductFetchState = (state) => ({ type: SET_PRODUCT_FETCH_STATE, payload: state });

export default productReducer;
