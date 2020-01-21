import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
// import Topbar from "../components/Topbar";
// import Todos from "../containers/Todos";
import styles from "./Login.module.css";
// import Form from "../components/Form";

const Login = () => {
  return (
    <>
      <div className={styles.form}>
        <LoginForm />
        <hr />
        <RegisterForm />
      </div>
    </>
  );
};

export default Login;
