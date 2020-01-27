import React from "react";
import RequestForm from "../../components/auth/RequestForm";
import styles from "./Auth.module.css";

const Request = () => {
  return (
    <>
      <div className={styles.divide + " mediumcontainer"}>
        <h1 className="hidden">Loginpage</h1>
        <div>
          <h2 className={styles.subtitle}>Join Think Pink Europe</h2>
          <p className={styles.title}>Request acces</p>
          <p className={styles.intro}>
            Is your organisation ready to take part in Europe’s biggest sport
            event to fight against breast cancer? <br />
            Get in touch and join the movement!
          </p>
        </div>
        <RequestForm />
      </div>
    </>
  );
};

export default Request;
