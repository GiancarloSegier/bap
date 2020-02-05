import React from "react";

import styles from "./Request.module.css";
const RequestEmpty = ({ openInviteForm }) => {
  return (
    <div className={styles.emptyCard} onClick={openInviteForm}>
      <div className={styles.icon}>
        <span className={styles.cross_line}></span>
        <span className={styles.cross_line}></span>
      </div>
      <p>Create a new committee to invite their event managers</p>
    </div>
  );
};

export default RequestEmpty;
