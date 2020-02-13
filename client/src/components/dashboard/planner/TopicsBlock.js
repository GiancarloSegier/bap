import React from "react";
import styles from "./TopicsBlock.module.css";
import modalStyles from "../../../styles/modal.module.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

const TopicsBlock = () => {
  return (
    <div
      className={
        modalStyles.modalContainer +
        " " +
        modalStyles.divideBorder +
        " " +
        styles.infoBlock
      }
    >
      <h3 className={styles.heading3}>More information?</h3>
      <div className={styles.cardGrid}>
        <Link to={ROUTES.people} target="_blank" className={styles.topicBlock}>
          <img
            src="/assets/people.png"
            className={styles.topicImage}
            alt="illustration"
          />
          <div className={styles.infoText}>
            <p className={styles.subTitle}>Chapter 2</p>
            <h4 className={styles.topicTitle}>Managing people</h4>
          </div>
        </Link>
        <Link to={ROUTES.people} target="_blank" className={styles.topicBlock}>
          <img
            src="/assets/empty_request.png"
            className={styles.topicImage}
            alt="illustration"
          />
          <div className={styles.infoText}>
            <p className={styles.subTitle}>Chapter 5</p>
            <h4 className={styles.topicTitle}>Public relations</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopicsBlock;
