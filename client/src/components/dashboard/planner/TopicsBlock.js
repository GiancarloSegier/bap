import React from "react";
import styles from "./TopicsBlock.module.css";
import modalStyles from "../../../styles/modal.module.css";
import typoStyles from "../../../styles/typo.module.css";

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
      <p>More information?</p>
      <div className={styles.cardGrid}>
        <article className={styles.topicBlock}>
          <img
            src="http://placekitten.com/40/40" // className={styles.icon}
            width="40"
            height="40"
            alt="Location"
          />
          <div>
            <p>Chapter 2</p>
            <h2 className={typoStyles.heading3}>Managing people</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TopicsBlock;
