import React from "react";
import styles from "../../../styles/empty.module.css";
import typoStyles from "../../../styles/typo.module.css";

const CommitteeEmpty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.backgroundEmpty}>
        <div className={styles.stroke}></div>
        <div className={styles.stroke}></div>
        <div className={styles.stroke}></div>
      </div>

      <div className={styles.committeeEmptyContainer}>
        <p className={typoStyles.body}>
          Here you can find an overview of all the race committees from every
          country. There are no committees added yet.
        </p>

        <button
          className={typoStyles.buttonInline}
          onClick={this.openInviteForm}
        >
          Invite your first committee
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
