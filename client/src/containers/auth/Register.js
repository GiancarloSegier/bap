import React from "react";
import styles from "./Auth.module.css";
import MemberRegisterForm from "../../components/auth/MemberRegisterForm";
import AdminRegisterForm from "../../components/auth/AdminRegisterForm";

const Register = props => {
  const query = new URLSearchParams(props.location.search);
  const type = query.get("type");

  return (
    <>
      <div className={styles.form}>
        {type === "admin" ? <AdminRegisterForm /> : <MemberRegisterForm />}
      </div>
    </>
  );
};

export default Register;
