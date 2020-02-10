import React, { Component } from "react";
import positionStyles from "./PosterA.module.css";
import styles from "../../styles/posters.module.css";

class PosterA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basics: {
        raceday: "29-09-2020",
        city: "Antwerpen",
        location: "Frederik van Eedenplein",
        site: "raceforthecure.com",
        hours: "9:00 - 14:00",
        background: "./assets/designstudio/posterBackground.jpg",
        logo: "./assets/designstudio/logothinkpink.png",
        walking: 3,
        running: 6
      }
    };
  }

  render() {
    const { data } = this.props;
    const { basics } = this.state;
    return (
      <div className={styles.artboard}>
        <img
          src={data.background ? data.background : basics.background}
          alt="backgroundimage"
          className={styles.background}
        />
        <div className={styles.posterContent}>
          <div className={styles.krulA}></div>
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
              <h1 className={styles.heading1}>Race for the cure</h1>
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
              <p className={styles.info}>
                {data.walking !== "" ? data.walking : basics.walking} km walking
              </p>
              <p className={styles.info}>
                {data.running !== "" ? data.running : basics.running} km running
              </p>
              <div className={styles.line}></div>
              <p className={styles.smallInfo}>
                {" "}
                {data.location !== "" ? data.location : basics.location}
              </p>
              <p className={styles.smallInfo}>
                {data.hours !== "" ? data.hours : basics.hours}
              </p>
            </div>
            <p className={styles.site}>
              {" "}
              {data.site !== "" ? data.site : basics.site}
            </p>
          </div>
          <div className={styles.logoCircle + " " + positionStyles.logoCircle}>
            <img
              className={styles.logo}
              src={data.logo ? data.logo : basics.logo}
              alt="logo organisation"
            />
          </div>

          <div
            className={
              styles.sponsorBlock +
              " " +
              (data.sponsorborder === "on" ? null : styles.noSponsors)
            }
          >
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

export default PosterA;
