import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
// import Form from "../components/Form";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.align}>
        <div className={styles.imageContainer}>
          <img
            src="../../assets/404.png"
            className={styles.emptyImage}
            alt="Location"
          />
        </div>
        <h1 className={styles.large}>404</h1>
        <p className={styles.mid}>Whoops, nothing to see here!</p>
        <p className={styles.body}>
          Feeling lost? Maybe you are looking <br />
          for one of these pages:
        </p>
        <ul className={styles.list}>
          <Link to={ROUTES.home} className={styles.link}>
            Home
          </Link>
          <Link to={ROUTES.login} className={styles.link}>
            Login
          </Link>

          <Link to={ROUTES.designstudio} className={styles.link}>
            Designstudio
          </Link>
          <Link to={ROUTES.toolbox} className={styles.link}>
            Toolbox
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
