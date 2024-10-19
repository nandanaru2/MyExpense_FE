import { Formdetails } from "../../views/SignIn";
import axiosInstance from "../axios_config";

 const Login = () => {
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
 const SignUp = (Signupdata:Formdetails) => {
  const { confirmPassword, ...postdata } = Signupdata;

  return axiosInstance.post(`/createuser`,postdata, {
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
export default {Login,SignUp}