import React, { Component } from "react";
import positionStyles from "./PosterC.module.css";
import styles from "../../styles/posters.module.css";

class PosterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basics: {
        title: "Race for the cure",
        raceday: "29-09-2020",
        city: "Antwerpen"
      }
    };
  }

  render() {
    const { data } = this.props;
    const { basics } = this.state;
    return (
      <div className={styles.artboard}>
        <img
          src="./assets/designstudio/posterBackground.jpg"
          alt="backgroundimage"
          className={styles.background}
        />
        <div className={styles.posterContent}>
          <div className={styles.krulC}></div>
          <div
            className={
              styles.blocks +
              " " +
              styles.purpleBlock +
              " " +
              positionStyles.purpleBlock
            }
          >
            <div>
              <p className={styles.raceday}>
                {data.raceday !== "" ? data.raceday : basics.raceday}
              </p>
              <h1 className={styles.heading1}>
                {data.title !== "" ? data.title : basics.title}
              </h1>
            </div>
            <p className={styles.city}>
              {data.city !== "" ? data.city : basics.city}
            </p>
          </div>
          <div
            className={
              styles.blocks +
              " " +
              styles.whiteBlock +
              " " +
              positionStyles.whiteBlock
            }
          >
            <div>
              <p className={styles.info}>3 km wandelen</p>
              <p className={styles.info}>6 km lopen</p>
              <div className={styles.line}></div>
              <p className={styles.smallInfo}>Frederik van Eedenplein</p>
              <p className={styles.smallInfo}>9:00 - 14:00</p>
            </div>
            <p className={styles.site}>raceforthecure.com</p>
          </div>
          <div className={styles.logoCircle + " " + positionStyles.logoCircle}>
            <img
              className={styles.logo}
              src="./assets/designstudio/logothinkpink.png"
              alt="logo organisation"
            />
          </div>
          <div className={styles.sponsorBlock}>
            <img
              className={styles.sponsor}
              src="./assets/designstudio/europcar.png"
              alt="logo organisation"
            />
            <img
              className={styles.sponsor}
              src="./assets/designstudio/skoda.png"
              alt="logo organisation"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PosterC;
