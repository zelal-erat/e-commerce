import axios from 'axios';

// Base URL'yi API ile iletişim kurabilmek için ayarlıyoruz.
const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com', // Backend API URL
});

export default axiosInstance;
