const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
  };
  
  // Action Types
  const SET_CATEGORIES = "SET_CATEGORIES";
  const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
  const SET_TOTAL = "SET_TOTAL";
  const SET_FETCH_STATE = "SET_FETCH_STATE";
  const SET_LIMIT = "SET_LIMIT";
  const SET_OFFSET = "SET_OFFSET";
  const SET_FILTER = "SET_FILTER";
  
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
  
  export default productReducer;
  