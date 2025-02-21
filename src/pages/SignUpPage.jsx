import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchRoles } from "../actions/thunkAction";
import { setUser } from "../reducers/clientReducer";
import { Link } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default function SignUpPage() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { role_id: 3 } });

  const watchRole = watch("role_id", 3);
  const watchPassword = watch("password", "");

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const { confirm_password, ...formattedData } = data;
    formattedData.role_id = Number(formattedData.role_id);

    if (formattedData.role_id === 2) {
      formattedData.store = {
        name: formattedData.store_name,
        phone: formattedData.store_phone,
        tax_no: formattedData.store_tax_no,
        bank_account: formattedData.store_bank_account,
      };
    } else {
      delete formattedData.store;
    }

    try {
      const response = await axiosInstance.post("/signup", formattedData);
      alert("Hesabınızı etkinleştirmek için e-postanızı kontrol edin!");
      dispatch(setUser(response.data.user));
      window.history.back(); // Signup işleminden sonra login sayfasına dön
    } catch (error) {
      console.error("Kayıt Hatası:", error.response);
      alert(error.response?.data?.message || "Kayıt sırasında hata oluştu.");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 space-y-4 bg-white shadow-lg rounded-lg"
    >
      <input
        type="text"
        placeholder="Ad"
        {...register("name", { required: true, minLength: 3 })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">Ad en az 3 karakter olmalı.</p>}

      <input
        type="email"
        placeholder="E-posta"
        {...register("email", { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">Geçerli bir e-posta girin.</p>}

      <input
        type="password"
        placeholder="Şifre"
        {...register("password", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">Şifre en az 8 karakter olmalı, büyük, küçük harf ve özel karakter içermelidir.</p>
      )}

      <input
        type="password"
        placeholder="Şifreyi Onayla"
        {...register("confirm_password", {
          required: "Şifre onayı gereklidir.",
          validate: (value) => value === watchPassword || "Şifreler eşleşmiyor.",
        })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>}

      <select {...register("role_id", { valueAsNumber: true })} className="w-full p-2 border border-gray-300 rounded">
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>

      {watchRole === 2 && (
        <>
          <input type="text" placeholder="Mağaza Adı" {...register("store_name", { required: true, minLength: 3 })} className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Mağaza Telefonu" {...register("store_phone", { required: true, pattern: /^\+90\d{10}$/ })} className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Vergi Kimlik No (T XXXX V XXXXXX)" {...register("store_tax_no", { required: true, pattern: /^T \d{4} V \d{6}$/ })} className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Banka Hesap No (IBAN)" {...register("store_bank_account", { required: true, pattern: /^TR\d{24}$/ })} className="w-full p-2 border border-gray-300 rounded" />
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "Gönderiliyor..." : "Kaydol"}
      </button>

      <div className="text-center">
        <Link to="/login" className="text-blue-500">Zaten bir hesabınız var mı? Giriş yapın.</Link>
      </div>
    </form>
  );
}