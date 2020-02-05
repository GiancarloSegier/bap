import React from "react";
import styles from "./committees.module.css";
const CommitteeHeader = () => {
  return (
    <ul className={styles.topbar}>
      <li>Organisation</li>
      <li>City</li>
      <li>Country</li>
      <li>Raceday</li>
      <li>Members</li>
    </ul>
  );
};

export default CommitteeHeader;
