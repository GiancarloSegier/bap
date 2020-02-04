import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import typoStyles from "../../styles/typo.module.css";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { committees } = this.props.committeeStore;
    console.log(committees);
    return (
      <div>
        <h2 className={typoStyles.heading2}>Race statistics</h2>
        <ul className={styles.counter}>
          <li className={styles.stat}>
            <img
              src="http://placekitten.com/40/40"
              className={styles.icon}
              width="40"
              height="40"
              alt="Race committees"
            ></img>
            <div>
              <div className={styles.number}>{committees.length}</div>
              <p className={styles.description}>Race committees</p>
            </div>
          </li>
          <li className={styles.stat}>
            <img
              src="http://placekitten.com/40/40"
              className={styles.icon}
              width="40"
              height="40"
              alt="Different countries"
            />
            <div>
              <div className={styles.number}>8</div>
              <p className={styles.description}>Different countries</p>
            </div>
          </li>
          <li className={styles.stat}>
            <img
              src="http://placekitten.com/40/40"
              className={styles.icon}
              width="40"
              height="40"
              alt="Pre-registred participants"
            ></img>
            <div>
              <div className={styles.number}>200.000</div>
              <p className={styles.description}>Pre-registred participants</p>
            </div>
          </li>
          <li className={styles.stat}>
            <img
              src="http://placekitten.com/40/40"
              className={styles.icon}
              width="40"
              height="40"
              alt="Races on the same day"
            ></img>
            <div>
              <div className={styles.number}>7</div>
              <p className={styles.description}>Races on the same day</p>
            </div>
          </li>
          <li className={styles.stat}>
            <img
              src="http://placekitten.com/40/40"
              className={styles.icon}
              width="40"
              height="40"
              alt="Pre-registred survivors"
            ></img>
            <div>
              <div className={styles.number}>15.000</div>
              <p className={styles.description}>Pre-registred survivors</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default inject(`committeeStore`)(observer(Statistics));
