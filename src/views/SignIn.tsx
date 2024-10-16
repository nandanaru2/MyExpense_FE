import React, { useState } from 'react';
import styles from '../styles/component-css/signin.module.css';
import { useNavigate } from 'react-router-dom';
const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    navigate('/home')
    console.log('Sign in with:', email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.logo}>
          <div className={styles.logoInner}></div>
        </div>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>Enter your credentials to access your account.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <svg className={styles.icon} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <svg className={styles.icon} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.forgotPassword}>
          <a href="#" className={styles.link}>
            Forgot your password? Reset Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;