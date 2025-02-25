import axios from "axios";
import { setFetchState, setProductList, setTotal } from "../reducers/productReducer ";


const API_URL = "https://workintech-fe-ecommerce.onrender.com";

export const fetchProducts = () => async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));
  
      const response = await axios.get(`${API_URL}/products`);
      console.log("API Response:", response.data); // API verisini kontrol et
      console.log("Fetched Products:", response.data.products);

      dispatch(setTotal(response.data.total));
      dispatch(setProductList(response.data.products));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setFetchState("FAILED"));
    }
  };
