import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchRoles } from "../actions/thunkAction";
import { setUser } from "../reducers/clientReducer";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default function SignUpPage() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles); // Redux Store'dan rolleri çek
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { role_id: 3 } });

  const watchRole = watch("role_id", 3);

  useEffect(() => {
    dispatch(fetchRoles()); // Roller önceden yüklenmemişse API'den çek
  }, [dispatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
      store:
        data.role_id === 2
          ? {
              name: data.store_name,
              phone: data.store_phone,
              tax_no: data.store_tax_no,
              bank_account: data.store_bank_account,
            }
          : undefined,
    };

    try {
      const response = await axiosInstance.post("/signup", formattedData);
      alert("Hesabınızı etkinleştirmek için e-postanızı kontrol edin!");
      dispatch(setUser(response.data.user)); // Kullanıcıyı Redux Store'a kaydet
      window.history.back();
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
        <p className="text-red-500 text-sm">
          Şifre en az 8 karakter olmalı, büyük, küçük harf ve özel karakter içermelidir.
        </p>
      )}

      <select {...register("role_id", { valueAsNumber: true })} className="w-full p-2 border border-gray-300 rounded">
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>

      {watchRole === 2 && (
        <>
          <input
            type="text"
            placeholder="Mağaza Adı"
            {...register("store_name", { required: true, minLength: 3 })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.store_name && <p className="text-red-500 text-sm">Mağaza adı en az 3 karakter olmalı.</p>}

          <input
            type="text"
            placeholder="Mağaza Telefonu"
            {...register("store_phone", { required: true, pattern: /^\+90\d{10}$/ })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.store_phone && (
            <p className="text-red-500 text-sm">Geçerli bir Türkiye numarası girin (+90XXXXXXXXXX).</p>
          )}

          <input
            type="text"
            placeholder="Vergi Kimlik No (T XXXX V XXXXXX)"
            {...register("store_tax_no", { required: true, pattern: /^T \d{4} V \d{6}$/ })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.store_tax_no && <p className="text-red-500 text-sm">Vergi kimlik numarası doğru formatta olmalı.</p>}

          <input
            type="text"
            placeholder="Banka Hesap No (IBAN)"
            {...register("store_bank_account", { required: true, pattern: /^TR\d{24}$/ })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.store_bank_account && (
            <p className="text-red-500 text-sm">Geçerli bir IBAN girin (TR ile başlamalı ve 26 karakter olmalıdır).</p>
          )}
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "Gönderiliyor..." : "Kaydol"}
      </button>
    </form>
  );
}
