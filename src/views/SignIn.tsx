import React, { useState } from 'react';
import styles from '../styles/component-css/signin.module.css';
import { useNavigate } from 'react-router-dom';
import  services  from '../services/component_services/Sign_in_service'
import Loading from '../components/Loader';


export interface Formdetails {
  firstname:string;
  lastname:string;
  email: string;
  password: string;
  confirmPassword?: string;
}
interface SigninDetails {
  email: string;
  password: string;

}

const SignInPage = () => {
  const [sigindetails, setSiginDetails] = useState<SigninDetails>({
    email: '',
    password: '',
  });
  const [sigupdetails, setSigupDetails] = useState<Formdetails>({
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setloading] = useState<boolean>(false)
  const [SignUp, setSignUp] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true)
    const Check = await services.Login().then(res=>{
      setloading(false)
      return res}).catch(err=>{
        setloading(false)
        console.log(err);
      });
    console.log("got the response", Check);

    // Handle sign-in logic here
    navigate('/home');
    console.log(sigindetails)
  };
  const CreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true)
    const Check = await services.SignUp(sigupdetails).then(res=>{
      setloading(false)
      return res}).catch(err=>{
        setloading(false)
        console.log(err);
      });
    console.log("got the response", Check);
    // Handle sign-in logic here
    navigate('/home');
    console.log(sigindetails)
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSiginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleInput_signup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const isPasswordValid = () => {
    return (
        sigupdetails.password !== '' && 
        sigupdetails.confirmPassword !== '' && 
        sigupdetails.password === sigupdetails.confirmPassword
    );
};
  return (
    <>
      <Loading isLoading={loading} />
      {SignUp ? <div className={styles.container}>
        <div className={styles.containe_wrapper}>
          <form onSubmit={CreateUser}>
            <div className={styles.container_layer}>
              <h1>Register</h1>
              <div className={styles.inputcontainer}>
                <input
                  onChange={handleInput_signup}
                  name="firstname"
                  value={sigupdetails.firstname}
                  type="text"
                  placeholder="Firstname"
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  onChange={handleInput_signup}
                  name="lastname"
                  value={sigupdetails.lastname}
                  type="text"
                  placeholder="Lastname"
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  onChange={handleInput_signup}
                  name="email"
                  value={sigupdetails.email}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="password"
                  onChange={handleInput_signup}
                  placeholder="Password"
                  name="password"
                  value={sigupdetails.password}
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="password"
                  onChange={handleInput_signup}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={sigupdetails.confirmPassword}
                />
              </div>
              <button disabled={!isPasswordValid()} className={styles.submit}>Register !!</button>
              <p className={styles.account}>
              Already have an Account ?{' '}
              <span className={styles.register} onClick={()=>{setSignUp(!SignUp)}}>Signin</span>
            </p>
            </div>

          </form>
        </div>
      </div> : <div className={styles.container}>
        <div className={styles.containe_wrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.container_layer}>
              <h1>Sign-In</h1>
              <div className={styles.inputcontainer}>
                <input
                  onChange={handleInput}
                  name="email"
                  value={sigindetails.email}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="password"
                  onChange={handleInput}
                  placeholder="Password"
                  name="password"
                  value={sigindetails.password}
                />
              </div>
              <div className={styles.utils}>
                <p>Forgot password?</p>
              </div>
              <button className={styles.submit}>Submit</button>
            </div>
            <p className={styles.account}>
              Don't have an account?{' '}
              <span className={styles.register} onClick={()=>{setSignUp(!SignUp)}}>Register</span>
            </p>
          </form>
        </div>
      </div>}
      <button onClick={() => { setloading(!loading) }}> loading</button>
    </>
  );
};

export default SignInPage;
