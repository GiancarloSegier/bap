import React from "react";
import styles from "./NotFound.module.css";
// import Form from "../components/Form";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.align}>
        <img
          src="../../assets/404.png"
          className={styles.emptyImage}
          alt="Location"
        />
        <h1 className={styles.large}>404</h1>
        <p className={styles.mid}>Whoops, nothing to see here!</p>
        <p className={styles.body}>
          Feeling lost? Maybe you are looking <br />
          for one of these pages:
        </p>
        <ul className={styles.list}>
          <li className={styles.link}>Home</li>
          <li className={styles.link}>Login</li>
          <li className={styles.link}>Designstudio</li>
          <li className={styles.link}>Toolbox</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
