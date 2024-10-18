import axiosInstance from "../axios_config";

export const Login = () => {
  return axiosInstance.get(`/check`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((result) => {
    return result.data;  // Properly return the response data
  })
  .catch((err) => {
    console.error(err.message);
    return err.message;  // Properly return the error message
  });
};