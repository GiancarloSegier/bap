import React from "react";
import styles from "../Dashboard.module.css";
import typoStyles from "../../../styles/typo.module.css";

import { inject, observer } from "mobx-react";

const MemberDashboard = ({ greeting, userStore }) => {
  const { authUser } = userStore;
  return (
    <>
      <div className={styles.oneLine}>
        <h1 className={typoStyles.heading1}>
          {greeting} {authUser.name}.
        </h1>
      </div>
    </>
  );
};

export default inject(`userStore`)(observer(MemberDashboard));
