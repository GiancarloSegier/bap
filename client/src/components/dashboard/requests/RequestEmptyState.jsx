import React, { Component } from "react";
import styles from "../../../styles/empty.module.css";
import typoStyles from "../../../styles/typo.module.css";

class RequestEmptyState extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.backgroundEmptyRequest}>
          <div className={styles.strokes}>
            <div className={styles.stroke_sm}></div>
            <div className={styles.stroke_sm}></div>
            <div className={styles.stroke_sm}></div>
          </div>
          <div className={styles.stroke_xl}></div>
        </div>

        <div className={styles.committeeEmptyContainer}>
          <div className={styles.emptyImageContainer}>
            <img
              src="../../assets/empty_request.png"
              className={styles.emptyImage}
              alt="Location"
            />
          </div>
          <p className={typoStyles.body}>
            Here you’ll find requests of organisations <br />
            who might be interested in working together. <br />
            <span className={styles.bold}>There are no current requests.</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RequestEmptyState;
