import React from "react";
import styles from "./Auth.module.css";
import MemberRegisterForm from "../../components/auth/MemberRegisterForm";
import AdminRegisterForm from "../../components/auth/AdminRegisterForm";

const Register = props => {
  const query = new URLSearchParams(props.location.search);
  const type = query.get("type");

  return (
    <>
      <div className={styles.divide + " mediumcontainer"}>
        <h1 className="hidden">Loginpage</h1>
        <div>
          <h2 className={styles.subtitle}>Almost there...</h2>
          <p className={styles.title}>Complete your profile</p>
        </div>
        {type === "admin" ? <AdminRegisterForm /> : <MemberRegisterForm />}
      </div>
    </>
  );
};

export default Register;
