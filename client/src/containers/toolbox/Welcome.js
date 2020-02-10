import React from "react";
import styles from "../Toolbox.module.css";
const Welcome = () => {
  return (
    <>
      <div className={styles.container}>
        <section className>
          <p className={styles.smalltitle}>Welcome</p>
          <h1 className={styles.heading1}>
            Organizing your race
            <br />
            From start to finish.
          </h1>
        </section>
        <section className={styles.introduction}>
          <p className={styles.smalltitle}>Introduction</p>
          <p className={styles.largebody}>
            Over the last years, Race for the Cure grew to be the world’s
            largest sporting event in the fight against
            <span className={styles.highlight}> breast </span> cancer. But there
            is always room for growth.
          </p>
          <p className={styles.largebody}>
            This toolkit was created to help you organise a
            <span className={styles.highlight}> Race for the Cure </span>
            from start to finish. Whether you organise the Race for the first
            time or not, use this toolkit as a
            <span className={styles.highlight}> guideline </span> , a plan or
            simply as inspiration. because it allows you focus on your tasks
            while utilising their different talents and abilities.
          </p>
        </section>
      </div>
      <section className={styles.purple_bg}>
        <div className={styles.container}>
          <div className={styles.next}>
            <h3 className={styles.heading2}>Getting Started</h3>
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
                  src="../assets/starting.png"
                  alt=""
                />
              </div>
              <div>
                <p className={styles.card_subtitle}>chapter 1</p>
                <h4 className={styles.card_title}>starting your event</h4>
              </div>
            </div>
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
                <h4 className={styles.card_title}>Financial &amp; Sponsors</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section>
          <div className={styles.purple_card}>
            <div>
              <p className={styles.smalltitle + " " + styles.white}>
                Share experience
              </p>
              <p className={styles.heading3}>
                Share your knowledge to expand our toolbox.
              </p>
              <a className={styles.button} href="">
                Get in touch
              </a>
            </div>
            <p className={styles.copy}>
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
};
export default Welcome;
