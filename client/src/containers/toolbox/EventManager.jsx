import React, { Component } from "react";
import styles from "../Toolbox.module.css";
import FontAwesome from "react-fontawesome";
class EventManager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className={styles.header_bg}>
          <div className={styles.container}>
            <a className={styles.back} href="">
              <FontAwesome name="chevron-left" className={styles.arrow} />
              managing people
            </a>
          </div>
          <div className={styles.container + " " + styles.header}>
            <img src="../../assets/headerscrabble.png" alt="" />
            <div className={styles.header_text}>
              <h1 className={styles.heading1}>Event manager</h1>
              <p className={styles.intro}>
                The Event Manager plays a key role and should be filled by a
                professional or a very capable individual familiar with the many
                facets of producing a Race.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.container}>
          <section className={styles.whenwere}>
            <h2 className={styles.heading2}>
              Different types of event managers
            </h2>
            <div className={styles.grid}>
              <div>
                <img height="250" src="../../assets/when.png" alt="" />
                <p className={styles.smalltitle}>Race Director</p>
                <p className={styles.copy}>
                  Most of the Races for the Cure will take place on the same
                  day, the last Sunday of September.{" "}
                  <span className={styles.highlight}>
                    For 2020 this is the 27th of September.
                  </span>
                  The advantage of this last Sunday of September is that you can
                  claim the official kick-off of breast cancer month October.
                </p>
              </div>
              <div>
                <img height="250" src="../../assets/were.png" alt="" />
                <p className={styles.smalltitle}>The leader</p>
                <p className={styles.copy}>
                  The decision regarding where the Race will take place depends
                  on your organisation. First of all, it is important to decide
                  where you will held the race: in which city or cities. Off
                  course you have to aline this with local situations and
                  logistics
                </p>
              </div>
            </div>
          </section>

          <section className={styles.tasks}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Main tasks</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
            <div className={styles.taskgrid}>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>
                  Secure Race venue permits and other necessary permits
                </p>
              </div>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>
                  Manage insurance from all parties that will erect, assemble,
                  or constrcuction, like tents, fences, ... at the Race site.
                </p>
              </div>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>
                  Select race date &amp; define format
                </p>
              </div>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>
                  Select race date &amp; define format
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.purple_bg}>
          <div className={styles.container}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Other jobs</h3>
              <p className={styles.copy}>
                Practical information about the event and job functions.
              </p>
            </div>
            <div className={styles.card_grid}>
              <div className={styles.chapter_card + " " + styles.grow}>
                <img
                  className={styles.otherjob_image}
                  src="../../assets/jobs/logic.png"
                  alt=""
                />
                <div>
                  <p className={styles.card_subtitle}>Job</p>
                  <h4 className={styles.card_title}>Logistic manager</h4>
                </div>
              </div>
              <div className={styles.chapter_card + " " + styles.grow}>
                <img
                  className={styles.otherjob_image}
                  src="../../assets/jobs/event.png"
                  alt=""
                />
                <div>
                  <p className={styles.card_subtitle}>Job</p>
                  <h4 className={styles.card_title}>Event manager</h4>
                </div>
              </div>
              <div className={styles.chapter_card + " " + styles.grow}>
                <img
                  className={styles.otherjob_image}
                  src="../../assets/jobs/prmanager.png"
                  alt=""
                />
                <div>
                  <p className={styles.card_subtitle}>Job</p>
                  <h4
                    className={
                      styles.card_title + " " + styles.card_title_small
                    }
                  >
                    Public Relation manager
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EventManager;
