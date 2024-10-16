import React, { useState } from 'react';
import styles from '../styles/component-css/signin.module.css';
import { useNavigate } from 'react-router-dom';

interface Signindetails {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [sigindetails, setSiginDetails] = useState<Signindetails>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div className={styles.container}>
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
            <span className={styles.register}>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
