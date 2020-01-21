import React from "react";
import LoginForm from "../../components/auth/LoginForm";
// import Topbar from "../components/Topbar";
// import Todos from "../containers/Todos";
import styles from "./Auth.module.css";
// import Form from "../components/Form";

const Login = () => {
  return (
    <>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
