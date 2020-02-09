import React, { Component } from "react";
import styles from "../Toolbox.module.css";
class EventManager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <section className={styles.flex}>
            <div className={styles.shrink}>
              <p className={styles.pink}>jobs to be done 1</p>
              <h1 className={styles.heading1}>Event manager</h1>
              <p className={styles.intro}>
                The Event Manager plays a key role and should be filled by a
                professional or a very capable individual familiar with the many
                facets of producing a Race.
              </p>
            </div>
            <img src="../../assets/jobs/event.png" alt="" />
          </section>
          <section className={styles.spacer_small}>
            <h2 className={styles.heading2}>
              Different types <br />
              of event managers
            </h2>
            <div className={styles.grid}>
              <div className={styles.card + " " + styles.span_vertical}>
                <p className={styles.smalltitle}>Race Director</p>
                <p className={styles.body}>
                  Some Races may only want to contract for an Event Manager who
                  sets up the course and handles pure Race related matters such
                  as certification and timing.
                </p>
              </div>
              <div className={styles.card}>
                <p className={styles.smalltitle}>The Leader</p>
                <p className={styles.body}>
                  Other Races may want an Event Manager who works closely with
                  the Race Committee and/or takes the lead in handling
                  everything from volunteer coordination to sponsor development.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section
          className={
            styles.purplebg + " " + styles.negative_margin + " " + styles.spacer
          }
        >
          <div className={styles.container_small}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Main tasks</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
            <div className={styles.taskgrid}>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>Jobfunction</p>
              </div>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>Jobfunction</p>
              </div>
              <div className={styles.task_card}>
                <p className={styles.task_subtitle}>Jobfunction</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.purplebg + " " + styles.negative_margin}>
          <div className={styles.container_small}>
            <div className={styles.next}>
              <h3 className={styles.heading2}>Other jobs</h3>
              <p>
                Let’s start of with the basics. Practical information about the
                event and job functions.
              </p>
            </div>
            <div className={styles.cardgrid}>
              <div className={styles.chapter_card}>
                <img
                  height="157"
                  src="../../assets/jobs/volunteer.png"
                  alt=""
                />
                <p className={styles.card_subtitle}>Jobfunction</p>
                <h4 className={styles.card_title}>volonteers manager</h4>
              </div>
              <div className={styles.chapter_card}>
                <img height="157" src="../../assets/jobs/logic.png" alt="" />
                <p className={styles.card_subtitle}>Jobfunction</p>
                <h4 className={styles.card_title}>Logistic manager</h4>
              </div>
              <div className={styles.chapter_card}>
                <img
                  height="157"
                  src="../../assets/jobs/prmanager.png"
                  alt=""
                />
                <p className={styles.card_subtitle}>Jobfunction</p>
                <h4 className={styles.card_title}>PR manager</h4>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default EventManager;
