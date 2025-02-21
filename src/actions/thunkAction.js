import { setRoles } from "../reducers/clientReducer";

// Roller yalnızca gerekirse çekilecek
export const fetchRoles = () => async (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length > 0) return; // Eğer roller zaten varsa, API çağrısı yapma

  dispatch(setRoles([])); // Önce boş olarak ayarla (isteğe bağlı)

  try {
    const response = await fetch('https://workintech-fe-ecommerce.onrender.com/roles'); // Gerçek API adresini buraya ekle
    const data = await response.json();
    dispatch(setRoles(data)); // Roller başarılıysa Redux store'a kaydet
  } catch (error) {
    console.error("Roller alınırken hata oluştu:", error);
  }
};