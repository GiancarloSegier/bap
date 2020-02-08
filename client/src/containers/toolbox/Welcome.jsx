import React, { Component } from "react";
import styles from "../Toolbox.module.css";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <section className>
            <p className={styles.pink}>Welcome</p>
            <h1 className={styles.heading1}>
              Organizing your race
              <br />
              From start to finish.
            </h1>
          </section>
          <section className={styles.spacer_small}>
            <div>
              <div className={styles.card + " " + styles.introjobs}>
                <p className={styles.smalltitle}>Introduction</p>
                <p className={styles.largebody}>
                  Over the last years, Race for the Cure grew to be the world’s
                  largest sporting event in the fight against
                  <span className={styles.highlight}> breast </span> cancer. But
                  there is always room for growth.
                </p>
                <p className={styles.largebody}>
                  This toolkit was created to help you organise a
                  <span className={styles.highlight}>Race for the Cure</span>
                  from start to finish. Whether you organise the Race for the
                  first time or not, use this toolkit as a
                  <span className={styles.highlight}> guideline </span> , a plan
                  or simply as inspiration. because it allows you focus on your
                  tasks while utilising their different talents and abilities.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.purplebg + " " + styles.negative_margin}>
          <div className={styles.container_small}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Getting Started</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
            <div className={styles.cardgrid}>
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
        <div className={styles.container_small}>
          <section>
            <div className={styles.purple_card}>
              <div>
                <p className={styles.smalltitle_white}>Share experience</p>
                <p className={styles.largeheader}>
                  Share your knowledge to expand our toolbox.
                </p>
                <a className={styles.button} href="">
                  learn more
                </a>
              </div>
              <p className={styles.helpbody}>
                Although the guidelines are carefully put together, they are far
                from complete. We are more than happy to hear your about
                experiences, tips and remarks so we can continuously update our
                guidelines.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Welcome;
