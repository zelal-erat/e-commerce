import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../axios';

const SignUpPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStoreRole, setIsStoreRole] = useState(false); // Store role seçildi mi?

  // Roles verilerini almak için GET isteği
  useEffect(() => {
    axiosInstance.get('/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(err => console.error('Error fetching roles:', err));
  }, []);

  // Role değiştirildiğinde Store formu gösterilsin mi kontrolü
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setIsStoreRole(selectedRole === 'store'); // Eğer 'store' seçildiyse mağaza bilgilerini göster
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axiosInstance.post('/signup', data);
      alert('You need to click the link in email to activate your account!');
      // Eğer başarılıysa, yönlendirme yapılabilir
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred while signing up');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email format' }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, message: 'Password must include numbers, uppercase, lowercase, and special characters' }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register('confirmPassword', {
                validate: value => value === watch('password') || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="role">Role</label>
            <select
              id="role"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register('role_id', { required: 'Role is required' })}
              onChange={handleRoleChange}
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>

          {/* Mağaza Alanları (Yalnızca "store" rolü seçildiyse görünür) */}
          {isStoreRole && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600" htmlFor="storeName">Store Name</label>
                <input
                  type="text"
                  id="storeName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('store.name', {
                    required: 'Store Name is required',
                    minLength: { value: 3, message: 'Store Name must be at least 3 characters' }
                  })}
                />
                {errors.store?.name && <p className="text-red-500 text-sm mt-1">{errors.store.name.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600" htmlFor="storePhone">Store Phone</label>
                <input
                  type="tel"
                  id="storePhone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('store.phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^(?:\+90|0)(5\d{2})\d{6}$/, message: 'Invalid Turkish phone number' }
                  })}
                />
                {errors.store?.phone && <p className="text-red-500 text-sm mt-1">{errors.store.phone.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600" htmlFor="storeTaxNo">Store Tax No</label>
                <input
                  type="text"
                  id="storeTaxNo"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('store.tax_no', {
                    required: 'Tax ID is required',
                    pattern: { value: /^T\d{4}V\d{6}$/, message: 'Invalid tax ID format (TXXXXVXXXXXX)' }
                  })}
                />
                {errors.store?.tax_no && <p className="text-red-500 text-sm mt-1">{errors.store.tax_no.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600" htmlFor="storeBankAccount">Store Bank Account</label>
                <input
                  type="text"
                  id="storeBankAccount"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register('store.bank_account', {
                    required: 'Bank Account is required',
                    pattern: { value: /^[A-Za-z0-9]{22}$/, message: 'Invalid IBAN format' }
                  })}
                />
                {errors.store?.bank_account && <p className="text-red-500 text-sm mt-1">{errors.store.bank_account.message}</p>}
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
