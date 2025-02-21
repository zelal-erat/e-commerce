import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { clearErrors, loginUser,  } from "../actions/authAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (auth.user) {
      toast.success("Giriş başarılı!");
      const redirectPath = location.state?.from || "/";
      history.push(redirectPath);
    }
  }, [auth.user, history, location.state]);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  const validate = (data) => {
    let newErrors = {};
    if (!data.email) {
      newErrors.email = "Email zorunludur";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Geçerli bir email giriniz";
    }
    if (!data.password) {
      newErrors.password = "Şifre zorunludur";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (data) => {
    if (!validate(data)) return;
    dispatch(loginUser(data));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Giriş Yap</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Şifre</label>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" {...register("remember")} className="mr-2" />
            Beni Hatırla
          </label>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Giriş Yap
        </button>
        {auth.error && <p className="text-red-500 text-sm mt-2">{auth.error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
