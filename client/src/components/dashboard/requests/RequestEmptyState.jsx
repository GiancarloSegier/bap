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
          <p className={typoStyles.body}>
            Here you can find an overview of all the race committees from every
            country. There are no committees added yet.
          </p>
          <img
            src="http://placekitten.com/200/200"
            className={styles.emptyImage}
            alt="Location"
          />
        </div>
      </div>
    );
  }
}

export default RequestEmptyState;
