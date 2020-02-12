import React, { Component } from "react";
import styles from "../Toolbox.module.css";
const Chapter_Start = () => {
  return (
    <>
      <section className={styles.header_bg}>
        <div className={styles.container + " " + styles.header}>
          <img
            className={styles.header_img}
            src="../assets/starting.png"
            alt=""
          />
          <div className={styles.header_text}>
            <p className={styles.smalltitle}>Chapter 1</p>
            <h1 className={styles.heading1}>Starting your event</h1>
            <p className={styles.intro}>
              Ready, set, go! Kickstart your the planning of your Race with
              mapping out the most important structures.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section className={styles.whenwere}>
          <h2 className={styles.heading2}>when and where</h2>
          <div className={styles.grid}>
            <div>
              <img height="250" src="../assets/when.png" alt="" />
              <p className={styles.smalltitle}>when</p>
              <p className={styles.copy}>
                Most of the Races for the Cure will take place on the same day,
                the last Sunday of September.
                <span className={styles.highlight}>
                  {" "}
                  For 2020 this is the 27th of September.{" "}
                </span>
                The advantage of this last Sunday of September is that you can
                claim the official kick-off of breast cancer month October.
              </p>
            </div>
            <div>
              <img height="250" src="../assets/where.png" alt="" />
              <p className={styles.smalltitle}>where</p>
              <p className={styles.copy}>
                The decision regarding where the Race will take place depends on
                your organisation. First of all, it is important to decide where
                you will held the race: in which city or cities. Off course you
                have to aline this with local situations and logistics
              </p>
            </div>
          </div>
        </section>
        <div className={styles.card + " " + styles.long_card}>
          <h3 className={styles.heading3 + " " + styles.pink}>
            One day, <br />
            one race
          </h3>
          <p className={styles.copy}>
            "One day, One Race" symbolises solidarity all across the continent.
            Therefore we encourage your to pick the last Sunday of September as
            race date to strenghten this idea.
            <span className={styles.highlight}>
              {" "}
              If you pick another date, please be in contact with Think Pink
              Europe so we can adapt communication.
            </span>
          </p>
        </div>
      </div>
      <section className={styles.purple_bg}>
        <div className={styles.container}>
          <div className={styles.next}>
            <h3 className={styles.heading2}>Next steps</h3>
            <p className={styles.copy}>
              Let’s start of with the basics. Practical information about the
              event and job functions.
            </p>
          </div>
          <div className={styles.card_grid}>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="../assets/people.png"
                  alt=""
                />
              </div>

              <div>
                <p className={styles.card_subtitle}>chapter 2</p>
                <h4 className={styles.card_title}>Managing People</h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="../assets/financial.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>chapter 3</p>
                <h4 className={styles.card_title}>Financial and Sponsors</h4>
              </div>
            </div>
            <div className={styles.chapter_card + " " + styles.grow}>
              <div className={styles.image_container}>
                <img
                  className={styles.chapter_image}
                  src="../assets/legal.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>chapter 4</p>
                <h4
                  className={styles.card_title + " " + styles.card_title_small}
                >
                  Legal, Security and Medical Provision
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chapter_Start;
