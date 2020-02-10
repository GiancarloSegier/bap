import React, { Component } from "react";
import positionStyles from "./PosterC.module.css";
import styles from "../../styles/posters.module.css";
import formStyles from "../../styles/form.module.css";

class PosterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basics: {
        raceday: "29-09-2020",
        city: "Antwerpen",
        location: "Frederik van Eedenplein",
        site: "raceforthecure.com",
        hours: "9:00 - 14:00",
        background: "./assets/designstudio/posterc.jpg",
        logo: "./assets/designstudio/logothinkpink.png",
        sponsors: props.data.sponsors,
        walking: 3,
        running: 6
      }
    };
  }
  componentDidMount = () => {
    this.setState({ sponsors: this.props.data.sponsors });
  };

  handleChange = e => {
    this.props.onUploadSponsors(e);
    this.setState({ sponsors: this.props.data.sponsors });
  };
  onRemoveSponsor = sponsor => {
    this.props.onRemoveSponsor(sponsor);

    this.setState({ sponsors: this.props.data.sponsors });
  };

  render() {
    const { data } = this.props;
    const { basics, sponsors } = this.state;
    return (
      <div className={styles.artboard}>
        <img
          src={data.background ? data.background : basics.background}
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
            {sponsors ? (
              <>
                {sponsors.map((sponsor, i) => {
                  return (
                    <div className={formStyles.imageContainer} key={i}>
                      <img
                        className={styles.sponsorLogo}
                        src={sponsor}
                        alt="sponsorlogo"
                      />

                      <button
                        type="button"
                        className={
                          formStyles.removeImage + " " + styles.removeImage
                        }
                        onClick={() => this.onRemoveSponsor(sponsor)}
                      >
                        <span className={formStyles.decliner}></span>
                      </button>
                    </div>
                  );
                })}
              </>
            ) : null}
            {data.sponsors.length < 7 ? (
              <fieldset id="uploadSponsor">
                <label htmlFor="sponsors" className={styles.uploadCard}>
                  <div className={styles.icon}>
                    <span className={styles.cross_line}></span>
                    <span className={styles.cross_line}></span>
                  </div>
                  <p className={styles.imageUploadText}>Add new sponsor</p>
                </label>
                <input
                  type="file"
                  name="sponsors"
                  id="sponsors"
                  multiple={true}
                  className={styles.sponsorInput}
                  onChange={this.handleChange}
                  accept="image/x-png,image/svg,image/jpeg"
                />
              </fieldset>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default PosterC;
