import React from "react";
import RequestForm from "../../components/auth/RequestForm";
import styles from "./Auth.module.css";

// import Topbar from "../components/Topbar";
// import Todos from "../containers/Todos";
// import styles from "./Home.module.css";
// import Form from "../components/Form";

const Request = () => {
  return (
    <>
      <div className={styles.form}>
        <RequestForm />
      </div>
    </>
  );
};

export default Request;
