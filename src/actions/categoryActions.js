import axios from "axios";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
      const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");

      // Gelen veriyi uygun formata çevir
      const formattedData = response.data.map((category) => ({
        id: category.id,
        name: category.title, // "title" → kategori ismi
        image: category.img, // "img" → kategori resmi
        rating: category.rating, // "rating" → en iyi 5 kategori için kullanılacak
        gender: category.gender === "k" ? "kadin" : "erkek", // "gender" düzenleme
        code: category.code.split(":")[1], // "code" alanından ":" sonrası alınır
      }));

      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: formattedData });
    } catch (error) {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
  };
};
