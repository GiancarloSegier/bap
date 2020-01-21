import React from "react";
// import Todos from "../containers/Todos";
import styles from "./Auth.module.css";
// import Form from "../components/Form";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <div className={styles.form}>
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
