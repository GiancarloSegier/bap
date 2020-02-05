import React from "react";
import styles from "../../../styles/empty.module.css";
import typoStyles from "../../../styles/typo.module.css";

const CommitteeEmpty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.backgroundEmptyAnnouncements}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>

      <div className={styles.committeeEmptyContainer}>
        <p className={typoStyles.body}>
          Looks kind of empty here, you can create an anouncement to update or
          inspire other committees.
        </p>
        <button
          className={typoStyles.buttonInline}
          onClick={this.openInviteForm}
        >
          Create your first announcement
        </button>
        <img
          src="http://placekitten.com/200/200"
          className={styles.emptyImage}
          alt="Location"
        />
      </div>
    </div>
  );
};

export default CommitteeEmpty;
