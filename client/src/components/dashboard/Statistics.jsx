import React from "react";
import { inject, observer } from "mobx-react";

import typoStyles from "../../styles/typo.module.css";
import styles from "./Statistics.module.css";

const Statistics = ({ committeeStore }) => {
  const { committees, countries } = committeeStore;

  return (
    <div>
      <h2 className={typoStyles.heading2}>Race statistics</h2>
      <ul className={styles.counter}>
        <li className={styles.stat}>
          <img
            src="../../../assets/icons/stats/committees.png"
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
            src="../../../assets/icons/stats/countries.png"
            className={styles.icon}
            width="40"
            height="40"
            alt="Different countries"
          />
          <div>
            <div className={styles.number}>{countries.length}</div>
            <p className={styles.description}>Different countries</p>
          </div>
        </li>
        <li className={styles.stat}>
          <img
            src="../../../assets/icons/stats/participants.png"
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
            src="../../../assets/icons/stats/date.png"
            className={styles.icon}
            width="40"
            height="40"
            alt="Races on the same day"
          ></img>
          <div>
            <div className={styles.number}>
              {
                committees.filter(committee => {
                  return committee.raceday === "2020-09-29T00:00:00.000Z";
                }).length
              }
            </div>
            <p className={styles.description}>Races on the same day</p>
          </div>
        </li>
        <li className={styles.stat}>
          <img
            src="../../../assets/icons/stats/survivors.png"
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
};

export default inject(`committeeStore`)(observer(Statistics));
