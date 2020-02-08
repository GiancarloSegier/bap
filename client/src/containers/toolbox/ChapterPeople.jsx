import React, { Component } from "react";
import styles from "../Toolbox.module.css";
class Chapter_People extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <section className={styles.flex}>
            <div className={styles.shrink}>
              <p className={styles.pink}>Chapter 2</p>
              <h1 className={styles.heading1}>Managing people</h1>
              <p className={styles.intro}>
                Once you know when and when the race will take place, it is
                important to think about who does what.
              </p>
            </div>
            <img src="../assets/headerscrabble.png" alt="" />
          </section>
          <section className={styles.spacer}>
            <div>
              <div className={styles.card + " " + styles.introjobs}>
                <p className={styles.smalltitle}>Selecting a race committee</p>
                <p className={styles.largebody}>
                  Planning, implementing and evaluating a Race can be fun,
                  rewarding and sometimes challenging.{" "}
                  <span className={styles.highlight}>
                    The Race is a joint effort.
                  </span>
                </p>
                <p className={styles.largebody}>
                  When selecting your Race committee members, think carefully
                  about the number of people needed to hold a Race, so the Race
                  chairs are not given too much work.{" "}
                  <span className={styles.highlight}>
                    Delegating work is very important to having a successful
                    Race
                  </span>{" "}
                  because it allows you focus on your tasks while utilising
                  their different talents and abilities.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2 className={styles.heading2}>when and were</h2>
              <p>
                This guide includes several jobs descriptions to consider for
                team members
                <br /> who will plan, implement and evaluate a Race event.{" "}
              </p>
              <div className={styles.jobs}>
                <div
                  className={
                    styles.job_card + " " + styles.green + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/event.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Event manager</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.blue + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/sponsor.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Sponsor manager</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.pinq + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/volunteer.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Volunteer manager</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.purple + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/prmanager.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>PR manager</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.orange + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/ambassador.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Ambassador</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.lime + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/logic.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Logistics manager</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.softpink + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/survivor.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>
                      Survivor recognition <br /> manager
                    </h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    styles.job_card + " " + styles.yellow + " " + styles.grow
                  }
                >
                  <img
                    src="../assets/jobs/racetreasurer.png"
                    className={styles.job_img}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.job_title}>Race Treasurer</h4>
                    <p className={styles.job_desc}>
                      This guide includes several jobs descriptions{" "}
                    </p>
                  </div>
                </div>
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
        {/* <section className={styles.purplebg + " " + styles.spacer}>
          <div className={styles.cardgrid}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Next steps</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
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
        </section> */}
      </>
    );
  }
}

export default Chapter_People;
