import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import styles from "./Auth.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.divide + " mediumcontainer"}>
        <h1 className="hidden">Loginpage</h1>
        <div>
          <h2 className={styles.subtitle}>Think Pink Europe</h2>
          <p className={styles.title}>
            Keep your race
            <br /> on track
          </p>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
