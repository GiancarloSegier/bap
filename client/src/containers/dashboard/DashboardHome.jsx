import React from "react";
// import styles from "./Dashboard.module.css";
// import Form from "../components/Form";

import { inject, observer } from "mobx-react";

const DashboardHome = ({ userStore }) => {
  return (
    <>
      <div>
        <p>
          Goeiemorgen {userStore.authUser.name} {userStore.authUser.surname}
        </p>
      </div>
    </>
  );
};

export default inject(`userStore`)(observer(DashboardHome));
