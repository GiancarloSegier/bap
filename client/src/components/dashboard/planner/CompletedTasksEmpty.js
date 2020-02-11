import React from "react";
import styles from "../../../styles/empty.module.css";
import typoStyles from "../../../styles/typo.module.css";

const completedTasksEmpty = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.backgroundEmpty}>
          <div className={styles.stroke}></div>
          <div className={styles.stroke}></div>
          <div className={styles.stroke}></div>
        </div>

        <div className={styles.committeeEmptyContainer}>
          <div className={styles.emptyImageContainer}>
            <img
              src="../../../assets/run.png"
              className={styles.emptyImage}
              alt="Location"
            />
          </div>
          <p className={typoStyles.body}>No completed tasks yet</p>
        </div>
      </div>
    </>
  );
};

export default completedTasksEmpty;
