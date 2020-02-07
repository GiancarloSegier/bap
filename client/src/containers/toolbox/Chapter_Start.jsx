import React, { Component } from "react";
import styles from "../Toolbox.module.css";
class Chapter_Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className={styles.toolboxContainer}>
          <p className={styles.pink}>Chapter 1</p>
          <h1 className={styles.heading1}>Starting your event</h1>
          <p className={styles.intro}>
            Over the last years, Race for the Cure grew to be the world’s
            largest sporting event in the fight against{" "}
            <span className={styles.highlight}>breast cancer. </span>breast
            cancer. But there is always room for growth.
          </p>
        </section>
        <section className={styles.spacer + " " + styles.toolboxContainer}>
          <h2 className={styles.heading2}>when and were</h2>
          <div className={styles.grid}>
            <div className={styles.card + " " + styles.span_vertical}>
              <p className={styles.smalltitle}>when</p>
              <p className={styles.body}>
                Most of the Races for the Cure will take place on the same day,
                the last Sunday of September.
              </p>
              <p className={styles.body}>
                For 2020 this is the 27th of September. If you have, for all
                kinds of reasons, another date please be in contact with Think
                Pink Europe so we can adapt communication.
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.smalltitle}>where</p>
              <p className={styles.body}>
                The decision regarding where the Race will take place depends on
                your organisation. First of all, it is important to decide where
                you will held the race: in which city or cities.
              </p>
            </div>
            <div className={styles.card + " " + styles.tip}>
              <p className={styles.body}>
                The advantage of this last Sunday of September is that you can
                claim the official kick-off of breast cancer month October. But
                off course you have to aline this with local situations and
                logistics.
              </p>
            </div>
          </div>
        </section>
        <section
          className={
            styles.purplebg + " " + styles.spacer + " " + styles.negative_margin
          }
        >
          <div className={styles.toolboxContainer + " " + styles.flex}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Next steps</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
            <div className={styles.flex}>
              <div className={styles.chapter_card}>
                <img src="../assets/chapter3.png" alt="" />
                <p className={styles.card_subtitle}>chapter1</p>
                <h4 className={styles.card_title}>starting your event</h4>
              </div>
              <div className={styles.chapter_card}>
                <img src="../assets/chaptercard.png" alt="" />
                <p className={styles.card_subtitle}>chapter1</p>
                <h4 className={styles.card_title}>Managing People</h4>
              </div>
              <div className={styles.chapter_card}>
                <img src="../assets/chapter3.png" alt="" />
                <p className={styles.card_subtitle}>chapter1</p>
                <h4 className={styles.card_title}>starting your event</h4>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Chapter_Start;
