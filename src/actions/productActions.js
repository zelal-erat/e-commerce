import axios from "axios";
import { setFetchState, setProductList, setTotal } from "../reducers/productReducer ";


const API_URL = "https://workintech-fe-ecommerce.onrender.com";

export const fetchProducts = (params = {}) => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));

    // URL parametrelerini oluştur
    const queryParams = new URLSearchParams();
    if (params.category) queryParams.append('category', params.category);
    if (params.sort) queryParams.append('sort', params.sort);
    if (params.filter) queryParams.append('filter', params.filter);
    
    // Pagination parametreleri
    const limit = params.limit || 25;
    const offset = params.offset || 0;
    queryParams.append('limit', limit);
    queryParams.append('offset', offset);

    const queryString = queryParams.toString();
    const url = `${API_URL}/products${queryString ? `?${queryString}` : ''}`;

    console.log('Fetching products from:', url);
    const response = await axios.get(url);

    dispatch(setTotal(response.data.total));
    dispatch(setProductList(response.data.products));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch(setFetchState("FAILED"));
  }
};
