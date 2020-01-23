import React from "react";
import styles from "./Dashboard.module.css";
// import Form from "../components/Form";

import { inject, observer } from "mobx-react";

const DashboardHome = ({ userStore }) => {
  return (
    <>
      <div>
        <h1 className={styles.heading1}>{userStore.authUser.job.privileges}</h1>
        <img
          className={styles.avatar}
          src={userStore.authUser.avatarUrl}
          alt="image"
        />
        <p>
          Goeiemorgen {userStore.authUser.name} {userStore.authUser.surname}
        </p>
      </div>
    </>
  );
};

export default inject(`userStore`)(observer(DashboardHome));
