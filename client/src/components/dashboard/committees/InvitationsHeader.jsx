import React from "react";
import styles from "./committees.module.css";
const InvitationsHeader = () => {
  return (
    <ul className={styles.topbar + " " + styles.invitationGrid}>
      <li>Organisation</li>
      <li>Name</li>
      <li>Phone</li>
      <li>Email</li>
      <li>Accepted</li>
    </ul>
  );
};

export default InvitationsHeader;
