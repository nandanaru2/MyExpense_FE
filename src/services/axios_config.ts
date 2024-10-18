import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,  // Replace with your API base URL
    timeout: 10000,  // Optional: timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
    
  }
});

// Request interceptor to add JWT token
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Retrieve the JWT from localStorage or sessionStorage
    const token = localStorage.getItem('jwtToken');  // or sessionStorage.getItem('jwtToken')
    
    if (token && config.headers) {
      // Add the JWT to the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor to handle status codes
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful response
    return response;
  },
  (error: AxiosError) => {
    // Handle error responses
    const status = error.response?.status;

    if (status) {
      switch (status) {
        case 400:
          console.error('Bad Request', error.response);
          break;
        case 401:
          console.error('Unauthorized: Invalid or expired token', error.response);
          // Optional: Redirect to login page if token is invalid or expired
          localStorage.removeItem('jwtToken');  // Clear invalid token
          window.location.href = '/';      // Redirect to login page
          break;
        case 403:
          console.error('Forbidden', error.response);
          break;
        case 404:
          console.error('Resource not found', error.response);
          break;
        case 500:
          console.error('Internal Server Error', error.response);
          break;
        default:
          console.error('An error occurred', error.response);
      }
    }

    // Reject the promise with the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
