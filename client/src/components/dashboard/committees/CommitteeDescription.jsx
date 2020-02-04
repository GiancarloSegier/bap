import React, { Component } from "react";
import styles from "./CommitteeDescription.module.css";
import FontAwesome from "react-fontawesome";

class CommitteeDescription extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { committee } = this.props;
    return (
      <>
        <div className={styles.flex}>
          <p className={styles.back}>
            <FontAwesome name="chevron-left" className={styles.arrow} />
            back to overview
          </p>
          <button type="button" className={styles.textButton}>
            <FontAwesome name="trash" className={styles.trash} />
            Remove committee
          </button>
        </div>
        <h1 className={styles.title}>Rosa vida</h1>
        <div className={styles.flex}>
          <div>
            <div className={styles.info}>
              <div className={styles.stat + " " + styles.city}>
                <img
                  src="http://placekitten.com/40/40"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>{committee.country}</p>
                  <p className={styles.data}>{committee.city}</p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.raceday}>
                <img
                  src="http://placekitten.com/40/40"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>Raceday</p>
                  <p className={styles.data}>29/07/20</p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.members}>
                <img
                  src="http://placekitten.com/40/40"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>Members</p>
                  <p className={styles.data}>5</p>
                </div>
              </div>
            </div>
            <p className={styles.description}>
              {committee.description != "" ? (
                committee.description
              ) : (
                <p>No description yet</p>
              )}
            </p>
          </div>
          <img
            src="http://placekitten.com/200/200"
            className={styles.teamlogo}
            alt="Location"
          />
        </div>
      </>
    );
  }
}
export default CommitteeDescription;
